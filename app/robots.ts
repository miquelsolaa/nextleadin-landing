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
          '/blog/',
          '/en/blog/',
          '/es/blog/',
          '/pricing/',
          '/en/pricing/',
          '/es/pricing/',
          '/contact/',
          '/en/contact/',
          '/es/contact/',
          '/faq/',
          '/en/faq/',
          '/es/faq/',
          '/compare/',
          '/en/compare/',
          '/es/compare/',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/out/',
          '/node_modules/',
          '/*.json$',
          '/*.js$',
          '/*.css$',
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
          '/blog/',
          '/en/blog/',
          '/es/blog/',
          '/pricing/',
          '/en/pricing/',
          '/es/pricing/',
          '/contact/',
          '/en/contact/',
          '/es/contact/',
          '/faq/',
          '/en/faq/',
          '/es/faq/',
          '/compare/',
          '/en/compare/',
          '/es/compare/',
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
          '/blog/',
          '/en/blog/',
          '/es/blog/',
          '/pricing/',
          '/en/pricing/',
          '/es/pricing/',
          '/contact/',
          '/en/contact/',
          '/es/contact/',
          '/faq/',
          '/en/faq/',
          '/es/faq/',
          '/compare/',
          '/en/compare/',
          '/es/compare/',
        ],
        disallow: ['/api/', '/admin/', '/_next/', '/out/', '/private/', '/temp/'],
        crawlDelay: 0,
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

