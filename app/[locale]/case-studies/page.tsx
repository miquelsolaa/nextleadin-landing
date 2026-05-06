import AIStructuredData from '@/components/AIStructuredData'
import { CaseStudiesGrid } from '@/components/case-studies/CaseStudiesGrid'
import { generateAIOptimizedMetadata, generateAIStructuredData } from '@/lib/seo-metadata'
import { getAbsoluteHomeUrl, getAbsoluteLocaleUrl } from '@/lib/locale-url'
import { setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'

const pageCopy = {
  ca: {
    title: "Casos d'èxit",
    intro:
      "Equips comercials, agències i SaaS B2B que han guanyat reunions, temps i ROI amb llistes de negocis locals i context d'IA per trucar amb criteri.",
  },
  es: {
    title: 'Casos de éxito',
    intro:
      'Equipos comerciales, agencias y SaaS B2B que han ganado reuniones, tiempo y ROI con listas de negocios locales y contexto de IA para llamar con criterio.',
  },
  en: {
    title: 'Customer stories',
    intro:
      'Sales teams, agencies and B2B SaaS that gained meetings, time and ROI with local business lists and AI context to call with confidence.',
  },
} as const

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const validLocale = locale === 'ca' || locale === 'es' || locale === 'en' ? locale : 'es'

  return generateAIOptimizedMetadata('case-studies', validLocale)
}

export default async function CaseStudiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  const validLocale = locale === 'ca' || locale === 'es' || locale === 'en' ? locale : 'es'
  const copy = pageCopy[validLocale]

  const breadcrumbs = [
    {
      name: validLocale === 'ca' ? 'Inici' : validLocale === 'es' ? 'Inicio' : 'Home',
      url: getAbsoluteHomeUrl(validLocale),
    },
    {
      name: validLocale === 'ca' ? "Casos d'èxit" : validLocale === 'es' ? 'Casos de éxito' : 'Case studies',
      url: getAbsoluteLocaleUrl(validLocale, '/case-studies'),
    },
  ]

  return (
    <>
      <AIStructuredData
        page="case-studies"
        locale={validLocale}
        breadcrumbs={breadcrumbs}
        customData={generateAIStructuredData('case-studies', validLocale)}
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container-custom py-12 md:py-16 lg:py-20">
          <header className="max-w-3xl mb-10 md:mb-14">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">{copy.title}</h1>
            <p className="text-lg text-gray-600 leading-relaxed">{copy.intro}</p>
          </header>
          <CaseStudiesGrid locale={validLocale} />
        </div>
      </div>
    </>
  )
}
