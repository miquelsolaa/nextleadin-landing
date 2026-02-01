'use client'

import { useTranslations } from 'next-intl'
import { getCategoryLabelKey } from '@/lib/blog-categories'

interface CategoryLabelProps {
  category: string
}

/**
 * Renders the category name translated according to the current locale.
 * Categories are stored in English in frontmatter; this component shows the UI translation.
 */
export default function CategoryLabel({ category }: CategoryLabelProps) {
  const t = useTranslations('blog')
  const key = getCategoryLabelKey(category)
  if (key) {
    return <>{t(`categoryLabels.${key}`)}</>
  }
  return <>{category}</>
}
