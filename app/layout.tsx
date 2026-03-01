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
  weight: ['400', '500', '600', '700'],
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
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
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="theme-color" content="#0284c7" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
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
