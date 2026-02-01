# Revisió del workflow n8n: generació automàtica de posts del blog

Aquest document resumeix la revisió del workflow `n8n-auto-blog-post.json` per al projecte **nextleadin-landing**.  
**Última revisió:** workflow actual (3 idiomes, repo nextleadin-landing, Data Table Keywords NextLeadIn).

---

## 1. Flux del workflow (estat actual)

| Ordre | Node | Funció |
|-------|------|--------|
| 1 | Schedule Trigger | Cada **3 dies** a les **01:00** |
| 2 | getTodayDate | Genera `$today` (YYYY-MM-DD) |
| 3 | Get row(s) | 1 fila de la Data Table **"Keywords NextLeadIn"** amb `processed = false` |
| 4 | Write Articles | Gemini genera **3** articles (EN, CA, ES) en JSON |
| 5 | Extract Articles | Parseja JSON, valida 3 articles, `validLocales = ['en','ca','es']` |
| 6 | Get Image from Pexels1 | 1 imatge Pexels amb `topic` |
| 7 | Update Markdowns with Image URL | Inserció URL Pexels al frontmatter `image` |
| 8 | Split Articles | 3 items, `filePath: content/blog/${locale}/${slug}.md` |
| 9 | If EN | EN → Create /en Blog Post; altrament → If ES |
| 10 | If ES | ES → Create /es Blog Post; CA → Create /ca Blog Post |
| 11 | Create /en, /ca, /es Blog Post | GitHub: repo **nextleadin-landing**, owner miquelsolaa |
| 12 | Merge After Blog Posts, Merge 2, Limit 1 | Les 3 branques (EN, CA, ES) es fusionen; Limit 1 passa 1 item a Update row(s). |
| 13 | Update row(s) | Connectat des de **Limit 1**; marca `processed: true` (s'executa una vegada). |

---

## 2. El que ja està bé (corregit respecte a la revisió anterior)

- **Repositori GitHub:** tots els nodes Create Blog Post fan servir **nextleadin-landing** (miquelsolaa/nextleadin-landing).
- **Ruta dels fitxers:** Split Articles usa `content/blog/${article.locale}/${slug}.md` (correcte per a aquest projecte).
- **Prompt Gemini:** adaptat a **NextLeadIn** (B2B, lead generation, IA, 3 idiomes, frontmatter amb author, categories, tags, published).
- **Data Table:** "Keywords NextLeadIn" (ID FzxheZYY5SkJgBnd), columnes `keyword` i `processed` (minúscules).
- **3 idiomes:** EN, CA, ES amb nodes Create /en, /ca, /es i lògica If EN → If ES.
- **Update row(s):** s'executa una vegada després de Merge + Limit (més robust que dependre només de la branca CA).
- **$today:** al prompt s'usa `{{ $('getTodayDate').item.json.$today }}` (ja corregit).

---

## 3. Problemes i riscos que cal revisar

### 3.1 Data del dia (`$today`) — CORREGIT

- Al prompt de Write Articles s'usa `{{ $('getTodayDate').item.json.$today }}`, de manera que la data del dia arriba correctament des del node getTodayDate.

---

### 3.2 Nom del camp de la Data Table al prompt

- Al prompt surt: `Topic: {{ $json.keyword }}`.
- La taula té la columna **keyword** (minúscula). Si la taula retorna exactament `keyword`, `$json.keyword` funciona.
- **Comprovar** a n8n que la columna de la taula es diu `keyword` (minúscula) i que el valor es veu bé al prompt.

---

### 3.3 API Pexels: paràmetre `size` — CORREGIT

- S'ha eliminat el paràmetre `size` de la crida a Pexels. Ara només s'envien `query`, `per_page` i `orientation`, que són els paràmetres documentats per l'API v1.

---

### 3.4 Robustesa d'Update row(s) — CORREGIT

- S'han afegit **Merge After Blog Posts** (EN + CA), **Merge After Blog Posts 2** (resultat + ES) i **Limit 1** (maxItems: 1). Les tres branques Create Blog Post conflueixen en Merge → Limit → Update row(s). Així Update row(s) s'executa una vegada independentment de l'ordre dels items i la fila es marca com a processada sempre que els 3 fitxers s'hagin creat.

---

### 3.5 Frontmatter: camp `image` vs Pexels

- El prompt demana `featuredImage` amb una URL fixa de Pexels. El node **Update Markdowns with Image URL** reemplaça/afegeix el camp **image** amb la URL de la cerca Pexels (segons `topic`).
- Cal assegurar que el theme / `lib/blog.ts` llegeix el camp que realment s'utilitza (`image`, `featuredImage` o ambdós). Si només es llegeix `featuredImage`, la imatge dinàmica de Pexels (camp `image`) podria no mostrar-se. Revisar el codi que renderitza l'article.

---

## 4. Resum d'accions recomanades (prioritat)

| Prioritat | Acció |
|-----------|--------|
| ~~Alta~~ | ~~$today al prompt~~ — Fet: s'usa `$('getTodayDate').item.json.$today`. |
| ~~Mitjana~~ | ~~API Pexels `size`~~ — Fet: paràmetre `size` eliminat. |
| ~~Baixa~~ | ~~Merge abans d'Update row(s)~~ — Fet: Merge 1 + Merge 2 + Limit 1 → Update row(s). |
| Pendent | Comprovar que la Data Table "Keywords NextLeadIn" té la columna `keyword` (minúscula) i que les keywords són temes B2B/NextLeadIn. |
| Revisió codi | Comprovar que la pàgina del blog llegeix `image` (i/o `featuredImage`) del frontmatter per mostrar la imatge destacada. |

---

## 5. Comprovar després dels canvis

- Executar el workflow en manual amb una keyword de prova.
- Verificar que els 3 fitxers es creen a `content/blog/en/`, `content/blog/ca/`, `content/blog/es/` amb el mateix slug.
- Comprovar que el frontmatter té `date` amb la data del dia i `image` amb URL de Pexels.
- Comprovar que la fila de la Data Table queda amb `processed: true` i que en la següent execució es pren una altra keyword.
- Obrir un article al blog i confirmar que la imatge destacada es mostra correctament.
