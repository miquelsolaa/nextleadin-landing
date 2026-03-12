import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import type { IndustryMeta } from '@/lib/industries'

function getLucideIcon(iconName: string, className: string = 'w-6 h-6'): React.ReactNode {
  const iconNamePascal = iconName
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')

  const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[iconNamePascal]

  if (IconComponent) {
    return <IconComponent className={className} />
  }

  return <LucideIcons.Building2 className={className} />
}

interface IndustriesPreviewSectionProps {
  industries: IndustryMeta[]
  locale: 'ca' | 'es' | 'en'
}

const titles = {
  ca: {
    heading: 'Leads per sector',
    subheading: 'Troba negocis locals amb dades enriquides i anàlisi amb IA.',
    viewAll: 'Veure tots els sectors',
  },
  es: {
    heading: 'Leads por sector',
    subheading: 'Encuentra negocios locales con datos enriquecidos y análisis con IA.',
    viewAll: 'Ver todos los sectores',
  },
  en: {
    heading: 'Leads by industry',
    subheading: 'Find local businesses with enriched data and AI analysis.',
    viewAll: 'View all industries',
  },
} as const

export default function IndustriesPreviewSection({ industries, locale }: IndustriesPreviewSectionProps) {
  const localePrefix = locale === 'ca' ? '' : `/${locale}`
  const t = titles[locale]
  const displayIndustries = industries.slice(0, 8)

  return (
    <section
      id="sectors"
      className="section-padding bg-white"
      aria-labelledby="sectors-heading"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 id="sectors-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.heading}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {displayIndustries.map((industry) => (
            <Link
              key={industry.slug}
              href={`${localePrefix ? `${localePrefix}/industries` : '/industries'}/${industry.slug}`}
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary-300 transition-all block"
            >
              <div className="flex items-start gap-4">
                <span className="text-primary-600 flex-shrink-0">
                  {getLucideIcon(industry.icon ?? 'building-2', 'w-10 h-10')}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{industry.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={localePrefix ? `${localePrefix}/industries` : '/industries'}
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            {t.viewAll}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
