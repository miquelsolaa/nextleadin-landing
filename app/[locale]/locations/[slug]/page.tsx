import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import SeoJsonLd from '@/components/SeoJsonLd'
import CTASection from '@/components/CTASection'
import SeoFaqSection from '@/components/seo/SeoFaqSection'
import SeoGradientHero from '@/components/seo/SeoGradientHero'
import SeoPageShell from '@/components/seo/SeoPageShell'
import SeoStatsSection from '@/components/seo/SeoStatsSection'
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
  const localePath = validLocale === 'en' ? '/en' : validLocale === 'ca' ? '/ca' : ''
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

  const languageAlternates: Record<string, string> = {}
  if (locationExists(location.slug, 'es')) {
    languageAlternates['es-ES'] = `${baseUrl}/${pathSegment}`
  }
  if (locationExists(location.slug, 'ca')) {
    languageAlternates['ca-ES'] = `${baseUrl}/ca/${pathSegment}`
  }
  if (locationExists(location.slug, 'en')) {
    languageAlternates['en-US'] = `${baseUrl}/en/${pathSegment}`
  }
  languageAlternates['x-default'] =
    languageAlternates['es-ES'] ?? languageAlternates['ca-ES'] ?? languageAlternates['en-US'] ?? canonical

  return generateAIOptimizedMetadata('locations', validLocale, {
    title: location.title,
    description: location.description,
    keywords: location.keywords,
    canonical,
    ogImage: location.image || undefined,
    alternates: {
      languages: languageAlternates
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
  const localePath = validLocale === 'es' ? '' : `/${validLocale}`
  const currentUrl = `${baseUrl}${localePath}/locations/${location.slug}`
  const localePrefix = validLocale === 'es' ? '' : `/${validLocale}`

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

  const heroCrumbs = [
    { label: t.breadcrumbHome, href: localePrefix || '/' },
    { label: t.breadcrumbLocations, href: `${localePrefix}/locations` },
    { label: location.cityName }
  ]

  return (
    <>
      <SeoJsonLd data={structuredData} />

      <SeoPageShell>
        <SeoGradientHero
          breadcrumbs={heroCrumbs}
          localePrefix={localePrefix}
          title={location.heroTitle}
          description={location.heroSubtitle}
          cta={{
            primaryLabel: cta.primaryLabel,
            secondaryLabel: cta.secondaryLabel,
            primaryHref: cta.primaryHref,
            secondaryHref: cta.secondaryHref
          }}
        />

        {location.stats && location.stats.length > 0 && (
          <SeoStatsSection
            title={
              <>
                {t.statsTitle} {location.cityName}
              </>
            }
            stats={location.stats}
          />
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
                  <div
                    key={index}
                    className="rounded-xl bg-white p-4 text-center shadow-sm transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
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

        {location.faq && location.faq.length > 0 && (
          <SeoFaqSection title={t.faqTitle} items={location.faq} />
        )}

        <CTASection />
      </SeoPageShell>
    </>
  )
}
