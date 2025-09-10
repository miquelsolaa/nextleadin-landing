import { useTranslations } from 'next-intl'
import { BlogPostMeta } from '@/lib/blog'
import BlogPostCard from './BlogPostCard'

interface BlogPostListProps {
  posts: BlogPostMeta[]
  featuredPost?: BlogPostMeta
  showExcerpt?: boolean
}

export default function BlogPostList({ posts, featuredPost, showExcerpt = true }: BlogPostListProps) {
  const t = useTranslations('blog')

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {t('noPostsFound')}
        </h3>
        <p className="text-gray-600">
          {t('noPostsDescription')}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Article destacat */}
      {featuredPost && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {t('featuredPost')}
          </h2>
          <BlogPostCard post={featuredPost} showExcerpt={showExcerpt} featured />
        </div>
      )}

      {/* Llista d'articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogPostCard
            key={post.slug}
            post={post}
            showExcerpt={showExcerpt}
          />
        ))}
      </div>
    </div>
  )
}
