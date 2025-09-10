'use client'

import Image from 'next/image'
import Link from 'next/link'
import {useLocale} from 'next-intl'

const CTASection = () => {
  const locale = (useLocale() as 'es' | 'ca' | 'en') ?? 'es'

  const t = {
    es: {
      kicker: 'Empieza',
      title: <>¿Preparado para multiplicar tus <span className="text-primary-200">leads cualificados</span>?</>,
      desc: 'Pasa de la prospección manual a una operativa guiada por IA. Más reuniones, mejores conversaciones y un ciclo de venta más corto.',
      primary: 'Empieza ahora',
      secondary: 'Habla con ventas'
    },
    ca: {
      kicker: 'Comença',
      title: <>Preparat per multiplicar els teus <span className="text-primary-200">leads qualificats</span>?</>,
      desc: 'Passa de la prospecció manual a una operativa guiada per IA. Més reunions, millors converses i un cicle de venda més curt.',
      primary: 'Comença ara',
      secondary: 'Parla amb vendes'
    },
    en: {
      kicker: 'Get started',
      title: <>Ready to multiply your <span className="text-primary-200">qualified leads</span>?</>,
      desc: 'Move from manual prospecting to an AI-guided operation. More meetings, better conversations and a shorter sales cycle.',
      primary: 'Start now',
      secondary: 'Talk to sales'
    }
  }[locale]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10" />
      <div className="container-custom relative">
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
              <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                {t.primary}
              </Link>
              <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                {t.secondary}
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/cta/mockup.png"
              alt="CTA illustration"
              width={752}
              height={423}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection


