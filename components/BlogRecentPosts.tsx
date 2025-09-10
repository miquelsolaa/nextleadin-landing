'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from 'next-intl'

interface RecentPost {
  title: string
  image: string
  slug: string
}

interface BlogRecentPostsProps {
  posts: RecentPost[]
}

const BlogRecentPosts = ({ posts }: BlogRecentPostsProps) => {
  const locale = (useLocale() as 'es' | 'ca' | 'en') ?? 'es'

  const translations = (() => {
    if (locale === 'es') {
      return {
        recentPosts: 'Artículos recientes'
      }
    }
    if (locale === 'en') {
      return {
        recentPosts: 'Recent posts'
      }
    }
    return {
      recentPosts: 'Articles recents'
    }
  })()
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h4 className="text-lg font-semibold text-gray-900 mb-4">{translations.recentPosts}</h4>
      <ul className="space-y-4">
        {posts.map((post, index) => (
          <li key={index}>
            <Link
              href={`/blog/${post.slug}`}
              className="flex items-start space-x-3 group"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="text-sm font-medium text-gray-900 group-hover:text-green-500 transition-colors line-clamp-3">
                  {post.title}
                </h5>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogRecentPosts
