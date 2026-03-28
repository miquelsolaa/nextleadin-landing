import Link from 'next/link'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SeoJsonLd from '@/components/SeoJsonLd'
import CTASection from '@/components/CTASection'
import { getAllLocations, type LocationLocale } from '@/lib/locations'
import { generateAIOptimizedMetadata } from '@/lib/seo-metadata'

interface LocationsPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: LocationsPageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? (locale as LocationLocale) : 'ca'

  const titles = {
    ca: 'Leads per Ubicació | NextLeadIn',
    es: 'Leads por Ubicación | NextLeadIn',
    en: 'Leads by Location | NextLeadIn'
  }

  const descriptions = {
    ca: 'Troba leads de negocis locals a Barcelona, Madrid i altres ciutats d\'Espanya. Dades enriquides i anàlisi amb IA.',
    es: 'Encuentra leads de negocios locales en Barcelona, Madrid y otras ciudades de España. Datos enriquecidos y análisis con IA.',
    en: 'Find local business leads in Barcelona, Madrid, and other Spanish cities. Enriched data and AI analysis.'
  }

  const canonical = validLocale === 'ca'
    ? 'https://nextleadin.com/locations'
    : `https://nextleadin.com/${validLocale}/locations`

  return generateAIOptimizedMetadata('locations', validLocale, {
    title: titles[validLocale],
    description: descriptions[validLocale],
    keywords: ['leads per ubicació', 'leads Barcelona', 'leads Madrid'],
    canonical
  })
}

export default async function LocationsPage({ params }: LocationsPageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? (locale as LocationLocale) : 'ca'

  const locations = getAllLocations(validLocale)

  const t = {
    ca: {
      breadcrumbHome: 'Inici',
      title: 'Leads per Ubicació',
      subtitle: 'Troba negocis locals a les principals ciutats d\'Espanya.',
      exploreTitle: 'Explora les nostres ubicacions',
      ctaTitle: 'No trobes la teva ciutat?',
      ctaDescription: 'Contacta amb nosaltres i t\'ajudarem a trobar leads a qualsevol zona.',
      ctaButton: 'Parla amb nosaltres'
    },
    es: {
      breadcrumbHome: 'Inicio',
      title: 'Leads por Ubicación',
      subtitle: 'Encuentra negocios locales en las principales ciudades de España.',
      exploreTitle: 'Explora nuestras ubicaciones',
      ctaTitle: '¿No encuentras tu ciudad?',
      ctaDescription: 'Contacta con nosotros y te ayudaremos a encontrar leads en cualquier zona.',
      ctaButton: 'Habla con nosotros'
    },
    en: {
      breadcrumbHome: 'Home',
      title: 'Leads by Location',
      subtitle: 'Find local businesses in major Spanish cities.',
      exploreTitle: 'Explore our locations',
      ctaTitle: "Can't find your city?",
      ctaDescription: 'Contact us and we will help you find leads in any area.',
      ctaButton: 'Talk to us'
    }
  }[validLocale]

  const baseUrl = 'https://nextleadin.com'
  const localePath = validLocale === 'ca' ? '' : `/${validLocale}`
  const currentUrl = `${baseUrl}${localePath}/locations`
  const localePrefix = validLocale === 'ca' ? '' : `/${validLocale}`

  const breadcrumbs = [
    { name: t.breadcrumbHome, url: `${baseUrl}${localePath}` },
    { name: t.title, url: currentUrl }
  ]

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url
      }))
    }
  ]

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
              <span className="text-gray-900">{t.title}</span>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t.exploreTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`${localePrefix}/locations/${location.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary-300 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {location.cityName}
                      </h3>
                      <p className="text-gray-500 text-sm">{location.region}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {location.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Custom CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t.ctaTitle}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t.ctaDescription}
              </p>
              <Link
                href={`${localePrefix}/contact`}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
              >
                {t.ctaButton}
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  )
}
