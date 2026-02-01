# Normalització de categories i tags del blog, i control al workflow n8n

Aquest document explica com s’ha implementat la normalització de **categories** i **tags** als articles del blog (frontmatter en anglès canònic) i com es controla el **prompt** del workflow n8n perquè Gemini generi sempre categories i tags vàlids.

---

## 1. Objectiu

- **Frontmatter unificat:** Tots els articles tenen `categories` i `tags` en **anglès canònic** (p. ex. `"Lead Generation"`, `"AI Prospecting"`), independentment de l’idioma de l’article (CA, ES, EN).
- **URLs i cerques coherents:** Les pàgines de categoria (`/blog/category/lead-generation`) i de tag (`/blog/tag/ai-prospecting`) funcionen per tots els idiomes; les cerques per tag/categoria es fan per valor canònic.
- **Workflow n8n:** El prompt de Gemini inclou les llistes tancades de categories i tags perquè els articles generats automàticament respectin sempre aquests valors.

---

## 2. Normalització de categories

### 2.1 Font de veritat (codi)

- **`lib/blog-categories.ts`**
  - `BLOG_CATEGORY_KEYS`: claus de traducció (camelCase).
  - `CATEGORY_TO_KEY`: mapa **valor canònic en anglès → clau** (p. ex. `"Lead Generation"` → `leadGeneration`).
  - `getCategoryCanonicalFromSlug(slug)`: slug URL → valor canònic (per pàgines de categoria).
  - Les categories canòniques són:  
    `Lead Generation`, `B2B Sales`, `AI Prospecting`, `AI for Sales`, `Sales Automation`, `B2B Strategy`, `Local Business`, `CRM Integration`.

- **`messages/{ca,es,en}.json`**  
  - Secció `pages.blog.categoryLabels`: etiquetes mostrades a la UI per idioma (CA/ES/EN).

### 2.2 Script de normalització de categories

- **Fitxer:** `scripts/normalize-blog-categories.js`
- **Ús:** `node scripts/normalize-blog-categories.js`
- **Què fa:**
  - Recorre tots els `.md` a `content/blog/{ca,en,es}/`.
  - Llegeix el camp `categories: ["..."]` (un sol valor per article).
  - Aplica el mapa `OLD_TO_NEW`: qualsevol variant (CA/ES/EN) es reemplaça per la categoria canònica en anglès.
  - Escriu el fitxer amb `categories: ["Lead Generation"]` (o la que correspongui).
- **Fallback:** Si el valor no està al mapa, s’assigna `"Lead Generation"`.
- El mapa del script ha d’estar alineat amb les categories acceptades a `lib/blog-categories.ts` (i amb el prompt de n8n).

---

## 3. Normalització de tags

### 3.1 Font de veritat (codi)

- **`lib/blog-tags.ts`**
  - `BLOG_TAG_KEYS`: claus de traducció (camelCase).
  - `TAG_TO_KEY`: **valor canònic en anglès → clau** (p. ex. `"Lead Generation"` → `leadGeneration`).
  - **`TAG_VARIANT_TO_CANONICAL`:** mapa **qualsevol variant (CA/ES/EN) → valor canònic en anglès**. Inclou:
    - Valors canònics (identitat).
    - Variants en anglès (p. ex. `"AI-Powered Lead Generation"` → `"Lead Generation"`, `"Outbound Strategy"` → `"Outbound Sales"`).
    - Equivalents en castellà i català (p. ex. `"Captación de Leads con IA"` → `"Lead Generation"`, `"Vendes B2B"` → `"B2B Sales"`).
  - **`getCanonicalTag(tag)`:** retorna el tag canònic per qualsevol variant; si no hi ha entrada, retorna el valor netejat.
  - **`getTagSlug(tag)`:** accepta qualsevol variant, normalitza amb `getCanonicalTag` i genera el slug (p. ex. `lead-generation`).
  - **`getTagLabelKey(tag)`:** normalitza amb `getCanonicalTag` i retorna la clau de traducció (per a la UI).
  - **`getTagCanonicalFromSlug(slug)`:** slug URL → valor canònic (per pàgines de tag).

- **`lib/blog.ts`**
  - **`getPostsByTag(tag, locale)`:** compara per **tag canònic**. Fa servir `getCanonicalTag(tag)` i filtra posts on algun tag (també normalitzat) coincideix amb aquest canònic. Així, cerques per `"Lead Generation"` o per `"Captación de Leads con IA"` retornen els mateixos articles.

- **`app/[locale]/blog/tag/[tag]/page.tsx`**
  - `generateStaticParams`: genera entrades úniques per `(locale, tag slug)`; evita duplicats quan diverses variants es normalitzen al mateix slug (p. ex. `"Lead Generation"` i `"Captación de Leads con IA"` → `lead-generation`).

- **`messages/{ca,es,en}.json`**  
  - Secció `blog.tagLabels`: etiquetes dels tags per idioma (CA/ES/EN).

### 3.2 Script de normalització de tags

- **Fitxer:** `scripts/normalize-blog-tags.js`
- **Ús:** `node scripts/normalize-blog-tags.js`
- **Què fa:**
  - Recorre tots els `.md` a `content/blog/{ca,en,es}/`.
  - Llegeix el camp `tags: ["A", "B", ...]`.
  - Per cada tag, aplica el mapa `OLD_TO_CANONICAL` (ha d’estar alineat amb `TAG_VARIANT_TO_CANONICAL` de `lib/blog-tags.ts`).
  - Elimina duplicats (dins del mateix array) i escriu `tags: ["Lead Generation", "B2B Sales", ...]` amb valors canònics en anglès.
- Si un tag no està al mapa, es manté tal qual (no hi ha fallback com a categories).
- **Recomanació:** després d’afegir noves variants a `lib/blog-tags.ts`, actualitzar el mapa d’aquest script i tornar a executar-lo si cal.

---

## 4. Workflow n8n: control del prompt de categories i tags

### 4.1 On es controla

- **Workflow:** `docs/n8n-auto-blog-post.json`
- **Node:** **Write Articles** (Gemini).
- El **prompt** del node conté les instruccions de format del markdown i, dins del frontmatter, les **llistes tancades** de categories i tags que Gemini ha d’utilitzar.

### 4.2 Instruccions al prompt (resum)

Al cos del prompt es defineix el format del frontmatter, amb:

- **Categories:** exactament **UNA** categoria per article, **sempre en anglès**, escollida d’aquesta llista:
  - `Lead Generation`, `B2B Sales`, `AI Prospecting`, `AI for Sales`, `Sales Automation`, `B2B Strategy`, `Local Business`, `CRM Integration`

- **Tags:** **2 o 3** tags per article, **sempre en anglès**, escollits només d’aquesta llista:
  - `Lead Generation`, `B2B Sales`, `AI Prospecting`, `AI for Sales`, `Sales Automation`, `CRM Integration`, `Outbound Sales`, `Lead Enrichment`, `Hyper-segmentation`, `Prospecting`

A més, a la secció **Behavioral Rules** del mateix prompt es repeteix:

- **Categories:** utilitzar exactament UNA categoria de la llista (en anglès). Triar la que millor s’ajusti al tema.
- **Tags:** utilitzar 2 o 3 tags només de la llista (en anglès). No inventar altres tags.

Això fa que els articles generats per n8n arribin ja amb categories i tags vàlids i en anglès canònic, coherents amb `lib/blog-categories.ts` i `lib/blog-tags.ts`.

### 4.3 Modificar el workflow per canvis de categories/tags

Si s’afegeixen o es treuen categories o tags al projecte:

1. Actualitzar **`lib/blog-categories.ts`** o **`lib/blog-tags.ts`** (i, per tags, `TAG_VARIANT_TO_CANONICAL` si hi ha noves variants).
2. Actualitzar **`messages/ca.json`**, **`messages/es.json`**, **`messages/en.json`** (`categoryLabels` / `tagLabels`).
3. Actualitzar els scripts **`scripts/normalize-blog-categories.js`** i/o **`scripts/normalize-blog-tags.js`** (mapes `OLD_TO_NEW` / `OLD_TO_CANONICAL`).
4. **Editar el prompt del node Write Articles** a n8n: a `docs/n8n-auto-blog-post.json`, dins del node amb `"name": "Write Articles"`, a `parameters.messages.values[0].content`, buscar els trossos on es llisten les categories i els tags i substituir-los per les noves llistes (en anglès, tal com es defineixen a `lib/`).
5. (Opcional) Reimportar el workflow a n8n o sincronitzar el canvi segons com treballeu el JSON.

Així la font de veritat (codi + messages + scripts) i el prompt de Gemini queden alineats.

---

## 5. Resum: què actualitzar si canvien categories o tags

| Canvi | Fitxers a tocar |
|------|------------------|
| Nova categoria / nou tag | `lib/blog-categories.ts` o `lib/blog-tags.ts`, `messages/{ca,es,en}.json`, `scripts/normalize-blog-categories.js` o `normalize-blog-tags.js`, **prompt Write Articles** a `docs/n8n-auto-blog-post.json` |
| Nova variant (p. ex. traducció) d’un tag | `lib/blog-tags.ts` (`TAG_VARIANT_TO_CANONICAL`), `scripts/normalize-blog-tags.js` (`OLD_TO_CANONICAL`) |
| Nova variant d’una categoria | `scripts/normalize-blog-categories.js` (`OLD_TO_NEW`) |

---

## 6. Comandes útils

```powershell
# Normalitzar totes les categories dels articles (una categoria per article)
node scripts/normalize-blog-categories.js

# Normalitzar tots els tags dels articles (anglès canònic, sense duplicats)
node scripts/normalize-blog-tags.js
```

Es recomana executar els scripts després de canvis als mapes o quan s’importin articles amb categories/tags en altres idiomes o variants.

---

## 7. Referències ràpides

- Categories canòniques: `lib/blog-categories.ts` → `CATEGORY_TO_KEY` (keys).
- Tags canònics: `lib/blog-tags.ts` → `TAG_TO_KEY` (keys).
- Variants de tags (CA/ES/EN → canònic): `lib/blog-tags.ts` → `TAG_VARIANT_TO_CANONICAL`.
- Workflow n8n: `docs/n8n-auto-blog-post.json` → node **Write Articles** → `parameters.messages.values[0].content`.
- Revisió general del workflow: `docs/n8n-auto-blog-post-REVISION.md`.
