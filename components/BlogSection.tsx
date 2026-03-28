'use client'

import { Link } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { CalendarDays, User } from 'lucide-react'
import { getBlogPostUrl, type Locale } from '@/lib/blog-utils'
import CategoryLabel from './CategoryLabel'

interface BlogPost {
  title: string
  excerpt: string
  image: string
  categories: string[]
  author: { name: string }
  date: string
  slug: string
}

interface BlogSectionProps {
  blogPosts: BlogPost[]
}

const BlogSection = ({ blogPosts }: BlogSectionProps) => {
  const locale = (useLocale() as Locale) ?? 'es'
  const blogBaseUrl = locale === 'es' ? '/blog' : `/${locale}/blog`

  const translations = (() => {
    if (locale === 'es') {
      return {
        title: 'Guías sobre',
        titleHighlight: 'leads de negocios locales',
        titleSuffix: ' y cold call',
        description: 'Descubre estrategias para conseguir leads de negocios locales que no están en LinkedIn, preparar llamadas en frío con IA y cerrar más ventas B2B en España.',
        cta: 'Ver todos los artículos',
        readMore: 'Leer más'
      }
    }
    if (locale === 'en') {
      return {
        title: 'Guides on',
        titleHighlight: 'local business leads',
        titleSuffix: ' and cold calling',
        description: 'Discover strategies to get local business leads beyond LinkedIn, prepare AI-powered cold calls and close more B2B deals.',
        cta: 'View all articles',
        readMore: 'Read more'
      }
    }
    return {
      title: 'Últims articles del',
      titleHighlight: 'blog',
      titleSuffix: '',
      description: 'Descobreix estratègies, consells i tendències per millorar la teva generació de leads i vendes B2B.',
      cta: 'Veure tots els articles',
      readMore: 'Llegir més'
    }
  })()

  if (blogPosts.length === 0) {
    return null
  }

  return (
    <section className="py-16 md:py-20 bg-gray-100">
      <div className="container-custom flex flex-col gap-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {translations.title}{' '}
              <span className="text-primary-600">{translations.titleHighlight}</span>
              {translations.titleSuffix}
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-lg text-gray-600 leading-relaxed">
              {translations.description}
            </p>
          </div>
          <div className="lg:col-span-3 flex justify-start lg:justify-end">
            <Link
              href={blogBaseUrl}
              className="btn-primary"
            >
              {translations.cta}
            </Link>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group flex flex-col rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <Link href={getBlogPostUrl(post.slug, locale)} className="block overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories.map((category, catIndex) => (
                    <Link
                      key={catIndex}
                      href={`${blogBaseUrl}/category/${(category || '').toLowerCase()}`}
                      rel="category tag"
                      className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700"
                    >
                      <CategoryLabel category={category || ''} />
                    </Link>
                  ))}
                </div>
                <div className="mb-2 flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4 shrink-0" aria-hidden />
                    <Link
                      href={`${blogBaseUrl}/author/${(post.author?.name || 'unknown')
                        .toLowerCase()
                        .replace(' ', '-')}`}
                      className="hover:text-primary-600 transition-colors"
                    >
                      {post.author?.name || 'Unknown'}
                    </Link>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CalendarDays className="w-4 h-4 shrink-0" aria-hidden />
                    <span>{post.date}</span>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-snug line-clamp-2 mt-1">
                  <Link
                    href={getBlogPostUrl(post.slug, locale)}
                    className="hover:text-primary-600 transition-colors duration-200"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm md:text-base text-gray-600 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <Link
                  href={getBlogPostUrl(post.slug, locale)}
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors duration-200"
                  aria-label={`${translations.readMore}: ${post.title}`}
                >
                  {translations.readMore}
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
