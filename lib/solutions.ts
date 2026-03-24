import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { AppLocale } from '@/i18n/routing'
import { renderMarkdownToSafeHtml } from './markdown'

export type SolutionLocale = AppLocale

const solutionsDirectory = path.join(process.cwd(), 'content/solutions')

export interface SolutionMeta {
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

export interface SolutionBenefit {
  title: string
  description: string
  icon: string
}

export interface SolutionUseCase {
  title: string
  description: string
}

export interface SolutionStat {
  value: string
  label: string
}

export interface SolutionPost extends SolutionMeta {
  content: string
  contentHtml: string
  benefits: SolutionBenefit[]
  useCases: SolutionUseCase[]
  stats: SolutionStat[]
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

function getSolutionsDirectory(locale: SolutionLocale): string {
  return path.join(solutionsDirectory, locale)
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

export function solutionExists(slug: string, locale: SolutionLocale): boolean {
  try {
    const normalizedSlug = normalizeSlug(slug)
    const baseDir = getSolutionsDirectory(locale)
    const fullPath = path.join(baseDir, `${normalizedSlug}.md`)
    return fs.existsSync(fullPath)
  } catch {
    return false
  }
}

export async function getSolutionData(
  slug: string,
  locale: SolutionLocale
): Promise<SolutionPost | null> {
  try {
    const normalizedSlug = normalizeSlug(slug)
    const baseDir = getSolutionsDirectory(locale)
    const fullPath = path.join(baseDir, `${normalizedSlug}.md`)

    if (!fs.existsSync(fullPath) && locale !== 'ca') {
      return await getSolutionData(slug, 'ca')
    }

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const contentHtml = await renderMarkdownToSafeHtml(matterResult.content)

    return {
      slug: normalizedSlug,
      content: matterResult.content,
      contentHtml,
      benefits: matterResult.data.benefits || [],
      useCases: matterResult.data.useCases || [],
      stats: matterResult.data.stats || [],
      ...matterResult.data,
    } as SolutionPost
  } catch (error) {
    console.error(`Error reading solution ${slug} in locale ${locale}:`, error)
    if (locale !== 'ca') {
      return await getSolutionData(slug, 'ca')
    }
    return null
  }
}

export function getAllSolutions(locale?: SolutionLocale): SolutionMeta[] {
  try {
    const targetLocale = locale || 'ca'
    const baseDir = getSolutionsDirectory(targetLocale)
    if (!fs.existsSync(baseDir)) {
      return []
    }

    const fileNames = fs.readdirSync(baseDir)
    const allSolutions = fileNames
      .filter((name) => name.endsWith('.md'))
      .map((fileName) => {
        const slug = normalizeSlug(fileName.replace(/\.md$/, ''))
        const fullPath = path.join(baseDir, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)
        return {
          slug,
          ...matterResult.data,
        } as SolutionMeta
      })
      .filter((post) => post.published !== false)

    return allSolutions
  } catch (error) {
    console.error('Error reading solutions:', error)
    return []
  }
}

export function getAllSolutionSlugs(
  locale?: SolutionLocale
): Array<{ slug: string; locale: string }> {
  try {
    const locales: SolutionLocale[] = locale ? [locale] : ['ca', 'en', 'es']
    const allSlugs: { slug: string; locale: string }[] = []

    locales.forEach((loc) => {
      const baseDir = getSolutionsDirectory(loc)
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
    console.error('Error reading solution slugs:', error)
    return []
  }
}

export function getSolutionUrl(slug: string, locale: SolutionLocale): string {
  if (locale === 'es') {
    return `/solutions/${normalizeSlug(slug)}`
  }
  return `/${locale}/solutions/${normalizeSlug(slug)}`
}
