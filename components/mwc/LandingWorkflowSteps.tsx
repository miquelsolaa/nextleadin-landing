'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const steps: Record<'es' | 'ca' | 'en', string[]> = {
  en: ['Scrape', 'Enrich', 'Score', 'Qualify'],
  ca: ['Raspar', 'Enriquir', 'Puntuar', 'Qualificar'],
  es: ['Scrape', 'Enrich', 'Score', 'Qualify'],
}

const heading: Record<'es' | 'ca' | 'en', string> = {
  en: 'How it works',
  ca: 'Com funciona',
  es: 'Cómo funciona',
}

export default function LandingWorkflowSteps() {
  const locale = (useLocale() as 'es' | 'ca' | 'en') ?? 'en'
  const stepLabels = steps[locale]
  const headingText = heading[locale]
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 md:py-28 bg-slate-50/60 mwc-dot-grid">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-2xl md:text-3xl font-bold text-slate-900 mb-14 tracking-tight"
        >
          {headingText}
        </motion.h2>
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
          {stepLabels.map((label, index) => (
            <div key={index} className="flex items-center">
              <motion.button
                type="button"
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  'relative px-5 py-2.5 md:px-7 md:py-3 rounded-xl font-semibold font-body transition-all duration-300',
                  activeIndex === index
                    ? 'bg-mwc-navy text-white shadow-lg shadow-mwc-navy/25'
                    : 'bg-white/80 text-slate-600 border border-slate-200/80 hover:border-mwc-green/40 hover:text-mwc-navy'
                )}
                aria-pressed={activeIndex === index}
                aria-label={`${label}, step ${index + 1} of ${stepLabels.length}`}
              >
                {label}
              </motion.button>
              {index < stepLabels.length - 1 && (
                <ChevronRight
                  className={cn(
                    'w-5 h-5 mx-1.5 md:mx-2 flex-shrink-0 transition-colors',
                    activeIndex >= index ? 'text-mwc-green' : 'text-slate-300'
                  )}
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
