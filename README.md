# NextLeadIn - Plataforma de Generació de Leads amb IA

Una plataforma SaaS moderna i responsiva construïda amb Next.js 16 (App Router), React 19, TypeScript i TailwindCSS per a la generació de leads amb intel·ligència artificial.

## 🚀 Característiques

- **Next.js 16.1.6** amb App Router per a màxim rendiment
- **React 19.2.4** amb les últimes millores de rendiment
- **TypeScript** per a desenvolupament type-safe
- **TailwindCSS** per a estils moderns i responsiu
- **SEO/AEO optimitzat** amb metadata completa i structured data per AI search engines
- **Internacionalització** completa (Català, Espanyol, Anglès) amb next-intl 4.6.1
- **Components reutilitzables** i modulars
- **Accessibilitat** millorada amb ARIA labels
- **Disseny responsive** per a tots els dispositius
- **Imatges optimitzades** amb Next.js Image (sizes, lazy loading, alt texts descriptius)
- **Animacions suaus** amb CSS i Tailwind
- **Blog integrat** amb DecapCMS i Markdown
- **PWA ready** amb manifest optimitzat

## 🛠️ Tecnologies

- [Next.js 16.1.6](https://nextjs.org/) - Framework React amb App Router
- [React 19.2.4](https://reactjs.org/) - Biblioteca UI
- [TypeScript 5.9.3](https://www.typescriptlang.org/) - Llenguatge tipat
- [next-intl 4.6.1](https://next-intl-docs.vercel.app/) - Internacionalització
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS utility-first
- [Lucide React](https://lucide.dev/) - Icones SVG
- [Inter Font](https://fonts.google.com/specimen/Inter) - Tipografia moderna optimitzada

## 📦 Instal·lació

1. **Clona el repositori**
   ```bash
   git clone <repository-url>
   cd lead-gen-saas-v2
   ```

2. **Instal·la les dependències**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Executa el servidor de desenvolupament**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. **Obre el navegador**
   Visita [http://localhost:3000](http://localhost:3000) per veure l'aplicació.

## 📂 Estructura del Projecte

```
nextleadin-landing/
├── app/                    # App Router (Next.js 16)
│   ├── [locale]/          # Rutes localitzades (ca, es, en)
│   ├── globals.css        # Estils globals
│   ├── layout.tsx         # Layout principal
│   ├── robots.ts          # Robots.txt dinàmic
│   ├── sitemap.ts         # Sitemap dinàmic amb hreflang
│   └── manifest.ts        # Manifest PWA
├── components/             # Components reutilitzables
│   ├── Header.tsx         # Capçalera amb navegació
│   ├── Footer.tsx         # Peu de pàgina
│   ├── HeroSection.tsx    # Secció hero
│   ├── AIStructuredData.tsx # Structured data per SEO/AEO
│   ├── BlogJsonLd.tsx     # Schema JSON-LD per articles
│   └── ...                # Altres components
├── lib/                   # Utilitats i helpers
│   ├── seo-metadata.ts    # Generació de metadata SEO
│   ├── blog.ts            # Funcions per gestionar blog
│   └── blog-utils.ts      # Utilitats del blog
├── content/               # Contingut Markdown
│   └── blog/              # Articles del blog per idioma
├── public/                # Assets estàtics
├── i18n/                  # Configuració internacionalització
├── package.json           # Dependències del projecte
├── tailwind.config.ts     # Configuració Tailwind
├── tsconfig.json          # Configuració TypeScript
├── next.config.js         # Configuració Next.js 16
└── middleware.ts          # Middleware per i18n
```

## 🎨 Components

### Header
- Navegació responsive amb menú mòbil
- Logo optimitzat
- Botons CTA
- Accessibilitat millorada

### HeroSection
- Text animat amb rotació de paraules
- Formulari d'email integrat
- Imatge de dashboard optimitzada
- Secció de logotips de confiança

### FeatureCard
- Component reutilitzable per característiques
- Icones personalitzables
- Efectes hover
- Link a pàgines de detall

### TestimonialCard
- Testimonis de clients
- Imatges d'autor optimitzades
- Disseny clean i modern

### BlogCard
- Articles de blog amb metadata
- Categories i etiquetes
- Imatges responsive
- Links a articles complets

### Footer
- Formulari de newsletter
- Links organitzats per categories
- Xarxes socials
- Informació legal

## 🔧 Configuració

### TailwindCSS
El projecte utilitza TailwindCSS amb configuració personalitzada:
- Colors de marca
- Tipografia Inter
- Animacions personalitzades
- Classes d'utilitat personalitzades

### SEO/AEO (Answer Engine Optimization)

Metadata completa i optimitzada per a AI search engines:

- **Metadata API** (`lib/seo-metadata.ts`):
  - Títols i descripcions AI-friendly
  - Authors, category, keywords
  - Twitter Card complet (site, creator)
  - Directives robots optimitzades
  - Open Graph tags per a xarxes socials

- **Structured Data** (`components/AIStructuredData.tsx`):
  - Organization schema
  - LocalBusiness schema (GEO signals)
  - SoftwareApplication schema
  - Product schema amb preus detallats
  - Review schema amb testimonials
  - HowTo schema per guies pas a pas
  - FAQPage schema amb 8+ preguntes per idioma
  - BreadcrumbList automàtic
  - WebPage schema per a cada pàgina

- **Blog Schema** (`components/BlogJsonLd.tsx`):
  - Article schema complet (BlogPosting)
  - Author i Publisher information complet
  - Dates optimitzades (published, modified)
  - MainEntityOfPage millorat amb breadcrumbs
  - Speakable schema per assistents de veu
  - Publisher amb contactPoint i foundingDate

- **Robots** (`app/robots.ts`):
  - Robots.txt dinàmic
  - Regles de crawl per idiomes
  - Sitemap automàtic

- **Sitemap** (`app/sitemap.ts`):
  - Dates reals dels articles
  - Alternates hreflang automàtics
  - Priority optimitzada

- **Manifest** (`app/manifest.ts`):
  - PWA optimitzat
  - Icons i screenshots
  - Categories i shortcuts

### Accessibilitat
- ARIA labels en tots els elements interactius
- Navegació per teclat
- Contrast de colors optimitzat
- Text alternatiu per a imatges
- Estructura de capçaleres semàntica

## 🌍 Internacionalització

El projecte està configurat en català per defecte, però es pot estendre fàcilment per a altres idiomes:
- Metadata en català
- Contingut traduït
- URLs localitzades

## 🚀 Desenvolupament

### Scripts Disponibles

```bash
npm run dev      # Servidor de desenvolupament
npm run build    # Build de producció
npm run start    # Servidor de producció
npm run lint     # Linter
```

### Personalització

1. **Colors**: Modifica `tailwind.config.ts` per canviar la paleta de colors
2. **Tipografia**: Canvia la font a `app/layout.tsx`
3. **Components**: Afegeix nous components a la carpeta `components/`
4. **Pàgines**: Crea noves pàgines dins `app/`

## 📱 Responsive Design

El disseny s'adapta a tots els dispositius:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔗 Links Útils

- [Documentació Next.js](https://nextjs.org/docs)
- [Documentació TailwindCSS](https://tailwindcss.com/docs)
- [Guia TypeScript](https://www.typescriptlang.org/docs)
- [Heroicons](https://heroicons.com/)

## 📄 Llicència

Aquest projecte està basat en el tema Sierra WordPress i ha estat convertit a Next.js mantenint el disseny original.
