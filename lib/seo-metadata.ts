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
      title: 'NextLeadIn — Leads de negocis locals que altres plataformes no tenen',
      description: 'Genera llistes de negocis locals amb telèfon, dades enriquides i anàlisi de ressenyes amb IA per preparar trucades en fred i vendre més B2B a PIMES que no trobes a LinkedIn.',
      keywords: [
        'leads negocis locals',
        'negocis locals',
        'generació de leads locals',
        'restaurants tallers comerços',
        'prospecció local B2B',
        'anàlisi ressenyes IA',
        'segmentació geogràfica',
        'trucades en fred negocis locals',
        'dades enriquides i telèfon',
        'equips comercials i agències',
        'scoring potencial negoci',
        'pipeline de leads locals'
      ],
      canonical: 'https://nextleadin.com/',
      ogImage: '/images/og/og-image.png',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'NextLeadIn',
          url: 'https://nextleadin.com',
          logo: 'https://nextleadin.com/images/logo/logo.png',
          description: 'Plataforma de leads de negocis locals per a vendes B2B i agències',
          foundingDate: '2024',
          areaServed: ['ES', 'EU'],
          serviceType: 'Lead Generation Software',
          offers: {
            '@type': 'Offer',
            name: 'Leads de negocis locals',
            description: 'Troba negocis locals amb dades enriquides i anàlisi de ressenyes amb IA',
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
            price: '0',
            priceCurrency: 'EUR',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '0',
              priceCurrency: 'EUR',
              billingIncrement: '1',
              unitText: 'MONTH'
            }
          },
          featureList: [
            'Leads de negocis locals',
            'Cerca per radi, barri, codi postal',
            'Anàlisi de ressenyes amb IA',
            'Mapa visual i alertes noves obertures',
            'Anàlisi competitiva i scoring predictiu'
          ]
        }
      ]
    },
    es: {
      title: 'NextLeadIn — Leads de negocios locales que otras plataformas no tienen',
      description: 'Genera listas de negocios locales en España con teléfono, datos enriquecidos y análisis de reseñas con IA para preparar llamadas en frío y cerrar más ventas B2B con PYMES que no están en LinkedIn.',
      keywords: [
        'leads negocios locales',
        'negocios locales',
        'generación de leads',
        'restaurantes talleres comercios',
        'prospección local B2B',
        'análisis reseñas IA',
        'segmentación geográfica España',
        'ventas B2B locales',
        'llamadas en frío negocios locales',
        'datos enriquecidos y teléfono',
        'equipos comerciales y agencias',
        'scoring potencial negocio',
        'pipeline de leads locales'
      ],
      canonical: 'https://nextleadin.com/es',
      ogImage: '/images/og/og-image.png',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'NextLeadIn',
          url: 'https://nextleadin.com',
          logo: 'https://nextleadin.com/images/logo/logo.png',
          description: 'Plataforma de leads de negocios locales para ventas B2B y agencias',
          foundingDate: '2024',
          areaServed: ['ES', 'EU'],
          serviceType: 'Lead Generation Software',
          offers: {
            '@type': 'Offer',
            name: 'Leads de negocios locales',
            description: 'Encuentra negocios locales con datos enriquecidos y análisis de reseñas con IA',
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
      title: 'NextLeadIn — Local business leads beyond LinkedIn',
      description: 'AI-powered platform that turns hard-to-find local businesses into ready-to-call lists, with phone numbers, enriched data and review analysis to prepare cold calls and close more B2B deals.',
      keywords: [
        'local business leads',
        'lead generation',
        'hard-to-find local businesses',
        'geographic segmentation',
        'cold calling',
        'B2B sales',
        'sales teams and agencies',
        'AI review analysis',
        'AI data enrichment',
        'CRM integration',
        'qualified local leads',
        'sales conversion',
        'sales pipeline'
      ],
      canonical: 'https://nextleadin.com/en',
      ogImage: '/images/og/og-image-en.png',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'NextLeadIn',
          url: 'https://nextleadin.com',
          logo: 'https://nextleadin.com/images/logo/logo.png',
          description: 'Local business leads platform for B2B sales and agencies',
          foundingDate: '2024',
          areaServed: ['ES', 'EU'],
          serviceType: 'Lead Generation Software',
          offers: {
            '@type': 'Offer',
            name: 'Local Business Leads',
            description: 'Find local businesses with enriched data and AI review analysis',
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
  blog: {
    ca: {
      title: 'Blog NextLeadIn — Leads de negocis locals i IA',
      description: 'Guies i articles sobre com generar leads de negocis locals que no són a LinkedIn, preparar trucades en fred amb IA i escalar vendes B2B.',
      keywords: [
        'blog leads negocis locals',
        'blog generació de leads',
        'negocis locals més enllà de LinkedIn',
        'trucades en fred',
        'IA per a vendes',
        'vendes B2B locals',
        'anàlisi de ressenyes',
        'prospecció comercial'
      ],
      canonical: 'https://nextleadin.com/blog',
      ogImage: '/images/og/blog-ca.jpg'
    },
    es: {
      title: 'Blog NextLeadIn — Leads de negocios locales e IA',
      description: 'Guías y artículos sobre cómo conseguir leads de negocios locales que no están en LinkedIn, preparar llamadas en frío con IA y escalar ventas B2B.',
      keywords: [
        'blog leads negocios locales',
        'blog generación de leads',
        'negocios locales más allá de LinkedIn',
        'llamadas en frío',
        'IA para ventas',
        'ventas B2B locales',
        'análisis de reseñas',
        'prospección comercial'
      ],
      canonical: 'https://nextleadin.com/es/blog',
      ogImage: '/images/og/blog-es.jpg'
    },
    en: {
      title: 'NextLeadIn Blog — Local business leads and AI',
      description: 'Guides and articles on getting local business leads beyond LinkedIn, preparing AI-powered cold calls and scaling B2B sales.',
      keywords: [
        'local business leads blog',
        'lead generation blog',
        'local leads beyond LinkedIn',
        'cold calling',
        'AI for sales',
        'local B2B sales',
        'review analysis',
        'sales prospecting'
      ],
      canonical: 'https://nextleadin.com/en/blog',
      ogImage: '/images/og/blog-en.jpg'
    }
  },
  comparador: {
    ca: {
      title: 'Comparador NextLeadIn vs Enginy AI, Apollo, Lusha',
      description: 'Comparativa NextLeadIn vs Enginy AI, Apollo, Lusha. NextLeadIn troba negocis locals; la competència només LinkedIn. Rating, ressenyes, horaris i anàlisi IA.',
      keywords: [
        'nextleadin vs enginy ai',
        'nextleadin vs apollo',
        'nextleadin vs lusha',
        'leads negocis locals vs LinkedIn',
        'negocis locals prospecció',
        'comparativa generació leads',
        'alternatives apollo io',
        'eines negocis locals'
      ],
      canonical: 'https://nextleadin.com/compare',
      ogImage: '/images/og/compare-ca.jpg',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Comparador NextLeadIn',
          description: 'Comparatives entre eines de lead acquisition i NextLeadIn',
          url: 'https://nextleadin.com/compare'
        }
      ]
    },
    es: {
      title: 'Comparador NextLeadIn vs Enginy AI, Apollo, Lusha',
      description: 'Comparativa NextLeadIn vs Enginy AI, Apollo, Lusha. NextLeadIn encuentra negocios locales; la competencia solo LinkedIn. Valoración, reseñas, horarios y análisis IA.',
      keywords: [
        'nextleadin vs enginy ai',
        'nextleadin vs apollo',
        'nextleadin vs lusha',
        'leads negocios locales vs LinkedIn',
        'negocios locales prospección',
        'comparativa generación leads',
        'alternativas apollo io',
        'herramientas negocios locales'
      ],
      canonical: 'https://nextleadin.com/es/compare',
      ogImage: '/images/og/compare-es.jpg',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Comparador NextLeadIn',
          description: 'Comparativas entre herramientas de lead acquisition y NextLeadIn',
          url: 'https://nextleadin.com/es/compare'
        }
      ]
    },
    en: {
      title: 'NextLeadIn vs Enginy AI, Apollo, Lusha',
      description: 'NextLeadIn vs Enginy AI, Apollo, Lusha comparison. NextLeadIn finds local businesses; competitors use LinkedIn only. Rating, reviews, hours and AI analysis.',
      keywords: [
        'nextleadin vs enginy ai',
        'nextleadin vs apollo',
        'nextleadin vs lusha',
        'local business leads vs LinkedIn',
        'local business prospecting',
        'lead generation comparison',
        'apollo io alternatives',
        'local business tools'
      ],
      canonical: 'https://nextleadin.com/en/compare',
      ogImage: '/images/og/compare-en.jpg',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'NextLeadIn Comparisons',
          description: 'Comparisons between lead acquisition tools and NextLeadIn',
          url: 'https://nextleadin.com/en/compare'
        }
      ]
    }
  },
  'terms-and-conditions': {
    ca: {
      title: 'Termes i Condicions',
      description: 'Termes i condicions d\'ús del servei NextLeadIn. Informació sobre acceptació, descripció del servei, registre, preus, obligacions i drets.',
      keywords: ['termes condicions', 'condicions ús', 'NextLeadIn legal', 'contracte servei'],
      canonical: 'https://nextleadin.com/ca/terms-and-conditions',
      ogImage: '/images/og/og-image.png',
    },
    es: {
      title: 'Términos y Condiciones',
      description: 'Términos y condiciones de uso del servicio NextLeadIn. Información sobre aceptación, descripción del servicio, registro, precios, obligaciones y derechos.',
      keywords: ['términos condiciones', 'condiciones uso', 'NextLeadIn legal', 'contrato servicio'],
      canonical: 'https://nextleadin.com/terms-and-conditions',
      ogImage: '/images/og/og-image.png',
    },
    en: {
      title: 'Terms and Conditions',
      description: 'Terms and conditions of use for the NextLeadIn service. Information on acceptance, service description, registration, pricing, obligations and rights.',
      keywords: ['terms conditions', 'terms of use', 'NextLeadIn legal', 'service agreement'],
      canonical: 'https://nextleadin.com/en/terms-and-conditions',
      ogImage: '/images/og/og-image.png',
    },
  },
  'privacy-policy': {
    ca: {
      title: 'Política de Privacitat',
      description: 'Política de privacitat de NextLeadIn. Informació sobre recollida de dades, finalitats del tractament, drets dels interessats i seguretat.',
      keywords: ['política privacitat', 'protecció dades', 'RGPD', 'NextLeadIn privacitat'],
      canonical: 'https://nextleadin.com/ca/privacy-policy',
      ogImage: '/images/og/og-image.png',
    },
    es: {
      title: 'Política de Privacidad',
      description: 'Política de privacidad de NextLeadIn. Información sobre recopilación de datos, finalidades del tratamiento, derechos de los interesados y seguridad.',
      keywords: ['política privacidad', 'protección datos', 'RGPD', 'NextLeadIn privacidad'],
      canonical: 'https://nextleadin.com/privacy-policy',
      ogImage: '/images/og/og-image.png',
    },
    en: {
      title: 'Privacy Policy',
      description: 'NextLeadIn privacy policy. Information on data collection, processing purposes, data subject rights and security.',
      keywords: ['privacy policy', 'data protection', 'GDPR', 'NextLeadIn privacy'],
      canonical: 'https://nextleadin.com/en/privacy-policy',
      ogImage: '/images/og/og-image.png',
    },
  },
  'cookie-policy': {
    ca: {
      title: 'Política de Cookies',
      description: 'Política de cookies de NextLeadIn. Tipus de cookies, finalitats, gestió i drets dels usuaris sobre cookies i tecnologies similars.',
      keywords: ['política cookies', 'cookies', 'consentiment cookies', 'NextLeadIn cookies'],
      canonical: 'https://nextleadin.com/ca/cookie-policy',
      ogImage: '/images/og/og-image.png',
    },
    es: {
      title: 'Política de Cookies',
      description: 'Política de cookies de NextLeadIn. Tipos de cookies, finalidades, gestión y derechos de los usuarios sobre cookies y tecnologías similares.',
      keywords: ['política cookies', 'cookies', 'consentimiento cookies', 'NextLeadIn cookies'],
      canonical: 'https://nextleadin.com/cookie-policy',
      ogImage: '/images/og/og-image.png',
    },
    en: {
      title: 'Cookie Policy',
      description: 'NextLeadIn cookie policy. Types of cookies, purposes, management and user rights regarding cookies and similar technologies.',
      keywords: ['cookie policy', 'cookies', 'cookie consent', 'NextLeadIn cookies'],
      canonical: 'https://nextleadin.com/en/cookie-policy',
      ogImage: '/images/og/og-image.png',
    },
  },
  pricing: {
    ca: {
      title: 'Preus i plans — Des de 79€/mes',
      description: 'Plans per trobar negocis locals. Local Business €79/mes (500 leads, dades enriquides, anàlisi ressenyes IA). Professional €199/mes. Enterprise a mida.',
      keywords: [
        'preus leads negocis locals',
        'plans negocis locals',
        'preus Local Business',
        'costos generació leads',
        'preus vendes B2B locals',
        'tarifes anàlisi ressenyes',
        'preus mapa visual',
        'preus NextLeadIn'
      ],
      canonical: 'https://nextleadin.com/pricing',
      ogImage: '/images/og/pricing-ca.jpg',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          '@id': 'https://nextleadin.com/pricing',
          name: 'NextLeadIn - Plans de preus',
          description: 'Plans de preus per a la generació de leads amb intel·ligència artificial',
          image: 'https://nextleadin.com/images/og/pricing-ca.jpg',
          brand: {
            '@type': 'Brand',
            name: 'NextLeadIn',
            logo: 'https://nextleadin.com/images/logo/logo.png'
          },
          category: 'Software as a Service',
          productID: 'nextleadin-pricing',
          sku: 'NLI-PRICING',
          manufacturer: {
            '@type': 'Organization',
            name: 'NextLeadIn'
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '127',
            bestRating: '5',
            worstRating: '1'
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'Tipus de servei',
              value: 'SaaS - Lead Generation'
            },
            {
              '@type': 'PropertyValue',
              name: 'Regió',
              value: 'Espanya, Europa'
            },
            {
              '@type': 'PropertyValue',
              name: 'Idiomes',
              value: 'Català, Espanyol, Anglès'
            }
          ],
          offers: [
            {
              '@type': 'Offer',
              '@id': 'https://nextleadin.com/pricing#plan-local-business',
              name: 'Local Business',
              price: '79',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              url: 'https://nextleadin.com/pricing',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '79',
                priceCurrency: 'EUR',
                billingIncrement: '1',
                unitText: 'MONTH',
                valueAddedTaxIncluded: true,
                referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' }
              },
              description: '500 leads/mes, dades enriquides, anàlisi ressenyes IA, mapa visual',
              eligibleQuantity: { '@type': 'QuantitativeValue', value: 500, unitText: 'leads per mes' },
              itemOffered: { '@type': 'Service', name: 'NextLeadIn - Local Business', serviceType: 'Lead Generation Service', areaServed: 'ES' },
              seller: { '@type': 'Organization', name: 'NextLeadIn' }
            },
            {
              '@type': 'Offer',
              '@id': 'https://nextleadin.com/pricing#plan-professional',
              name: 'Professional',
              price: '199',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              url: 'https://nextleadin.com/pricing',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '199',
                priceCurrency: 'EUR',
                billingIncrement: '1',
                unitText: 'MONTH',
                valueAddedTaxIncluded: true,
                referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' }
              },
              description: '2.000 leads/mes, anàlisi competitiva, scoring predictiu, integracions CRM',
              eligibleQuantity: { '@type': 'QuantitativeValue', value: 2000, unitText: 'leads per mes' },
              itemOffered: { '@type': 'Service', name: 'NextLeadIn - Professional', serviceType: 'Lead Generation Service', areaServed: 'ES' },
              seller: { '@type': 'Organization', name: 'NextLeadIn' }
            },
            {
              '@type': 'Offer',
              '@id': 'https://nextleadin.com/pricing#plan-enterprise',
              name: 'Enterprise',
              price: '599',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              url: 'https://nextleadin.com/pricing',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '599',
                priceCurrency: 'EUR',
                billingIncrement: '1',
                unitText: 'MONTH',
                valueAddedTaxIncluded: true,
                referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' }
              },
              description: 'Leads il·limitats, API, white-label, account manager',
              eligibleQuantity: { '@type': 'QuantitativeValue', value: -1, unitText: 'leads il·limitats' },
              itemOffered: { '@type': 'Service', name: 'NextLeadIn - Enterprise', serviceType: 'Lead Generation Service', areaServed: 'ES' },
              seller: { '@type': 'Organization', name: 'NextLeadIn' }
            }
          ]
        }
      ]
    },
    es: {
      title: 'Precios y planes — Desde 79€/mes',
      description: 'Planes para encontrar negocios locales. Local Business €79/mes (500 leads, datos enriquecidos, análisis reseñas IA). Professional €199/mes. Enterprise a medida.',
      keywords: [
        'precios leads negocios locales',
        'planes negocios locales',
        'precios Local Business',
        'costos generación leads',
        'precios ventas B2B locales',
        'tarifas análisis reseñas',
        'precios mapa visual',
        'precios NextLeadIn'
      ],
      canonical: 'https://nextleadin.com/es/pricing',
      ogImage: '/images/og/pricing-es.jpg',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          '@id': 'https://nextleadin.com/es/pricing',
          name: 'NextLeadIn - Planes de precios',
          description: 'Planes de precios para la generación de leads con inteligencia artificial',
          image: 'https://nextleadin.com/images/og/pricing-es.jpg',
          brand: {
            '@type': 'Brand',
            name: 'NextLeadIn',
            logo: 'https://nextleadin.com/images/logo/logo.png'
          },
          category: 'Software as a Service',
          productID: 'nextleadin-pricing',
          sku: 'NLI-PRICING',
          manufacturer: {
            '@type': 'Organization',
            name: 'NextLeadIn'
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '127',
            bestRating: '5',
            worstRating: '1'
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'Tipo de servicio',
              value: 'SaaS - Generación de Leads'
            },
            {
              '@type': 'PropertyValue',
              name: 'Región',
              value: 'España, Europa'
            },
            {
              '@type': 'PropertyValue',
              name: 'Idiomas',
              value: 'Catalán, Español, Inglés'
            }
          ],
          offers: [
            {
              '@type': 'Offer',
              '@id': 'https://nextleadin.com/es/pricing#plan-local-business',
              name: 'Local Business',
              price: '79',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              url: 'https://nextleadin.com/es/pricing',
              priceSpecification: { '@type': 'UnitPriceSpecification', price: '79', priceCurrency: 'EUR', billingIncrement: '1', unitText: 'MONTH', valueAddedTaxIncluded: true, referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' } },
              description: '500 leads/mes, datos enriquecidos, análisis reseñas IA, mapa visual',
              eligibleQuantity: { '@type': 'QuantitativeValue', value: 500, unitText: 'leads al mes' },
              itemOffered: { '@type': 'Service', name: 'NextLeadIn - Local Business', serviceType: 'Lead Generation Service', areaServed: 'ES' },
              seller: { '@type': 'Organization', name: 'NextLeadIn' }
            },
            {
              '@type': 'Offer',
              '@id': 'https://nextleadin.com/es/pricing#plan-professional',
              name: 'Professional',
              price: '199',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              url: 'https://nextleadin.com/es/pricing',
              priceSpecification: { '@type': 'UnitPriceSpecification', price: '199', priceCurrency: 'EUR', billingIncrement: '1', unitText: 'MONTH', valueAddedTaxIncluded: true, referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' } },
              description: '2.000 leads/mes, análisis competitivo, scoring predictivo, integraciones CRM',
              eligibleQuantity: { '@type': 'QuantitativeValue', value: 2000, unitText: 'leads al mes' },
              itemOffered: { '@type': 'Service', name: 'NextLeadIn - Professional', serviceType: 'Lead Generation Service', areaServed: 'ES' },
              seller: { '@type': 'Organization', name: 'NextLeadIn' }
            },
            {
              '@type': 'Offer',
              '@id': 'https://nextleadin.com/es/pricing#plan-enterprise',
              name: 'Enterprise',
              price: '599',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              url: 'https://nextleadin.com/es/pricing',
              priceSpecification: { '@type': 'UnitPriceSpecification', price: '599', priceCurrency: 'EUR', billingIncrement: '1', unitText: 'MONTH', valueAddedTaxIncluded: true, referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' } },
              description: 'Leads ilimitados, API, white-label, account manager',
              eligibleQuantity: { '@type': 'QuantitativeValue', value: -1, unitText: 'leads ilimitados' },
              itemOffered: { '@type': 'Service', name: 'NextLeadIn - Enterprise', serviceType: 'Lead Generation Service', areaServed: 'ES' },
              seller: { '@type': 'Organization', name: 'NextLeadIn' }
            }
          ]
        }
      ]
    },
    en: {
      title: 'Pricing and plans — From €79/month',
      description: 'Plans to find local businesses. Local Business €79/month (500 leads, enriched data, AI review analysis). Professional €199/month. Enterprise custom.',
      keywords: [
        'local business leads pricing',
        'local business plans',
        'Local Business price',
        'lead generation costs',
        'B2B local sales pricing',
        'review analysis pricing',
        'visual map pricing',
        'NextLeadIn pricing'
      ],
      canonical: 'https://nextleadin.com/en/pricing',
      ogImage: '/images/og/pricing-en.jpg',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          '@id': 'https://nextleadin.com/en/pricing',
          name: 'NextLeadIn - Pricing Plans',
          description: 'Pricing plans for AI-powered lead generation',
          image: 'https://nextleadin.com/images/og/pricing-en.jpg',
          brand: {
            '@type': 'Brand',
            name: 'NextLeadIn',
            logo: 'https://nextleadin.com/images/logo/logo.png'
          },
          category: 'Software as a Service',
          productID: 'nextleadin-pricing',
          sku: 'NLI-PRICING',
          manufacturer: {
            '@type': 'Organization',
            name: 'NextLeadIn'
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '127',
            bestRating: '5',
            worstRating: '1'
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'Service Type',
              value: 'SaaS - Lead Generation'
            },
            {
              '@type': 'PropertyValue',
              name: 'Region',
              value: 'Spain, Europe'
            },
            {
              '@type': 'PropertyValue',
              name: 'Languages',
              value: 'Catalan, Spanish, English'
            }
          ],
          offers: [
            {
              '@type': 'Offer',
              '@id': 'https://nextleadin.com/en/pricing#plan-local-business',
              name: 'Local Business',
              price: '79',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              url: 'https://nextleadin.com/en/pricing',
              priceSpecification: { '@type': 'UnitPriceSpecification', price: '79', priceCurrency: 'EUR', billingIncrement: '1', unitText: 'MONTH', valueAddedTaxIncluded: true, referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' } },
              description: '500 leads/month, enriched data, AI review analysis, visual map',
              eligibleQuantity: { '@type': 'QuantitativeValue', value: 500, unitText: 'leads per month' },
              itemOffered: { '@type': 'Service', name: 'NextLeadIn - Local Business', serviceType: 'Lead Generation Service', areaServed: 'ES' },
              seller: { '@type': 'Organization', name: 'NextLeadIn' }
            },
            {
              '@type': 'Offer',
              '@id': 'https://nextleadin.com/en/pricing#plan-professional',
              name: 'Professional',
              price: '199',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              url: 'https://nextleadin.com/en/pricing',
              priceSpecification: { '@type': 'UnitPriceSpecification', price: '199', priceCurrency: 'EUR', billingIncrement: '1', unitText: 'MONTH', valueAddedTaxIncluded: true, referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' } },
              description: '2,000 leads/month, competitive analysis, predictive scoring, CRM integrations',
              eligibleQuantity: { '@type': 'QuantitativeValue', value: 2000, unitText: 'leads per month' },
              itemOffered: { '@type': 'Service', name: 'NextLeadIn - Professional', serviceType: 'Lead Generation Service', areaServed: 'ES' },
              seller: { '@type': 'Organization', name: 'NextLeadIn' }
            },
            {
              '@type': 'Offer',
              '@id': 'https://nextleadin.com/en/pricing#plan-enterprise',
              name: 'Enterprise',
              price: '599',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              url: 'https://nextleadin.com/en/pricing',
              priceSpecification: { '@type': 'UnitPriceSpecification', price: '599', priceCurrency: 'EUR', billingIncrement: '1', unitText: 'MONTH', valueAddedTaxIncluded: true, referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' } },
              description: 'Unlimited leads, API, white-label, account manager',
              eligibleQuantity: { '@type': 'QuantitativeValue', value: -1, unitText: 'unlimited leads' },
              itemOffered: { '@type': 'Service', name: 'NextLeadIn - Enterprise', serviceType: 'Lead Generation Service', areaServed: 'ES' },
              seller: { '@type': 'Organization', name: 'NextLeadIn' }
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
  features: {
    ca: {
      title: 'Funcionalitats de Generació de Leads amb IA | NextLeadIn',
      description: 'Eines per trobar negocis locals: anàlisi de ressenyes de Google amb IA, enriquiment de dades amb telèfon i email, cerca d\'emails verificats i exportació directa a HubSpot, Pipedrive i CRM.',
      keywords: [
        'funcionalitats generació leads',
        'anàlisi ressenyes Google IA',
        'enriquiment dades negocis',
        'cerca emails verificats',
        'exportació CRM HubSpot',
        'eines prospecció B2B',
        'nextleadin funcionalitats'
      ],
      canonical: 'https://nextleadin.com/features',
      ogImage: '/images/og/features-ca.jpg'
    },
    es: {
      title: 'Funcionalidades de Generación de Leads con IA | NextLeadIn',
      description: 'Herramientas para encontrar negocios locales: análisis de reseñas de Google con IA, enriquecimiento de datos con teléfono y email, búsqueda de emails verificados y exportación directa a HubSpot, Pipedrive y CRM.',
      keywords: [
        'funcionalidades generación leads',
        'análisis reseñas Google IA',
        'enriquecimiento datos negocios',
        'búsqueda emails verificados',
        'exportación CRM HubSpot',
        'herramientas prospección B2B',
        'nextleadin funcionalidades'
      ],
      canonical: 'https://nextleadin.com/es/features',
      ogImage: '/images/og/features-es.jpg'
    },
    en: {
      title: 'AI-Powered Lead Generation Features | NextLeadIn',
      description: 'Tools to find local businesses: Google review analysis with AI, data enrichment with phone and email, verified email finder, and direct export to HubSpot, Pipedrive and CRM.',
      keywords: [
        'lead generation features',
        'Google review analysis AI',
        'business data enrichment',
        'verified email finder',
        'CRM export HubSpot',
        'B2B prospecting tools',
        'nextleadin features'
      ],
      canonical: 'https://nextleadin.com/en/features',
      ogImage: '/images/og/features-en.jpg'
    }
  },
  locations: {
    ca: {
      title: 'Leads de Negocis Locals per Ciutat i Zona | NextLeadIn',
      description: 'Troba negocis locals a Barcelona, Madrid i tota Espanya segmentats per barri, codi postal o radi. Dades amb telèfon, email i anàlisi de ressenyes de Google amb IA.',
      keywords: [
        'leads negocis locals ciutat',
        'leads Barcelona negocis',
        'leads Madrid empreses',
        'negocis locals per zona',
        'prospecció geogràfica Espanya',
        'segmentació per barri',
        'leads per codi postal'
      ],
      canonical: 'https://nextleadin.com/locations',
      ogImage: '/images/og/locations-ca.jpg'
    },
    es: {
      title: 'Leads de Negocios Locales por Ciudad y Zona | NextLeadIn',
      description: 'Encuentra negocios locales en Barcelona, Madrid y toda España segmentados por barrio, código postal o radio. Datos con teléfono, email y análisis de reseñas de Google con IA.',
      keywords: [
        'leads negocios locales ciudad',
        'leads Barcelona negocios',
        'leads Madrid empresas',
        'negocios locales por zona',
        'prospección geográfica España',
        'segmentación por barrio',
        'leads por código postal'
      ],
      canonical: 'https://nextleadin.com/es/locations',
      ogImage: '/images/og/locations-es.jpg'
    },
    en: {
      title: 'Local Business Leads by City and Area | NextLeadIn',
      description: 'Find local businesses in Barcelona, Madrid, and all of Spain segmented by neighborhood, postal code, or radius. Data with phone, email, and AI-powered Google review analysis.',
      keywords: [
        'local business leads city',
        'Barcelona business leads',
        'Madrid company leads',
        'local businesses by area',
        'geographic prospecting Spain',
        'neighborhood segmentation',
        'leads by postal code'
      ],
      canonical: 'https://nextleadin.com/en/locations',
      ogImage: '/images/og/locations-en.jpg'
    }
  },
  solutions: {
    ca: {
      title: 'Solucions per a SDRs, Agències i Equips Comercials | NextLeadIn',
      description: 'Generació de leads de negocis locals per a SDRs que prospecten, agències de màrqueting que gestionen múltiples clients i equips comercials B2B. Llistes preparades per trucar amb context IA.',
      keywords: [
        'solucions SDR leads',
        'leads per agències màrqueting',
        'prospecció equips comercials',
        'generació leads B2B',
        'llistes trucades fred',
        'context IA per vendes',
        'gestió múltiples clients leads'
      ],
      canonical: 'https://nextleadin.com/solutions',
      ogImage: '/images/og/solutions-ca.jpg'
    },
    es: {
      title: 'Soluciones para SDRs, Agencias y Equipos Comerciales | NextLeadIn',
      description: 'Generación de leads de negocios locales para SDRs que prospectan, agencias de marketing que gestionan múltiples clientes y equipos comerciales B2B. Listas preparadas para llamar con contexto IA.',
      keywords: [
        'soluciones SDR leads',
        'leads para agencias marketing',
        'prospección equipos comerciales',
        'generación leads B2B',
        'listas llamadas frío',
        'contexto IA para ventas',
        'gestión múltiples clientes leads'
      ],
      canonical: 'https://nextleadin.com/es/solutions',
      ogImage: '/images/og/solutions-es.jpg'
    },
    en: {
      title: 'Solutions for SDRs, Agencies and Sales Teams | NextLeadIn',
      description: 'Local business lead generation for SDRs prospecting, marketing agencies managing multiple clients, and B2B sales teams. Ready-to-call lists with AI-powered context.',
      keywords: [
        'SDR lead solutions',
        'leads for marketing agencies',
        'sales team prospecting',
        'B2B lead generation',
        'cold calling lists',
        'AI context for sales',
        'multi-client lead management'
      ],
      canonical: 'https://nextleadin.com/en/solutions',
      ogImage: '/images/og/solutions-en.jpg'
    }
  },
  industries: {
    ca: {
      title: 'Leads de Negocis Locals per Sector i Indústria | NextLeadIn',
      description: 'Genera llistes de restaurants, gimnasos, clíniques, tallers mecànics i altres negocis locals per sector. Dades amb telèfon, email i anàlisi de ressenyes de Google per preparar trucades en fred.',
      keywords: [
        'leads negocis locals sector',
        'leads restaurants hostaleria',
        'leads gimnasos fitness',
        'leads clíniques salut',
        'leads tallers mecànics',
        'prospecció per indústria',
        'negocis locals per nínxol'
      ],
      canonical: 'https://nextleadin.com/industries',
      ogImage: '/images/og/industries-ca.jpg'
    },
    es: {
      title: 'Leads de Negocios Locales por Sector e Industria | NextLeadIn',
      description: 'Genera listas de restaurantes, gimnasios, clínicas, talleres mecánicos y otros negocios locales por sector. Datos con teléfono, email y análisis de reseñas de Google para preparar llamadas en frío.',
      keywords: [
        'leads negocios locales sector',
        'leads restaurantes hostelería',
        'leads gimnasios fitness',
        'leads clínicas salud',
        'leads talleres mecánicos',
        'prospección por industria',
        'negocios locales por nicho'
      ],
      canonical: 'https://nextleadin.com/es/industries',
      ogImage: '/images/og/industries-es.jpg'
    },
    en: {
      title: 'Local Business Leads by Sector and Industry | NextLeadIn',
      description: 'Generate lists of restaurants, gyms, clinics, auto repair shops and other local businesses by sector. Data with phone, email and Google review analysis to prepare cold calls.',
      keywords: [
        'local business leads sector',
        'restaurant hospitality leads',
        'gym fitness leads',
        'clinic health leads',
        'auto repair shop leads',
        'industry prospecting',
        'local businesses by niche'
      ],
      canonical: 'https://nextleadin.com/en/industries',
      ogImage: '/images/og/industries-en.jpg'
    }
  },
  resources: {
    ca: {
      title: 'Recursos Gratuïts per a Generació de Leads | NextLeadIn',
      description: 'Calculadora de ROI, plantilles i eines gratuïtes per optimitzar la teva estratègia de generació de leads de negocis locals.',
      keywords: [
        'recursos generació leads',
        'calculadora ROI leads',
        'plantilles prospecció',
        'eines gratuïtes vendes',
        'recursos B2B gratuïts'
      ],
      canonical: 'https://nextleadin.com/resources',
      ogImage: '/images/og/resources-ca.jpg'
    },
    es: {
      title: 'Recursos Gratuitos para Generación de Leads | NextLeadIn',
      description: 'Calculadora de ROI, plantillas y herramientas gratuitas para optimizar tu estrategia de generación de leads de negocios locales.',
      keywords: [
        'recursos generación leads',
        'calculadora ROI leads',
        'plantillas prospección',
        'herramientas gratuitas ventas',
        'recursos B2B gratuitos'
      ],
      canonical: 'https://nextleadin.com/es/resources',
      ogImage: '/images/og/resources-es.jpg'
    },
    en: {
      title: 'Free Resources for Lead Generation | NextLeadIn',
      description: 'ROI calculator, templates and free tools to optimize your local business lead generation strategy.',
      keywords: [
        'lead generation resources',
        'lead ROI calculator',
        'prospecting templates',
        'free sales tools',
        'free B2B resources'
      ],
      canonical: 'https://nextleadin.com/en/resources',
      ogImage: '/images/og/resources-en.jpg'
    }
  },
  'roi-calculator': {
    ca: {
      title: 'Calculadora de ROI per a Generació de Leads | NextLeadIn',
      description: 'Calcula el retorn de la inversió de la teva estratègia de generació de leads. Descobreix quant pots estalviar amb NextLeadIn.',
      keywords: [
        'calculadora ROI leads',
        'retorn inversió prospecció',
        'càlcul ROI vendes B2B',
        'estalvi generació leads'
      ],
      canonical: 'https://nextleadin.com/resources/roi-calculator',
      ogImage: '/images/og/roi-calculator-ca.jpg'
    },
    es: {
      title: 'Calculadora de ROI para Generación de Leads | NextLeadIn',
      description: 'Calcula el retorno de la inversión de tu estrategia de generación de leads. Descubre cuánto puedes ahorrar con NextLeadIn.',
      keywords: [
        'calculadora ROI leads',
        'retorno inversión prospección',
        'cálculo ROI ventas B2B',
        'ahorro generación leads'
      ],
      canonical: 'https://nextleadin.com/es/resources/roi-calculator',
      ogImage: '/images/og/roi-calculator-es.jpg'
    },
    en: {
      title: 'Lead Generation ROI Calculator | NextLeadIn',
      description: 'Calculate the return on investment of your lead generation strategy. Discover how much you can save with NextLeadIn.',
      keywords: [
        'lead ROI calculator',
        'prospecting return on investment',
        'B2B sales ROI calculation',
        'lead generation savings'
      ],
      canonical: 'https://nextleadin.com/en/resources/roi-calculator',
      ogImage: '/images/og/roi-calculator-en.jpg'
    }
  },
  faq: {
    ca: {
      title: 'Preguntes freqüents sobre leads B2B i IA',
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
            },
            {
              '@type': 'Question',
              name: 'Quins CRM són compatibles amb NextLeadIn?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'NextLeadIn s\'integra amb els principals CRM del mercat incloent Salesforce, HubSpot, Pipedrive i altres plataformes a través d\'API o exportació CSV.'
              }
            },
            {
              '@type': 'Question',
              name: 'Quina és la qualitat dels leads que genera la plataforma?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Utilitzem múltiples fonts de dades verificades i intel·ligència artificial per qualificar cada lead. Els informes IA ajuden a identificar oportunitats amb major probabilitat de conversió.'
              }
            },
            {
              '@type': 'Question',
              name: 'Hi ha període de prova gratuït?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí, oferim una prova gratuïta de 14 dies per a tots els plans. Pots provar totes les funcionalitats sense compromís.'
              }
            },
            {
              '@type': 'Question',
              name: 'Com funciona la segmentació geogràfica?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'La segmentació geogràfica et permet buscar empreses per ubicació específica: municipi, barri, província o àrea metropolitana. Pots combinar-ho amb filtres de sector per trobar els clients ideals.'
              }
            },
            {
              '@type': 'Question',
              name: 'Quin suport tècnic ofereix NextLeadIn?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Oferim suport per correu electrònic per a tots els plans. Els plans Pro i Elite inclouen suport prioritari i sessió d\'onboarding personalitzada.'
              }
            },
            {
              '@type': 'Question',
              name: 'Quin nivell de precisió té la segmentació?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Fem servir múltiples fonts i validacions. La precisió augmenta amb filtres avançats (noms comercials, keywords de nínxol, mida, etc.).'
              }
            },
            {
              '@type': 'Question',
              name: 'Quina cobertura geogràfica teniu?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Cobertura completa d\'Espanya amb dades detallades per municipi. També tenim dades d\'Europa i Amèrica Llatina per plans Enterprise.'
              }
            },
            {
              '@type': 'Question',
              name: 'Puc filtrar per mida d\'empresa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí, pots filtrar per nombre d\'empleats, facturació anual i altres criteris de mida per trobar el perfil ideal per al teu producte.'
              }
            },
            {
              '@type': 'Question',
              name: 'Els informes consumeixen crèdits?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí. Cada informe generat per IA consumeix un crèdit d\'enriquiment. Els crèdits es renoven mensualment segons el pla.'
              }
            },
            {
              '@type': 'Question',
              name: 'Puc personalitzar el to o format de l\'informe?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A Pro i Empresa pots definir el to, la llargada i l\'èmfasi (per exemple, producte vs. servei) per adaptar-lo al teu pitch.'
              }
            },
            {
              '@type': 'Question',
              name: 'Quina precisió tenen els informes d\'IA?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Els nostres models d\'IA tenen una precisió del 85-90% en la detecció de necessitats i angles de contacte. Millorem contínuament amb feedback dels usuaris.'
              }
            },
            {
              '@type': 'Question',
              name: 'Puc exportar els informes en diferents formats?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí, pots exportar en PDF, Word, CSV i també integrar-los directament al teu CRM via API.'
              }
            },
            {
              '@type': 'Question',
              name: 'Com gestioneu dades i privacitat?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Apliquem millors pràctiques de seguretat i conformitat. Les dades s\'utilitzen exclusivament per generar i enriquir els leads del teu compte.'
              }
            },
            {
              '@type': 'Question',
              name: 'Hi ha formació inclosa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí, incloem sessions de formació per a tots els plans. Pro i Empresa tenen formació personalitzada i sessions de seguiment.'
              }
            },
            {
              '@type': 'Question',
              name: 'Puc canviar de pla en qualsevol moment?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí, pots pujar o baixar de pla segons les teves necessitats. Els canvis s\'apliquen immediatament i la facturació s\'ajusta pro-rata.'
              }
            },
            {
              '@type': 'Question',
              name: 'Quina és la vostra política de cancel·lació?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Pots cancel·lar en qualsevol moment sense penalitzacions. Et reemborsem la part proporcional del període no utilitzat.'
              }
            },
            {
              '@type': 'Question',
              name: 'És legal utilitzar dades públiques per generar leads B2B?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'NextLeadIn està pensat per a ús B2B amb dades de negocis, no de particulars. No gestionem els teus guions ni missatges, i cada empresa ha de definir la seva política de contacte i de compliment amb RGPD/LOPD i la normativa del seu sector. Si tens dubtes, recomanem comentar-ho amb el teu equip legal o de compliance.'
              }
            },
            {
              '@type': 'Question',
              name: 'Com compleix NextLeadIn amb RGPD/LOPD si faig trucades en fred?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'NextLeadIn proporciona registres d\'activitat, mecanismes per marcar empreses que no volen ser contactades i eines per exercir drets d\'accés i supressió. Tu decideixes guions i freqüència de contacte, i és important informar clarament de qui ets, per què truques i com poden demanar que no els tornis a contactar.'
              }
            },
            {
              '@type': 'Question',
              name: 'Quin tipus de negocis locals puc trobar amb NextLeadIn?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Restaurants, tallers mecànics, comerços de barri, clíniques, centres de salut, salons de bellesa, gimnasos, immobiliàries, serveis professionals locals i moltes altres PIMES tradicionals amb presència física i ressenyes en línia.'
              }
            },
            {
              '@type': 'Question',
              name: 'Necessito tenir un CRM com HubSpot o Pipedrive per utilitzar la plataforma?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No és imprescindible. Pots treballar només amb la taula de leads, el pipeline Kanban i les exportacions CSV. Les integracions amb CRM són recomanables quan vols sincronitzar oportunitats i automatitzar encara més el seguiment.'
              }
            },
            {
              '@type': 'Question',
              name: 'Puc començar a trucar des del primer dia?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí, en menys d\'una hora pots definir un nínxol, generar la primera llista de negocis locals i tenir informes amb IA per preparar les primeres trucades. Molts clients comencen a trucar el mateix dia que creen el compte.'
              }
            }
          ]
        }
      ]
    },
    es: {
      title: 'Preguntas frecuentes sobre leads B2B e IA',
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
            },
            {
              '@type': 'Question',
              name: '¿Qué CRM son compatibles con NextLeadIn?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'NextLeadIn se integra con los principales CRM del mercado incluyendo Salesforce, HubSpot, Pipedrive y otras plataformas a través de API o exportación CSV.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Cuál es la calidad de los leads que genera la plataforma?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Utilizamos múltiples fuentes de datos verificadas e inteligencia artificial para cualificar cada lead. Los informes IA ayudan a identificar oportunidades con mayor probabilidad de conversión.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Hay periodo de prueba gratuito?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí, ofrecemos una prueba gratuita de 14 días para todos los planes. Puedes probar todas las funcionalidades sin compromiso.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Cómo funciona la segmentación geográfica?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'La segmentación geográfica te permite buscar empresas por ubicación específica: municipio, barrio, provincia o área metropolitana. Puedes combinarlo con filtros de sector para encontrar los clientes ideales.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Qué soporte técnico ofrece NextLeadIn?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ofrecemos soporte por correo electrónico para todos los planes. Los planes Pro y Elite incluyen soporte prioritario y sesión de onboarding personalizada.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Qué nivel de precisión tiene la segmentación?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Utilizamos múltiples fuentes y validaciones. La precisión aumenta con filtros avanzados (nombres comerciales, keywords de nicho, tamaño, etc.).'
              }
            },
            {
              '@type': 'Question',
              name: '¿Qué cobertura geográfica tenéis?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Cobertura completa de España con datos detallados por municipio. También tenemos datos de Europa y América Latina para planes Enterprise.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Puedo filtrar por tamaño de empresa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí, puedes filtrar por número de empleados, facturación anual y otros criterios de tamaño para encontrar el perfil ideal para tu producto.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Los informes consumen créditos?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí. Cada informe generado por IA consume un crédito de enriquecimiento. Los créditos se renuevan mensualmente según el plan.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Puedo personalizar el tono o formato del informe?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'En Pro y Empresa puedes definir el tono, la longitud y el énfasis (por ejemplo, producto vs. servicio) para adaptarlo a tu pitch.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Qué precisión tienen los informes de IA?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Nuestros modelos de IA tienen una precisión del 85-90% en la detección de necesidades y ángulos de contacto. Mejoramos continuamente con feedback de los usuarios.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Puedo exportar los informes en diferentes formatos?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí, puedes exportar en PDF, Word, CSV y también integrarlos directamente en tu CRM vía API.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Cómo gestionáis datos y privacidad?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Aplicamos mejores prácticas de seguridad y conformidad. Los datos se utilizan exclusivamente para generar y enriquecer los leads de tu cuenta.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Hay formación incluida?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí, incluimos sesiones de formación para todos los planes. Pro y Empresa tienen formación personalizada y sesiones de seguimiento.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Puedo cambiar de plan en cualquier momento?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí, puedes subir o bajar de plan según tus necesidades. Los cambios se aplican inmediatamente y la facturación se ajusta pro-rata.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Cuál es vuestra política de cancelación?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Puedes cancelar en cualquier momento sin penalizaciones. Te reembolsamos la parte proporcional del período no utilizado.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Es legal usar datos públicos para generar leads B2B?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'NextLeadIn está pensado para uso B2B con datos de negocio, no de particulares. No gestionamos tus guiones ni mensajes, y cada empresa debe definir su propia política de contacto y de cumplimiento con RGPD/LOPD y la normativa de su sector. Si tienes dudas, te recomendamos consultarlo con tu equipo legal o de compliance.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Cómo cumple NextLeadIn con RGPD/LOPD si hago llamadas en frío?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'NextLeadIn proporciona registros de actividad, mecanismos para marcar empresas que no quieren ser contactadas y herramientas para ejercer derechos de acceso y supresión. Tú decides guiones y frecuencia de contacto, y es importante informar claramente de quién eres, por qué llamas y cómo pueden pedir que no se les vuelva a contactar.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Qué tipo de negocios locales puedo encontrar con NextLeadIn?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Restaurantes, talleres mecánicos, comercios de barrio, clínicas, centros de salud, salones de belleza, gimnasios, inmobiliarias, servicios profesionales locales y muchas otras pymes tradicionales con presencia física y reseñas online.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Necesito tener un CRM como HubSpot o Pipedrive para usar la plataforma?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No es imprescindible. Puedes trabajar solo con la tabla de leads, el pipeline Kanban y las exportaciones CSV. Las integraciones con CRM son recomendables cuando quieres sincronizar oportunidades y automatizar aún más el seguimiento.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Puedo empezar a llamar desde el primer día?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí, en menos de una hora puedes definir un nicho, generar la primera lista de negocios locales y tener informes con IA para preparar las primeras llamadas. Muchos clientes empiezan a llamar el mismo día que crean la cuenta.'
              }
            }
          ]
        }
      ]
    },
    en: {
      title: 'FAQ about B2B leads and AI',
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
            },
            {
              '@type': 'Question',
              name: 'What CRMs are compatible with NextLeadIn?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'NextLeadIn integrates with major CRMs including Salesforce, HubSpot, Pipedrive and other platforms through API or CSV export.'
              }
            },
            {
              '@type': 'Question',
              name: 'What is the quality of leads generated by the platform?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We use multiple verified data sources and artificial intelligence to qualify each lead. AI reports help identify opportunities with higher conversion probability.'
              }
            },
            {
              '@type': 'Question',
              name: 'Is there a free trial period?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, we offer a 14-day free trial for all plans. You can try all features without commitment.'
              }
            },
            {
              '@type': 'Question',
              name: 'How does geographic segmentation work?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Geographic segmentation allows you to search for companies by specific location: municipality, neighborhood, province or metropolitan area. You can combine it with sector filters to find ideal clients.'
              }
            },
            {
              '@type': 'Question',
              name: 'What technical support does NextLeadIn offer?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We offer email support for all plans. Pro and Elite plans include priority support and personalized onboarding session.'
              }
            },
            {
              '@type': 'Question',
              name: 'What level of precision does the segmentation have?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We use multiple sources and validations. Precision increases with advanced filters (commercial names, niche keywords, size, etc.).'
              }
            },
            {
              '@type': 'Question',
              name: 'What geographic coverage do you have?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Complete coverage of Spain with detailed data by municipality. We also have data from Europe and Latin America for Enterprise plans.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can I filter by company size?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, you can filter by number of employees, annual revenue and other size criteria to find the ideal profile for your product.'
              }
            },
            {
              '@type': 'Question',
              name: 'Do reports consume credits?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Each AI-generated report consumes an enrichment credit. Credits are renewed monthly according to the plan.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can I customize the tone or format of the report?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'In Pro and Enterprise you can define the tone, length and emphasis (for example, product vs. service) to adapt it to your pitch.'
              }
            },
            {
              '@type': 'Question',
              name: 'What accuracy do AI reports have?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Our AI models have 85-90% accuracy in detecting needs and contact angles. We continuously improve with user feedback.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can I export reports in different formats?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, you can export in PDF, Word, CSV and also integrate them directly into your CRM via API.'
              }
            },
            {
              '@type': 'Question',
              name: 'How do you manage data and privacy?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We apply best security and compliance practices. Data is used exclusively to generate and enrich leads for your account.'
              }
            },
            {
              '@type': 'Question',
              name: 'Is training included?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, we include training sessions for all plans. Pro and Enterprise have personalized training and follow-up sessions.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can I change plans at any time?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, you can upgrade or downgrade your plan according to your needs. Changes are applied immediately and billing is adjusted pro-rata.'
              }
            },
            {
              '@type': 'Question',
              name: 'What is your cancellation policy?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'You can cancel at any time without penalties. We refund the proportional part of the unused period.'
              }
            },
            {
              '@type': 'Question',
              name: 'Is it legal to use public data to generate B2B leads?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'NextLeadIn is designed for B2B use with business data, not private individuals. We do not manage your scripts or messaging, and each company must define its own contact policy and compliance with GDPR and sector regulations. If you are unsure, we recommend checking with your legal or compliance team.'
              }
            },
            {
              '@type': 'Question',
              name: 'How does NextLeadIn comply with GDPR when I do cold calling?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'NextLeadIn provides activity logs, mechanisms to flag companies that do not want to be contacted and tools to exercise access and deletion rights. You decide scripts and contact frequency, and it is important to clearly state who you are, why you call and how they can request not to be contacted again.'
              }
            },
            {
              '@type': 'Question',
              name: 'What types of local businesses can I find with NextLeadIn?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Restaurants, workshops, local shops, clinics, health centers, beauty salons, gyms, real estate agencies, local professional services and many other traditional SMEs with physical presence and online reviews.'
              }
            },
            {
              '@type': 'Question',
              name: 'Do I need a CRM like HubSpot or Pipedrive to use the platform?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'It is not required. You can work only with the leads table, Kanban pipeline and CSV exports. CRM integrations are recommended once you want to sync opportunities and further automate follow-up.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can I start calling from day one?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, in less than an hour you can define a niche, generate your first list of local businesses and have AI reports ready to prepare your first calls. Many customers start calling on the same day they create their account.'
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

  // Evitar duplicació "| NextLeadIn | NextLeadIn": el layout aplica template '%s | NextLeadIn',
  // per tant retornem només la part curta (titleBase) com a default; el sufix l'afegeix el layout.
  const titleBase = (finalConfig.title || '').replace(/\s*\|\s*NextLeadIn\s*$/i, '').trim()
  const titleForLayout = titleBase || 'NextLeadIn'
  const titleFull = titleBase ? `${titleBase} | NextLeadIn` : 'NextLeadIn'

  // Determinar categoria basada en la pàgina (millorat per SEO)
  const category = page === 'pricing' 
    ? 'Business Software' 
    : page === 'blog' 
    ? 'Blog' 
    : page === 'faq' 
    ? 'FAQ' 
    : page === 'contact' 
    ? 'Contact' 
    : page === 'home'
    ? 'Business Software'
    : 'Business Software'

  return {
    title: {
      default: titleForLayout,
      template: '%s | NextLeadIn'
    },
    description: finalConfig.description,
    keywords: finalConfig.keywords,
    category,
    authors: [
      {
        name: 'NextLeadIn Team',
        url: `${baseUrl}`
      }
    ],
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
      title: titleFull,
      description: finalConfig.description,
      siteName: 'NextLeadIn',
      images: [
        {
          url: finalConfig.ogImage || '/images/og/og-image.png',
          alt: titleFull,
          width: 1200,
          height: 630
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@nextleadin',
      creator: '@nextleadin',
      title: titleFull,
      description: finalConfig.description,
      images: [
        {
          url: finalConfig.ogImage || '/images/og/og-image.png',
          alt: titleFull,
          width: 1200,
          height: 630
        }
      ]
    },
    robots: {
      index: !finalConfig.noindex,
      follow: true,
      nocache: false,
      noarchive: false,
      nosnippet: false,
      noimageindex: false,
      googleBot: {
        index: !finalConfig.noindex,
        follow: true,
        noimageindex: false,
        noarchive: false,
        nosnippet: false,
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
