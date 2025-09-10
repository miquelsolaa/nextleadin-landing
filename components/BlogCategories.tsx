'use client'

import Tag from './Tag'
import { useLocale } from 'next-intl'

interface Category {
  name: string
  count: number
}

interface BlogCategoriesProps {
  categories: Category[]
}

const BlogCategories = ({ categories }: BlogCategoriesProps) => {
  const locale = (useLocale() as 'es' | 'ca' | 'en') ?? 'es'

  const translations = (() => {
    if (locale === 'es') {
      return {
        categories: 'Categorías'
      }
    }
    if (locale === 'en') {
      return {
        categories: 'Categories'
      }
    }
    return {
      categories: 'Categories'
    }
  })()
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h4 className="text-lg font-semibold text-gray-900 mb-4">{translations.categories}</h4>
      <nav>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Tag
              key={category.name}
              tag={`${category.name} (${category.count})`}
              href={`/blog/category/${category.name.toLowerCase()}`}
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
