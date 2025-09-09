"use client"
import Link from 'next/link'
import { useTransition } from 'react'
import { useRouter } from 'next/navigation'

interface PricingCardProps {
  title: string
  price: number
  period: string
  features: string[]
  buttonText: string
  buttonHref: string
  popular?: boolean
  delay?: number
}

export default function PricingCard({
  title,
  price,
  period,
  features,
  buttonText,
  buttonHref,
  popular = false,
  delay = 0
}: PricingCardProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleSubscribe = async () => {
    const plan = title.toLowerCase() === 'pro' ? 'pro' : title.toLowerCase() === 'empresa' ? 'empresa' : null
    if (!plan) {
      router.push(buttonHref)
      return
    }
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (e) {
      router.push('/pricing')
    }
  }
  return (
    <div 
      className={`relative bg-white rounded-2xl shadow-lg border-2 hover:shadow-xl transition-all duration-300 ${
        popular ? 'border-primary-500 scale-105' : 'border-gray-200 hover:border-primary-300'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Més Popular
          </span>
        </div>
      )}
      
      <div className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
          <div className="flex items-baseline justify-center">
            <span className="text-4xl font-bold text-gray-900">€{price}</span>
            <span className="text-lg text-gray-600 ml-2">/{period}</span>
          </div>
        </div>
        
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        {title.toLowerCase() === 'pro' || title.toLowerCase() === 'empresa' ? (
          <button
            onClick={() => startTransition(handleSubscribe)}
            className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
              popular 
                ? 'bg-primary-600 text-white hover:bg-primary-700' 
                : 'bg-gray-100 text-gray-900 hover:bg-primary-600 hover:text-white'
            }`}
            disabled={isPending}
          >
            {isPending ? 'Redirigint…' : buttonText}
          </button>
        ) : (
          <Link 
            href={buttonHref}
            className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
              popular 
                ? 'bg-primary-600 text-white hover:bg-primary-700' 
                : 'bg-gray-100 text-gray-900 hover:bg-primary-600 hover:text-white'
            }`}
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  )
}
