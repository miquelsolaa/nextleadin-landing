import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import type { AppLocale } from '@/i18n/routing'

export type LocationLocale = AppLocale

const locationsDirectory = path.join(process.cwd(), 'content/locations')

export interface LocationMeta {
  slug: string
  title: string
  description: string
  heroTitle: string
  heroSubtitle: string
  cityName: string
  region: string
  keywords: string[]
  image: string
  published: boolean
}

export interface LocationStat {
  value: string
  label: string
}

export interface LocationSector {
  name: string
  count: string
  icon: string
}

export interface LocationPost extends LocationMeta {
  content: string
  contentHtml: string
  stats: LocationStat[]
  topSectors: LocationSector[]
  faq?: Array<{ question: string; answer: string }>
  cta?: {
    title: string
    description: string
    primaryLabel: string
    primaryHref: string
    secondaryLabel?: string
    secondaryHref?: string
  }
}

function getLocationsDirectory(locale: LocationLocale): string {
  return path.join(locationsDirectory, locale)
}

function normalizeSlug(slug: string): string {
  let normalized = decodeURIComponent(slug)
  normalized = normalized.replace(/·/g, '-')
  normalized = normalized.replace(/\s+/g, '-')
  normalized = normalized.replace(/[^\w\-]/g, '')
  normalized = normalized.replace(/-+/g, '-')
  normalized = normalized.replace(/^-+|-+$/g, '')
  return normalized.toLowerCase()
}

export function locationExists(slug: string, locale: LocationLocale): boolean {
  try {
    const normalizedSlug = normalizeSlug(slug)
    const baseDir = getLocationsDirectory(locale)
    const fullPath = path.join(baseDir, `${normalizedSlug}.md`)
    return fs.existsSync(fullPath)
  } catch {
    return false
  }
}

export async function getLocationData(
  slug: string,
  locale: LocationLocale
): Promise<LocationPost | null> {
  try {
    const normalizedSlug = normalizeSlug(slug)
    const baseDir = getLocationsDirectory(locale)
    const fullPath = path.join(baseDir, `${normalizedSlug}.md`)

    if (!fs.existsSync(fullPath) && locale !== 'ca') {
      return await getLocationData(slug, 'ca')
    }

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkBreaks)
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(matterResult.content)

    const contentHtml = processedContent.toString()

    return {
      slug: normalizedSlug,
      content: matterResult.content,
      contentHtml,
      stats: matterResult.data.stats || [],
      topSectors: matterResult.data.topSectors || [],
      ...matterResult.data,
    } as LocationPost
  } catch (error) {
    console.error(`Error reading location ${slug} in locale ${locale}:`, error)
    if (locale !== 'ca') {
      return await getLocationData(slug, 'ca')
    }
    return null
  }
}

export function getAllLocations(locale?: LocationLocale): LocationMeta[] {
  try {
    const targetLocale = locale || 'ca'
    const baseDir = getLocationsDirectory(targetLocale)
    if (!fs.existsSync(baseDir)) {
      return []
    }

    const fileNames = fs.readdirSync(baseDir)
    const allLocations = fileNames
      .filter((name) => name.endsWith('.md'))
      .map((fileName) => {
        const slug = normalizeSlug(fileName.replace(/\.md$/, ''))
        const fullPath = path.join(baseDir, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)
        return {
          slug,
          ...matterResult.data,
        } as LocationMeta
      })
      .filter((post) => post.published !== false)

    return allLocations
  } catch (error) {
    console.error('Error reading locations:', error)
    return []
  }
}

export function getAllLocationSlugs(
  locale?: LocationLocale
): Array<{ slug: string; locale: string }> {
  try {
    const locales: LocationLocale[] = locale ? [locale] : ['ca', 'en', 'es']
    const allSlugs: { slug: string; locale: string }[] = []

    locales.forEach((loc) => {
      const baseDir = getLocationsDirectory(loc)
      if (!fs.existsSync(baseDir)) {
        return
      }
      const fileNames = fs.readdirSync(baseDir)
      fileNames
        .filter((name) => name.endsWith('.md'))
        .forEach((fileName) => {
          const slug = normalizeSlug(fileName.replace(/\.md$/, ''))
          allSlugs.push({ slug, locale: loc })
        })
    })

    return allSlugs
  } catch (error) {
    console.error('Error reading location slugs:', error)
    return []
  }
}

export function getLocationUrl(slug: string, locale: LocationLocale): string {
  if (locale === 'es') {
    return `/locations/${normalizeSlug(slug)}`
  }
  return `/${locale}/locations/${normalizeSlug(slug)}`
}
