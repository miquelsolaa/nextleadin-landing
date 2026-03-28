import type { AppLocale } from '@/i18n/routing'

const BASE_URL = 'https://nextleadin.com'

export const getLocalePath = (locale: AppLocale): string => (locale === 'es' ? '' : `/${locale}`)

export const getAbsoluteLocaleUrl = (locale: AppLocale, path: `/${string}` | ''): string =>
  `${BASE_URL}${getLocalePath(locale)}${path}`

export const getAbsoluteHomeUrl = (locale: AppLocale): string => getAbsoluteLocaleUrl(locale, '')

const STATIC_PATH_PREFIXES = ['/images/', '/icons/', '/fonts/', '/videos/'] as const

function pathLooksLikeStaticAsset(pathname: string): boolean {
  return /\.[a-z0-9]{2,8}$/i.test(pathname)
}

/**
 * Prefixes a root-relative app path with /{locale} when needed (non-default locale).
 * Used for markdown HTML and any plain href that bypasses next-intl Link.
 */
export function localizeInternalPath(path: string, locale: AppLocale): string {
  if (locale === 'es') return path
  if (!path.startsWith('/') || path.startsWith('//')) return path
  const pathOnly = path.split(/[?#]/)[0] || path
  if (pathOnly.startsWith('/api') || pathOnly.startsWith('/_next')) return path
  if (pathLooksLikeStaticAsset(pathOnly)) return path
  if (STATIC_PATH_PREFIXES.some((p) => pathOnly.startsWith(p))) return path
  if (
    pathOnly === '/en' ||
    pathOnly.startsWith('/en/') ||
    pathOnly === '/ca' ||
    pathOnly.startsWith('/ca/') ||
    pathOnly === '/es' ||
    pathOnly.startsWith('/es/')
  ) {
    return path
  }
  const prefix = getLocalePath(locale)
  if (!prefix) return path
  if (path === '/') return prefix
  return `${prefix}${path}`
}

export function localizeHtmlInternalLinks(html: string, locale: AppLocale): string {
  if (locale === 'es') return html
  const fix = (value: string) => (value.startsWith('/') ? localizeInternalPath(value, locale) : value)
  return html
    .replace(/href="([^"]*)"/g, (m, p1) => `href="${fix(p1)}"`)
    .replace(/href='([^']*)'/g, (m, p1) => `href='${fix(p1)}'`)
}

