import type { Metadata } from 'next'
import './globals.css'
import { Syne, DM_Sans, Geist } from 'next/font/google'
import { generateAIOptimizedMetadata } from '@/lib/seo-metadata'
import { headers } from 'next/headers'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
  const headerList = await headers()
  const intlLocale = headerList.get('x-next-intl-locale')
  const lang =
    intlLocale === 'ca' || intlLocale === 'en' || intlLocale === 'es' ? intlLocale : 'es'

  return (
    <html lang={lang} className={cn(syne.variable, dmSans.variable, "font-sans", geist.variable)}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="theme-color" content="#00B359" />
      </head>
      <body className={`${dmSans.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
