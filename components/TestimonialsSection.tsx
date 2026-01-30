'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from 'next-intl'

interface Testimonial {
  content: string
  author: {
    name: string
    role: string
    image: string
  }
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[]
}

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  const locale = (useLocale() as 'es' | 'ca' | 'en') ?? 'es'

  const translations = (() => {
    if (locale === 'es') {
      return {
        title: 'Lo que dicen nuestros',
        titleHighlight: 'clientes',
        description: 'Descubre cómo NextLeadIn está transformando la generación de leads para empresas de todos los tamaños.',
        cta: 'Ver más testimonios',
        readMore: 'Ver más reseñas'
      }
    }
    if (locale === 'en') {
      return {
        title: 'What our clients',
        titleHighlight: 'think',
        description: 'Discover how NextLeadIn is transforming lead generation for companies of all sizes.',
        cta: 'View more testimonials',
        readMore: 'Read more reviews'
      }
    }
    return {
      title: 'El que diuen els nostres',
      titleHighlight: 'clients',
      description: 'Descobreix com NextLeadIn està transformant la generació de leads per a empreses de tots els mides.',
      cta: 'Veure més testimonis',
      readMore: 'Veure més ressenyes'
    }
  })()
  
  // Testimonials data with different images for each - multilingual
  const getTestimonials = (): Testimonial[] => {
    const testimonialsData = {
      ca: [
        {
          content: "Hem duplicat la taxa de conversió a reunió. Les fitxes amb IA ens han estalviat hores de preparació per comercial.",
          author: {
            name: "Marta Rovira",
            role: "Head of Sales",
            image: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/10/review3.jpg'
          }
        },
        {
          content: "La segmentació per zona i sector és ultra precisa. En una setmana vam obrir tres oportunitats al nostre nínxol B2B.",
          author: {
            name: "Jordi Pons",
            role: "Business Development",
            image: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/10/review2.jpg'
          }
        },
        {
          content: "Les trucades són molt més rellevants. Els informes suggereixen angles i objeccions clau que abans descobríem massa tard.",
          author: {
            name: "Núria Serra",
            role: "Account Executive",
            image: 'https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg'
          }
        },
        {
          content: "Implementació en dos dies i integració amb el nostre CRM sense friccions. Pipeline sempre ple i prioritzat.",
          author: {
            name: "Pol Garcia",
            role: "Revenue Operations",
            image: 'https://images.pexels.com/photos/7752893/pexels-photo-7752893.jpeg'
          }
        },
        {
          content: "Ideal per a SaaS que volen créixer ràpid i captar clients de manera efectiva. Amb NextLeadIn hem passat de contactes dispersos a converses de valor que generen oportunitats reals.",
          author: {
            name: "Agustí Navarro",
            role: "CTO",
            image: '/images/testimonials/ramon.jpg'
          }
        }
      ],
      es: [
        {
          content: "Hemos duplicado la tasa de conversión a reunión. Las fichas con IA nos han ahorrado horas de preparación comercial.",
          author: {
            name: "Marta Rovira",
            role: "Head of Sales",
            image: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/10/review3.jpg'
          }
        },
        {
          content: "La segmentación por zona y sector es ultra precisa. En una semana abrimos tres oportunidades en nuestro nicho B2B.",
          author: {
            name: "Jordi Pons",
            role: "Business Development",
            image: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/10/review2.jpg'
          }
        },
        {
          content: "Las llamadas son mucho más relevantes. Los informes sugieren ángulos y objeciones clave que antes descubríamos demasiado tarde.",
          author: {
            name: "Núria Serra",
            role: "Account Executive",
            image: 'https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg'
          }
        },
        {
          content: "Implementación en dos días e integración con nuestro CRM sin fricciones. Pipeline siempre lleno y priorizado.",
          author: {
            name: "Pol Garcia",
            role: "Revenue Operations",
            image: 'https://images.pexels.com/photos/7752893/pexels-photo-7752893.jpeg'
          }
        },
        {
          content: "Ideal para SaaS que quieren crecer rápido y captar clientes de manera efectiva. Con NextLeadIn hemos pasado de contactos dispersos a conversaciones de valor que generan oportunidades reales.",
          author: {
            name: "Agustí Navarro",
            role: "CTO",
            image: '/images/testimonials/ramon.jpg'
          }
        }
      ],
      en: [
        {
          content: "We've doubled our meeting conversion rate. The AI-powered profiles have saved us hours of sales preparation.",
          author: {
            name: "Marta Rovira",
            role: "Head of Sales",
            image: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/10/review3.jpg'
          }
        },
        {
          content: "The geographic and sector segmentation is ultra-precise. In one week we opened three opportunities in our B2B niche.",
          author: {
            name: "Jordi Pons",
            role: "Business Development",
            image: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/10/review2.jpg'
          }
        },
        {
          content: "The calls are much more relevant. The reports suggest key angles and objections that we used to discover too late.",
          author: {
            name: "Núria Serra",
            role: "Account Executive",
            image: 'https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg'
          }
        },
        {
          content: "Implementation in two days and seamless CRM integration. Pipeline always full and prioritized.",
          author: {
            name: "Pol Garcia",
            role: "Revenue Operations",
            image: 'https://images.pexels.com/photos/7752893/pexels-photo-7752893.jpeg'
          }
        },
        {
          content: "Ideal for SaaS companies looking to grow quickly and attract clients effectively. With NextLeadIn, we moved from scattered leads to valuable conversations that generate real opportunities.",
          author: {
            name: "Agustí Navarro",
            role: "CTO",
            image: '/images/testimonials/ramon.jpg'
          }
        }
      ]
    }
    
    return testimonialsData[locale as keyof typeof testimonialsData] || testimonialsData.es
  }
  
  const defaultTestimonials = getTestimonials()
  
  // Use provided testimonials or default ones
  const displayTestimonials = testimonials || defaultTestimonials
  return (
    <div className="elementor-element elementor-element-1fdd1311 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-id="1fdd1311" data-element_type="container" data-settings='{"background_background":"classic"}'>
      <div className="e-con-inner">
        {/* Header Section - 3 Columns Layout */}
        <div className="elementor-element elementor-element-9b581e1 e-con-full e-flex e-con e-child" data-id="9b581e1" data-element_type="container">
          {/* Left Column - Title */}
          <div className="header-title-column">
            <h2 className="ekit-heading--title elementskit-section-title">
              {translations.title}{" "}<span className="case-studies-underline">{translations.titleHighlight}</span>
            </h2>
          </div>
          
          {/* Center Column - Description */}
          <div className="header-description-column">
            <p className="ekit-heading__description">
              {translations.description}
            </p>
          </div>
          
          {/* Right Column - Button */}
          <div className="header-button-column">
            <Link href="#" className="elementskit-btn">
              <span className="button-wrapper">{translations.cta}</span>
            </Link>
          </div>
        </div>

        {/* Testimonial Cards Grid - 3x2 Layout */}
        <div className="elementor-element elementor-element-4b4e3a96 e-con-full e-flex e-con e-child" data-id="4b4e3a96" data-element_type="container">
          <div className="testimonials-grid">
            {/* First 3 testimonials in first row */}
            {displayTestimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="testimonial-card animated fadeInUp" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                <div className="testimonial-content">
                  <p className="testimonial-text">{testimonial.content}</p>
                  <div className="author-info">
                    <div className="author-details">
                      <h5 className="author-name">{testimonial.author.name}</h5>
                      <p className="author-role">{testimonial.author.role}</p>
                    </div>
                    <div className="author-image">
                      <Image 
                        src={testimonial.author.image} 
                        alt={testimonial.author.name}
                        width={120}
                        height={120}
                        className="rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Next 2 testimonials in second row */}
            {displayTestimonials.slice(3, 5).map((testimonial, index) => (
              <div key={index + 3} className="testimonial-card animated fadeInUp" style={{ animationDelay: `${(index + 4) * 100}ms` }}>
                <div className="testimonial-content">
                  <p className="testimonial-text">{testimonial.content}</p>
                  <div className="author-info">
                    <div className="author-details">
                      <h5 className="author-name">{testimonial.author.name}</h5>
                      <p className="author-role">{testimonial.author.role}</p>
                    </div>
                    <div className="author-image">
                      <Image 
                        src={testimonial.author.image} 
                        alt={testimonial.author.name}
                        width={120}
                        height={120}
                        className="rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Read more reviews card in last position */}
            <div className="testimonial-card read-more-card animated fadeInUp" style={{ animationDelay: '600ms' }}>
              <Link href="#" className="read-more-link">
                <div className="read-more-content">
                  <span className="read-more-text">{translations.readMore}</span>
                  <span className="arrow-icon">→</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection
