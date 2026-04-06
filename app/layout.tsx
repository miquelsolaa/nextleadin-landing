import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Syne, DM_Sans } from 'next/font/google'
import { generateAIOptimizedMetadata } from '@/lib/seo-metadata'
import { headers } from 'next/headers'

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
  weight: ['500', '600', '700', '800'],
  adjustFontFallback: true,
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
  adjustFontFallback: true,
})

// Metadata per defecte (locale per defecte del projecte: es)
export const metadata: Metadata = generateAIOptimizedMetadata('home', 'es')

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#00B359',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headerList = await headers()
  const intlLocale = headerList.get('x-next-intl-locale')
  const lang =
    intlLocale === 'ca' || intlLocale === 'en' || intlLocale === 'es' ? intlLocale : 'es'

  return (
    <html lang={lang} className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/images/logo/logo-icon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/images/logo/logo-icon.svg" />
      </head>
      <body className={`${dmSans.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
