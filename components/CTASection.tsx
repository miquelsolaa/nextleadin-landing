'use client'

import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import { trackRegisterStart } from '@/lib/analytics'

const CTASection = () => {
  const locale = (useLocale() as 'es' | 'ca' | 'en') ?? 'es'

  const t = {
    es: {
      kicker: 'Prueba 7 días sin compromiso',
      title: <>¿Listo para cerrar <span className="text-primary-200">3x más reuniones</span> este mes?</>,
      desc: 'Únete a los equipos comerciales que ya generan 8+ reuniones/mes con NextLeadIn.',
      primary: 'Probar 7 días gratis',
      secondary: 'Hablar con un experto'
    },
    ca: {
      kicker: 'Prova 7 dies sense compromís',
      title: <>Preparat per tancar <span className="text-primary-200">3x més reunions</span> aquest mes?</>,
      desc: "Uneix-te als equips comercials que ja generen 8+ reunions/mes amb NextLeadIn.",
      primary: 'Provar 7 dies gratis',
      secondary: 'Parlar amb un expert'
    },
    en: {
      kicker: 'Try 7 days free, no commitment',
      title: <>Ready to close <span className="text-primary-200">3x more meetings</span> this month?</>,
      desc: 'Join the sales teams already generating 8+ meetings/month with NextLeadIn.',
      primary: 'Try 7 days free',
      secondary: 'Talk to an expert'
    }
  }[locale]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-black opacity-10" />
      <div className="container-custom relative min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <span className="block text-sm font-semibold text-primary-100 uppercase tracking-wider mb-4">
              {t.kicker}
            </span>
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
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection


