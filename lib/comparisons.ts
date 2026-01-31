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

export type ComparisonLocale = AppLocale

const comparisonsDirectory = path.join(process.cwd(), 'content/comparisons')

export interface ComparisonMeta {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tools: string[]
  keywords: string[]
  published: boolean
}

export interface ComparisonPost extends ComparisonMeta {
  content: string
  contentHtml: string
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

function getComparisonsDirectory(locale: ComparisonLocale): string {
  return path.join(comparisonsDirectory, locale)
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

export function comparisonExists(slug: string, locale: ComparisonLocale): boolean {
  try {
    const normalizedSlug = normalizeSlug(slug)
    const baseDir = getComparisonsDirectory(locale)
    const fullPath = path.join(baseDir, `${normalizedSlug}.md`)
    return fs.existsSync(fullPath)
  } catch {
    return false
  }
}

export async function getComparisonData(
  slug: string,
  locale: ComparisonLocale
): Promise<ComparisonPost | null> {
  try {
    const normalizedSlug = normalizeSlug(slug)
    const baseDir = getComparisonsDirectory(locale)
    const fullPath = path.join(baseDir, `${normalizedSlug}.md`)

    if (!fs.existsSync(fullPath) && locale !== 'ca') {
      return await getComparisonData(slug, 'ca')
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
      ...matterResult.data,
    } as ComparisonPost
  } catch (error) {
    console.error(`Error reading comparison ${slug} in locale ${locale}:`, error)
    if (locale !== 'ca') {
      return await getComparisonData(slug, 'ca')
    }
    return null
  }
}

export function getAllComparisons(locale?: ComparisonLocale): ComparisonMeta[] {
  try {
    const targetLocale = locale || 'ca'
    const baseDir = getComparisonsDirectory(targetLocale)
    if (!fs.existsSync(baseDir)) {
      return []
    }

    const fileNames = fs.readdirSync(baseDir)
    const allComparisons = fileNames
      .filter((name) => name.endsWith('.md'))
      .map((fileName) => {
        const slug = normalizeSlug(fileName.replace(/\.md$/, ''))
        const fullPath = path.join(baseDir, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)
        return {
          slug,
          ...matterResult.data,
        } as ComparisonMeta
      })
      .filter((post) => post.published !== false)
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime()
        const dateB = new Date(b.date).getTime()
        return dateB - dateA
      })

    return allComparisons
  } catch (error) {
    console.error('Error reading comparisons:', error)
    return []
  }
}

export function getAllComparisonSlugs(
  locale?: ComparisonLocale
): Array<{ slug: string; locale: string }> {
  try {
    const locales: ComparisonLocale[] = locale ? [locale] : ['ca', 'en', 'es']
    const allSlugs: { slug: string; locale: string }[] = []

    locales.forEach((loc) => {
      const baseDir = getComparisonsDirectory(loc)
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
    console.error('Error reading comparison slugs:', error)
    return []
  }
}

export function getComparisonUrl(slug: string, locale: ComparisonLocale): string {
  if (locale === 'ca') {
    return `/compare/${normalizeSlug(slug)}`
  }
  return `/${locale}/compare/${normalizeSlug(slug)}`
}
