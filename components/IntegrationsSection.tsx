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
        title: 'Integraciones para activar',
        subtitle: 'llamadas y seguimiento',
        description: 'Conecta NextLeadIn con n8n, tu CRM (HubSpot, Pipedrive...), Resend y herramientas de telefonía para automatizar la generación de leads, las llamadas en frío y las secuencias de email.',
        cta: 'Ver todas las integraciones'
      }
    }
    if (locale === 'en') {
      return {
        title: 'Integrations to power',
        subtitle: 'calling and follow-up',
        description: 'Connect NextLeadIn with n8n, your CRM (HubSpot, Pipedrive...), Resend and telephony tools to automate lead generation, cold calls and email sequences.',
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
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {translations.title}{' '}
            <span className="text-primary-600">{translations.subtitle}</span>
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
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all duration-300 w-full flex items-center justify-center group"
            >
              <Image
                src={integration.logo}
                alt={`${integration.name} integration`}
                width={80}
                height={80}
                sizes="48px"
                className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
