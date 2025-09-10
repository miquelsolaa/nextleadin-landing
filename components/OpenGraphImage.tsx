import React from 'react'

interface OpenGraphImageProps {
  title: string
  description: string
  locale: 'ca' | 'es' | 'en'
  page: string
}

const OpenGraphImage: React.FC<OpenGraphImageProps> = ({ title, description, locale, page }) => {
  // Aquest component genera imatges OpenGraph dinàmiques per a AI search
  // En un entorn de producció, es generarien amb @vercel/og o similar
  
  const getImageUrl = () => {
    const baseUrl = 'https://nextleadin.com'
    const localePath = locale === 'ca' ? '' : `/${locale}`
    
    // URLs d'imatges OpenGraph optimitzades per a cada pàgina i idioma
    const imageMap: Record<string, Record<string, string>> = {
      home: {
        ca: `${baseUrl}/images/og/home-ca.jpg`,
        es: `${baseUrl}/images/og/home-es.jpg`,
        en: `${baseUrl}/images/og/home-en.jpg`
      },
      pricing: {
        ca: `${baseUrl}/images/og/pricing-ca.jpg`,
        es: `${baseUrl}/images/og/pricing-es.jpg`,
        en: `${baseUrl}/images/og/pricing-en.jpg`
      },
      contact: {
        ca: `${baseUrl}/images/og/contact-ca.jpg`,
        es: `${baseUrl}/images/og/contact-es.jpg`,
        en: `${baseUrl}/images/og/contact-en.jpg`
      },
      faq: {
        ca: `${baseUrl}/images/og/faq-ca.jpg`,
        es: `${baseUrl}/images/og/faq-es.jpg`,
        en: `${baseUrl}/images/og/faq-en.jpg`
      }
    }
    
    return imageMap[page]?.[locale] || `${baseUrl}/images/og/default.jpg`
  }

  return (
    <div className="og-image-container" style={{ display: 'none' }}>
      {/* Aquest div és invisible però ajuda als crawlers AI a entendre el contingut */}
      <div className="og-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="og-meta">
          <span className="og-locale">{locale}</span>
          <span className="og-page">{page}</span>
        </div>
      </div>
      <img 
        src={getImageUrl()} 
        alt={`${title} - NextLeadIn`}
        style={{ display: 'none' }}
      />
    </div>
  )
}

export default OpenGraphImage
