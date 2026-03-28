import Link from 'next/link'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SeoJsonLd from '@/components/SeoJsonLd'
import CTASection from '@/components/CTASection'
import { getAllIndustries, type IndustryLocale } from '@/lib/industries'
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

interface IndustriesPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: IndustriesPageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? (locale as IndustryLocale) : 'ca'

  const titles = {
    ca: 'Leads per Sector | NextLeadIn',
    es: 'Leads por Sector | NextLeadIn',
    en: 'Leads by Industry | NextLeadIn'
  }

  const descriptions = {
    ca: 'Troba leads de negocis locals per sector: restaurants, gimnasos, clíniques, tallers i més. Dades enriquides i anàlisi amb IA.',
    es: 'Encuentra leads de negocios locales por sector: restaurantes, gimnasios, clínicas, talleres y más. Datos enriquecidos y análisis con IA.',
    en: 'Find local business leads by industry: restaurants, gyms, clinics, auto repair and more. Enriched data and AI analysis.'
  }

  const canonical = validLocale === 'ca'
    ? 'https://nextleadin.com/industries'
    : `https://nextleadin.com/${validLocale}/industries`

  return generateAIOptimizedMetadata('industries', validLocale, {
    title: titles[validLocale],
    description: descriptions[validLocale],
    keywords: ['leads per sector', 'leads by industry', 'local business leads'],
    canonical
  })
}

export default async function IndustriesPage({ params }: IndustriesPageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? (locale as IndustryLocale) : 'ca'

  const industries = getAllIndustries(validLocale)

  const t = {
    ca: {
      breadcrumbHome: 'Inici',
      title: 'Leads per Sector',
      subtitle: 'Troba negocis locals de qualsevol sector amb dades enriquides i anàlisi de ressenyes amb IA.',
      exploreTitle: 'Explora els nostres sectors',
      viewAll: 'Veure tots',
      ctaTitle: 'No trobes el teu sector?',
      ctaDescription: 'Contacta amb nosaltres i t\'ajudarem a trobar els leads que necessites.',
      ctaButton: 'Parla amb nosaltres'
    },
    es: {
      breadcrumbHome: 'Inicio',
      title: 'Leads por Sector',
      subtitle: 'Encuentra negocios locales de cualquier sector con datos enriquecidos y análisis de reseñas con IA.',
      exploreTitle: 'Explora nuestros sectores',
      viewAll: 'Ver todos',
      ctaTitle: '¿No encuentras tu sector?',
      ctaDescription: 'Contacta con nosotros y te ayudaremos a encontrar los leads que necesitas.',
      ctaButton: 'Habla con nosotros'
    },
    en: {
      breadcrumbHome: 'Home',
      title: 'Leads by Industry',
      subtitle: 'Find local businesses in any industry with enriched data and AI-powered review analysis.',
      exploreTitle: 'Explore our industries',
      viewAll: 'View all',
      ctaTitle: "Can't find your industry?",
      ctaDescription: 'Contact us and we will help you find the leads you need.',
      ctaButton: 'Talk to us'
    }
  }[validLocale]

  const baseUrl = 'https://nextleadin.com'
  const localePath = validLocale === 'ca' ? '' : `/${validLocale}`
  const currentUrl = `${baseUrl}${localePath}/industries`
  const localePrefix = validLocale === 'ca' ? '' : `/${validLocale}`

  const breadcrumbs = [
    {
      name: t.breadcrumbHome,
      url: `${baseUrl}${localePath}`
    },
    {
      name: t.title,
      url: currentUrl
    }
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
      '@type': 'ItemList',
      name: t.title,
      itemListElement: industries.map((industry, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: industry.title,
        url: `${baseUrl}${localePath}/industries/${industry.slug}`
      }))
    }
  ]

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
              <span className="text-gray-900">{t.title}</span>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t.exploreTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`${localePrefix}/industries/${industry.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary-300 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-primary-600">{getLucideIcon(industry.icon, "w-10 h-10")}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                        {industry.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Custom CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t.ctaTitle}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t.ctaDescription}
              </p>
              <Link
                href={`${localePrefix}/contact`}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
              >
                {t.ctaButton}
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  )
}
