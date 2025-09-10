import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

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
 * Llegeix tots els fitxers Markdown del directori de posts
 */
export function getAllPosts(): BlogPostMeta[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter((name) => name.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
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
 * Llegeix un post específic per slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
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
      slug,
      content: matterResult.content,
      contentHtml,
      ...matterResult.data,
    } as BlogPost
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

/**
 * Obté posts per categoria
 */
export function getPostsByCategory(category: string): BlogPostMeta[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => 
    post.categories?.some((cat) => 
      cat.toLowerCase() === category.toLowerCase()
    )
  )
}

/**
 * Obté posts per tag
 */
export function getPostsByTag(tag: string): BlogPostMeta[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => 
    post.tags?.some((t) => 
      t.toLowerCase() === tag.toLowerCase()
    )
  )
}

/**
 * Obté totes les categories úniques
 */
export function getAllCategories(): { name: string; count: number }[] {
  const allPosts = getAllPosts()
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
 * Obté tots els tags únics
 */
export function getAllTags(): string[] {
  const allPosts = getAllPosts()
  const tagSet = new Set<string>()

  allPosts.forEach((post) => {
    post.tags?.forEach((tag) => tagSet.add(tag))
  })

  return Array.from(tagSet).sort()
}

/**
 * Obté només els slugs dels posts per a generateStaticParams
 */
export function getAllPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
      .filter((name) => name.endsWith('.md'))
      .map((fileName) => fileName.replace(/\.md$/, ''))
  } catch (error) {
    console.error('Error reading post slugs:', error)
    return []
  }
}

/**
 * Obté posts relacionats basats en categories compartides
 */
export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPostMeta[] {
  const allPosts = getAllPosts()
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
