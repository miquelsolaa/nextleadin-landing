import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import {
  getAllPosts,
  getAllCategories,
  getAllTags,
  getPostsByTag,
  getBlogPostUrl,
  type Locale
} from '@/lib/blog'
import { getTagCanonicalFromSlug, getTagLabelKey, getTagSlug } from '@/lib/blog-tags'
import BlogPageSection from '@/components/BlogPageSection'
import BlogSearch from '@/components/BlogSearch'
import BlogCategories from '@/components/BlogCategories'
import BlogRecentPosts from '@/components/BlogRecentPosts'
import BlogTags from '@/components/BlogTags'
import TagLabel from '@/components/TagLabel'
import Link from 'next/link'

interface BlogTagPageProps {
  params: Promise<{ locale: string; tag: string }>
}

export async function generateStaticParams() {
  const locales: Locale[] = ['ca', 'es', 'en']
  const params: { locale: string; tag: string }[] = []
  for (const locale of locales) {
    const tags = getAllTags(locale)
    for (const tag of tags) {
      params.push({
        locale,
        tag: getTagSlug(tag)
      })
    }
  }
  return params
}

export async function generateMetadata({ params }: BlogTagPageProps): Promise<Metadata> {
  const { locale, tag: tagSlug } = await params
  const canonical = getTagCanonicalFromSlug(decodeURIComponent(tagSlug))
  if (!canonical) {
    return { title: 'Tag' }
  }
  const t = await getTranslations('blog')
  const key = getTagLabelKey(canonical)
  const tagTitle = key ? t(`tagLabels.${key}` as 'tagLabels.leadGeneration') : canonical
  return {
    title: `${tagTitle} - NextLeadIn Blog`,
    description: t('description')
  }
}

export default async function BlogTagPage({ params }: BlogTagPageProps) {
  const { locale, tag: tagSlug } = await params
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? (locale as Locale) : 'ca'
  const tagParam = decodeURIComponent(tagSlug).trim()

  const canonicalTag = getTagCanonicalFromSlug(tagParam)
  const posts = canonicalTag ? getPostsByTag(canonicalTag, validLocale) : []

  if (posts.length === 0 && !canonicalTag) {
    notFound()
  }

  const t = await getTranslations('blog')
  const allPosts = getAllPosts(validLocale)
  const categories = getAllCategories(validLocale)
  const tags = getAllTags(validLocale)

  const dateLocale = validLocale === 'ca' ? 'ca-ES' : validLocale === 'en' ? 'en-US' : 'es-ES'
  const blogBaseUrl = validLocale === 'ca' ? '/blog' : `/${validLocale}/blog`

  const breadcrumbHome = validLocale === 'ca' ? 'Inici' : validLocale === 'en' ? 'Home' : 'Inicio'
  const breadcrumbBlog = t('breadcrumbBlog')

  const blogPosts = posts.map((post, index) => ({
    id: index + 1,
    title: post.title,
    slug: post.slug,
    excerpt: post.description,
    image: post.image || '/images/hero/hero.png',
    categories: post.categories || [],
    author: post.author,
    date: new Date(post.date).toLocaleDateString(dateLocale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    url: getBlogPostUrl(post.slug, validLocale)
  }))

  const recentPosts = allPosts.slice(0, 3).map((post) => ({
    title: post.title,
    image: post.image || '/images/hero/hero.png',
    slug: post.slug,
    url: getBlogPostUrl(post.slug, validLocale)
  }))

  const tagDisplayName = canonicalTag || tagParam

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link
                  href={validLocale === 'ca' ? '/' : `/${validLocale}`}
                  className="hover:text-green-600 transition-colors"
                >
                  {breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link href={blogBaseUrl} className="hover:text-green-600 transition-colors">
                  {breadcrumbBlog}
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-gray-900 font-medium" aria-current="page">
                {canonicalTag ? (
                  <TagLabel tag={canonicalTag} />
                ) : (
                  tagDisplayName
                )}
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900">
            {canonicalTag ? (
              <TagLabel tag={canonicalTag} />
            ) : (
              tagDisplayName
            )}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {blogPosts.length > 0 ? (
              <BlogPageSection posts={blogPosts} />
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                <p className="text-gray-600">{t('noPostsFound')}</p>
                <Link
                  href={blogBaseUrl}
                  className="mt-4 inline-block text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  {t('backToBlog')}
                </Link>
              </div>
            )}
          </div>

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
