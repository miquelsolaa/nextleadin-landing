'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import type { BlogPostMeta } from '@/lib/blog'
import { getBlogPostUrl, type Locale } from '@/lib/blog-utils'
import { CalendarDays } from 'lucide-react'
import Tag from './Tag'

interface RecommendedPostsProps {
  posts: BlogPostMeta[]
  currentSlug?: string
}

export default function RecommendedPosts({ posts, currentSlug }: RecommendedPostsProps) {
  const currentLocale = useLocale() as Locale

  // Filtrar el post actual si està present
  const filteredPosts = currentSlug 
    ? posts.filter(post => post.slug !== currentSlug)
    : posts

  // Limitar a 3 posts
  const recommendedPosts = filteredPosts.slice(0, 3)

  if (recommendedPosts.length === 0) {
    return null
  }

  // Funció per generar l'URL correcta segons l'idioma
  const getPostUrl = (slug: string) => {
    return getBlogPostUrl(slug, currentLocale)
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {currentLocale === 'ca' && 'Articles recomanats'}
            {currentLocale === 'es' && 'Artículos recomendados'}
            {currentLocale === 'en' && 'Recommended articles'}
          </h3>
          <p className="text-gray-600">
            {currentLocale === 'ca' && 'Descobreix més contingut relacionat'}
            {currentLocale === 'es' && 'Descubre más contenido relacionado'}
            {currentLocale === 'en' && 'Discover more related content'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendedPosts.map((post) => (
            <article 
              key={post.slug} 
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <Link href={getPostUrl(post.slug)}>
                <div className="relative h-48">
                  <Image
                    src={post.image || '/images/hero/hero.png'}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories?.slice(0, 2).map((category, index) => (
                    <Tag
                      key={index}
                      tag={category}
                      href={`${currentLocale === 'ca' ? '' : `/${currentLocale}`}/blog/category/${category.toLowerCase()}`}
                      variant="outline"
                      size="sm"
                    />
                  ))}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                  <Link href={getPostUrl(post.slug)}>
                    {post.title}
                  </Link>
                </h4>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <CalendarDays className="w-4 h-4 mr-2" />
                  <span>
                    {new Date(post.date).toLocaleDateString(
                      currentLocale === 'ca' ? 'ca-ES' : 
                      currentLocale === 'en' ? 'en-US' : 'es-ES',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }
                    )}
                  </span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

