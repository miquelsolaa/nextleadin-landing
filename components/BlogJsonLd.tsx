import { BlogPost } from '@/lib/blog'

interface BlogJsonLdProps {
  post: BlogPost
}

export default function BlogJsonLd({ post }: BlogJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.featuredImage ? [post.featuredImage] : [],
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
      '@id': `https://nextleadin.com/blog/${post.slug}`,
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
