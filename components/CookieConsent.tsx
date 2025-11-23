'use client'

import { useEffect, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { useTranslations } from 'next-intl'
import type { AppLocale } from '@/i18n/routing'
import './cookieconsent-custom.css'

// Importar estils de cookie consent
import 'vanilla-cookieconsent/dist/cookieconsent.css'

export default function CookieConsent() {
  const locale = useLocale() as AppLocale
  const t = useTranslations('cookieConsent')

  // Memoitzar les traduccions per evitar re-renders
  const translations = useMemo(() => {
    // Generar URL de la política de cookies segons l'idioma
    const cookiePolicyUrl = locale === 'es' ? '/cookie-policy' : `/${locale}/cookie-policy`
    
    // Textos per a l'enllaç segons l'idioma
    const linkTexts: Record<AppLocale, string> = {
      ca: 'política de cookies',
      es: 'política de cookies',
      en: 'cookie policy'
    }
    
    // Crear l'enllaç HTML
    const cookiePolicyLink = `<a href="${cookiePolicyUrl}" class="cc-link">${linkTexts[locale]}</a>`
    
    // Obtenir la descripció amb el placeholder substituït
    const description = t('consentModal.description', { 
      cookiePolicyLink: cookiePolicyLink 
    })
    
    return {
    consentModal: {
      title: t('consentModal.title'),
      description: description,
      acceptAllBtn: t('consentModal.acceptAllBtn'),
      acceptNecessaryBtn: t('consentModal.acceptNecessaryBtn'),
      showPreferencesBtn: t('consentModal.showPreferencesBtn'),
    },
    preferencesModal: {
      title: t('preferencesModal.title'),
      acceptAllBtn: t('preferencesModal.acceptAllBtn'),
      acceptNecessaryBtn: t('preferencesModal.acceptNecessaryBtn'),
      savePreferencesBtn: t('preferencesModal.savePreferencesBtn'),
      closeIconLabel: t('preferencesModal.closeIconLabel'),
      sections: [
        {
          title: t('preferencesModal.sections.0.title'),
          description: t('preferencesModal.sections.0.description'),
        },
        {
          title: t('preferencesModal.sections.1.title'),
          description: t('preferencesModal.sections.1.description'),
          linkedCategory: 'necessary',
        },
        {
          title: t('preferencesModal.sections.2.title'),
          description: t('preferencesModal.sections.2.description'),
          linkedCategory: 'analytics',
        },
      ],
    },
    }
  }, [t, locale])

  useEffect(() => {
    // Només executar al client
    if (typeof window === 'undefined') return

    const initCookieConsent = async () => {
      try {
        // Importar la biblioteca
        const cookieConsentModule = await import('vanilla-cookieconsent')
        
        // Funció per inicialitzar Google Analytics quan es dona consentiment
        const initAnalytics = () => {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            // Si ja tens Google Analytics configurat, activar-lo aquí
            console.log('Analytics initialized')
          }
        }

        // Funció per desactivar analytics
        const disableAnalytics = () => {
          // Implementar lògica per desactivar analytics
          console.log('Analytics disabled')
        }

        const config = {
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
          cookie: {
            expiresAfterDays: 365,
            domain: window.location.hostname,
            sameSite: 'Lax' as const,
            secure: window.location.protocol === 'https:',
          },
          theme: {
            light: {
              consentModal: {
                layoutOptions: {
                  primaryButtonPosition: 'right',
                },
              },
              primaryButton: {
                backgroundColor: '#00CC61',
                textColor: '#fff',
                hoverBackgroundColor: '#00B359',
              },
              secondaryButton: {
                backgroundColor: 'transparent',
                textColor: '#004050',
                borderColor: '#004050',
                hoverBackgroundColor: '#DFF9EB',
              },
            },
          },
          onFirstConsent: ({ cookie }: any) => {
            if (cookie.categories.analytics) {
              initAnalytics()
            }
          },
          onConsent: ({ cookie }: any) => {
            if (cookie.categories.analytics) {
              initAnalytics()
            } else {
              disableAnalytics()
            }
          },
          onModalReject: () => {
            disableAnalytics()
          },
        }

        // vanilla-cookieconsent pot exportar-se de diferents formes segons l'entorn
        // Provem diferents accés possibles
        let CookieConsent: any = null
        
        // Intentar accedir al mòdul de diferents maneres
        if ((cookieConsentModule as any).default) {
          CookieConsent = (cookieConsentModule as any).default
        } else if ((cookieConsentModule as any).CookieConsent) {
          CookieConsent = (cookieConsentModule as any).CookieConsent
        } else if ((cookieConsentModule as any).run) {
          // Si run està directament al mòdul
          CookieConsent = cookieConsentModule
        } else {
          CookieConsent = cookieConsentModule
        }
        
        // Verificar i executar run
        if (CookieConsent && typeof CookieConsent.run === 'function') {
          CookieConsent.run(config)
        } else {
          // Log per debug - mostrar estructura del mòdul
          console.warn('CookieConsent structure:', {
            hasDefault: !!(cookieConsentModule as any).default,
            hasCookieConsent: !!(cookieConsentModule as any).CookieConsent,
            hasRun: !!(cookieConsentModule as any).run,
            keys: Object.keys(cookieConsentModule),
            moduleType: typeof cookieConsentModule
          })
          console.error('CookieConsent.run not found')
        }
      } catch (error) {
        console.error('Error loading CookieConsent:', error)
      }
    }

    initCookieConsent()
  }, [locale, translations])

  return null
}

