'use client'

import { useTranslations, useLocale } from 'next-intl'
import { getTagSlug } from '@/lib/blog-tags'
import type { Locale } from '@/lib/blog-utils'
import BlogTagLink from './BlogTagLink'

interface BlogTagsProps {
  tags: string[]
}

const BlogTags = ({ tags }: BlogTagsProps) => {
  const t = useTranslations('blog')
  const locale = (useLocale() as Locale) ?? 'ca'
  const blogBaseUrl = locale === 'ca' ? '/blog' : `/${locale}/blog`

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('allTags')}</h4>
      <nav>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <BlogTagLink
              key={tag}
              tag={tag}
              href={`${blogBaseUrl}/tag/${getTagSlug(tag)}`}
              variant="default"
              size="sm"
            />
          ))}
        </div>
      </nav>
    </div>
  )
}

export default BlogTags
