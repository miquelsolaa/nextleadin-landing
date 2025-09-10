'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'

interface Integration {
  name: string
  logo: string
}

interface IntegrationsSectionProps {
  integrations: Integration[]
}

export default function IntegrationsSection({ integrations }: IntegrationsSectionProps) {
  const locale = (useLocale() as 'es' | 'ca' | 'en') ?? 'es'

  const translations = (() => {
    if (locale === 'es') {
      return {
        title: 'Integraciones',
        subtitle: 'potentes',
        description: 'Conecta NextLeadIn con tus herramientas favoritas y automatiza tu flujo de trabajo de generación de leads.',
        cta: 'Ver todas las integraciones'
      }
    }
    if (locale === 'en') {
      return {
        title: 'Powerful',
        subtitle: 'integrations',
        description: 'Connect NextLeadIn with your favorite tools and automate your lead generation workflow.',
        cta: 'View all integrations'
      }
    }
    return {
      title: 'Integracions',
      subtitle: 'potents',
      description: 'Connecta NextLeadIn amb les teves eines favorites i automatitza el teu flux de treball de generació de leads.',
      cta: 'Veure totes les integracions'
    }
  })()

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">{translations.title}</span> {translations.subtitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {translations.description}
          </p>
          <Link href="/solutions" className="btn-primary">
            {translations.cta}
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
          {integrations.map((integration, index) => (
            <div
              key={integration.name}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 w-full flex items-center justify-center group"
            >
              <Image
                src={integration.logo}
                alt={`${integration.name} integration`}
                width={80}
                height={80}
                className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
