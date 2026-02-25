'use client'

import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import { trackRegisterStart } from '@/lib/analytics'

const CTASection = () => {
  const locale = (useLocale() as 'es' | 'ca' | 'en') ?? 'es'

  const t = {
    es: {
      kicker: 'Leads locales listos para llamar',
      title: <>¿Preparado para multiplicar tus <span className="text-primary-200">reuniones con negocios locales</span>?</>,
      desc: 'Pasa de buscar negocios uno a uno en directorios y listados a tener listas priorizadas con teléfono, informes IA y un workflow de llamadas en frío y emails ya montado.',
      primary: 'Solicitar demo',
      secondary: 'Hablar con ventas'
    },
    ca: {
      kicker: 'Leads locals a punt per trucar',
      title: <>Preparat per multiplicar les teves <span className="text-primary-200">reunions amb negocis locals</span>?</>,
      desc: 'Passa de buscar negocis un a un en directoris i llistats a tenir llistes prioritzades amb telèfon, informes d’IA i un workflow de trucades en fred i emails ja muntat.',
      primary: 'Sol·licitar demo',
      secondary: 'Parlar amb vendes'
    },
    en: {
      kicker: 'Local leads ready to call',
      title: <>Ready to multiply your <span className="text-primary-200">meetings with local businesses</span>?</>,
      desc: 'Stop copying local business data by hand. Get prioritized lists with phone numbers, AI reports and a cold-calling and email workflow already set up.',
      primary: 'Request demo',
      secondary: 'Talk to sales'
    }
  }[locale]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-black opacity-10" />
      <div className="container-custom relative min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h6 className="text-sm font-semibold text-primary-100 uppercase tracking-wider mb-4">
              {t.kicker}
            </h6>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t.title}
            </h2>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              {t.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
                onClick={() => trackRegisterStart('primary', locale)}
              >
                {t.primary}
              </Link>
              <Link
                href="/contact"
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600"
                onClick={() => trackRegisterStart('secondary', locale)}
              >
                {t.secondary}
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/cta/mockup.png"
              alt="Mockup de la plataforma NextLeadIn amb llistat de leads de negocis locals i mapa visual"
              width={752}
              height={423}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection


