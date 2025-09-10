#!/usr/bin/env node

/**
 * Script per generar imatges OpenGraph optimitzades per a AI search
 * Utilitza @vercel/og per generar imatges dinàmiques
 */

const fs = require('fs')
const path = require('path')

// Configuració de les imatges OpenGraph
const ogConfig = {
  pages: ['home', 'pricing', 'contact', 'faq'],
  locales: ['ca', 'es', 'en'],
  dimensions: {
    width: 1200,
    height: 630
  },
  colors: {
    primary: '#10B981', // green-500
    secondary: '#059669', // green-600
    background: '#F9FAFB', // gray-50
    text: '#111827', // gray-900
    textSecondary: '#6B7280' // gray-500
  },
  fonts: {
    title: 'Inter Bold',
    subtitle: 'Inter Medium',
    body: 'Inter Regular'
  }
}

// Textos per a cada pàgina i idioma
const texts = {
  home: {
    ca: {
      title: 'NextLeadIn',
      subtitle: 'Generació de leads hipersegmentats amb IA',
      description: 'Troba clients qualificats per zona, sector i paraules clau amb informes IA per preparar trucades i tancar més oportunitats.',
      cta: 'Comença gratis'
    },
    es: {
      title: 'NextLeadIn',
      subtitle: 'Generación de leads hipersegmentados con IA',
      description: 'Encuentra clientes cualificados por zona, sector y palabras clave con informes IA para preparar llamadas y cerrar más oportunidades.',
      cta: 'Comenzar gratis'
    },
    en: {
      title: 'NextLeadIn',
      subtitle: 'AI-Powered Hyper-Segmented Lead Generation',
      description: 'Find qualified clients by location, sector and keywords with AI reports to prepare calls and close more opportunities.',
      cta: 'Start for free'
    }
  },
  pricing: {
    ca: {
      title: 'Preus NextLeadIn',
      subtitle: 'Plans que s\'adapten al teu creixement',
      description: 'Des de 19€/mes per a empreses que comencen fins a solucions empresarials il·limitades.',
      cta: 'Veure plans'
    },
    es: {
      title: 'Precios NextLeadIn',
      subtitle: 'Planes que se adaptan a tu crecimiento',
      description: 'Desde 19€/mes para empresas que comienzan hasta soluciones empresariales ilimitadas.',
      cta: 'Ver planes'
    },
    en: {
      title: 'NextLeadIn Pricing',
      subtitle: 'Plans that scale with your growth',
      description: 'From €19/month for starting businesses to unlimited enterprise solutions.',
      cta: 'View plans'
    }
  },
  contact: {
    ca: {
      title: 'Contacte NextLeadIn',
      subtitle: 'Parla amb el nostre equip d\'experts',
      description: 'Obtén una consulta personalitzada per optimitzar el teu pipeline comercial i augmentar la conversió de vendes.',
      cta: 'Contacta ara'
    },
    es: {
      title: 'Contacto NextLeadIn',
      subtitle: 'Habla con nuestro equipo de expertos',
      description: 'Obtén una consulta personalizada para optimizar tu pipeline comercial y aumentar la conversión de ventas.',
      cta: 'Contacta ahora'
    },
    en: {
      title: 'NextLeadIn Contact',
      subtitle: 'Talk to our team of experts',
      description: 'Get a personalized consultation to optimize your sales pipeline and increase sales conversion.',
      cta: 'Contact now'
    }
  },
  faq: {
    ca: {
      title: 'FAQ NextLeadIn',
      subtitle: 'Preguntes freqüents',
      description: 'Respostes a les preguntes més comunes sobre la nostra plataforma de generació de leads amb IA.',
      cta: 'Veure respostes'
    },
    es: {
      title: 'FAQ NextLeadIn',
      subtitle: 'Preguntas frecuentes',
      description: 'Respuestas a las preguntas más comunes sobre nuestra plataforma de generación de leads con IA.',
      cta: 'Ver respuestas'
    },
    en: {
      title: 'NextLeadIn FAQ',
      subtitle: 'Frequently asked questions',
      description: 'Answers to the most common questions about our AI-powered lead generation platform.',
      cta: 'View answers'
    }
  }
}

// Generar configuració per a @vercel/og
function generateOGConfig() {
  const config = {
    pages: {},
    baseUrl: 'https://nextleadin.com',
    outputDir: 'public/images/og'
  }

  ogConfig.pages.forEach(page => {
    config.pages[page] = {}
    ogConfig.locales.forEach(locale => {
      const text = texts[page][locale]
      config.pages[page][locale] = {
        ...text,
        url: `${config.baseUrl}${locale === 'ca' ? '' : `/${locale}`}${page === 'home' ? '' : `/${page}`}`,
        imageUrl: `${config.baseUrl}/images/og/${page}-${locale}.jpg`,
        ...ogConfig.dimensions,
        ...ogConfig.colors,
        ...ogConfig.fonts
      }
    })
  })

  return config
}

// Generar fitxer de configuració
function writeConfigFile() {
  const config = generateOGConfig()
  const configPath = path.join(process.cwd(), 'lib', 'og-config.json')
  
  // Crear directori si no existeix
  const dir = path.dirname(configPath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2))
  console.log(`✅ Configuració OpenGraph generada: ${configPath}`)
}

// Generar fitxer de tipus TypeScript
function writeTypesFile() {
  const typesContent = `// Tipus per a configuració OpenGraph
export interface OGTexts {
  title: string
  subtitle: string
  description: string
  cta: string
}

export interface OGPageConfig extends OGTexts {
  url: string
  imageUrl: string
  width: number
  height: number
  primary: string
  secondary: string
  background: string
  text: string
  textSecondary: string
  titleFont: string
  subtitleFont: string
  bodyFont: string
}

export interface OGConfig {
  pages: Record<string, Record<string, OGPageConfig>>
  baseUrl: string
  outputDir: string
}

export type OGLocale = 'ca' | 'es' | 'en'
export type OGPage = 'home' | 'pricing' | 'contact' | 'faq'
`

  const typesPath = path.join(process.cwd(), 'lib', 'og-config.ts')
  fs.writeFileSync(typesPath, typesContent)
  console.log(`✅ Tipus TypeScript generats: ${typesPath}`)
}

// Generar README per a les imatges OpenGraph
function writeReadme() {
  const readmeContent = `# Imatges OpenGraph per a NextLeadIn

## Estructura de fitxers

\`\`\`
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
\`\`\`

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

\`\`\`typescript
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
\`\`\`

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
`

  const readmePath = path.join(process.cwd(), 'public', 'images', 'og', 'README.md')
  
  // Crear directori si no existeix
  const dir = path.dirname(readmePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  
  fs.writeFileSync(readmePath, readmeContent)
  console.log(`✅ README generat: ${readmePath}`)
}

// Executar script
function main() {
  console.log('🚀 Generant configuració OpenGraph per a NextLeadIn...')
  
  writeConfigFile()
  writeTypesFile()
  writeReadme()
  
  console.log('✅ Configuració OpenGraph completada!')
  console.log('📝 Pròxims passos:')
  console.log('   1. Generar les imatges OpenGraph amb les especificacions')
  console.log('   2. Implementar @vercel/og per a generació dinàmica')
  console.log('   3. Validar amb Google Rich Results Test')
  console.log('   4. Monitorar rendiment amb Google Search Console')
}

if (require.main === module) {
  main()
}

module.exports = {
  generateOGConfig,
  writeConfigFile,
  writeTypesFile,
  writeReadme
}
