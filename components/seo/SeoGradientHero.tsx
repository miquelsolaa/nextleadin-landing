import { Link } from '@/i18n/routing'
import type { ReactNode } from 'react'
import SeoBreadcrumbs, { type SeoCrumb } from './SeoBreadcrumbs'
import { getSeoSecondaryCtaHref } from '@/lib/seo-cta'

export interface SeoGradientHeroCta {
  primaryLabel: string
  secondaryLabel?: string
  primaryHref?: string
  secondaryHref?: string
}

interface SeoGradientHeroProps {
  breadcrumbs: SeoCrumb[]
  localePrefix: string
  title: string
  description: string
  heroIcon?: ReactNode
  cta: SeoGradientHeroCta
}

const SeoGradientHero = ({
  breadcrumbs,
  localePrefix,
  title,
  description,
  heroIcon,
  cta
}: SeoGradientHeroProps) => {
  const primaryHref =
    cta.primaryHref != null && cta.primaryHref.length > 0
      ? cta.primaryHref.startsWith('http')
        ? cta.primaryHref
        : `${localePrefix}${cta.primaryHref.startsWith('/') ? cta.primaryHref : `/${cta.primaryHref}`}`
      : `${localePrefix}/contact`

  const secondaryHref = getSeoSecondaryCtaHref(localePrefix, cta.secondaryLabel, cta.secondaryHref)

  return (
    <section className="bg-gradient-to-b from-primary-50 to-white pb-20 pt-28 sm:pt-32">
      <div className="container mx-auto px-4">
        <SeoBreadcrumbs items={breadcrumbs} />

        <div className="mx-auto max-w-4xl text-center">
          {heroIcon != null ? <div className="mb-6 flex justify-center text-primary-600">{heroIcon}</div> : null}
          <h1 className="font-display mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="mb-8 text-xl leading-relaxed text-gray-600">{description}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-primary-700"
            >
              {cta.primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary-600 bg-white px-8 py-4 text-lg font-semibold text-primary-600 transition-colors hover:bg-primary-50"
            >
              {cta.secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeoGradientHero
