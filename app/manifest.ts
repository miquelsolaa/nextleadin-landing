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
    theme_color: '#00B359',
    orientation: 'portrait-primary',
    categories: ['business', 'productivity', 'sales', 'marketing', 'utilities'],
    icons: [
      {
        src: '/images/logo/logo-icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/images/logo/logo-icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/images/logo/logo-icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
      {
        src: '/images/logo/logo-icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
      {
        src: '/images/logo/logo-icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      // Icons addicionals per millor suport PWA
      {
        src: '/images/logo/logo-icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
    screenshots: [
      {
        src: '/images/hero/hero.svg',
        sizes: '1200x630',
        type: 'image/svg+xml',
        form_factor: 'wide',
        label: 'NextLeadIn Dashboard',
      },
      {
        src: '/images/hero/hero.svg',
        sizes: '750x1334',
        type: 'image/svg+xml',
        form_factor: 'narrow',
        label: 'NextLeadIn Mobile',
      },
      // Screenshots addicionals per millor presentació PWA
      {
        src: '/images/hero/hero.svg',
        sizes: '1280x720',
        type: 'image/svg+xml',
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
            src: '/images/logo/logo-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
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
            src: '/images/logo/logo-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
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
            src: '/images/logo/logo-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
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
            src: '/images/logo/logo-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
  }
}
