import Image from 'next/image'
import { CalendarDays, User, Tag } from 'lucide-react'
import { BlogPost } from '@/lib/blog'
import styles from './BlogPostContent.module.css'

interface BlogPostContentProps {
  post: BlogPost
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ca-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header de l'article */}
      <header className="mb-8">
        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category) => (
              <span
                key={category}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
              >
                {category}
              </span>
            ))}
          </div>
        )}

        {/* Títol */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Descripció */}
        {post.description && (
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {post.description}
          </p>
        )}

        {/* Metadades */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span className="font-medium">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5" />
            <span>{formatDate(post.date)}</span>
          </div>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap mb-8">
            <Tag className="w-5 h-5 text-gray-400" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Imatge destacada */}
        {post.featuredImage && (
          <div className="relative w-full h-64 lg:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </header>

      {/* Contingut de l'article */}
      <div 
        className={`prose prose-lg max-w-none ${styles.prose}`}
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  )
}
