'use client'

import { useState } from 'react'
import { heroTexts } from './hero-texts'

interface HeroFormProps {
  locale: 'es' | 'ca' | 'en'
}

export default function HeroForm({ locale }: HeroFormProps) {
  const [email, setEmail] = useState('')
  const t = heroTexts[locale] ?? heroTexts.es

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="mb-6 min-h-[140px] sm:min-h-[100px]">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg">
        <div className="flex-1">
          <label htmlFor="hero-email" className="block text-sm font-medium text-gray-700 mb-2 h-5">
            {t.emailLabel}
          </label>
          <input
            id="hero-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 h-12"
            required
          />
        </div>
        <button
          type="submit"
          className="px-8 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 whitespace-nowrap self-end h-12"
        >
          {t.primaryCta}
        </button>
      </form>
      <p className="text-sm text-gray-500 mt-2 min-h-[40px]">
        {t.helper}
      </p>
    </div>
  )
}
