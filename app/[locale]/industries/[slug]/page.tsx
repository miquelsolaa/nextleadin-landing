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
  industryExists,
  getAllIndustrySlugs,
  getIndustryData,
  type IndustryLocale
} from '@/lib/industries'
import { generateAIOptimizedMetadata } from '@/lib/seo-metadata'
import * as LucideIcons from 'lucide-react'

function getLucideIcon(iconName: string, className: string = "w-6 h-6"): React.ReactNode {
  const iconNamePascal = iconName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[
    iconNamePascal
  ]
  
  if (IconComponent) {
    return <IconComponent className={className} />;
  }
  
  return <LucideIcons.Building2 className={className} />;
}

interface IndustryPageProps {
  params: Promise<{
    slug: string
    locale: string
  }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  return getAllIndustrySlugs()
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? (locale as IndustryLocale) : 'ca'
  const industry = await getIndustryData(slug, validLocale)

  if (!industry) {
    return {
      title: 'Indústria no trobada'
    }
  }

  const baseUrl = 'https://nextleadin.com'
  const localePath = validLocale === 'en' ? '/en' : validLocale === 'ca' ? '/ca' : ''
  const pathSegment = `industries/${industry.slug}`
  const canonical = localePath
    ? `${baseUrl}${localePath}/${pathSegment}`
    : `${baseUrl}/${pathSegment}`

  return generateAIOptimizedMetadata('industries', validLocale, {
    title: industry.title,
    description: industry.description,
    keywords: industry.keywords,
    canonical,
    ogImage: industry.image || undefined,
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

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug, locale } = await params
  setRequestLocale(locale)
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? (locale as IndustryLocale) : 'ca'

  if (!industryExists(slug, validLocale)) {
    notFound()
  }

  const industry = await getIndustryData(slug, validLocale)
  if (!industry) {
    notFound()
  }

  const t = {
    ca: {
      breadcrumbHome: 'Inici',
      breadcrumbIndustries: 'Indústries',
      painPointsTitle: 'Reptes que coneixes',
      solutionsTitle: 'Com t\'ajudem',
      statsTitle: 'Resultats reals',
      faqTitle: 'Preguntes freqüents',
      ctaTitle: 'Preparat per trobar leads?',
      ctaDescription: 'Prova gratuïta de 7 dies. Sense targeta de crèdit.',
      ctaPrimary: 'Prova gratuïta',
      ctaSecondary: 'Parlar amb vendes'
    },
    es: {
      breadcrumbHome: 'Inicio',
      breadcrumbIndustries: 'Industrias',
      painPointsTitle: 'Retos que conoces',
      solutionsTitle: 'Cómo te ayudamos',
      statsTitle: 'Resultados reales',
      faqTitle: 'Preguntas frecuentes',
      ctaTitle: '¿Preparado para encontrar leads?',
      ctaDescription: 'Prueba gratuita de 7 días. Sin tarjeta de crédito.',
      ctaPrimary: 'Prueba gratuita',
      ctaSecondary: 'Hablar con ventas'
    },
    en: {
      breadcrumbHome: 'Home',
      breadcrumbIndustries: 'Industries',
      painPointsTitle: 'Challenges you know',
      solutionsTitle: 'How we help',
      statsTitle: 'Real results',
      faqTitle: 'Frequently asked questions',
      ctaTitle: 'Ready to find leads?',
      ctaDescription: '7-day free trial. No credit card required.',
      ctaPrimary: 'Start free trial',
      ctaSecondary: 'Talk to sales'
    }
  }[validLocale]

  const baseUrl = 'https://nextleadin.com'
  const localePath = validLocale === 'es' ? '' : `/${validLocale}`
  const currentUrl = `${baseUrl}${localePath}/industries/${industry.slug}`
  const localePrefix = validLocale === 'es' ? '' : `/${validLocale}`

  const breadcrumbs = [
    {
      name: t.breadcrumbHome,
      url: `${baseUrl}${localePath}`
    },
    {
      name: t.breadcrumbIndustries,
      url: `${baseUrl}${localePath}/industries`
    },
    {
      name: industry.title,
      url: currentUrl
    }
  ]

  const localeTitles = {
    ca: {
      serviceType: 'Generació de leads per a',
      howToName: 'Com trobar leads de',
      howToDescription: 'Guia pas a pas per generar leads qualificats'
    },
    es: {
      serviceType: 'Generación de leads para',
      howToName: 'Cómo encontrar leads de',
      howToDescription: 'Guía paso a paso para generar leads cualificados'
    },
    en: {
      serviceType: 'Lead generation for',
      howToName: 'How to find',
      howToDescription: 'Step-by-step guide to generate qualified leads'
    }
  }[validLocale]

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
      name: industry.title,
      description: industry.description,
      serviceType: `${localeTitles.serviceType} ${industry.title}`,
      provider: {
        '@type': 'Organization',
        name: 'NextLeadIn',
        url: baseUrl,
        logo: `${baseUrl}/images/logo/logo.png`
      },
      areaServed: {
        '@type': 'Country',
        name: 'Spain'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Plans NextLeadIn',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Local Business'
            },
            price: '79',
            priceCurrency: 'EUR'
          }
        ]
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: industry.title,
      description: industry.description,
      url: currentUrl,
      inLanguage: validLocale === 'ca' ? 'ca-ES' : validLocale === 'es' ? 'es-ES' : 'en-US',
      isPartOf: {
        '@type': 'WebSite',
        name: 'NextLeadIn',
        url: baseUrl
      },
      about: {
        '@type': 'Thing',
        name: industry.title
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.prose']
      }
    }
  ]

  if (industry.solutions && industry.solutions.length > 0) {
    const howToSteps = industry.solutions.slice(0, 4).map((solution, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: solution.title,
      text: solution.description
    }))
    
    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: `${localeTitles.howToName} ${industry.title}`,
      description: localeTitles.howToDescription,
      step: howToSteps
    })
  }

  if (industry.faq && industry.faq.length > 0) {
    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: industry.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    })
  }

  const cta = industry.cta ?? {
    title: t.ctaTitle,
    description: t.ctaDescription,
    primaryLabel: t.ctaPrimary,
    primaryHref: '/contact',
    secondaryLabel: t.ctaSecondary,
    secondaryHref: '/contact'
  }

  const getSolutionIcon = (icon: string) => {
    switch (icon) {
      case 'database':
        return (
          <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        )
      case 'brain':
        return (
          <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
      case 'chart':
        return (
          <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      case 'phone':
        return (
          <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        )
      case 'filter':
        return (
          <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        )
      default:
        return (
          <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
    }
  }

  const heroCrumbs = [
    { label: t.breadcrumbHome, href: localePrefix || '/' },
    { label: t.breadcrumbIndustries, href: `${localePrefix}/industries` },
    { label: industry.title }
  ]

  return (
    <>
      <SeoJsonLd data={structuredData} />

      <SeoPageShell>
        <SeoGradientHero
          breadcrumbs={heroCrumbs}
          localePrefix={localePrefix}
          title={industry.heroTitle}
          description={industry.heroSubtitle}
          heroIcon={getLucideIcon(industry.icon, 'w-16 h-16 mx-auto')}
          cta={{
            primaryLabel: cta.primaryLabel,
            secondaryLabel: cta.secondaryLabel,
            primaryHref: cta.primaryHref,
            secondaryHref: cta.secondaryHref
          }}
        />

        {industry.stats && industry.stats.length > 0 && (
          <SeoStatsSection title={t.statsTitle} stats={industry.stats} />
        )}

        {/* Pain Points Section */}
        {industry.painPoints && industry.painPoints.length > 0 && (
          <section className="py-20 bg-gray-50" aria-labelledby="pain-points-heading">
            <div className="container mx-auto px-4">
              <h2 id="pain-points-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                {t.painPointsTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {industry.painPoints.map((point, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-white p-6 shadow-sm transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Solutions Section */}
        {industry.solutions && industry.solutions.length > 0 && (
          <section className="py-20 bg-white" aria-labelledby="solutions-heading">
            <div className="container mx-auto px-4">
              <h2 id="solutions-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                {t.solutionsTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {industry.solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-primary-50 p-6 transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                      {getSolutionIcon(solution.icon)}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Content Section */}
        {industry.contentHtml && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div 
                className="prose prose-lg max-w-3xl mx-auto"
                dangerouslySetInnerHTML={{ __html: industry.contentHtml }}
              />
            </div>
          </section>
        )}

        {industry.faq && industry.faq.length > 0 && (
          <SeoFaqSection title={t.faqTitle} items={industry.faq} />
        )}

        <CTASection />
      </SeoPageShell>
    </>
  )
}
