# Prompt Inicial per a Cursor - NextLeadIn Tools API

Copia i enganxa aquest prompt quan obris el nou projecte a Cursor:

---

## Prompt

```
Crea un microservei amb Netlify Functions per a NextLeadIn que generi imatges de carrusels d'Instagram automàticament.

## Context del Projecte

- **Nom**: nextleadin-tools
- **Propòsit**: API interna per a automatitzacions (n8n, etc.)
- **Hosting**: Netlify Functions
- **Domini futur**: tools.nextleadin.com

## Requisits Tècnics

### Stack
- TypeScript
- Netlify Functions (serverless)
- Satori (JSX a SVG) + @resvg/resvg-js (SVG a PNG)
- Font: Inter (Google Fonts)

### Endpoints Necessaris

1. **POST /api/generate-slide**
   - Genera 1 slide individual
   - Input: { slideNumber, slideType, title, body, theme? }
   - Output: Imatge PNG (binary o base64)

2. **POST /api/generate-carousel**
   - Genera els 5 slides del carrusel
   - Input: { slides: [...], theme? }
   - Output: Array de 5 imatges (base64) o ZIP

3. **GET /api/health**
   - Health check simple
   - Output: { status: "ok", version: "1.0.0" }

### Disseny dels Slides

Format: 1080x1350px (Instagram vertical 4:5)

Estructura de cada slide:
- Número de slide (cantonada superior dreta): "1/5"
- Badge amb tipus (hook, problema, dada, solució, cta)
- Títol (font gran, bold)
- Cos (font mitjana)
- Footer amb logo NextLeadIn + marca

Colors per tipus de slide:
- Slide 1 (Hook): gradient lila (#667eea → #764ba2)
- Slide 2 (Problema): gradient rosa/vermell (#f093fb → #f5576c)
- Slide 3 (Insight/Dada): gradient blau (#4facfe → #00f2fe)
- Slide 4 (Solució): gradient verd (#43e97b → #38f9d7)
- Slide 5 (CTA): gradient rosa/groc (#fa709a → #fee140)

### Seguretat

- Autenticació via API Key al header: `X-API-Key: {key}`
- La key es guarda a variable d'entorn: `API_KEY`
- Retornar 401 si no hi ha key o és incorrecta

### Estructura del Projecte

```
nextleadin-tools/
├── netlify/
│   └── functions/
│       ├── generate-slide.ts
│       ├── generate-carousel.ts
│       └── health.ts
├── src/
│   ├── templates/
│   │   └── instagram-slide.tsx    # Component JSX del slide
│   ├── utils/
│   │   ├── image-generator.ts     # Lògica amb Satori + resvg
│   │   ├── auth.ts                # Validació API key
│   │   └── fonts.ts               # Càrrega de fonts
│   └── types/
│       └── index.ts               # Tipus TypeScript
├── assets/
│   └── fonts/
│       └── Inter-*.ttf            # Fonts locals
├── .env.example
├── .gitignore
├── netlify.toml
├── package.json
├── tsconfig.json
└── README.md
```

### Exemple d'Input per generate-carousel

```json
{
  "slides": [
    {
      "slideNumber": 1,
      "slideType": "hook",
      "title": "La teva pipeline de vendes sembla un desert?",
      "body": "Estàs perdent hores valuoses amb 'leads' que mai converteixen?"
    },
    {
      "slideNumber": 2,
      "slideType": "problem",
      "title": "El dilema dels leads B2B ineficients",
      "body": "El teu equip passa hores buscant contactes i enviant missatges genèrics."
    },
    {
      "slideNumber": 3,
      "slideType": "insight",
      "title": "L'Eficàcia dels Leads Qualificats",
      "body": "Els leads qualificats tenen un 20% més de probabilitats de tancar.",
      "stat": "+200%",
      "statLabel": "Més respostes amb personalització"
    },
    {
      "slideNumber": 4,
      "slideType": "solution",
      "title": "NextLeadIn: La Teva Solució Intel·ligent",
      "body": "La nostra IA identifica els teus ICP amb precisió i automatitza campanyes."
    },
    {
      "slideNumber": 5,
      "slideType": "cta",
      "title": "Transforma la Teva Generació de Leads",
      "body": "No perdis ni un lead més.",
      "ctaText": "Prova Gratuïta →"
    }
  ],
  "theme": {
    "brandName": "NextLeadIn",
    "website": "nextleadin.com"
  }
}
```

### Consideracions

- Les fonts s'han de carregar localment (Netlify Functions no té accés a Google Fonts en runtime)
- El límit de Netlify Functions és 10 segons per execució
- Les imatges s'han de retornar en base64 o com a binary stream
- Assegura't de gestionar errors correctament (try-catch)

### Comandes Inicials

```bash
npm init -y
npm install satori @resvg/resvg-js
npm install -D typescript @types/node netlify-cli
```

Comença creant l'estructura de carpetes i el netlify.toml amb la configuració bàsica.
```

---

## Notes Addicionals

- El projecte s'integrarà amb n8n per a automatització de contingut de xarxes socials
- Les imatges generades són per a Instagram (carrusels de 5 slides)
- El servei serà cridat per workflows automatitzats, no per usuaris directament
