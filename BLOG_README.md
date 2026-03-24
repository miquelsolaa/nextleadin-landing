# Sistema de Blog amb Decap CMS i Markdown

Aquest document explica com utilitzar el sistema de blog implementat amb Decap CMS, Markdown i Next.js.

## Característiques

- ✅ **Gestió de contingut** amb Decap CMS
- ✅ **Markdown** per a formatatge ric
- ✅ **SEO optimitzat** amb metadades i JSON-LD
- ✅ **Internacionalització** completa (CA, EN, ES)
- ✅ **Categories i tags** per a organització
- ✅ **Articles relacionats** automàtics
- ✅ **Responsive design** amb Tailwind CSS

## Estructura de Fitxers

```
content/blog/           # Articles en Markdown per idioma
├── ca/                 # Articles en català
│   └── exemple-article.md
├── en/                 # Articles en anglès
│   └── example-article.md
└── es/                 # Articles en espanyol
    └── articulo-ejemplo.md

public/admin/           # Configuració Decap CMS
├── config.yml
└── index.html

lib/
└── blog.ts            # Funcions utilitàries per al blog

components/
├── BlogPost.tsx       # Component per articles complets
├── BlogPostCard.tsx   # Component per targetes d'articles
├── BlogPostContent.tsx # Component per contingut d'articles
├── BlogPostList.tsx   # Component per llistes d'articles
└── BlogJsonLd.tsx     # Component per SEO JSON-LD

app/[locale]/blog/
├── page.tsx           # Pàgina principal del blog
└── [slug]/
    └── page.tsx       # Pàgina d'article individual
```

## Com Utilitzar Decap CMS

### 1. Accés al CMS

Visita `https://nextleadin.com/admin` (o `https://tu-dominio.com/admin` en altres entorns) per accedir al panell d'administració.

### 2. Col·leccions per idioma

El CMS té 3 col·leccions separades:

- **Blog (Català)** → `content/blog/ca/`
- **Blog (English)** → `content/blog/en/`
- **Blog (Español)** → `content/blog/es/`

Crea articles a la col·lecció corresponent segons l'idioma del contingut.

### 3. Crear un Article

1. Fes clic a la col·lecció adequada (Català, English o Español)
2. Fes clic a "New [Article/Post]"
3. Omple els camps:
   - **Títol/Title/Título**: Títol de l'article
   - **Descripció/Description**: Descripció breu per SEO
   - **Data de publicació**: Data quan es va publicar
   - **Autor**: Nom de l'autor
   - **Imatge destacada/Featured image**: Imatge principal (opcional, camp `image`)
   - **Categories**: Llista de categories
   - **Tags**: Llista de tags
   - **Publicat**: Si l'article està publicat
   - **Mostrar CTA final**: Si es mostra el bloc CTA (Provar 7 dies gratis) al final de l'article (per defecte: sí)
   - **Contingut/Content**: Contingut en Markdown
4. El nom del fitxer es genera automàticament des del slug (ex: `meu-article` → `meu-article.md`)

### 4. Formatatge Markdown

Els articles suporten Markdown complet:

```markdown
# Títol Principal

## Subtítol

**Text en negreta** i *text en cursiva*

- Llista d'elements
- Segon element

```codi
const exemple = "codi";
```

> Cita destacada

[Enllaç](https://exemple.com)
```

## Configuració Tècnica

### Frontmatter Requerit

Cada article ha de tenir aquest frontmatter:

```yaml
---
title: "Títol de l'Article"
description: "Descripció breu"
date: 2024-09-10T10:00:00.000Z
author: "Nom de l'Autor"
image: "/images/blog/imatge.jpg"  # Opcional (antigament featuredImage)
categories: ["Marketing", "IA"]
tags: ["leads", "automatització"]
published: true
---
```

### Funcions Utilitàries

```typescript
// Obtenir tots els articles (per defecte català)
const posts = getAllPosts('ca')

// Obtenir un article per slug
const post = await getPostData('exemple-article', 'ca')

// Obtenir articles per categoria
const postsByCategory = getPostsByCategory('Marketing', 'ca')

// Obtenir articles per tag
const postsByTag = getPostsByTag('leads', 'ca')

// Obtenir categories úniques
const categories = getAllCategories('ca')

// Obtenir tags únics
const tags = getAllTags('ca')

// Obtenir articles relacionats
const related = getRelatedPosts('exemple-article', 3, 'ca')
```

## SEO i Metadades

### Metadades Automàtiques

Cada article genera automàticament:
- Meta title i description
- Open Graph tags
- Twitter Card tags
- JSON-LD structured data

### Sitemap

Els articles s'afegeixen automàticament al sitemap XML.

## Internacionalització

### Traduccions Disponibles

Els textos del blog estan traduïts a:
- **Català** (`messages/ca.json`)
- **Anglès** (`messages/en.json`)
- **Espanyol** (`messages/es.json`)

### Utilitzar Traduccions

```typescript
import { useTranslations } from 'next-intl'

const t = useTranslations('blog')
return <h1>{t('title')}</h1>
```

## Desplegament

### Netlify (Backend git-gateway)

1. Connecta el repositori a Netlify
2. **Activa Netlify Identity** (Site configuration → Identity)
3. **Activa Git Gateway** (Identity → Services → Git Gateway)
4. Invita usuaris o configura registre segons necessitats
5. Els articles creats des del CMS es cometen directament al repositori

### Desenvolupament Local

Per provar Decap CMS sense Netlify:

1. Executa `npx decap-server` en una terminal
2. Obre `http://localhost:3000/admin` amb el projecte en execució
3. El CMS es connectarà al backend local en lloc de git-gateway

### Variables d'Entorn

No es requereixen variables d'entorn especials per al blog.

## Manteniment

### Afegir Noves Categories

Les categories i tags es gestionen com a llistes lliures al frontmatter. No cal modificar `config.yml`.

### Modificar el disseny

1. Edita els components a `components/`
2. Utilitza Tailwind CSS per a estils
3. Testa la responsivitat

### Backup

Els articles es guarden com fitxers Markdown al repositori Git, proporcionant backup automàtic.

## Troubleshooting

### Article no apareix

1. Verifica que `published: true`
2. Comprova la data de publicació
3. Revisa que l'article estigui a la carpeta correcta: `content/blog/{ca|en|es}/`
4. Comprova l'estructura del frontmatter

### Error de construcció

1. Verifica la sintaxi Markdown
2. Comprova que el frontmatter estigui ben formatat
3. Revisa els logs de construcció

### Decap CMS no connecta

1. **Producció**: Comprova que Netlify Identity i Git Gateway estiguin activats
2. **Local**: Executa `npx decap-server` si has activat `local_backend: true`
3. Revisa la consola del navegador per errors d'autenticació

### Problemes de SEO

1. Verifica que l'article tingui descripció
2. Comprova que la imatge destacada existeixi (camp `image` o `featuredImage` per compatibilitat)
3. Revisa les metadades generades
