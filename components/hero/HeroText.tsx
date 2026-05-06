import { heroTexts } from './hero-texts'

interface HeroTextProps {
  locale: 'es' | 'ca' | 'en'
  children?: React.ReactNode
}

export default function HeroText({ locale, children }: HeroTextProps) {
  const t = heroTexts[locale] ?? heroTexts.es

  return (
    <>
      <div className="mb-6">
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-primary-700 bg-primary-50 border border-primary-100">
          {t.badge}
        </span>
      </div>

      {children}

      <p className="mb-4 text-xl font-medium text-gray-900 leading-snug max-w-lg">{t.tagline}</p>

      <div className="mb-8">
        <p className="text-lg text-gray-600 leading-relaxed max-w-lg">{t.description}</p>
      </div>

      <div className="mb-6 flex flex-wrap gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-primary-500 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>{t.trust1}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-primary-500 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>{t.trust3}</span>
        </div>
      </div>

      <p className="mb-8 text-sm text-gray-500 leading-relaxed max-w-lg border-l-2 border-primary-200 pl-4">
        {t.exposureNote}
      </p>
    </>
  )
}
