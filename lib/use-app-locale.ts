'use client'

import { useParams, usePathname } from 'next/navigation'
import { locales, type AppLocale } from '@/i18n/routing'

function isAppLocale(s: string): s is AppLocale {
  return (locales as readonly string[]).includes(s)
}

/**
 * Active locale from the URL: [locale] param first, else first path segment
 * (for layouts without params, e.g. root not-found). Safer than useLocale()
 * for next-intl Link + localePrefix "as-needed" (default es).
 */
export function useAppLocale(): AppLocale {
  const params = useParams()
  const pathname = usePathname() || ''
  const raw = params?.locale
  if (typeof raw === 'string') {
    const code = raw.split('-')[0].toLowerCase()
    if (isAppLocale(code)) return code
  }
  const first = pathname.split('/').filter(Boolean)[0]?.toLowerCase() ?? ''
  if (first && isAppLocale(first)) return first
  return 'es'
}
