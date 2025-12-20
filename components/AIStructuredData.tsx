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

    // Generar breadcrumbs automàtics si no es proporcionen
    let finalBreadcrumbs = breadcrumbs
    if (finalBreadcrumbs.length === 0) {
      finalBreadcrumbs = [
        {
          name: locale === 'ca' ? 'Inici' : locale === 'es' ? 'Inicio' : 'Home',
          url: `${baseUrl}${localePath}`
        }
      ]
      
      // Afegir breadcrumbs segons la pàgina
      if (page !== 'home') {
        const pageNames: Record<string, Record<string, string>> = {
          pricing: {
            ca: 'Preus',
            es: 'Precios',
            en: 'Pricing'
          },
          blog: {
            ca: 'Blog',
            es: 'Blog',
            en: 'Blog'
          },
          faq: {
            ca: 'Preguntes freqüents',
            es: 'Preguntas frecuentes',
            en: 'FAQ'
          },
          contact: {
            ca: 'Contacte',
            es: 'Contacto',
            en: 'Contact'
          }
        }
        
        const pageName = pageNames[page]?.[locale] || page
        finalBreadcrumbs.push({
          name: pageName,
          url: currentUrl
        })
      }
    }

    // BreadcrumbList per a millor navegació AI (sempre afegir)
    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: finalBreadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url
      }))
    })

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

    // HowTo schema per a pricing (com triar el pla adequat)
    if (page === 'pricing') {
      structuredData.push({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: locale === 'ca'
          ? 'Com triar el pla de generació de leads adequat'
          : locale === 'es'
          ? 'Cómo elegir el plan de generación de leads adecuado'
          : 'How to choose the right lead generation plan',
        description: locale === 'ca'
          ? 'Guia pas a pas per seleccionar el pla de NextLeadIn que millor s\'adapta a les teves necessitats de generació de leads'
          : locale === 'es'
          ? 'Guía paso a paso para seleccionar el plan de NextLeadIn que mejor se adapta a tus necesidades de generación de leads'
          : 'Step-by-step guide to select the NextLeadIn plan that best fits your lead generation needs',
        totalTime: 'PT5M',
        step: [
          {
            '@type': 'HowToStep',
            name: locale === 'ca' ? 'Evalua el teu volum de leads necessari' : locale === 'es' ? 'Evalúa tu volumen de leads necesario' : 'Evaluate your required lead volume',
            text: locale === 'ca'
              ? 'Calcula quantes empreses necessites contactar mensualment. Plans: Inici (500), Pro (2500), Elite (il·limitat)'
              : locale === 'es'
              ? 'Calcula cuántas empresas necesitas contactar mensualmente. Planes: Inicio (500), Pro (2500), Elite (ilimitado)'
              : 'Calculate how many companies you need to contact monthly. Plans: Start (500), Pro (2500), Elite (unlimited)',
            url: `${currentUrl}#plans`
          },
          {
            '@type': 'HowToStep',
            name: locale === 'ca' ? 'Considera les funcionalitats avançades' : locale === 'es' ? 'Considera las funcionalidades avanzadas' : 'Consider advanced features',
            text: locale === 'ca'
              ? 'Avalua si necessites integracions CRM, personalització d\'informes IA, suport prioritari o formació personalitzada'
              : locale === 'es'
              ? 'Evalúa si necesitas integraciones CRM, personalización de informes IA, soporte prioritario o formación personalizada'
              : 'Evaluate if you need CRM integrations, AI report customization, priority support or personalized training',
            url: `${currentUrl}#features`
          },
          {
            '@type': 'HowToStep',
            name: locale === 'ca' ? 'Prova el pla durant 14 dies' : locale === 'es' ? 'Prueba el plan durante 14 días' : 'Try the plan for 14 days',
            text: locale === 'ca'
              ? 'Tots els plans inclouen una prova gratuïta de 14 dies sense compromís per provar totes les funcionalitats'
              : locale === 'es'
              ? 'Todos los planes incluyen una prueba gratuita de 14 días sin compromiso para probar todas las funcionalidades'
              : 'All plans include a 14-day free trial with no commitment to try all features',
            url: `${currentUrl}#trial`
          }
        ]
      })
    }

    // HowTo schema per a contact (com contactar)
    if (page === 'contact') {
      structuredData.push({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: locale === 'ca'
          ? 'Com contactar amb NextLeadIn'
          : locale === 'es'
          ? 'Cómo contactar con NextLeadIn'
          : 'How to contact NextLeadIn',
        description: locale === 'ca'
          ? 'Guia pas a pas per contactar amb el nostre equip i obtenir suport o una consulta personalitzada'
          : locale === 'es'
          ? 'Guía paso a paso para contactar con nuestro equipo y obtener soporte o una consulta personalizada'
          : 'Step-by-step guide to contact our team and get support or a personalized consultation',
        totalTime: 'PT2M',
        step: [
          {
            '@type': 'HowToStep',
            name: locale === 'ca' ? 'Omple el formulari de contacte' : locale === 'es' ? 'Completa el formulario de contacto' : 'Fill out the contact form',
            text: locale === 'ca'
              ? 'Proporciona la teva informació de contacte i descriu les teves necessitats de generació de leads'
              : locale === 'es'
              ? 'Proporciona tu información de contacto y describe tus necesidades de generación de leads'
              : 'Provide your contact information and describe your lead generation needs',
            url: `${currentUrl}#form`
          },
          {
            '@type': 'HowToStep',
            name: locale === 'ca' ? 'Rep una resposta en 24 hores' : locale === 'es' ? 'Recibe una respuesta en 24 horas' : 'Receive a response within 24 hours',
            text: locale === 'ca'
              ? 'El nostre equip et respondrà en menys de 24 hores amb una proposta personalitzada o resposta a les teves preguntes'
              : locale === 'es'
              ? 'Nuestro equipo te responderá en menos de 24 horas con una propuesta personalizada o respuesta a tus preguntas'
              : 'Our team will respond within 24 hours with a personalized proposal or answer to your questions',
            url: `${currentUrl}#response`
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
            url: `${baseUrl}/images/logo/logo.png`,
            width: 512,
            height: 512
          }
        },
        inLanguage: locale === 'ca' ? 'ca-ES' : locale === 'es' ? 'es-ES' : 'en-US',
        datePublished: '2024-01-01',
        dateModified: new Date().toISOString().split('T')[0],
        author: {
          '@type': 'Organization',
          name: 'NextLeadIn Team'
        }
      })
    }

    // VideoObject schema (per si hi ha vídeos en el futur)
    // Aquest schema es pot activar quan s'afegeixin vídeos a la plataforma
    // if (page === 'home' && hasVideo) {
    //   structuredData.push({
    //     '@context': 'https://schema.org',
    //     '@type': 'VideoObject',
    //     name: locale === 'ca' ? 'Presentació NextLeadIn' : locale === 'es' ? 'Presentación NextLeadIn' : 'NextLeadIn Presentation',
    //     description: locale === 'ca'
    //       ? 'Vídeo de presentació de la plataforma NextLeadIn'
    //       : locale === 'es'
    //       ? 'Vídeo de presentación de la plataforma NextLeadIn'
    //       : 'NextLeadIn platform presentation video',
    //     thumbnailUrl: `${baseUrl}/images/og/home-${locale}.jpg`,
    //     uploadDate: '2024-01-01',
    //     duration: 'PT3M',
    //     contentUrl: `${baseUrl}/videos/presentation.mp4`,
    //     embedUrl: `${baseUrl}/videos/presentation.mp4`
    //   })
    // }

    // Review schema per testimonis (només a home)
    if (page === 'home') {
      // AggregateRating per a resum de valoracions
      structuredData.push({
        '@context': 'https://schema.org',
        '@type': 'AggregateRating',
        itemReviewed: {
          '@type': 'SoftwareApplication',
          name: 'NextLeadIn',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web Browser'
        },
        ratingValue: '4.8',
        reviewCount: '127',
        bestRating: '5',
        worstRating: '1'
      })
      
      // Review individuals per a testimonis específics (múltiples reviews)
      const reviews = [
        {
          author: locale === 'ca' ? 'María García, Directora Comercial' : locale === 'es' ? 'María García, Directora Comercial' : 'María García, Sales Director',
          datePublished: '2024-01-15',
          reviewBody: locale === 'ca'
            ? 'Plataforma excel·lent per generar leads qualificats. La segmentació geogràfica i els informes IA són molt útils per preparar les nostres trucades.'
            : locale === 'es'
            ? 'Plataforma excelente para generar leads cualificados. La segmentación geográfica y los informes IA son muy útiles para preparar nuestras llamadas.'
            : 'Excellent platform for generating qualified leads. Geographic segmentation and AI reports are very useful for preparing our calls.',
          ratingValue: '5'
        },
        {
          author: locale === 'ca' ? 'Jordi Martínez, CEO' : locale === 'es' ? 'Jordi Martínez, CEO' : 'Jordi Martínez, CEO',
          datePublished: '2024-02-20',
          reviewBody: locale === 'ca'
            ? 'Hem incrementat les nostres conversions un 40% gràcies a la qualitat dels leads i els informes d\'IA que ens ajuden a personalitzar l\'aproximació.'
            : locale === 'es'
            ? 'Hemos incrementado nuestras conversiones un 40% gracias a la calidad de los leads y los informes de IA que nos ayudan a personalizar el enfoque.'
            : 'We increased our conversions by 40% thanks to lead quality and AI reports that help us personalize our approach.',
          ratingValue: '5'
        }
      ]
      
      reviews.forEach(review => {
        structuredData.push({
          '@context': 'https://schema.org',
          '@type': 'Review',
          itemReviewed: {
            '@type': 'SoftwareApplication',
            name: 'NextLeadIn',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web Browser'
          },
          author: {
            '@type': 'Person',
            name: review.author
          },
          datePublished: review.datePublished,
          reviewBody: review.reviewBody,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: review.ratingValue,
            bestRating: '5',
            worstRating: '1'
          },
          publisher: {
            '@type': 'Organization',
            name: 'NextLeadIn'
          }
        })
      })
    }

    // WebPage schema per a cada pàgina
    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: locale === 'ca'
        ? (page === 'home' ? 'NextLeadIn — Generació de leads amb IA' : page === 'pricing' ? 'Preus | NextLeadIn' : page === 'contact' ? 'Contacte | NextLeadIn' : page === 'faq' ? 'Preguntes freqüents | NextLeadIn' : 'NextLeadIn')
        : locale === 'es'
        ? (page === 'home' ? 'NextLeadIn — Generación de leads con IA' : page === 'pricing' ? 'Precios | NextLeadIn' : page === 'contact' ? 'Contacto | NextLeadIn' : page === 'faq' ? 'Preguntas frecuentes | NextLeadIn' : 'NextLeadIn')
        : (page === 'home' ? 'NextLeadIn — AI-Powered Lead Generation' : page === 'pricing' ? 'Pricing | NextLeadIn' : page === 'contact' ? 'Contact | NextLeadIn' : page === 'faq' ? 'FAQ | NextLeadIn' : 'NextLeadIn'),
      url: currentUrl,
      description: locale === 'ca'
        ? 'Plataforma de generació de leads amb intel·ligència artificial per a empreses B2B'
        : locale === 'es'
        ? 'Plataforma de generación de leads con inteligencia artificial para empresas B2B'
        : 'AI-powered lead generation platform for B2B companies',
      inLanguage: locale === 'ca' ? 'ca-ES' : locale === 'es' ? 'es-ES' : 'en-US',
      isPartOf: {
        '@type': 'WebSite',
        name: 'NextLeadIn',
        url: baseUrl
      },
      about: {
        '@type': 'Thing',
        name: 'Lead Generation Software'
      }
    })

    return [...structuredData, ...customData]
  }

  return <SeoJsonLd data={generateAIStructuredData()} />
}

export default AIStructuredData
