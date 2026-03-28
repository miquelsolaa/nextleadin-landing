import { Link } from '@/i18n/routing'

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
  basePath: string
  query?: Record<string, string | undefined>
}

const BlogPagination = ({ currentPage, totalPages, basePath, query }: BlogPaginationProps) => {
  if (totalPages <= 1) {
    return null
  }

  const getPageHref = (page: number) => {
    const params = new URLSearchParams()
    if (query) {
      Object.entries(query).forEach(([key, value]) => {
        if (value) params.set(key, value)
      })
    }
    if (page > 1) params.set('page', String(page))
    const qs = params.toString()
    return qs ? `${basePath}?${qs}` : basePath
  }

  return (
    <nav className="flex justify-center items-center space-x-2 mt-12">
      <h2 className="sr-only">Posts pagination</h2>
      <div className="flex items-center space-x-2">
        {/* Previous */}
        {currentPage > 1 && (
          <Link
            href={getPageHref(currentPage - 1)}
            className="px-3 py-2 text-sm text-gray-600 hover:text-green-500 hover:bg-gray-100 rounded-md transition-colors"
          >
            ‹
          </Link>
        )}

        {/* Current */}
        <span className="px-4 py-2 bg-green-500 text-white rounded-md font-medium text-sm">
          {currentPage} / {totalPages}
        </span>

        {/* Next */}
        {currentPage < totalPages && (
          <Link
            href={getPageHref(currentPage + 1)}
            className="px-3 py-2 text-sm text-gray-600 hover:text-green-500 hover:bg-gray-100 rounded-md transition-colors"
          >
            ›
          </Link>
        )}
      </div>
    </nav>
  )
}

export default BlogPagination
