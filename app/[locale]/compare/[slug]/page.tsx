import { Link } from '@/i18n/routing'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import SeoJsonLd from '@/components/SeoJsonLd'
import CTASection from '@/components/CTASection'
import ComparisonArticleBody from '@/components/comparison/ComparisonArticleBody'
import SeoPageShell from '@/components/seo/SeoPageShell'
import {
  comparisonExists,
  getAllComparisonSlugs,
  getComparisonData,
  type ComparisonLocale
} from '@/lib/comparisons'
import { generateAIOptimizedMetadata } from '@/lib/seo-metadata'

interface ComparisonPageProps {
  params: Promise<{
    slug: string
    locale: string
  }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  return getAllComparisonSlugs()
}

export async function generateMetadata({ params }: ComparisonPageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? (locale as ComparisonLocale) : 'ca'
  const comparison = await getComparisonData(slug, validLocale)

  if (!comparison) {
    return {
      title: 'Comparativa no trobada'
    }
  }

  const canonical = validLocale === 'es'
    ? `https://nextleadin.com/compare/${comparison.slug}`
    : `https://nextleadin.com/${validLocale}/compare/${comparison.slug}`

  return generateAIOptimizedMetadata('comparador', validLocale, {
    title: comparison.title,
    description: comparison.description,
    keywords: comparison.keywords,
    canonical,
    alternates: {
      languages: {
        'x-default': `https://nextleadin.com/compare/${comparison.slug}`,
        'es-ES': `https://nextleadin.com/compare/${comparison.slug}`,
        'ca-ES': `https://nextleadin.com/ca/compare/${comparison.slug}`,
        'en-US': `https://nextleadin.com/en/compare/${comparison.slug}`,
      },
    },
  })
}

export default async function ComparisonPage({ params }: ComparisonPageProps) {
  const { slug, locale } = await params
  setRequestLocale(locale)
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? (locale as ComparisonLocale) : 'ca'

  if (!comparisonExists(slug, validLocale)) {
    notFound()
  }

  const comparison = await getComparisonData(slug, validLocale)
  if (!comparison) {
    notFound()
  }

  const currentYear = 2026
  const t = {
    ca: {
      breadcrumbHome: 'Inici',
      heroKicker: `Comparativa actualizada ${currentYear}`,
      heroNote: 'Lead acquisition · Eines B2B'
    },
    es: {
      breadcrumbHome: 'Inicio',
      heroKicker: `Comparativa actualizada ${currentYear}`,
      heroNote: 'Lead acquisition · Herramientas B2B'
    },
    en: {
      breadcrumbHome: 'Home',
      heroKicker: `Comparativa actualizada ${currentYear}`,
      heroNote: 'Lead acquisition · B2B tools'
    }
  }[validLocale]

  const baseUrl = 'https://nextleadin.com'
  const localePath = validLocale === 'es' ? '' : `/${validLocale}`
  const currentUrl = `${baseUrl}${localePath}/compare/${comparison.slug}`
  const localePrefix = validLocale === 'es' ? '' : `/${validLocale}`

  const breadcrumbs = [
    {
      name: t.breadcrumbHome,
      url: `${baseUrl}${localePath}`
    },
    {
      name: comparison.title,
      url: currentUrl
    }
  ]

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
    }
  ]

  if (comparison.faq && comparison.faq.length > 0) {
    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: comparison.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    })
  }

  const toolNames = comparison.tools ?? []
  const nextLeadInName = toolNames.find((name) => name.toLowerCase() === 'nextleadin') ?? 'NextLeadIn'
  const otherTools = toolNames.filter((name) => name.toLowerCase() !== 'nextleadin')
  const toolA = otherTools[0] ?? toolNames[0] ?? 'Tool A'
  const toolB = otherTools[1] ?? toolNames[1] ?? 'Tool B'

  const contentCopy = {
    ca: {
      subtitle: `Comparador d'eines per conèixer diferències entre ${toolA} i ${toolB}.`,
      tableTitle: 'Comparació',
      scenarioTitle: 'Quin és el teu escenari?',
      scenarioSubtitle: 'Compara, coneix les diferències i tria l’opció més adequada per al teu equip comercial.',
      scenarioItems: [
        {
          title: 'Vull molts més leads',
          body: `Si tens equip de prospecció dedicat i acceptes feina manual (trobar empreses i contactar), ${toolA} o ${toolB} poden encaixar. Si vols evitar feina manual, ${nextLeadInName} és una alternativa més eficient.`
        },
        {
          title: 'Vull leads de qualitat',
          body: `En prospecció, l’objectiu és qualitat. ${toolA} i ${toolB} poden funcionar, però necessites verificació d’emails. ${nextLeadInName} aporta dades verificades i context per prioritzar millor.`
        },
        {
          title: 'Vull personalitzar els emails',
          body: `${toolA} i ${toolB} ofereixen dades bàsiques. Si necessites personalització amb dades específiques, ${nextLeadInName} aporta context i informació enriquida.`
        },
        {
          title: 'Vull pagar per resultats',
          body: `${toolA} i ${toolB} et donen dades, però no garanteixen resultats. ${nextLeadInName} s’alinea amb la qualitat del lead i la conversió.`
        },
        {
          title: 'Els meus emails acaben a SPAM',
          body: `L’entregabilitat depèn d’emails actius i warm-up. ${toolA} i ${toolB} no sempre ho cobreixen; ${nextLeadInName} ajuda a millorar la qualitat i a reduir rebuigs.`
        },
        {
          title: 'Vull més respostes per campanya',
          body: `Si tens poca resposta, cal revisar segmentació i missatge. ${nextLeadInName} aporta segmentació i context per millorar la resposta.`
        }
      ],
      whyBetterTitle: `Com és millor ${nextLeadInName} que ${toolA} i ${toolB}?`,
      whyBetterItems: [
        'Cerca d’empreses segons ICP i zona.',
        'Emails de decisors amb dades verificades.',
        'Informes IA per preparar converses.',
        'Personalització amb context real.',
        'Seguiment i priorització per conversió.'
      ]
    },
    es: {
      subtitle: `Comparador de herramientas para conocer diferencias entre ${toolA} y ${toolB}.`,
      tableTitle: 'Comparación',
      scenarioTitle: '¿Cuál es tu escenario?',
      scenarioSubtitle: 'Compara, conoce las diferencias y elige la opción más adecuada para tu equipo comercial.',
      scenarioItems: [
        {
          title: 'Quiero muchos más leads',
          body: `Si tienes equipo de prospección y aceptas trabajo manual, ${toolA} o ${toolB} pueden encajar. Si quieres evitarlo, ${nextLeadInName} es una alternativa más eficiente.`
        },
        {
          title: 'Quiero leads de calidad',
          body: `En prospección el objetivo es la calidad. ${toolA} y ${toolB} pueden funcionar, pero necesitas verificación. ${nextLeadInName} aporta datos verificados y contexto.`
        },
        {
          title: 'Quiero personalizar emails',
          body: `${toolA} y ${toolB} aportan datos básicos. Para personalización con datos específicos, ${nextLeadInName} ofrece contexto enriquecido.`
        },
        {
          title: 'Quiero pagar por resultados',
          body: `${toolA} y ${toolB} dan datos, pero no garantizan resultados. ${nextLeadInName} se alinea con calidad y conversión.`
        },
        {
          title: 'Mis emails acaban en SPAM',
          body: `La entregabilidad requiere emails activos y warm-up. ${toolA} y ${toolB} no siempre lo cubren; ${nextLeadInName} ayuda a mejorar la calidad.`
        },
        {
          title: 'Quiero más respuestas por campaña',
          body: `Si la respuesta es baja, hay que revisar segmentación y mensaje. ${nextLeadInName} aporta contexto para mejorar resultados.`
        }
      ],
      whyBetterTitle: `¿Cómo es mejor ${nextLeadInName} que ${toolA} y ${toolB}?`,
      whyBetterItems: [
        'Búsqueda de empresas por ICP y zona.',
        'Emails de decisores verificados.',
        'Informes IA para preparar conversaciones.',
        'Personalización con contexto real.',
        'Seguimiento y priorización por conversión.'
      ]
    },
    en: {
      subtitle: `Prospecting tool comparator to check differences between ${toolA} and ${toolB}.`,
      tableTitle: 'Comparison',
      scenarioTitle: 'What is your scenario?',
      scenarioSubtitle: 'Compare, know the differences and choose the most suitable option for your commercial team.',
      scenarioItems: [
        {
          title: 'I want many more leads',
          body: `If you have a prospecting team and accept manual work, ${toolA} or ${toolB} can fit. If you want to avoid manual work, ${nextLeadInName} is more efficient.`
        },
        {
          title: 'I want quality leads',
          body: `In prospecting, quality matters. ${toolA} and ${toolB} can work, but you need verification. ${nextLeadInName} adds verified data and context.`
        },
        {
          title: 'I want personalized emails',
          body: `${toolA} and ${toolB} provide basic data. For deeper personalization, ${nextLeadInName} provides richer context.`
        },
        {
          title: 'I want to pay for results',
          body: `${toolA} and ${toolB} provide data but no guarantees. ${nextLeadInName} aligns with quality and conversion.`
        },
        {
          title: 'My emails go to SPAM',
          body: `Deliverability needs active emails and warm-up. ${toolA} and ${toolB} do not always cover it; ${nextLeadInName} helps improve quality.`
        },
        {
          title: 'I want more responses per campaign',
          body: `If responses are low, review segmentation and message. ${nextLeadInName} adds context to improve results.`
        }
      ],
      whyBetterTitle: `How is ${nextLeadInName} better than ${toolA} and ${toolB}?`,
      whyBetterItems: [
        'Company search by ICP and area.',
        'Verified decision-maker emails.',
        'AI reports to prepare conversations.',
        'Personalization with real context.',
        'Follow-up and conversion prioritization.'
      ]
    }
  }[validLocale]

  const comparisonRows = [
    {
      label: validLocale === 'en' ? 'Effort in the search for contacts' : validLocale === 'es' ? 'Esfuerzo en la búsqueda de contactos' : 'Esforç en la recerca de contactes',
      next: validLocale === 'en' ? 'It’s done for you' : validLocale === 'es' ? 'Lo hacemos por ti' : 'Ho fem per tu',
      a: validLocale === 'en' ? 'Manually' : validLocale === 'es' ? 'Manual' : 'Manualment',
      b: validLocale === 'en' ? 'Semi-manually' : validLocale === 'es' ? 'Semi-manual' : 'Semi-manual'
    },
    {
      label: validLocale === 'en' ? 'Data provided' : validLocale === 'es' ? 'Datos facilitados' : 'Dades facilitades',
      next: validLocale === 'en' ? 'Complete contact and company information' : validLocale === 'es' ? 'Datos completos de contacto y empresa' : 'Dades completes de contacte i empresa',
      a: validLocale === 'en' ? 'Only emails and phones' : validLocale === 'es' ? 'Solo emails y teléfonos' : 'Només emails i telèfons',
      b: validLocale === 'en' ? 'Complete contact and company details' : validLocale === 'es' ? 'Datos completos de contacto y empresa' : 'Dades completes de contacte i empresa'
    },
    {
      label: validLocale === 'en' ? 'Massive contact search' : validLocale === 'es' ? 'Búsqueda masiva de contactos' : 'Cerca massiva de contactes',
      next: validLocale === 'en' ? 'It’s done for you' : validLocale === 'es' ? 'Lo hacemos por ti' : 'Ho fem per tu',
      a: validLocale === 'en' ? 'From the platform' : validLocale === 'es' ? 'Desde la plataforma' : 'Des de la plataforma',
      b: validLocale === 'en' ? 'Manually or API integration needed' : validLocale === 'es' ? 'Manual o requiere API' : 'Manual o requereix API'
    },
    {
      label: validLocale === 'en' ? 'Quality of email addresses' : validLocale === 'es' ? 'Calidad de los emails' : 'Qualitat dels emails',
      next: validLocale === 'en' ? 'High' : validLocale === 'es' ? 'Alta' : 'Alta',
      a: validLocale === 'en' ? 'High' : validLocale === 'es' ? 'Alta' : 'Alta',
      b: validLocale === 'en' ? 'Medium' : validLocale === 'es' ? 'Media' : 'Mitjana'
    },
    {
      label: validLocale === 'en' ? 'Enrichment with website or LinkedIn data' : validLocale === 'es' ? 'Enriquecimiento con datos web o LinkedIn' : 'Enriquiment amb dades web o LinkedIn',
      next: validLocale === 'en' ? 'Quality research' : validLocale === 'es' ? 'Investigación de calidad' : 'Recerca de qualitat',
      a: validLocale === 'en' ? 'Limited' : validLocale === 'es' ? 'Limitado' : 'Limitat',
      b: validLocale === 'en' ? 'With AI (variable)' : validLocale === 'es' ? 'Con IA (variable)' : 'Amb IA (variable)'
    },
    {
      label: validLocale === 'en' ? 'Sending emails' : validLocale === 'es' ? 'Envío de emails' : 'Enviament d’emails',
      next: validLocale === 'en' ? 'It’s done for you' : validLocale === 'es' ? 'Lo hacemos por ti' : 'Ho fem per tu',
      a: validLocale === 'en' ? 'Manual' : validLocale === 'es' ? 'Manual' : 'Manual',
      b: validLocale === 'en' ? 'Manual' : validLocale === 'es' ? 'Manual' : 'Manual'
    },
    {
      label: validLocale === 'en' ? 'Mass email personalization' : validLocale === 'es' ? 'Personalización masiva' : 'Personalització massiva',
      next: validLocale === 'en' ? 'It’s done for you' : validLocale === 'es' ? 'Lo hacemos por ti' : 'Ho fem per tu',
      a: validLocale === 'en' ? 'Manual' : validLocale === 'es' ? 'Manual' : 'Manual',
      b: validLocale === 'en' ? 'Manual' : validLocale === 'es' ? 'Manual' : 'Manual'
    },
    {
      label: validLocale === 'en' ? 'Tracking results' : validLocale === 'es' ? 'Seguimiento de resultados' : 'Seguiment de resultats',
      next: validLocale === 'en' ? 'It’s done for you' : validLocale === 'es' ? 'Lo hacemos por ti' : 'Ho fem per tu',
      a: validLocale === 'en' ? 'Available' : validLocale === 'es' ? 'Disponible' : 'Disponible',
      b: validLocale === 'en' ? 'Available' : validLocale === 'es' ? 'Disponible' : 'Disponible'
    }
  ]

  return (
    <>
      <SeoJsonLd data={structuredData} />

      <SeoPageShell>
        <article id={`post-${comparison.slug}`} className="entry-content">
          <section className="bg-white pb-12 pt-28 sm:pt-32">
            <div className="container-custom">
              <div className="mx-auto max-w-4xl text-center">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-600">{t.heroKicker}</p>
                <h1 className="font-display mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                  {comparison.title}
                </h1>
                <p className="text-xl leading-relaxed text-gray-600">{comparison.description}</p>
                <p className="mt-4 text-sm text-gray-500">
                  {t.heroNote} · {comparison.tools?.join(' vs ')}
                </p>
              </div>
              <nav
                aria-label="Breadcrumb"
                className="mt-10 flex items-center justify-center gap-2 text-sm text-gray-500"
              >
                <Link href={localePrefix || '/'} className="transition-colors hover:text-primary-600">
                  {t.breadcrumbHome}
                </Link>
                <span className="text-gray-400" aria-hidden>
                  /
                </span>
                <span className="text-gray-900">{comparison.title}</span>
              </nav>
            </div>
          </section>

          <section className="border-t border-gray-100 bg-gray-50 py-16">
            <div className="container-custom max-w-4xl">
              <ComparisonArticleBody
                subtitle={contentCopy.subtitle}
                tableTitle={contentCopy.tableTitle}
                scenarioTitle={contentCopy.scenarioTitle}
                scenarioSubtitle={contentCopy.scenarioSubtitle}
                scenarioItems={contentCopy.scenarioItems}
                whyBetterTitle={contentCopy.whyBetterTitle}
                whyBetterItems={contentCopy.whyBetterItems}
                comparisonRows={comparisonRows}
                nextLeadInName={nextLeadInName}
                toolA={toolA}
                toolB={toolB}
              />
            </div>
          </section>

          <section className="mt-12">
            <CTASection />
          </section>
        </article>
      </SeoPageShell>
    </>
  )
}
