import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { Inter } from 'next/font/google'
import { generateAIOptimizedMetadata } from '@/lib/seo-metadata'

const inter = Inter({
  subsets: ['latin'], 
  display: 'swap', 
  variable: '--font-inter',
  preload: true,
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
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                // Consent Mode v2: per defecte denegat fins que l'usuari accepti cookies
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
        {children}
      </body>
    </html>
  )
}
