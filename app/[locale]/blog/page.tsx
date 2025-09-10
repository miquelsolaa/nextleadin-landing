import { Metadata } from 'next'
import { getAllPosts, getAllCategories, getAllTags } from '@/lib/blog'
import BlogPageSection from '@/components/BlogPageSection'
import BlogSearch from '@/components/BlogSearch'
import BlogCategories from '@/components/BlogCategories'
import BlogRecentPosts from '@/components/BlogRecentPosts'
import BlogTags from '@/components/BlogTags'
import BlogPagination from '@/components/BlogPagination'

// Metadata is handled by the parent layout

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  console.log('🔍 Blog page locale:', locale)
  
  const translations = (() => {
    if (locale === 'es') {
      return {
        title: 'Blog',
        description: 'Descubre estrategias, consejos y tendencias para mejorar tu generación de leads y ventas B2B.',
        breadcrumbHome: 'Inicio'
      }
    }
    if (locale === 'en') {
      return {
        title: 'Blog',
        description: 'Discover strategies, tips and trends to improve your B2B lead generation and sales.',
        breadcrumbHome: 'Home'
      }
    }
    return {
      title: 'Blog',
      description: 'Descobreix estratègies, consells i tendències per millorar la teva generació de leads i vendes B2B.',
      breadcrumbHome: 'Inici'
    }
  })()
  
  console.log('🔍 Blog title:', translations.title)
  console.log('🔍 Blog description:', translations.description)
  const allPosts = getAllPosts()
  const categories = getAllCategories()
  const tags = getAllTags()
  
  // Mapejar posts reals al format esperat per BlogPageSection
  const blogPosts = allPosts.map((post, index) => ({
    id: index + 1,
    title: post.title,
    slug: post.slug,
    excerpt: post.description,
    image: post.featuredImage || '/images/hero/hero.png',
    categories: post.categories || [],
    author: post.author,
    date: new Date(post.date).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    comments: 0
  }))
  
  // Posts recents per al sidebar
  const recentPosts = allPosts.slice(0, 3).map(post => ({
    title: post.title,
    image: post.featuredImage || '/images/hero/hero.png',
    slug: post.slug
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
            <span>{translations.breadcrumbHome}</span>
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
            <BlogPagination currentPage={1} totalPages={2} />
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
