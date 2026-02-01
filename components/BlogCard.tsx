'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { CalendarDays, User } from 'lucide-react'
import { getBlogPostUrl, type Locale } from '@/lib/blog-utils'
import CategoryLabel from './CategoryLabel'

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
              <CategoryLabel category={category} />
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        {/* Meta information */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 shrink-0" aria-hidden />
            <span>{author.name}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4 shrink-0" aria-hidden />
            <span>{date}</span>
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
