'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import { getBlogPostUrl, type Locale } from '@/lib/blog-utils'
import { Globe } from 'lucide-react'

interface LanguageAvailabilityProps {
  slug: string
  availableLocales: Locale[]
}

export default function LanguageAvailability({ slug, availableLocales }: LanguageAvailabilityProps) {
  const currentLocale = useLocale() as Locale

  // Si només hi ha un idioma disponible, no mostrar el component
  if (availableLocales.length <= 1) {
    return null
  }

  // Funció per generar l'URL correcta segons l'idioma (català sense prefix)
  const getLocaleUrl = (locale: Locale) => {
    return getBlogPostUrl(slug, locale)
  }

  // Funció per obtenir el nom de l'idioma
  const getLocaleName = (locale: Locale): string => {
    const names: Record<Locale, string> = {
      ca: 'Català',
      es: 'Español',
      en: 'English'
    }
    return names[locale]
  }

  return (
    <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <div className="flex items-center gap-2 mb-3">
        <Globe className="w-5 h-5 text-gray-600" />
        <h3 className="text-sm font-semibold text-gray-900">
          Disponible en:
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {availableLocales.map((locale) => {
          const isActive = locale === currentLocale
          return (
            <Link
              key={locale}
              href={getLocaleUrl(locale)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {getLocaleName(locale)}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

