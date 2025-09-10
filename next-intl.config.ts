const locales = ['es', 'en', 'ca'] as const
const defaultLocale = 'ca' as const

export default async function getRequestConfig({locale}: {locale?: string}) {
  const isSupported = typeof locale === 'string' && locales.includes(locale as any)
  const resolved = isSupported ? (locale as typeof locales[number]) : defaultLocale
  try {
    const messages = (await import(`./messages/${resolved}.json`)).default
    return {locale: resolved, messages}
  } catch {
    const fallback = 'es'
    const messages = (await import(`./messages/${fallback}.json`)).default
    return {locale: fallback, messages}
  }
}


