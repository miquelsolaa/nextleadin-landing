import { MetadataRoute } from 'next'
import {
  getAllPostSlugs,
  getBlogPostUrl,
  getAllPosts,
  getAllCategories,
  getAllTags,
  type Locale
} from '@/lib/blog'
import { getTagSlug } from '@/lib/blog-tags'
import { getAllComparisonSlugs, getComparisonUrl } from '@/lib/comparisons'
import { getAllIndustrySlugs } from '@/lib/industries'
import { getAllSolutionSlugs } from '@/lib/solutions'
import { getAllFeatureSlugs } from '@/lib/features'
import { getAllLocationSlugs } from '@/lib/locations'

export const dynamic = 'force-static'

/** Helper per a l'URL de categoria/tag del blog segons locale (consistent amb blog-utils) */
function getBlogArchiveUrl(
  type: 'category' | 'tag',
  slug: string,
  locale: Locale
): string {
  const path = `/blog/${type}/${slug}`
  if (locale === 'ca') return path
  return `/${locale}${path}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nextleadin.com'
  const allPostSlugs = getAllPostSlugs()
  const allComparisonSlugs = getAllComparisonSlugs()
  const locales: Locale[] = ['ca', 'es', 'en']

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
    { path: '/compare', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/industries', priority: 0.75, changeFrequency: 'weekly' as const },
    { path: '/solutions', priority: 0.75, changeFrequency: 'weekly' as const },
    { path: '/features', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/locations', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/resources', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/resources/roi-calculator', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.2, changeFrequency: 'yearly' as const },
    { path: '/terms-and-conditions', priority: 0.2, changeFrequency: 'yearly' as const },
    { path: '/cookie-policy', priority: 0.2, changeFrequency: 'yearly' as const },
    { path: '/mwc2026', priority: 0.85, changeFrequency: 'weekly' as const },
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

  const comparisonUrls = allComparisonSlugs.map(({ slug, locale }) => ({
    url: `${baseUrl}${getComparisonUrl(slug, locale as Locale)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Pàgines de categories del blog (per idioma)
  const categoryUrls: MetadataRoute.Sitemap = []
  const seenCategories = new Set<string>()
  for (const locale of locales) {
    const categories = getAllCategories(locale)
    for (const cat of categories) {
      const slug = encodeURIComponent(cat.name.toLowerCase())
      const key = `${locale}:${slug}`
      if (seenCategories.has(key)) continue
      seenCategories.add(key)
      categoryUrls.push({
        url: `${baseUrl}${getBlogArchiveUrl('category', slug, locale)}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.65,
      })
    }
  }

  // Pàgines de tags del blog (per idioma)
  const tagUrls: MetadataRoute.Sitemap = []
  const seenTags = new Set<string>()
  for (const locale of locales) {
    const tags = getAllTags(locale)
    for (const tag of tags) {
      const slug = getTagSlug(tag)
      const key = `${locale}:${slug}`
      if (seenTags.has(key)) continue
      seenTags.add(key)
      tagUrls.push({
        url: `${baseUrl}${getBlogArchiveUrl('tag', slug, locale)}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.65,
      })
    }
  }

  // Industries URLs (multiidioma)
  const allIndustrySlugs = getAllIndustrySlugs()
  const industryUrls = allIndustrySlugs.map(({ slug, locale }) => {
    const localePath = locale === 'ca' ? '' : `/${locale}`
    return {
      url: `${baseUrl}${localePath}/industries/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  })

  // Solutions URLs (multiidioma)
  const allSolutionSlugsData = getAllSolutionSlugs()
  const solutionUrls = allSolutionSlugsData.map(({ slug, locale }) => {
    const localePath = locale === 'ca' ? '' : `/${locale}`
    return {
      url: `${baseUrl}${localePath}/solutions/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  })

  // Features URLs (multiidioma)
  const allFeatureSlugsData = getAllFeatureSlugs()
  const featureUrls = locales.flatMap(locale => {
    const localePath = locale === 'ca' ? '' : `/${locale}`
    return allFeatureSlugsData.map(slug => ({
      url: `${baseUrl}${localePath}/features/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    }))
  })

  // Locations URLs (multiidioma)
  const allLocationSlugsData = getAllLocationSlugs()
  const locationUrls = allLocationSlugsData.map(({ slug, locale }) => {
    const localePath = locale === 'ca' ? '' : `/${locale}`
    return {
      url: `${baseUrl}${localePath}/locations/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    }
  })

  return [
    ...staticUrls,
    ...blogUrls,
    ...categoryUrls,
    ...tagUrls,
    ...comparisonUrls,
    ...industryUrls,
    ...solutionUrls,
    ...featureUrls,
    ...locationUrls,
  ]
}

