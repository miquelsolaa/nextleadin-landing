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

export type IndustryLocale = AppLocale

const industriesDirectory = path.join(process.cwd(), 'content/industries')

export interface IndustryMeta {
  slug: string
  title: string
  description: string
  heroTitle: string
  heroSubtitle: string
  keywords: string[]
  icon: string
  image: string
  published: boolean
}

export interface IndustryPainPoint {
  title: string
  description: string
}

export interface IndustrySolution {
  title: string
  description: string
  icon: string
}

export interface IndustryStat {
  value: string
  label: string
}

export interface IndustryPost extends IndustryMeta {
  content: string
  contentHtml: string
  painPoints: IndustryPainPoint[]
  solutions: IndustrySolution[]
  stats: IndustryStat[]
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

function getIndustriesDirectory(locale: IndustryLocale): string {
  return path.join(industriesDirectory, locale)
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

export function industryExists(slug: string, locale: IndustryLocale): boolean {
  try {
    const normalizedSlug = normalizeSlug(slug)
    const baseDir = getIndustriesDirectory(locale)
    const fullPath = path.join(baseDir, `${normalizedSlug}.md`)
    return fs.existsSync(fullPath)
  } catch {
    return false
  }
}

export async function getIndustryData(
  slug: string,
  locale: IndustryLocale
): Promise<IndustryPost | null> {
  try {
    const normalizedSlug = normalizeSlug(slug)
    const baseDir = getIndustriesDirectory(locale)
    const fullPath = path.join(baseDir, `${normalizedSlug}.md`)

    if (!fs.existsSync(fullPath) && locale !== 'ca') {
      return await getIndustryData(slug, 'ca')
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
      painPoints: matterResult.data.painPoints || [],
      solutions: matterResult.data.solutions || [],
      stats: matterResult.data.stats || [],
      ...matterResult.data,
    } as IndustryPost
  } catch (error) {
    console.error(`Error reading industry ${slug} in locale ${locale}:`, error)
    if (locale !== 'ca') {
      return await getIndustryData(slug, 'ca')
    }
    return null
  }
}

export function getAllIndustries(locale?: IndustryLocale): IndustryMeta[] {
  try {
    const targetLocale = locale || 'ca'
    const baseDir = getIndustriesDirectory(targetLocale)
    if (!fs.existsSync(baseDir)) {
      return []
    }

    const fileNames = fs.readdirSync(baseDir)
    const allIndustries = fileNames
      .filter((name) => name.endsWith('.md'))
      .map((fileName) => {
        const slug = normalizeSlug(fileName.replace(/\.md$/, ''))
        const fullPath = path.join(baseDir, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)
        return {
          slug,
          ...matterResult.data,
        } as IndustryMeta
      })
      .filter((post) => post.published !== false)

    return allIndustries
  } catch (error) {
    console.error('Error reading industries:', error)
    return []
  }
}

export function getAllIndustrySlugs(
  locale?: IndustryLocale
): Array<{ slug: string; locale: string }> {
  try {
    const locales: IndustryLocale[] = locale ? [locale] : ['ca', 'en', 'es']
    const allSlugs: { slug: string; locale: string }[] = []

    locales.forEach((loc) => {
      const baseDir = getIndustriesDirectory(loc)
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
    console.error('Error reading industry slugs:', error)
    return []
  }
}

export function getIndustryUrl(slug: string, locale: IndustryLocale): string {
  if (locale === 'ca') {
    return `/industries/${normalizeSlug(slug)}`
  }
  return `/${locale}/industries/${normalizeSlug(slug)}`
}
