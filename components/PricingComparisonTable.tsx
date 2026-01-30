import Link from 'next/link'
import { comparisonFeatures, pricingPlans } from '@/lib/pricing-data'

interface PricingComparisonTableProps {
  locale: 'ca' | 'es' | 'en'
}

export default function PricingComparisonTable({ locale }: PricingComparisonTableProps) {
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

  const columnsStyle = {
    gridTemplateColumns: `minmax(0, 2fr) repeat(${pricingPlans.length}, minmax(0, 1fr))`
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="grid bg-gray-50 border-b" style={columnsStyle}>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900">{buttonText[locale].features}</h3>
        </div>
        {pricingPlans.map((plan) => (
          <div key={plan.id} className="p-6 text-center">
            <h4 className="text-lg font-semibold text-gray-900">{plan.name?.[locale] || plan.name?.ca || 'Plan'}</h4>
            {plan.priceLabel?.[locale] ? (
              <p className="text-sm font-medium text-gray-700">{plan.priceLabel[locale]}</p>
            ) : (
              <p className="text-sm text-gray-600">€{plan.price ?? 0} /{plan.period?.[locale] || plan.period?.ca || 'mes'}</p>
            )}
          </div>
        ))}
      </div>

      {/* Features */}
      {comparisonFeatures.map((feature, index) => (
        <div 
          key={index} 
          className={`grid border-b last:border-b-0 ${
            index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
          }`}
          style={columnsStyle}
        >
          <div className="p-6">
            <h5 className="font-semibold text-gray-900 mb-2">{feature.name[locale]}</h5>
            <p className="text-sm text-gray-600">{feature.description[locale]}</p>
          </div>

          {pricingPlans.map((plan) => {
            const value = feature.values[plan.id]
            return (
              <div key={`${feature.id}-${plan.id}`} className="p-6 text-center flex items-center justify-center">
                {typeof value === 'boolean' ? (
                  value ? (
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )
                ) : (
                  <span className="text-sm font-medium text-gray-900">{value || '—'}</span>
                )}
              </div>
            )
          })}
        </div>
      ))}

      {/* Action Buttons */}
      <div className="grid bg-gray-50 p-6 gap-4" style={columnsStyle}>
        <div></div>
        {pricingPlans.map((plan) => (
          <Link
            key={plan.id}
            href={plan.buttonHref}
            className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
              plan.popular 
                ? 'bg-primary-600 text-white hover:bg-primary-700' 
                : 'bg-gray-100 text-gray-900 hover:bg-primary-600 hover:text-white'
            }`}
          >
            {buttonText[locale].select} {plan.name?.[locale] || plan.name?.ca || 'Plan'}
          </Link>
        ))}
      </div>
    </div>
  )
}
