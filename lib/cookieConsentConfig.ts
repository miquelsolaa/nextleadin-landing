import type { Locale } from '@/i18n/routing'

export interface CookieConsentTranslations {
  consentModal: {
    title: string
    description: string
    acceptAllBtn: string
    acceptNecessaryBtn: string
    showPreferencesBtn: string
  }
  preferencesModal: {
    title: string
    acceptAllBtn: string
    acceptNecessaryBtn: string
    savePreferencesBtn: string
    closeIconLabel: string
    sections: Array<{
      title: string
      description: string
    }>
  }
  categories: {
    necessary: {
      title: string
      description: string
      enabled: boolean
      readOnly: boolean
    }
    analytics: {
      title: string
      description: string
      enabled: boolean
      readOnly: boolean
    }
  }
}

export const getCookieConsentConfig = (
  locale: Locale,
  translations: CookieConsentTranslations
) => {
  const primaryColor = '#00CC61'
  const secondaryColor = '#004050'
  const accentColor = '#DFF9EB'

  return {
    guiOptions: {
      consentModal: {
        layout: 'box',
        position: 'bottom right',
        flipButtons: false,
        equalWeightButtons: false,
      },
      preferencesModal: {
        layout: 'box',
        position: 'right',
        flipButtons: false,
        equalWeightButtons: false,
      },
    },
    categories: {
      necessary: {
        enabled: true,
        readOnly: true,
      },
      analytics: {
        enabled: false,
        readOnly: false,
      },
    },
    language: {
      default: locale,
      translations: {
        [locale]: translations,
      },
    },
    theme: {
      light: {
        consentModal: {
          layoutOptions: {
            primaryButtonPosition: 'right',
          },
        },
        primaryButton: {
          backgroundColor: primaryColor,
          textColor: '#fff',
          hoverBackgroundColor: '#00B359',
        },
        secondaryButton: {
          backgroundColor: 'transparent',
          textColor: secondaryColor,
          borderColor: secondaryColor,
          hoverBackgroundColor: accentColor,
        },
      },
    },
    cookie: {
      expiresAfterDays: 365,
      domain: window.location.hostname,
      sameSite: 'Lax' as const,
      secure: window.location.protocol === 'https:',
    },
    onFirstConsent: ({ cookie }: { cookie: any }) => {
      // Gestionar quan es dona el primer consentiment
      if (cookie.categories.analytics) {
        // Inicialitzar Google Analytics o altres tools analítics
        console.log('Analytics cookies enabled')
      }
    },
    onConsent: ({ cookie }: { cookie: any }) => {
      // Gestionar quan hi ha un canvi en el consentiment
      if (cookie.categories.analytics) {
        // Activar analytics
        console.log('Analytics cookies enabled')
      } else {
        // Desactivar analytics
        console.log('Analytics cookies disabled')
      }
    },
  }
}

