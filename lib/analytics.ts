type GAEventParams = {
  category?: string
  label?: string
  value?: number
  [key: string]: unknown
}

const isBrowser = () => typeof window !== 'undefined'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''

let gaLoadPromise: Promise<void> | null = null

type GtagWindow = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
}

/** Carrega GA4 només quan l'usuari ha acceptat analytics (evita ~150KB JS inicial). */
export const loadGAScript = (): Promise<void> => {
  if (!isBrowser()) return Promise.resolve()
  if (!GA_MEASUREMENT_ID) return Promise.resolve()
  if (gaLoadPromise) return gaLoadPromise

  const w = window as GtagWindow
  w.dataLayer = w.dataLayer || []
  if (!w.gtag) {
    w.gtag = function gtag() {
      w.dataLayer!.push(arguments)
    } as (...args: unknown[]) => void
  }

  w.gtag('consent', 'default', {
    analytics_storage: 'denied',
    wait_for_update: 500,
  })

  gaLoadPromise = new Promise<void>((resolve) => {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`
    script.onload = () => {
      const gtag = w.gtag
      if (typeof gtag === 'function') {
        gtag('js', new Date())
        gtag('config', GA_MEASUREMENT_ID, { send_page_view: false })
      }
      resolve()
    }
    script.onerror = () => resolve()
    document.head.appendChild(script)
  })

  return gaLoadPromise
}

const getGtag = (): ((...args: unknown[]) => void) | null => {
  if (!isBrowser()) return null
  const w = window as GtagWindow
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

export const trackRegisterStart = (variant: string, locale: string): void => {
  trackEvent('register_start', {
    category: 'engagement',
    label: `${variant}_${locale}`,
  })
}
