'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { trackContactSubmit } from '@/lib/analytics'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useVideoModal } from '@/components/mwc/VideoModalContext'

const texts: Record<'es' | 'ca' | 'en', {
  badge: string
  headline: string
  subheadline: string
  valueProp: string
  companyPlaceholder: string
  emailPlaceholder: string
  cta: string
  success: string
  helper: string
  errorEmail: string
  errorGeneric: string
}> = {
  en: {
    badge: 'MWC Barcelona 2026 · AI Lead Intelligence',
    headline: 'Turn any company into qualified leads in 24 hours',
    subheadline: 'AI-powered lead intelligence. Scrape, enrich, score, qualify—automatically.',
    valueProp: 'Get an AI-generated lead report for your company in 24h—free.',
    companyPlaceholder: 'Company name',
    emailPlaceholder: 'Work email',
    cta: 'Get analyzed in 24h',
    success: "Thanks—we'll be in touch in 24h with your AI lead report.",
    helper: 'Free AI lead report. No commitment.',
    errorEmail: 'Enter a valid email',
    errorGeneric: 'There was a problem. Please try again.',
  },
  ca: {
    badge: 'MWC Barcelona 2026 · Intel·ligència de leads amb IA',
    headline: 'Converteix qualsevol empresa en leads qualificats en 24 hores',
    subheadline: 'Intel·ligència de leads amb IA. Rascar, enriquir, puntuar i qualificar—automàticament.',
    valueProp: 'Rep un informe de leads generat per IA per la teva empresa en 24h—gratis.',
    companyPlaceholder: "Nom de l'empresa",
    emailPlaceholder: 'Email de feina',
    cta: "Analitza'm en 24h",
    success: "Gràcies—et contactarem en 24h amb el teu informe de leads amb IA.",
    helper: 'Informe de leads gratuït. Sense compromís.',
    errorEmail: 'Introdueix un correu vàlid',
    errorGeneric: 'Hi ha hagut un problema. Torna-ho a provar.',
  },
  es: {
    badge: 'MWC Barcelona 2026 · Inteligencia de leads con IA',
    headline: 'Convierte cualquier empresa en leads cualificados en 24 horas',
    subheadline: 'Inteligencia de leads con IA. Scrape, enrich, score, qualify—automáticamente.',
    valueProp: 'Recibe un informe de leads generado por IA para tu empresa en 24h—gratis.',
    companyPlaceholder: 'Nombre de la empresa',
    emailPlaceholder: 'Email de trabajo',
    cta: 'Analízame en 24h',
    success: 'Gracias—te contactaremos en 24h con tu informe de leads con IA.',
    helper: 'Informe de leads gratis. Sin compromiso.',
    errorEmail: 'Introduce un correo válido',
    errorGeneric: 'Ha habido un problema. Inténtalo de nuevo.',
  },
}

const encode = (data: Record<string, string | boolean>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(String(data[key] ?? '')))
    .join('&')

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export default function LandingHeroSection() {
  const locale = (useLocale() as 'es' | 'ca' | 'en') ?? 'en'
  const t = texts[locale]
  const { openModal, thumbnailUrl, embedUrl, videoId, label: videoLabel } = useVideoModal()

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
    <section className="relative min-h-[85vh] flex items-center overflow-hidden mwc-mesh-bg mwc-dot-grid">
      <div className="container-custom py-20 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          className="max-w-3xl font-body lg:col-span-7"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-mwc-navy/8 text-mwc-navy border border-mwc-navy/15">
              {t.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold leading-[1.1] text-slate-900 tracking-tight mb-6"
          >
            {t.headline}
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl text-slate-600 leading-relaxed mb-3 max-w-2xl"
          >
            {t.subheadline}
          </motion.p>

          <motion.p variants={item} className="text-lg text-slate-500 mb-10">
            {t.valueProp}
          </motion.p>

          {!submitted ? (
            <motion.div variants={item}>
              <form
                onSubmit={handleSubmit}
                className={cn(
                  'flex flex-col sm:flex-row gap-3 max-w-2xl mwc-glass rounded-2xl p-5 sm:p-6',
                  'border border-white/60 shadow-xl shadow-slate-200/50'
                )}
                name="mwc2026"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="mwc2026" />
                <p className="hidden" aria-hidden="true">
                  <label>Don&apos;t fill: <input name="bot-field" tabIndex={-1} /></label>
                </p>
                <div className="flex-1 min-w-0">
                  <label htmlFor="mwc-hero-company" className="sr-only">
                    {t.companyPlaceholder}
                  </label>
                  <input
                    id="mwc-hero-company"
                    name="company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={t.companyPlaceholder}
                    className="w-full h-12 px-4 rounded-xl bg-white/80 border-0 ring-1 ring-slate-200/80 focus:ring-2 focus:ring-mwc-green/50 focus:ring-offset-1 placeholder:text-slate-400 transition-all text-slate-900"
                    required
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <label htmlFor="mwc-hero-email" className="sr-only">
                    {t.emailPlaceholder}
                  </label>
                  <input
                    id="mwc-hero-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.emailPlaceholder}
                    className="w-full h-12 px-4 rounded-xl bg-white/80 border-0 ring-1 ring-slate-200/80 focus:ring-2 focus:ring-mwc-green/50 focus:ring-offset-1 placeholder:text-slate-400 transition-all text-slate-900"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    'h-12 px-8 rounded-xl font-semibold whitespace-nowrap transition-all',
                    'bg-mwc-green hover:bg-mwc-greenDark text-white shadow-lg shadow-mwc-green/25 hover:shadow-xl hover:shadow-mwc-green/30 hover:-translate-y-0.5',
                    'disabled:opacity-70 disabled:hover:translate-y-0'
                  )}
                >
                  {isSubmitting ? '...' : t.cta}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              variants={item}
              className="max-w-2xl rounded-2xl p-5 bg-emerald-50/90 border border-emerald-200/80 backdrop-blur-sm"
            >
              <p className="text-emerald-800 font-medium">{t.success}</p>
            </motion.div>
          )}

          {submitError && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3 text-sm text-rose-600 font-medium"
              role="alert"
              aria-live="polite"
            >
              {submitError}
            </motion.p>
          )}

          <motion.p variants={item} className="text-sm text-slate-500 mt-4">
            {t.helper}
          </motion.p>
        </motion.div>

        {/* Video thumbnail - clickable to open modal */}
        {thumbnailUrl && embedUrl && videoId && (
          <motion.div
            variants={item}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-5"
          >
            <button
              type="button"
              onClick={openModal}
              className={cn(
                'relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-slate-200/40 group cursor-pointer block',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-mwc-green focus-visible:ring-offset-2'
              )}
              aria-label={videoLabel}
            >
              <Image
                src={thumbnailUrl}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                }}
              />
              <div
                className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"
                aria-hidden
              />
              <span
                className={cn(
                  'absolute inset-0 flex items-center justify-center',
                  'focus:outline-none'
                )}
              >
                <motion.span
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  className={cn(
                    'flex items-center justify-center w-20 h-20 rounded-full',
                    'bg-mwc-green text-white shadow-xl shadow-mwc-green/30',
                    'ring-4 ring-white/80 ring-offset-4 ring-offset-transparent'
                  )}
                >
                  <Play className="w-9 h-9 ml-1" fill="currentColor" aria-hidden />
                </motion.span>
              </span>
              <span className="absolute bottom-5 left-5 right-5 flex justify-center">
                <span className="text-sm font-medium text-white/95 bg-black/40 backdrop-blur px-4 py-2 rounded-full">
                  {videoLabel}
                </span>
              </span>
            </button>
          </motion.div>
        )}
        </div>
      </div>
      {/* Ambient gradient orbs */}
      <div
        className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-mwc-green/5 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-mwc-navy/5 blur-3xl pointer-events-none"
        aria-hidden
      />
    </section>
  )
}
