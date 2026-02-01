import PricingCard from '@/components/PricingCard'
import PricingComparisonTable from '@/components/PricingComparisonTable'
import FAQSection from '@/components/FAQSection'
import AIStructuredData from '@/components/AIStructuredData'
import Image from 'next/image'
import Link from 'next/link'
import { setRequestLocale } from 'next-intl/server'
import { pricingPlans, faqData } from '@/lib/pricing-data'
import { generateAIOptimizedMetadata, generateAIStructuredData } from '@/lib/seo-metadata'
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
      heroKicker: 'Des de €79/mes',
      heroTitle: 'Plans per trobar negocis locals',
      heroSubtitle: 'Des de Free fins a Enterprise. Dades enriquides, anàlisi de ressenyes amb IA i mapa visual.',
      heroNote: 'Facturació mensual o anual · Local Business €63/mes i Professional €159/mes amb anual',
      breadcrumbHome: 'Inici',
      breadcrumb: 'Preus',
      compare: 'Compara plans',
      compareSubtitle: 'Leads de negocis locals, dades enriquides, anàlisi IA i integracions per pla.',
      addOnsTitle: 'Completa el teu pla amb complements',
      addOnsSubtitle: 'Afegeix funcionalitats especialitzades quan les necessitis.',
      faqTitle: 'Preguntes freqüents',
      faqSubtitle: 'Preus, facturació i complements',
      faqDescription: 'Tot el que cal saber abans de començar la prova gratuïta.',
      ctaEyebrow: 'Uneix-te als experts en vendes',
      ctaTitle: 'Multiplica els teus leads qualificats',
      ctaDescription: 'Automatitza seguiments, ordena el pipeline i converteix més oportunitats en reunions.',
      ctaButton1: 'Prova-ho gratis',
      ctaButton2: 'Parla amb vendes'
    },
    es: {
      heroKicker: 'Desde €79/mes',
      heroTitle: 'Planes para encontrar negocios locales',
      heroSubtitle: 'Desde Free hasta Enterprise. Datos enriquecidos, análisis de reseñas con IA y mapa visual.',
      heroNote: 'Facturación mensual o anual · Local Business €63/mes y Professional €159/mes con anual',
      breadcrumbHome: 'Inicio',
      breadcrumb: 'Precios',
      compare: 'Compara planes',
      compareSubtitle: 'Leads de negocios locales, datos enriquecidos, análisis IA e integraciones por plan.',
      addOnsTitle: 'Completa tu plan con complementos',
      addOnsSubtitle: 'Añade funcionalidades especializadas cuando las necesites.',
      faqTitle: 'Preguntas frecuentes',
      faqSubtitle: 'Precios, facturación y complementos',
      faqDescription: 'Todo lo que necesitas saber antes de iniciar la prueba gratuita.',
      ctaEyebrow: 'Únete a los expertos en ventas',
      ctaTitle: 'Multiplica tus leads cualificados',
      ctaDescription: 'Automatiza seguimientos, ordena el pipeline y convierte más oportunidades en reuniones.',
      ctaButton1: 'Pruébalo gratis',
      ctaButton2: 'Habla con ventas'
    },
    en: {
      heroKicker: 'From €79/month',
      heroTitle: 'Plans to find local businesses',
      heroSubtitle: 'From Free to Enterprise. Enriched data, AI review analysis and visual map.',
      heroNote: 'Monthly or annual billing · Local Business €63/month and Professional €159/month with annual',
      breadcrumbHome: 'Home',
      breadcrumb: 'Pricing',
      compare: 'Compare plans',
      compareSubtitle: 'Local business leads, enriched data, AI analysis and integrations per plan.',
      addOnsTitle: 'Complete your plan with add-ons',
      addOnsSubtitle: 'Add specialized capabilities when you need them.',
      faqTitle: 'Frequently asked questions',
      faqSubtitle: 'Pricing, billing and add-ons',
      faqDescription: 'Everything you need to know before starting your free trial.',
      ctaEyebrow: 'Join sales experts',
      ctaTitle: 'Multiply your qualified leads',
      ctaDescription: 'Automate follow-ups, organize your pipeline and convert more opportunities into meetings.',
      ctaButton1: 'Try free',
      ctaButton2: 'Talk to sales'
    }
  }

  const addOns = {
    ca: [
      {
        title: 'LeadBooster',
        description: 'Captura més prospectes amb formularis, xatbot i prospecció.',
        price: 'Des de 32,50 €'
      },
      {
        title: 'Projects',
        description: 'Gestió de projectes per entregar treballs i fer-ne seguiment.',
        price: 'Des de 6,67 €'
      },
      {
        title: 'Campaigns',
        description: 'Envia campanyes de màrqueting per email amb segmentació.',
        price: 'Des de 13,33 €'
      },
      {
        title: 'Web Visitors',
        description: 'Descobreix qui visita el teu web i prioritza contactes.',
        price: 'Des de 41 €'
      },
      {
        title: 'Smart Docs',
        description: 'Gestiona documents i propostes en un sol lloc.',
        price: 'Des de 32,50 €'
      }
    ],
    es: [
      {
        title: 'LeadBooster',
        description: 'Captura más prospectos con formularios, chatbot y prospección.',
        price: 'Desde 32,50 €'
      },
      {
        title: 'Projects',
        description: 'Gestión de proyectos para entregar trabajos y hacer seguimiento.',
        price: 'Desde 6,67 €'
      },
      {
        title: 'Campaigns',
        description: 'Envía campañas de marketing por email con segmentación.',
        price: 'Desde 13,33 €'
      },
      {
        title: 'Web Visitors',
        description: 'Descubre quién visita tu web y prioriza contactos.',
        price: 'Desde 41 €'
      },
      {
        title: 'Smart Docs',
        description: 'Gestiona documentos y propuestas en un solo lugar.',
        price: 'Desde 32,50 €'
      }
    ],
    en: [
      {
        title: 'LeadBooster',
        description: 'Capture more prospects with forms, chatbot and prospecting.',
        price: 'From €32.50'
      },
      {
        title: 'Projects',
        description: 'Project management to deliver work and track outcomes.',
        price: 'From €6.67'
      },
      {
        title: 'Campaigns',
        description: 'Send email marketing campaigns with segmentation.',
        price: 'From €13.33'
      },
      {
        title: 'Web Visitors',
        description: 'See who visits your website and prioritize contacts.',
        price: 'From €41'
      },
      {
        title: 'Smart Docs',
        description: 'Manage documents and proposals in one place.',
        price: 'From €32.50'
      }
    ]
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns[validLocale].map((addOn) => (
              <div key={addOn.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{addOn.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{addOn.description}</p>
                <p className="text-sm font-semibold text-primary-600">{addOn.price}</p>
              </div>
            ))}
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
              <h6 className="text-sm font-semibold text-primary-100 uppercase tracking-wider mb-4">
                {pageTexts[validLocale].ctaEyebrow}
              </h6>
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
                <Link href="/get-started" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
                  {pageTexts[validLocale].ctaButton1}
                </Link>
                <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
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
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


