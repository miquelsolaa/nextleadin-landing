import HeroSection from '@/components/HeroSection'
import FeatureCard from '@/components/FeatureCard'
import TestimonialCard from '@/components/TestimonialCard'
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
  const allPosts = getAllPosts()
  const latestPosts = allPosts.slice(0, 3).map(post => ({
    title: post.title,
    excerpt: post.description,
    image: post.featuredImage || '/images/hero/hero.png',
    categories: post.categories || [],
    author: { name: post.author },
    date: new Date(post.date).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    comments: 0,
    slug: post.slug
  }))
  
  // Testimonials are now handled by the TestimonialsSection component

  // Integration partners data
  const integrations = [
    { name: 'Slack', logo: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/integrations-1.png' },
    { name: 'Zoom', logo: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/integrations-2.png' },
    { name: 'Salesforce', logo: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/integrations-3.png' },
    { name: 'HubSpot', logo: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/integrations-4.png' },
    { name: 'Stripe', logo: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/integrations-6.png' },
    { name: 'Zapier', logo: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/integrations-7.png' },
    { name: 'Google Analytics', logo: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/integrations-8.png' },
    { name: 'WordPress', logo: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/integrations-10.png' },
    { name: 'Shopify', logo: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/integrations-9.png' },
    { name: 'Mailchimp', logo: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/integrations-5.png' },
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


