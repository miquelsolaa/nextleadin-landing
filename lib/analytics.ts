type GAEventParams = {
  category?: string
  label?: string
  value?: number
  [key: string]: unknown
}

const isBrowser = () => typeof window !== 'undefined'

const getGtag = (): ((...args: unknown[]) => void) | null => {
  if (!isBrowser()) return null
  const w = window as any
  if (!w.gtag || typeof w.gtag !== 'function') return null
  return w.gtag
}

export const trackEvent = (action: string, params: GAEventParams = {}): void => {
  const gtag = getGtag()
  if (!gtag) return

  gtag('event', action, params)
}

export const trackContactSubmit = (locale: string): void => {
  trackEvent('contact_submit', {
    category: 'engagement',
    label: locale,
  })
}

export const trackRegisterStart = (variant: 'primary' | 'secondary', locale: string): void => {
  trackEvent('register_start', {
    category: 'engagement',
    label: `${variant}_${locale}`,
  })
}

