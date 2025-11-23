'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { getBlogPostUrl, type Locale } from '@/lib/blog-utils'

interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  image: string
  categories: string[]
  author: string
  date: string
  comments: number
  url?: string
}

interface BlogPageSectionProps {
  posts: BlogPost[]
}

const BlogPageSection = ({ posts }: BlogPageSectionProps) => {
  const t = useTranslations('blog')
  const locale = (useLocale() as Locale) ?? 'ca'
  
  // URL base per al blog segons l'idioma
  const blogBaseUrl = locale === 'ca' ? '/blog' : `/${locale}/blog`
  
  return (
    <div className="space-y-8">
      {posts.map((post) => {
        const postUrl = post.url || getBlogPostUrl(post.slug, locale)
        return (
        <article
          key={post.id}
          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
        >
          <div className="md:flex">
            {/* Image */}
            <div className="md:w-1/3">
              <Link href={postUrl}>
                <div className="relative h-64 md:h-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
            </div>

            {/* Content */}
            <div className="md:w-2/3 p-6">
              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-3">
                {post.categories.map((category, index) => (
                  <span key={index}>
                    <Link
                      href={`${blogBaseUrl}/category/${category.toLowerCase()}`}
                      className="text-sm font-medium text-green-600 hover:text-green-700 uppercase tracking-wide"
                    >
                      {category}
                    </Link>
                    {index < post.categories.length - 1 && (
                      <span className="text-gray-400 ml-1">,</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                <Link href={postUrl}>
                  {post.title}
                </Link>
              </h2>

              {/* Meta */}
              <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                <span className="flex items-center">
                  <span className="mr-1">📅</span>
                  {post.date}
                </span>
                <span className="flex items-center">
                  <span className="mr-1">👤</span>
                  <Link
                    href={`${blogBaseUrl}/author/${(post.author || 'unknown').toLowerCase().replace(' ', '-')}`}
                    className="hover:text-green-600 transition-colors"
                  >
                    {post.author || 'Unknown'}
                  </Link>
                </span>
                <span className="flex items-center">
                  <span className="mr-1">💬</span>
                  <Link
                    href={`${postUrl}#comments`}
                    className="hover:text-green-600 transition-colors"
                  >
                    {post.comments} {t('comments')}
                  </Link>
                </span>
              </div>

              {/* Excerpt */}
              <div className="text-gray-600 mb-4">
                <p>{post.excerpt}</p>
              </div>
            </div>
          </div>
        </article>
        )
      })}
    </div>
  )
}

export default BlogPageSection
