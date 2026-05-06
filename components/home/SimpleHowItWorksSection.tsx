'use client'

import { useAppLocale } from '@/lib/use-app-locale'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import styles from './SimpleHowItWorksSection.module.css'

type StepCopy = { label: string; hint: string }

type LocaleCopy = {
  title: string
  subtitle: string
  steps: [StepCopy, StepCopy, StepCopy]
}

const copy: Record<'es' | 'ca' | 'en', LocaleCopy> = {
  es: {
    title: 'Cómo funciona',
    subtitle: 'Tres pasos para pasar de la búsqueda al contacto.',
    steps: [
      { label: 'Buscas', hint: 'Define sector, zona y filtros.' },
      { label: 'Obtienes resultados', hint: 'Leads con teléfono y contexto.' },
      { label: 'Conectas', hint: 'Priorizas y llamas con datos listos.' },
    ],
  },
  ca: {
    title: 'Com funciona',
    subtitle: 'Tres passos per passar de la cerca al contacte.',
    steps: [
      { label: 'Cerques', hint: 'Defineix sector, zona i filtres.' },
      { label: 'Obtens resultats', hint: 'Leads amb telèfon i context.' },
      { label: 'Connectes', hint: 'Prioritzes i truques amb dades llestes.' },
    ],
  },
  en: {
    title: 'How it works',
    subtitle: 'Three steps from search to real conversations.',
    steps: [
      { label: 'You search', hint: 'Set sector, area, and filters.' },
      { label: 'You get results', hint: 'Leads with phone and context.' },
      { label: 'You connect', hint: 'Prioritize and call with ready data.' },
    ],
  },
}

const headingId = 'simple-how-it-works-heading'

const stepAnim = [
  {
    card: styles.animateStep1,
    label: styles.animateLabel1,
    badge: styles.animateBadge1,
  },
  {
    card: styles.animateStep2,
    label: styles.animateLabel2,
    badge: styles.animateBadge2,
  },
  {
    card: styles.animateStep3,
    label: styles.animateLabel3,
    badge: styles.animateBadge3,
  },
] as const

export default function SimpleHowItWorksSection() {
  const locale = useAppLocale()
  const reduceMotion = usePrefersReducedMotion()
  const t = copy[locale]

  return (
    <section
      className="border-t border-gray-200/80 bg-gray-50 py-12 md:py-16"
      aria-labelledby={headingId}
    >
      <div className="container-custom">
        <header className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2
            id={headingId}
            className="font-display text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl"
          >
            {t.title}
          </h2>
          <p className="mt-3 text-base text-gray-600 md:text-lg">{t.subtitle}</p>
        </header>

        <ol
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-3 md:gap-6"
          role="list"
        >
          {t.steps.map((step, index) => {
            const anim = stepAnim[index]
            const cardClass = reduceMotion
              ? `${styles.card} ${styles.cardReduced}`
              : `${styles.card} ${anim.card}`
            const labelClass = reduceMotion
              ? `font-semibold text-lg ${styles.labelReduced}`
              : `font-semibold text-lg ${anim.label}`
            const badgeClass = reduceMotion
              ? `inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${styles.badgeReduced}`
              : `inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${styles.badgeMuted} ${anim.badge}`

            return (
              <li key={step.label} className="min-w-0">
                <div className={cardClass}>
                  <div className="flex gap-4">
                    <span className={badgeClass} aria-hidden>
                      {index + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className={labelClass}>{step.label}</p>
                      <p
                        className={
                          reduceMotion
                            ? 'mt-1 text-sm text-gray-600'
                            : `mt-1 text-sm ${styles.labelMuted}`
                        }
                      >
                        {step.hint}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
