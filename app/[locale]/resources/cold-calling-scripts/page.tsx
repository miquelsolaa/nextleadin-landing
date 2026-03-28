import Link from 'next/link'
import { Play } from 'lucide-react'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SeoJsonLd from '@/components/SeoJsonLd'
import CTAScriptsSection from '@/components/CTAScriptsSection'
import ColdCallingScriptsContent from '@/components/ColdCallingScriptsContent'

interface ColdCallingScriptsPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params
}: ColdCallingScriptsPageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale =
    locale === 'ca' || locale === 'es' || locale === 'en' ? locale : 'ca'

  const titles = {
    ca: 'Scripts de Trucades en Fred | NextLeadIn',
    es: 'Scripts de Llamadas en Frío | NextLeadIn',
    en: 'Cold Calling Scripts | NextLeadIn'
  }

  const descriptions = {
    ca: 'Plantilles provades per prospectar negocis locals: restaurants, clíniques dentals, tallers i més. Copia, adapta i truca.',
    es: 'Plantillas probadas para prospectar negocios locales: restaurantes, clínicas dentales, talleres y más. Copia, adapta y llama.',
    en: 'Proven templates for prospecting local businesses: restaurants, dental clinics, workshops and more. Copy, adapt and call.'
  }

  const canonical =
    validLocale === 'ca'
      ? 'https://nextleadin.com/resources/cold-calling-scripts'
      : `https://nextleadin.com/${validLocale}/resources/cold-calling-scripts`

  return {
    title: titles[validLocale as keyof typeof titles],
    description: descriptions[validLocale as keyof typeof descriptions],
    alternates: { canonical },
    openGraph: {
      title: titles[validLocale as keyof typeof titles],
      description: descriptions[validLocale as keyof typeof descriptions],
      url: canonical,
      type: 'website'
    }
  }
}

export default async function ColdCallingScriptsPage({ params }: ColdCallingScriptsPageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const validLocale =
    (locale === 'ca' || locale === 'es' || locale === 'en') ? locale : 'ca'

  const t = {
    ca: {
      breadcrumbHome: 'Inici',
      breadcrumbResources: 'Recursos',
      badge: 'Scripts de Trucades en Fred',
      title: 'Tanca més reunions.',
      titleHighlight: 'Digues exactament això.',
      subtitle:
        'Plantilles provades per prospectar negocis locals: restaurants, clíniques dentals, tallers i més. Copia, adapta i truca.',
      metaSectors: 'Sectors',
      metaScripts: 'Scripts',
      metaOpenRate: 'Taxa obertura mitjana'
    },
    es: {
      breadcrumbHome: 'Inicio',
      breadcrumbResources: 'Recursos',
      badge: 'Scripts de Llamadas en Frío',
      title: 'Cierra más reuniones.',
      titleHighlight: 'Di exactamente esto.',
      subtitle:
        'Plantillas probadas para prospectar negocios locales: restaurantes, clínicas dentales, talleres y más. Copia, adapta y llama.',
      metaSectors: 'Sectores',
      metaScripts: 'Scripts',
      metaOpenRate: 'Tasa apertura media'
    },
    en: {
      breadcrumbHome: 'Home',
      breadcrumbResources: 'Resources',
      badge: 'Cold Calling Scripts',
      title: 'Close more meetings.',
      titleHighlight: 'Say exactly this.',
      subtitle:
        'Proven templates for prospecting local businesses: restaurants, dental clinics, workshops and more. Copy, adapt and call.',
      metaSectors: 'Sectors',
      metaScripts: 'Scripts',
      metaOpenRate: 'Average open rate'
    }
  }[validLocale as 'ca' | 'es' | 'en']

  const baseUrl = 'https://nextleadin.com'
  const localePath = validLocale === 'ca' ? '' : `/${validLocale}`
  const currentUrl = `${baseUrl}${localePath}/resources/cold-calling-scripts`
  const localePrefix = validLocale === 'ca' ? '' : `/${validLocale}`

  const breadcrumbs = [
    { name: t.breadcrumbHome, url: `${baseUrl}${localePath}` },
    { name: t.breadcrumbResources, url: `${baseUrl}${localePath}/resources` },
    {
      name: validLocale === 'ca' ? 'Scripts Trucades en Fred' : validLocale === 'es' ? 'Scripts Llamadas en Frío' : 'Cold Calling Scripts',
      url: currentUrl
    }
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
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: t.title + ' ' + t.titleHighlight,
      description: t.subtitle,
      publisher: {
        '@type': 'Organization',
        name: 'NextLeadIn'
      }
    }
  ]

  return (
    <>
      <SeoJsonLd data={structuredData} />

      <div className="overflow-x-hidden min-w-0 w-full">
        {/* Hero */}
        <section className="pt-28 sm:pt-32 pb-10 sm:pb-12 bg-gradient-to-b from-primary-50 to-white">
          <div className="container mx-auto px-4 sm:px-6">
            <nav
              className="flex items-center space-x-2 text-sm text-gray-500 mb-8"
              aria-label="Breadcrumb"
            >
              <Link
                href={localePrefix || '/'}
                className="hover:text-primary-600 transition-colors"
              >
                {t.breadcrumbHome}
              </Link>
              <span className="text-gray-400" aria-hidden>/</span>
              <Link
                href={`${localePrefix}/resources`}
                className="hover:text-primary-600 transition-colors"
              >
                {t.breadcrumbResources}
              </Link>
              <span className="text-gray-400" aria-hidden>/</span>
              <span className="text-gray-900">{t.badge}</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 sm:mb-6 text-xs font-mono tracking-wider text-primary-600 bg-primary-100 border border-primary-200 rounded uppercase">
                <Play className="w-3.5 h-3.5 shrink-0" aria-hidden />
                {t.badge}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                {t.title}
                <br />
                <span className="text-primary-600">{t.titleHighlight}</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                {t.subtitle}
              </p>

              <div className="flex flex-wrap gap-6 sm:gap-8">
                <div>
                  <span className="block text-2xl font-bold font-mono text-primary-600">
                    6
                  </span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {t.metaSectors}
                  </span>
                </div>
                <div>
                  <span className="block text-2xl font-bold font-mono text-primary-600">
                    18
                  </span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {t.metaScripts}
                  </span>
                </div>
                <div>
                  <span className="block text-2xl font-bold font-mono text-primary-600">
                    +40%
                  </span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {t.metaOpenRate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div
          className="h-px w-full bg-gradient-to-r from-transparent via-primary-300/50 to-transparent"
          role="presentation"
        />

        {/* Scripts content */}
        <section className="py-10 sm:py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <ColdCallingScriptsContent
              locale={validLocale as 'es' | 'ca' | 'en'}
            />
          </div>
        </section>

        <CTAScriptsSection />
      </div>
    </>
  )
}
