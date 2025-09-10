import FAQPageSection from '@/components/FAQPageSection'
import AIStructuredData from '@/components/AIStructuredData'
import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { faqSections, navigationItems, pageTexts } from '@/lib/faq-data'
import { generateAIOptimizedMetadata } from '@/lib/seo-metadata'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? locale : 'ca'
  
  return generateAIOptimizedMetadata('faq', validLocale as 'ca' | 'es' | 'en')
}

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  
  // Validar que el locale sigui vàlid
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? locale : 'ca'
  
  // Breadcrumbs per a SEO
  const breadcrumbs = [
    { 
      name: validLocale === 'ca' ? 'Inici' : validLocale === 'es' ? 'Inicio' : 'Home', 
      url: validLocale === 'ca' ? 'https://nextleadin.com' : `https://nextleadin.com/${validLocale}` 
    },
    { 
      name: validLocale === 'ca' ? 'Preguntes freqüents' : validLocale === 'es' ? 'Preguntas frecuentes' : 'FAQ', 
      url: validLocale === 'ca' ? 'https://nextleadin.com/faq' : `https://nextleadin.com/${validLocale}/faq` 
    }
  ]

  return (
    <>
      <AIStructuredData 
        page="faq" 
        locale={validLocale as 'ca' | 'es' | 'en'} 
        breadcrumbs={breadcrumbs}
      />
      <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{pageTexts[validLocale].title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {pageTexts[validLocale].subtitle}<br />
            {pageTexts[validLocale].contactText} <strong><a href="/contact" className="text-green-600 hover:text-green-700">{pageTexts[validLocale].contactLink}</a></strong>.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sticky Navigation - Hidden on mobile */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-32 space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-green-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {item.title[validLocale]}
                </a>
              ))}
            </div>
          </div>

          {/* FAQ Sections */}
          <div className="lg:col-span-3 space-y-16">
            {faqSections.map((section) => (
              <FAQPageSection
                key={section.id}
                id={section.id}
                title={section.title}
                description={section.description}
                questions={section.questions}
                locale={validLocale}
              />
            ))}
          </div>
        </div>
      </div>

      
      </div>
    </>
  )
}