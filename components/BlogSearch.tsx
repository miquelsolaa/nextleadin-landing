import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { getTranslations } from 'next-intl/server'

const BlogSearch = async () => {
  const t = await getTranslations('blog')

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('search')}</h4>
      <form className="relative">
        <input
          type="text"
          placeholder={t('search')}
          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-green-500 transition-colors"
        >
          <MagnifyingGlassIcon className="h-5 w-5" />
        </button>
      </form>
    </div>
  )
}

export default BlogSearch
