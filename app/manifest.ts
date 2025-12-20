import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NextLeadIn — Generació de leads amb IA',
    short_name: 'NextLeadIn',
    description: 'Troba leads per negoci, ubicació i paraules clau. Rep informes d\'IA per preparar trucades.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0284c7',
    orientation: 'portrait-primary',
    categories: ['business', 'productivity', 'sales', 'marketing', 'utilities'],
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
      // Icons addicionals per millor suport PWA
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
        purpose: 'any',
      },
    ],
    screenshots: [
      {
        src: '/images/hero/hero.png',
        sizes: '1200x630',
        type: 'image/png',
        form_factor: 'wide',
        label: 'NextLeadIn Dashboard',
      },
      {
        src: '/images/hero/hero.png',
        sizes: '750x1334',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'NextLeadIn Mobile',
      },
      // Screenshots addicionals per millor presentació PWA
      {
        src: '/images/hero/hero.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'NextLeadIn Platform Overview',
      },
    ],
    shortcuts: [
      {
        name: 'Preus',
        short_name: 'Preus',
        description: 'Veure plans de preus i funcionalitats',
        url: '/pricing',
        icons: [
          {
            src: '/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
        ],
      },
      {
        name: 'Contacte',
        short_name: 'Contacte',
        description: 'Contactar amb el nostre equip de suport',
        url: '/contact',
        icons: [
          {
            src: '/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
        ],
      },
      {
        name: 'Blog',
        short_name: 'Blog',
        description: 'Llegeix articles sobre generació de leads i IA',
        url: '/blog',
        icons: [
          {
            src: '/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
        ],
      },
      {
        name: 'FAQ',
        short_name: 'FAQ',
        description: 'Preguntes freqüents sobre la plataforma',
        url: '/faq',
        icons: [
          {
            src: '/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
        ],
      },
    ],
  }
}
