# Changelog

Tots els canvis notables d'aquest projecte es documentaran en aquest fitxer.

## [2025-01] - Actualització Next.js 16 i Millores SEO/AEO

###  Actualització de Dependències

#### Principals
- **Next.js**: `15.2.4` → `16.1.0` ✅
- **React**: `19.1.1` → `19.2.3` ✅
- **react-dom**: `19.2.3` ✅
- **eslint-config-next**: `16.1.0` ✅
- **next-intl**: `4.6.1` ✅

#### Dependències de Suport
- **@netlify/plugin-nextjs**: `5.13.1` → `5.15.3` ✅
- **@types/node**: `20.19.11` → `25.0.3` ✅
- **typescript**: `5.9.2` → `5.9.3` ✅
- **lucide-react**: `0.543.0` → `0.562.0` ✅

### ✨ Millores SEO/AEO

#### Metadata API (`lib/seo-metadata.ts`)
- ✅ Afegit camp `authors` a tots els metadata
- ✅ Millorat `twitter` metadata amb `site` i `creator`
- ✅ Afegit `category` per millor categorització
- ✅ Millorades directives `robots` amb opcions avançades
- ✅ Product schemas millorats amb `image` i `additionalProperty`
- ✅ FAQ schema expandit de 8 a 20 preguntes per idioma (optimitzat per AEO)

#### Structured Data (`components/AIStructuredData.tsx`)
- ✅ Review schema millorat amb múltiples testimonials
- ✅ Product schema amb més detalls (image, additionalProperty)
- ✅ WebPage schema per a cada pàgina
- ✅ Breadcrumbs automàtics implementats
- ✅ HowTo schema per guies pas a pas (home, pricing, contact)
- ✅ Blog schema millorat amb `datePublished`, `dateModified`, `author` i `publisher` complet
- ✅ VideoObject schema preparat (comentat, per activar quan hi hagi vídeos)
- ✅ LocalBusiness schema amb GEO signals per millor SEO local
- ✅ SoftwareApplication schema amb featureList i offers

#### Blog Schema (`components/BlogJsonLd.tsx`)
- ✅ `mainEntityOfPage` millorat amb més informació
- ✅ Breadcrumbs integrats al schema
- ✅ Metadata completa per a articles
- ✅ Author schema millorat amb `sameAs` i `worksFor`
- ✅ Publisher schema millorat amb `contactPoint` i `foundingDate`
- ✅ Afegit `speakable` per millor suport a assistents de veu

#### Robots (`app/robots.ts`)
- ✅ Creat `robots.ts` dinàmic (reemplaça `robots.txt` estàtic)
- ✅ Regles de crawl per idiomes (ca, es, en)
- ✅ Sitemap automàtic inclòs
- ✅ Regles específiques per diferents bots (Googlebot, Bingbot, etc.)

#### Manifest (`app/manifest.ts`)
- ✅ Categories expandides (business, productivity, sales, marketing, utilities)
- ✅ Shortcuts millorats amb més opcions i descripcions
- ✅ Icon addicional (`favicon.ico`) per millor compatibilitat
- ✅ Screenshot addicional per millor presentació PWA

#### Sitemap (`app/sitemap.ts`)
- ✅ Ja optimitzat amb dates reals i hreflang alternates
- ✅ Priority basada en antiguitat dels articles

### 🎨 Optimitzacions de Rendiment

#### Imatges (`components/*`)
- ✅ Afegit `sizes` per responsive images
- ✅ `loading="lazy"` on sigui apropiat
- ✅ Alt texts millorats i més descriptius
- ✅ Components afectats:
  - `BlogPostContent.tsx`
  - `BlogPost.tsx`
  - `BlogPostCard.tsx`
  - `ServicesSection.tsx`
  - `HeroSection.tsx`

#### Fonts (`app/layout.tsx`)
- ✅ Font optimization verificada
- ✅ `display: 'swap'` implementat per Inter font
- ✅ `preload: true` i `adjustFontFallback: true` afegits
- ✅ Preload de fonts crítiques al `<head>` per millorar FCP

### 🔧 Configuració Next.js 16

- ✅ `next.config.js` actualitzat i verificat per Next.js 16
- ✅ `optimizePackageImports` ara és estable (no experimental)
- ✅ Middleware verificat i compatible amb Next.js 16
- ✅ Configuracions mantingudes (images.unoptimized per Netlify, serverExternalPackages per Stripe)
- ✅ Eliminats tots els flags experimentals (ja no necessaris a Next.js 16)

### 📝 Documentació

- ✅ README actualitzat amb informació de Next.js 16
- ✅ CHANGELOG creat amb tots els canvis
- ✅ Millores SEO/AEO documentades

### 🐛 Correccions

- ✅ Eliminat `bingbot` de robots directives (no és suportat pel tipus Robots de Next.js)

### 📊 Millores de Core Web Vitals Esperades

Les millores implementades haurien de millorar:

- **LCP (Largest Contentful Paint)**: Imatges optimitzades amb sizes i lazy loading
- **CLS (Cumulative Layout Shift)**: Alt texts i sizes especificats redueixen shifts
- **FCP (First Contentful Paint)**: Font optimization amb display swap
- **FID (First Input Delay)**: Next.js 16 i React 19 milloren el rendiment general

###  SEO/AEO Improvements

- **Structured Data**: Schemas expandits per millor indexació per AI search engines
- **FAQ Schema**: 20 preguntes per idioma per millor visibilitat a AI assistants
- **HowTo Schemas**: Implementats per home, pricing i contact per millorar resultats de cerca
- **Product Schema**: Detalls complets per comparacions de preus
- **Review Schema**: Múltiples testimonials per millor confiança
- **Breadcrumbs**: Navegació clara per crawlers i AI
- **Font Optimization**: Preload de fonts crítiques per millorar Core Web Vitals

---

## Versions Anteriors

Les versions anteriors no tenen changelog estructurat.

