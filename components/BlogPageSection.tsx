'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CalendarDays, User } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { getBlogPostUrl, type Locale } from '@/lib/blog-utils'
import CategoryLabel from './CategoryLabel'

interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  image: string
  categories: string[]
  author: string
  date: string
  url?: string
}

interface BlogPageSectionProps {
  posts: BlogPost[]
}

const BlogPageSection = ({ posts }: BlogPageSectionProps) => {
  const t = useTranslations('blog')
  const locale = (useLocale() as Locale) ?? 'es'
  const blogBaseUrl = locale === 'es' ? '/blog' : `/${locale}/blog`
  
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2">
      {posts.map((post) => {
        const postUrl = post.url || getBlogPostUrl(post.slug, locale)

        return (
          <article
            key={post.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Imatge */}
            <Link
              href={postUrl}
              className="relative block aspect-[16/9] overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {post.categories && post.categories.length > 0 && (
                <div className="pointer-events-none absolute left-4 top-4 flex max-w-full flex-wrap gap-2">
                  {post.categories.slice(0, 2).map((category) => (
                    <span
                      key={category}
                      className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-800 shadow-sm"
                    >
                      <CategoryLabel category={category} />
                    </span>
                  ))}
                </div>
              )}
            </Link>

            {/* Contingut */}
            <div className="flex flex-1 flex-col p-6">
              {/* Meta */}
              <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-medium text-gray-500">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" aria-hidden />
                  <span>{post.date}</span>
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <User className="h-4 w-4" aria-hidden />
                  <Link
                    href={`${blogBaseUrl}/author/${(post.author || 'unknown')
                      .toLowerCase()
                      .replace(' ', '-')}`}
                    className="hover:text-green-600"
                  >
                    {post.author || 'Unknown'}
                  </Link>
                </span>
              </div>

              {/* Títol */}
              <h2 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900 transition-colors duration-200 group-hover:text-green-600 md:text-xl">
                <Link href={postUrl}>{post.title}</Link>
              </h2>

              {/* Extracte */}
              <p className="mb-4 line-clamp-3 text-sm text-gray-600 md:text-base">
                {post.excerpt}
              </p>

              {/* CTA */}
              <div className="mt-auto pt-2">
                <Link
                  href={postUrl}
                  className="inline-flex items-center text-sm font-medium text-green-600 transition-colors duration-200 hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                >
                  <span>{t('readMore')}</span>
                  <span className="ml-1 transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default BlogPageSection
