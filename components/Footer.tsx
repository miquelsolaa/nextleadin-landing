'use client'

import Link from 'next/link'
import Image from 'next/image'
import {useLocale} from 'next-intl'
import { useState } from 'react'

const Footer = () => {
  const rawLocale = (useLocale() as string) || 'es'
  const base = rawLocale.split('-')[0] as 'es' | 'ca' | 'en'
  const locale = (['es','ca','en'].includes(base) ? base : 'es') as 'es' | 'ca' | 'en'

  const dict = {
    es: {
      newsletterTitle: '¿Quieres recibir novedades y actualizaciones?',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'tu-correo@empresa.com',
      subscribe: 'Suscríbete',
      brandDesc: 'Genera leads hipersegmentados y prepara llamadas con informes creados por IA. Más calidad, menos tiempo perdido.',
      sections: {
        features: 'Funcionalidades',
        resources: 'Recursos',
        company: 'Empresa',
        social: 'Redes'
      },
      nav: {
        features: [
          { name: 'Segmentación por zona', href: '#' },
          { name: 'Enriquecimiento con IA', href: '#' },
          { name: 'Informes para llamadas', href: '#' },
          { name: 'Integraciones', href: '#' }
        ],
        resources: [
          { name: 'Centro de soporte', href: '#' },
          { name: 'Documentación', href: '#' },
          { name: 'Comunidad', href: '#' },
          { name: 'Kit de recursos', href: '#' }
        ],
        company: [
          { name: 'Sobre nosotros', href: '#' },
          { name: 'Blog', href: '/blog' },
          { name: 'Contacto', href: '/contact' },
          { name: 'Empleo', href: '#' }
        ],
        social: [
          { name: 'Linkedin', href: '#' }
        ]
      },
      copyright: '© 2025 NextLeadIn. Todos los derechos reservados.',
      legal: {
        terms: 'Términos y condiciones',
        privacy: 'Política de privacidad',
        cookies: 'Política de cookies'
      }
    },
    ca: {
      newsletterTitle: 'Vols rebre novetats i actualitzacions?',
      emailLabel: 'Correu electrònic',
      emailPlaceholder: 'el-teu-correu@empresa.com',
      subscribe: 'Subscriu-te',
      brandDesc: 'Genera leads hipersegmentats i prepara trucades amb informes creats per IA. Més qualitat, menys temps perdut.',
      sections: {
        features: 'Característiques',
        resources: 'Recursos',
        company: 'Empresa',
        social: 'Xarxes'
      },
      nav: {
        features: [
          { name: 'Segmentació per zona', href: '#' },
          { name: 'Enriquiment amb IA', href: '#' },
          { name: 'Informes per trucades', href: '#' },
          { name: 'Integracions', href: '#' }
        ],
        resources: [
          { name: 'Centre de suport', href: '#' },
          { name: 'Documentació', href: '#' },
          { name: 'Comunitat', href: '#' },
          { name: 'Kit de recursos', href: '#' }
        ],
        company: [
          { name: 'Sobre nosaltres', href: '#' },
          { name: 'Blog', href: '/blog' },
          { name: 'Contacte', href: '/contact' },
          { name: 'Carreres', href: '#' }
        ],
        social: [
          { name: 'Behance', href: '#' },
          { name: 'Dribbble', href: '#' },
          { name: 'Facebook', href: '#' },
          { name: 'Instagram', href: '#' }
        ]
      },
      copyright: '© 2025 NextLeadIn. Tots els drets reservats.',
      legal: {
        terms: 'Termes i condicions',
        privacy: 'Política de privacitat',
        cookies: 'Política de cookies'
      }
    },
    en: {
      newsletterTitle: 'Want to receive news and updates?',
      emailLabel: 'Email address',
      emailPlaceholder: 'your-email@company.com',
      subscribe: 'Subscribe',
      brandDesc: 'Generate hyper-targeted leads and prepare calls with AI-generated reports. More quality, less wasted time.',
      sections: {
        features: 'Features',
        resources: 'Resources',
        company: 'Company',
        social: 'Social'
      },
      nav: {
        features: [
          { name: 'Area targeting', href: '#' },
          { name: 'AI enrichment', href: '#' },
          { name: 'Call reports', href: '#' },
          { name: 'Integrations', href: '#' }
        ],
        resources: [
          { name: 'Support center', href: '#' },
          { name: 'Documentation', href: '#' },
          { name: 'Community', href: '#' },
          { name: 'Resource kit', href: '#' }
        ],
        company: [
          { name: 'About us', href: '#' },
          { name: 'Blog', href: '/blog' },
          { name: 'Contact', href: '/contact' },
          { name: 'Careers', href: '#' }
        ],
        social: [
          { name: 'Linkedin', href: '#' }
        ]
      },
      copyright: '© 2025 NextLeadIn. All rights reserved.',
      legal: {
        terms: 'Terms and conditions',
        privacy: 'Privacy policy',
        cookies: 'Cookie policy'
      }
    }
  }[locale]

  const footerNavigation = dict.nav

  const socialLinks = [
    { name: 'Linkedin', href: '#', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' }
  ]

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-custom">
        {/* Newsletter Section */}
        <div className="border-b border-gray-700 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {dict.newsletterTitle}
              </h3>
            </div>
            <div>
              <NewsletterForm locale={locale} dict={dict} />
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6 flex items-center space-x-3">
                <Image
                  src="/images/logo/logo-dark.svg"
                  alt="NextLeadIn"
                  width={200}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-gray-400 mb-6 max-w-md">
                {dict.brandDesc}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    aria-label={item.name}
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={item.icon} />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {dict.sections.features}
              </h3>
              <ul role="list" className="space-y-3">
                {footerNavigation.features.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {dict.sections.resources}
              </h3>
              <ul role="list" className="space-y-3">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {dict.sections.company}
              </h3>
              <ul role="list" className="space-y-3">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {dict.sections.social}
              </h3>
              <ul role="list" className="space-y-3">
                {footerNavigation.social.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              {dict.copyright}
            </p>
            <div className="flex space-x-6">
              <Link
                href="/terms-and-conditions"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {dict.legal.terms}
              </Link>
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {dict.legal.privacy}
              </Link>
              <Link
                href="/cookie-policy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {dict.legal.cookies}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

type NewsletterDict = {
  emailLabel: string
  emailPlaceholder: string
  subscribe: string
}

function NewsletterForm({ locale, dict }: { locale: 'es' | 'ca' | 'en', dict: NewsletterDict }) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(String(data[key] ?? '')))
      .join('&')

  const messages: Record<typeof locale, { success: string; error: string }> = {
    es: { success: '¡Gracias! Te hemos suscrito a la newsletter.', error: 'No se pudo suscribir. Inténtalo de nuevo.' },
    ca: { success: 'Gràcies! T’hem subscrit al butlletí.', error: 'No s’ha pogut subscriure. Torna-ho a provar.' },
    en: { success: 'Thanks! You are subscribed to the newsletter.', error: 'Subscription failed. Please try again.' },
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSuccess(null)
    setError(null)
    setIsSubmitting(true)
    try {
      const payload = {
        'form-name': 'newsletter',
        'bot-field': '',
        locale,
        email,
      }
      const res = await fetch('/netlify-forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload),
      })
      if (!res.ok) throw new Error('Network error')
      setSuccess(messages[locale].success)
      setEmail('')
    } catch (err) {
      setError(messages[locale].error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form name="newsletter" method="POST" action="/netlify-forms.html" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md lg:max-w-none">
      <input type="hidden" name="form-name" value="newsletter" />
      <input type="hidden" name="locale" value={locale} />
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <div className="flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          {dict.emailLabel}
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border-0 bg-white/10 px-4 py-3 text-white placeholder:text-gray-300 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder={dict.emailPlaceholder}
        />
      </div>
      <button type="submit" className="btn-primary whitespace-nowrap" disabled={isSubmitting}>
        {isSubmitting ? '...' : dict.subscribe}
      </button>
      {(success || error) && (
        <p className={`text-sm ${success ? 'text-green-400' : 'text-red-400'}`} role={success ? 'status' : 'alert'} aria-live="polite">
          {success ?? error}
        </p>
      )}
    </form>
  )
}
