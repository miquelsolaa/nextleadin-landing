"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { ArrowRight, FolderOpen, Phone, Bot, Zap, Check } from 'lucide-react'
import AIStructuredData from '@/components/AIStructuredData'
import { generateAIStructuredData } from '@/lib/seo-metadata'
import { trackContactSubmit } from '@/lib/analytics'
import { cn } from '@/lib/utils'

type TabId = 'form' | 'demo'

export default function ContactPage() {
  const t = useTranslations('pages.contact')
  const locale = useLocale()
  const [activeTab, setActiveTab] = useState<TabId>('form')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    sector: '',
    message: '',
    consent: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = t('errors.name')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = t('errors.email')
    if (!formData.company.trim()) newErrors.company = t('errors.company')
    if (!formData.message.trim()) newErrors.message = t('errors.message')
    if (!formData.consent) newErrors.consent = t('errors.consent')
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target
    const { name } = target
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const encode = (data: Record<string, string | boolean>) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(String(data[key] ?? '')))
      .join('&')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError(null)
    if (!validate()) return
    setIsSubmitting(true)
    try {
      const payload = {
        'form-name': 'contact',
        'bot-field': '',
        locale,
        ...formData,
        region: '',
        consent: formData.consent ? 'yes' : 'no',
      } as Record<string, string | boolean>

      const res = await fetch('/netlify-forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload),
      })

      if (!res.ok) throw new Error('Network response was not ok')
      trackContactSubmit(String(locale))
      setSubmitted(true)
    } catch {
      setSubmitError(t('submitError'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const breadcrumbs = [
    {
      name: locale === 'ca' ? 'Inici' : locale === 'es' ? 'Inicio' : 'Home',
      url: locale === 'ca' ? 'https://nextleadin.com' : `https://nextleadin.com/${locale}`,
    },
    {
      name: locale === 'ca' ? 'Contacte' : locale === 'es' ? 'Contacto' : 'Contact',
      url: locale === 'ca' ? 'https://nextleadin.com/contact' : `https://nextleadin.com/${locale}/contact`,
    },
  ]

  const roleOptions = [
    { value: 'director', label: t('roles.director') },
    { value: 'salesManager', label: t('roles.salesManager') },
    { value: 'ceo', label: t('roles.ceo') },
    { value: 'sdr', label: t('roles.sdr') },
    { value: 'marketing', label: t('roles.marketing') },
    { value: 'other', label: t('roles.other') },
  ]

  const sectorOptions = [
    { value: 'restaurants', label: t('sectors.restaurants') },
    { value: 'dentists', label: t('sectors.dentists') },
    { value: 'workshops', label: t('sectors.workshops') },
    { value: 'realEstate', label: t('sectors.realEstate') },
    { value: 'academies', label: t('sectors.academies') },
    { value: 'beauty', label: t('sectors.beauty') },
    { value: 'various', label: t('sectors.various') },
    { value: 'other', label: t('sectors.other') },
  ]

  return (
    <>
      <AIStructuredData
        page="contact"
        locale={locale as 'ca' | 'es' | 'en'}
        breadcrumbs={breadcrumbs}
        customData={generateAIStructuredData('contact', locale as 'ca' | 'es' | 'en')}
      />

      <div className="min-h-[calc(100vh-4rem)] grid grid-cols-1 lg:grid-cols-2">
        {/* Left panel */}
        <div className="bg-white border-b lg:border-b-0 lg:border-r border-gray-200 px-6 py-12 lg:py-16 lg:px-12 xl:px-16 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-50/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-primary-600 bg-primary-50 border border-primary-200 rounded px-3 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              {t('eyebrow')}
            </div>

            <h1 className="font-display text-3xl sm:text-4xl xl:text-[2.75rem] font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
              {(() => {
                const parts = t('title').split(t('titleHighlight'))
                return (
                  <>
                    {parts[0]}
                    <em className="not-italic text-primary-600">{t('titleHighlight')}</em>
                    {parts[1] ?? ''}
                  </>
                )
              })()}
            </h1>

            <p className="text-gray-600 text-base lg:text-lg max-w-md leading-relaxed mb-10">
              {t('subtitle')}
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: FolderOpen, strong: t('proof.dbStrong'), text: t('proof.db') },
                { icon: Phone, strong: t('proof.phoneStrong'), text: t('proof.phone') },
                { icon: Bot, strong: t('proof.aiStrong'), text: t('proof.ai') },
                { icon: Zap, strong: t('proof.integrationStrong'), text: t('proof.integration') },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 shrink-0 flex items-center justify-center bg-primary-50 border border-primary-200 rounded text-primary-600">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-gray-600 leading-snug">
                    <strong className="font-semibold text-gray-900">{item.strong}</strong> {item.text.replace(item.strong, '').trim()}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200">
              <div>
                <span className="font-mono text-xl font-bold text-primary-600 block">+50k</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{t('stats.businesses')}</span>
              </div>
              <div>
                <span className="font-mono text-xl font-bold text-primary-600 block">8+</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{t('stats.meetings')}</span>
              </div>
              <div>
                <span className="font-mono text-xl font-bold text-primary-600 block">15 min</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{t('stats.demo')}</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12 space-y-2">
            <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">{t('aside.directTitle')}</p>
            <a
              href="mailto:contacto@nextleadin.com"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
            >
              <span className="w-7 h-7 flex items-center justify-center bg-gray-100 border border-gray-200 rounded text-xs">@</span>
              contacto@nextleadin.com
            </a>
            <a
              href="tel:+34684781855"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
            >
              <span className="w-7 h-7 flex items-center justify-center bg-gray-100 border border-gray-200 rounded text-xs">☎</span>
              +34 684 781 855
            </a>
            <p className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-7 h-7 flex items-center justify-center bg-gray-100 border border-gray-200 rounded text-xs">⏱</span>
              {t('aside.hoursValue')}
            </p>
          </div>
        </div>

        {/* Right panel */}
        <div className="bg-gray-50 px-6 py-12 lg:py-16 lg:px-12 xl:px-16 flex flex-col justify-center">
          <div className="grid grid-cols-2 border border-gray-200 rounded overflow-hidden mb-8">
            <button
              type="button"
              onClick={() => setActiveTab('form')}
              className={cn(
                'px-4 py-3 font-mono text-xs tracking-wider uppercase transition-colors',
                activeTab === 'form'
                  ? 'bg-primary-50 text-primary-600 border-b-2 border-primary-600'
                  : 'bg-white text-gray-500 hover:text-gray-700'
              )}
            >
              {t('tabForm')}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('demo')}
              className={cn(
                'px-4 py-3 font-mono text-xs tracking-wider uppercase transition-colors',
                activeTab === 'demo'
                  ? 'bg-primary-50 text-primary-600 border-b-2 border-primary-600'
                  : 'bg-white text-gray-500 hover:text-gray-700'
              )}
            >
              {t('tabDemo')}
            </button>
          </div>

          {activeTab === 'form' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              {!submitted ? (
                <form
                  name="contact"
                  method="POST"
                  action="/netlify-forms.html"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <p className="hidden">
                    <label>
                      {t('honeypot')}: <input name="bot-field" />
                    </label>
                  </p>
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="locale" value={locale} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                        {t('labels.name')} <span className="text-primary-600">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={onChange}
                        placeholder={t('placeholders.name')}
                        required
                        className={cn(
                          'w-full px-3 py-2.5 bg-gray-900/5 border rounded text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary-500',
                          errors.name ? 'border-red-400' : 'border-gray-200'
                        )}
                      />
                      {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                        {t('labels.company')} <span className="text-primary-600">*</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={onChange}
                        placeholder={t('placeholders.company')}
                        required
                        className={cn(
                          'w-full px-3 py-2.5 bg-gray-900/5 border rounded text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary-500',
                          errors.company ? 'border-red-400' : 'border-gray-200'
                        )}
                      />
                      {errors.company && <p className="text-sm text-red-600">{errors.company}</p>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                        {t('labels.email')} <span className="text-primary-600">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={onChange}
                        placeholder={t('placeholders.email')}
                        required
                        className={cn(
                          'w-full px-3 py-2.5 bg-gray-900/5 border rounded text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary-500',
                          errors.email ? 'border-red-400' : 'border-gray-200'
                        )}
                      />
                      {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                        {t('labels.phone')}
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={onChange}
                        placeholder={t('placeholders.phone')}
                        className="w-full px-3 py-2.5 bg-gray-900/5 border border-gray-200 rounded text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary-500"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="role" className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                        {t('labels.role')}
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={onChange}
                        className="w-full px-3 py-2.5 bg-gray-900/5 border border-gray-200 rounded text-gray-900 focus:outline-none focus:border-primary-500 appearance-none cursor-pointer"
                      >
                        <option value="">{t('placeholders.role')}</option>
                        {roleOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="sector" className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                        {t('labels.sector')}
                      </label>
                      <select
                        id="sector"
                        name="sector"
                        value={formData.sector}
                        onChange={onChange}
                        className="w-full px-3 py-2.5 bg-gray-900/5 border border-gray-200 rounded text-gray-900 focus:outline-none focus:border-primary-500 appearance-none cursor-pointer"
                      >
                        <option value="">{t('placeholders.sector')}</option>
                        {sectorOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2 flex flex-col gap-1.5">
                      <label htmlFor="message" className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                        {t('labels.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={onChange}
                        placeholder={t('placeholders.message')}
                        required
                        className={cn(
                          'w-full px-3 py-2.5 bg-gray-900/5 border rounded text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary-500 resize-y min-h-[90px]',
                          errors.message ? 'border-red-400' : 'border-gray-200'
                        )}
                      />
                      {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 py-4">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="consent"
                      checked={formData.consent}
                      onChange={onChange}
                      required
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 accent-primary-500 cursor-pointer"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                      {t('labels.consent')} <Link href="/privacy-policy" className="text-primary-600 hover:underline">{t('links.privacy')}</Link>
                      {t('labels.consentSuffix')}
                    </label>
                  </div>
                  {errors.consent && <p className="text-sm text-red-600 -mt-2">{errors.consent}</p>}

                  {submitError && (
                    <p className="text-sm text-red-600" role="alert" aria-live="polite">
                      {submitError}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-gray-900 font-mono text-sm font-bold tracking-wider uppercase px-6 py-3 rounded transition-colors disabled:opacity-70"
                    >
                      {isSubmitting ? '...' : t('submit')}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono text-xs text-gray-500 leading-snug">{t('submitNote')}</span>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col items-center text-center py-8 gap-4">
                  <div className="w-14 h-14 flex items-center justify-center bg-primary-50 border-2 border-primary-500 rounded-full text-primary-600">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{t('success.title')}</h3>
                  <p className="text-gray-600 text-sm max-w-xs leading-relaxed">
                    {t('success.description')}{' '}
                    <a href="tel:+34684781855" className="text-primary-600 hover:underline">
                      +34 684 781 855
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'demo' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('demo.headline')}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t('demo.sub')}</p>
              </div>

              <ul className="space-y-3 p-5 bg-gray-900/5 border border-gray-200 rounded">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                  <span><strong className="text-gray-900">{t('demo.item1Strong')}</strong> {t('demo.item1').replace(t('demo.item1Strong'), '').trim()}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                  <span><strong className="text-gray-900">{t('demo.item2Strong')}</strong> {t('demo.item2').replace(t('demo.item2Strong'), '').trim()}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                  {t('demo.item3')}
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                  {t('demo.item4')}
                </li>
              </ul>

              <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded overflow-hidden">
                {[
                  [t('demo.duration'), t('demo.durationVal')],
                  [t('demo.format'), t('demo.formatVal')],
                  [t('demo.cost'), t('demo.costVal')],
                  [t('demo.commitment'), t('demo.commitmentVal')],
                ].map(([label, val], i) => (
                  <div key={i} className="bg-white p-4 flex flex-col gap-1">
                    <span className="font-mono text-xs text-gray-500 uppercase tracking-wider">{label}</span>
                    <span className="text-sm font-semibold text-gray-900">{val}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://calendly.com/nextleadin/demo-nextleadin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-primary-500 hover:bg-primary-600 text-gray-900 font-mono text-sm font-bold tracking-wider uppercase px-6 py-4 rounded transition-colors"
              >
                {t('demo.cta')}
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="font-mono text-xs text-gray-500 text-center leading-relaxed">{t('demo.note')}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
