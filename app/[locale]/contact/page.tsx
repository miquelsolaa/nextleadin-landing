"use client"

import { useState } from 'react'
import Link from 'next/link'
import {useTranslations, useLocale} from 'next-intl'
import AIStructuredData from '@/components/AIStructuredData'
import { generateAIStructuredData } from '@/lib/seo-metadata'

export default function ContactPage() {
  const t = useTranslations('pages.contact')
  const locale = useLocale()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    region: '',
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

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
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
        consent: formData.consent ? 'yes' : 'no',
      } as Record<string, string | boolean>

      const res = await fetch('/netlify-forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload),
      })

      if (!res.ok) throw new Error('Network response was not ok')
      setSubmitted(true)
    } catch (err) {
      setSubmitError(t('submitError'))
    } finally {
      setIsSubmitting(false)
    }
  }

  // Breadcrumbs per a SEO
  const breadcrumbs = [
    { 
      name: locale === 'ca' ? 'Inici' : locale === 'es' ? 'Inicio' : 'Home', 
      url: locale === 'ca' ? 'https://nextleadin.com' : `https://nextleadin.com/${locale}` 
    },
    { 
      name: locale === 'ca' ? 'Contacte' : locale === 'es' ? 'Contacto' : 'Contact', 
      url: locale === 'ca' ? 'https://nextleadin.com/contact' : `https://nextleadin.com/${locale}/contact` 
    }
  ]

  return (
    <>
      <AIStructuredData 
        page="contact" 
        locale={locale as 'ca' | 'es' | 'en'} 
        breadcrumbs={breadcrumbs}
        customData={generateAIStructuredData('contact', locale as 'ca' | 'es' | 'en')}
      />
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">{t('title')}</h1>
            <p className="text-xl text-gray-600">{t('subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Contingut principal */}
      <section className="py-12 bg-gray-50 overflow-x-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 min-w-0">
            {/* Formulari */}
            <div className="lg:col-span-2">
              {!submitted ? (
                <form name="contact" method="POST" action="/netlify-forms.html" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="locale" value={locale} />
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t('labels.name')}</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={onChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${errors.name ? 'border-red-400' : 'border-gray-300'}`}
                        placeholder={t('placeholders.name')}
                        required
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t('labels.email')}</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={onChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
                        placeholder={t('placeholders.email')}
                        required
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">{t('labels.company')}</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={onChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${errors.company ? 'border-red-400' : 'border-gray-300'}`}
                        placeholder={t('placeholders.company')}
                        required
                      />
                      {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">{t('labels.phone')}</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={onChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder={t('placeholders.phone')}
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">{t('labels.role')}</label>
                      <input
                        id="role"
                        name="role"
                        type="text"
                        value={formData.role}
                        onChange={onChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder={t('placeholders.role')}
                      />
                    </div>
                    <div>
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">{t('labels.region')}</label>
                      <input
                        id="region"
                        name="region"
                        type="text"
                        value={formData.region}
                        onChange={onChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder={t('placeholders.region')}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-2">{t('labels.sector')}</label>
                      <input
                        id="sector"
                        name="sector"
                        type="text"
                        value={formData.sector}
                        onChange={onChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder={t('placeholders.sector')}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t('labels.message')}</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={onChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${errors.message ? 'border-red-400' : 'border-gray-300'}`}
                        placeholder={t('placeholders.message')}
                        required
                      />
                      {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                    </div>
                    <div className="sm:col-span-2">
                      <label className="inline-flex items-start gap-3">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={onChange}
                          className={`mt-1 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500 ${errors.consent ? 'ring-1 ring-red-400' : ''}`}
                        />
                        <span className="text-sm text-gray-700">{t('labels.consent')} <Link href="/privacy-policy" className="text-green-600 hover:text-green-700 underline">{t('links.privacy')}</Link>.</span>
                      </label>
                      {errors.consent && <p className="mt-1 text-sm text-red-600">{errors.consent}</p>}
                    </div>
                  </div>

                  {submitError && <p className="mt-4 text-sm text-red-600" role="alert" aria-live="polite">{submitError}</p>}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button type="submit" className="btn-primary" disabled={isSubmitting}>
                      {isSubmitting ? '...' : t('submit')}
                    </button>
                    <Link href="/pricing" className="btn-secondary">{t('seePricing')}</Link>
                  </div>
                </form>
              ) : (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('success.title')}</h3>
                  <p className="text-gray-600 mb-6">{t('success.description')}</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/pricing" className="btn-secondary">{t('success.seePlans')}</Link>
                    <Link href="/faq" className="btn-primary">{t('success.goToFaq')}</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Aside: info de contacte i confiança */}
            <aside className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('aside.directTitle')}</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="font-medium">{t('aside.emailLabel')}:</span> <a className="text-green-600 hover:text-green-700" href="mailto:contacto@nextleadin.com">contacto@nextleadin.com</a></li>
                  <li><span className="font-medium">{t('aside.phoneLabel')}:</span> <a className="text-green-600 hover:text-green-700" href="tel:+34684781855">+34 684 781 855</a></li>
                  <li><span className="font-medium">{t('aside.hoursLabel')}:</span> {t('aside.hoursValue')}</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('aside.whyTitle')}</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>{t('aside.why1')}</li>
                  <li>{t('aside.why2')}</li>
                  <li>{t('aside.why3')}</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('aside.demoTitle')}</h4>
                <p className="text-gray-700 mb-4">{t('aside.demoDesc')}</p>
                <Link href="/contact" className="btn-primary">{t('aside.demoCta')}</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}


