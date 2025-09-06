import Link from 'next/link'

interface Category {
  name: string
  count: number
}

interface BlogCategoriesProps {
  categories: Category[]
}

const BlogCategories = ({ categories }: BlogCategoriesProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h4 className="text-lg font-semibold text-gray-900 mb-4">Categories</h4>
      <nav>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name} className="flex items-center justify-between">
              <Link
                href={`/blog/category/${category.name.toLowerCase()}`}
                className="text-gray-600 hover:text-green-500 transition-colors"
              >
                {category.name}
              </Link>
              <span className="text-gray-400 text-sm">({category.count})</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default BlogCategories
