import type { Metadata } from 'next'
import { getAllPosts, getAllCategories, getAllTags, getBlogPostUrl, type Locale } from '@/lib/blog'
import BlogPageSection from '@/components/BlogPageSection'
import BlogSearch from '@/components/BlogSearch'
import BlogCategories from '@/components/BlogCategories'
import BlogRecentPosts from '@/components/BlogRecentPosts'
import BlogTags from '@/components/BlogTags'
import BlogPagination from '@/components/BlogPagination'
import { generateAIOptimizedMetadata } from '@/lib/seo-metadata'

const POSTS_PER_PAGE = 12

function blogIndexCanonical(locale: Locale, page: number, query: string): string {
  const prefix = locale === 'es' ? '' : `/${locale}`
  const u = new URL(`https://nextleadin.com${prefix}/blog`)
  if (query) u.searchParams.set('query', query)
  if (page > 1) u.searchParams.set('page', String(page))
  return u.href
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams?: Promise<{ page?: string; query?: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const validLocale =
    locale === 'ca' || locale === 'es' || locale === 'en' ? (locale as Locale) : 'es'
  const sp = (await searchParams) ?? {}
  const rawPage = Number(sp.page ?? '1')
  const page = Number.isNaN(rawPage) || rawPage < 1 ? 1 : rawPage
  const query = sp.query?.trim() ?? ''
  const base = generateAIOptimizedMetadata('blog', validLocale)
  const canonicalUrl = blogIndexCanonical(validLocale, page, query)
  const canonicalWithoutQuery = blogIndexCanonical(validLocale, page, '')
  const canonicalMainBlog = blogIndexCanonical(validLocale, 1, '')
  const baseTitle =
    typeof base.title === 'string'
      ? base.title
      : typeof base.title === 'object' && base.title && 'default' in base.title
        ? String((base.title as { default: string }).default)
        : 'Blog'

  if (page <= 1 && !query) {
    return {
      ...base,
      alternates: {...base.alternates, canonical: canonicalUrl},
    }
  }

  const suffix =
    page > 1
      ? validLocale === 'en'
        ? ` — Page ${page}`
        : validLocale === 'ca'
          ? ` — Pàgina ${page}`
          : ` — Página ${page}`
      : ` — ${query}`

  return {
    ...base,
    title: `${baseTitle}${suffix}`,
    alternates: {...base.alternates, canonical: query ? canonicalMainBlog : canonicalWithoutQuery},
    openGraph: base.openGraph
      ? {...base.openGraph, url: canonicalUrl}
      : base.openGraph,
    robots: query
      ? {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        }
      : base.robots,
  }
}

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams?: Promise<{ page?: string; query?: string }>
}) {
  const { locale } = await params
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? locale as Locale : 'es'
  
  const translations = (() => {
    if (validLocale === 'es') {
      return {
        title: 'Blog',
        description: 'Estrategias, consejos y casos prácticos para vender más a negocios locales.',
        breadcrumbHome: 'Inicio'
      }
    }
    if (validLocale === 'en') {
      return {
        title: 'Blog',
        description: 'Strategies, tips and case studies to sell more to local businesses.',
        breadcrumbHome: 'Home'
      }
    }
    return {
      title: 'Blog',
      description: 'Estratègies, consells i casos pràctics per vendre més a negocis locals.',
      breadcrumbHome: 'Inici'
    }
  })()
  
  const resolvedSearchParams = (await searchParams) ?? {}
  const rawQuery = resolvedSearchParams.query?.trim() ?? ''
  const query = rawQuery.length ? rawQuery : ''

  const allPosts = getAllPosts(validLocale)
  const filteredPosts = query
    ? allPosts.filter((post) => {
        const haystack = [
          post.title,
          post.description,
          post.author,
          ...(post.categories ?? []),
          ...(post.tags ?? []),
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
        return haystack.includes(query.toLowerCase())
      })
    : allPosts

  const totalPosts = filteredPosts.length
  const totalPages = Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE))

  const rawPage = Number(resolvedSearchParams.page ?? '1')
  const currentPage = Number.isNaN(rawPage) || rawPage < 1 ? 1 : Math.min(rawPage, totalPages)
  const categories = getAllCategories(validLocale)
  const tags = getAllTags(validLocale)
  
  // Format de data segons l'idioma
  const dateLocale = validLocale === 'ca' ? 'ca-ES' : validLocale === 'en' ? 'en-US' : 'es-ES'
  
  // URL base per al blog segons l'idioma (ES sense prefix)
  const blogBaseUrl = validLocale === 'es' ? '/blog' : `/${validLocale}/blog`
  
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const pageItems = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  // Mapejar posts reals al format esperat per BlogPageSection
  const blogPosts = pageItems.map((post, index) => ({
    id: startIndex + index + 1,
    title: post.title,
    slug: post.slug,
    excerpt: post.description,
    image: post.image || '/images/hero/hero.svg',
    categories: post.categories || [],
    author: post.author,
    date: new Date(post.date).toLocaleDateString(dateLocale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    url: getBlogPostUrl(post.slug, validLocale)
  }))
  
  // Posts recents per al sidebar
  const recentPosts = allPosts.slice(0, 3).map(post => ({
    title: post.title,
    image: post.image || '/images/hero/hero.svg',
    slug: post.slug,
    url: getBlogPostUrl(post.slug, validLocale)
  }))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{translations.title}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {translations.description}
          </p>
          <nav className="text-sm text-gray-500">
            <a href={validLocale === 'es' ? '/' : `/${validLocale}`} className="hover:text-green-600 transition-colors">
              {translations.breadcrumbHome}
            </a>
            <span className="mx-2">›</span>
            <span>{translations.title}</span>
          </nav>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <BlogPageSection posts={blogPosts} />
            <BlogPagination
              currentPage={currentPage}
              totalPages={totalPages}
              basePath={blogBaseUrl}
              query={query ? { query } : undefined}
            />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <BlogSearch />
            <BlogCategories categories={categories} />
            <BlogRecentPosts posts={recentPosts} />
            <BlogTags tags={tags} />
          </aside>
        </div>
      </div>
    </div>
  )
}
