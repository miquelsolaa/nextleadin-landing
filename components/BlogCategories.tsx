'use client'

import Tag from './Tag'
import { useTranslations, useLocale } from 'next-intl'
import { getCategoryLabelKey } from '@/lib/blog-categories'
import type { Locale } from '@/lib/blog-utils'

interface Category {
  name: string
  count: number
}

interface BlogCategoriesProps {
  categories: Category[]
}

const BlogCategories = ({ categories }: BlogCategoriesProps) => {
  const t = useTranslations('blog')
  const locale = (useLocale() as Locale) ?? 'ca'
  const blogBaseUrl = locale === 'ca' ? '/blog' : `/${locale}/blog`

  const getCategoryLabel = (name: string): string => {
    const key = getCategoryLabelKey(name)
    return key ? t(`categoryLabels.${key}`) : name
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('categories')}</h4>
      <nav>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Tag
              key={category.name}
              tag={`${getCategoryLabel(category.name)} (${category.count})`}
              href={`${blogBaseUrl}/category/${encodeURIComponent(category.name.toLowerCase())}`}
              variant="outline"
              size="sm"
            />
          ))}
        </div>
      </nav>
    </div>
  )
}

export default BlogCategories
