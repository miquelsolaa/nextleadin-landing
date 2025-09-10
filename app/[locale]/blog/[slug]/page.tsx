import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import { getPostBySlug, getAllPosts, getRelatedPosts, getAllCategories, getAllTags, getAllPostSlugs } from '@/lib/blog'
import BlogJsonLd from '@/components/BlogJsonLd'
import BlogSearch from '@/components/BlogSearch'
import BlogCategories from '@/components/BlogCategories'
import BlogRecentPosts from '@/components/BlogRecentPosts'
import BlogTags from '@/components/BlogTags'
import Tag from '@/components/Tag'
import Link from 'next/link'
import { CalendarDays, User, ArrowLeft, ArrowRight, Share2 } from 'lucide-react'
import styles from '@/components/BlogPostContent.module.css'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const { slug } = await params
    const post = await getPostBySlug(slug)
    
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
        images: post.featuredImage ? [
          {
            url: post.featuredImage,
            width: 1200,
            height: 630,
            alt: post.title,
          }
        ] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description,
        images: post.featuredImage ? [post.featuredImage] : [],
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
    const { slug } = await params
    const post = await getPostBySlug(slug)
    const t = await getTranslations('blog')

    if (!post) {
      notFound()
    }

  const relatedPosts = getRelatedPosts(slug, 3)
  const allPosts = getAllPosts()
  const categories = getAllCategories()
  const tags = getAllTags()
  
  // Posts recents per al sidebar
  const recentPosts = allPosts.slice(0, 3).map(p => ({
    title: p.title,
    image: p.featuredImage || '/images/hero/hero.png',
    slug: p.slug
  }))

  // Trobar posts anterior i següent
  const currentIndex = allPosts.findIndex(p => p.slug === slug)
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  return (
    <>
      <BlogJsonLd post={post} />
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-green-600 transition-colors">
                {t('breadcrumbHome')}
              </Link>
              <span>›</span>
              <Link href="/blog" className="hover:text-green-600 transition-colors">
                {t('breadcrumbBlog')}
              </Link>
              <span>›</span>
              <span className="text-gray-900">{post.title}</span>
            </nav>
          </div>
        </div>

      {/* Contingut principal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Article principal */}
            <div className="lg:col-span-3">
              <article className="bg-white">
                {/* Categories */}
                <div className="px-8 pt-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories?.map((category, index) => (
                      <Tag
                        key={index}
                        tag={category}
                        href={`/blog/category/${category.toLowerCase()}`}
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
                      {new Date(post.date).toLocaleDateString('ca-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <Link
                        href={`/blog/author/${post.author.toLowerCase().replace(' ', '-')}`}
                        className="hover:text-green-600 transition-colors"
                      >
                        {post.author}
                      </Link>
                    </span>
                  </div>
              </div>

                {/* Imatge destacada */}
                {post.featuredImage && (
                  <div className="px-8 mb-8">
                    <div className="relative w-full h-96 rounded-lg overflow-hidden">
                      <img
                        src={post.featuredImage}
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
                        <Tag
                          key={tag}
                          tag={tag}
                          href={`/blog/tag/${tag.toLowerCase()}`}
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
                            href={`/blog/author/${post.author.toLowerCase().replace(' ', '-')}`}
                            className="hover:text-green-600 transition-colors"
                          >
                            {post.author}
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
                            href={`/blog/${previousPost.slug}`}
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
                            href={`/blog/${nextPost.slug}`}
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

        {/* Posts relacionats */}
        {relatedPosts.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('relatedPostsTitle')}</h3>
                <p className="text-gray-600">{t('relatedPostsDescription')}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.slug} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <div className="relative h-48">
                        <img
                          src={relatedPost.featuredImage || '/images/hero/hero.png'}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Link>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {relatedPost.categories?.slice(0, 2).map((category, index) => (
                          <Tag
                            key={index}
                            tag={category}
                            variant="outline"
                            size="sm"
                          />
                        ))}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          {relatedPost.title}
                        </Link>
                      </h4>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <CalendarDays className="w-4 h-4 mr-2" />
                        <span>
                          {new Date(relatedPost.date).toLocaleDateString('ca-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{relatedPost.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
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
