import Link from 'next/link'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import AIStructuredData from '@/components/AIStructuredData'
import { getAllComparisons, getComparisonUrl } from '@/lib/comparisons'
import { generateAIOptimizedMetadata } from '@/lib/seo-metadata'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? locale : 'ca'
  return generateAIOptimizedMetadata('comparador', validLocale as 'ca' | 'es' | 'en')
}

export default async function ComparadorIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? locale : 'ca'

  const comparisons = getAllComparisons(validLocale as 'ca' | 'es' | 'en')
  const localePrefix = validLocale === 'ca' ? '' : `/${validLocale}`

  const t = {
    ca: {
      kicker: 'Comparador de Lead Acquisition',
      title: 'Comparatives de software de prospecció i captació',
      subtitle: 'Tria amb criteri: t’expliquem diferències clau i quan convé cada opció.',
      breadcrumbHome: 'Inici',
      breadcrumb: 'Comparador',
      emptyTitle: 'Encara no hi ha comparatives publicades',
      emptyDesc: 'Torna-ho a provar aviat: estem preparant comparatives noves.',
      readMore: 'Llegir comparativa'
    },
    es: {
      kicker: 'Comparador de Lead Acquisition',
      title: 'Comparativas de software de prospección y captación',
      subtitle: 'Elige con criterio: te contamos diferencias clave y cuándo conviene cada opción.',
      breadcrumbHome: 'Inicio',
      breadcrumb: 'Comparador',
      emptyTitle: 'Todavía no hay comparativas publicadas',
      emptyDesc: 'Vuelve pronto: estamos preparando nuevas comparativas.',
      readMore: 'Leer comparativa'
    },
    en: {
      kicker: 'Lead Acquisition Comparisons',
      title: 'Prospecting and lead acquisition software comparisons',
      subtitle: 'Choose with clarity: key differences and when each option fits.',
      breadcrumbHome: 'Home',
      breadcrumb: 'Comparisons',
      emptyTitle: 'No comparisons published yet',
      emptyDesc: 'Check back soon: more comparisons are on the way.',
      readMore: 'Read comparison'
    }
  }[validLocale]

  const breadcrumbs = [
    {
      name: validLocale === 'ca' ? 'Inici' : validLocale === 'es' ? 'Inicio' : 'Home',
      url: validLocale === 'ca' ? 'https://nextleadin.com' : `https://nextleadin.com/${validLocale}`
    },
    {
      name: validLocale === 'ca' ? 'Comparador' : validLocale === 'es' ? 'Comparador' : 'Comparisons',
      url: validLocale === 'ca' ? 'https://nextleadin.com/compare' : `https://nextleadin.com/${validLocale}/compare`
    }
  ]

  return (
    <>
      <AIStructuredData page="comparador" locale={validLocale as 'ca' | 'es' | 'en'} breadcrumbs={breadcrumbs} />
      <section className="pt-32 pb-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 mb-4">
              {t.kicker}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href={localePrefix || '/'} className="hover:text-primary-600 transition-colors">
              {t.breadcrumbHome}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{t.breadcrumb}</span>
          </nav>
        </div>
      </section>

      <section className="pt-6 pb-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          {comparisons.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{t.emptyTitle}</h2>
              <p className="text-gray-600">{t.emptyDesc}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comparisons.map((comparison) => (
                <article key={comparison.slug} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col">
                  <p className="text-xs uppercase tracking-wider text-primary-600 font-semibold mb-3">
                    {comparison.tools?.join(' vs ')}
                  </p>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {comparison.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-6 flex-1">
                    {comparison.description}
                  </p>
                  <Link
                    href={getComparisonUrl(comparison.slug, validLocale as 'ca' | 'es' | 'en')}
                    className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    {t.readMore}
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
