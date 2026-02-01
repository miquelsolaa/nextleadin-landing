import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import { getPostData, getAllPosts, getRelatedPosts, getAllCategories, getAllTags, getAllPostSlugs, getBlogPostUrl, postExists, type Locale } from '@/lib/blog'
import BlogJsonLd from '@/components/BlogJsonLd'
import BlogSearch from '@/components/BlogSearch'
import BlogCategories from '@/components/BlogCategories'
import BlogRecentPosts from '@/components/BlogRecentPosts'
import BlogTags from '@/components/BlogTags'
import LanguageAvailability from '@/components/LanguageAvailability'
import RecommendedPosts from '@/components/RecommendedPosts'
import CategoryTag from '@/components/CategoryTag'
import BlogTagLink from '@/components/BlogTagLink'
import { getTagSlug } from '@/lib/blog-tags'
import Link from 'next/link'
import { CalendarDays, User, ArrowLeft, ArrowRight } from 'lucide-react'
import styles from '@/components/BlogPostContent.module.css'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
    locale: string
  }>
}

export async function generateStaticParams() {
  const allSlugs = getAllPostSlugs()
  return allSlugs.map(({ slug, locale }) => ({
    slug,
    locale,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const { slug, locale } = await params
    const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? locale as Locale : 'ca'
    const post = await getPostData(slug, validLocale)
    
    if (!post) {
      return {
        title: 'Article no trobat',
      }
    }

    return {
      title: `${post.title} - NextLeadIn Blog`,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
        images: post.image ? [
          {
            url: post.image,
            width: 1200,
            height: 630,
            alt: post.title,
          }
        ] : [],
        url: `https://codixperts.com${getBlogPostUrl(slug, validLocale)}`,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description,
        images: post.image ? [post.image] : [],
      },
    }
  } catch (error) {
    console.error('Error in generateMetadata:', error)
    return {
      title: 'Error - NextLeadIn Blog',
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const { slug, locale } = await params
    const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? locale as Locale : 'ca'
    const post = await getPostData(slug, validLocale)
    const t = await getTranslations('blog')

    if (!post) {
      notFound()
    }

    const relatedPosts = getRelatedPosts(slug, 3, validLocale)
    const allPosts = getAllPosts(validLocale)
    const categories = getAllCategories(validLocale)
    const tags = getAllTags(validLocale)
    
    // Posts recents per al sidebar
    const recentPosts = allPosts.slice(0, 3).map(p => ({
      title: p.title,
      image: p.image || '/images/hero/hero.png',
      slug: p.slug
    }))

    // Trobar posts anterior i següent
    const currentIndex = allPosts.findIndex(p => p.slug === slug)
    const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
    const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

    // Format de data segons l'idioma
    const dateLocale = validLocale === 'ca' ? 'ca-ES' : validLocale === 'en' ? 'en-US' : 'es-ES'

    // URL base per al blog segons l'idioma
    const blogBaseUrl = validLocale === 'ca' ? '/blog' : `/${validLocale}/blog`

    // Calcular quins idiomes estan disponibles per a aquest article
    const availableLocales = (['ca', 'en', 'es'] as Locale[]).filter(locale => 
      postExists(slug, locale)
    )

    return (
      <>
        <BlogJsonLd post={post} locale={validLocale} />
        <div className="min-h-screen bg-white">
          {/* Breadcrumb */}
          <div className="bg-gray-50 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <nav className="flex items-center space-x-2 text-sm text-gray-500">
                <Link href={validLocale === 'ca' ? '/' : `/${validLocale}`} className="hover:text-green-600 transition-colors">
                  {t('breadcrumbHome')}
                </Link>
                <span>›</span>
                <Link href={blogBaseUrl} className="hover:text-green-600 transition-colors">
                  {t('breadcrumbBlog')}
                </Link>
                <span>›</span>
                <span className="text-gray-900">{post.title}</span>
              </nav>
            </div>
          </div>

          {/* Contingut principal */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full min-w-0 overflow-x-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Article principal */}
              <div className="lg:col-span-3 min-w-0">
                <article className="bg-white">
                  {/* Language Availability */}
                  <div className="px-8 pt-8">
                    <LanguageAvailability slug={slug} availableLocales={availableLocales} />
                  </div>

                  {/* Categories */}
                  <div className="px-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.categories?.map((category, index) => (
                        <CategoryTag
                          key={index}
                          category={category}
                          href={`${blogBaseUrl}/category/${category.toLowerCase()}`}
                          variant="outline"
                          size="sm"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Social Share */}
                  <div className="px-8">
                    <div className="post-share mb-6">
                      <div className="post-share-inner">
                        <div className="social-sharing-list flex space-x-4">
                          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors" title="Compartir a Facebook">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          </a>
                          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" title="Compartir a X">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                          </a>
                          <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors" title="Compartir a LinkedIn">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                          <a href="#" className="text-gray-400 hover:text-red-600 transition-colors" title="Compartir a Pinterest">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Títol */}
                  <div className="px-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                      {post.title}
                    </h1>
                  </div>

                  {/* Metadades */}
                  <div className="px-8 mb-8">
                    <div className="flex items-center text-sm text-gray-500 space-x-6">
                      <span className="flex items-center">
                        <CalendarDays className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString(dateLocale, {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        <Link
                          href={`${blogBaseUrl}/author/${(post.author || 'unknown').toLowerCase().replace(' ', '-')}`}
                          className="hover:text-green-600 transition-colors"
                        >
                          {post.author || 'Unknown'}
                        </Link>
                      </span>
                    </div>
                  </div>

                  {/* Imatge destacada */}
                  {post.image && (
                    <div className="px-8 mb-8">
                      <div className="relative w-full h-96 rounded-lg overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {/* Contingut de l'article */}
                  <div className="px-8 pb-8">
                    <div 
                      className={`prose prose-lg max-w-none ${styles.prose}`}
                      dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                    />
                  </div>

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="px-8 pb-8">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm text-gray-500">{t('tagsLabel')}</span>
                        {post.tags.map((tag) => (
                          <BlogTagLink
                            key={tag}
                            tag={tag}
                            href={`${blogBaseUrl}/tag/${getTagSlug(tag)}`}
                            variant="default"
                            size="sm"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Secció d'autor */}
                  <div className="px-8 pb-8 border-t border-gray-100">
                    <div className="author-box-wrapper flex items-start space-x-4 pt-8">
                      <div className="author-avatar">
                        <img
                          alt={post.author}
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&size=120&background=10b981&color=fff`}
                          className="w-20 h-20 rounded-full"
                        />
                      </div>
                      <div className="author-desc-wrapper flex-1">
                        <div className="author-name">
                        <h5 className="text-lg font-semibold text-gray-900">
                          <Link
                            href={`${blogBaseUrl}/author/${(post.author || 'unknown').toLowerCase().replace(' ', '-')}`}
                            className="hover:text-green-600 transition-colors"
                          >
                            {post.author || 'Unknown'}
                          </Link>
                        </h5>
                        </div>
                        <div className="author-description">
                          <p className="text-gray-600 mt-2">
                            {t('authorDescription')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navegació entre posts */}
                  <div className="px-8 pb-8 border-t border-gray-100">
                    <nav className="navigation post-navigation pt-8" aria-label="Posts">
                      <div className="nav-links flex justify-between">
                        <div className="nav-previous">
                          {previousPost ? (
                            <Link
                              href={getBlogPostUrl(previousPost.slug, validLocale)}
                              className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
                              rel="prev"
                            >
                              <ArrowLeft className="w-4 h-4" />
                              <span>{t('previousPost')}</span>
                            </Link>
                          ) : (
                            <span className="text-gray-400">{t('previousPost')}</span>
                          )}
                        </div>
                        <div className="nav-next">
                          {nextPost ? (
                            <Link
                              href={getBlogPostUrl(nextPost.slug, validLocale)}
                              className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
                              rel="next"
                            >
                              <span>{t('nextPost')}</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          ) : (
                            <span className="text-gray-400">{t('nextPost')}</span>
                          )}
                        </div>
                      </div>
                    </nav>
                  </div>

                </article>
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

        {/* Posts relacionats */}
        {relatedPosts.length > 0 && (
          <RecommendedPosts posts={relatedPosts} currentSlug={slug} />
        )}
      </>
    )
  } catch (error) {
    console.error('Error in BlogPostPage:', error)
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Error carregant l'article</h1>
          <p className="text-gray-600">S'ha produït un error inesperat. Torna-ho a provar més tard.</p>
        </div>
      </div>
    )
  }
}
