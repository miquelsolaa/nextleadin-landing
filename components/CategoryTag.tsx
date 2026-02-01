'use client'

import { useTranslations } from 'next-intl'
import { getCategoryLabelKey } from '@/lib/blog-categories'
import Tag from './Tag'

interface CategoryTagProps {
  category: string
  href: string
  variant?: 'default' | 'outline'
  size?: 'sm' | 'md'
}

/**
 * Renders a Tag with the category name translated for the current locale.
 * Use when the Tag component needs a string (e.g. tag={translatedLabel}).
 */
export default function CategoryTag({ category, href, variant = 'outline', size = 'sm' }: CategoryTagProps) {
  const t = useTranslations('blog')
  const key = getCategoryLabelKey(category)
  const label = key ? t(`categoryLabels.${key}`) : category
  return <Tag tag={label} href={href} variant={variant} size={size} />
}
