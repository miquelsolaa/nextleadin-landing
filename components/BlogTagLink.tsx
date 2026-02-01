'use client'

import { useTranslations } from 'next-intl'
import { getTagLabelKey } from '@/lib/blog-tags'
import Tag from './Tag'

interface BlogTagLinkProps {
  tag: string
  href: string
  variant?: 'default' | 'outline' | 'solid'
  size?: 'sm' | 'md' | 'lg'
}

/**
 * Renders a Tag with the tag name translated for the current locale.
 * Use for tag links in sidebar and article pages.
 */
export default function BlogTagLink({ tag, href, variant = 'default', size = 'sm' }: BlogTagLinkProps) {
  const t = useTranslations('blog')
  const key = getTagLabelKey(tag)
  const label = key ? t(`tagLabels.${key}`) : tag
  return <Tag tag={label} href={href} variant={variant} size={size} />
}
