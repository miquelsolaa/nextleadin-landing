'use client'

import { useState, useEffect } from 'react'
import { heroTexts } from './hero-texts'

interface HeroTitleAnimatedProps {
  locale: 'es' | 'ca' | 'en'
}

export default function HeroTitleAnimated({ locale }: HeroTitleAnimatedProps) {
  const t = heroTexts[locale] ?? heroTexts.es
  const [animatedText, setAnimatedText] = useState(t.animatedWords[0])
  const [isAnimating, setIsAnimating] = useState(false)
  const animatedWords = t.animatedWords

  useEffect(() => {
    setAnimatedText(animatedWords[0])
  }, [locale, animatedWords])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setAnimatedText((current) => {
          const currentIndex = animatedWords.indexOf(current)
          const nextIndex = (currentIndex + 1) % animatedWords.length
          return animatedWords[nextIndex]
        })
        setIsAnimating(false)
      }, 300)
    }, 2500)
    return () => clearInterval(interval)
  }, [animatedWords])

  return (
    <div className="mb-8">
      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
        {t.titlePrefix}
        <span
          className={`text-primary-600 transition-[opacity,transform] duration-500 will-change-[opacity,transform] ${
            isAnimating ? 'opacity-0 translate-x-1' : 'opacity-100 translate-x-0'
          }`}
        >
          {animatedText}
        </span>
        {' '}
        {t.titleSuffix}
      </h1>
    </div>
  )
}
