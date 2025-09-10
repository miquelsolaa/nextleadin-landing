import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { generateAIOptimizedMetadata } from '@/lib/seo-metadata'

const inter = Inter({subsets: ['latin'], display: 'swap', variable: '--font-inter'})

// Metadata per defecte optimitzat per a AI
export const metadata: Metadata = generateAIOptimizedMetadata('home', 'ca')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ca" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
