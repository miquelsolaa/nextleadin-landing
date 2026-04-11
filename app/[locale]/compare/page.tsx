import { Link } from '@/i18n/routing'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import AIStructuredData from '@/components/AIStructuredData'
import { getAllComparisons, getComparisonUrl } from '@/lib/comparisons'
import { generateAIOptimizedMetadata } from '@/lib/seo-metadata'
import { getAbsoluteHomeUrl, getAbsoluteLocaleUrl } from '@/lib/locale-url'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? locale : 'ca'
  return generateAIOptimizedMetadata('comparador', validLocale as 'ca' | 'es' | 'en', {
    alternates: {
      languages: {
        'x-default': 'https://nextleadin.com/compare',
        'es-ES': 'https://nextleadin.com/compare',
        'ca-ES': 'https://nextleadin.com/ca/compare',
        'en-US': 'https://nextleadin.com/en/compare',
      },
    },
  })
}

export default async function ComparadorIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? locale : 'ca'

  const comparisons = getAllComparisons(validLocale as 'ca' | 'es' | 'en')
  const localePrefix = validLocale === 'es' ? '' : `/${validLocale}`

  const t = {
    ca: {
      kicker: 'Comparador de Lead Acquisition',
      title: 'Comparatives de software de prospecció i captació',
      subtitle: 'Tria amb criteri: t’expliquem diferències clau i quan convé cada opció.',
      breadcrumbHome: 'Inici',
      breadcrumb: 'Comparador',
      emptyTitle: 'Encara no hi ha comparatives publicades',
      emptyDesc: 'Estem preparant comparatives noves. Mentrestant, descobreix les nostres funcionalitats o contacta amb vendes.',
      emptyCta: 'Explorar funcionalitats',
      emptyCtaContact: 'Contactar',
      readMore: 'Llegir comparativa'
    },
    es: {
      kicker: 'Comparador de Lead Acquisition',
      title: 'Comparativas de software de prospección y captación',
      subtitle: 'Elige con criterio: te contamos diferencias clave y cuándo conviene cada opción.',
      breadcrumbHome: 'Inicio',
      breadcrumb: 'Comparador',
      emptyTitle: 'Todavía no hay comparativas publicadas',
      emptyDesc: 'Estamos preparando nuevas comparativas. Mientras tanto, explora funcionalidades o contacta con ventas.',
      emptyCta: 'Explorar funcionalidades',
      emptyCtaContact: 'Contactar',
      readMore: 'Leer comparativa'
    },
    en: {
      kicker: 'Lead Acquisition Comparisons',
      title: 'Prospecting and lead acquisition software comparisons',
      subtitle: 'Choose with clarity: key differences and when each option fits.',
      breadcrumbHome: 'Home',
      breadcrumb: 'Comparisons',
      emptyTitle: 'No comparisons published yet',
      emptyDesc: 'We\'re preparing new comparisons. In the meantime, explore our features or contact sales.',
      emptyCta: 'Explore features',
      emptyCtaContact: 'Contact',
      readMore: 'Read comparison'
    }
  }[validLocale]

  const breadcrumbs = [
    {
      name: validLocale === 'ca' ? 'Inici' : validLocale === 'es' ? 'Inicio' : 'Home',
      url: getAbsoluteHomeUrl(validLocale as 'ca' | 'es' | 'en'),
    },
    {
      name: validLocale === 'ca' ? 'Comparador' : validLocale === 'es' ? 'Comparador' : 'Comparisons',
      url: getAbsoluteLocaleUrl(validLocale as 'ca' | 'es' | 'en', '/compare'),
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

      <section className="border-t border-gray-100 bg-white py-14">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-700 prose-p:leading-relaxed">
            {validLocale === 'es' ? (
              <>
                <p>
                  Las páginas de comparación responden a la pregunta que muchos equipos comerciales se hacen antes de
                  contratar software: qué herramienta encaja con prospección real (llamadas, email y visitas), con qué
                  datos trabajan y cuánto esfuerzo manual implica pasar de una lista a una conversación. Aquí reunimos
                  comparativas entre NextLeadIn y plataformas populares de lead acquisition para que puedas evaluar
                  foco (negocios locales frente a perfiles LinkedIn), calidad de datos y encaje con tu ICP.
                </p>
                <p>
                  Si vendes a PYMES con presencia física, el criterio no es solo &quot;volumen de contactos&quot;: importan
                  teléfonos útiles, contexto de negocio y señales como reseñas u horarios. Las tablas y escenarios de
                  cada artículo traducen esas diferencias en decisiones prácticas. Usa el comparador como mapa: elige
                  una comparativa, lee el resumen ejecutivo y enlaza a funcionalidades o precios cuando quieras
                  profundizar.
                </p>
              </>
            ) : validLocale === 'en' ? (
              <>
                <p>
                  Comparison pages answer the question revenue teams ask before buying software: which tool matches
                  real outbound (calls, email, and field work), what data you actually get, and how much manual work
                  sits between a list and a conversation. Here we publish side-by-side views of NextLeadIn and popular
                  lead-acquisition platforms so you can compare focus (local businesses versus LinkedIn-first profiles),
                  data depth, and fit with your ICP.
                </p>
                <p>
                  If you sell to SMBs with a physical footprint, the buying criteria go beyond contact volume: phone
                  quality, business context, and signals like reviews or opening hours matter. Each article&apos;s tables
                  and scenarios turn those differences into practical decisions. Use this hub as a map—open a
                  comparison, read the executive summary, then follow through to features or pricing when you need
                  detail.
                </p>
              </>
            ) : (
              <>
                <p>
                  Les pàgines de comparació responen a la pregunta que molts equips comercials es fan abans de contractar
                  programari: quina eina encaixa amb la prospecció real (trucades, correu i visites), amb quines dades es
                  treballa i quant esforç manual cal per passar d&apos;una llista a una conversa. Aquí recollim comparatives
                  entre NextLeadIn i plataformes populars d&apos;adquisició de leads per avaluar el focus (negocis locals
                  versus perfils a LinkedIn), la qualitat de dades i l&apos;encaix amb el teu ICP.
                </p>
                <p>
                  Si vens a PIME amb presència física, el criteri no és només &quot;volum de contactes&quot;: importen telèfons
                  útils, context de negoci i senyals com ressenyes o horaris. Les taules i escenaris de cada article
                  tradueixen aquestes diferències en decisions pràctiques. Fes servir el comparador com a mapa: tria una
                  comparativa, llegeix el resum executiu i enllaça a funcionalitats o preus quan vulguis aprofundir.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="pt-6 pb-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          {comparisons.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{t.emptyTitle}</h2>
              <p className="text-gray-600 mb-6">{t.emptyDesc}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href={`${localePrefix}/features`} className="btn-primary">
                  {t.emptyCta}
                </Link>
<Link href={`${localePrefix}/contact`} className="btn-secondary">
                {t.emptyCtaContact}
              </Link>
              </div>
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
