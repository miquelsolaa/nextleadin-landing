'use client'

import Image from 'next/image'
import { useLocale } from 'next-intl'
import { trackRegisterStart } from '@/lib/analytics'
import { ChevronRight } from 'lucide-react'

const CTAScriptsSection = () => {
  const locale = (useLocale() as 'es' | 'ca' | 'en') ?? 'es'

  const t = {
    es: {
      title1: 'Ahora tienes los scripts.',
      title2: 'Falta la lista de a quién llamar.',
      desc: 'Accede a miles de negocios locales en España con teléfono verificado y contexto IA por lead.',
      primary: 'Probar NextLeadIn gratis'
    },
    ca: {
      title1: 'Ara tens els scripts.',
      title2: 'Falta la llista de a qui trucar.',
      desc: 'Accedeix a milers de negocis locals a Espanya amb telèfon verificat i context IA per lead.',
      primary: 'Provar NextLeadIn gratis'
    },
    en: {
      title1: 'Now you have the scripts.',
      title2: 'You need the list of who to call.',
      desc: 'Access thousands of local businesses in Spain with verified phone and AI context per lead.',
      primary: 'Try NextLeadIn free'
    }
  }[locale]

  return (
    <section className="section-padding bg-primary-600 relative overflow-hidden w-full">
      <div className="container-custom relative min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t.title1}
              <br />
              <span className="text-primary-100">{t.title2}</span>
            </h2>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              {t.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://app.nextleadin.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center justify-center gap-2"
                onClick={() => trackRegisterStart('primary', locale)}
              >
                {t.primary}
                <ChevronRight className="w-4 h-4 shrink-0" aria-hidden />
              </a>
            </div>
          </div>

          <div className="relative [perspective:1000px]">
            <div className="[transform:perspective(1000px)_rotateY(-5deg)_rotateX(2deg)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.1)] rounded-xl overflow-hidden">
              <Image
                src="/images/cta/mockup.png"
                alt="Mockup de la plataforma NextLeadIn amb llistat de leads de negocis locals i mapa visual"
                width={752}
                height={423}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTAScriptsSection
