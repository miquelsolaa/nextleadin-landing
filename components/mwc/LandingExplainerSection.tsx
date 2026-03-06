'use client'

import { useLocale } from 'next-intl'
import { Globe, Sparkles, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const bullets: Record<'es' | 'ca' | 'en', { title: string; description: string }[]> = {
  en: [
    { title: 'Scrape', description: 'Web + directories, real-time data' },
    { title: 'Enrich', description: 'AI-powered business intelligence & context' },
    { title: 'Score & Qualify', description: 'Automated lead ranking and fit' },
  ],
  ca: [
    { title: 'Raspar', description: 'Web + directoris, dades en temps real' },
    { title: 'Enriquir', description: 'Intel·ligència empresarial i context amb IA' },
    { title: 'Puntuar i qualificar', description: 'Classificació i fit automàtics' },
  ],
  es: [
    { title: 'Scrape', description: 'Web + directorios, datos en tiempo real' },
    { title: 'Enrich', description: 'Inteligencia empresarial y contexto con IA' },
    { title: 'Score & Qualify', description: 'Ranking y fit automáticos' },
  ],
}

const icons = [Globe, Sparkles, BarChart3]
const accentColors = [
  'from-cyan-500/15 to-mwc-green/10 border-cyan-500/20',
  'from-violet-500/15 to-mwc-green/10 border-violet-500/20',
  'from-amber-500/15 to-mwc-green/10 border-amber-500/20',
]

export default function LandingExplainerSection() {
  const locale = (useLocale() as 'es' | 'ca' | 'en') ?? 'en'
  const items = bullets[locale]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => {
            const IconComponent = icons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  'group relative flex flex-col p-6 md:p-8 rounded-2xl border transition-all duration-300',
                  'bg-slate-50/50 hover:bg-white',
                  'border-slate-200/80 hover:border-slate-300/80 hover:shadow-lg hover:shadow-slate-200/30'
                )}
              >
                <div
                  className={cn(
                    'w-14 h-14 rounded-xl flex items-center justify-center mb-5 border bg-gradient-to-br',
                    accentColors[index]
                  )}
                >
                  <IconComponent
                    className="w-7 h-7 text-mwc-navy transition-transform group-hover:scale-110"
                    aria-hidden
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 font-body leading-relaxed">
                  {item.description}
                </p>
                {index < items.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-200" aria-hidden />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
