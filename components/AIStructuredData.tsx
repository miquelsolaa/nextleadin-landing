import React from 'react'
import SeoJsonLd from './SeoJsonLd'

interface AIStructuredDataProps {
  page: string
  locale: 'ca' | 'es' | 'en'
  customData?: Record<string, any>[]
  breadcrumbs?: Array<{
    name: string
    url: string
  }>
}

const AIStructuredData: React.FC<AIStructuredDataProps> = ({
  page,
  locale,
  customData = [],
  breadcrumbs = []
}) => {
  const generateAIStructuredData = () => {
    const baseUrl = 'https://nextleadin.com'
    const localePath = locale === 'es' ? '' : `/${locale}`
    const currentUrl = `${baseUrl}${localePath}${page === 'home' ? '' : `/${page}`}`
    const structuredData: Record<string, any>[] = []

    let finalBreadcrumbs = breadcrumbs
    if (finalBreadcrumbs.length === 0) {
      finalBreadcrumbs = [
        {
          name: locale === 'ca' ? 'Inici' : locale === 'es' ? 'Inicio' : 'Home',
          url: `${baseUrl}${localePath}`
        }
      ]
      
      // Afegir breadcrumbs segons la pàgina
      if (page !== 'home') {
        const pageNames: Record<string, Record<string, string>> = {
          pricing: {
            ca: 'Preus',
            es: 'Precios',
            en: 'Pricing'
          },
          blog: {
            ca: 'Blog',
            es: 'Blog',
            en: 'Blog'
          },
          faq: {
            ca: 'Preguntes freqüents',
            es: 'Preguntas frecuentes',
            en: 'FAQ'
          },
          contact: {
            ca: 'Contacte',
            es: 'Contacto',
            en: 'Contact'
          }
        }
        
        const pageName = pageNames[page]?.[locale] || page
        finalBreadcrumbs.push({
          name: pageName,
          url: currentUrl
        })
      }
    }

    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: finalBreadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url
      }))
    })

    if (page === 'home') {
      structuredData.push({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'NextLeadIn',
        url: baseUrl,
        logo: `${baseUrl}/images/logo/logo.png`,
        description:
          locale === 'ca'
            ? 'Plataforma de leads de negocis locals per a equips comercials i agències B2B.'
            : locale === 'es'
            ? 'Plataforma de leads de negocios locales para equipos comerciales y agencias B2B.'
            : 'Local business leads platform for B2B sales teams and agencies.',
        sameAs: [
          'https://linkedin.com/company/nextleadin',
          'https://instagram.com/nextleadin'
        ]
      })

      structuredData.push({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'NextLeadIn',
        url: baseUrl,
        inLanguage: locale === 'ca' ? 'ca-ES' : locale === 'es' ? 'es-ES' : 'en-US'
      })
    }

    if (page === 'blog') {
      structuredData.push({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: locale === 'ca' ? 'Blog NextLeadIn' : locale === 'es' ? 'Blog NextLeadIn' : 'NextLeadIn Blog',
        description: locale === 'ca'
          ? 'Articles i guies sobre generació de leads, IA i vendes B2B'
          : locale === 'es'
          ? 'Artículos y guías sobre generación de leads, IA y ventas B2B'
          : 'Articles and guides about lead generation, AI and B2B sales',
        url: `${baseUrl}${localePath}/blog`,
        publisher: {
          '@type': 'Organization',
          name: 'NextLeadIn',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/images/logo/logo.png`,
            width: 512,
            height: 512
          }
        },
        inLanguage: locale === 'ca' ? 'ca-ES' : locale === 'es' ? 'es-ES' : 'en-US',
        datePublished: '2024-01-01',
        dateModified: new Date().toISOString().split('T')[0],
        author: {
          '@type': 'Organization',
          name: 'NextLeadIn Team'
        }
      })
    }
    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: locale === 'ca'
        ? (page === 'home' ? 'NextLeadIn — Generació de leads amb IA' : page === 'pricing' ? 'Preus | NextLeadIn' : page === 'contact' ? 'Contacte | NextLeadIn' : page === 'faq' ? 'Preguntes freqüents | NextLeadIn' : 'NextLeadIn')
        : locale === 'es'
        ? (page === 'home' ? 'NextLeadIn — Generación de leads con IA' : page === 'pricing' ? 'Precios | NextLeadIn' : page === 'contact' ? 'Contacto | NextLeadIn' : page === 'faq' ? 'Preguntas frecuentes | NextLeadIn' : 'NextLeadIn')
        : (page === 'home' ? 'NextLeadIn — AI-Powered Lead Generation' : page === 'pricing' ? 'Pricing | NextLeadIn' : page === 'contact' ? 'Contact | NextLeadIn' : page === 'faq' ? 'FAQ | NextLeadIn' : 'NextLeadIn'),
      url: currentUrl,
      description: locale === 'ca'
        ? 'Plataforma de generació de leads amb intel·ligència artificial per a empreses B2B'
        : locale === 'es'
        ? 'Plataforma de generación de leads con inteligencia artificial para empresas B2B'
        : 'AI-powered lead generation platform for B2B companies',
      inLanguage: locale === 'ca' ? 'ca-ES' : locale === 'es' ? 'es-ES' : 'en-US',
      isPartOf: {
        '@type': 'WebSite',
        name: 'NextLeadIn',
        url: baseUrl
      },
      about: {
        '@type': 'Thing',
        name: 'Lead Generation Software'
      }
    })

    return [...structuredData, ...customData]
  }

  return <SeoJsonLd data={generateAIStructuredData()} />
}

export default AIStructuredData
