import dynamicImport from 'next/dynamic'
import HeroSection from '@/components/HeroSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import StickyNavigation from '@/components/StickyNavigation'
import TrustedBySection from '@/components/TrustedBySection'
import FeaturesSection from '@/components/FeaturesSection'
import { integrations } from '@/lib/integrations-data'

const BlogSection = dynamicImport(() => import('@/components/BlogSection'), {
  loading: () => <section className="min-h-[280px] animate-pulse bg-gray-50 rounded-xl" aria-hidden="true" />,
  ssr: true,
})

const IntegrationsSection = dynamicImport(() => import('@/components/IntegrationsSection'), {
  loading: () => <section className="min-h-[200px] animate-pulse bg-gray-50 rounded-xl" aria-hidden="true" />,
  ssr: true,
})

const ServicesSection = dynamicImport(() => import('@/components/ServicesSection'), {
  loading: () => <section className="min-h-[200px] animate-pulse bg-gray-50 rounded-xl" aria-hidden="true" />,
  ssr: true,
})

import { getAllPosts } from '@/lib/blog'
import { getAllIndustries } from '@/lib/industries'
import CTASection from '@/components/CTASection'
import IndustriesPreviewSection from '@/components/IndustriesPreviewSection'
import AIStructuredData from '@/components/AIStructuredData'
import { getAbsoluteHomeUrl } from '@/lib/locale-url'
import type { AppLocale } from '@/i18n/routing'
import type { Metadata } from 'next'
import { generateAIOptimizedMetadata } from '@/lib/seo-metadata'

export const dynamic = 'force-static'
export const revalidate = 3600

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const validLocale =
    locale === 'ca' || locale === 'es' || locale === 'en' ? (locale as AppLocale) : 'es'
  return generateAIOptimizedMetadata('home', validLocale)
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? locale : 'es'

  // Carregar últims posts del blog i industries per la secció sectors
  const allPosts = getAllPosts(validLocale as 'ca' | 'es' | 'en')
  const industries = getAllIndustries(validLocale as 'ca' | 'es' | 'en')
  const latestPosts = allPosts.slice(0, 3).map(post => ({
    title: post.title || '',
    excerpt: post.description || '',
    image: post.image || '/images/hero/hero.svg',
    categories: post.categories || [],
    author: { name: post.author || 'NextLeadIn Team' },
    date: post.date ? new Date(post.date).toLocaleDateString(validLocale === 'ca' ? 'ca-ES' : validLocale === 'en' ? 'en-US' : 'es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : '',
    slug: post.slug || ''
  }))

  const crumbs = [
    {
      name:
        validLocale === 'ca' ? 'Inici' : validLocale === 'es' ? 'Inicio' : 'Home',
      url: getAbsoluteHomeUrl(validLocale as AppLocale),
    },
  ]

  return (
    <>
      <AIStructuredData
        page="home"
        locale={validLocale as AppLocale}
        breadcrumbs={crumbs}
      />
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

      {/* Industries Preview Section - internal linking per SEO */}
      <IndustriesPreviewSection industries={industries} locale={validLocale as 'ca' | 'es' | 'en'} />

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

