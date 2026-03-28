import type { Metadata } from 'next'
import { locales, type AppLocale } from '@/i18n/routing'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

function isValidLocale(locale: string): locale is AppLocale {
  return (locales as readonly string[]).includes(locale)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params
  const locale = isValidLocale(rawLocale) ? (rawLocale as AppLocale) : 'en'

  const titles: Record<AppLocale, string> = {
    en: 'NextLeadIn @ MWC Barcelona 2026 | AI Lead Intelligence',
    ca: 'NextLeadIn @ MWC Barcelona 2026 | Intel·ligència de leads amb IA',
    es: 'NextLeadIn @ MWC Barcelona 2026 | Inteligencia de leads con IA',
  }

  const descriptions: Record<AppLocale, string> = {
    en: 'Turn any company into qualified leads in 24 hours. AI-powered lead intelligence. Scrape, enrich, score, qualify—automatically. Get your free analysis at MWC.',
    ca: 'Converteix qualsevol empresa en leads qualificats en 24 hores. Intel·ligència de leads amb IA. Rascar, enriquir, puntuar i qualificar—automàticament.',
    es: 'Convierte cualquier empresa en leads cualificados en 24 horas. Inteligencia de leads con IA. Scrape, enrich, score, qualify—automáticamente.',
  }

  return {
    title: titles[locale],
    description: descriptions[locale],
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
    },
  }
}

export default function MWC2026Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
