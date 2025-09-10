import {notFound} from 'next/navigation'
import {defaultLocale, locales, type AppLocale} from './routing'

function isSupportedLocale(locale: string | undefined | null): locale is AppLocale {
  return !!locale && (locales as readonly string[]).includes(locale)
}

const getRequestConfig = async ({requestLocale}: {requestLocale?: string}) => {
  console.log('🔍 Request config - Input locale:', requestLocale)
  
  // Utilitzar el locale passat com a paràmetre o el per defecte
  const resolvedLocale: AppLocale = isSupportedLocale(requestLocale) ? (requestLocale as AppLocale) : defaultLocale
  
  console.log('🔍 Request config - Resolved locale:', resolvedLocale)

  try {
    const messages = (await import(`../messages/${resolvedLocale}.json`)).default
    console.log('🔍 Request config - Loaded messages for:', resolvedLocale)
    return {locale: resolvedLocale, messages}
  } catch (error) {
    console.log('🔍 Request config - Error loading messages, using fallback')
    // Fallback robust a espanyol
    const fallbackLocale: AppLocale = 'es'
    const messages = (await import(`../messages/${fallbackLocale}.json`)).default
    return {locale: fallbackLocale, messages}
  }
}

export default getRequestConfig


