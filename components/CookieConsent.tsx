'use client'

import { useEffect, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { useTranslations } from 'next-intl'
import type { AppLocale } from '@/i18n/routing'
import { loadGAScript } from '@/lib/analytics'
import './cookieconsent-custom.css'

import 'vanilla-cookieconsent/dist/cookieconsent.css'

export default function CookieConsent() {
  const locale = useLocale() as AppLocale
  const t = useTranslations('cookieConsent')

  const translations = useMemo(() => {
    const cookiePolicyUrl = locale === 'es' ? '/cookie-policy' : `/${locale}/cookie-policy`
    
    const linkTexts: Record<AppLocale, string> = {
      ca: 'política de cookies',
      es: 'política de cookies',
      en: 'cookie policy'
    }
    
    const cookiePolicyLink = `<a href="${cookiePolicyUrl}" class="cc-link">${linkTexts[locale]}</a>`
    
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
    if (typeof window === 'undefined') return

    const initCookieConsent = async () => {
      try {
        const CookieConsentLib = await import('vanilla-cookieconsent')
        
        const updateGtagConsent = async (granted: boolean) => {
          if (granted) {
            await loadGAScript()
            const w = window as Window & { gtag?: (...args: unknown[]) => void }
            if (!w.gtag) return
            w.gtag('consent', 'update', { analytics_storage: 'granted' })
            const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-Y07BPPDXKF'
            w.gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href,
              page_path: window.location.pathname,
              send_to: GA_ID,
            })
          } else {
            const w = window as Window & { gtag?: (...args: unknown[]) => void }
            if (w.gtag) w.gtag('consent', 'update', { analytics_storage: 'denied' })
          }
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
              autoClear: {
                cookies: [
                  { name: /^_ga/ },
                  { name: '_gid' },
                ],
              },
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
              layout: 'box' as const,
              position: 'bottom right' as const,
              flipButtons: false,
              equalWeightButtons: false,
            },
            preferencesModal: {
              layout: 'box' as const,
              position: 'right' as const,
              flipButtons: false,
              equalWeightButtons: false,
            },
          },
          cookie: {
            name: 'cc_cookie',
            expiresAfterDays: 365,
            domain: window.location.hostname,
            sameSite: 'Lax' as const,
            secure: window.location.protocol === 'https:',
          },
          onFirstConsent: ({ cookie }: { cookie: { categories: string[] } }) => {
            if (process.env.NODE_ENV === 'development') {
              console.log('First consent:', cookie.categories)
            }
            const hasAnalytics = Array.isArray(cookie.categories) && cookie.categories.includes('analytics')
            updateGtagConsent(hasAnalytics)
          },
          onConsent: ({ cookie }: { cookie: { categories: string[] } }) => {
            if (process.env.NODE_ENV === 'development') {
              console.log('On consent:', cookie.categories)
            }
            const hasAnalytics = Array.isArray(cookie.categories) && cookie.categories.includes('analytics')
            updateGtagConsent(hasAnalytics)
          },
          onChange: ({ changedCategories }: { changedCategories: string[] }) => {
            if (process.env.NODE_ENV === 'development') {
              console.log('Changed categories:', changedCategories)
            }
            if (changedCategories.includes('analytics')) {
              const accepted = CookieConsentLib.acceptedCategory('analytics')
              updateGtagConsent(accepted)
            }
          },
        }

        CookieConsentLib.run(config)
        // Usuari que ja havia acceptat analytics (returning visitor)
        if (CookieConsentLib.acceptedCategory('analytics')) {
          updateGtagConsent(true)
        }
        if (process.env.NODE_ENV === 'development') {
          console.log('CookieConsent initialized successfully')
        }
      } catch (error) {
        console.error('Error loading CookieConsent:', error)
      }
    }

    initCookieConsent()
  }, [locale, translations])

  return null
}

