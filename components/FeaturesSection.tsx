'use client'

import styles from './FeaturesSection.module.css'
import { Target, BarChart3, Workflow } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useAppLocale } from '@/lib/use-app-locale'

const FeaturesSection = () => {
  // Locale i textos
  const locale = useAppLocale()
  const texts: Record<'es' | 'ca' | 'en', {
    headingA: string
    headingB: string
    headingC: string
    lead: string
    more: string
    items: {icon: any, title: string, description: string}[]
  }> = {
    es: {
      headingA: 'De 8 horas buscando leads a ',
      headingB: '3 reuniones',
      headingC: ' en tu calendario',
      lead: 'Cada hora que tu equipo pierde buscando contactos es una llamada que no hace. NextLeadIn elimina el trabajo manual para que dediques 100% del tiempo a cerrar.',
      more: 'Ver resultados',
      items: [
        {icon: Target, title: 'Ahorra 8h/semana por comercial', description: 'Deja de copiar datos de Google Maps. En 10 minutos tienes 100 leads locales con teléfono, scoring y contexto. Lo que antes tomaba un día, ahora son minutos.'},
        {icon: BarChart3, title: 'Triplica tu tasa de contacto', description: 'Llama con contexto: qué vende, qué opinan sus clientes, qué problemas tiene. Nuestros usuarios pasan del 5% al 15-20% de contactos efectivos.'},
        {icon: Workflow, title: 'Cierra 3x más reuniones', description: 'Pipeline siempre lleno, priorización automática y seguimiento integrado. El resultado: de 2-3 reuniones/mes a 8-12 con el mismo esfuerzo.'}
      ]
    },
    ca: {
      headingA: 'De 8 hores buscant leads a ',
      headingB: '3 reunions',
      headingC: ' al teu calendari',
      lead: 'Cada hora que el teu equip perd buscant contactes és una trucada que no fa. NextLeadIn elimina el treball manual perquè dediquis 100% del temps a tancar.',
      more: 'Veure resultats',
      items: [
        {icon: Target, title: 'Estalvia 8h/setmana per comercial', description: 'Deixa de copiar dades de Google Maps. En 10 minuts tens 100 leads locals amb telèfon, scoring i context. El que abans prenia un dia, ara són minuts.'},
        {icon: BarChart3, title: 'Triplica la teva taxa de contacte', description: 'Truca amb context: què ven, què opinen els seus clients, quins problemes té. Els nostres usuaris passen del 5% al 15-20% de contactes efectius.'},
        {icon: Workflow, title: 'Tanca 3x més reunions', description: 'Pipeline sempre ple, priorització automàtica i seguiment integrat. El resultat: de 2-3 reunions/mes a 8-12 amb el mateix esforç.'}
      ]
    },
    en: {
      headingA: 'From 8 hours finding leads to ',
      headingB: '3 meetings',
      headingC: ' on your calendar',
      lead: 'Every hour your team wastes finding contacts is a call they are not making. NextLeadIn eliminates manual work so you spend 100% of your time closing.',
      more: 'See results',
      items: [
        {icon: Target, title: 'Save 8h/week per rep', description: 'Stop copying data from Google Maps. In 10 minutes you have 100 local leads with phone, scoring and context. What used to take a day now takes minutes.'},
        {icon: BarChart3, title: 'Triple your contact rate', description: 'Call with context: what they sell, what their customers think, what problems they have. Our users go from 5% to 15-20% effective contacts.'},
        {icon: Workflow, title: 'Close 3x more meetings', description: 'Pipeline always full, automatic prioritization and integrated follow-up. The result: from 2-3 meetings/month to 8-12 with the same effort.'}
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
        backgroundImage: 'url("/images/design/crm-shape-3.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container-custom">
        {/* Títol i text al costat */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`${styles.animatedFast} ${styles.fadeIn}`} style={{ animationDelay: '100ms' }}>
            <h2 className="font-display text-5xl sm:text-6xl font-bold text-white mb-8 leading-tight">
              {t.headingA}
              <span className="relative">
                {t.headingB}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-500 rounded-full"></span>
              </span>
              {t.headingC}
            </h2>
          </div>
          
          <div className={`${styles.animatedFast} ${styles.fadeIn}`} style={{ animationDelay: '200ms' }}>
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
                className={`${styles.animatedFast} ${styles.fadeInUp}`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className={styles.featureCard}>
                  <div className={styles.featureHeader}>
                    <div className={styles.featureIcon}>
                      <IconComponent 
                        size={48}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                
                  <div className={styles.featureBody}>
                    <h3 className={styles.featureTitle}>
                      {feature.title}
                    </h3>
                    <p>{feature.description}</p>
                    
                    <div className={styles.featureFooter}>
                      <Link
                        href="/industries"
                        locale={locale}
                        className={styles.featureLink}
                      >
                        {t.more}
                      </Link>
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
