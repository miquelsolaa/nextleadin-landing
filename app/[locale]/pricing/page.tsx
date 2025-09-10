import PricingCard from '@/components/PricingCard'
import PricingComparisonTable from '@/components/PricingComparisonTable'
import FAQSection from '@/components/FAQSection'
import AIStructuredData from '@/components/AIStructuredData'
import Image from 'next/image'
import Link from 'next/link'
import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { pricingPlans, faqData } from '@/lib/pricing-data'
import { generateAIOptimizedMetadata } from '@/lib/seo-metadata'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? locale : 'ca'
  return generateAIOptimizedMetadata('pricing', validLocale as 'ca' | 'es' | 'en')
}

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('pages.pricing')
  
  // Validar que el locale sigui vàlid
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? locale : 'ca'
  
  // Textos multiidioma per a la pàgina
  const pageTexts = {
    ca: {
      heroTitle: 'Preus que s\'adapten al teu creixement',
      heroSubtitle: 'Tria el volum de leads i el nivell d\'IA que necessites. Comença petit i creix sense límits.',
      breadcrumbHome: 'Inici',
      breadcrumb: 'Preus',
      compare: 'Compara plans',
      compareSubtitle: 'Funcionalitats i límits adaptats a cada etapa del teu creixement.',
      faqTitle: 'Preguntes freqüents',
      faqSubtitle: 'Preus, límits i tecnologia IA',
      faqDescription: 'Tot el que cal per decidir el teu pla i posar en marxa el teu pipeline.',
      ctaTitle: 'Multiplica els teus leads qualificats',
      ctaDescription: 'Segmentació precisa, informes amb IA i integracions per accelerar trucades i reunions. Estalvia temps i tanca més oportunitats.',
      ctaButton1: 'Comença ara',
      ctaButton2: 'Parla amb vendes'
    },
    es: {
      heroTitle: 'Precios que se adaptan a tu crecimiento',
      heroSubtitle: 'Elige el volumen de leads y el nivel de IA que necesitas. Comienza pequeño y crece sin límites.',
      breadcrumbHome: 'Inicio',
      breadcrumb: 'Precios',
      compare: 'Compara planes',
      compareSubtitle: 'Funcionalidades y límites adaptados a cada etapa de tu crecimiento.',
      faqTitle: 'Preguntas frecuentes',
      faqSubtitle: 'Precios, límites y tecnología IA',
      faqDescription: 'Todo lo que necesitas para decidir tu plan y poner en marcha tu pipeline.',
      ctaTitle: 'Multiplica tus leads cualificados',
      ctaDescription: 'Segmentación precisa, informes con IA e integraciones para acelerar llamadas y reuniones. Ahorra tiempo y cierra más oportunidades.',
      ctaButton1: 'Comenzar ahora',
      ctaButton2: 'Habla con ventas'
    },
    en: {
      heroTitle: 'Pricing that scales with your growth',
      heroSubtitle: 'Choose the lead volume and AI level you need. Start small and grow without limits.',
      breadcrumbHome: 'Home',
      breadcrumb: 'Pricing',
      compare: 'Compare plans',
      compareSubtitle: 'Features and limits adapted to each stage of your growth.',
      faqTitle: 'Frequently asked questions',
      faqSubtitle: 'Pricing, limits and AI technology',
      faqDescription: 'Everything you need to decide on your plan and get your pipeline running.',
      ctaTitle: 'Multiply your qualified leads',
      ctaDescription: 'Precise segmentation, AI reports and integrations to accelerate calls and meetings. Save time and close more opportunities.',
      ctaButton1: 'Start now',
      ctaButton2: 'Talk to sales'
    }
  }

  // Breadcrumbs per a SEO
  const breadcrumbs = [
    { 
      name: validLocale === 'ca' ? 'Inici' : validLocale === 'es' ? 'Inicio' : 'Home', 
      url: validLocale === 'ca' ? 'https://nextleadin.com' : `https://nextleadin.com/${validLocale}` 
    },
    { 
      name: validLocale === 'ca' ? 'Preus' : validLocale === 'es' ? 'Precios' : 'Pricing', 
      url: validLocale === 'ca' ? 'https://nextleadin.com/pricing' : `https://nextleadin.com/${validLocale}/pricing` 
    }
  ]

  return (
    <>
      <AIStructuredData 
        page="pricing" 
        locale={validLocale as 'ca' | 'es' | 'en'} 
        breadcrumbs={breadcrumbs}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {pageTexts[validLocale].heroTitle}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {pageTexts[validLocale].heroSubtitle}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* FAQ Section */}
      <FAQSection
        title={pageTexts[validLocale].faqTitle}
        subtitle={pageTexts[validLocale].faqSubtitle}
        description={pageTexts[validLocale].faqDescription}
        faqs={faqData[validLocale]}
      />

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/crm-shape-2.svg"
            alt="Background decoration"
            fill
            className="object-cover opacity-5"
          />
        </div>
        
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h6 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4">
                {pageTexts[validLocale].ctaButton1}
              </h6>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {pageTexts[validLocale].ctaTitle.split(' ').map((word, index) => 
                  word === 'leads' || word === 'leads' || word === 'leads' ? 
                    <span key={index} className="gradient-text">{word} </span> : 
                    word + ' '
                )}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {pageTexts[validLocale].ctaDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-started" className="btn-primary">
                  {pageTexts[validLocale].ctaButton1}
                </Link>
                <Link href="/contact" className="btn-secondary">
                  {pageTexts[validLocale].ctaButton2}
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/crm-mockup-cta.png"
                alt="Mockup de la plataforma CRM mostrant el tauler i analytics"
                width={752}
                height={423}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


