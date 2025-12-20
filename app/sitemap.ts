import { MetadataRoute } from 'next'
import { getAllPostSlugs, getBlogPostUrl, getAllPosts, type Locale } from '@/lib/blog'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nextleadin.com'
  const allPostSlugs = getAllPostSlugs()
  
  // Obtenir tots els posts amb les seves dates reals
  const allPosts = {
    ca: getAllPosts('ca'),
    es: getAllPosts('es'),
    en: getAllPosts('en')
  }

  // Generar URLs per als articles del blog amb dates reals
  const blogUrls = allPostSlugs.map(({ slug, locale }) => {
    const post = allPosts[locale as Locale]?.find(p => p.slug === slug)
    const postDate = post?.date ? new Date(post.date) : new Date()
    
    // Calcular priority basat en l'antiguitat del post (posts més recents tenen més priority)
    const daysSincePublished = Math.floor((Date.now() - postDate.getTime()) / (1000 * 60 * 60 * 24))
    const priority = daysSincePublished < 30 ? 0.8 : daysSincePublished < 90 ? 0.7 : 0.6
    
    return {
      url: `${baseUrl}${getBlogPostUrl(slug, locale as Locale)}`,
      lastModified: postDate,
      changeFrequency: 'monthly' as const,
      priority,
    }
  })

  // Generar URLs per a cada idioma
  const localePaths = [
    { locale: '', lang: 'ca-ES' },
    { locale: '/en', lang: 'en-US' },
    { locale: '/es', lang: 'es-ES' }
  ]
  
  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.2, changeFrequency: 'yearly' as const },
    { path: '/terms-and-conditions', priority: 0.2, changeFrequency: 'yearly' as const },
    { path: '/cookie-policy', priority: 0.2, changeFrequency: 'yearly' as const },
  ]

  // Generar URLs per a cada pàgina i idioma
  const staticUrls = pages.flatMap(page => 
    localePaths.map(({ locale }) => ({
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

