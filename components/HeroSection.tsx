'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface HeroSectionProps {
  locale: 'es' | 'ca' | 'en'
}

const HeroSection = ({ locale }: HeroSectionProps) => {
  const [email, setEmail] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)

  const texts: Record<'es' | 'ca' | 'en', {
    badge: string
    titlePrefix: string
    animatedWords: string[]
    titleMid: string
    titleSuffix: string
    description: string
    trust1: string
    trust2: string
    emailLabel: string
    emailPlaceholder: string
    primaryCta: string
    helper: string
  }> = {
    es: {
      badge: '📞 Leads de negocios locales listos para llamar',
      titlePrefix: 'Genera leads de ',
      animatedWords: ['restaurantes', 'talleres', 'comercios locales'],
      titleMid: 'en España que ',
      titleSuffix: 'LinkedIn no tiene',
      description: 'NextLeadIn encuentra los negocios locales de tu territorio que otras bases B2B no tienen y los convierte en listas listas para llamar, con teléfono, contexto y análisis de reseñas con IA.',
      trust1: 'Listas listas para llamar desde el primer día',
      trust2: 'Cumple RGPD/LOPD para prospección B2B',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'Introduce tu email de trabajo',
      primaryCta: 'Solicitar demo',
      helper: 'Te enviamos acceso a una demo guiada y primeros leads de prueba de tu zona.'
    },
    ca: {
      badge: '📞 Leads de negocis locals a punt per trucar',
      titlePrefix: 'Genera leads de ',
      animatedWords: ['restaurants', 'tallers', 'comerços locals'],
      titleMid: 'que ',
      titleSuffix: 'LinkedIn no té',
      description: 'NextLeadIn troba els negocis locals del teu territori que altres bases B2B no tenen i els converteix en llistes a punt per trucar, amb telèfon, context i anàlisi de ressenyes amb IA.',
      trust1: 'Llistes a punt per trucar des del primer dia',
      trust2: 'Compliment RGPD/LOPD per a prospecció B2B',
      emailLabel: 'Adreça electrònica',
      emailPlaceholder: 'Introdueix el teu email de feina',
      primaryCta: 'Sol·licitar demo',
      helper: 'T\'enviem accés a una demo guiada i primers leads de prova de la teva zona.'
    },
    en: {
      badge: '📞 Local business leads ready to call',
      titlePrefix: 'Generate leads from ',
      animatedWords: ['restaurants', 'workshops', 'local shops'],
      titleMid: 'that ',
      titleSuffix: "LinkedIn doesn't have",
      description: 'NextLeadIn turns hard-to-find local businesses into prioritized ready-to-call lists, with phone numbers, context and AI review analysis so you can start calling from day one.',
      trust1: 'Ready-to-call lists from day one',
      trust2: 'GDPR-compliant B2B prospecting',
      emailLabel: 'Email address',
      emailPlaceholder: 'Enter your work email',
      primaryCta: 'Request demo',
      helper: 'We’ll send you access to a guided demo and sample leads from your territory.'
    }
  }

  const t = texts[locale] ?? texts.es
  const [animatedText, setAnimatedText] = useState(t.animatedWords[0])
  const animatedWords = t.animatedWords

  // Enhanced text animation with fade in from left to right
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      
      setTimeout(() => {
        setAnimatedText(current => {
          const currentIndex = animatedWords.indexOf(current)
          const nextIndex = (currentIndex + 1) % animatedWords.length
          return animatedWords[nextIndex]
        })
        setIsAnimating(false)
      }, 300) // Wait for fade out before changing text
      
    }, 2000)

    return () => clearInterval(interval)
  }, [animatedWords])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Email submitted:', email)
  }

  return (
    <section className="hero-section bg-gray-50 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch min-h-[700px]">
        {/* Left Content Container */}
        <div className="flex-1 flex flex-col justify-center py-16 lg:py-24 px-4 sm:px-6 lg:px-8 lg:pl-64">
          <div className="max-w-xl">
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-800 border border-green-200">
                {t.badge}
              </span>
            </div>

            {/* Complete Title with Animation */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                {t.titlePrefix}
                <span
                  className={`text-primary-600 transition-all duration-500 ${
                    isAnimating ? 'opacity-0 translate-x-1' : 'opacity-100 translate-x-0'
                  }`}
                >
                  {animatedText}
                </span>
                <br />
                {t.titleMid}
                <span className="sm:whitespace-nowrap">
                  <span className="relative inline-block after:block after:h-1 after:bg-green-500 after:rounded-full after:mt-1">
                  {t.titleSuffix}
                  </span>
                </span>
              </h1>
            </div>













            {/* Description */}
            <div className="mb-8">
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                {t.description}
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="mb-8 flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t.trust1}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t.trust2}</span>
              </div>  
            </div>

            {/* Email Form */}
            <div className="mb-6">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg">
                <div className="flex-1">
                  <label htmlFor="hero-email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.emailLabel}
                  </label>
                  <input
                    id="hero-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.emailPlaceholder}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200 whitespace-nowrap self-end"
                >
                  {t.primaryCta}
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-2">
                {t.helper}
              </p>
            </div>
          </div>
        </div>

        {/* Right Content - Dashboard Image (Hidden on tablet and mobile) */}
        <div className="hidden lg:flex flex-1 lg:flex-[1.2] items-center justify-end relative">
          <div className="relative w-full h-full min-h-[500px] flex items-center py-8">
            <div className="relative w-full max-w-none px-8">
              <Image
                src="/images/hero/hero.png"
                alt="Panell de control NextLeadIn - Visualització de la plataforma de generació de leads amb IA, segmentació geogràfica i informes intel·ligents"
                width={1292}
                height={1012}
                sizes="(max-width: 1024px) 0px, (max-width: 1280px) 90vw, 1292px"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection