'use client'

import { useState } from 'react'
import { heroTexts } from './hero-texts'
import { submitNewsletterForm } from '@/lib/submit-netlify-newsletter'

interface HeroFormProps {
  locale: 'es' | 'ca' | 'en'
}

export default function HeroForm({ locale }: HeroFormProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const t = heroTexts[locale] ?? heroTexts.es

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSuccess(null)
    setError(null)
    setIsSubmitting(true)
    try {
      const ok = await submitNewsletterForm(email.trim(), locale)
      if (!ok) throw new Error('fail')
      setSuccess(t.formSuccess)
      setEmail('')
    } catch {
      setError(t.formError)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mb-6 min-h-[140px] sm:min-h-[100px]">
      <form
        name="newsletter"
        method="POST"
        action="/netlify-forms.html"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 max-w-lg"
        aria-busy={isSubmitting}
      >
        <input type="hidden" name="form-name" value="newsletter" />
        <input type="hidden" name="locale" value={locale} />
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>
        <div className="flex-1">
          <label htmlFor="hero-email" className="block text-sm font-medium text-gray-700 mb-2 h-5">
            {t.emailLabel}
          </label>
          <input
            id="hero-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 h-12"
            required
            autoComplete="email"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 whitespace-nowrap self-end h-12 disabled:opacity-60 disabled:pointer-events-none"
        >
          {t.primaryCta}
        </button>
      </form>
      <p className="text-sm text-gray-500 mt-2 min-h-[40px]">{t.helper}</p>
      {(success || error) && (
        <p
          className={`text-sm mt-2 ${success ? 'text-primary-700' : 'text-red-600'}`}
          role={success ? 'status' : 'alert'}
          aria-live="polite"
        >
          {success ?? error}
        </p>
      )}
    </div>
  )
}
