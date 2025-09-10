import PricingCard from '@/components/PricingCard'
import PricingComparisonTable from '@/components/PricingComparisonTable'
import FAQSection from '@/components/FAQSection'
import Image from 'next/image'
import Link from 'next/link'

export default function PricingPage() {
  // Dades dels plans de preus orientats a generació de leads
  const pricingPlans = [
    {
      id: 'start',
      name: {
        ca: 'Inici',
        es: 'Inicio',
        en: 'Start'
      },
      price: 19,
      period: {
        ca: 'mes',
        es: 'mes',
        en: 'month'
      },
      description: {
        ca: 'Perfecte per a empreses que comencen amb la generació de leads',
        es: 'Perfecto para empresas que comienzan con la generación de leads',
        en: 'Perfect for businesses starting with lead generation'
      },
      features: {
        ca: [
          'Fins a 500 leads/mes amb segmentació per zona',
          'Selecció de sector per paraules clau i CNAE bàsic',
          'Enriquiment amb IA: fitxa resum per lead',
          'Exportació CSV i importació manual al CRM'
        ],
        es: [
          'Hasta 500 leads/mes con segmentación por zona',
          'Selección de sector por palabras clave y CNAE básico',
          'Enriquecimiento con IA: ficha resumen por lead',
          'Exportación CSV e importación manual al CRM'
        ],
        en: [
          'Up to 500 leads/month with zone segmentation',
          'Sector selection by keywords and basic CNAE',
          'AI enrichment: summary sheet per lead',
          'CSV export and manual CRM import'
        ]
      },
      buttonText: {
        ca: 'Comença ara',
        es: 'Comenzar ahora',
        en: 'Start now'
      },
      buttonHref: '/get-started',
      popular: false,
      delay: 100,
      limits: {
        leads: 500,
        aiCredits: 500,
        users: 3,
        searches: 20
      }
    },
    {
      id: 'pro',
      name: {
        ca: 'Pro',
        es: 'Pro',
        en: 'Pro'
      },
      price: 49,
      period: {
        ca: 'mes',
        es: 'mes',
        en: 'month'
      },
      description: {
        ca: 'Ideal per a equips comercials que necessiten més volum i funcionalitats avançades',
        es: 'Ideal para equipos comerciales que necesitan más volumen y funcionalidades avanzadas',
        en: 'Ideal for sales teams that need more volume and advanced features'
      },
      features: {
        ca: [
          'Fins a 2.500 leads/mes amb filtres avançats',
          'Informes amb IA per empresa: angles de contacte i objeccions',
          'Integracions amb CRM i email màrqueting (Zapier/HubSpot)',
          'Dades actualitzades setmanalment'
        ],
        es: [
          'Hasta 2.500 leads/mes con filtros avanzados',
          'Informes con IA por empresa: ángulos de contacto y objeciones',
          'Integraciones con CRM y email marketing (Zapier/HubSpot)',
          'Datos actualizados semanalmente'
        ],
        en: [
          'Up to 2,500 leads/month with advanced filters',
          'AI reports per company: contact angles and objections',
          'CRM and email marketing integrations (Zapier/HubSpot)',
          'Weekly updated data'
        ]
      },
      buttonText: {
        ca: 'Comença ara',
        es: 'Comenzar ahora',
        en: 'Start now'
      },
      buttonHref: '/get-started',
      popular: true,
      delay: 200,
      limits: {
        leads: 2500,
        aiCredits: 2500,
        users: 10,
        searches: 100
      }
    },
    {
      id: 'elite',
      name: {
        ca: 'Empresa',
        es: 'Empresa',
        en: 'Enterprise'
      },
      price: 99,
      period: {
        ca: 'mes',
        es: 'mes',
        en: 'month'
      },
      description: {
        ca: 'Solució completa per a empreses que necessiten màxima capacitat i personalització',
        es: 'Solución completa para empresas que necesitan máxima capacidad y personalización',
        en: 'Complete solution for businesses that need maximum capacity and customization'
      },
      features: {
        ca: [
          'Leads il·limitats i nínxols personalitzats',
          'Enriquiment IA avançat: punts de conversa i proper pas',
          'Accés API, SSO i assistència prioritària (SLA)',
          'Dades actualitzades diàriament'
        ],
        es: [
          'Leads ilimitados y nichos personalizados',
          'Enriquecimiento IA avanzado: puntos de conversación y próximo paso',
          'Acceso API, SSO y asistencia prioritaria (SLA)',
          'Datos actualizados diariamente'
        ],
        en: [
          'Unlimited leads and custom niches',
          'Advanced AI enrichment: conversation points and next step',
          'API access, SSO and priority support (SLA)',
          'Daily updated data'
        ]
      },
      buttonText: {
        ca: 'Parla amb vendes',
        es: 'Habla con ventas',
        en: 'Talk to sales'
      },
      buttonHref: '/contact',
      popular: false,
      delay: 300,
      limits: {
        leads: 'Il·limitats',
        aiCredits: 'Il·limitats',
        users: 'Il·limitats',
        searches: 'Il·limitats'
      }
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Plans pensats per <span className="gradient-text">escalejar</span> els teus leads
            </h1>
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
              Inici
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Preus</span>
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
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Comparar plans</h3>
            <p className="text-xl text-gray-600">Funcionalitats i límits adaptats a cada etapa del teu creixement.</p>
          </div>
          
          <PricingComparisonTable locale="ca" />
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
