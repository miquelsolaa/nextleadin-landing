import Link from 'next/link'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SeoJsonLd from '@/components/SeoJsonLd'
import CTASection from '@/components/CTASection'
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
  
  return <LucideIcons.FileText className={className} />;
}

interface ResourcesPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: ResourcesPageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? locale : 'ca'

  const titles = {
    ca: 'Recursos Gratuïts | NextLeadIn',
    es: 'Recursos Gratuitos | NextLeadIn',
    en: 'Free Resources | NextLeadIn'
  }

  const descriptions = {
    ca: 'Eines gratuïtes per millorar la teva prospecció: calculadora ROI, guies de trucades en fred, templates i més.',
    es: 'Herramientas gratuitas para mejorar tu prospección: calculadora ROI, guías de llamadas en frío, templates y más.',
    en: 'Free tools to improve your prospecting: ROI calculator, cold calling guides, templates and more.'
  }

  const canonical = validLocale === 'ca'
    ? 'https://nextleadin.com/resources'
    : `https://nextleadin.com/${validLocale}/resources`

  return {
    title: titles[validLocale as keyof typeof titles],
    description: descriptions[validLocale as keyof typeof descriptions],
    alternates: { canonical }
  }
}

export default async function ResourcesPage({ params }: ResourcesPageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? locale : 'ca'

  const t = {
    ca: {
      breadcrumbHome: 'Inici',
      title: 'Recursos Gratuïts',
      subtitle: 'Eines i guies per millorar la teva prospecció i tancar més vendes.',
      resources: [
        {
          slug: 'roi-calculator',
          icon: 'calculator',
          title: 'Calculadora ROI',
          description: 'Calcula quant pots estalviar i guanyar amb NextLeadIn. Introdueix les teves dades i veu els resultats en menys de 2 minuts.'
        },
        {
          slug: 'cold-calling-scripts',
          icon: 'file-text',
          title: 'Scripts de trucades en fred',
          description: 'Plantilles provades per a trucades a negocis locals. Copia, adapta i truca.'
        },
        {
          slug: 'local-prospecting-guide',
          icon: 'bar-chart-2',
          title: 'Guia de prospecció local',
          description: 'Sectors, objecions i tècniques per vendre a negocis locals. El model LOCA i mètriques.'
        }
      ],
      comingSoonTitle: 'Properament',
      comingSoonItems: [
        { icon: 'target', title: 'Quiz del prospector', description: 'Descobreix el teu perfil i com millorar.' }
      ]
    },
    es: {
      breadcrumbHome: 'Inicio',
      title: 'Recursos Gratuitos',
      subtitle: 'Herramientas y guías para mejorar tu prospección y cerrar más ventas.',
      resources: [
        {
          slug: 'roi-calculator',
          icon: 'calculator',
          title: 'Calculadora ROI',
          description: 'Calcula cuánto puedes ahorrar y ganar con NextLeadIn. Introduce tus datos y ve los resultados en menos de 2 minutos.'
        },
        {
          slug: 'cold-calling-scripts',
          icon: 'file-text',
          title: 'Scripts de llamadas en frío',
          description: 'Plantillas probadas para llamadas a negocios locales. Copia, adapta y llama.'
        },
        {
          slug: 'local-prospecting-guide',
          icon: 'bar-chart-2',
          title: 'Guía de prospección local',
          description: 'Sectores, objeciones y técnicas para vender a negocios locales. El modelo LOCA y métricas.'
        }
      ],
      comingSoonTitle: 'Próximamente',
      comingSoonItems: [
        { icon: 'target', title: 'Quiz del prospector', description: 'Descubre tu perfil y cómo mejorar.' }
      ]
    },
    en: {
      breadcrumbHome: 'Home',
      title: 'Free Resources',
      subtitle: 'Tools and guides to improve your prospecting and close more sales.',
      resources: [
        {
          slug: 'roi-calculator',
          icon: 'calculator',
          title: 'ROI Calculator',
          description: 'Calculate how much you can save and earn with NextLeadIn. Enter your data and see results in under 2 minutes.'
        },
        {
          slug: 'cold-calling-scripts',
          icon: 'file-text',
          title: 'Cold calling scripts',
          description: 'Proven templates for local business calls. Copy, adapt and call.'
        },
        {
          slug: 'local-prospecting-guide',
          icon: 'bar-chart-2',
          title: 'Local prospecting guide',
          description: 'Sectors, objections and techniques to sell to local businesses. The LOCA model and metrics.'
        }
      ],
      comingSoonTitle: 'Coming Soon',
      comingSoonItems: [
        { icon: 'target', title: 'Prospector quiz', description: 'Discover your profile and how to improve.' }
      ]
    }
  }[validLocale as 'ca' | 'es' | 'en']

  const baseUrl = 'https://nextleadin.com'
  const localePath = validLocale === 'ca' ? '' : `/${validLocale}`
  const currentUrl = `${baseUrl}${localePath}/resources`
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

        {/* Available Resources */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {t.resources.map((resource) => (
                <Link
                  key={resource.slug}
                  href={`${localePrefix}/resources/${resource.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary-300 transition-all"
                >
                  <span className="text-primary-600 block mb-4">{getLucideIcon(resource.icon, "w-10 h-10")}</span>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600">
                    {resource.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t.comingSoonTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {t.comingSoonItems.slice(0, 2).map((item, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 opacity-75">
                  <span className="text-gray-400 block mb-4">{getLucideIcon(item.icon, "w-10 h-10")}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
              {t.comingSoonItems[2] && (
                <div className="md:col-span-2 bg-white rounded-xl border border-gray-200 p-6 opacity-75 max-w-2xl mx-auto w-full">
                  <span className="text-gray-400 block mb-4">{getLucideIcon(t.comingSoonItems[2].icon, "w-10 h-10")}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t.comingSoonItems[2].title}
                  </h3>
                  <p className="text-gray-600">
                    {t.comingSoonItems[2].description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  )
}
