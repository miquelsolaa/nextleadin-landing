import Link from 'next/link'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link?: string
  className?: string
}

const FeatureCard = ({ icon, title, description, link = '#', className = '' }: FeatureCardProps) => {
  return (
    <div className={`card hover:shadow-lg transition-all duration-300 group ${className}`}>
      <div className="p-8">
        <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-6 group-hover:bg-primary-200 transition-colors duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        
        <Link
          href={link}
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200 group-hover:translate-x-1 transform transition-transform"
        >
          Aprèn més
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default FeatureCard
