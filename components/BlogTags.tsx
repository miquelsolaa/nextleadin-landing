import Tag from './Tag'
import { getTranslations } from 'next-intl/server'

interface BlogTagsProps {
  tags: string[]
}

const BlogTags = async ({ tags }: BlogTagsProps) => {
  const t = await getTranslations('blog')
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('tags')}</h4>
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
