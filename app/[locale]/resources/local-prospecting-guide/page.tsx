import Link from 'next/link'
import { MapPin } from 'lucide-react'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SeoJsonLd from '@/components/SeoJsonLd'
import CTASection from '@/components/CTASection'
import GuiaProspeccionLocalContent from '@/components/GuiaProspeccionLocalContent'

interface LocalProspectingGuidePageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params
}: LocalProspectingGuidePageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale =
    locale === 'ca' || locale === 'es' || locale === 'en' ? locale : 'ca'

  const titles = {
    ca: 'Guia de Prospecció Local | NextLeadIn',
    es: 'Guía de Prospección Local | NextLeadIn',
    en: 'Local Prospecting Guide | NextLeadIn'
  }

  const descriptions = {
    ca:
      'Com prospectar negocis locals a Espanya: sectors, objecions, tècniques i mètriques. Guia completa amb el model LOCA i scripts.',
    es:
      'Cómo prospectar negocios locales en España: sectores, objeciones, técnicas y métricas. Guía completa con el modelo LOCA y scripts.',
    en:
      'How to prospect local businesses in Spain: sectors, objections, techniques and metrics. Complete guide with the LOCA model and scripts.'
  }

  const canonical =
    validLocale === 'ca'
      ? 'https://nextleadin.com/resources/local-prospecting-guide'
      : `https://nextleadin.com/${validLocale}/resources/local-prospecting-guide`

  return {
    title: titles[validLocale as keyof typeof titles],
    description: descriptions[validLocale as keyof typeof descriptions],
    alternates: { canonical },
    openGraph: {
      title: titles[validLocale as keyof typeof titles],
      description: descriptions[validLocale as keyof typeof descriptions],
      url: canonical,
      type: 'article'
    }
  }
}

export default async function LocalProspectingGuidePage({
  params
}: LocalProspectingGuidePageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const validLocale =
    locale === 'ca' || locale === 'es' || locale === 'en' ? locale : 'ca'

  const t = {
    ca: {
      breadcrumbHome: 'Inici',
      breadcrumbResources: 'Recursos',
      badge: 'Guia de Prospecció Local',
      title: 'Com prospectar',
      titleHighlight: 'negocis locals',
      titleSuffix: 'a Espanya en 2026'
    },
    es: {
      breadcrumbHome: 'Inicio',
      breadcrumbResources: 'Recursos',
      badge: 'Guía de Prospección Local',
      title: 'Cómo prospectar',
      titleHighlight: 'negocios locales',
      titleSuffix: 'en España en 2026'
    },
    en: {
      breadcrumbHome: 'Home',
      breadcrumbResources: 'Resources',
      badge: 'Local Prospecting Guide',
      title: 'How to prospect',
      titleHighlight: 'local businesses',
      titleSuffix: 'in Spain in 2026'
    }
  }[validLocale as 'ca' | 'es' | 'en']

  const baseUrl = 'https://nextleadin.com'
  const localePath = validLocale === 'ca' ? '' : `/${validLocale}`
  const currentUrl = `${baseUrl}${localePath}/resources/local-prospecting-guide`
  const localePrefix = validLocale === 'ca' ? '' : `/${validLocale}`

  const breadcrumbs = [
    { name: t.breadcrumbHome, url: `${baseUrl}${localePath}` },
    { name: t.breadcrumbResources, url: `${baseUrl}${localePath}/resources` },
    { name: t.badge, url: currentUrl }
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
      headline: t.title + ' ' + t.titleHighlight + ' ' + t.titleSuffix,
      description:
        'Complete guide to prospecting local businesses in Spain: sectors, qualifications, first contact, objections and metrics.',
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
              <span className="text-gray-400" aria-hidden>
                /
              </span>
              <Link
                href={`${localePrefix}/resources`}
                className="hover:text-primary-600 transition-colors"
              >
                {t.breadcrumbResources}
              </Link>
              <span className="text-gray-400" aria-hidden>
                /
              </span>
              <span className="text-gray-900">{t.badge}</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 sm:mb-6 text-xs font-mono tracking-wider text-primary-600 bg-primary-100 border border-primary-200 rounded uppercase">
                <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden />
                {t.badge}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                {t.title}{' '}
                <span className="text-primary-600">{t.titleHighlight}</span>{' '}
                {t.titleSuffix}
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-10 sm:py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <GuiaProspeccionLocalContent
              locale={validLocale as 'es' | 'ca' | 'en'}
              localePrefix={localePrefix}
            />
          </div>
        </section>

        <CTASection />
      </div>
    </>
  )
}
