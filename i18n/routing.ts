import {createNavigation, Pathnames} from 'next-intl/navigation'

export const locales = ['es', 'en', 'ca'] as const
export type AppLocale = typeof locales[number]

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
  '/faq': '/faq'
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


