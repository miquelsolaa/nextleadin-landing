# Google Search Console — Revisió "Rastreada: actualmente sin indexar"

**Data:** 24/03/2026  
**Pàginas afectades:** 15

## URLs reportades (exemples)

| URL | Observació |
|-----|------------|
| `/en/industries/restaurants` | Pàgina vàlida, en sitemap |
| `/industries/physiotherapy` | Pàgina vàlida, en sitemap |
| `/en/blog` | Pàgina vàlida, en sitemap |
| `/favicon.ico` | Recurs (imatge), no és una pàgina HTML |
| `/blog/automatizacion-leads-guia-completa` | Post blog ES, en sitemap |
| `/en/blog/como-encontrar-leads-cualificados` | Post blog EN, en sitemap |
| `/resources/local-prospecting-guide` | **404** — pàgina no existeix (només "Coming soon") |
| `/en/terms-and-conditions` | Pàgina vàlida, en sitemap |
| `/en/blog/category/ai prospecting` | URL amb espai — redirect 301 a `ai-prospecting` |
| `/ca/compare/apollo-io-vs-zoominfo-vs-nextleadin` | Pàgina vàlida, en sitemap |

## Accions implementades

1. **Redirect `/resources/local-prospecting-guide`** — Afegit 301 a `/resources` (i variants amb locale) perquè la pàgina no existeix però Google l’havia rastreada.

## Per què Google no indexa ("Rastreada: actualmente sin indexar")

Google ha rastread la pàgina però ha decidit no incloure-la a l’índex. Causes habituals:

1. **Contingut de poc valor** — Pàgines legals (terms, privacy), índex de blog, comparadors que semblen poc diferents entre si.
2. **Senyals de contingut duplicat** — Variants d’idioma amb hreflang mal configurat o canonicals incorrectes.
3. **Prioritat baixa al sitemap** — Prioritat 0.6–0.7 per a industries, blog, resources.
4. **Pressupost de rastreig** — Google prioritza pàgines amb més senyals d’autoritat/valor.

## Verificacions recomanades

### 1. Canonicals i hreflang

- Les pàgines amb `generateAIOptimizedMetadata` generen `alternates.canonical` i `alternates.languages`.
- **Inconsistència detectada:** diverses pàgines utilitzen `validLocale === 'ca'` per a l’URL sense prefix, mentre que `i18n/routing.ts` defineix `defaultLocale: 'es'`. Si l’URL sense prefix és castellà, els canonicals de `/ca/*` haurien de ser `nextleadin.com/ca/...`, no `nextleadin.com/...`.

### 2. favicon.ico

- No cal canviar res: és un recurs, no una pàgina HTML.
- És normal que aparegui com "sin indexar" al GSC.

### 3. Categoria blog "ai prospecting"

- Ja existeix redirect 301 de `ai%20prospecting` → `ai-prospecting` a `next.config.js`.
- Enllaços interns usen `getCategorySlug()` (format correcte amb guions).

### 4. Millorar probabilitat d’indexació

- **Contingut:** Afegir més text i valor únic a industries, comparadors i pàgines legals.
- **Internal linking:** Enllaçar més des de la home i pàgines fortes cap a les afectades.
- **Prioritat sitemap:** Pujar `priority` per a industries (ex. 0.7 → 0.8) si són estratègiques.
- **Indexació manual:** A GSC, demanar indexació per a les URLs més importants.

## Estat de configuració actual

- `robots.txt`: permet `/`, `/en/`, `/blog/`, `/industries/`, `/resources/`, etc.
- `sitemap.xml`: inclou totes les pàgines (estàtiques, blog, industries, comparisons, etc.).
- Redirects: categories amb espais, local-prospecting-guide, get-started, comparador, etc.
