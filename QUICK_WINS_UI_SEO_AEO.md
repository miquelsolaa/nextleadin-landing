# Quick wins: UI, SEO i AEO

Resum d’accions ràpides per millorar la interfície (UI), el SEO i l’Answer Engine Optimization (AEO).

---

## 1. SEO

### 1.1 Imatges Open Graph inexistents
**Problema:** A `lib/seo-metadata.ts` es referencien OG images (`/images/og/home-ca.jpg`, `pricing-ca.jpg`, etc.) però a `public/images/og/` només hi ha `README.md`; no hi ha fitxers d’imatge.

**Acció:**  
- Opció A: Crear imatges OG 1200×630 per a cada pàgina/idioma (home, pricing, contact, faq, compare) i pujar-les a `public/images/og/`.  
- Opció B: Usar un fallback únic (p. ex. `default.jpg` o el logo) i assegurar que `metadataBase` i l’`url` de la imatge en metadata apuntin a una URL absoluta vàlida.

**Impacte:** Millor aspecte en xarxes socials i en resultats de cerca (rich previews).

---

### 1.2 Robots.txt: permetre `/compare`
**Problema:** A `app/robots.ts` les regles `allow` llisten `/pricing/`, `/contact/`, `/faq/`, etc., però no `/compare/`, `/en/compare/`, `/es/compare/`.

**Acció:** Afegir a totes les regles (userAgent `*`, Googlebot, Bingbot):

```ts
'/compare/',
'/en/compare/',
'/es/compare/',
```

**Impacte:** Els comparadors es poden indexar i aparèixer als resultats de cerca.

---

### 1.3 Structured data de `seo-metadata.ts` no s’injecta com a JSON-LD
**Problema:** A `lib/seo-metadata.ts` hi ha schemas ric (Organization, WebSite, Product per pricing, **FAQPage** per FAQ, ContactPage per contact), però aquests no es passen a cap component que renderitzi JSON-LD. `AIStructuredData` genera el seu propi conjunt (BreadcrumbList, LocalBusiness, HowTo, etc.) i **no** fa servir `seoConfig[page][locale].structuredData`.

**Acció:**  
- A les pàgines FAQ, Pricing i Contact: obtenir els schemas de `seo-metadata` (amb `generateAIStructuredData('faq'|'pricing'|'contact', locale)`) i passar-los com a `customData` a `<AIStructuredData>`, **o**  
- Modificar `AIStructuredData` perquè, segons `page` i `locale`, importi i concateni `seoConfig[page]?.[locale]?.structuredData` als schemas que ja genera.

**Impacte:** FAQ snippets a Google, Product/Offer a pàgina de preus, ContactPage i dades d’empresa ben interpretades per cercadors i AEO.

---

### 1.4 Canonical i hreflang
**Estat:** Ja es generen `canonical` i `alternates.languages` (hreflang) des de `generateAIOptimizedMetadata`. Revisar a Google Search Console que les URLs canonicals i les variants d’idioma es detectin correctament.

**Acció opcional:** Revisar que `x-default` (ara `es`) sigui el que voleu per a usuaris sense preferència d’idioma.

---

## 2. AEO (Answer Engine Optimization)

### 2.1 FAQPage JSON-LD a la pàgina FAQ
**Problema:** El schema FAQPage definit a `seo-metadata.ts` per la pàgina FAQ no es renderitza en cap lloc; per tant, els motors de resposta (Google, assistents, etc.) no reben les preguntes/respostes estructurades.

**Acció:** Inyectar els schemas de la pàgina (incloent FAQPage) com a JSON-LD, seguint el punt 1.3. Assegurar que la pàgina FAQ inclou `<AIStructuredData page="faq" ... customData={faqStructuredData} />` (o equivalent) amb el FAQPage de `seo-metadata`.

**Impacte:** Més probabilitat d’aparèixer a “Preguntes relacionades” i a respostes generades per IA.

---

### 2.2 Respostes directes i estructura de contingut
**Recomanació:** A les pàgines clau (home, pricing, FAQ, compare), mantenir:
- Un sol **H1** per pàgina, clar i orientat a la intenció de cerca.
- **H2/H3** amb preguntes o titolets que es puguin usar com a featured snippets (frases curtes, respostes en el paràgraf següent).
- Llistes numerades per a “com fer X” (coherent amb el HowTo que ja genereu).
- Taules de comparació ben marcades (semànticament) per a comparadors.

**Acció:** Revisar que la pàgina FAQ tingui un únic H1 i que cada pregunta estigui en un H2/H3 amb la resposta immediatament a sota.

---

### 2.3 Consistència HowTo vs preus
**Problema:** A `AIStructuredData.tsx`, el schema SoftwareApplication per a home/pricing indica preus 19–99 € (Inici, Pro, Elite), mentre que a `seo-metadata.ts` i a la pàgina de preus els plans són Local Business (79 €), Professional (199 €), Enterprise (599 €).

**Acció:** Unificar els preus als schemas (SoftwareApplication, Product, HowTo) amb els que es mostren a la web (79 / 199 / 599 €) per evitar confusió en assistents i comparadors.

---

## 3. UI

### 3.1 Enllaç “Salta al contingut”
**Problema:** No hi ha enllaç “Skip to main content” per a navegació amb teclat i lectors de pantalla.

**Acció:**  
- Afegir un enllaç fix al capdamunt (visible en focus), p. ex. `<a href="#main-content" class="...">Salta al contingut</a>`.  
- Afegir `id="main-content"` a l’element `<main>` del layout (a `app/[locale]/layout.tsx`).

**Impacte:** Millora d’accessibilitat i UX amb teclat.

---

### 3.2 Focus visible als enllaços i botons
**Acció:** Revisar que tots els enllaços i botons principals (Header, Footer, CTA, FAQ) tinguin `:focus-visible` ben visible (outline o box-shadow). Si cal, afegir estils globals a `globals.css`, per exemple:

```css
a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

**Impacte:** Navegació amb teclat més clara i compliment d’accessibilitat.

---

### 3.3 Alt text més descriptius (SEO + accessibilitat)
**Estat:** Molts components ja tenen `alt`; alguns es poden fer més útils per a SEO i AEO.

**Exemples:**  
- `CTASection`: en lloc de `alt="CTA illustration"`, usar una descripció breu que inclogui el producte o la acció (p. ex. “Mockup de la plataforma NextLeadIn amb llistat de leads i mapa”).  
- Testimonials: `alt={testimonial.author.name}` és correcte; es pot estendre amb “, testimoni” si ho consideres útil sense fer-ho redundant.

**Impacte:** Millor indexació d’imatges i millor context per a usuaris amb lectors de pantalla.

---

### 3.4 Enllaços del CTA amb locale
**Problema:** A `CTASection.tsx` els enllaços són `<Link href="/contact">`. Si el routing és per locale (`/[locale]/...`), convé usar el Link d’i18n per preservar l’idioma.

**Acció:** Usar `<Link href="/contact">` del `@/i18n/routing` (o l’equivalent del projecte) perquè “Contacte” obri dins del mateix idioma.

**Impacte:** UX coherent en entorn multilingüe.

---

### 3.5 Imatges amb `next/image` i dimensions
**Estat:** Hero i CTA ja fan servir `next/image`. Assegurar que les imatges importants tinguin `width`/`height` (o `sizes`) adequats per evitar layout shift i millorar LCP.

**Acció:** Revisar que les imatges del Hero i de la CTA tinguin `priority` on correspongui (above the fold) i `sizes` si són responsives.

---

## 4. Resum prioritari

| Prioritat | Àrea | Acció |
|-----------|------|--------|
| Alta      | SEO  | Crear o definir fallback per a imatges OG i assegurar que existeixen |
| Alta      | SEO  | Inyectar structured data de `seo-metadata.ts` (FAQ, Product, ContactPage, etc.) com a JSON-LD |
| Alta      | AEO  | Activar FAQPage JSON-LD a la pàgina FAQ (via punt anterior) |
| Alta      | SEO  | Afegir `/compare/` (i variants d’idioma) a `robots.ts` allow |
| Mitjana   | AEO  | Alinear preus als schemas (79/199/599 €) amb la pàgina de preus |
| Mitjana   | UI   | Afegir “Salta al contingut” i `id="main-content"` al `<main>` |
| Mitjana   | UI   | Revisar focus visible en enllaços i botons |
| Baixa     | UI   | CTA amb Link d’i18n; alt texts més descriptius on falti |

Si implementes primer les accions d’alta prioritat (OG, JSON-LD des de seo-metadata, robots compare), obtindràs el major impacte en SEO i AEO amb el mínim canvi de codi.
