'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const HeroSection = () => {
  const [email, setEmail] = useState('')
  const [animatedText, setAnimatedText] = useState('hipersegmentada')
  const [isAnimating, setIsAnimating] = useState(false)

  const animatedWords = ['hipersegmentada', 'impulsada per IA', 'precisa']

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
            {/* Complete Title with Animation */}
            <div className="mb-8">
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
    La teva plataforma{' '}
    <span
      className={`text-primary-600 transition-all duration-500 ${
        isAnimating ? 'opacity-0 translate-x-1' : 'opacity-100 translate-x-0'
      }`}
    >
      {animatedText}
    </span>
    <br />
    de generació de {' '}
    <span className="whitespace-nowrap">
      <span className="relative inline-block after:block after:h-1 after:bg-green-500 after:rounded-full after:mt-1">
      leads
      </span>
    </span>
  </h1>
</div>













            {/* Description */}
            <div className="mb-12">
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Genera leads qualificats en minuts: tria la zona, defineix el sector i deixa que la nostra IA els enriqueixi amb informes accionables per preparar la teva trucada comercial.
              </p>
            </div>

            {/* Inline Form */}
            <div>
              <form onSubmit={handleSubmit} className="flex items-end gap-4 max-w-md">
                <div className="flex-1">
                  <label htmlFor="hero-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correu electrònic
                  </label>
                  <input
                    id="hero-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=""
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200 whitespace-nowrap"
                >
                  Prova gratuïta
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Right Content - Dashboard Image (Hidden on tablet and mobile) */}
        <div className="hidden lg:flex flex-1 lg:flex-[1.2] items-center justify-end relative">
          <div className="relative w-full h-full min-h-[500px] flex items-center py-8">
            <div className="relative w-full max-w-none px-8">
              <Image
                src="https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/crm-dashboard.png"
                alt="Panell de generació de leads i anàlisi"
                width={1292}
                height={1012}
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