import { Suspense } from 'react'
import HeroSection from '@/components/HeroSection'
import BlogSection from '@/components/BlogSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import StickyNavigation from '@/components/StickyNavigation'
import TrustedBySection from '@/components/TrustedBySection'
import FeaturesSection from '@/components/FeaturesSection'
import IntegrationsSection from '@/components/IntegrationsSection'
import ServicesSection from '@/components/ServicesSection'
import { getAllPosts } from '@/lib/blog'
import CTASection from '@/components/CTASection'
import { getTranslations } from 'next-intl/server'

export default async function Home({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? locale : 'ca'
  const t = await getTranslations({ locale: validLocale, namespace: 'home.testimonials' })
  
  // Carregar últims posts del blog
  const allPosts = getAllPosts(validLocale as 'ca' | 'es' | 'en')
  const latestPosts = allPosts.slice(0, 3).map(post => ({
    title: post.title || '',
    excerpt: post.description || '',
    image: post.image || '/images/hero/hero.png',
    categories: post.categories || [],
    author: { name: post.author || 'NextLeadIn Team' },
    date: post.date ? new Date(post.date).toLocaleDateString(validLocale === 'ca' ? 'ca-ES' : validLocale === 'en' ? 'en-US' : 'es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : '',
    slug: post.slug || ''
  }))
  
  // Testimonials are now handled by the TestimonialsSection component

  // Integration partners data
  const integrations = [
    { name: 'Slack', logo: '/images/integrations/integrations-1.png' },
    { name: 'Zoom', logo: '/images/integrations/integrations-2.png' },
    { name: 'Salesforce', logo: '/images/integrations/integrations-3.png' },
    { name: 'HubSpot', logo: '/images/integrations/integrations-4.png' },
    { name: 'Stripe', logo: '/images/integrations/integrations-6.png' },
    { name: 'Zapier', logo: '/images/integrations/integrations-7.png' },
    { name: 'Google Analytics', logo: '/images/integrations/integrations-8.png' },
    { name: 'WordPress', logo: '/images/integrations/integrations-10.png' },
    { name: 'Shopify', logo: '/images/integrations/integrations-9.png' },
    { name: 'Mailchimp', logo: '/images/integrations/integrations-5.png' },
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection locale={validLocale} />

      {/* Trusted By Section */}
      <TrustedBySection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Sticky Navigation */}
      <StickyNavigation />

      {/* Services Tabbed Section */}
      <ServicesSection />

      {/* Integrations Section */}
      <IntegrationsSection integrations={integrations} />

      {/* Blog Section */}
      <BlogSection blogPosts={latestPosts} />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </>
  )
}


