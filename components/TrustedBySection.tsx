'use client'

import Image from 'next/image'
import { useRef, useEffect, useState, useCallback } from 'react'
import { useTranslations } from 'next-intl'

interface SlideItem {
  type: 'client' | 'metric'
  id: string
}

const TrustedBySection = () => {
  const t = useTranslations('home.trustedBy')
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const clients = [
    {
      id: 'summaCommerce',
      logo: '/images/testimonials/sumacommerce.png',
    },
    {
      id: 'clManager',
      logo: '/images/testimonials/clmanager.png',
    },
  ]

  const metrics = [
    { id: 'leads', icon: 'target' },
    { id: 'time', icon: 'clock' },
    { id: 'implementation', icon: 'rocket' },
  ]

  const slideItems: SlideItem[] = [
    { type: 'client', id: 'summaCommerce' },
    { type: 'client', id: 'clManager' },
    { type: 'metric', id: 'leads' },
    { type: 'metric', id: 'time' },
    { type: 'metric', id: 'implementation' },
  ]

  const infiniteSlides: SlideItem[] = []
  for (let i = 0; i < 10; i++) {
    infiniteSlides.push(...slideItems)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 0.02)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const slideWidth = 280
  const translateX = -currentIndex * slideWidth

  const getClient = (id: string) => clients.find((c) => c.id === id)
  const getMetric = (id: string) => metrics.find((m) => m.id === id)

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'target':
        return (
          <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'clock':
        return (
          <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'rocket':
        return (
          <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container-custom">
        {/* Titular SaaS Premium */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {t('title')}{' '}
            <span className="text-primary-600">{t('titleHighlight')}</span>
          </h2>
        </div>

        {/* Slider híbrid */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            ref={sliderRef}
            className="overflow-hidden"
          >
            <div
              className="flex gap-6"
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
                transition: 'transform 0.05s linear',
              }}
            >
              {infiniteSlides.map((slide, index) => {
                if (slide.type === 'client') {
                  const client = getClient(slide.id)
                  if (!client) return null

                  return (
                    <div
                      key={`${slide.id}-${index}`}
                      className="flex-shrink-0 w-[256px] bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-transparent flex items-center justify-center overflow-hidden">
                          <Image
                            src={client.logo}
                            alt={t(`clients.${slide.id}.name`)}
                            width={48}
                            height={48}
                            sizes="48px"
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {t(`clients.${slide.id}.name`)}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {t(`clients.${slide.id}.description`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                }

                if (slide.type === 'metric') {
                  const metric = getMetric(slide.id)
                  if (!metric) return null

                  return (
                    <div
                      key={`${slide.id}-${index}`}
                      className="flex-shrink-0 w-[256px] bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                          {renderIcon(metric.icon)}
                        </div>
                        <div className="flex-1">
                          <p className="text-2xl font-bold text-primary-600">
                            {t(`metrics.${slide.id}.value`)}
                          </p>
                          <p className="text-sm text-gray-600 leading-tight">
                            {t(`metrics.${slide.id}.label`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                }

                return null
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBySection
