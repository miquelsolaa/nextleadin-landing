import { Link } from '@/i18n/routing'
import Image from 'next/image'
import type { AppLocale } from '@/i18n/routing'
import HeaderClientControls from '@/components/HeaderClientControls'
import HeaderFeaturesMenuClient from '@/components/HeaderFeaturesMenuClient'

type HeaderProps = {
  locale?: AppLocale
}

const Header = ({ locale = 'es' }: HeaderProps) => {
  const mobileMenuButtonId = 'mobile-menu-button'
  const mobileMenuPanelId = 'mobile-menu-panel'
  const desktopNavLabel =
    locale === 'ca' ? 'Navegació principal' : locale === 'es' ? 'Navegación principal' : 'Main navigation'

  const translations = (() => {
    if (locale === 'es') {
      return {
        nav: {
          features: 'Funcionalidades',
          industries: 'Sectores',
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
          industries: 'Industries',
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
        industries: 'Sectors',
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

  const featureLinks = [
    {
      title: translations.featureItems.leadManagement.title,
      href: '/features/lead-management',
      description: translations.featureItems.leadManagement.description,
      iconKey: 'leadManagement' as const,
    },
    {
      title: translations.featureItems.coldCalling.title,
      href: '/features/cold-calling',
      description: translations.featureItems.coldCalling.description,
      iconKey: 'coldCalling' as const,
    },
    {
      title: translations.featureItems.emailSequences.title,
      href: '/features/email-sequences',
      description: translations.featureItems.emailSequences.description,
      iconKey: 'emailSequences' as const,
    },
    {
      title: translations.featureItems.pipelineAnalytics.title,
      href: '/features/pipeline-analytics',
      description: translations.featureItems.pipelineAnalytics.description,
      iconKey: 'pipelineAnalytics' as const,
    },
  ]

  const navigation = [
    { name: translations.nav.industries, href: '/industries' },
    { name: translations.nav.resources, href: '/resources' },
    { name: translations.nav.pricing, href: '/pricing' },
    { name: translations.nav.blog, href: '/blog' },
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
                sizes="32px"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold font-display text-gray-900">NextLeadIn</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" aria-label={desktopNavLabel}>
            <HeaderFeaturesMenuClient label={translations.nav.features} items={featureLinks} />
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-500 px-4 py-2 text-sm font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-[width] duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="https://app.nextleadin.com"
                className="header-cta-button bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-3 text-sm font-medium border border-gray-200 hover:border-gray-300"
              >
                {translations.common.login}
              </Link>
              <Link
                href="https://app.nextleadin.com/register"
                className="header-cta-button primary bg-primary-500 hover:bg-primary-600 text-white px-5 py-3 text-sm font-medium"
              >
                {translations.common.getStarted}
              </Link>
            </div>
            <HeaderClientControls
              mobileMenuButtonId={mobileMenuButtonId}
              mobileMenuPanelId={mobileMenuPanelId}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
