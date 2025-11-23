import type { AppLocale } from '@/i18n/routing'

export type Locale = AppLocale

/**
 * Helper function per generar URLs de blog segons l'idioma
 * Català: /blog/slug
 * Altres: /{locale}/blog/slug
 */
export function getBlogPostUrl(slug: string, locale: Locale): string {
  if (locale === 'ca') {
    return `/blog/${slug}`
  }
  return `/${locale}/blog/${slug}`
}

