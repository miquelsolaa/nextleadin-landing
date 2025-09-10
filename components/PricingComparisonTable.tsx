import { ComparisonFeature, pricingPlans } from '@/lib/pricing-data'

interface PricingComparisonTableProps {
  locale: 'ca' | 'es' | 'en'
}

export default function PricingComparisonTable({ locale }: PricingComparisonTableProps) {
  const features = [
    {
      id: 'leads',
      name: {
        ca: 'Leads al mes',
        es: 'Leads al mes',
        en: 'Leads per month'
      },
      description: {
        ca: 'Volum de contactes únics generats cada mes',
        es: 'Volumen de contactos únicos generados cada mes',
        en: 'Volume of unique contacts generated each month'
      },
      start: '500',
      pro: '2.500',
      elite: 'Il·limitats'
    },
    {
      id: 'ai-credits',
      name: {
        ca: 'Crèdits d\'enriquiment amb IA',
        es: 'Créditos de enriquecimiento con IA',
        en: 'AI enrichment credits'
      },
      description: {
        ca: 'Nombre de fitxes amb informe IA generades per mes',
        es: 'Número de fichas con informe IA generadas por mes',
        en: 'Number of AI report profiles generated per month'
      },
      start: '500',
      pro: '2.500',
      elite: 'Il·limitats'
    },
    {
      id: 'precision',
      name: {
        ca: 'Precisió de segmentació',
        es: 'Precisión de segmentación',
        en: 'Segmentation precision'
      },
      description: {
        ca: 'Qualitat dels filtres per zona, sector i intenció',
        es: 'Calidad de los filtros por zona, sector e intención',
        en: 'Quality of filters by location, sector and intent'
      },
      start: 'Alta',
      pro: 'Molt alta',
      elite: 'Màxima'
    },
    {
      id: 'integrations',
      name: {
        ca: 'Integracions',
        es: 'Integraciones',
        en: 'Integrations'
      },
      description: {
        ca: 'Connexió amb CRM i eines d\'automatització',
        es: 'Conexión con CRM y herramientas de automatización',
        en: 'Connection with CRM and automation tools'
      },
      start: 'CSV',
      pro: 'Zapier, HubSpot',
      elite: 'API, SSO'
    },
    {
      id: 'users',
      name: {
        ca: 'Seients inclosos',
        es: 'Asientos incluidos',
        en: 'Seats included'
      },
      description: {
        ca: 'Nombre d\'usuaris del teu equip',
        es: 'Número de usuarios de tu equipo',
        en: 'Number of users on your team'
      },
      start: '3',
      pro: '10',
      elite: 'Il·limitats'
    },
    {
      id: 'update-frequency',
      name: {
        ca: 'Freqüència d\'actualització',
        es: 'Frecuencia de actualización',
        en: 'Update frequency'
      },
      description: {
        ca: 'Periodicitat de refresc del catàleg de dades',
        es: 'Periodicidad de actualización del catálogo de datos',
        en: 'Frequency of data catalog refresh'
      },
      start: 'Mensual',
      pro: 'Setmanal',
      elite: 'Diària'
    },
    {
      id: 'support',
      name: {
        ca: 'Assistència',
        es: 'Asistencia',
        en: 'Support'
      },
      description: {
        ca: 'Canals i SLA de suport',
        es: 'Canales y SLA de soporte',
        en: 'Support channels and SLA'
      },
      start: 'Email',
      pro: 'Email i xat',
      elite: 'Dedicada (SLA)'
    },
    {
      id: 'api',
      name: {
        ca: 'API i integracions',
        es: 'API e integraciones',
        en: 'API and integrations'
      },
      description: {
        ca: 'Accés a API i capacitats d\'integració',
        es: 'Acceso a API y capacidades de integración',
        en: 'API access and integration capabilities'
      },
      start: false,
      pro: 'API bàsica',
      elite: 'API completa + SSO'
    },
    {
      id: 'analytics',
      name: {
        ca: 'Analytics avançats',
        es: 'Analytics avanzados',
        en: 'Advanced analytics'
      },
      description: {
        ca: 'Eines d\'anàlisi i reporting avançat',
        es: 'Herramientas de análisis y reporting avanzado',
        en: 'Advanced analytics and reporting tools'
      },
      start: false,
      pro: 'Analytics bàsics',
      elite: 'Analytics predictius'
    },
    {
      id: 'customization',
      name: {
        ca: 'Personalització',
        es: 'Personalización',
        en: 'Customization'
      },
      description: {
        ca: 'Nivell de personalització disponible',
        es: 'Nivel de personalización disponible',
        en: 'Level of customization available'
      },
      start: 'Bàsic',
      pro: 'Moderat',
      elite: 'Complet'
    }
  ]

  const buttonText = {
    ca: {
      select: 'Seleccionar',
      features: 'Característiques'
    },
    es: {
      select: 'Seleccionar',
      features: 'Características'
    },
    en: {
      select: 'Select',
      features: 'Features'
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-4 bg-gray-50 border-b">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900">{buttonText[locale].features}</h3>
        </div>
        {pricingPlans.map((plan) => (
          <div key={plan.id} className="p-6 text-center">
            <h4 className="text-lg font-semibold text-gray-900">{plan.name[locale]}</h4>
            <p className="text-sm text-gray-600">€{plan.price} /{plan.period[locale]}</p>
          </div>
        ))}
      </div>

      {/* Features */}
      {features.map((feature, index) => (
        <div 
          key={index} 
          className={`grid grid-cols-4 border-b last:border-b-0 ${
            index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
          }`}
        >
          <div className="p-6">
            <h5 className="font-semibold text-gray-900 mb-2">{feature.name[locale]}</h5>
            <p className="text-sm text-gray-600">{feature.description[locale]}</p>
          </div>
          
          <div className="p-6 text-center flex items-center justify-center">
            {typeof feature.start === 'boolean' ? (
              feature.start ? (
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <span className="text-gray-400">—</span>
              )
            ) : (
              <span className="text-sm font-medium text-gray-900">{feature.start}</span>
            )}
          </div>
          
          <div className="p-6 text-center flex items-center justify-center">
            {typeof feature.pro === 'boolean' ? (
              feature.pro ? (
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <span className="text-gray-400">—</span>
              )
            ) : (
              <span className="text-sm font-medium text-gray-900">{feature.pro}</span>
            )}
          </div>
          
          <div className="p-6 text-center flex items-center justify-center">
            {typeof feature.elite === 'boolean' ? (
              feature.elite ? (
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <span className="text-gray-400">—</span>
              )
            ) : (
              <span className="text-sm font-medium text-gray-900">{feature.elite}</span>
            )}
          </div>
        </div>
      ))}

      {/* Action Buttons */}
      <div className="grid grid-cols-4 bg-gray-50 p-6 gap-4">
        <div></div>
        {pricingPlans.map((plan) => (
          <button 
            key={plan.id}
            className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
              plan.popular 
                ? 'bg-primary-600 text-white hover:bg-primary-700' 
                : 'bg-gray-100 text-gray-900 hover:bg-primary-600 hover:text-white'
            }`}
          >
            {buttonText[locale].select} {plan.name[locale]}
          </button>
        ))}
      </div>
    </div>
  )
}
