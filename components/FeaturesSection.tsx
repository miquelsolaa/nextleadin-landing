'use client'

import styles from './FeaturesSection.module.css'
import { Target, BarChart3, Workflow } from 'lucide-react'
import {useLocale} from 'next-intl'

const FeaturesSection = () => {
  // Locale i textos
  const locale = (useLocale() as 'es' | 'ca' | 'en') ?? 'es'
  const texts: Record<'es' | 'ca' | 'en', {
    headingA: string
    headingB: string
    headingC: string
    lead: string
    more: string
    items: {icon: any, title: string, description: string}[]
  }> = {
    es: {
      headingA: 'Generación de leads ',
      headingB: 'con IA',
      headingC: ' para vender más',
      lead: 'Selecciona territorio, elige el nicho y obtén listas con inteligencia accionable. Menos prospección manual, más conversaciones de calidad.',
      more: 'Más información',
      items: [
        {icon: Target, title: 'Segmentación hiperprecisa', description: 'Define zona y sector. La plataforma identifica negocios con intención y ajusta el target con criterios avanzados.'},
        {icon: BarChart3, title: 'Informes con IA por empresa', description: 'Enriquecimiento automático con puntos clave, insights y ángulo de contacto para que cada llamada sea relevante.'},
        {icon: Workflow, title: 'Flujo comercial más rápido', description: 'Listas de leads listas para exportar, integraciones y seguimiento para que el equipo no pierda tiempo.'}
      ]
    },
    ca: {
      headingA: 'Generació de leads ',
      headingB: 'amb IA',
      headingC: ' per vendre més',
      lead: 'Selecciona territori, tria el nínxol i obtén llistes amb intel·ligència accionable. Menys prospecció manual, més converses de qualitat.',
      more: 'Més informació',
      items: [
        {icon: Target, title: 'Segmentació hiperprecisa', description: 'Defineix zona i sector. La plataforma identifica negocis amb intenció i ajusta el target amb criteris avançats.'},
        {icon: BarChart3, title: 'Informes amb IA per a cada empresa', description: 'Enriquiment automàtic amb punts clau, insights i angle de contacte perquè cada trucada sigui rellevant.'},
        {icon: Workflow, title: 'Flux de treball comercial ràpid', description: 'Llistes de leads preparades per exportar, integracions i seguiment perquè l\'equip no perdi temps.'}
      ]
    },
    en: {
      headingA: 'Lead generation ',
      headingB: 'with AI',
      headingC: ' to sell more',
      lead: 'Pick a territory, choose a niche and get lists with actionable intelligence. Less manual prospecting, more quality conversations.',
      more: 'Learn more',
      items: [
        {icon: Target, title: 'Hyper-precise targeting', description: 'Set zone and sector. The platform finds in-intent businesses and refines the target with advanced criteria.'},
        {icon: BarChart3, title: 'AI reports per company', description: 'Automatic enrichment with key points, insights and contact angle so every call is relevant.'},
        {icon: Workflow, title: 'Faster sales workflow', description: 'Lead lists ready to export, integrations and tracking so the team doesn\'t waste time.'}
      ]
    }
  }

  const t = texts[locale]
  const features = t.items

  return (
    <section 
      className="py-24 px-0 overflow-hidden relative"
      style={{
        backgroundColor: '#004050',
        backgroundImage: 'url("https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/10/crm-shape-3.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container-custom">
        {/* Títol i text al costat */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`${styles['animated-fast']} ${styles.fadeIn}`} style={{ animationDelay: '100ms' }}>
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8 leading-tight">
              {t.headingA}
              <span className="relative">
                {t.headingB}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500 rounded-full"></span>
              </span>
              {t.headingC}
            </h2>
          </div>
          
          <div className={`${styles['animated-fast']} ${styles.fadeIn}`} style={{ animationDelay: '200ms' }}>
            <p className="text-xl text-white/90 leading-relaxed">
              {t.lead}
            </p>
          </div>
        </div>
        
        {/* Features a sota en 3 columnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index} 
                className={`${styles['animated-fast']} ${styles.fadeInUp}`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className={styles['elementskit-infobox']}>
                  <div className={styles['elementskit-box-header']}>
                    <div className={styles['elementskit-info-box-icon']}>
                      <IconComponent 
                        size={48}
                        className="text-white"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                
                  <div className={styles['box-body']}>
                    <h3 className={styles['elementskit-info-box-title']}>
                      {feature.title}
                    </h3>
                    <p>{feature.description}</p>
                    
                    <div className={styles['box-footer']}>
                      <div className={styles['btn-wraper']}>
                        <a 
                          className={styles['elementskit-btn']}
                          href="#" 
                          data-text={t.more}
                        >
                          <span className={styles['button-wrapper']}>{t.more}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
