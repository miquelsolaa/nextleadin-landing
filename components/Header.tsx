'use client'

import { Link } from '@/i18n/routing'
import Image from 'next/image'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { useLocale } from 'next-intl'
import { useState, useEffect } from 'react'
import { Menu, X, Users, Phone, Mail, BarChart3, ChevronDown } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

type FeatureLink = {
  title: string
  href: string
  description: string
  icon: React.ReactNode
}

const Header = () => {
  const locale = (useLocale() as 'es' | 'ca' | 'en') ?? 'es'
  const [mobileOpen, setMobileOpen] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)

  const translations = (() => {
    if (locale === 'es') {
      return {
        nav: {
          features: 'Funcionalidades',
          resources: 'Recursos',
          comparator: 'Comparador',
          pricing: 'Precios',
          blog: 'Blog',
          contact: 'Contacto'
        },
        featureItems: {
          leadManagement: { title: 'Gestión de Leads', description: 'Genera y gestiona leads hipersegmentados' },
          coldCalling: { title: 'Cold Calling', description: 'Prepara llamadas con informes de IA' },
          emailSequences: { title: 'Secuencias de Email', description: 'Automatiza tu outreach por email' },
          pipelineAnalytics: { title: 'Pipeline & Analytics', description: 'Analiza y optimiza tu pipeline' }
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
          resources: 'Resources',
          comparator: 'Comparisons',
          pricing: 'Pricing',
          blog: 'Blog',
          contact: 'Contact'
        },
        featureItems: {
          leadManagement: { title: 'Lead Management', description: 'Generate and manage hyper-targeted leads' },
          coldCalling: { title: 'Cold Calling', description: 'Prepare calls with AI reports' },
          emailSequences: { title: 'Email Sequences', description: 'Automate your email outreach' },
          pipelineAnalytics: { title: 'Pipeline & Analytics', description: 'Analyze and optimize your pipeline' }
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
        resources: 'Recursos',
        comparator: 'Comparador',
        pricing: 'Preus',
        blog: 'Blog',
        contact: 'Contacte'
      },
      featureItems: {
        leadManagement: { title: 'Gestió de Leads', description: 'Genera i gestiona leads hipersegmentats' },
        coldCalling: { title: 'Cold Calling', description: 'Prepara trucades amb informes d\'IA' },
        emailSequences: { title: 'Seqüències d\'Email', description: 'Automatitza el teu outreach per email' },
        pipelineAnalytics: { title: 'Pipeline i Analytics', description: 'Analitza i optimitza el teu pipeline' }
      },
      common: {
        login: 'Iniciar sessió',
        getStarted: 'Començar'
      }
    }
  })()

  const featureLinks: FeatureLink[] = [
    {
      title: translations.featureItems.leadManagement.title,
      href: '/features/lead-management',
      description: translations.featureItems.leadManagement.description,
      icon: <Users className="h-5 w-5" />
    },
    {
      title: translations.featureItems.coldCalling.title,
      href: '/features/cold-calling',
      description: translations.featureItems.coldCalling.description,
      icon: <Phone className="h-5 w-5" />
    },
    {
      title: translations.featureItems.emailSequences.title,
      href: '/features/email-sequences',
      description: translations.featureItems.emailSequences.description,
      icon: <Mail className="h-5 w-5" />
    },
    {
      title: translations.featureItems.pipelineAnalytics.title,
      href: '/features/pipeline-analytics',
      description: translations.featureItems.pipelineAnalytics.description,
      icon: <BarChart3 className="h-5 w-5" />
    }
  ]

  const navigation = [
    { name: translations.nav.resources, href: '/resources' },
    { name: translations.nav.pricing, href: '/pricing' },
    { name: translations.nav.blog, href: '/blog' },
    { name: translations.nav.contact, href: '/contact' },
  ]

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
                sizes="32px"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-gray-900">NextLeadIn</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-green-500 text-sm font-medium">
                    {translations.nav.features}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {featureLinks.map((feature) => (
                        <li key={feature.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={feature.href}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                              )}
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-green-500">{feature.icon}</span>
                                <span className="text-sm font-medium leading-none text-gray-900">
                                  {feature.title}
                                </span>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500 mt-1">
                                {feature.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-500 px-4 py-2 text-sm font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-[width] duration-300 group-hover:w-full"></span>
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
                href="https://app.nextleadin.com/register"
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
        className={cn(
          "md:hidden bg-white border-t border-gray-200 transition-[max-height,opacity] duration-300 overflow-hidden",
          mobileOpen ? 'opacity-100 max-h-[calc(100vh-4rem)]' : 'opacity-0 max-h-0'
        )}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen ? true : undefined}
      >
        <div className="px-4 pt-2 pb-6 space-y-4 overflow-y-auto max-h-[calc(100vh-5rem)]">
          <nav className="flex flex-col space-y-1">
            {/* Features accordion for mobile */}
            <div>
              <button
                type="button"
                onClick={() => setFeaturesOpen(!featuresOpen)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100"
              >
                <span>{translations.nav.features}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    featuresOpen && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-[max-height] duration-300",
                  featuresOpen ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="pl-4 py-2 space-y-1">
                  {featureLinks.map((feature) => (
                    <Link
                      key={feature.href}
                      href={feature.href}
                      className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="text-green-500">{feature.icon}</span>
                      <span className="text-sm">{feature.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

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
          <div className="flex flex-wrap items-center justify-between gap-3">
            <LanguageSwitcher />
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <Link
                href="https://app.nextleadin.com"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 text-sm font-medium border border-gray-200 hover:border-gray-300 rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                {translations.common.login}
              </Link>
              <Link
                href="https://app.nextleadin.com/register"
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
