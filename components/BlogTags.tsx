'use client'

import Tag from './Tag'
import { useLocale } from 'next-intl'

interface BlogTagsProps {
  tags: string[]
}

const BlogTags = ({ tags }: BlogTagsProps) => {
  const locale = (useLocale() as 'es' | 'ca' | 'en') ?? 'es'

  const translations = (() => {
    if (locale === 'es') {
      return {
        tags: 'Etiquetas'
      }
    }
    if (locale === 'en') {
      return {
        tags: 'Tags'
      }
    }
    return {
      tags: 'Etiquetes'
    }
  })()
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h4 className="text-lg font-semibold text-gray-900 mb-4">{translations.tags}</h4>
      <nav>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag
              key={tag}
              tag={tag}
              href={`/blog/tag/${tag.toLowerCase()}`}
              variant="default"
              size="sm"
            />
          ))}
        </div>
      </nav>
    </div>
  )
}

export default BlogTags
