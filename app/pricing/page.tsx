import PricingCard from '@/components/PricingCard'
import PricingComparisonTable from '@/components/PricingComparisonTable'
import FAQSection from '@/components/FAQSection'
import Image from 'next/image'
import Link from 'next/link'
import { faqData, pricingPlans } from '@/lib/pricing-data'

export default function PricingPage() {
  const pageTexts = {
    heroKicker: 'Prova gratuïta de 14 dies',
    heroTitle: 'Plans dissenyats per tancar més negocis, més ràpid',
    heroSubtitle: 'Sense compromís: pots canviar de pla en qualsevol moment.',
    heroNote: 'Facturació mensual o anual · Estalvia fins al 42 % amb l\'anual',
    breadcrumbHome: 'Inici',
    breadcrumb: 'Preus',
    compare: 'Compara plans',
    compareSubtitle: 'Funcionalitats clau per a cada etapa del teu equip comercial.',
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
  }

  const addOns = [
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
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 mb-4">
              {pageTexts.heroKicker}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {pageTexts.heroTitle}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {pageTexts.heroSubtitle}
            </p>
            <p className="text-sm text-gray-500 mt-4">
              {pageTexts.heroNote}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="pb-16 bg-white">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary-600 transition-colors">
              {pageTexts.breadcrumbHome}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{pageTexts.breadcrumb}</span>
          </nav>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                locale="ca"
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
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{pageTexts.compare}</h3>
            <p className="text-xl text-gray-600">{pageTexts.compareSubtitle}</p>
          </div>
          
          <PricingComparisonTable locale="ca" />
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{pageTexts.addOnsTitle}</h3>
            <p className="text-xl text-gray-600">{pageTexts.addOnsSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addOn) => (
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
        title={pageTexts.faqTitle}
        subtitle={pageTexts.faqSubtitle}
        description={pageTexts.faqDescription}
        faqs={faqData.ca}
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
                {pageTexts.ctaEyebrow}
              </h6>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {pageTexts.ctaTitle.split(' ').map((word, index) => 
                  word === 'leads' ? 
                    <span key={index} className="gradient-text">{word} </span> : 
                    word + ' '
                )}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {pageTexts.ctaDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-started" className="btn-primary">
                  {pageTexts.ctaButton1}
                </Link>
                <Link href="/contact" className="btn-secondary">
                  {pageTexts.ctaButton2}
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/cta/mockup.png"
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
