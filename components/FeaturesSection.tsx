'use client'

import styles from './FeaturesSection.module.css'
import { Target, BarChart3, Workflow } from 'lucide-react'

const FeaturesSection = () => {
  // Features data
  const features = [
    {
      icon: Target,
      title: 'Segmentació hiperprecisa',
      description: 'Defineix zona i sector. La plataforma identifica negocis amb intenció i ajusta el target amb criteris avançats.',
    },
    {
      icon: BarChart3,
      title: 'Informes amb IA per a cada empresa',
      description: 'Enriquiment automàtic amb punts clau, insights i angle de contacte perquè cada trucada sigui rellevant.',
    },
    {
      icon: Workflow,
      title: 'Flux de treball comercial ràpid',
      description: 'Llistes de leads preparades per exportar, integracions i seguiment perquè l\'equip no perdi temps.',
    },
  ]

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
              Generació de leads{' '}
              <span className="relative">
                amb IA
                <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500 rounded-full"></span>
              </span>{' '}
              per vendre més
            </h2>
          </div>
          
          <div className={`${styles['animated-fast']} ${styles.fadeIn}`} style={{ animationDelay: '200ms' }}>
            <p className="text-xl text-white/90 leading-relaxed">
              Selecciona territori, tria el nínxol i obtén llistes amb intel·ligència accionable. Menys prospecció manual, més converses de qualitat.
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
                          data-text="Més informació"
                        >
                          <span className={styles['button-wrapper']}>Més informació</span>
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
