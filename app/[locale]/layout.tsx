import type {Metadata} from 'next'
import {NextIntlClientProvider} from 'next-intl'
import {notFound} from 'next/navigation'
import {locales, type AppLocale} from '@/i18n/routing'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollAnimation from '@/components/ScrollAnimation'
import SetHtmlLang from '@/components/SetHtmlLang'
import AIStructuredData from '@/components/AIStructuredData'
import { generateAIOptimizedMetadata } from '@/lib/seo-metadata'
import '../globals.css'

type Props = {
  children: React.ReactNode
  params: {locale: string}
}

function isValidLocale(locale: string): locale is AppLocale {
  return (locales as readonly string[]).includes(locale)
}

export function generateStaticParams() {
  return (locales as readonly string[]).map((l) => ({locale: l}))
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale: rawLocale} = await params
  const locale = isValidLocale(rawLocale) ? (rawLocale as AppLocale) : 'es'
  
  // Utilitzar la nova configuració SEO optimitzada per a AI
  return generateAIOptimizedMetadata('home', locale)
}

export default async function LocaleLayout({children, params}: {children: React.ReactNode, params: Promise<{locale: string}>}) {
  const {locale: localeParam} = await params
  if (!isValidLocale(localeParam)) notFound()

  // Carrega directa dels missatges per evitar dependència de configuració implícita
  const messages = (await import(`@/messages/${localeParam}.json`)).default

  // Breadcrumbs per a la pàgina d'inici
  const breadcrumbs = [
    { name: localeParam === 'ca' ? 'Inici' : localeParam === 'es' ? 'Inicio' : 'Home', url: 'https://nextleadin.com' }
  ]

  return (
    <NextIntlClientProvider messages={messages} locale={localeParam}>
      <SetHtmlLang locale={localeParam} />
      <AIStructuredData 
        page="home" 
        locale={localeParam as AppLocale} 
        breadcrumbs={breadcrumbs}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ScrollAnimation />
      </div>
    </NextIntlClientProvider>
  )
}


