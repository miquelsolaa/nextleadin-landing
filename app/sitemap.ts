import { MetadataRoute } from 'next'
import { getAllPostSlugs, getBlogPostUrl, type Locale } from '@/lib/blog'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nextleadin.com'
  const allPostSlugs = getAllPostSlugs()

  // Generar URLs per als articles del blog amb els seus idiomes
  const blogUrls = allPostSlugs.map(({ slug, locale }) => ({
    url: `${baseUrl}${getBlogPostUrl(slug, locale as Locale)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Generar URLs per a cada idioma
  const locales = ['', '/en', '/es']
  const pages = [
    { path: '', priority: 1, changeFrequency: 'monthly' as const },
    { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/faq', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms-and-conditions', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/cookie-policy', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  // Generar URLs per a cada pàgina i idioma
  const staticUrls = pages.flatMap(page => 
    locales.map(locale => ({
      url: `${baseUrl}${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }))
  )

  return [
    ...staticUrls,
    ...blogUrls,
  ]
}
