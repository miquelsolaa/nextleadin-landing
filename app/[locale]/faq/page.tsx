import { Metadata } from 'next'
import FAQPageSection from '@/components/FAQPageSection'
import {useTranslations} from 'next-intl'

export const metadata: Metadata = {
  title: 'FAQ - NextLeadIn',
  description: 'Preguntes freqüents sobre generació de leads, IA, dades i integracions.',
}

// Mock data for FAQ sections
const faqSections = [
  {
    id: 'producte',
    title: 'Producte i cobertura',
    description: 'Com segmentem els leads per zona i sector, i quina cobertura de dades oferim.',
    questions: [
      {
        id: 1,
        question: 'Com seleccioneu les empreses per zona i sector?',
        answer: 'Pots triar municipi, barri o província i afinar per sector amb CNAE i paraules clau. El sistema calcula el volum estimat de leads i en mostra la llista perquè la revisis abans d’exportar.',
        isOpen: true
      },
      {
        id: 2,
        question: 'Amb quina freqüència s’actualitzen les dades?',
        answer: 'Depèn del pla: Inici (mensual), Pro (setmanal), Empresa (diària). Ens centrem a mantenir qualitat, cobertura i informació accionable.',
        isOpen: false
      },
      {
        id: 3,
        question: 'Quin nivell de precisió té la segmentació?',
        answer: 'Fem servir múltiples fonts i validacions. La precisió augmenta amb filtres avançats (noms comercials, keywords de nínxol, mida, etc.).',
        isOpen: false
      }
    ]
  },
  {
    id: 'ia',
    title: 'IA i informes per a trucades',
    description: 'Com es generen els informes i com ajuden a preparar la conversa comercial.',
    questions: [
      {
        id: 4,
        question: 'Què inclou l’informe per empresa?',
        answer: 'Resum executiu, punts de conversa, necessitats detectades, objeccions probables i angle de contacte suggerit per tancar reunió.',
        isOpen: true
      },
      {
        id: 5,
        question: 'Els informes consumeixen crèdits?',
        answer: 'Sí. Cada informe generat per IA consumeix un crèdit d’enriquiment. Els crèdits es renoven mensualment segons el pla.',
        isOpen: false
      },
      {
        id: 6,
        question: 'Puc personalitzar el to o format de l’informe?',
        answer: 'A Pro i Empresa pots definir el to, la llargada i l’èmfasi (per exemple, producte vs. servei) per adaptar-lo al teu pitch.',
        isOpen: false
      }
    ]
  },
  {
    id: 'integracions-suport',
    title: 'Integracions i suport',
    description: 'Connexions amb CRM, seguretat i canals d’assistència.',
    questions: [
      {
        id: 7,
        question: 'Amb quins CRMs em puc integrar?',
        answer: 'CSV a tots els plans. Pro: Zapier i HubSpot. Empresa: API pròpia i SSO per integrar amb el teu ecosistema.',
        isOpen: true
      },
      {
        id: 8,
        question: 'Com gestioneu dades i privacitat?',
        answer: 'Apliquem millors pràctiques de seguretat i conformitat. Les dades s’utilitzen exclusivament per generar i enriquir els leads del teu compte.',
        isOpen: false
      },
      {
        id: 9,
        question: 'Quin suport tinc?',
        answer: 'Inici: email. Pro: email i xat. Empresa: equip dedicat amb SLA. Ajudem també a definir nínxols i scripts de contacte.',
        isOpen: false
      }
    ]
  }
]

const navigationItems = [
  { id: 'producte', title: 'Producte i cobertura' },
  { id: 'ia', title: 'IA i informes' },
  { id: 'integracions-suport', title: 'Integracions i suport' }
]

export default function FAQPage() {
  const t = useTranslations('pages.faq')
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{t('title')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}<br />
            Si necessites ajuda, contacta amb <strong><a href="/contact" className="text-green-600 hover:text-green-700">el nostre equip</a></strong>.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sticky Navigation - Hidden on mobile */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-32 space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-green-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          {/* FAQ Sections */}
          <div className="lg:col-span-3 space-y-16">
            {faqSections.map((section) => (
              <FAQPageSection
                key={section.id}
                id={section.id}
                title={section.title}
                description={section.description}
                questions={section.questions}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('newsletter')}</h4>
            </div>
            <div className="flex-1 max-w-md">
              <form className="flex gap-3">
                <input
                  type="email"
                  placeholder="Correu electrònic"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors"
                >
                  {t('subscribe')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


