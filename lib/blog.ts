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
import type { Locale } from './blog-utils'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  featuredImage?: string
  categories: string[]
  tags: string[]
  published: boolean
  content: string
  contentHtml: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  author: string
  featuredImage?: string
  categories: string[]
  tags: string[]
  published: boolean
}

/**
 * Obté el directori de blog per a un idioma específic
 */
export function getBlogDirectory(locale: Locale): string {
  return path.join(postsDirectory, locale)
}

/**
 * Normalitza un slug per gestionar caràcters especials
 */
export function normalizeSlug(slug: string): string {
  // Decodificar URL encoding
  let normalized = decodeURIComponent(slug)
  
  // Normalitzar punt volat (·) a guió
  normalized = normalized.replace(/·/g, '-')
  
  // Normalitzar espais i altres caràcters especials
  normalized = normalized.replace(/\s+/g, '-')
  normalized = normalized.replace(/[^\w\-]/g, '')
  
  // Eliminar guions múltiples
  normalized = normalized.replace(/-+/g, '-')
  
  // Eliminar guions al principi i final
  normalized = normalized.replace(/^-+|-+$/g, '')
  
  return normalized.toLowerCase()
}

/**
 * Comprova si un article existeix en un idioma específic
 */
export function postExists(slug: string, locale: Locale): boolean {
  try {
    const normalizedSlug = normalizeSlug(slug)
    const blogDir = getBlogDirectory(locale)
    const fullPath = path.join(blogDir, `${normalizedSlug}.md`)
    return fs.existsSync(fullPath)
  } catch (error) {
    return false
  }
}

/**
 * Llegeix un post específic per slug i idioma
 * Si no existeix en l'idioma sol·licitat, fa fallback a català
 */
export async function getPostData(slug: string, locale: Locale): Promise<BlogPost | null> {
  try {
    const normalizedSlug = normalizeSlug(slug)
    const blogDir = getBlogDirectory(locale)
    const fullPath = path.join(blogDir, `${normalizedSlug}.md`)
    
    // Si no existeix l'article en l'idioma sol·licitat, provar amb català
    if (!fs.existsSync(fullPath) && locale !== 'ca') {
      return await getPostData(slug, 'ca')
    }
    
    // Si encara no existeix, retornar null
    if (!fs.existsSync(fullPath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    // Processar el contingut amb el pipeline complet de remark/rehype
    const processedContent = await unified()
      .use(remarkParse) // Parsear markdown
      .use(remarkGfm) // Suport per GitHub Flavored Markdown (taules, etc.)
      .use(remarkBreaks) // Suport per salts de línia
      .use(remarkRehype) // Convertir a rehype
      .use(rehypeStringify) // Convertir a HTML string
      .process(matterResult.content)
    
    const contentHtml = processedContent.toString()

    return {
      slug: normalizedSlug,
      content: matterResult.content,
      contentHtml,
      ...matterResult.data,
    } as BlogPost
  } catch (error) {
    console.error(`Error reading post ${slug} in locale ${locale}:`, error)
    
    // Si hi ha error i no és català, provar fallback a català
    if (locale !== 'ca') {
      return await getPostData(slug, 'ca')
    }
    
    return null
  }
}

/**
 * Llegeix tots els fitxers Markdown del directori de posts per a un idioma específic
 */
export function getAllPosts(locale?: Locale): BlogPostMeta[] {
  try {
    const targetLocale = locale || 'ca'
    const blogDir = getBlogDirectory(targetLocale)
    
    if (!fs.existsSync(blogDir)) {
      return []
    }
    
    const fileNames = fs.readdirSync(blogDir)
    const allPostsData = fileNames
      .filter((name) => name.endsWith('.md'))
      .map((fileName) => {
        const slug = normalizeSlug(fileName.replace(/\.md$/, ''))
        const fullPath = path.join(blogDir, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        return {
          slug,
          ...matterResult.data,
        } as BlogPostMeta
      })
      .filter((post) => post.published !== false)
      .sort((a, b) => (a.date < b.date ? 1 : -1))

    return allPostsData
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

/**
 * Llegeix un post específic per slug (compatibilitat amb codi existent)
 * @deprecated Usar getPostData(slug, locale) en lloc d'això
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // Per defecte, intentar amb català
  return await getPostData(slug, 'ca')
}

/**
 * Obté posts per categoria per a un idioma específic
 */
export function getPostsByCategory(category: string, locale?: Locale): BlogPostMeta[] {
  const allPosts = getAllPosts(locale)
  return allPosts.filter((post) => 
    post.categories?.some((cat) => 
      cat.toLowerCase() === category.toLowerCase()
    )
  )
}

/**
 * Obté posts per tag per a un idioma específic
 */
export function getPostsByTag(tag: string, locale?: Locale): BlogPostMeta[] {
  const allPosts = getAllPosts(locale)
  return allPosts.filter((post) => 
    post.tags?.some((t) => 
      t.toLowerCase() === tag.toLowerCase()
    )
  )
}

/**
 * Obté totes les categories úniques per a un idioma específic
 */
export function getAllCategories(locale?: Locale): { name: string; count: number }[] {
  const allPosts = getAllPosts(locale)
  const categoryCount: { [key: string]: number } = {}

  allPosts.forEach((post) => {
    post.categories?.forEach((category) => {
      categoryCount[category] = (categoryCount[category] || 0) + 1
    })
  })

  return Object.entries(categoryCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
}

/**
 * Obté tots els tags únics per a un idioma específic
 */
export function getAllTags(locale?: Locale): string[] {
  const allPosts = getAllPosts(locale)
  const tagSet = new Set<string>()

  allPosts.forEach((post) => {
    post.tags?.forEach((tag) => tagSet.add(tag))
  })

  return Array.from(tagSet).sort()
}

/**
 * Obté tots els slugs dels posts amb els seus idiomes per a generateStaticParams
 */
export function getAllPostSlugs(locale?: Locale): Array<{ slug: string; locale: string }> {
  try {
    const locales: Locale[] = locale ? [locale] : ['ca', 'en', 'es']
    const allSlugs: { slug: string; locale: string }[] = []
    
    locales.forEach((loc) => {
      const blogDir = getBlogDirectory(loc)
      if (!fs.existsSync(blogDir)) {
        return
      }
      
      const fileNames = fs.readdirSync(blogDir)
      fileNames
        .filter((name) => name.endsWith('.md'))
        .forEach((fileName) => {
          const slug = normalizeSlug(fileName.replace(/\.md$/, ''))
          allSlugs.push({ slug, locale: loc })
        })
    })
    
    return allSlugs
  } catch (error) {
    console.error('Error reading post slugs:', error)
    return []
  }
}

/**
 * Obté posts relacionats basats en categories compartides per a un idioma específic
 */
export function getRelatedPosts(currentSlug: string, limit: number = 3, locale?: Locale): BlogPostMeta[] {
  const allPosts = getAllPosts(locale)
  const currentPost = allPosts.find(post => post.slug === currentSlug)
  
  if (!currentPost) return []

  const relatedPosts = allPosts
    .filter(post => 
      post.slug !== currentSlug && 
      post.categories?.some(cat => 
        currentPost.categories?.includes(cat)
      )
    )
    .slice(0, limit)

  return relatedPosts
}

// Re-export client-safe utilities for backward compatibility (server components can still import from here)
export { getBlogPostUrl } from './blog-utils'
export type { Locale }
