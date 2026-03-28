# Imatges OpenGraph per a NextLeadIn

## Estructura de fitxers

```
public/images/og/
├── home-ca.jpg      # Pàgina principal (català)
├── home-es.jpg      # Página principal (español)
├── home-en.jpg      # Home page (English)
├── pricing-ca.jpg   # Preus (català)
├── pricing-es.jpg   # Precios (español)
├── pricing-en.jpg   # Pricing (English)
├── contact-ca.jpg   # Contacte (català)
├── contact-es.jpg   # Contacto (español)
├── contact-en.jpg   # Contact (English)
├── faq-ca.jpg       # FAQ (català)
├── faq-es.jpg       # FAQ (español)
├── faq-en.jpg       # FAQ (English)
└── default.jpg      # Imatge per defecte
```

## Especificacions tècniques

- **Dimensions**: 1200x630px (ratio 1.91:1)
- **Format**: JPG (optimitzat per a web)
- **Qualitat**: 85-90% (equilibri entre mida i qualitat)
- **Colors**: Paleta NextLeadIn (verd #10B981)

## Generació d'imatges

### Opció 1: Generació manual
Utilitza eines com Canva, Figma o Photoshop amb les especificacions anteriors.

### Opció 2: Generació automàtica
Implementa @vercel/og per generar imatges dinàmiques:

```typescript
// pages/api/og/[page]/[locale].tsx
import { ImageResponse } from '@vercel/og'

export default function handler(req) {
  const { page, locale } = req.query
  const config = require('@/lib/og-config.json')
  const pageConfig = config.pages[page][locale]
  
  return new ImageResponse(
    (
      <div style={{ 
        background: pageConfig.background,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px'
      }}>
        <h1 style={{ 
          color: pageConfig.text,
          fontSize: 72,
          fontWeight: 'bold',
          marginBottom: 20
        }}>
          {pageConfig.title}
        </h1>
        <p style={{ 
          color: pageConfig.textSecondary,
          fontSize: 32,
          textAlign: 'center',
          maxWidth: '800px'
        }}>
          {pageConfig.subtitle}
        </p>
      </div>
    ),
    {
      width: pageConfig.width,
      height: pageConfig.height
    }
  )
}
```

## Optimització per a AI Search

Les imatges OpenGraph estan optimitzades per a:
- **Google SGE**: Títols clars i descripcions concises
- **Bard/ChatGPT**: Informació estructurada i llegible
- **Perplexity**: Contingut específic i accionable

## Monitoring

Utilitza Google Search Console per monitorar:
- Impressions d'imatges OpenGraph
- CTR des de resultats amb imatges
- Rendiment per idioma i pàgina
