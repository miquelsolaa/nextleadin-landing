# Optimització de Netlify Functions en projectes Next.js

## El problema

Quan despleguem un projecte Next.js a Netlify amb el plugin `@netlify/plugin-nextjs`, les funcionalitats de Next.js es converteixen automàticament en **Netlify Functions** (funcions serverless).

### Símptomes

- Alt consum d'invocacions de funcions (ex: 16.000+ invocacions amb menys de 1.000 visites)
- Errors repetits als logs com:
  ```
  ERROR Error in BlogPostPage: Error: NEXT_HTTP_ERROR_FALLBACK;404
  ```
- Temps d'execució alt per cada request (2-4 segons)

### Causa arrel

Per defecte, Next.js permet **fallback dinàmic** a les pàgines amb `generateStaticParams()`. Això significa que:

1. Les pàgines amb slugs definits a `generateStaticParams()` es generen estàticament (SSG)
2. **Però** quan algú (bots, crawlers) accedeix a un slug que NO existeix, Next.js intenta generar-lo dinàmicament (SSR)
3. Això executa una funció serverless → consumeix una invocació
4. Després retorna 404, però **ja ha consumit la invocació**

Els bots i crawlers accedeixen constantment a URLs inexistents, generant milers d'invocacions innecessàries.

---

## La solució

Afegir `export const dynamicParams = false` a totes les pàgines dinàmiques.

### Què fa `dynamicParams = false`?

- Diu a Next.js que **només** els slugs definits a `generateStaticParams()` són vàlids
- Qualsevol altre slug retorna **404 immediatament** sense executar SSR
- El 404 es serveix des del CDN, sense consumir invocacions de funcions

### Exemple

**Abans (problemàtic):**

```tsx
// app/[locale]/blog/[slug]/page.tsx

export async function generateStaticParams() {
  const allSlugs = getAllPostSlugs()
  return allSlugs.map(({ slug, locale }) => ({
    slug,
    locale,
  }))
}

export default async function BlogPostPage({ params }) {
  // ... codi de la pàgina
}
```

**Després (optimitzat):**

```tsx
// app/[locale]/blog/[slug]/page.tsx

export const dynamicParams = false  // ← AFEGIR AQUESTA LÍNIA

export async function generateStaticParams() {
  const allSlugs = getAllPostSlugs()
  return allSlugs.map(({ slug, locale }) => ({
    slug,
    locale,
  }))
}

export default async function BlogPostPage({ params }) {
  // ... codi de la pàgina
}
```

---

## Pàgines que cal revisar

Busca totes les pàgines amb `generateStaticParams()` i afegeix `dynamicParams = false`:

```bash
# Trobar pàgines amb generateStaticParams
grep -r "generateStaticParams" --include="*.tsx" app/
```

Tipus de pàgines típiques:

| Tipus | Exemple de ruta |
|-------|-----------------|
| Blog posts | `app/[locale]/blog/[slug]/page.tsx` |
| Categories | `app/[locale]/blog/category/[category]/page.tsx` |
| Tags | `app/[locale]/blog/tag/[tag]/page.tsx` |
| Productes | `app/[locale]/products/[slug]/page.tsx` |
| Pàgines de contingut | `app/[locale]/[slug]/page.tsx` |

---

## Altres fonts d'invocacions

### 1. Image Optimization

`next/image` utilitza una funció serverless per optimitzar imatges. Per reduir invocacions:

**Opció A: Utilitzar imatges pre-optimitzades**
```tsx
// Utilitza imatges ja optimitzades (WebP, mides correctes)
<img src="/images/hero.webp" alt="..." />
```

**Opció B: Desactivar optimització a Netlify**
```toml
# netlify.toml
[build.environment]
  NEXT_DISABLE_NETLIFY_EDGE = "true"
```

**Opció C: Utilitzar un CDN extern** (Cloudinary, imgix, etc.)

### 2. API Routes

Les API Routes (`app/api/*`) sempre s'executen com a funcions. Revisa si tens APIs que es criden innecessàriament.

### 3. Middleware

El middleware de Next.js s'executa a cada request. Assegura't que sigui lleuger.

---

## Com verificar el canvi

### 1. Revisar els logs de Netlify

Després del desplegament, monitoritza:
- **Functions** → **Logs**: Hauries de veure menys invocacions
- **Functions** → **Usage**: El comptador hauria d'augmentar més lentament

### 2. Comprovar localment

```bash
npm run build
```

Al output del build, les pàgines amb `dynamicParams = false` apareixeran com:
```
├ ● /[locale]/blog/[slug]  (SSG: X prerendered)
```

---

## Checklist per a nous projectes

- [ ] Afegir `dynamicParams = false` a TOTES les pàgines amb `generateStaticParams()`
- [ ] Revisar robots.txt per bloquejar bots agressius
- [ ] Considerar pre-optimitzar imatges en lloc d'utilitzar optimització dinàmica
- [ ] Minimitzar l'ús d'API Routes per a funcionalitats que poden ser estàtiques
- [ ] Afegir `export const dynamic = 'force-static'` a `sitemap.ts` i `robots.ts`

---

## Recursos

- [Next.js Dynamic Routes - dynamicParams](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams)
- [Netlify Plugin Next.js](https://docs.netlify.com/integrations/frameworks/next-js/overview/)
- [Next.js Static Generation](https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic-rendering)

---

## Historial de canvis

| Data | Canvi |
|------|-------|
| 2025-02-28 | Afegit `dynamicParams = false` a 8 pàgines dinàmiques per reduir invocacions de funcions |
