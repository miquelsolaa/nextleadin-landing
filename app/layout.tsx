import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollAnimation from '@/components/ScrollAnimation'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'NextLeadIn — Generació de leads hipersegmentats amb IA',
    template: '%s | NextLeadIn'
  },
  description: 'Plataforma per trobar leads per tipus de negoci, zona (ciutat/país) i paraules clau, amb informes d’IA per preparar trucades i tancar més oportunitats.',
  keywords: [
    'generació de leads',
    'intel·ligència artificial',
    'segmentació geogràfica',
    'qualificació de leads',
    'vendes B2B',
    'equip comercial',
    'prospectar empreses',
    'buscar clients potencials',
    'enriquiment de dades amb IA'
  ],
  authors: [{ name: 'NextLeadIn Team' }],
  creator: 'NextLeadIn',
  publisher: 'NextLeadIn',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nextleadin.com'),
  alternates: {
    canonical: 'https://nextleadin.com/',
    languages: {
      'ca-ES': 'https://nextleadin.com/',
      'es-ES': 'https://nextleadin.com/es',
      'en-US': 'https://nextleadin.com/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ca_ES',
    url: 'https://nextleadin.com',
    title: 'NextLeadIn — Generació de leads hipersegmentats amb IA',
    description: 'Troba leads per tipus de negoci, ubicació i paraules clau. Rep dossiers amb IA per preparar trucades.',
    siteName: 'NextLeadIn',
    images: [
      {
        url: 'https://nextleadin.com/og/nextleadin-og.jpg',
        width: 1200,
        height: 630,
        alt: 'NextLeadIn — Plataforma de generació de leads amb IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextLeadIn — Generació de leads amb IA',
    description: 'Troba clients potencials per zona i sector amb informes d’IA per convertir millor.',
    images: ['https://nextleadin.com/og/nextleadin-og.jpg'],
    creator: '@nextleadin',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',
    yandex: '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ca" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ScrollAnimation />
        </div>
      </body>
    </html>
  )
}
