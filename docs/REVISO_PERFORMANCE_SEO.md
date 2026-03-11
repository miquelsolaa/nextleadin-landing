# Revisió Performance i SEO — NextLeadIn

> **Data:** 11 març 2025  
> **Basat en:** PLA_PAGESPEED_SEO_QUALITY.md, skills performance, seo, core-web-vitals

---

## Resum executiu

| Àrea | Estat | Puntuació estimada |
|------|-------|--------------------|
| **Performance** | Bones bases, millorable | 85–92 |
| **SEO** | Molt bo | 95–100 |
| **Core Web Vitals** | LCP i CLS correctes; TBT millorable | - |

---

## 1. PERFORMANCE

### 1.1 Correcte

| Element | Implementació |
|---------|---------------|
| **Imatges** | `next/image` amb AVIF/WebP, qualities 75/85 |
| **Fonts** | `next/font`, `display: swap`, `adjustFontFallback: true` |
| **GA4** | `strategy="lazyOnload"` |
| **Compressió** | `compress: true` a next.config |
| **Tree-shaking** | `optimizePackageImports` (lucide-react, radix, framer-motion) |
| **Source maps** | `productionBrowserSourceMaps: false` |
| **PWA** | Migració a Serwist (0 vulnerabilitats) |

### 1.2 Millorat (fet)

#### Preload hero (corregit)

**Ubicació:** `app/[locale]/(home)/layout.tsx`

S’ha eliminat el preload manual del PNG original. Ara només es confia en `priority` i `fetchPriority="high"` del component `HeroImageBlock`, que carrega la versió optimitzada (AVIF/WebP) via `next/image`.

---

#### Speed Index i TBT (Total Blocking Time)

Segons l’auditoria pre-push (8 març):
- **Speed Index:** 3.9 s (objectiu &lt; 3.4 s)
- **TBT:** 350 ms (objectiu &lt; 200 ms)

**Possibles causes:**
- Long tasks al main thread
- Scripts de tercers (GA4, etc.)
- Framer Motion i altres JS no crític

**Fet:** `ScrollToTopButton` i `CookieConsent` es carreguen via dynamic import a `LazyLayoutParts.tsx` amb `ssr: false`. Els `console.log` estan condicionats amb `process.env.NODE_ENV === 'development'`.

---

#### Mida imatge hero (verificat)

**Fitxer:** `/images/hero/hero-new.png` — ~181 KB (&lt; 500 KB). OK.

---

## 2. CORE WEB VITALS

### 2.1 LCP (Largest Contentful Paint) — &lt; 2.5 s

| Element | Estat |
|---------|-------|
| Hero amb `priority` i `fetchPriority="high"` | Correcte |
| `width` i `height` a HeroImageBlock | Correcte (1292×1012) |
| Sense preload manual (evita duplicar càrrega PNG vs optimitzada) | Correcte |

---

### 2.2 INP (Interaction to Next Paint) — &lt; 200 ms

| Element | Estat |
|---------|-------|
| CookieConsent amb `await import()` | Correcte |
| optimizePackageImports | Correcte |
| ScrollToTopButton i CookieConsent via dynamic import (LazyLayoutParts) | Correcte |

---

### 2.3 CLS (Cumulative Layout Shift) — &lt; 0.1

| Element | Estat |
|---------|-------|
| BlogPostCard | Contenidor amb `aspect-[4/3]` i `md:min-h-[240px]` — correcte |
| HeroImageBlock | `width` i `height` definits — correcte |
| next/image | Gestiona aspect ratio — correcte |

---

## 3. SEO

### 3.1 Correcte

| Element | Implementació |
|---------|---------------|
| **Títols únics** | `generateAIOptimizedMetadata` per pàgina |
| **Meta descriptions** | Per pàgina i idioma |
| **Canonical URLs** | Via metadata |
| **Sitemap** | `app/sitemap.ts` amb posts, pàgines, industries, etc. |
| **robots.txt** | `app/robots.ts` amb regles per user-agent |
| **Structured data** | Organization, WebSite, FAQ, Product, Blog, Breadcrumbs |
| **Hreflang** | `alternates.languages` a metadata |
| **OG images** | Configurades |
| **URLs** | Estructura clara, amb guions |

### 3.2 Consideracions

#### Crawlers de eines SEO bloquejats

**Ubicació:** `app/robots.ts`

AhrefsBot, SemrushBot, MJ12bot, DotBot, MajesticSEO estan a `disallow: '/'`.

**Impacte:** Aquestes eines no poden analitzar el lloc.

**Recomanació:** Si cal fer audits amb Ahrefs/Semrush, alliberar-los o limitar el rate amb `Crawl-delay` (quan el robot ho suporti).

---

#### Sitemap i manifest

- Sitemap amb `lastModified` real per posts — correcte.
- Manifest a `/site.webmanifest` — correcte.

---

## 4. CHECKLIST RÀPID

### Performance
- [x] next/image amb priority per hero
- [x] Formats AVIF/WebP
- [x] Fonts amb font-display: swap
- [x] GA4 lazyOnload
- [x] Treure preload hero (evita duplicar càrrega PNG vs optimitzada)
- [x] Dynamic import ScrollToTopButton i CookieConsent (LazyLayoutParts)
- [x] Condicionar console.log en producció (NODE_ENV === 'development')

### SEO
- [x] Títols únics
- [x] Meta descriptions
- [x] Canonical URLs
- [x] Sitemap
- [x] robots.txt
- [x] Structured data (JSON-LD)
- [x] Hreflang
- [x] OG tags

### Core Web Vitals
- [x] LCP optimitzat (hero)
- [x] CLS baix (aspect-ratio, dimensions)
- [x] TBT mitigat (lazy load ScrollToTopButton, CookieConsent)

---

## 5. ORDRE D’ACCIÓ RECOMANAT

### Fase 1 — Fet
1. [x] Treure el preload del hero a `(home)/layout.tsx`.
2. [x] Condicionar `console.log` a `CookieConsent.tsx` i `cookieConsentConfig.ts`.
3. [x] Verificar mida de `hero-new.png` (~181 KB &lt; 500 KB).
4. [x] Dynamic import de `ScrollToTopButton` i `CookieConsent` via LazyLayoutParts.

### Fase 2 — Verificació
5. Executar Lighthouse a producció (https://nextleadin.com) per validar mètriques reals.

### Fase 3 — Poliment (opcional)
6. Considerar hybrid per HeroSection (títol/descripció en Server Component) si TBT continua alt.
7. Revisar si cal alliberar crawlers d’eines SEO a robots.txt per audits Ahrefs/Semrush.

---

## 6. COMANDES ÚTILS

```powershell
# Lighthouse contra producció
npx lighthouse https://nextleadin.com --output html --output-path ./lighthouse-report.html

# Només Performance
npx lighthouse https://nextleadin.com --only-categories=performance

# Auditoria SEO
npx lighthouse https://nextleadin.com --only-categories=seo
```

---

*Document generat segons les skills: performance, seo, core-web-vitals*
