'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { getBlogPostUrl, type Locale } from '@/lib/blog-utils'

interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  categories: string[]
  author: {
    name: string
    avatar?: string
  }
  date: string
  comments: number
  slug: string
  className?: string
}

const BlogCard = ({
  title,
  excerpt,
  image,
  categories,
  author,
  date,
  comments,
  slug,
  className = ''
}: BlogCardProps) => {
  const locale = (useLocale() as Locale) ?? 'ca'
  const postUrl = getBlogPostUrl(slug, locale)
  
  return (
    <article className={`card hover:shadow-lg transition-all duration-300 group ${className}`}>
      <div className="relative overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Categories */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="px-3 py-1 bg-white bg-opacity-90 text-xs font-medium text-gray-800 rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        {/* Meta information */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <span>{author.name}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span>{date}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>{comments}</span>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          <Link 
            href={postUrl}
            className="hover:text-primary-600 transition-colors duration-200"
          >
            {title}
          </Link>
        </h3>
        
        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        {/* Read more link */}
        <Link
          href={postUrl}
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200 group-hover:translate-x-1 transform transition-transform"
        >
          Llegeix més
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  )
}

export default BlogCard
