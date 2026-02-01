'use client'

import { useTranslations } from 'next-intl'
import { getTagLabelKey } from '@/lib/blog-tags'

interface TagLabelProps {
  tag: string
}

/**
 * Renders the tag name translated according to the current locale.
 * Tags are stored in English in frontmatter; this component shows the UI translation.
 */
export default function TagLabel({ tag }: TagLabelProps) {
  const t = useTranslations('blog')
  const key = getTagLabelKey(tag)
  if (key) {
    return <>{t(`tagLabels.${key}`)}</>
  }
  return <>{tag}</>
}
