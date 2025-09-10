'use client'

import Link from 'next/link'
import Image from 'next/image'
import {useLocale} from 'next-intl'

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
          { name: 'Behance', href: '#' },
          { name: 'Dribbble', href: '#' },
          { name: 'Facebook', href: '#' },
          { name: 'Instagram', href: '#' }
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
          { name: 'Behance', href: '#' },
          { name: 'Dribbble', href: '#' },
          { name: 'Facebook', href: '#' },
          { name: 'Instagram', href: '#' }
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
    { name: 'Facebook', href: '#', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
    { name: 'Twitter', href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    { name: 'Instagram', href: '#', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
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
              <form className="flex gap-4 max-w-md lg:max-w-none">
                <div className="flex-1">
                  <label htmlFor="email-address" className="sr-only">
                    {dict.emailLabel}
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full rounded-lg border-0 bg-white/10 px-4 py-3 text-white placeholder:text-gray-300 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder={dict.emailPlaceholder}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  {dict.subscribe}
                </button>
              </form>
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
