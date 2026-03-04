'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useLocale } from 'next-intl'

const CleanTestimonial = dynamic(
  () => import('@/components/ui/clean-testimonial').then((mod) => ({ default: mod.CleanTestimonial })),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[320px] flex items-center justify-center p-8 bg-gray-50 rounded-xl" aria-hidden="true">
        <div className="animate-pulse h-4 bg-gray-200 rounded w-3/4" />
      </div>
    ),
  }
)

const TestimonialsSection = () => {
  const locale = (useLocale() as 'es' | 'ca' | 'en') ?? 'es'

  const translations = (() => {
    if (locale === 'es') {
      return {
        title: 'Resultados reales de',
        titleHighlight: 'nuestros clientes',
        description: 'Equipos que han pasado de 2-3 reuniones/mes a 8-12 con NextLeadIn.',
        cta: 'Ver casos de éxito'
      }
    }
    if (locale === 'en') {
      return {
        title: 'Real results from',
        titleHighlight: 'our clients',
        description: 'Teams that went from 2-3 meetings/month to 8-12 with NextLeadIn.',
        cta: 'View success stories'
      }
    }
    return {
      title: 'Resultats reals dels',
      titleHighlight: 'nostres clients',
      description: 'Equips que han passat de 2-3 reunions/mes a 8-12 amb NextLeadIn.',
      cta: 'Veure casos d\'èxit'
    }
  })()

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {translations.title}{' '}
            <span className="text-primary-600">{translations.titleHighlight}</span>
          </h2>
          <p className="text-lg text-gray-600">
            {translations.description}
          </p>
        </div>

        {/* Clean Testimonial Component */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <CleanTestimonial />
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link 
            href="#" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            {translations.cta}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
