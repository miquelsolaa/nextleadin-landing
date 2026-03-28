import Link from 'next/link'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SeoJsonLd from '@/components/SeoJsonLd'
import CTASection from '@/components/CTASection'
import { getAllSolutions, type SolutionLocale } from '@/lib/solutions'
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

interface SolutionsPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: SolutionsPageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? (locale as SolutionLocale) : 'ca'

  const titles = {
    ca: 'Solucions per Rol | NextLeadIn',
    es: 'Soluciones por Rol | NextLeadIn',
    en: 'Solutions by Role | NextLeadIn'
  }

  const descriptions = {
    ca: 'NextLeadIn per a SDRs, agències, consultors i equips comercials. Troba la solució perfecta per al teu rol.',
    es: 'NextLeadIn para SDRs, agencias, consultores y equipos comerciales. Encuentra la solución perfecta para tu rol.',
    en: 'NextLeadIn for SDRs, agencies, consultants, and sales teams. Find the perfect solution for your role.'
  }

  const canonical = validLocale === 'ca'
    ? 'https://nextleadin.com/solutions'
    : `https://nextleadin.com/${validLocale}/solutions`

  return generateAIOptimizedMetadata('solutions', validLocale, {
    title: titles[validLocale],
    description: descriptions[validLocale],
    keywords: ['solutions by role', 'SDR leads', 'agency leads'],
    canonical
  })
}

export default async function SolutionsPage({ params }: SolutionsPageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? (locale as SolutionLocale) : 'ca'

  const solutions = getAllSolutions(validLocale)

  const t = {
    ca: {
      breadcrumbHome: 'Inici',
      title: 'Solucions per Rol',
      subtitle: 'NextLeadIn s\'adapta al teu rol. Troba la solució perfecta per a tu.',
      exploreTitle: 'Explora les nostres solucions',
      ctaTitle: 'No trobes el que busques?',
      ctaDescription: 'Contacta amb nosaltres i t\'ajudarem a trobar la solució perfecta.',
      ctaButton: 'Parla amb nosaltres'
    },
    es: {
      breadcrumbHome: 'Inicio',
      title: 'Soluciones por Rol',
      subtitle: 'NextLeadIn se adapta a tu rol. Encuentra la solución perfecta para ti.',
      exploreTitle: 'Explora nuestras soluciones',
      ctaTitle: '¿No encuentras lo que buscas?',
      ctaDescription: 'Contacta con nosotros y te ayudaremos a encontrar la solución perfecta.',
      ctaButton: 'Habla con nosotros'
    },
    en: {
      breadcrumbHome: 'Home',
      title: 'Solutions by Role',
      subtitle: 'NextLeadIn adapts to your role. Find the perfect solution for you.',
      exploreTitle: 'Explore our solutions',
      ctaTitle: "Can't find what you're looking for?",
      ctaDescription: 'Contact us and we will help you find the perfect solution.',
      ctaButton: 'Talk to us'
    }
  }[validLocale]

  const baseUrl = 'https://nextleadin.com'
  const localePath = validLocale === 'ca' ? '' : `/${validLocale}`
  const currentUrl = `${baseUrl}${localePath}/solutions`
  const localePrefix = validLocale === 'ca' ? '' : `/${validLocale}`

  const breadcrumbs = [
    { name: t.breadcrumbHome, url: `${baseUrl}${localePath}` },
    { name: t.title, url: currentUrl }
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
      itemListElement: solutions.map((solution, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: solution.title,
        url: `${baseUrl}${localePath}/solutions/${solution.slug}`
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

        {/* Solutions Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t.exploreTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {solutions.map((solution) => (
                <Link
                  key={solution.slug}
                  href={`${localePrefix}/solutions/${solution.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary-300 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-primary-600">{getLucideIcon(solution.icon, "w-10 h-10")}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {solution.description}
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
