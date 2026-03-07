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
import { integrations } from '@/lib/integrations-data'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
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

