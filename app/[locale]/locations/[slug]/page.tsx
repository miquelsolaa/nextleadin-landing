import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import SeoJsonLd from '@/components/SeoJsonLd'
import CTASection from '@/components/CTASection'
import {
  locationExists,
  getAllLocationSlugs,
  getLocationData,
  type LocationLocale
} from '@/lib/locations'
import { getLocationGeo } from '@/lib/location-geo'
import { generateAIOptimizedMetadata } from '@/lib/seo-metadata'
import {
  UtensilsCrossed,
  ShoppingBag,
  Scissors,
  Wrench,
  Stethoscope,
  Dumbbell,
  Bed,
  Home,
  Calculator,
  GraduationCap,
  type LucideIcon
} from 'lucide-react'

const sectorIconMap: Record<string, LucideIcon> = {
  utensils: UtensilsCrossed,
  'shopping-bag': ShoppingBag,
  scissors: Scissors,
  wrench: Wrench,
  hospital: Stethoscope,
  stethoscope: Stethoscope,
  dumbbell: Dumbbell,
  bed: Bed,
  home: Home,
  calculator: Calculator,
  'graduation-cap': GraduationCap
}

const SectorIcon = ({ iconKey }: { iconKey: string }) => {
  const IconComponent = sectorIconMap[iconKey]
  if (!IconComponent) return null
  return <IconComponent className="w-8 h-8 text-primary-600" />
}

interface LocationPageProps {
  params: Promise<{
    slug: string
    locale: string
  }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  return getAllLocationSlugs()
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? (locale as LocationLocale) : 'ca'
  const location = await getLocationData(slug, validLocale)

  if (!location) {
    return { title: 'Ubicació no trobada' }
  }

  const baseUrl = 'https://nextleadin.com'
  const localePath = validLocale === 'ca' ? '/ca' : validLocale === 'en' ? '/en' : ''
  const pathSegment = `locations/${location.slug}`
  const canonical = localePath
    ? `${baseUrl}${localePath}/${pathSegment}`
    : `${baseUrl}/${pathSegment}`

  const geo = getLocationGeo(location.slug)
  const other: Record<string, string> = {}
  if (geo) {
    other['geo.region'] = geo.geoRegion
    other['geo.placename'] = location.cityName
    other['geo.position'] = `${geo.coordinates.lat};${geo.coordinates.lng}`
    other['ICBM'] = `${geo.coordinates.lat}, ${geo.coordinates.lng}`
  }

  return generateAIOptimizedMetadata('locations', validLocale, {
    title: location.title,
    description: location.description,
    keywords: location.keywords,
    canonical,
    ogImage: location.image || undefined,
    alternates: {
      languages: {
        'x-default': `${baseUrl}/${pathSegment}`,
        'es-ES': `${baseUrl}/${pathSegment}`,
        'ca-ES': `${baseUrl}/ca/${pathSegment}`,
        'en-US': `${baseUrl}/en/${pathSegment}`
      }
    },
    ...(Object.keys(other).length > 0 ? { other } : {})
  })
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug, locale } = await params
  setRequestLocale(locale)
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? (locale as LocationLocale) : 'ca'

  if (!locationExists(slug, validLocale)) {
    notFound()
  }

  const location = await getLocationData(slug, validLocale)
  if (!location) {
    notFound()
  }

  const t = {
    ca: {
      breadcrumbHome: 'Inici',
      breadcrumbLocations: 'Ubicacions',
      statsTitle: 'Cobertura a',
      sectorsTitle: 'Sectors principals',
      faqTitle: 'Preguntes freqüents',
      ctaTitle: 'Preparat per prospectar?',
      ctaDescription: 'Prova gratuïta de 7 dies. Sense targeta de crèdit.',
      ctaPrimary: 'Prova gratuïta',
      ctaSecondary: 'Veure demo'
    },
    es: {
      breadcrumbHome: 'Inicio',
      breadcrumbLocations: 'Ubicaciones',
      statsTitle: 'Cobertura en',
      sectorsTitle: 'Sectores principales',
      faqTitle: 'Preguntas frecuentes',
      ctaTitle: '¿Preparado para prospectar?',
      ctaDescription: 'Prueba gratuita de 7 días. Sin tarjeta de crédito.',
      ctaPrimary: 'Prueba gratuita',
      ctaSecondary: 'Ver demo'
    },
    en: {
      breadcrumbHome: 'Home',
      breadcrumbLocations: 'Locations',
      statsTitle: 'Coverage in',
      sectorsTitle: 'Top sectors',
      faqTitle: 'Frequently asked questions',
      ctaTitle: 'Ready to prospect?',
      ctaDescription: '7-day free trial. No credit card required.',
      ctaPrimary: 'Start free trial',
      ctaSecondary: 'See demo'
    }
  }[validLocale]

  const baseUrl = 'https://nextleadin.com'
  const localePath = validLocale === 'ca' ? '' : `/${validLocale}`
  const currentUrl = `${baseUrl}${localePath}/locations/${location.slug}`
  const localePrefix = validLocale === 'ca' ? '' : `/${validLocale}`

  const breadcrumbs = [
    { name: t.breadcrumbHome, url: `${baseUrl}${localePath}` },
    { name: t.breadcrumbLocations, url: `${baseUrl}${localePath}/locations` },
    { name: location.cityName, url: currentUrl }
  ]

  const geo = getLocationGeo(location.slug)

  const localeTitles = {
    ca: {
      serviceType: 'Generació de leads de negocis locals',
      areaDescription: `Troba negocis locals a ${location.cityName} amb dades enriquides i anàlisi de ressenyes amb IA`
    },
    es: {
      serviceType: 'Generación de leads de negocios locales',
      areaDescription: `Encuentra negocios locales en ${location.cityName} con datos enriquecidos y análisis de reseñas con IA`
    },
    en: {
      serviceType: 'Local business lead generation',
      areaDescription: `Find local businesses in ${location.cityName} with enriched data and AI-powered review analysis`
    }
  }[validLocale]

  const structuredData: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Place',
      name: location.cityName,
      containedInPlace: { '@type': 'AdministrativeArea', name: location.region },
      ...(geo && {
        geo: {
          '@type': 'GeoCoordinates',
          latitude: geo.coordinates.lat,
          longitude: geo.coordinates.lng
        }
      })
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `NextLeadIn ${location.cityName}`,
      description: localeTitles.areaDescription,
      serviceType: localeTitles.serviceType,
      provider: {
        '@type': 'Organization',
        name: 'NextLeadIn',
        url: baseUrl,
        logo: `${baseUrl}/images/logo/logo.png`
      },
      areaServed: {
        '@type': 'City',
        name: location.cityName,
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: location.region
        }
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Plans NextLeadIn',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Local Business',
              description: '500 leads/mes'
            },
            price: '79',
            priceCurrency: 'EUR'
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Professional',
              description: '2000 leads/mes'
            },
            price: '199',
            priceCurrency: 'EUR'
          }
        ]
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: location.title,
      description: location.description,
      url: currentUrl,
      inLanguage: validLocale === 'ca' ? 'ca-ES' : validLocale === 'es' ? 'es-ES' : 'en-US',
      isPartOf: {
        '@type': 'WebSite',
        name: 'NextLeadIn',
        url: baseUrl
      },
      about: {
        '@type': 'Thing',
        name: location.cityName
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.prose']
      }
    }
  ]

  if (location.faq && location.faq.length > 0) {
    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: location.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer }
      }))
    })
  }

  const cta = location.cta ?? {
    title: t.ctaTitle,
    description: t.ctaDescription,
    primaryLabel: t.ctaPrimary,
    primaryHref: '/contact',
    secondaryLabel: t.ctaSecondary,
    secondaryHref: '/contact'
  }

  return (
    <>
      <SeoJsonLd data={structuredData} />

      <div className="overflow-x-hidden min-w-0 w-full">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-primary-50 to-white">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
              <Link href={localePrefix || '/'} className="hover:text-primary-600 transition-colors">
                {t.breadcrumbHome}
              </Link>
              <span className="text-gray-400">/</span>
              <Link href={`${localePrefix}/locations`} className="hover:text-primary-600 transition-colors">
                {t.breadcrumbLocations}
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900">{location.cityName}</span>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {location.heroTitle}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {location.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`${localePrefix}/contact`}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  {cta.primaryLabel}
                </Link>
                <Link
                  href={/demo/i.test(cta.secondaryLabel ?? '') ? `${localePrefix || '/'}?openVideo=1` : (cta.secondaryHref ? `${localePrefix}${cta.secondaryHref}` : `${localePrefix}/contact`)}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  {cta.secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {location.stats && location.stats.length > 0 && (
          <section className="py-16 bg-white" aria-labelledby="stats-heading">
            <div className="container mx-auto px-4">
              <h2 id="stats-heading" className="text-2xl font-bold text-center text-gray-900 mb-8">
                {t.statsTitle} {location.cityName}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {location.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl sm:text-5xl font-bold text-primary-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Top Sectors */}
        {location.topSectors && location.topSectors.length > 0 && (
          <section className="py-20 bg-gray-50" aria-labelledby="sectors-heading">
            <div className="container mx-auto px-4">
              <h2 id="sectors-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                {t.sectorsTitle}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
                {location.topSectors.map((sector, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm">
                    <div className="flex justify-center mb-2">
                      <SectorIcon iconKey={sector.icon} />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{sector.name}</h3>
                    <p className="text-primary-600 font-bold">{sector.count}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Content Section */}
        {location.contentHtml && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div 
                className="prose prose-lg max-w-3xl mx-auto"
                dangerouslySetInnerHTML={{ __html: location.contentHtml }}
              />
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {location.faq && location.faq.length > 0 && (
          <section className="py-20 bg-gray-50" aria-labelledby="faq-heading">
            <div className="container mx-auto px-4">
              <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                {t.faqTitle}
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                {location.faq.map((item, index) => (
                  <details key={index} className="bg-white rounded-xl p-6 shadow-sm group">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                      <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-4 text-gray-600">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  )
}
