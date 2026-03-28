'use client'

import { useState, useEffect, useCallback } from 'react'
import { useTranslations } from 'next-intl'

const SIZE = 52
const STROKE_WIDTH = 3
const RADIUS = (SIZE - STROKE_WIDTH) / 2
const CENTER = SIZE / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

const ScrollToTopButton = () => {
  const t = useTranslations('common')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const updateProgress = useCallback(() => {
    if (typeof window === 'undefined') return
    const scrollY = window.scrollY
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

    if (scrollHeight <= 0) {
      setScrollProgress(0)
    } else {
      const progress = Math.min(100, (scrollY / scrollHeight) * 100)
      setScrollProgress(progress)
    }
    setIsVisible(scrollY > 300)
  }, [])

  useEffect(() => {
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [updateProgress])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const strokeDashoffset = CIRCUMFERENCE - (scrollProgress / 100) * CIRCUMFERENCE

  if (!isVisible) return null

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={t('scrollToTop')}
      className="fixed bottom-6 right-6 z-40 hidden md:flex items-center justify-center rounded-full bg-transparent hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--e-global-color-primary,#00CC61)] focus-visible:ring-offset-2 transition-all duration-200"
      style={{ width: SIZE, height: SIZE }}
    >
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="absolute inset-0 -rotate-90"
        aria-hidden
      >
        {/* Track (fons gris clar) */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={STROKE_WIDTH}
        />
        {/* Progrés (roda que es pinta) */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="var(--e-global-color-primary, #00CC61)"
          strokeWidth={STROKE_WIDTH}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 0.15s ease-out' }}
        />
      </svg>
      {/* Icona fletxa cap amunt */}
      <svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--e-global-color-primary, #00CC61)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative"
        aria-hidden
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}

export default ScrollToTopButton
