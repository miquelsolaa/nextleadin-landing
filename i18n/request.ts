import {notFound} from 'next/navigation'
import {defaultLocale, locales, type AppLocale} from './routing'

function isSupportedLocale(locale: string | undefined | null): locale is AppLocale {
  return !!locale && (locales as readonly string[]).includes(locale)
}

const getRequestConfig = async () => {
  let detected: string | undefined
  try {
    const mod: any = await import('next-intl/server')
    if (typeof mod.requestLocale === 'function') {
      detected = await mod.requestLocale()
    }
  } catch {
    detected = undefined
  }
  const resolvedLocale: AppLocale = isSupportedLocale(detected) ? (detected as AppLocale) : defaultLocale

  try {
    const messages = (await import(`../messages/${resolvedLocale}.json`)).default
    return {locale: resolvedLocale, messages}
  } catch (error) {
    // Fallback robust a espanyol
    const fallbackLocale: AppLocale = 'es'
    const messages = (await import(`../messages/${fallbackLocale}.json`)).default
    return {locale: fallbackLocale, messages}
  }
}

export default getRequestConfig


