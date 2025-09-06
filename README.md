# Sierra CRM - Plataforma CRM Moderna

Una plataforma CRM moderna i responsiva construïda amb Next.js 14 (App Router), React, TypeScript i TailwindCSS.

## 🚀 Característiques

- **Next.js 14** amb App Router per a màxim rendiment
- **TypeScript** per a desenvolupament type-safe
- **TailwindCSS** per a estils moderns i responsiu
- **Components reutilitzables** i modulars
- **SEO optimitzat** amb metadata completa
- **Accessibilitat** millorada amb ARIA labels
- **Disseny responsive** per a tots els dispositius
- **Imatges optimitzades** amb Next.js Image
- **Animacions suaus** amb CSS i Tailwind

## 🛠️ Tecnologies

- [Next.js 14](https://nextjs.org/) - Framework React
- [React 18](https://reactjs.org/) - Biblioteca UI
- [TypeScript](https://www.typescriptlang.org/) - Llenguatge tipat
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS utility-first
- [Heroicons](https://heroicons.com/) - Icones SVG
- [Inter Font](https://fonts.google.com/specimen/Inter) - Tipografia moderna

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
lead-gen-saas-v2/
├── app/                    # App Router (Next.js 14)
│   ├── globals.css        # Estils globals
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Pàgina principal
├── components/             # Components reutilitzables
│   ├── Header.tsx         # Capçalera amb navegació
│   ├── Footer.tsx         # Peu de pàgina
│   ├── HeroSection.tsx    # Secció hero
│   ├── FeatureCard.tsx    # Targeta de característica
│   ├── TestimonialCard.tsx# Targeta de testimoni
│   └── BlogCard.tsx       # Targeta de blog
├── public/                # Assets estàtics
├── package.json           # Dependències del projecte
├── tailwind.config.ts     # Configuració Tailwind
├── tsconfig.json          # Configuració TypeScript
└── next.config.js         # Configuració Next.js
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

### SEO
Metadata completa configurada a `app/layout.tsx`:
- Open Graph tags
- Twitter Card
- Schema markup
- Meta descriptions
- Canonical URLs

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
