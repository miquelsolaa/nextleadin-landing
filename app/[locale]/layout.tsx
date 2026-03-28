import type {Metadata} from 'next'
import {NextIntlClientProvider} from 'next-intl'
import {setRequestLocale} from 'next-intl/server'
import {notFound} from 'next/navigation'
import {locales, type AppLocale} from '@/i18n/routing'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FooterSitemap from '@/components/FooterSitemap'
import LazyLayoutParts from '@/components/LazyLayoutParts'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

function isValidLocale(locale: string): locale is AppLocale {
  return (locales as readonly string[]).includes(locale)
}

export function generateStaticParams() {
  return (locales as readonly string[]).map((l) => ({locale: l}))
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  await params
  return {
    metadataBase: new URL('https://nextleadin.com'),
    title: {
      default: 'NextLeadIn',
      template: '%s | NextLeadIn',
    },
  }
}

export default async function LocaleLayout({children, params}: {children: React.ReactNode, params: Promise<{locale: string}>}) {
  const {locale: localeParam} = await params
  if (!isValidLocale(localeParam)) notFound()

  setRequestLocale(localeParam)

  // Carrega directa dels missatges per evitar dependència de configuració implícita
  const messages = (await import(`@/messages/${localeParam}.json`)).default

  return (
    <NextIntlClientProvider messages={messages} locale={localeParam}>
        <div className="min-h-screen flex flex-col min-w-0 w-full overflow-x-hidden">
          <a
            href="#main-content"
            className="skip-link"
          >
            {localeParam === 'ca' ? 'Salta al contingut' : localeParam === 'es' ? 'Saltar al contenido' : 'Skip to main content'}
          </a>
          <Header />
          <main id="main-content" className="flex-grow min-w-0 w-full overflow-x-hidden" tabIndex={-1}>
            {children}
          </main>
          <Footer>
            <FooterSitemap locale={localeParam as AppLocale} />
          </Footer>
        </div>
        <LazyLayoutParts />
    </NextIntlClientProvider>
  )
}


