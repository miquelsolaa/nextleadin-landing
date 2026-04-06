import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import SeoJsonLd from '@/components/SeoJsonLd'
import CTASection from '@/components/CTASection'
import SeoFaqSection from '@/components/seo/SeoFaqSection'
import SeoGradientHero from '@/components/seo/SeoGradientHero'
import SeoPageShell from '@/components/seo/SeoPageShell'
import SeoStatsSection from '@/components/seo/SeoStatsSection'
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

  const baseUrl = 'https://nextleadin.com'
  const localePath = validLocale === 'en' ? '/en' : validLocale === 'ca' ? '/ca' : ''
  const pathSegment = `solutions/${solution.slug}`
  const canonical = localePath
    ? `${baseUrl}${localePath}/${pathSegment}`
    : `${baseUrl}/${pathSegment}`

  return generateAIOptimizedMetadata('solutions', validLocale, {
    title: solution.title,
    description: solution.description,
    keywords: solution.keywords,
    canonical,
    ogImage: solution.image || undefined,
    alternates: {
      languages: {
        'x-default': `${baseUrl}/${pathSegment}`,
        'es-ES': `${baseUrl}/${pathSegment}`,
        'ca-ES': `${baseUrl}/ca/${pathSegment}`,
        'en-US': `${baseUrl}/en/${pathSegment}`
      }
    }
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
  const localePath = validLocale === 'es' ? '' : `/${validLocale}`
  const currentUrl = `${baseUrl}${localePath}/solutions/${solution.slug}`
  const localePrefix = validLocale === 'es' ? '' : `/${validLocale}`

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

  const heroCrumbs = [
    { label: t.breadcrumbHome, href: localePrefix || '/' },
    { label: t.breadcrumbSolutions, href: `${localePrefix}/solutions` },
    { label: solution.title }
  ]

  return (
    <>
      <SeoJsonLd data={structuredData} />

      <SeoPageShell>
        <SeoGradientHero
          breadcrumbs={heroCrumbs}
          localePrefix={localePrefix}
          title={solution.heroTitle}
          description={solution.heroSubtitle}
          heroIcon={getLucideIcon(solution.icon, 'w-16 h-16 mx-auto')}
          cta={{
            primaryLabel: cta.primaryLabel,
            secondaryLabel: cta.secondaryLabel,
            primaryHref: cta.primaryHref,
            secondaryHref: cta.secondaryHref
          }}
        />

        {solution.stats && solution.stats.length > 0 && (
          <SeoStatsSection title={t.statsTitle} stats={solution.stats} />
        )}

        {/* Benefits Section */}
        {solution.benefits && solution.benefits.length > 0 && (
          <section className="py-20 bg-gray-50" aria-labelledby="benefits-heading">
            <div className="container mx-auto px-4">
              <h2 id="benefits-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                {t.benefitsTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {solution.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-white p-6 shadow-sm transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
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
          <section className="py-20 bg-white" aria-labelledby="use-cases-heading">
            <div className="container mx-auto px-4">
              <h2 id="use-cases-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
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

        {solution.faq && solution.faq.length > 0 && (
          <SeoFaqSection title={t.faqTitle} items={solution.faq} />
        )}

        <CTASection />
      </SeoPageShell>
    </>
  )
}
