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
    default: 'LeadGen IA - Generació de leads hipersegmentats amb IA',
    template: '%s | LeadGen IA'
  },
  description: 'Genera leads qualificats per zona i sector i prepara trucades amb informes intel·ligents creats per IA. Més qualitat, menys temps perdut.',
  keywords: [
    'generació de leads',
    'intel·ligència artificial',
    'segmentació geogràfica',
    'qualificació de leads',
    'vendes B2B',
    'equip comercial'
  ],
  authors: [{ name: 'LeadGen IA Team' }],
  creator: 'LeadGen IA',
  publisher: 'LeadGen IA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://leadgen-ia.com'),
  alternates: {
    canonical: '/',
    languages: {
      'ca-ES': '/ca',
      'es-ES': '/es',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ca_ES',
    url: 'https://leadgen-ia.com',
    title: 'LeadGen IA - Generació de leads hipersegmentats amb IA',
    description: 'Segmentació precisa per zona i sector i informes amb IA per vendre més.',
    siteName: 'LeadGen IA',
    images: [
      {
        url: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/crm-dashboard.png',
        width: 1292,
        height: 1012,
        alt: 'LeadGen IA Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeadGen IA - Generació de leads amb IA',
    description: 'Genera leads qualificats i prepara trucades amb informes per IA.',
    images: ['https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/crm-dashboard.png'],
    creator: '@leadgenia',
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
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
