# Pla d'Optimització: PageSpeed Insights 100, SEO i Qualitat Web

> **Data:** 6 març 2025  
> **Última auditoria pre-push:** 8 març 2025  
> **Objectiu:** Notes màximes a Google PageSpeed Insights, pàgina ràpida i bon SEO arreu del projecte  
> **Referències:** skills accessibility, best-practices, core-web-vitals, performance, seo, web-quality-audit

---

## Auditoria pre-push (8 març 2025)

### Mètriques Lighthouse (localhost, mobile throttling)

| Mètrica | Valor | Objectiu | Estat |
|---------|-------|----------|-------|
| **FCP** | 1.2 s | < 1.8 s | ✅ Correcte |
| **LCP** | 1.8 s | < 2.5 s | ✅ Correcte |
| **CLS** | 0.006 | < 0.1 | ✅ Correcte |
| **Speed Index** | 3.9 s | < 3.4 s | ⚠️ Millorable |
| **TBT** | 350 ms | < 200 ms | ⚠️ Millorable |

### Correcció aplicada
- **Preload hero:** S'ha canviat de `hero.svg` a `hero-new.png` (imatge real del HeroImageBlock) i s'ha afegit `media="(min-width: 1024px)"` per no preloadar a mòbil on l'hero està amagat.

### Checklist ràpid pre-push
- [x] Preload hero coincideix amb la imatge real
- [x] productionBrowserSourceMaps: false
- [x] Skip link, focus visible, prefers-reduced-motion
- [x] Structured data, meta tags, sitemap, canonical
- [x] next/image amb priority/fetchPriority per hero
- [x] GA4 amb strategy="lazyOnload"
- [x] LazyLayoutParts per ScrollToTopButton i CookieConsent

### Recomanacions post-push
1. **Speed Index:** Reduir TBT (third-party, long tasks) per millorar Speed Index.
2. **Producció:** Verificar PageSpeed a https://nextleadin.com — els resultats de producció poden variar per CDN, caching i xarxa.

---

## Resum executiu

El projecte NextLeadIn (Next.js 16, React 19) ja té bones bases: `next/image` amb AVIF/WebP, fonts amb `font-display: swap`, preload de la imatge hero, skip link, focus visible, structured data SEO, sitemap i robots. Per arribar a **100 en Performance** cal prioritzar optimitzacions de LCP, INP, CLS i reducció de render-blocking.

---

## 1. PERFORMANCE I CORE WEB VITALS

### 1.1 LCP (Largest Contentful Paint) – Objectiu: < 2.5s

| Prioritat | Acció | Estat actual | Fitxers afectats |
|-----------|-------|--------------|------------------|
| **Alta** | Preload hero només a homepage | Preload a `app/layout.tsx` es carrega a TOTES les pàgines | `app/layout.tsx` |
| **Alta** | Hero image en format modern | `hero.png` – Next.js converteix a AVIF/WebP però el preload és .png | `app/layout.tsx`, `components/HeroSection.tsx` |
| **Alta** | Hero com a Server Component parcial | `HeroSection` és `'use client'` per animació – el text podria ser server | `components/HeroSection.tsx` |
| **Mitjana** | Preconnect/dns-prefetch | Ja existeix `dns-prefetch` per googletagmanager.com | - |
| **Mitjana** | Sizes responsive hero | `sizes` correcte; verificar que no hi hagi overflow | `HeroSection.tsx` |

**Recomanacions concretes:**

1. **Moure el preload del hero a la homepage**  
   Afegir el preload dins `app/[locale]/page.tsx` o crear un layout específic per la homepage, perquè no es carregui a /pricing, /blog, etc.

2. **Usar `loading="eager"` i `decoding="sync"`**  
   Ja tens `priority` i `fetchPriority="high"` – correcte. Mantenir.

3. **Optimitzar mida hero**  
   Comprovar que `/images/hero/hero.png` no sigui >500KB. Si és gran, generar versions optimitzades (ex: 1200px amplada màx) i servir via `next/image`.

4. **Considerar Server Component hybrid**  
   Separar el títol/descripció (estàtics per locale) en Server Component i deixar només el form + animació en Client Component per reduir JS inicial.

### 1.2 INP (Interaction to Next Paint) – Objectiu: < 200ms

| Prioritat | Acció | Estat actual | Fitxers afectats |
|-----------|-------|--------------|------------------|
| **Alta** | Defer third-party (vanilla-cookieconsent) | Carregat amb `await import()` – correcte | `CookieConsent.tsx` |
| **Mitjana** | Code splitting Framer Motion | `optimizePackageImports` ja inclou framer-motion | `next.config.js` |
| **Mitjana** | Lazy load components below-fold | `StickyNavigation`, `ScrollAnimation`, `ScrollToTopButton` es carreguen sempre | `app/[locale]/layout.tsx` |
| **Baixa** | IntersectionObserver cleanup | `ScrollAnimation` fa cleanup correcte | - |

**Recomanacions:**

1. **Dynamic import per components no crítics**  
   ```tsx
   const ScrollToTopButton = dynamic(() => import('@/components/ScrollToTopButton'), { ssr: false })
   const CookieConsent = dynamic(() => import('@/components/CookieConsent'), { ssr: false })
   ```

2. **Verificar handlers pesats**  
   Revisar `Header` (mobile menu), `HeroSection` (form submit, animació) – handlers curts <100ms.

3. **Evitar `console.log` en producció**  
   `CookieConsent.tsx` i altres tenen `console.log` – eliminar o envoltar amb `if (process.env.NODE_ENV === 'development')`.

### 1.3 CLS (Cumulative Layout Shift) – Objectiu: < 0.1

| Prioritat | Acció | Estat actual | Fitxers afectats |
|-----------|-------|--------------|------------------|
| **Alta** | Dimensions explícites a imatges | `next/image` ja gestiona aspect ratio; verificar `fill` sense `aspect-ratio` | `BlogPostCard.tsx` (fill), altres |
| **Mitjana** | Cookie consent no injecta layout | `CookieConsent` retorna `null` – OK | - |
| **Mitjana** | TrustedBySection carousel | CSS `animate-scroll` – transform, no layout; `will-change: transform` – correcte | - |
| **Baixa** | Font swap FOUT | `font-display: swap` – pot causar petit shift; opcional: `size-adjust` per fallback | `app/layout.tsx` |

**Recomanacions:**

1. **BlogPostCard amb fill**  
   Assegurar contenidor amb `aspect-ratio` o `min-height` per evitar salt:
   ```tsx
   <div className="relative md:w-80 h-48 md:h-auto aspect-[4/3]">
   ```

2. **Imatges integrations/testimonials**  
   Sempre `width` i `height` o `sizes` correcte – ja ho tenen.

### 1.4 Altres optimitzacions Performance

| Tema | Acció |
|------|-------|
| **Compressió** | `compress: true` a next.config – OK |
| **Imatges** | AVIF/WebP, qualities 75/85 – OK |
| **Fonts** | `display: 'swap'`, `next/font` – OK |
| **GA4** | `strategy="lazyOnload"` – OK |
| **PWA** | next-pwa desactivat a dev – OK |
| **Tree-shaking** | `optimizePackageImports` – OK |

---

## 2. ACCESSIBILITAT (WCAG 2.1)

| Prioritat | Acció | Estat | Fitxer |
|-----------|-------|-------|--------|
| **Alta** | Skip link | ✅ Implementat | `app/[locale]/layout.tsx` |
| **Alta** | Focus visible | ✅ Implementat | `app/globals.css` |
| **Alta** | prefers-reduced-motion | ✅ Implementat (excepció animate-scroll) | `app/globals.css` |
| **Mitjana** | aria-label botons icona | Header burger: `aria-label` dinàmic – verificar locale | `Header.tsx` |
| **Mitjana** | Contrast color | Revisar gray-600, gray-500 sobre fons blanc | Tailwind |
| **Mitjana** | SVGs decoratius | `aria-hidden="true"` on correspongui | Diversos components |
| **Baixa** | Idioma `lang` | `SetHtmlLang` – OK | `SetHtmlLang` |

**Recomanacions:**

1. **Traduir aria-labels**  
   El botó del menú mòbil té `aria-label` fix en català – usar `useTranslations` per a 'Tanca el menú' / 'Obre el menú' segons locale.

2. **Verificar contrast**  
   Executar axe DevTools o Lighthouse Accessibility i corregir qualsevol fallada de contrast.

3. **Labels als formularis**  
   Hero form té `label htmlFor="hero-email"` – OK.

---

## 3. SEO

| Prioritat | Acció | Estat | Fitxer |
|-----------|-------|-------|--------|
| **Alta** | Títols únics | ✅ `generateAIOptimizedMetadata` per pàgina | `lib/seo-metadata.ts` |
| **Alta** | Meta descriptions | ✅ | - |
| **Alta** | Canonical URLs | ✅ | - |
| **Alta** | Sitemap | ✅ | `app/sitemap.ts` |
| **Alta** | robots.txt | ✅ | `app/robots.ts` |
| **Alta** | Structured data | ✅ Organization, WebSite, FAQ, Product, etc. | `AIStructuredData`, `BlogJsonLd` |
| **Mitjana** | Hreflang | `alternates.languages` a metadata – OK | `seo-metadata.ts` |
| **Mitjana** | OG images | ✅ | - |
| **Baixa** | Breadcrumbs JSON-LD | Implementat on cal | - |

**Punt a millorar:**

- **Sitemap `lastModified`:** Algunes URLs usen `new Date()` – acceptable. Assegurar que les dates dels posts del blog són reals (ja ho fan).

---

## 4. BEST PRACTICES

| Prioritat | Acció | Estat | Nota |
|-----------|-------|-------|------|
| **Alta** | HTTPS | Assumit a producció | - |
| **Alta** | Viewport | Next.js el proporciona | - |
| **Alta** | Charset | Next.js el proporciona | - |
| **Mitjana** | console.log en prod | Diversos `console.log` | Eliminar o condicionar |
| **Mitjana** | Source maps prod | Verificar que no s'exposin | `next.config` |
| **Baixa** | Deprecations | No s'han detectat document.write, sync XHR | - |

**Recomanació:**

- Afegir a `next.config` (si cal):
  ```js
  productionBrowserSourceMaps: false
  ```
  (per defecte Next.js no exposa source maps a prod; comprovar)

---

## 5. WEB QUALITY – CHECKLIST RÀPID

### Abans de cada deploy
- [ ] Core Web Vitals passant (LCP < 2.5s, INP < 200ms, CLS < 0.1)
- [ ] Sense errors d'accessibilitat (axe/Lighthouse)
- [ ] Sense errors a la consola
- [ ] HTTPS correcte
- [ ] Meta tags presents

### Setmanal
- [ ] Search Console – incidències
- [ ] Tendència Core Web Vitals
- [ ] `npm audit`

### Mensual
- [ ] Lighthouse complet (Performance, Accessibility, SEO, Best Practices)
- [ ] Actualització dependències

---

## 6. PLAN D'ACCIÓ PRIORITZAT

### Fase 1 – Impacte alt (1–2 dies)
1. **Preload hero només a homepage** – evita carregar imatge innecessària a altres rutes.
2. **Eliminar/condicionar console.log** – evita soroll i possibles penalitzacions.
3. **Dynamic import per ScrollToTopButton i CookieConsent** – redueix JS inicial.
4. **Verificar mida de hero.  png** – si >500KB, optimitzar.

### Fase 2 – Impacte mitjà (2–3 dies)
5. **Hybrid HeroSection** – títol/descripció en Server Component.
6. **Traduccions aria-label** al Header.
7. **Aspect-ratio contenidor BlogPostCard** per evitar CLS.
8. **Audit de contrast** amb axe i correccions.

### Fase 3 – Poliment
9. **Font fallback metrics** (`size-adjust`, `ascent-override`) si hi ha FOUT visible.
10. **content-visibility** per seccions llargues (opcional).
11. **Lazy hydration** per modals no crítics (ex. VideoModal).

---

## 7. COMANDES ÚTILS

```powershell
# Lighthouse CLI (lab)
npx lighthouse https://nextleadin.com --output html --output-path ./lighthouse-report.html

# Només Performance
npx lighthouse https://nextleadin.com --only-categories=performance

# Auditoria accessibilitat
npx lighthouse https://nextleadin.com --only-categories=accessibility

# npm audit
npm audit
npm audit fix
```

---

## 8. MÈTRIQUES OBJECTIU

| Mètrica | Objectiu | Eina |
|---------|----------|------|
| Performance | 90–100 | PageSpeed Insights |
| Accessibility | 95–100 | Lighthouse |
| Best Practices | 95–100 | Lighthouse |
| SEO | 95–100 | Lighthouse |
| LCP | < 2.5s | CrUX / Lighthouse |
| INP | < 200ms | CrUX / Lighthouse |
| CLS | < 0.1 | CrUX / Lighthouse |

---

*Document generat segons les skills: accessibility, best-practices, core-web-vitals, performance, seo, web-quality-audit*
