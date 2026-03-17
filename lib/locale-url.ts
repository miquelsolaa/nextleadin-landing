import type { AppLocale } from '@/i18n/routing'

const BASE_URL = 'https://nextleadin.com'

export const getLocalePath = (locale: AppLocale): string => (locale === 'es' ? '' : `/${locale}`)

export const getAbsoluteLocaleUrl = (locale: AppLocale, path: `/${string}` | ''): string =>
  `${BASE_URL}${getLocalePath(locale)}${path}`

export const getAbsoluteHomeUrl = (locale: AppLocale): string => getAbsoluteLocaleUrl(locale, '')

