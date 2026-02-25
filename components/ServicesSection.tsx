'use client'

import Image from 'next/image'
import {useLocale} from 'next-intl'

const ServicesSection = () => {
  const locale = (useLocale() as 'es' | 'ca' | 'en') ?? 'es'

  const services = (() => {
    if (locale === 'es') {
      return [
        {
          id: 'segmentacio',
          title: 'Segmentación geográfica en España',
          subtitle: 'Elige la zona y encuentra los negocios locales clave',
          description: 'Barcelona, Madrid, Valencia o donde necesites. Localiza restaurantes, talleres y comercios con potencial dentro de tu territorio con filtros avanzados por zona y tipo de negocio.',
          features: [
            'Mapa y filtros por barrio, municipio y código postal',
            'Volumen estimado de negocios locales disponibles para contactar',
            'Exportación rápida a CSV y CRM para activar campañas'
          ],
          image: '/images/features/location.png',
          badge: null
        },
        {
          id: 'sector',
          title: 'Selección de sector',
          subtitle: 'Define nichos y verticales con precisión',
          description: '¿Restaurantes vegetarianos? ¿Fabricantes de pressfittings? ¿Clínicas dentales? Segmenta por CNAE, keywords e intención para encontrar PYMES locales con encaje claro.',
          features: [
            'Filtros por actividad, tamaño y ticket medio',
            'Exclusión de sectores no deseados o ya trabajados',
            'Sugerencias inteligentes de nichos según resultados anteriores'
          ],
          image: '/images/features/business.png',
          badge: 'NUEVO'
        },
        {
          id: 'informes-ia',
          title: 'Informes con IA para cold call',
          subtitle: 'Enriquecimiento automático para preparar cada llamada',
          description: 'Nuestra IA genera dosieres con puntos de conversación, necesidades detectadas y propuesta de ángulo para la llamada en frío, a partir de reseñas y datos públicos.',
          features: [
            'Resúmenes ejecutivos por negocio local',
            'Ángulos de contacto personalizados para la llamada',
            'Notas y bullets para gestionar objeciones típicas'
          ],
          image: '/images/features/report.png',
          badge: null
        }
      ]
    }
    if (locale === 'en') {
      return [
        {
          id: 'segmentacio',
          title: 'Geographic targeting',
          subtitle: 'Choose the area and find key local businesses',
          description: 'Barcelona, Lisbon or wherever you need. Locate high-potential restaurants, workshops and local shops in your territory with advanced filters by area and business type.',
          features: [
            'Map and neighborhood/municipality filters',
            'Estimated volume of available leads',
            'Fast export to CSV/CRM'
          ],
          image: '/images/features/location.png',
          badge: null
        },
        {
          id: 'sector',
          title: 'Sector selection',
          subtitle: 'Define niches and verticals precisely',
          description: 'Vegetarian restaurants? Pressfittings manufacturers? Medical specialists? Segment by industry codes, keywords and intent to find local SMEs with clear fit.',
          features: [
            'Filters by activity and company size',
            'Exclude undesired sectors',
            'Smart niche suggestions'
          ],
          image: '/images/features/business.png',
          badge: 'NEW'
        },
        {
          id: 'informes-ia',
          title: 'AI reports for cold calling',
          subtitle: 'Automatic enrichment to prepare every call',
          description: 'Our AI creates dossiers with talking points, detected needs and a suggested angle for cold calls, based on public data and online reviews.',
          features: [
            'Executive summaries per company',
            'Personalized contact angles',
            'Notes for common objections'
          ],
          image: '/images/features/report.png',
          badge: null
        }
      ]
    }
    return [
      {
        id: 'segmentacio',
        title: 'Segmentació geogràfica',
        subtitle: 'Tria la zona i troba les empreses clau',
        description: 'Barcelona, Girona o on necessitis. Localitza negocis amb potencial dins del teu territori amb filtres avançats.',
        features: [
          'Mapa i filtres per barri/municipi',
          'Volum estimat de leads disponibles',
          'Exportació ràpida a CSV/CRM'
        ],
        image: '/images/features/location.png',
        badge: null
      },
      {
        id: 'sector',
        title: 'Selecció de sector',
        subtitle: 'Defineix nínxols i verticals amb precisió',
        description: 'Restaurants vegetarians? Fabricants de pressfittings? Especialistes mèdics? Segmenta per CNAE, keywords i intenció.',
        features: [
          'Filtres per activitat i mida',
          'Exclusió de sectors no desitjats',
          'Suggeriments intel·ligents de nínxols'
        ],
        image: '/images/features/business.png',
        badge: 'NOU'
      },
      {
        id: 'informes-ia',
        title: 'Informes amb IA',
        subtitle: 'Enriquiment automàtic per convertir millor',
        description: 'La nostra IA genera dossiers amb punts de conversa, necessitats detectades i proposta d’angle per a la trucada.',
        features: [
          'Resums executius per empresa',
          'Angles de contacte personalitzats',
          'Notes per objeccions freqüents'
        ],
        image: '/images/features/report.png',
        badge: null
      }
    ]
  })()

  return (
    <section id="funcionalitats" className="section-padding bg-gray-50">
      <div className="container-custom">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            id={service.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index < services.length - 1 ? 'mb-32' : ''}`}
          >
            <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div>
                <h6 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                  {service.title}
                  {service.badge && (
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                      {service.badge}
                    </span>
                  )}
                </h6>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  <span className="gradient-text">{service.subtitle.split(' ')[0]}</span>{' '}
                  {service.subtitle.split(' ').slice(1).join(' ')}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-4">
                {(service.features || []).map((feature: string, featureIndex: number) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <Image
                src={service.image}
                alt={`${service.title} - Interfície del panell de control i funcionalitats`}
                width={550}
                height={385}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 550px"
                className="w-full h-auto rounded-xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection


