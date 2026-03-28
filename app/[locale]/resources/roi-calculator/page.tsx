import { Link } from '@/i18n/routing'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SeoJsonLd from '@/components/SeoJsonLd'
import CTASection from '@/components/CTASection'
import ROICalculator from '@/components/ROICalculator'

interface ROICalculatorPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: ROICalculatorPageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? locale : 'ca'

  const titles = {
    ca: 'Calculadora ROI | NextLeadIn',
    es: 'Calculadora ROI | NextLeadIn',
    en: 'ROI Calculator | NextLeadIn'
  }

  const descriptions = {
    ca: 'Calcula el retorn de la inversió amb NextLeadIn. Descobreix quant pots estalviar en temps i guanyar en reunions i vendes.',
    es: 'Calcula el retorno de la inversión con NextLeadIn. Descubre cuánto puedes ahorrar en tiempo y ganar en reuniones y ventas.',
    en: 'Calculate your ROI with NextLeadIn. Discover how much time you can save and how many more meetings and sales you can generate.'
  }

  const canonical = validLocale === 'ca'
    ? 'https://nextleadin.com/resources/roi-calculator'
    : `https://nextleadin.com/${validLocale}/resources/roi-calculator`

  return {
    title: titles[validLocale as keyof typeof titles],
    description: descriptions[validLocale as keyof typeof descriptions],
    alternates: { canonical },
    openGraph: {
      title: titles[validLocale as keyof typeof titles],
      description: descriptions[validLocale as keyof typeof descriptions],
      url: canonical,
      type: 'website'
    }
  }
}

export default async function ROICalculatorPage({ params }: ROICalculatorPageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? locale : 'ca'

  const t = {
    ca: {
      breadcrumbHome: 'Inici',
      breadcrumbResources: 'Recursos',
      title: 'Calculadora ROI',
      subtitle: 'Calcula el retorn de la inversió amb NextLeadIn. Descobreix quant pots estalviar i guanyar.',
      howItWorksTitle: 'Com funciona?',
      howItWorksSteps: [
        { title: 'Introdueix les teves dades actuals', description: 'Quants leads necessites, quantes hores dediques a recerca, quin és el teu cost per hora.' },
        { title: 'Veu els resultats en temps real', description: 'La calculadora et mostra l\'estalvi en temps, diners i l\'increment en reunions i vendes.' },
        { title: 'Pren una decisió informada', description: 'Amb dades reals, pots veure si NextLeadIn encaixa amb el teu negoci.' }
      ]
    },
    es: {
      breadcrumbHome: 'Inicio',
      breadcrumbResources: 'Recursos',
      title: 'Calculadora ROI',
      subtitle: 'Calcula el retorno de la inversión con NextLeadIn. Descubre cuánto puedes ahorrar y ganar.',
      howItWorksTitle: '¿Cómo funciona?',
      howItWorksSteps: [
        { title: 'Introduce tus datos actuales', description: 'Cuántos leads necesitas, cuántas horas dedicas a búsqueda, cuál es tu coste por hora.' },
        { title: 'Ve los resultados en tiempo real', description: 'La calculadora te muestra el ahorro en tiempo, dinero y el incremento en reuniones y ventas.' },
        { title: 'Toma una decisión informada', description: 'Con datos reales, puedes ver si NextLeadIn encaja con tu negocio.' }
      ]
    },
    en: {
      breadcrumbHome: 'Home',
      breadcrumbResources: 'Resources',
      title: 'ROI Calculator',
      subtitle: 'Calculate your ROI with NextLeadIn. Discover how much you can save and earn.',
      howItWorksTitle: 'How does it work?',
      howItWorksSteps: [
        { title: 'Enter your current data', description: 'How many leads you need, how many hours you spend on research, your hourly cost.' },
        { title: 'See results in real-time', description: 'The calculator shows your savings in time, money, and the increase in meetings and sales.' },
        { title: 'Make an informed decision', description: 'With real data, you can see if NextLeadIn fits your business.' }
      ]
    }
  }[validLocale as 'ca' | 'es' | 'en']

  const baseUrl = 'https://nextleadin.com'
  const localePath = validLocale === 'ca' ? '' : `/${validLocale}`
  const currentUrl = `${baseUrl}${localePath}/resources/roi-calculator`
  const localePrefix = validLocale === 'ca' ? '' : `/${validLocale}`

  const breadcrumbs = [
    { name: t.breadcrumbHome, url: `${baseUrl}${localePath}` },
    { name: t.breadcrumbResources, url: `${baseUrl}${localePath}/resources` },
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
      '@type': 'WebApplication',
      name: 'NextLeadIn ROI Calculator',
      description: t.subtitle,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web Browser',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR'
      }
    }
  ]

  return (
    <>
      <SeoJsonLd data={structuredData} />

      <div className="overflow-x-hidden min-w-0 w-full">
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-b from-primary-50 to-white">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
              <Link href={localePrefix || '/'} className="hover:text-primary-600 transition-colors">
                {t.breadcrumbHome}
              </Link>
              <span className="text-gray-400">/</span>
              <Link href={`${localePrefix}/resources`} className="hover:text-primary-600 transition-colors">
                {t.breadcrumbResources}
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900">{t.title}</span>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                {t.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ROICalculator locale={validLocale as 'ca' | 'es' | 'en'} />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t.howItWorksTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {t.howItWorksSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  )
}
