import Link from 'next/link'

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
}

const BlogPagination = ({ currentPage, totalPages }: BlogPaginationProps) => {
  return (
    <nav className="flex justify-center items-center space-x-2 mt-12">
      <h2 className="sr-only">Posts pagination</h2>
      <div className="flex items-center space-x-2">
        {/* Current Page */}
        <span className="px-4 py-2 bg-green-500 text-white rounded-md font-medium">
          {currentPage}
        </span>
        
        {/* Next Page */}
        {currentPage < totalPages && (
          <Link
            href={`/blog?page=${currentPage + 1}`}
            className="px-4 py-2 text-gray-600 hover:text-green-500 hover:bg-gray-100 rounded-md transition-colors"
          >
            {currentPage + 1}
          </Link>
        )}
        
        {/* Next Button */}
        {currentPage < totalPages && (
          <Link
            href={`/blog?page=${currentPage + 1}`}
            className="px-4 py-2 text-gray-600 hover:text-green-500 hover:bg-gray-100 rounded-md transition-colors"
          >
            Next
          </Link>
        )}
      </div>
    </nav>
  )
}

export default BlogPagination
