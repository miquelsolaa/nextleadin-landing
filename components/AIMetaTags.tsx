import React from 'react'
import Head from 'next/head'

interface AIMetaTagsProps {
  title: string
  description: string
  keywords: string[]
  canonical: string
  locale: 'ca' | 'es' | 'en'
  page: string
  structuredData?: Record<string, any>[]
}

const AIMetaTags: React.FC<AIMetaTagsProps> = ({
  title,
  description,
  keywords,
  canonical,
  locale,
  page,
  structuredData = []
}) => {
  const baseUrl = 'https://nextleadin.com'
  const localePath = locale === 'ca' ? '' : `/${locale}`
  const fullUrl = `${baseUrl}${localePath}${page === 'home' ? '' : `/${page}`}`
  
  // Meta tags optimitzats per a AI search engines
  const aiOptimizedTags = [
    // Meta tags bàsics
    { name: 'title', content: title },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords.join(', ') },
    { name: 'author', content: 'NextLeadIn Team' },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
    
    // Meta tags per a AI search
    { name: 'ai-content-type', content: 'business-software' },
    { name: 'ai-service-category', content: 'lead-generation' },
    { name: 'ai-target-audience', content: 'B2B-sales-teams' },
    { name: 'ai-features', content: 'geographic-segmentation,ai-reports,crm-integration' },
    { name: 'ai-pricing-range', content: '19-99-eur-monthly' },
    
    // Meta tags geogràfics
    { name: 'geo.region', content: 'ES-CT' },
    { name: 'geo.placename', content: 'Barcelona' },
    { name: 'geo.position', content: '41.3851;2.1734' },
    { name: 'ICBM', content: '41.3851, 2.1734' },
    
    // Meta tags de llengua
    { name: 'language', content: locale === 'ca' ? 'ca-ES' : locale === 'es' ? 'es-ES' : 'en-US' },
    { name: 'content-language', content: locale === 'ca' ? 'ca' : locale === 'es' ? 'es' : 'en' },
    
    // Meta tags de contingut
    { name: 'content-type', content: 'text/html; charset=utf-8' },
    { name: 'content-script-type', content: 'text/javascript' },
    { name: 'content-style-type', content: 'text/css' },
    
    // Meta tags de negoci
    { name: 'business-type', content: 'SaaS' },
    { name: 'service-area', content: 'Spain, Europe' },
    { name: 'target-market', content: 'B2B companies' },
    { name: 'industry', content: 'Lead Generation, Sales Automation' },
    
    // Meta tags de contacte
    { name: 'contact-email', content: 'contacto@nextleadin.com' },
    { name: 'contact-phone', content: '+34-684-781-855' },
    { name: 'business-hours', content: 'Monday-Friday 9:00-18:00' },
    
    // Meta tags de preus
    { name: 'pricing-start', content: '19' },
    { name: 'pricing-currency', content: 'EUR' },
    { name: 'pricing-period', content: 'monthly' },
    { name: 'free-trial', content: 'yes' },
    
    // Meta tags de funcionalitats
    { name: 'features', content: 'AI reports, Geographic segmentation, CRM integration, Lead qualification' },
    { name: 'integrations', content: 'HubSpot, Zapier, Salesforce, CSV export' },
    { name: 'ai-capabilities', content: 'Lead scoring, Contact angle suggestions, Objection handling' },
    
    // Meta tags de rendiment
    { name: 'performance-metrics', content: '85-90% accuracy, 500km radius coverage' },
    { name: 'data-update-frequency', content: 'daily' },
    { name: 'lead-volume', content: '500-2500-unlimited' },
    
    // Meta tags de seguretat
    { name: 'security-compliance', content: 'GDPR, data protection' },
    { name: 'data-encryption', content: 'yes' },
    { name: 'privacy-policy', content: `${baseUrl}/privacy-policy` },
    
    // Meta tags de suport
    { name: 'support-channels', content: 'email, chat, phone' },
    { name: 'support-hours', content: 'Monday-Friday 9:00-18:00' },
    { name: 'documentation', content: `${baseUrl}/faq` },
    
    // Meta tags de social
    { name: 'social-linkedin', content: 'https://linkedin.com/company/nextleadin' },
    { name: 'social-twitter', content: '@nextleadin' },
    
    // Meta tags de contingut AI
    { name: 'ai-generated-content', content: 'lead-reports, contact-suggestions' },
    { name: 'ai-model-version', content: '1.0' },
    { name: 'ai-accuracy', content: '85-90%' },
    
    // Meta tags de localització
    { name: 'available-languages', content: 'ca, es, en' },
    { name: 'default-language', content: 'ca' },
    { name: 'hreflang-alternates', content: 'ca-ES, es-ES, en-US' },
    
    // Meta tags de contingut específic
    { name: 'content-category', content: 'business-software' },
    { name: 'content-subcategory', content: 'lead-generation' },
    { name: 'content-tags', content: 'AI, B2B, sales, leads, CRM, automation' },
    
    // Meta tags de rendiment SEO
    { name: 'seo-priority', content: 'high' },
    { name: 'content-freshness', content: 'daily' },
    { name: 'content-depth', content: 'comprehensive' },
    
    // Meta tags de conversió
    { name: 'conversion-goal', content: 'lead-generation' },
    { name: 'cta-primary', content: 'Start free trial' },
    { name: 'cta-secondary', content: 'Contact sales' },
    
    // Meta tags de confiança
    { name: 'trust-signals', content: 'free-trial, no-credit-card, money-back-guarantee' },
    { name: 'customer-testimonials', content: 'available' },
    { name: 'case-studies', content: 'available' },
    
    // Meta tags de competència
    { name: 'competitors', content: 'Apollo, ZoomInfo, Leadfeeder' },
    { name: 'differentiators', content: 'AI-powered, Spanish market focus, geographic precision' },
    
    // Meta tags de contingut educatiu
    { name: 'educational-content', content: 'blog, guides, tutorials' },
    { name: 'learning-resources', content: 'available' },
    { name: 'best-practices', content: 'provided' }
  ]

  return (
    <Head>
      {/* Meta tags bàsics */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonical} />
      
      {/* Hreflang tags per a multilingüe */}
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/es${page === 'home' ? '' : `/${page}`}`} />
      <link rel="alternate" hrefLang="ca-ES" href={`${baseUrl}${page === 'home' ? '' : `/${page}`}`} />
      <link rel="alternate" hrefLang="es-ES" href={`${baseUrl}/es${page === 'home' ? '' : `/${page}`}`} />
      <link rel="alternate" hrefLang="en-US" href={`${baseUrl}/en${page === 'home' ? '' : `/${page}`}`} />
      
      {/* Meta tags AI-optimitzats */}
      {aiOptimizedTags.map((tag, index) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}
      
      {/* OpenGraph tags */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale === 'ca' ? 'ca_ES' : locale === 'es' ? 'es_ES' : 'en_US'} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="NextLeadIn" />
      <meta property="og:image" content={`${baseUrl}/images/og/${page}-${locale}.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}/images/og/${page}-${locale}.jpg`} />
      <meta name="twitter:creator" content="@nextleadin" />
      <meta name="twitter:site" content="@nextleadin" />
      
      {/* Structured Data */}
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </Head>
  )
}

export default AIMetaTags
