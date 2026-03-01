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
    trust3: string
    emailLabel: string
    emailPlaceholder: string
    primaryCta: string
    helper: string
  }> = {
    es: {
      badge: '🎯 +8 reuniones/mes de media por usuario',
      titlePrefix: 'Leads de ',
      animatedWords: ['restaurantes', 'gimnasios', 'clínicas', 'comercios', 'talleres'],
      titleMid: '',
      titleSuffix: 'que LinkedIn no tiene',
      description: 'Deja de perder 8 horas buscando a quién llamar. NextLeadIn te da leads locales cualificados con contexto IA para que cada llamada cuente. Nuestros usuarios cierran 3x más reuniones con la mitad del esfuerzo.',
      trust1: '7 días gratis para probarlo',
      trust3: 'ROI medio de 15x',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'Introduce tu email de trabajo',
      primaryCta: 'Ver leads de mi zona',
      helper: 'Te enviamos leads de prueba de tu territorio en menos de 24h. Sin tarjeta, sin compromiso.'
    },
    ca: {
      badge: '🎯 +8 reunions/mes de mitjana per usuari',
      titlePrefix: 'Leads de ',
      animatedWords: ['restaurants', 'gimnasos', 'clíniques', 'comerços', 'tallers'],
      titleMid: '',
      titleSuffix: 'que LinkedIn no té',
      description: 'Deixa de perdre 8 hores buscant a qui trucar. NextLeadIn et dona leads locals qualificats amb context IA perquè cada trucada compti. Els nostres usuaris tanquen 3x més reunions amb la meitat de l\'esforç.',
      trust1: '7 dies gratis per provar-ho',
      trust3: 'ROI mitjà de 15x',
      emailLabel: 'Adreça electrònica',
      emailPlaceholder: 'Introdueix el teu email de feina',
      primaryCta: 'Veure leads de la meva zona',
      helper: 'T\'enviem leads de prova del teu territori en menys de 24h. Sense targeta, sense compromís.'
    },
    en: {
      badge: '🎯 +8 meetings/month average per user',
      titlePrefix: 'Leads from ',
      animatedWords: ['restaurants', 'gyms', 'clinics', 'retail stores', 'workshops'],
      titleMid: '',
      titleSuffix: 'that LinkedIn doesn\'t have',
      description: 'Stop wasting 8 hours finding who to call. NextLeadIn gives you qualified local leads with AI context so every call counts. Our users book 3x more meetings with half the effort.',
      trust1: '7-day free trial',
      trust3: 'Average ROI of 15x',
      emailLabel: 'Email address',
      emailPlaceholder: 'Enter your work email',
      primaryCta: 'See leads in my area',
      helper: 'We send you sample leads from your territory in under 24h. No card, no commitment.'
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
                  className={`text-primary-600 transition-[opacity,transform] duration-500 will-change-[opacity,transform] ${
                    isAnimating ? 'opacity-0 translate-x-1' : 'opacity-100 translate-x-0'
                  }`}
                >
                  {animatedText}
                </span>
                <br />
                <span className="border-b-4 border-green-500 pb-1">
                  {t.titleSuffix}
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
                <span>{t.trust3}</span>
              </div>
            </div>

            {/* Email Form - min-h to prevent CLS */}
            <div className="mb-6 min-h-[140px] sm:min-h-[100px]">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg">
                <div className="flex-1">
                  <label htmlFor="hero-email" className="block text-sm font-medium text-gray-700 mb-2 h-5">
                    {t.emailLabel}
                  </label>
                  <input
                    id="hero-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.emailPlaceholder}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 h-12"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 whitespace-nowrap self-end h-12"
                >
                  {t.primaryCta}
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-2 min-h-[40px]">
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
                fetchPriority="high"
                quality={85}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection