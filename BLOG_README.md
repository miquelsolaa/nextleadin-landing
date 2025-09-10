# Sistema de Blog amb DecapCMS i Markdown

Aquest document explica com utilitzar el sistema de blog implementat amb DecapCMS, Markdown i Next.js.

## Característiques

- ✅ **Gestió de contingut** amb DecapCMS
- ✅ **Markdown** per a formatatge ric
- ✅ **SEO optimitzat** amb metadades i JSON-LD
- ✅ **Internacionalització** completa (CA, EN, ES)
- ✅ **Categories i tags** per a organització
- ✅ **Articles relacionats** automàtics
- ✅ **Responsive design** amb Tailwind CSS

## Estructura de Fitxers

```
content/blog/           # Articles en Markdown
├── 2024-09-10-exemple-article.md

public/admin/           # Configuració DecapCMS
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

app/blog/
├── page.tsx           # Pàgina principal del blog
└── [slug]/
    └── page.tsx       # Pàgina d'article individual
```

## Com Utilitzar DecapCMS

### 1. Accés al CMS

Visita `https://tu-dominio.com/admin` per accedir al panell d'administració.

### 2. Crear un Article

1. Fes clic a "Articles del Blog"
2. Fes clic a "New Article"
3. Omple els camps:
   - **Títol**: Títol de l'article
   - **Descripció**: Descripció breu per SEO
   - **Data de publicació**: Data quan es va publicar
   - **Autor**: Nom de l'autor
   - **Imatge destacada**: Imatge principal (opcional)
   - **Categories**: Llista de categories
   - **Tags**: Llista de tags
   - **Publicat**: Si l'article està publicat
   - **Contingut**: Contingut en Markdown

### 3. Formatatge Markdown

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
featuredImage: "/images/blog/imatge.jpg"  # Opcional
categories: ["Marketing", "IA"]
tags: ["leads", "automatització"]
published: true
---
```

### Funcions Utilitàries

```typescript
// Obtenir tots els articles
const posts = getAllPosts()

// Obtenir un article per slug
const post = await getPostBySlug('exemple-article')

// Obtenir articles per categoria
const postsByCategory = getPostsByCategory('Marketing')

// Obtenir articles per tag
const postsByTag = getPostsByTag('leads')

// Obtenir categories úniques
const categories = getAllCategories()

// Obtenir tags únics
const tags = getAllTags()

// Obtenir articles relacionats
const related = getRelatedPosts('exemple-article', 3)
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

### Netlify

1. Connecta el repositori a Netlify
2. Configura l'autenticació Git Gateway
3. Els articles es generen automàticament

### Variables d'Entorn

No es requereixen variables d'entorn especials per al blog.

## Manteniment

### Afegir Noves Categories

1. Edita `public/admin/config.yml`
2. Afegeix la nova categoria a la llista
3. Desplega els canvis

### Modificar Disseny

1. Edita els components a `components/`
2. Utilitza Tailwind CSS per a estils
3. Testa la responsivitat

### Backup

Els articles es guarden com fitxers Markdown al repositori Git, proporcionant backup automàtic.

## Troubleshooting

### Article no apareix

1. Verifica que `published: true`
2. Comprova la data de publicació
3. Revisa l'estructura del frontmatter

### Error de construcció

1. Verifica la sintaxi Markdown
2. Comprova que el frontmatter estigui ben formatat
3. Revisa els logs de construcció

### Problemes de SEO

1. Verifica que l'article tingui descripció
2. Comprova que la imatge destacada existeixi
3. Revisa les metadades generades
