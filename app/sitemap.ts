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
import { getCategorySlug } from '@/lib/blog-categories'
import { getAllComparisonSlugs, getComparisonUrl } from '@/lib/comparisons'
import { getAllIndustrySlugs, industryExists } from '@/lib/industries'
import { getAllSolutionSlugs, solutionExists } from '@/lib/solutions'
import { getAllFeatureSlugs, featureExists } from '@/lib/features'
import { getAllLocationSlugs, locationExists } from '@/lib/locations'

export const dynamic = 'force-static'

/** Helper per a l'URL de categoria/tag del blog segons locale (consistent amb blog-utils, defaultLocale es) */
function getBlogArchiveUrl(
  type: 'category' | 'tag',
  slug: string,
  locale: Locale
): string {
  const path = `/blog/${type}/${slug}`
  if (locale === 'es') return path
  return `/${locale}${path}`
}

function getLocaleUrl(baseUrl: string, locale: Locale, path: string): string {
  const localePath = locale === 'es' ? '' : `/${locale}`
  return `${baseUrl}${localePath}${path}`
}

function getAlternatesForPath(baseUrl: string, path: string, availableLocales: Locale[] = ['es', 'ca', 'en']) {
  const languages: Record<string, string> = {}

  if (availableLocales.includes('es')) languages['es-ES'] = getLocaleUrl(baseUrl, 'es', path)
  if (availableLocales.includes('ca')) languages['ca-ES'] = getLocaleUrl(baseUrl, 'ca', path)
  if (availableLocales.includes('en')) languages['en-US'] = getLocaleUrl(baseUrl, 'en', path)

  const xDefault = languages['es-ES'] ?? languages['ca-ES'] ?? languages['en-US']
  return xDefault ? { 'x-default': xDefault, ...languages } : languages
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nextleadin.com'
  const stableLastModified = new Date('2026-01-01T00:00:00.000Z')
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
    const postDate = post?.date ? new Date(post.date) : stableLastModified
    
    // Calcular priority basat en l'antiguitat del post (posts més recents tenen més priority) - SEO: prioritzar per indexació
    const daysSincePublished = Math.floor((Date.now() - postDate.getTime()) / (1000 * 60 * 60 * 24))
    const priority = daysSincePublished < 30 ? 0.9 : daysSincePublished < 90 ? 0.85 : 0.75
    
    return {
      url: `${baseUrl}${getBlogPostUrl(slug, locale as Locale)}`,
      lastModified: postDate,
      changeFrequency: 'monthly' as const,
      priority,
    }
  })

  // Canonical URLs: defaultLocale (es) has no prefix; /es/* redirects to /* so never include /es/
  const localePaths = ['', '/ca', '/en']
  
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
    { path: '/resources/cold-calling-scripts', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/resources/local-prospecting-guide', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.2, changeFrequency: 'yearly' as const },
    { path: '/terms-and-conditions', priority: 0.2, changeFrequency: 'yearly' as const },
    { path: '/cookie-policy', priority: 0.2, changeFrequency: 'yearly' as const },
    { path: '/mwc2026', priority: 0.85, changeFrequency: 'weekly' as const },
  ]

  // Generar URLs per a cada pàgina i idioma
  const staticUrls = pages.flatMap(page => 
    localePaths.map((localePath) => ({
      url: `${baseUrl}${localePath}${page.path}`,
      lastModified: stableLastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: getAlternatesForPath(baseUrl, page.path)
      }
    }))
  )

  const comparisonUrls = allComparisonSlugs.map(({ slug, locale }) => ({
    url: `${baseUrl}${getComparisonUrl(slug, locale as Locale)}`,
    lastModified: stableLastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    alternates: {
      languages: getAlternatesForPath(baseUrl, `/compare/${slug}`)
    }
  }))

  // Pàgines de categories del blog (per idioma)
  const categoryUrls: MetadataRoute.Sitemap = []
  const seenCategories = new Set<string>()
  const categoryLocaleMap = new Map<string, Locale[]>()
  for (const locale of locales) {
    const categories = getAllCategories(locale)
    for (const cat of categories) {
      const slug = getCategorySlug(cat.name)
      const current = categoryLocaleMap.get(slug) ?? []
      if (!current.includes(locale)) current.push(locale)
      categoryLocaleMap.set(slug, current)
    }
  }
  for (const locale of locales) {
    const categories = getAllCategories(locale)
    for (const cat of categories) {
      const slug = getCategorySlug(cat.name)
      const key = `${locale}:${slug}`
      if (seenCategories.has(key)) continue
      seenCategories.add(key)
      const availableLocales = categoryLocaleMap.get(slug) ?? [locale]
      categoryUrls.push({
        url: `${baseUrl}${getBlogArchiveUrl('category', slug, locale)}`,
        lastModified: stableLastModified,
        changeFrequency: 'weekly' as const,
        priority: 0.65,
        alternates: {
          languages: getAlternatesForPath(baseUrl, `/blog/category/${slug}`, availableLocales)
        }
      })
    }
  }

  // Pàgines de tags del blog (per idioma)
  const tagUrls: MetadataRoute.Sitemap = []
  const seenTags = new Set<string>()
  const tagLocaleMap = new Map<string, Locale[]>()
  for (const locale of locales) {
    const tags = getAllTags(locale)
    for (const tag of tags) {
      const slug = getTagSlug(tag)
      const current = tagLocaleMap.get(slug) ?? []
      if (!current.includes(locale)) current.push(locale)
      tagLocaleMap.set(slug, current)
    }
  }
  for (const locale of locales) {
    const tags = getAllTags(locale)
    for (const tag of tags) {
      const slug = getTagSlug(tag)
      const key = `${locale}:${slug}`
      if (seenTags.has(key)) continue
      seenTags.add(key)
      const availableLocales = tagLocaleMap.get(slug) ?? [locale]
      tagUrls.push({
        url: `${baseUrl}${getBlogArchiveUrl('tag', slug, locale)}`,
        lastModified: stableLastModified,
        changeFrequency: 'weekly' as const,
        priority: 0.65,
        alternates: {
          languages: getAlternatesForPath(baseUrl, `/blog/tag/${slug}`, availableLocales)
        }
      })
    }
  }

  // Industries URLs (multiidioma)
  const allIndustrySlugs = getAllIndustrySlugs()
  const industryUrls = allIndustrySlugs.map(({ slug, locale }) => {
    const localePath = locale === 'es' ? '' : `/${locale}`
    const availableLocales = locales.filter((loc) => industryExists(slug, loc))
    return {
      url: `${baseUrl}${localePath}/industries/${slug}`,
      lastModified: stableLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: getAlternatesForPath(baseUrl, `/industries/${slug}`, availableLocales)
      }
    }
  })

  // Solutions URLs (multiidioma)
  const allSolutionSlugsData = getAllSolutionSlugs()
  const solutionUrls = allSolutionSlugsData.map(({ slug, locale }) => {
    const localePath = locale === 'es' ? '' : `/${locale}`
    const availableLocales = locales.filter((loc) => solutionExists(slug, loc))
    return {
      url: `${baseUrl}${localePath}/solutions/${slug}`,
      lastModified: stableLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: getAlternatesForPath(baseUrl, `/solutions/${slug}`, availableLocales)
      }
    }
  })

  // Features URLs (multiidioma)
  const allFeatureSlugsData = getAllFeatureSlugs()
  const featureUrls = locales.flatMap(locale => {
    const localePath = locale === 'es' ? '' : `/${locale}`
    return allFeatureSlugsData
      .filter((slug) => featureExists(slug, locale))
      .map(slug => {
        const availableLocales = locales.filter((loc) => featureExists(slug, loc))
        return {
          url: `${baseUrl}${localePath}/features/${slug}`,
          lastModified: stableLastModified,
          changeFrequency: 'monthly' as const,
          priority: 0.75,
          alternates: {
            languages: getAlternatesForPath(baseUrl, `/features/${slug}`, availableLocales)
          }
        }
      })
  })

  // Locations URLs (multiidioma)
  const allLocationSlugsData = getAllLocationSlugs()
  const locationUrls = allLocationSlugsData.map(({ slug, locale }) => {
    const localePath = locale === 'es' ? '' : `/${locale}`
    const availableLocales = locales.filter((loc) => locationExists(slug, loc))
    return {
      url: `${baseUrl}${localePath}/locations/${slug}`,
      lastModified: stableLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.65,
      alternates: {
        languages: getAlternatesForPath(baseUrl, `/locations/${slug}`, availableLocales)
      }
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

