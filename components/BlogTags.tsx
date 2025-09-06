import Link from 'next/link'

interface BlogTagsProps {
  tags: string[]
}

const BlogTags = ({ tags }: BlogTagsProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h4 className="text-lg font-semibold text-gray-900 mb-4">Tags</h4>
      <nav>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag.toLowerCase()}`}
              className="inline-block px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-green-100 hover:text-green-600 transition-colors"
            >
              {tag.toUpperCase()}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default BlogTags
