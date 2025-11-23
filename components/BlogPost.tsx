'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, User, Tag } from 'lucide-react'
import { useLocale } from 'next-intl'
import type { BlogPost } from '@/lib/blog'
import { getBlogPostUrl, type Locale } from '@/lib/blog-utils'

interface BlogPostProps {
  post: BlogPost
  showExcerpt?: boolean
  featured?: boolean
}

export default function BlogPost({ post, showExcerpt = true, featured = false }: BlogPostProps) {
  const currentLocale = useLocale() as Locale
  
  const formatDate = (dateString: string) => {
    const dateLocale = currentLocale === 'ca' ? 'ca-ES' : currentLocale === 'en' ? 'en-US' : 'es-ES'
    return new Date(dateString).toLocaleDateString(dateLocale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const postUrl = getBlogPostUrl(post.slug, currentLocale)

  return (
    <article className={`group ${featured ? 'lg:col-span-2' : ''}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Imatge destacada */}
        {post.image && (
          <div className={`relative ${featured ? 'h-64' : 'h-48'} overflow-hidden`}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <div className="p-6">
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.categories.slice(0, 2).map((category) => (
                <span
                  key={category}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          {/* Títol */}
          <h2 className={`font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 ${
            featured ? 'text-2xl lg:text-3xl' : 'text-xl'
          } mb-3`}>
            <Link href={postUrl} className="hover:underline">
              {post.title}
            </Link>
          </h2>

          {/* Descripció */}
          {showExcerpt && post.description && (
            <p className={`text-gray-600 mb-4 ${
              featured ? 'text-lg' : 'text-base'
            }`}>
              {post.description}
            </p>
          )}

          {/* Metadades */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-gray-400" />
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-500 hover:text-blue-600 transition-colors duration-200"
                  >
                    #{tag}
                  </span>
                ))}
                {post.tags.length > 3 && (
                  <span className="text-xs text-gray-400">
                    +{post.tags.length - 3} més
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
