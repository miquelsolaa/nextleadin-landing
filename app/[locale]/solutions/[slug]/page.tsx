import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import SeoJsonLd from '@/components/SeoJsonLd'
import CTASection from '@/components/CTASection'
import {
  solutionExists,
  getAllSolutionSlugs,
  getSolutionData,
  type SolutionLocale
} from '@/lib/solutions'
import { generateAIOptimizedMetadata } from '@/lib/seo-metadata'
import * as LucideIcons from 'lucide-react'

function getLucideIcon(iconName: string, className: string = "w-6 h-6"): React.ReactNode {
  const iconNamePascal = iconName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[iconNamePascal];
  
  if (IconComponent) {
    return <IconComponent className={className} />;
  }
  
  return <LucideIcons.Lightbulb className={className} />;
}

interface SolutionPageProps {
  params: Promise<{
    slug: string
    locale: string
  }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  return getAllSolutionSlugs()
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? (locale as SolutionLocale) : 'ca'
  const solution = await getSolutionData(slug, validLocale)

  if (!solution) {
    return {
      title: 'Solució no trobada'
    }
  }

  const canonical = validLocale === 'ca'
    ? `https://nextleadin.com/solutions/${solution.slug}`
    : `https://nextleadin.com/${validLocale}/solutions/${solution.slug}`

  return generateAIOptimizedMetadata('solutions', validLocale, {
    title: solution.title,
    description: solution.description,
    keywords: solution.keywords,
    canonical
  })
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug, locale } = await params
  setRequestLocale(locale)
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? (locale as SolutionLocale) : 'ca'

  if (!solutionExists(slug, validLocale)) {
    notFound()
  }

  const solution = await getSolutionData(slug, validLocale)
  if (!solution) {
    notFound()
  }

  const t = {
    ca: {
      breadcrumbHome: 'Inici',
      breadcrumbSolutions: 'Solucions',
      benefitsTitle: 'Beneficis clau',
      useCasesTitle: 'Casos d\'ús',
      statsTitle: 'Resultats reals',
      faqTitle: 'Preguntes freqüents',
      ctaTitle: 'Preparat per començar?',
      ctaDescription: 'Prova gratuïta de 7 dies. Sense targeta de crèdit.',
      ctaPrimary: 'Prova gratuïta',
      ctaSecondary: 'Parlar amb vendes'
    },
    es: {
      breadcrumbHome: 'Inicio',
      breadcrumbSolutions: 'Soluciones',
      benefitsTitle: 'Beneficios clave',
      useCasesTitle: 'Casos de uso',
      statsTitle: 'Resultados reales',
      faqTitle: 'Preguntas frecuentes',
      ctaTitle: '¿Preparado para empezar?',
      ctaDescription: 'Prueba gratuita de 7 días. Sin tarjeta de crédito.',
      ctaPrimary: 'Prueba gratuita',
      ctaSecondary: 'Hablar con ventas'
    },
    en: {
      breadcrumbHome: 'Home',
      breadcrumbSolutions: 'Solutions',
      benefitsTitle: 'Key benefits',
      useCasesTitle: 'Use cases',
      statsTitle: 'Real results',
      faqTitle: 'Frequently asked questions',
      ctaTitle: 'Ready to get started?',
      ctaDescription: '7-day free trial. No credit card required.',
      ctaPrimary: 'Start free trial',
      ctaSecondary: 'Talk to sales'
    }
  }[validLocale]

  const baseUrl = 'https://nextleadin.com'
  const localePath = validLocale === 'ca' ? '' : `/${validLocale}`
  const currentUrl = `${baseUrl}${localePath}/solutions/${solution.slug}`
  const localePrefix = validLocale === 'ca' ? '' : `/${validLocale}`

  const breadcrumbs = [
    { name: t.breadcrumbHome, url: `${baseUrl}${localePath}` },
    { name: t.breadcrumbSolutions, url: `${baseUrl}${localePath}/solutions` },
    { name: solution.title, url: currentUrl }
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
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: solution.title,
      description: solution.description,
      provider: { '@type': 'Organization', name: 'NextLeadIn' }
    }
  ]

  if (solution.faq && solution.faq.length > 0) {
    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: solution.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer }
      }))
    })
  }

  const cta = solution.cta ?? {
    title: t.ctaTitle,
    description: t.ctaDescription,
    primaryLabel: t.ctaPrimary,
    primaryHref: '/contact',
    secondaryLabel: t.ctaSecondary,
    secondaryHref: '/contact'
  }

  const getBenefitIcon = (icon: string) => {
    return getLucideIcon(icon, "w-8 h-8 text-primary-600");
  }

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
              <Link href={`${localePrefix}/solutions`} className="hover:text-primary-600 transition-colors">
                {t.breadcrumbSolutions}
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900">{solution.title}</span>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <span className="text-primary-600 mb-6 block">{getLucideIcon(solution.icon, "w-16 h-16 mx-auto")}</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {solution.heroTitle}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {solution.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`${localePrefix}/contact`}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  {cta.primaryLabel}
                </Link>
                <Link
                  href={/demo/i.test(cta.secondaryLabel ?? '') ? `${localePrefix || '/'}?openVideo=1` : (cta.secondaryHref ? `${localePrefix}${cta.secondaryHref}` : `${localePrefix}/contact`)}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  {cta.secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {solution.stats && solution.stats.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {solution.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl sm:text-5xl font-bold text-primary-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        {solution.benefits && solution.benefits.length > 0 && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                {t.benefitsTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {solution.benefits.map((benefit, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                      {getBenefitIcon(benefit.icon)}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Use Cases Section */}
        {solution.useCases && solution.useCases.length > 0 && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                {t.useCasesTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {solution.useCases.map((useCase, index) => (
                  <div key={index} className="border-l-4 border-primary-600 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Content Section */}
        {solution.contentHtml && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div 
                className="prose prose-lg max-w-3xl mx-auto"
                dangerouslySetInnerHTML={{ __html: solution.contentHtml }}
              />
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {solution.faq && solution.faq.length > 0 && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                {t.faqTitle}
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                {solution.faq.map((item, index) => (
                  <details key={index} className="bg-white rounded-xl p-6 shadow-sm group">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                      <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-4 text-gray-600">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  )
}
