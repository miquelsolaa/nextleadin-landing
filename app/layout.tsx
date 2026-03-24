import type { Metadata } from 'next'
import './globals.css'
import { Syne, DM_Sans } from 'next/font/google'
import { generateAIOptimizedMetadata } from '@/lib/seo-metadata'
import { cookies } from 'next/headers'

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value
  const lang = cookieLocale === 'ca' || cookieLocale === 'en' || cookieLocale === 'es' ? cookieLocale : 'es'

  return (
    <html lang={lang} className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="theme-color" content="#00B359" />
      </head>
      <body className={`${dmSans.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
