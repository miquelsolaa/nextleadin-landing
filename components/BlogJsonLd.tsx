import type { BlogPost } from '@/lib/blog'
import { getBlogPostUrl, type Locale } from '@/lib/blog-utils'

interface BlogJsonLdProps {
  post: BlogPost
  locale?: Locale
}

export default function BlogJsonLd({ post, locale = 'ca' }: BlogJsonLdProps) {
  const postUrl = getBlogPostUrl(post.slug, locale)
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image ? [post.image] : [],
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'NextLeadIn',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nextleadin.com/images/logo/logo.svg',
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://nextleadin.com${postUrl}`,
    },
    keywords: post.tags?.join(', ') || '',
    articleSection: post.categories?.join(', ') || '',
    wordCount: post.content.split(' ').length,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
