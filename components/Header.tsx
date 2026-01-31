'use client'

import {Link} from '@/i18n/routing'
import Image from 'next/image'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import {useLocale} from 'next-intl'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const locale = (useLocale() as 'es' | 'ca' | 'en') ?? 'es'
  const [mobileOpen, setMobileOpen] = useState(false)

  const translations = (() => {
    if (locale === 'es') {
      return {
        nav: {
          features: 'Funcionalidades',
          comparator: 'Comparador',
          pricing: 'Precios',
          blog: 'Blog',
          faq: 'FAQ',
          contact: 'Contacto'
        },
        common: {
          login: 'Iniciar sesión',
          getStarted: 'Comenzar'
        }
      }
    }
    if (locale === 'en') {
      return {
        nav: {
          features: 'Features',
          comparator: 'Comparisons',
          pricing: 'Pricing',
          blog: 'Blog',
          faq: 'FAQ',
          contact: 'Contact'
        },
        common: {
          login: 'Login',
          getStarted: 'Get Started'
        }
      }
    }
    return {
      nav: {
        features: 'Funcionalitats',
        comparator: 'Comparador',
        pricing: 'Preus',
        blog: 'Blog',
        faq: 'FAQ',
        contact: 'Contacte'
      },
      common: {
        login: 'Iniciar sessió',
        getStarted: 'Començar'
      }
    }
  })()

  // Bloqueja scroll quan el menú mòbil és obert
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const navigation = [
    { name: translations.nav.features, href: {pathname: '/', hash: 'funcionalitats'} as any },
    { name: translations.nav.comparator, href: '/compare' },
    { name: translations.nav.pricing, href: '/pricing' },
    { name: translations.nav.blog, href: '/blog' },
    { name: translations.nav.faq, href: '/faq' },
    { name: translations.nav.contact, href: '/contact' },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/logo/logo-icon.svg"
                alt="NextLeadIn Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-gray-900">NextLeadIn</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-500 px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <LanguageSwitcher />
              <Link
                href="https://app.nextleadin.com"
                className="header-cta-button bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-3 text-sm font-medium border border-gray-200 hover:border-gray-300"
              >
                {translations.common.login}
              </Link>
              <Link
                href="/get-started"
                className="header-cta-button primary bg-green-500 hover:bg-green-600 text-white px-5 py-3 text-sm font-medium"
              >
                {translations.common.getStarted}
              </Link>
            </div>
            {/* Burger menu button (mobile) */}
            <button
              type="button"
              aria-label={mobileOpen ? 'Tanca el menú' : 'Obre el menú'}
              aria-expanded={mobileOpen}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 transition-[max-height,opacity] duration-300 overflow-hidden ${mobileOpen ? 'opacity-100' : 'opacity-0'} ${mobileOpen ? 'max-h-screen' : 'max-h-0'}`}
        aria-hidden={!mobileOpen}
      >
        <div className="px-4 pt-2 pb-6 space-y-4">
          <nav className="flex flex-col space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="h-px bg-gray-200" />
          <div className="flex items-center justify-between">
            <LanguageSwitcher />
            <div className="flex items-center space-x-3">
              <Link
                href="https://app.nextleadin.com"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 text-sm font-medium border border-gray-200 hover:border-gray-300 rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                {translations.common.login}
              </Link>
              <Link
                href="/get-started"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm font-medium rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                {translations.common.getStarted}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
