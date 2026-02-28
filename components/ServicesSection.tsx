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
          title: 'Ahorra 6 horas de búsqueda',
          subtitle: '100 leads cualificados en 10 minutos',
          description: 'Lo que antes te llevaba un día entero buscando en Google Maps, ahora son 10 minutos. Selecciona tu zona, define el sector y obtén leads con teléfono listos para llamar.',
          features: [
            'De 8 horas buscando a 10 minutos (ahorro del 99%)',
            '100+ leads locales con teléfono verificado por búsqueda',
            'Coste por lead: €0.05 vs €2-5 con alternativas'
          ],
          image: '/images/features/location.png',
          badge: null
        },
        {
          id: 'sector',
          title: 'Encuentra tu nicho rentable',
          subtitle: 'Llega primero a los negocios que nadie contacta',
          description: 'El 80% de los negocios locales no están en LinkedIn ni Apollo. NextLeadIn los encuentra y te da acceso exclusivo antes que tu competencia.',
          features: [
            'Acceso a +2M de negocios locales en España',
            'Filtros por facturación, empleados y potencial',
            'Exclusión automática de ya contactados o descartados'
          ],
          image: '/images/features/business.png',
          badge: 'VENTAJA'
        },
        {
          id: 'informes-ia',
          title: 'Del 5% al 15% de contactos efectivos',
          subtitle: 'Contexto IA que triplica tu éxito en llamadas',
          description: 'Cada lead viene con un informe: qué vende, qué opinan sus clientes, problemas detectados y el mejor ángulo para tu llamada. Resultado: 3x más respuestas.',
          features: [
            'Script personalizado por lead (no genérico)',
            'Objeciones anticipadas y cómo superarlas',
            'Mejor momento para llamar según actividad'
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
          title: 'Save 6 hours of searching',
          subtitle: '100 qualified leads in 10 minutes',
          description: 'What used to take a full day searching Google Maps now takes 10 minutes. Select your area, define the sector and get leads with phone numbers ready to call.',
          features: [
            'From 8 hours searching to 10 minutes (99% savings)',
            '100+ local leads with verified phone per search',
            'Cost per lead: €0.05 vs €2-5 with alternatives'
          ],
          image: '/images/features/location.png',
          badge: null
        },
        {
          id: 'sector',
          title: 'Find your profitable niche',
          subtitle: 'Reach businesses nobody else contacts',
          description: '80% of local businesses are not on LinkedIn or Apollo. NextLeadIn finds them and gives you exclusive access before your competition.',
          features: [
            'Access to +2M local businesses in Spain',
            'Filters by revenue, employees and potential',
            'Auto-exclude already contacted or discarded'
          ],
          image: '/images/features/business.png',
          badge: 'ADVANTAGE'
        },
        {
          id: 'informes-ia',
          title: 'From 5% to 15% effective contacts',
          subtitle: 'AI context that triples your call success',
          description: 'Each lead comes with a report: what they sell, what customers say, detected problems and the best angle for your call. Result: 3x more responses.',
          features: [
            'Personalized script per lead (not generic)',
            'Anticipated objections and how to overcome them',
            'Best time to call based on activity'
          ],
          image: '/images/features/report.png',
          badge: null
        }
      ]
    }
    return [
      {
        id: 'segmentacio',
        title: 'Estalvia 6 hores de cerca',
        subtitle: '100 leads qualificats en 10 minuts',
        description: 'El que abans et portava un dia sencer buscant a Google Maps, ara són 10 minuts. Selecciona la teva zona, defineix el sector i obtén leads amb telèfon a punt per trucar.',
        features: [
          'De 8 hores buscant a 10 minuts (estalvi del 99%)',
          '100+ leads locals amb telèfon verificat per cerca',
          'Cost per lead: 0,05€ vs 2-5€ amb alternatives'
        ],
        image: '/images/features/location.png',
        badge: null
      },
      {
        id: 'sector',
        title: 'Troba el teu nínxol rentable',
        subtitle: 'Arriba primer als negocis que ningú contacta',
        description: 'El 80% dels negocis locals no són a LinkedIn ni Apollo. NextLeadIn els troba i et dona accés exclusiu abans que la teva competència.',
        features: [
          'Accés a +2M de negocis locals a Espanya',
          'Filtres per facturació, empleats i potencial',
          'Exclusió automàtica de ja contactats o descartats'
        ],
        image: '/images/features/business.png',
        badge: 'AVANTATGE'
      },
      {
        id: 'informes-ia',
        title: 'Del 5% al 15% de contactes efectius',
        subtitle: 'Context IA que triplica el teu èxit en trucades',
        description: 'Cada lead ve amb un informe: què ven, què opinen els seus clients, problemes detectats i el millor angle per a la teva trucada. Resultat: 3x més respostes.',
        features: [
          'Script personalitzat per lead (no genèric)',
          'Objeccions anticipades i com superar-les',
          'Millor moment per trucar segons activitat'
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


