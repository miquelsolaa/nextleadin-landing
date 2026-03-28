import PricingCard from '@/components/PricingCard'
import PricingComparisonTable from '@/components/PricingComparisonTable'
import FAQSection from '@/components/FAQSection'
import AIStructuredData from '@/components/AIStructuredData'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { setRequestLocale } from 'next-intl/server'
import { pricingPlans, faqData } from '@/lib/pricing-data'
import { generateAIOptimizedMetadata, generateAIStructuredData } from '@/lib/seo-metadata'
import { getAbsoluteHomeUrl, getAbsoluteLocaleUrl } from '@/lib/locale-url'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? locale : 'ca'
  return generateAIOptimizedMetadata('pricing', validLocale as 'ca' | 'es' | 'en')
}

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  // Validar que el locale sigui vàlid
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? locale : 'ca'
  
  // Textos multiidioma per a la pàgina
  const pageTexts = {
    ca: {
      heroKicker: 'Menys que 1 hora d\'un comercial',
      heroTitle: 'Tria quantes reunions vols tancar',
      heroSubtitle: 'Cada pla inclou leads amb context IA perquè cada trucada compti. Tria segons el volum que necessitis.',
      heroNote: 'Cost per lead des de €0,12 · Tots els plans amb facturació anual',
      breadcrumbHome: 'Inici',
      breadcrumb: 'Preus',
      compare: 'Compara plans',
      compareSubtitle: 'Leads de negocis locals, dades enriquides, anàlisi IA i integracions per pla.',
      addOnsTitle: 'Potencia el teu pla',
      addOnsSubtitle: 'Afegeix campanyes d\'email per contactar més leads automàticament.',
      faqTitle: 'Preguntes freqüents',
      faqSubtitle: 'Preus, resultats i facturació',
      faqDescription: 'Preus, plans, facturació i cancel·lació.',
      ctaEyebrow: 'Prova 7 dies gratis',
      ctaTitle: 'Comença a tancar més reunions aquesta setmana',
      ctaDescription: 'Setup en 10 minuts. Primers leads de prova de la teva zona el mateix dia.',
      ctaButton1: 'Començar prova gratuïta',
      ctaButton2: 'Veure demo de 30s'
    },
    es: {
      heroKicker: 'Menos que 1 hora de un comercial',
      heroTitle: 'Elige cuántas reuniones quieres cerrar',
      heroSubtitle: 'Cada plan incluye leads con contexto IA para que cada llamada cuente. Elige según el volumen que necesites.',
      heroNote: 'Coste por lead desde €0,12 · Todos los planes con facturación anual',
      breadcrumbHome: 'Inicio',
      breadcrumb: 'Precios',
      compare: 'Compara planes',
      compareSubtitle: 'Leads de negocios locales, datos enriquecidos, análisis IA e integraciones por plan.',
      addOnsTitle: 'Potencia tu plan',
      addOnsSubtitle: 'Añade campañas de email para contactar más leads automáticamente.',
      faqTitle: 'Preguntas frecuentes',
      faqSubtitle: 'Precios, resultados y facturación',
      faqDescription: 'Precios, planes, facturación y cancelación.',
      ctaEyebrow: 'Prueba 7 días gratis',
      ctaTitle: 'Empieza a cerrar más reuniones esta semana',
      ctaDescription: 'Setup en 10 minutos. Primeros leads de prueba de tu zona el mismo día.',
      ctaButton1: 'Empezar prueba gratuita',
      ctaButton2: 'Ver demo de 30s'
    },
    en: {
      heroKicker: 'Less than 1 hour of a sales rep',
      heroTitle: 'Choose how many meetings you want to close',
      heroSubtitle: 'Each plan includes leads with AI context so every call counts. Choose based on the volume you need.',
      heroNote: 'Cost per lead from €0.12 · All plans with annual billing',
      breadcrumbHome: 'Home',
      breadcrumb: 'Pricing',
      compare: 'Compare plans',
      compareSubtitle: 'Local business leads, enriched data, AI analysis and integrations per plan.',
      addOnsTitle: 'Power up your plan',
      addOnsSubtitle: 'Add email campaigns to contact more leads automatically.',
      faqTitle: 'Frequently asked questions',
      faqSubtitle: 'Pricing, results and billing',
      faqDescription: 'Pricing, plans, billing and cancellation.',
      ctaEyebrow: 'Try 7 days free',
      ctaTitle: 'Start closing more meetings this week',
      ctaDescription: 'Setup in 10 minutes. First sample leads from your area the same day.',
      ctaButton1: 'Start free trial',
      ctaButton2: 'Watch 30s demo'
    }
  }

  const addOns = {
    ca: [
      {
        title: 'Campanyes Email',
        description: 'Envia seqüències d\'email automatitzades als teus leads. Inclou 2.000 emails/mes, plantilles personalitzables i seguiment de respostes.',
        price: '€29/mes'
      },
      {
        title: 'Leads Extra',
        description: 'Necessites més leads? Afegeix 500 leads addicionals al teu pla mensual per ampliar el teu pipeline.',
        price: '€29/pack'
      },
      {
        title: 'Informes IA Extra',
        description: 'Més anàlisis IA per preparar trucades. Pack de 100 informes addicionals amb context, objeccions i angles de contacte.',
        price: '€19/pack'
      }
    ],
    es: [
      {
        title: 'Campañas Email',
        description: 'Envía secuencias de email automatizadas a tus leads. Incluye 2.000 emails/mes, plantillas personalizables y seguimiento de respuestas.',
        price: '€29/mes'
      },
      {
        title: 'Leads Extra',
        description: '¿Necesitas más leads? Añade 500 leads adicionales a tu plan mensual para ampliar tu pipeline.',
        price: '€29/pack'
      },
      {
        title: 'Informes IA Extra',
        description: 'Más análisis IA para preparar llamadas. Pack de 100 informes adicionales con contexto, objeciones y ángulos de contacto.',
        price: '€19/pack'
      }
    ],
    en: [
      {
        title: 'Email Campaigns',
        description: 'Send automated email sequences to your leads. Includes 2,000 emails/month, customizable templates and response tracking.',
        price: '€29/month'
      },
      {
        title: 'Extra Leads',
        description: 'Need more leads? Add 500 additional leads to your monthly plan to expand your pipeline.',
        price: '€29/pack'
      },
      {
        title: 'Extra AI Reports',
        description: 'More AI analyses to prepare calls. Pack of 100 additional reports with context, objections and contact angles.',
        price: '€19/pack'
      }
    ]
  }


  // Breadcrumbs per a SEO
  const breadcrumbs = [
    { 
      name: validLocale === 'ca' ? 'Inici' : validLocale === 'es' ? 'Inicio' : 'Home', 
      url: getAbsoluteHomeUrl(validLocale as 'ca' | 'es' | 'en'),
    },
    { 
      name: validLocale === 'ca' ? 'Preus' : validLocale === 'es' ? 'Precios' : 'Pricing', 
      url: getAbsoluteLocaleUrl(validLocale as 'ca' | 'es' | 'en', '/pricing'),
    }
  ]

  return (
    <div>
      <AIStructuredData 
        page="pricing" 
        locale={validLocale as 'ca' | 'es' | 'en'} 
        breadcrumbs={breadcrumbs}
        customData={generateAIStructuredData('pricing', validLocale as 'ca' | 'es' | 'en')}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 mb-4">
              {pageTexts[validLocale].heroKicker}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {pageTexts[validLocale].heroTitle}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {pageTexts[validLocale].heroSubtitle}
            </p>
            <p className="text-sm text-gray-500 mt-4">
              {pageTexts[validLocale].heroNote}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="pb-16 bg-white">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary-600 transition-colors">
              {pageTexts[validLocale].breadcrumbHome}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{pageTexts[validLocale].breadcrumb}</span>
          </nav>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                locale={validLocale}
                delay={plan.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 bg-white" id="pricing-compare">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{pageTexts[validLocale].compare}</h3>
            <p className="text-xl text-gray-600">{pageTexts[validLocale].compareSubtitle}</p>
          </div>
          
          <PricingComparisonTable locale={validLocale} />
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{pageTexts[validLocale].addOnsTitle}</h3>
            <p className="text-xl text-gray-600">{pageTexts[validLocale].addOnsSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {addOns[validLocale].slice(0, 2).map((addOn) => (
              <div key={addOn.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{addOn.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{addOn.description}</p>
                <p className="text-sm font-semibold text-primary-600">{addOn.price}</p>
              </div>
            ))}
            {addOns[validLocale][2] && (
              <div className="md:col-span-2 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm max-w-2xl mx-auto w-full">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{addOns[validLocale][2].title}</h4>
                <p className="text-sm text-gray-600 mb-4">{addOns[validLocale][2].description}</p>
                <p className="text-sm font-semibold text-primary-600">{addOns[validLocale][2].price}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title={pageTexts[validLocale].faqTitle}
        subtitle={pageTexts[validLocale].faqSubtitle}
        description={pageTexts[validLocale].faqDescription}
        faqs={faqData[validLocale]}
      />

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 relative overflow-hidden w-full">
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="block text-sm font-semibold text-primary-100 uppercase tracking-wider mb-4">
                {pageTexts[validLocale].ctaEyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                {pageTexts[validLocale].ctaTitle.split(' ').map((word, index) => 
                  word === 'leads' || word === 'leads' || word === 'leads' ? 
                    <span key={index} className="text-primary-200">{word} </span> : 
                    word + ' '
                )}
              </h2>
              <p className="text-xl text-primary-100 leading-relaxed mb-8">
                {pageTexts[validLocale].ctaDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://app.nextleadin.com/register" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
                  {pageTexts[validLocale].ctaButton1}
                </Link>
                <Link href="/?openVideo=1" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                  {pageTexts[validLocale].ctaButton2}
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/cta/mockup.png"
                alt="Mockup de la plataforma CRM mostrant el tauler i analytics"
                width={752}
                height={423}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


