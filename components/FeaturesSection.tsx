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
      headingA: 'Generación de leads locales ',
      headingB: 'hipersegmentados',
      headingC: ' listos para llamar',
      lead: 'Selecciona ciudad o zona, define el nicho y obtén listas de negocios locales en España con teléfono, contexto y scoring IA para priorizar llamadas.',
      more: 'Ver cómo funciona',
      items: [
        {icon: Target, title: 'Segmentación hiperlocal', description: 'Busca negocios por ciudad, barrio, código postal o radio en km, filtrando por tipo de negocio y palabras clave para encontrar comercios que otras bases B2B no tienen.'},
        {icon: BarChart3, title: 'Informes de IA para cada negocio', description: 'Análisis de reseñas, rating y contexto para preparar llamadas en frío con argumentos específicos y detectar oportunidades reales.'},
        {icon: Workflow, title: 'Workflow completo de llamadas', description: 'Listas listas para llamar, priorización por scoring, exportación a tu CRM y seguimiento de llamadas y emails desde NextLeadIn.'}
      ]
    },
    ca: {
      headingA: 'Generació de leads locals ',
      headingB: 'hipersegmentats',
      headingC: ' a punt per trucar',
      lead: 'Selecciona ciutat o zona, tria el nínxol i obtén llistes de negocis locals amb telèfon, context i scoring amb IA per prioritzar les trucades.',
      more: 'Veure com funciona',
      items: [
        {icon: Target, title: 'Segmentació hiperlocal', description: 'Busca negocis per ciutat, barri, codi postal o radi en km, filtrant per tipus de negoci i paraules clau per trobar comerços que altres bases B2B no tenen.'},
        {icon: BarChart3, title: 'Informes d\'IA per a cada negoci', description: 'Anàlisi de ressenyes, rating i context per preparar trucades en fred amb arguments específics i detectar oportunitats reals.'},
        {icon: Workflow, title: 'Workflow complet de trucades', description: 'Llistes a punt per trucar, priorització per scoring, exportació al teu CRM i seguiment de trucades i emails des de NextLeadIn.'}
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
