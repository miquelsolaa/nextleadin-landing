import type {Pathnames} from 'next-intl/routing'
import {createNavigation} from 'next-intl/navigation'

export const locales = ['es', 'en', 'ca'] as const
export type AppLocale = typeof locales[number]

// L'espanyol és l'idioma per defecte (sense prefix a l'URL)
export const defaultLocale: AppLocale = 'es'

export const localePrefix = 'as-needed' as const

// Optional: domain-based routing scaffold (disabled for now)
// export const domains = [
//   {domain: 'nextleadin.com', defaultLocale: 'ca'},
//   {domain: 'es.nextleadin.com', defaultLocale: 'es'},
//   {domain: 'en.nextleadin.com', defaultLocale: 'en'}
// ] as const

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/blog': '/blog',
  '/blog/[slug]': '/blog/[slug]',
  '/blog/category/[category]': '/blog/category/[category]',
  '/blog/tag/[tag]': '/blog/tag/[tag]',
  '/contact': '/contact',
  '/compare': '/compare',
  '/compare/[slug]': '/compare/[slug]',
  '/pricing': '/pricing',
  '/faq': '/faq',
  '/mwc2026': '/mwc2026',
  '/industries': '/industries',
  '/industries/[slug]': '/industries/[slug]',
  '/locations': '/locations',
  '/locations/[slug]': '/locations/[slug]',
  '/solutions': '/solutions',
  '/solutions/[slug]': '/solutions/[slug]',
  '/resources': '/resources',
  '/resources/roi-calculator': '/resources/roi-calculator',
  '/resources/cold-calling-scripts': '/resources/cold-calling-scripts',
  '/resources/local-prospecting-guide': '/resources/local-prospecting-guide',
}

export const routing = {
  locales,
  defaultLocale,
  localePrefix,
  pathnames,
  // domains
} as const

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing)


