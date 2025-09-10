"use client"
import Link from 'next/link'
import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { PricingPlan } from '@/lib/pricing-data'

interface PricingCardProps {
  plan: PricingPlan
  locale: 'ca' | 'es' | 'en'
  delay?: number
}

export default function PricingCard({
  plan,
  locale,
  delay = 0
}: PricingCardProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleSubscribe = async () => {
    if (plan.id === 'start') {
      router.push(plan.buttonHref)
      return
    }
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: plan.id }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (e) {
      router.push('/pricing')
    }
  }
  const popularText = {
    ca: 'Més Popular',
    es: 'Más Popular',
    en: 'Most Popular'
  }

  const loadingText = {
    ca: 'Redirigint…',
    es: 'Redirigiendo…',
    en: 'Redirecting…'
  }

  return (
    <div 
      className={`relative bg-white rounded-2xl shadow-lg border-2 hover:shadow-xl transition-all duration-300 ${
        plan.popular ? 'border-primary-500 scale-105' : 'border-gray-200 hover:border-primary-300'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            {popularText[locale]}
          </span>
        </div>
      )}
      
      <div className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name[locale]}</h3>
          <p className="text-sm text-gray-600 mb-4">{plan.description[locale]}</p>
          <div className="flex items-baseline justify-center">
            <span className="text-4xl font-bold text-gray-900">€{plan.price}</span>
            <span className="text-lg text-gray-600 ml-2">/{plan.period[locale]}</span>
          </div>
        </div>
        
        <ul className="space-y-3 mb-8">
          {plan.features[locale].map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        {plan.id === 'pro' || plan.id === 'elite' ? (
          <button
            onClick={() => startTransition(handleSubscribe)}
            className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
              plan.popular 
                ? 'bg-primary-600 text-white hover:bg-primary-700' 
                : 'bg-gray-100 text-gray-900 hover:bg-primary-600 hover:text-white'
            }`}
            disabled={isPending}
          >
            {isPending ? loadingText[locale] : plan.buttonText[locale]}
          </button>
        ) : (
          <Link 
            href={plan.buttonHref}
            className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
              plan.popular 
                ? 'bg-primary-600 text-white hover:bg-primary-700' 
                : 'bg-gray-100 text-gray-900 hover:bg-primary-600 hover:text-white'
            }`}
          >
            {plan.buttonText[locale]}
          </Link>
        )}
      </div>
    </div>
  )
}
