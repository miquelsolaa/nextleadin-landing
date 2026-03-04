'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { trackContactSubmit } from '@/lib/analytics'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const texts: Record<
  'es' | 'ca' | 'en',
  {
    title: string
    helper: string
    companyPlaceholder: string
    emailPlaceholder: string
    cta: string
    success: string
    errorEmail: string
    errorGeneric: string
  }
> = {
  en: {
    title: 'Get your company analyzed in 24h',
    helper: 'Free AI lead report. No commitment.',
    companyPlaceholder: 'Company name',
    emailPlaceholder: 'Work email',
    cta: 'Submit',
    success: "Thanks—we'll be in touch in 24h.",
    errorEmail: 'Enter a valid email',
    errorGeneric: 'There was a problem. Please try again.',
  },
  ca: {
    title: 'Analitza la teva empresa en 24h',
    helper: 'Informe de leads gratuït. Sense compromís.',
    companyPlaceholder: "Nom de l'empresa",
    emailPlaceholder: 'Email de feina',
    cta: 'Enviar',
    success: 'Gràcies—et contactarem en 24h.',
    errorEmail: 'Introdueix un correu vàlid',
    errorGeneric: 'Hi ha hagut un problema. Torna-ho a provar.',
  },
  es: {
    title: 'Analiza tu empresa en 24h',
    helper: 'Informe de leads gratis. Sin compromiso.',
    companyPlaceholder: 'Nombre de la empresa',
    emailPlaceholder: 'Email de trabajo',
    cta: 'Enviar',
    success: 'Gracias—te contactaremos en 24h.',
    errorEmail: 'Introduce un correo válido',
    errorGeneric: 'Ha habido un problema. Inténtalo de nuevo.',
  },
}

const encode = (data: Record<string, string | boolean>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(String(data[key] ?? '')))
    .join('&')

export default function MWCCTASection() {
  const locale = (useLocale() as 'es' | 'ca' | 'en') ?? 'en'
  const t = texts[locale]

  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError(null)
    if (!company.trim() || !email.trim()) return
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitError(t.errorEmail)
      return
    }
    setIsSubmitting(true)
    try {
      const payload = {
        'form-name': 'mwc2026',
        'bot-field': '',
        locale,
        company: company.trim(),
        email: email.trim(),
      }

      const res = await fetch('/netlify-forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload),
      })

      if (!res.ok) throw new Error('Network response was not ok')
      trackContactSubmit(String(locale))
      setSubmitted(true)
    } catch {
      setSubmitError(t.errorGeneric)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section-padding relative overflow-hidden bg-mwc-navy">
      <div className="absolute inset-0 bg-gradient-to-br from-mwc-navy via-mwc-navyLight to-mwc-navy opacity-90" />
      <div className="absolute inset-0 mwc-dot-grid opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-mwc-green/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center font-body"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-8 tracking-tight">
            {t.title}
          </h2>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
              name="mwc2026-cta"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="mwc2026" />
              <p className="hidden" aria-hidden="true">
                <label>Don&apos;t fill: <input name="bot-field" tabIndex={-1} /></label>
              </p>
              <div className="flex-1 min-w-0">
                <label htmlFor="mwc-cta-company" className="sr-only">
                  {t.companyPlaceholder}
                </label>
                <input
                  id="mwc-cta-company"
                  name="company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder={t.companyPlaceholder}
                  className="w-full h-12 px-4 rounded-xl bg-white/95 border-0 ring-1 ring-white/30 focus:ring-2 focus:ring-mwc-green focus:ring-offset-2 focus:ring-offset-mwc-navy placeholder:text-slate-400 text-slate-900"
                  required
                />
              </div>
              <div className="flex-1 min-w-0">
                <label htmlFor="mwc-cta-email" className="sr-only">
                  {t.emailPlaceholder}
                </label>
                <input
                  id="mwc-cta-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full h-12 px-4 rounded-xl bg-white/95 border-0 ring-1 ring-white/30 focus:ring-2 focus:ring-mwc-green focus:ring-offset-2 focus:ring-offset-mwc-navy placeholder:text-slate-400 text-slate-900"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  'h-12 px-8 rounded-xl font-semibold whitespace-nowrap transition-all',
                  'bg-mwc-green hover:bg-mwc-greenDark text-white shadow-lg shadow-black/20',
                  'disabled:opacity-70'
                )}
              >
                {isSubmitting ? '...' : t.cta}
              </button>
            </form>
          ) : (
            <p className="text-xl text-white/95 font-medium">{t.success}</p>
          )}

          {submitError && (
            <p className="mt-3 text-sm text-rose-300 font-medium" role="alert" aria-live="polite">
              {submitError}
            </p>
          )}

          <p className="text-sm text-white/70 mt-5">{t.helper}</p>
        </motion.div>
      </div>
    </section>
  )
}
