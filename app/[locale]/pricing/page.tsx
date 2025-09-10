import PricingCard from '@/components/PricingCard'
import PricingComparisonTable from '@/components/PricingComparisonTable'
import FAQSection from '@/components/FAQSection'
import Image from 'next/image'
import Link from 'next/link'
import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('pages.pricing')
  // Dades dels plans de preus orientats a generació de leads
  const pricingPlans = [
    {
      title: 'Inici',
      price: 19,
      period: 'mes',
      features: [
        'Fins a 5 cerques al mes',
        'Cerca bàsica de leads',
        'Cerca bàsica amb keywords',
        'Suport per email',
        'Dashboard bàsic'
      ],
      buttonText: 'Comença ara',
      buttonHref: '/get-started',
      popular: false,
      delay: 100
    },
    {
      title: 'Pro',
      price: 49,
      period: 'mes',
      features: [
        'Fins a 20 cerques al mes',
        'Cerca avançada amb keywords',
        'Informes IA personalitzats',
        'Suport prioritari',
        'Exportació de dades'
      ],
      buttonText: 'Comença ara',
      buttonHref: '/get-started',
      popular: true,
      delay: 200
    },
    {
      title: 'Empresa',
      price: 99,
      period: 'mes',
      features: [
        'Fins a 50 cerques al mes',
        'Totes les funcionalitats Pro',
        'Suport dedicat 24/5',
        'Integracions personalitzades',
        'Anàlisi avançada',
        'Integració amb CRM'
      ],
      buttonText: 'Parla amb vendes',
      buttonHref: '/contact',
      popular: false,
      delay: 300
    }
  ]

  // Dades de la taula de comparació (Inici / Pro / Empresa)
  const comparisonFeatures = [
    {
      name: 'Leads/mes',
      description: 'Volum de contactes únics generats cada mes.',
      start: '500',
      pro: '2.500',
      elite: 'Il·limitats'
    },
    {
      name: "Crèdits d'enriquiment amb IA",
      description: 'Nombre de fitxes amb informe IA generades per mes.',
      start: '500',
      pro: '2.500',
      elite: 'Il·limitats'
    },
    {
      name: 'Precisió de segmentació',
      description: 'Qualitat dels filtres per zona, sector i intenció.',
      start: 'Alta',
      pro: 'Molt alta',
      elite: 'Màxima'
    },
    {
      name: 'Integracions',
      description: "Connexió amb CRM i eines d'automatització.",
      start: 'CSV',
      pro: 'Zapier, HubSpot',
      elite: 'API, SSO'
    },
    {
      name: 'Seients inclosos',
      description: "Nombre d'usuaris del teu equip.",
      start: '3',
      pro: '10',
      elite: 'Il·limitats'
    },
    {
      name: "Freqüència d'actualització de dades",
      description: 'Periodicitat de refresc del catàleg.',
      start: 'Mensual',
      pro: 'Setmanal',
      elite: 'Diària'
    },
    {
      name: 'Assistència',
      description: 'Canals i SLA de suport.',
      start: 'Email',
      pro: 'Email i xat',
      elite: 'Dedicada (SLA)'
    }
  ]

  // Dades de les preguntes freqüents
  const faqs = [
    {
      question: 'Hi ha una prova gratuïta disponible?',
      answer: 'Sí, pots provar-nos gratis durant 30 dies. Si vols, et proporcionarem una trucada d\'incorporació gratuïta de 30 minuts per posar-te en marxa.'
    },
    {
      question: 'Puc canviar el meu pla més endavant?',
      answer: 'Per descomptat que pots! Els nostres preus s\'escalen amb la teva empresa. Parla amb el nostre equip amable per trobar una solució que funcioni per a tu mentre creixes.'
    },
    {
      question: 'Quina és la vostra política de cancel·lació?',
      answer: 'Entenem que les coses canvien. Pots cancel·lar el teu pla en qualsevol moment i et reemborsarem la diferència ja pagada.'
    },
    {
      question: 'Es pot afegir informació a una factura?',
      answer: 'En aquest moment, l\'única manera d\'afegir informació addicional a les factures és afegir manualment la informació al nom de l\'espai de treball.'
    },
    {
      question: 'Com funciona la facturació?',
      answer: 'Els plans són per espai de treball, no per compte. Pots actualitzar un espai de treball i encara tenir qualsevol nombre d\'espais de treball gratuïts.'
    },
    {
      question: 'Com canvio l\'email del meu compte?',
      answer: 'Pots canviar l\'adreça d\'email associada al teu compte anant a untitled.com/account des d\'un portàtil o ordinador de sobretaula.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" dangerouslySetInnerHTML={{__html: t('title')}} />
            <p className="text-xl text-gray-600 leading-relaxed">
              Tria el volum de leads i el nivell d'IA que necessites. Comença petit i creix sense límits.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="pb-16 bg-white">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary-600 transition-colors">
              {t('breadcrumbHome')}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{t('breadcrumb')}</span>
          </nav>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                period={plan.period}
                features={plan.features}
                buttonText={plan.buttonText}
                buttonHref={plan.buttonHref}
                popular={plan.popular}
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
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('compare')}</h3>
            <p className="text-xl text-gray-600">Funcionalitats i límits adaptats a cada etapa del teu creixement.</p>
          </div>
          
          <PricingComparisonTable features={comparisonFeatures} />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Preguntes freqüents"
        subtitle="Preus, límits i tecnologia IA"
        description="Tot el que cal per decidir el teu pla i posar en marxa el teu pipeline."
        faqs={[
          {
            question: 'Hi ha prova gratuïta?',
            answer: 'Sí. Pots provar la plataforma sense cost. Inclou crèdits d\'enriquiment amb IA per avaluar els informes per empresa.'
          },
          {
            question: 'Com es compten els leads i els crèdits d\'IA?',
            answer: 'Cada empresa única exportada compta com a lead. Cada fitxa d\'informe generada per IA consumeix un crèdit d\'enriquiment.'
          },
          {
            question: 'Em puc integrar amb el meu CRM?',
            answer: 'Sí. Pro: Zapier i HubSpot. Empresa: API directa i SSO. Sempre pots exportar CSV.'
          },
          {
            question: 'Amb quina freqüència s\'actualitzen les dades?',
            answer: 'Inici: mensual. Pro: setmanal. Empresa: diària. Ens enfoquem en qualitat i cobertura del teu mercat.'
          },
          {
            question: 'Puc canviar de pla en qualsevol moment?',
            answer: 'Sí. Pots pujar o baixar de pla segons volum i necessitats. Els canvis s\'apliquen pro-rata.'
          }
        ]}
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
                Comença
              </h6>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Multiplica els teus <span className="gradient-text">leads qualificats</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Segmentació precisa, informes amb IA i integracions per accelerar trucades i reunions. Estalvia temps i tanca més oportunitats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-started" className="btn-primary">
                  Comença ara
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Parla amb vendes
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


