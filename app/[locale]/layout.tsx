import type {Metadata} from 'next'
import {NextIntlClientProvider} from 'next-intl'
import {notFound} from 'next/navigation'
import {locales, type AppLocale} from '@/i18n/routing'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollAnimation from '@/components/ScrollAnimation'
import SetHtmlLang from '@/components/SetHtmlLang'
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
  const baseUrl = new URL('https://nextleadin.com')

  const messages = (await import(`@/messages/${locale}.json`)).default as any
  const title = messages.metadata?.title ?? 'NextLeadIn'
  const description = messages.metadata?.description ?? 'NextLeadIn'
  const keywords = messages.metadata?.keywords?.split(',') ?? []

  const canonicalFor = (l: AppLocale) =>
    l === 'ca' ? `${baseUrl.origin}/` : `${baseUrl.origin}/${l}`
  const ogLocale = locale === 'ca' ? 'ca_ES' : locale === 'es' ? 'es_ES' : 'en_US'

  return {
    title: {
      default: title,
      template: `%s | NextLeadIn`
    },
    description,
    keywords,
    metadataBase: baseUrl,
    alternates: {
      canonical: canonicalFor(locale as AppLocale),
      languages: {
        'x-default': canonicalFor('es'),
        'ca-ES': canonicalFor('ca'),
        'es-ES': canonicalFor('es'),
        'en-US': canonicalFor('en')
      }
    },
    openGraph: {
      type: 'website',
      locale: ogLocale,
      url: canonicalFor(locale as AppLocale),
      title,
      description,
      siteName: 'NextLeadIn',
      images: [
        {
          url: '/images/logo/logo.png',
          alt: 'NextLeadIn logo'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/logo/logo.png'],
      creator: '@nextleadin'
    }
  }
}

import SeoJsonLd from '@/components/SeoJsonLd'

export default async function LocaleLayout({children, params}: {children: React.ReactNode, params: Promise<{locale: string}>}) {
  const {locale: localeParam} = await params
  if (!isValidLocale(localeParam)) notFound()

  // Carrega directa dels missatges per evitar dependència de configuració implícita
  const messages = (await import(`@/messages/${localeParam}.json`)).default

  const base = 'https://nextleadin.com'
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NextLeadIn',
    url: base,
    logo: `${base}/images/logo/logo.png`,
    description: (messages as any)?.metadata?.description,
    areaServed: ['ES', 'EU']
  }
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NextLeadIn',
    url: base,
    inLanguage: localeParam,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${base}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <NextIntlClientProvider messages={messages} locale={localeParam}>
      <SetHtmlLang locale={localeParam} />
      <SeoJsonLd data={[org, website]} />
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


