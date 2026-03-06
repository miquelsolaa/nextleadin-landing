import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://nextleadin.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/en/',
          '/es/',
          '/ca/',
          '/blog/',
          '/pricing/',
          '/contact/',
          '/faq/',
          '/compare/',
          '/industries/',
          '/solutions/',
          '/features/',
          '/locations/',
          '/resources/',
          '/terms-and-conditions/',
          '/privacy-policy/',
          '/cookie-policy/',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/out/',
          '/node_modules/',
          '/*.json$',
          '/*.map$',
          '/private/',
          '/temp/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/en/',
          '/es/',
          '/ca/',
          '/blog/',
          '/pricing/',
          '/contact/',
          '/faq/',
          '/compare/',
          '/industries/',
          '/solutions/',
          '/features/',
          '/locations/',
          '/resources/',
          '/terms-and-conditions/',
          '/privacy-policy/',
          '/cookie-policy/',
          '/_next/static/',
        ],
        disallow: ['/api/', '/admin/', '/_next/', '/out/', '/private/', '/temp/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: [
          '/',
          '/en/',
          '/es/',
          '/ca/',
          '/blog/',
          '/pricing/',
          '/contact/',
          '/faq/',
          '/compare/',
          '/industries/',
          '/solutions/',
          '/features/',
          '/locations/',
          '/resources/',
          '/terms-and-conditions/',
          '/privacy-policy/',
          '/cookie-policy/',
          '/_next/static/',
        ],
        disallow: ['/api/', '/admin/', '/_next/', '/out/', '/private/', '/temp/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'GPTBot',
        allow: ['/'],
        disallow: ['/api/', '/admin/', '/_next/', '/out/', '/private/', '/temp/'],
      },
      {
        userAgent: 'Claude-Web',
        allow: ['/'],
        disallow: ['/api/', '/admin/', '/_next/', '/out/', '/private/', '/temp/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: ['/'],
        disallow: ['/api/', '/admin/', '/_next/', '/out/', '/private/', '/temp/'],
      },
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
      {
        userAgent: 'DotBot',
        disallow: '/',
      },
      {
        userAgent: 'SemrushBot',
        disallow: '/',
      },
      {
        userAgent: 'MajesticSEO',
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}

