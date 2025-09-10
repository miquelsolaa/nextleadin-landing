import { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  canonical: string
  ogImage?: string
  noindex?: boolean
  structuredData?: Record<string, any>[]
}

export interface LocalizedSEOConfig {
  ca: SEOConfig
  es: SEOConfig
  en: SEOConfig
}

// Configuració SEO centralitzada per a AI-first optimization
export const seoConfig: Record<string, LocalizedSEOConfig> = {
  home: {
    ca: {
      title: 'NextLeadIn — Generació de leads hipersegmentats amb IA',
      description: 'Plataforma avançada de generació de leads amb intel·ligència artificial. Troba clients qualificats per zona, sector i paraules clau amb informes IA per preparar trucades i tancar més oportunitats.',
      keywords: [
        'generació de leads',
        'intel·ligència artificial',
        'segmentació geogràfica',
        'qualificació de leads',
        'vendes B2B',
        'equip comercial',
        'prospectar empreses',
        'buscar clients potencials',
        'enriquiment de dades amb IA',
        'automatització de vendes',
        'CRM integració',
        'leads qualificats',
        'conversió de vendes',
        'pipeline comercial'
      ],
      canonical: 'https://nextleadin.com/',
      ogImage: '/images/og/home-ca.jpg',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'NextLeadIn',
          url: 'https://nextleadin.com',
          logo: 'https://nextleadin.com/images/logo/logo.png',
          description: 'Plataforma avançada de generació de leads amb intel·ligència artificial per a empreses B2B',
          foundingDate: '2024',
          areaServed: ['ES', 'EU'],
          serviceType: 'Lead Generation Software',
          offers: {
            '@type': 'Offer',
            name: 'Plataforma de generació de leads amb IA',
            description: 'Troba clients qualificats per zona, sector i paraules clau amb informes IA',
            category: 'Software as a Service'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+34-684-781-855',
            contactType: 'customer service',
            areaServed: 'ES',
            availableLanguage: ['ca', 'es', 'en']
          },
          sameAs: [
            'https://linkedin.com/company/nextleadin',
            'https://twitter.com/nextleadin'
          ]
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'NextLeadIn',
          url: 'https://nextleadin.com',
          inLanguage: 'ca-ES',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://nextleadin.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'NextLeadIn',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web Browser',
          description: 'Plataforma de generació de leads amb intel·ligència artificial',
          offers: {
            '@type': 'Offer',
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
          featureList: [
            'Segmentació geogràfica avançada',
            'Informes generats per IA',
            'Integració amb CRM',
            'Qualificació automàtica de leads',
            'Analytics de conversió'
          ]
        }
      ]
    },
    es: {
      title: 'NextLeadIn — Generación de leads hipersegmentados con IA',
      description: 'Plataforma avanzada de generación de leads con inteligencia artificial. Encuentra clientes cualificados por zona, sector y palabras clave con informes IA para preparar llamadas y cerrar más oportunidades.',
      keywords: [
        'generación de leads',
        'inteligencia artificial',
        'segmentación geográfica',
        'calificación de leads',
        'ventas B2B',
        'equipo comercial',
        'prospectar empresas',
        'buscar clientes potenciales',
        'enriquecimiento de datos con IA',
        'automatización de ventas',
        'integración CRM',
        'leads cualificados',
        'conversión de ventas',
        'pipeline comercial'
      ],
      canonical: 'https://nextleadin.com/es',
      ogImage: '/images/og/home-es.jpg',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'NextLeadIn',
          url: 'https://nextleadin.com',
          logo: 'https://nextleadin.com/images/logo/logo.png',
          description: 'Plataforma avanzada de generación de leads con inteligencia artificial para empresas B2B',
          foundingDate: '2024',
          areaServed: ['ES', 'EU'],
          serviceType: 'Lead Generation Software',
          offers: {
            '@type': 'Offer',
            name: 'Plataforma de generación de leads con IA',
            description: 'Encuentra clientes cualificados por zona, sector y palabras clave con informes IA',
            category: 'Software as a Service'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+34-684-781-855',
            contactType: 'customer service',
            areaServed: 'ES',
            availableLanguage: ['ca', 'es', 'en']
          },
          sameAs: [
            'https://linkedin.com/company/nextleadin',
            'https://twitter.com/nextleadin'
          ]
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'NextLeadIn',
          url: 'https://nextleadin.com',
          inLanguage: 'es-ES',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://nextleadin.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        }
      ]
    },
    en: {
      title: 'NextLeadIn — AI-Powered Hyper-Segmented Lead Generation',
      description: 'Advanced lead generation platform with artificial intelligence. Find qualified clients by location, sector and keywords with AI reports to prepare calls and close more opportunities.',
      keywords: [
        'lead generation',
        'artificial intelligence',
        'geographic segmentation',
        'lead qualification',
        'B2B sales',
        'sales team',
        'prospect companies',
        'find potential clients',
        'AI data enrichment',
        'sales automation',
        'CRM integration',
        'qualified leads',
        'sales conversion',
        'sales pipeline'
      ],
      canonical: 'https://nextleadin.com/en',
      ogImage: '/images/og/home-en.jpg',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'NextLeadIn',
          url: 'https://nextleadin.com',
          logo: 'https://nextleadin.com/images/logo/logo.png',
          description: 'Advanced lead generation platform with artificial intelligence for B2B companies',
          foundingDate: '2024',
          areaServed: ['ES', 'EU'],
          serviceType: 'Lead Generation Software',
          offers: {
            '@type': 'Offer',
            name: 'AI-Powered Lead Generation Platform',
            description: 'Find qualified clients by location, sector and keywords with AI reports',
            category: 'Software as a Service'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+34-684-781-855',
            contactType: 'customer service',
            areaServed: 'ES',
            availableLanguage: ['ca', 'es', 'en']
          },
          sameAs: [
            'https://linkedin.com/company/nextleadin',
            'https://twitter.com/nextleadin'
          ]
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'NextLeadIn',
          url: 'https://nextleadin.com',
          inLanguage: 'en-US',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://nextleadin.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        }
      ]
    }
  },
  pricing: {
    ca: {
      title: 'Preus | NextLeadIn',
      description: 'Plans de preus per a la generació de leads amb IA. Des de 19€/mes per a empreses que comencen fins a solucions empresarials il·limitades. Tria el volum de leads i funcionalitats que necessites.',
      keywords: [
        'preus generació leads',
        'plans IA',
        'costos CRM',
        'preus vendes B2B',
        'tarifes leads qualificats',
        'preus automatització',
        'costos segmentació',
        'preus integració CRM'
      ],
      canonical: 'https://nextleadin.com/pricing',
      ogImage: '/images/og/pricing-ca.jpg',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'NextLeadIn - Plans de preus',
          description: 'Plans de preus per a la generació de leads amb intel·ligència artificial',
          offers: [
            {
              '@type': 'Offer',
              name: 'Pla Inici',
              price: '19',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: '19',
                priceCurrency: 'EUR',
                billingIncrement: '1',
                unitText: 'MONTH'
              },
              description: 'Perfecte per a empreses que comencen amb la generació de leads'
            },
            {
              '@type': 'Offer',
              name: 'Pla Pro',
              price: '49',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: '49',
                priceCurrency: 'EUR',
                billingIncrement: '1',
                unitText: 'MONTH'
              },
              description: 'Ideal per a equips comercials que necessiten més volum i funcionalitats avançades'
            },
            {
              '@type': 'Offer',
              name: 'Pla Elite',
              price: '99',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: '99',
                priceCurrency: 'EUR',
                billingIncrement: '1',
                unitText: 'MONTH'
              },
              description: 'Solució completa per a empreses que necessiten màxima capacitat i personalització'
            }
          ]
        }
      ]
    },
    es: {
      title: 'Precios | NextLeadIn',
      description: 'Planes de precios para la generación de leads con IA. Desde 19€/mes para empresas que comienzan hasta soluciones empresariales ilimitadas. Elige el volumen de leads y funcionalidades que necesitas.',
      keywords: [
        'precios generación leads',
        'planes IA',
        'costos CRM',
        'precios ventas B2B',
        'tarifas leads cualificados',
        'precios automatización',
        'costos segmentación',
        'precios integración CRM'
      ],
      canonical: 'https://nextleadin.com/es/pricing',
      ogImage: '/images/og/pricing-es.jpg',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'NextLeadIn - Planes de precios',
          description: 'Planes de precios para la generación de leads con inteligencia artificial',
          offers: [
            {
              '@type': 'Offer',
              name: 'Plan Inicio',
              price: '19',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: '19',
                priceCurrency: 'EUR',
                billingIncrement: '1',
                unitText: 'MONTH'
              },
              description: 'Perfecto para empresas que comienzan con la generación de leads'
            },
            {
              '@type': 'Offer',
              name: 'Plan Pro',
              price: '49',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: '49',
                priceCurrency: 'EUR',
                billingIncrement: '1',
                unitText: 'MONTH'
              },
              description: 'Ideal para equipos comerciales que necesitan más volumen y funcionalidades avanzadas'
            },
            {
              '@type': 'Offer',
              name: 'Plan Elite',
              price: '99',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: '99',
                priceCurrency: 'EUR',
                billingIncrement: '1',
                unitText: 'MONTH'
              },
              description: 'Solución completa para empresas que necesitan máxima capacidad y personalización'
            }
          ]
        }
      ]
    },
    en: {
      title: 'Pricing | NextLeadIn',
      description: 'Pricing plans for AI-powered lead generation. From €19/month for starting businesses to unlimited enterprise solutions. Choose the lead volume and features you need.',
      keywords: [
        'lead generation pricing',
        'AI plans',
        'CRM costs',
        'B2B sales pricing',
        'qualified leads pricing',
        'automation pricing',
        'segmentation costs',
        'CRM integration pricing'
      ],
      canonical: 'https://nextleadin.com/en/pricing',
      ogImage: '/images/og/pricing-en.jpg',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'NextLeadIn - Pricing Plans',
          description: 'Pricing plans for AI-powered lead generation',
          offers: [
            {
              '@type': 'Offer',
              name: 'Start Plan',
              price: '19',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: '19',
                priceCurrency: 'EUR',
                billingIncrement: '1',
                unitText: 'MONTH'
              },
              description: 'Perfect for businesses starting with lead generation'
            },
            {
              '@type': 'Offer',
              name: 'Pro Plan',
              price: '49',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: '49',
                priceCurrency: 'EUR',
                billingIncrement: '1',
                unitText: 'MONTH'
              },
              description: 'Ideal for sales teams that need more volume and advanced features'
            },
            {
              '@type': 'Offer',
              name: 'Elite Plan',
              price: '99',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: '99',
                priceCurrency: 'EUR',
                billingIncrement: '1',
                unitText: 'MONTH'
              },
              description: 'Complete solution for businesses that need maximum capacity and customization'
            }
          ]
        }
      ]
    }
  },
  contact: {
    ca: {
      title: 'Contacte | NextLeadIn',
      description: 'Parla amb el nostre equip d\'experts en generació de leads amb IA. Obtén una consulta personalitzada per optimitzar el teu pipeline comercial i augmentar la conversió de vendes.',
      keywords: [
        'contacte generació leads',
        'consulta IA vendes',
        'suport comercial',
        'demo plataforma',
        'assessorament B2B',
        'contacte vendes',
        'consulta personalitzada'
      ],
      canonical: 'https://nextleadin.com/contact',
      ogImage: '/images/og/contact-ca.jpg',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contacte NextLeadIn',
          description: 'Parla amb el nostre equip d\'experts en generació de leads amb IA',
          mainEntity: {
            '@type': 'Organization',
            name: 'NextLeadIn',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+34-684-781-855',
              contactType: 'customer service',
              areaServed: 'ES',
              availableLanguage: ['ca', 'es', 'en'],
              hoursAvailable: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00'
              }
            }
          }
        }
      ]
    },
    es: {
      title: 'Contacto | NextLeadIn',
      description: 'Habla con nuestro equipo de expertos en generación de leads con IA. Obtén una consulta personalizada para optimizar tu pipeline comercial y aumentar la conversión de ventas.',
      keywords: [
        'contacto generación leads',
        'consulta IA ventas',
        'soporte comercial',
        'demo plataforma',
        'asesoramiento B2B',
        'contacto ventas',
        'consulta personalizada'
      ],
      canonical: 'https://nextleadin.com/es/contact',
      ogImage: '/images/og/contact-es.jpg',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contacto NextLeadIn',
          description: 'Habla con nuestro equipo de expertos en generación de leads con IA',
          mainEntity: {
            '@type': 'Organization',
            name: 'NextLeadIn',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+34-684-781-855',
              contactType: 'customer service',
              areaServed: 'ES',
              availableLanguage: ['ca', 'es', 'en'],
              hoursAvailable: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00'
              }
            }
          }
        }
      ]
    },
    en: {
      title: 'Contact | NextLeadIn',
      description: 'Talk to our team of AI lead generation experts. Get a personalized consultation to optimize your sales pipeline and increase sales conversion.',
      keywords: [
        'lead generation contact',
        'AI sales consultation',
        'commercial support',
        'platform demo',
        'B2B consulting',
        'sales contact',
        'personalized consultation'
      ],
      canonical: 'https://nextleadin.com/en/contact',
      ogImage: '/images/og/contact-en.jpg',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'NextLeadIn Contact',
          description: 'Talk to our team of AI lead generation experts',
          mainEntity: {
            '@type': 'Organization',
            name: 'NextLeadIn',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+34-684-781-855',
              contactType: 'customer service',
              areaServed: 'ES',
              availableLanguage: ['ca', 'es', 'en'],
              hoursAvailable: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00'
              }
            }
          }
        }
      ]
    }
  },
  faq: {
    ca: {
      title: 'Preguntes freqüents | NextLeadIn',
      description: 'Respostes a les preguntes més comunes sobre la nostra plataforma de generació de leads amb IA. Descobreix com funciona la segmentació, els informes IA i les integracions.',
      keywords: [
        'preguntes freqüents leads',
        'FAQ generació leads',
        'com funciona IA',
        'segmentació geogràfica',
        'integració CRM',
        'informes IA',
        'suport tècnic'
      ],
      canonical: 'https://nextleadin.com/faq',
      ogImage: '/images/og/faq-ca.jpg',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          name: 'Preguntes freqüents NextLeadIn',
          description: 'Respostes a les preguntes més comunes sobre la plataforma de generació de leads amb IA',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Com seleccioneu les empreses per zona i sector?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Pots triar municipi, barri o província i afinar per sector amb CNAE i paraules clau. El sistema calcula el volum estimat de leads i en mostra la llista perquè la revisis abans d\'exportar.'
              }
            },
            {
              '@type': 'Question',
              name: 'Amb quina freqüència s\'actualitzen les dades?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Depèn del pla: Inici (mensual), Pro (setmanal), Empresa (diària). Ens centrem a mantenir qualitat, cobertura i informació accionable.'
              }
            },
            {
              '@type': 'Question',
              name: 'Què inclou l\'informe per empresa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Resum executiu, punts de conversa, necessitats detectades, objeccions probables i angle de contacte suggerit per tancar reunió.'
              }
            }
          ]
        }
      ]
    },
    es: {
      title: 'Preguntas frecuentes | NextLeadIn',
      description: 'Respuestas a las preguntas más comunes sobre nuestra plataforma de generación de leads con IA. Descubre cómo funciona la segmentación, los informes IA y las integraciones.',
      keywords: [
        'preguntas frecuentes leads',
        'FAQ generación leads',
        'cómo funciona IA',
        'segmentación geográfica',
        'integración CRM',
        'informes IA',
        'soporte técnico'
      ],
      canonical: 'https://nextleadin.com/es/faq',
      ogImage: '/images/og/faq-es.jpg',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          name: 'Preguntas frecuentes NextLeadIn',
          description: 'Respuestas a las preguntas más comunes sobre la plataforma de generación de leads con IA',
          mainEntity: [
            {
              '@type': 'Question',
              name: '¿Cómo seleccionáis las empresas por zona y sector?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Puedes elegir municipio, barrio o provincia y afinar por sector con CNAE y palabras clave. El sistema calcula el volumen estimado de leads y muestra la lista para que la revises antes de exportar.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Con qué frecuencia se actualizan los datos?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Depende del plan: Inicio (mensual), Pro (semanal), Empresa (diario). Nos centramos en mantener calidad, cobertura e información accionable.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Qué incluye el informe por empresa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Resumen ejecutivo, puntos de conversación, necesidades detectadas, objeciones probables y ángulo de contacto sugerido para cerrar reunión.'
              }
            }
          ]
        }
      ]
    },
    en: {
      title: 'Frequently Asked Questions | NextLeadIn',
      description: 'Answers to the most common questions about our AI-powered lead generation platform. Discover how segmentation, AI reports and integrations work.',
      keywords: [
        'lead generation FAQ',
        'AI platform questions',
        'how does AI work',
        'geographic segmentation',
        'CRM integration',
        'AI reports',
        'technical support'
      ],
      canonical: 'https://nextleadin.com/en/faq',
      ogImage: '/images/og/faq-en.jpg',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          name: 'NextLeadIn Frequently Asked Questions',
          description: 'Answers to the most common questions about the AI-powered lead generation platform',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How do you select companies by location and sector?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'You can choose municipality, neighborhood or province and refine by sector with CNAE and keywords. The system calculates the estimated lead volume and shows the list for you to review before exporting.'
              }
            },
            {
              '@type': 'Question',
              name: 'How often are the data updated?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'It depends on the plan: Start (monthly), Pro (weekly), Enterprise (daily). We focus on maintaining quality, coverage and actionable information.'
              }
            },
            {
              '@type': 'Question',
              name: 'What does the company report include?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Executive summary, talking points, detected needs, probable objections and suggested contact angle to close a meeting.'
              }
            }
          ]
        }
      ]
    }
  }
}

// Funció per generar metadata optimitzada per a AI
export function generateAIOptimizedMetadata(
  page: string,
  locale: 'ca' | 'es' | 'en',
  customData?: Partial<SEOConfig>
): Metadata {
  const config = seoConfig[page]?.[locale]
  if (!config) {
    throw new Error(`SEO config not found for page: ${page}, locale: ${locale}`)
  }

  const finalConfig = { ...config, ...customData }
  const baseUrl = 'https://nextleadin.com'
  const localePath = locale === 'ca' ? '' : `/${locale}`
  const fullUrl = `${baseUrl}${localePath}${page === 'home' ? '' : `/${page}`}`

  return {
    title: {
      default: finalConfig.title,
      template: '%s | NextLeadIn'
    },
    description: finalConfig.description,
    keywords: finalConfig.keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: finalConfig.canonical,
      languages: {
        'x-default': `${baseUrl}/es${page === 'home' ? '' : `/${page}`}`,
        'ca-ES': `${baseUrl}${page === 'home' ? '' : `/${page}`}`,
        'es-ES': `${baseUrl}/es${page === 'home' ? '' : `/${page}`}`,
        'en-US': `${baseUrl}/en${page === 'home' ? '' : `/${page}`}`
      }
    },
    openGraph: {
      type: 'website',
      locale: locale === 'ca' ? 'ca_ES' : locale === 'es' ? 'es_ES' : 'en_US',
      url: finalConfig.canonical,
      title: finalConfig.title,
      description: finalConfig.description,
      siteName: 'NextLeadIn',
      images: [
        {
          url: finalConfig.ogImage || '/images/og/default.jpg',
          alt: finalConfig.title,
          width: 1200,
          height: 630
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: finalConfig.title,
      description: finalConfig.description,
      images: [finalConfig.ogImage || '/images/og/default.jpg'],
      creator: '@nextleadin'
    },
    robots: {
      index: !finalConfig.noindex,
      follow: true,
      googleBot: {
        index: !finalConfig.noindex,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION || '',
      yandex: process.env.YANDEX_VERIFICATION || ''
    }
  }
}

// Funció per generar structured data per a AI
export function generateAIStructuredData(
  page: string,
  locale: 'ca' | 'es' | 'en',
  customData?: Record<string, any>[]
): Record<string, any>[] {
  const config = seoConfig[page]?.[locale]
  if (!config) {
    return []
  }

  const baseStructuredData = config.structuredData || []
  const customStructuredData = customData || []
  
  return [...baseStructuredData, ...customStructuredData]
}
