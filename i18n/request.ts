import {defaultLocale, locales, type AppLocale} from './routing'

function isSupportedLocale(locale: string | undefined | null): locale is AppLocale {
  return !!locale && (locales as readonly string[]).includes(locale)
}

const getRequestConfig = async ({requestLocale}: {requestLocale?: string}) => {
  const resolvedLocale: AppLocale = isSupportedLocale(requestLocale) ? (requestLocale as AppLocale) : defaultLocale

  try {
    const messages = (await import(`../messages/${resolvedLocale}.json`)).default
    return {locale: resolvedLocale, messages}
  } catch {
    const fallbackLocale: AppLocale = 'es'
    const messages = (await import(`../messages/${fallbackLocale}.json`)).default
    return {locale: fallbackLocale, messages}
  }
}

export default getRequestConfig


