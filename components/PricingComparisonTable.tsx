interface PricingComparisonTableProps {
  features: {
    name: string
    description: string
    start: boolean | string
    pro: boolean | string
    elite: boolean | string
  }[]
}

export default function PricingComparisonTable({ features }: PricingComparisonTableProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-4 bg-gray-50 border-b">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900">Característiques</h3>
        </div>
        <div className="p-6 text-center">
          <h4 className="text-lg font-semibold text-gray-900">Start</h4>
          <p className="text-sm text-gray-600">€19 /mes</p>
        </div>
        <div className="p-6 text-center">
          <h4 className="text-lg font-semibold text-gray-900">Pro</h4>
          <p className="text-sm text-gray-600">€49 /mes</p>
        </div>
        <div className="p-6 text-center">
          <h4 className="text-lg font-semibold text-gray-900">Elite</h4>
          <p className="text-sm text-gray-600">€99 /mes</p>
        </div>
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
            <h5 className="font-semibold text-gray-900 mb-2">{feature.name}</h5>
            <p className="text-sm text-gray-600">{feature.description}</p>
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
        <button className="w-full bg-gray-100 text-gray-900 py-3 px-6 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300">
          Seleccionar Start
        </button>
        <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-primary-700 transition-all duration-300">
          Seleccionar Pro
        </button>
        <button className="w-full bg-gray-100 text-gray-900 py-3 px-6 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300">
          Seleccionar Elite
        </button>
      </div>
    </div>
  )
}
