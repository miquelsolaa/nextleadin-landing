type GAEventParams = {
  category?: string
  label?: string
  value?: number
  [key: string]: unknown
}

const isBrowser = () => typeof window !== 'undefined'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''

let gaLoaded = false
let gaLoadPromise: Promise<void> | null = null

/** Carrega GA4 només quan l'usuari ha acceptat analytics (evita 148KB JS inicial). Retorna quan gtag està disponible. */
export const loadGAScript = (): Promise<void> => {
  if (!isBrowser()) return Promise.resolve()
  if (!GA_MEASUREMENT_ID) return Promise.resolve()
  if (gaLoadPromise) return gaLoadPromise
  const w = window as Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void }
  gaLoaded = true

  gaLoadPromise = new Promise<void>((resolve) => {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script)

    script.onload = () => {
      w.dataLayer = w.dataLayer || []
      const gtag = (...args: unknown[]) => { w.dataLayer!.push(args) }
      w.gtag = gtag
      gtag('js', new Date())
      gtag('consent', 'default', { analytics_storage: 'denied' })
      gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true })
      resolve()
    }
    script.onerror = () => resolve()
  })
  return gaLoadPromise
}

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

