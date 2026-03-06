'use client'

import { Link } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import { trackRegisterStart } from '@/lib/analytics'
import { Rocket } from 'lucide-react'

interface BlogPostCTAProps {
  variant?: 'default' | 'minimal'
}

const BlogPostCTA = ({ variant = 'default' }: BlogPostCTAProps) => {
  const locale = (useLocale() as 'es' | 'ca' | 'en') ?? 'es'

  const t = {
    es: {
      kicker: 'Empieza a generar leads hoy',
      title: '¿Listo para encontrar más clientes potenciales?',
      description: 'Descubre cómo NextLeadIn puede ayudarte a encontrar negocios locales, analizar reseñas con IA y cerrar más ventas.',
      primaryCta: 'Probar 7 días gratis',
      secondaryCta: 'Ver planes y precios'
    },
    ca: {
      kicker: 'Comença a generar leads avui',
      title: 'Preparat per trobar més clients potencials?',
      description: 'Descobreix com NextLeadIn pot ajudar-te a trobar negocis locals, analitzar ressenyes amb IA i tancar més vendes.',
      primaryCta: 'Provar 7 dies gratis',
      secondaryCta: 'Veure plans i preus'
    },
    en: {
      kicker: 'Start generating leads today',
      title: 'Ready to find more potential customers?',
      description: 'Discover how NextLeadIn can help you find local businesses, analyze reviews with AI, and close more sales.',
      primaryCta: 'Try 7 days free',
      secondaryCta: 'View plans and pricing'
    }
  }[locale]

  if (variant === 'minimal') {
    return (
      <div className="bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200 rounded-xl p-6 my-8">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="font-semibold text-gray-900 mb-1">{t.title}</p>
            <p className="text-sm text-gray-600">{t.description}</p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              onClick={() => trackRegisterStart('blog_cta_minimal', locale)}
            >
              {t.primaryCta}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative bg-primary-600 rounded-2xl p-8 my-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Rocket className="w-4 h-4 text-white" />
          </div>
          <span className="text-primary-100 text-sm font-medium uppercase tracking-wider">
            {t.kicker}
          </span>
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          {t.title}
        </h3>
        
        <p className="text-primary-100 text-lg mb-6 max-w-2xl">
          {t.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors shadow-lg"
            onClick={() => trackRegisterStart('blog_cta_primary', locale)}
          >
            {t.primaryCta}
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => trackRegisterStart('blog_cta_secondary', locale)}
          >
            {t.secondaryCta}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogPostCTA
