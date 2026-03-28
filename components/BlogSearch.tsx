'use client'

import { Search } from 'lucide-react'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const BlogSearch = () => {
  const locale = (useLocale() as 'es' | 'ca' | 'en') ?? 'es'
  const router = useRouter()
  const [query, setQuery] = useState('')

  const translations = (() => {
    if (locale === 'es') {
      return {
        search: 'Buscar artículos',
      }
    }
    if (locale === 'en') {
      return {
        search: 'Search articles',
      }
    }
    return {
      search: 'Cercar articles',
    }
  })()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const q = query.trim()
    const localePath = locale === 'es' ? '' : `/${locale}`
    const href = q ? `${localePath}/blog?query=${encodeURIComponent(q)}` : `${localePath}/blog`
    router.push(href)
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h4 className="text-lg font-semibold text-gray-900 mb-4">{translations.search}</h4>
      <form className="relative" onSubmit={handleSubmit}>
        <label htmlFor="blog-search" className="sr-only">
          {translations.search}
        </label>
        <input
          id="blog-search"
          name="query"
          type="search"
          placeholder={translations.search}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
        />
        <button
          type="submit"
          aria-label={translations.search}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-green-500 transition-colors"
        >
          <Search className="h-5 w-5" aria-hidden="true" />
        </button>
      </form>
    </div>
  )
}

export default BlogSearch
