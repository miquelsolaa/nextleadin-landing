import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { Syne, DM_Sans } from 'next/font/google'
import { generateAIOptimizedMetadata } from '@/lib/seo-metadata'

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

// GA4: ID principal per a aquesta propietat
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-Y07BPPDXKF'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="theme-color" content="#00B359" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${dmSans.className} antialiased`}>
        {children}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="ga4-init" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('consent', 'default', {
                  analytics_storage: 'denied'
                });
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  anonymize_ip: true
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
