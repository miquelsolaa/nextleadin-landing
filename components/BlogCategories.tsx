import Tag from './Tag'
import { getTranslations } from 'next-intl/server'

interface Category {
  name: string
  count: number
}

interface BlogCategoriesProps {
  categories: Category[]
}

const BlogCategories = async ({ categories }: BlogCategoriesProps) => {
  const t = await getTranslations('blog')
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('categories')}</h4>
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
