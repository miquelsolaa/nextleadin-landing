import type { BlogPost } from '@/lib/blog'
import { getBlogPostUrl, type Locale } from '@/lib/blog-utils'

interface BlogJsonLdProps {
  post: BlogPost
  locale?: Locale
}

export default function BlogJsonLd({ post, locale = 'ca' }: BlogJsonLdProps) {
  const postUrl = getBlogPostUrl(post.slug, locale)
  const baseUrl = 'https://nextleadin.com'
  const fullUrl = `${baseUrl}${postUrl}`
  
  // Processar imatge amb URL completa
  const imageUrl = post.image 
    ? (post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`)
    : `${baseUrl}/images/og/default.jpg`
  
  // Processar dates
  const datePublished = post.date ? new Date(post.date).toISOString() : new Date().toISOString()
  const dateModified = post.date ? new Date(post.date).toISOString() : datePublished
  
  // Determinar idioma
  const inLanguage = locale === 'ca' ? 'ca-ES' : locale === 'es' ? 'es-ES' : 'en-US'
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': fullUrl,
    headline: post.title,
    description: post.description,
    image: [
      {
        '@type': 'ImageObject',
        url: imageUrl,
        width: 1200,
        height: 630,
        caption: post.title,
      }
    ],
    author: {
      '@type': 'Person',
      name: post.author || 'NextLeadIn Team',
      url: `${baseUrl}`,
      jobTitle: 'Content Creator',
      worksFor: {
        '@type': 'Organization',
        name: 'NextLeadIn',
        url: baseUrl,
      },
      sameAs: [
        'https://linkedin.com/company/nextleadin',
        'https://twitter.com/nextleadin'
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: 'NextLeadIn',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo/logo.png`,
        width: 512,
        height: 512,
      },
      url: baseUrl,
      sameAs: [
        'https://linkedin.com/company/nextleadin',
        'https://twitter.com/nextleadin'
      ],
      foundingDate: '2024',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+34-684-781-855',
        contactType: 'customer service',
        areaServed: 'ES',
        availableLanguage: ['ca', 'es', 'en']
      }
    },
    datePublished,
    dateModified: post.dateModified ? new Date(post.dateModified).toISOString() : dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
      url: fullUrl,
      name: post.title,
      description: post.description,
      inLanguage,
      isPartOf: {
        '@type': 'WebSite',
        name: 'NextLeadIn',
        url: baseUrl,
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: locale === 'ca' ? 'Inici' : locale === 'es' ? 'Inicio' : 'Home',
            item: `${baseUrl}${locale === 'ca' ? '' : `/${locale}`}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${baseUrl}${locale === 'ca' ? '' : `/${locale}`}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: fullUrl,
          },
        ],
      },
    },
    url: fullUrl,
    inLanguage,
    keywords: post.tags?.join(', ') || '',
    articleSection: post.categories?.join(', ') || 'Business',
    wordCount: post.content.split(' ').length,
    articleBody: post.contentHtml || post.content,
    genre: 'Business',
    about: {
      '@type': 'Thing',
      name: 'Lead Generation',
    },
    // Afegir informació addicional per a millor SEO
    isAccessibleForFree: true,
    isPartOf: {
      '@type': 'Blog',
      name: 'NextLeadIn Blog',
      url: `${baseUrl}${locale === 'ca' ? '' : `/${locale}`}/blog`,
    },
    // Afegir breadcrumbs si estan disponibles (millorat)
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: locale === 'ca' ? 'Inici' : locale === 'es' ? 'Inicio' : 'Home',
          item: `${baseUrl}${locale === 'ca' ? '' : `/${locale}`}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: `${baseUrl}${locale === 'ca' ? '' : `/${locale}`}/blog`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.title,
          item: fullUrl,
        },
      ],
    },
    // Afegir informació addicional per millor SEO
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2']
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
