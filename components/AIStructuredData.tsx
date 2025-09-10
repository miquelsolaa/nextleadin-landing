import React from 'react'
import SeoJsonLd from './SeoJsonLd'

interface AIStructuredDataProps {
  page: string
  locale: 'ca' | 'es' | 'en'
  customData?: Record<string, any>[]
  breadcrumbs?: Array<{
    name: string
    url: string
  }>
}

const AIStructuredData: React.FC<AIStructuredDataProps> = ({
  page,
  locale,
  customData = [],
  breadcrumbs = []
}) => {
  // Generar structured data específic per a AI
  const generateAIStructuredData = () => {
    const baseUrl = 'https://nextleadin.com'
    const localePath = locale === 'ca' ? '' : `/${locale}`
    const currentUrl = `${baseUrl}${localePath}${page === 'home' ? '' : `/${page}`}`
    
    const structuredData: Record<string, any>[] = []

    // BreadcrumbList per a millor navegació AI
    if (breadcrumbs.length > 0) {
      structuredData.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url
        }))
      })
    }

    // LocalBusiness schema per a GEO signals
    if (page === 'home' || page === 'contact') {
      structuredData.push({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'NextLeadIn',
        description: locale === 'ca' 
          ? 'Plataforma de generació de leads amb intel·ligència artificial per a empreses B2B'
          : locale === 'es'
          ? 'Plataforma de generación de leads con inteligencia artificial para empresas B2B'
          : 'AI-powered lead generation platform for B2B companies',
        url: baseUrl,
        telephone: '+34-684-781-855',
        email: 'contacto@nextleadin.com',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'ES',
          addressRegion: 'Catalunya',
          addressLocality: 'Barcelona'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '41.3851',
          longitude: '2.1734'
        },
        areaServed: [
          {
            '@type': 'Country',
            name: 'Spain'
          },
          {
            '@type': 'Country', 
            name: 'France'
          },
          {
            '@type': 'Country',
            name: 'Portugal'
          }
        ],
        serviceArea: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: '41.3851',
            longitude: '2.1734'
          },
          geoRadius: '500000' // 500km radius
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00'
          }
        ],
        sameAs: [
          'https://linkedin.com/company/nextleadin',
          'https://twitter.com/nextleadin'
        ]
      })
    }

    // SoftwareApplication schema per a AI search
    if (page === 'home' || page === 'pricing') {
      structuredData.push({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'NextLeadIn',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web Browser',
        description: locale === 'ca'
          ? 'Plataforma de generació de leads amb intel·ligència artificial per segmentar i qualificar clients potencials'
          : locale === 'es'
          ? 'Plataforma de generación de leads con inteligencia artificial para segmentar y cualificar clientes potenciales'
          : 'AI-powered lead generation platform to segment and qualify potential clients',
        url: currentUrl,
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: '19',
          highPrice: '99',
          priceCurrency: 'EUR',
          offerCount: '3',
          offers: [
            {
              '@type': 'Offer',
              name: locale === 'ca' ? 'Pla Inici' : locale === 'es' ? 'Plan Inicio' : 'Start Plan',
              price: '19',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: '19',
                priceCurrency: 'EUR',
                billingIncrement: '1',
                unitText: 'MONTH'
              }
            },
            {
              '@type': 'Offer',
              name: locale === 'ca' ? 'Pla Pro' : locale === 'es' ? 'Plan Pro' : 'Pro Plan',
              price: '49',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: '49',
                priceCurrency: 'EUR',
                billingIncrement: '1',
                unitText: 'MONTH'
              }
            },
            {
              '@type': 'Offer',
              name: locale === 'ca' ? 'Pla Elite' : locale === 'es' ? 'Plan Elite' : 'Elite Plan',
              price: '99',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: '99',
                priceCurrency: 'EUR',
                billingIncrement: '1',
                unitText: 'MONTH'
              }
            }
          ]
        },
        featureList: [
          locale === 'ca' ? 'Segmentació geogràfica avançada' : locale === 'es' ? 'Segmentación geográfica avanzada' : 'Advanced geographic segmentation',
          locale === 'ca' ? 'Informes generats per IA' : locale === 'es' ? 'Informes generados por IA' : 'AI-generated reports',
          locale === 'ca' ? 'Integració amb CRM' : locale === 'es' ? 'Integración con CRM' : 'CRM integration',
          locale === 'ca' ? 'Qualificació automàtica de leads' : locale === 'es' ? 'Calificación automática de leads' : 'Automatic lead qualification',
          locale === 'ca' ? 'Analytics de conversió' : locale === 'es' ? 'Analytics de conversión' : 'Conversion analytics'
        ],
        screenshot: `${baseUrl}/images/hero/hero.png`,
        softwareVersion: '1.0',
        datePublished: '2024-01-01',
        dateModified: new Date().toISOString().split('T')[0],
        author: {
          '@type': 'Organization',
          name: 'NextLeadIn'
        },
        publisher: {
          '@type': 'Organization',
          name: 'NextLeadIn',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/images/logo/logo.png`
          }
        }
      })
    }

    // HowTo schema per a AI search results
    if (page === 'home') {
      structuredData.push({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: locale === 'ca' 
          ? 'Com generar leads qualificats amb IA'
          : locale === 'es'
          ? 'Cómo generar leads cualificados con IA'
          : 'How to generate qualified leads with AI',
        description: locale === 'ca'
          ? 'Guia pas a pas per utilitzar NextLeadIn per generar i qualificar leads amb intel·ligència artificial'
          : locale === 'es'
          ? 'Guía paso a paso para usar NextLeadIn para generar y cualificar leads con inteligencia artificial'
          : 'Step-by-step guide to use NextLeadIn to generate and qualify leads with artificial intelligence',
        totalTime: 'PT15M',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'EUR',
          value: '19'
        },
        step: [
          {
            '@type': 'HowToStep',
            name: locale === 'ca' ? 'Defineix la teva zona objectiu' : locale === 'es' ? 'Define tu zona objetivo' : 'Define your target area',
            text: locale === 'ca'
              ? 'Selecciona la zona geogràfica on vols trobar clients potencials'
              : locale === 'es'
              ? 'Selecciona la zona geográfica donde quieres encontrar clientes potenciales'
              : 'Select the geographic area where you want to find potential clients',
            url: `${currentUrl}#location`
          },
          {
            '@type': 'HowToStep',
            name: locale === 'ca' ? 'Segmenta per sector' : locale === 'es' ? 'Segmenta por sector' : 'Segment by sector',
            text: locale === 'ca'
              ? 'Utilitza filtres per sector, CNAE i paraules clau per afinar la cerca'
              : locale === 'es'
              ? 'Usa filtros por sector, CNAE y palabras clave para afinar la búsqueda'
              : 'Use filters by sector, CNAE and keywords to refine the search',
            url: `${currentUrl}#sector`
          },
          {
            '@type': 'HowToStep',
            name: locale === 'ca' ? 'Genera informes amb IA' : locale === 'es' ? 'Genera informes con IA' : 'Generate AI reports',
            text: locale === 'ca'
              ? 'Obtén dossiers intel·ligents per a cada empresa amb punts de conversa i angles de contacte'
              : locale === 'es'
              ? 'Obtén dossiers inteligentes para cada empresa con puntos de conversación y ángulos de contacto'
              : 'Get intelligent dossiers for each company with talking points and contact angles',
            url: `${currentUrl}#ai-reports`
          },
          {
            '@type': 'HowToStep',
            name: locale === 'ca' ? 'Exporta i integra' : locale === 'es' ? 'Exporta e integra' : 'Export and integrate',
            text: locale === 'ca'
              ? 'Exporta els leads al teu CRM i integra amb les teves eines de vendes'
              : locale === 'es'
              ? 'Exporta los leads a tu CRM e integra con tus herramientas de ventas'
              : 'Export leads to your CRM and integrate with your sales tools',
            url: `${currentUrl}#integrations`
          }
        ]
      })
    }

    // Article schema per a blog posts (si s'aplica)
    if (page === 'blog') {
      structuredData.push({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: locale === 'ca' ? 'Blog NextLeadIn' : locale === 'es' ? 'Blog NextLeadIn' : 'NextLeadIn Blog',
        description: locale === 'ca'
          ? 'Articles i guies sobre generació de leads, IA i vendes B2B'
          : locale === 'es'
          ? 'Artículos y guías sobre generación de leads, IA y ventas B2B'
          : 'Articles and guides about lead generation, AI and B2B sales',
        url: `${baseUrl}${localePath}/blog`,
        publisher: {
          '@type': 'Organization',
          name: 'NextLeadIn',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/images/logo/logo.png`
          }
        },
        inLanguage: locale === 'ca' ? 'ca-ES' : locale === 'es' ? 'es-ES' : 'en-US'
      })
    }

    return [...structuredData, ...customData]
  }

  return <SeoJsonLd data={generateAIStructuredData()} />
}

export default AIStructuredData
