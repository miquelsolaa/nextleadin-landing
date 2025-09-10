import { Metadata } from 'next'
import {useTranslations} from 'next-intl'
import BlogPageSection from '@/components/BlogPageSection'
import BlogSearch from '@/components/BlogSearch'
import BlogCategories from '@/components/BlogCategories'
import BlogRecentPosts from '@/components/BlogRecentPosts'
import BlogTags from '@/components/BlogTags'
import BlogPagination from '@/components/BlogPagination'

export const metadata: Metadata = {
  title: 'Blog - NextLeadIn',
  description: 'Descobreix materials informatius sobre generació de leads, IA i vendes B2B per accelerar el teu creixement.',
}

// Mock data - en una aplicació real això vindria d'una API o CMS
const blogPosts = [
  {
    id: 1,
    title: "A quick guide to picking the right branding agency for your rebrand",
    slug: "guide-picking-branding-agency",
    excerpt: "When evaluating potential agencies, consider their aspects of branding and design.",
    image: "/images/hero/hero.png",
    categories: ["Marketing", "Technology"],
    author: "KeyDesign",
    date: "August 21, 2023",
    comments: 3
  },
  {
    id: 2,
    title: "Challenges of creating and structuring a multi-brand system",
    slug: "challenges-multi-brand-system",
    excerpt: "The concept of a multi-brand system has gained traction to manage various brands.",
    image: "/images/hero/hero.png",
    categories: ["Insights", "Marketing"],
    author: "KeyDesign",
    date: "August 21, 2023",
    comments: 3
  },
  {
    id: 3,
    title: "The five-step process for running effective brainstorming sessions",
    slug: "five-step-brainstorming-process",
    excerpt: "A well-defined statement helps participants focus on creativity and ensures same page.",
    image: "/images/hero/hero.png",
    categories: ["Guides", "Insights"],
    author: "KeyDesign",
    date: "August 21, 2023",
    comments: 3
  }
]

const categories = [
  { name: "Business", count: 2 },
  { name: "Guides", count: 2 },
  { name: "Insights", count: 2 },
  { name: "Marketing", count: 2 },
  { name: "Software", count: 2 },
  { name: "Technology", count: 2 }
]

const recentPosts = [
  {
    title: "A quick guide to picking the right branding agency for your rebrand",
    image: "/images/hero/hero.png",
    slug: "guide-picking-branding-agency"
  },
  {
    title: "Challenges of creating and structuring a multi-brand system",
    image: "/images/hero/hero.png",
    slug: "challenges-multi-brand-system"
  },
  {
    title: "The five-step process for running effective brainstorming sessions",
    image: "/images/hero/hero.png",
    slug: "five-step-brainstorming-process"
  }
]

const tags = [
  "Creative",
  "Enterprise", 
  "Internet",
  "Mobile",
  "Popular",
  "Startup"
]

export default function BlogPage() {
  const t = useTranslations('pages.blog')
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('title')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">{t('description')}</p>
          <nav className="text-sm text-gray-500">
            <span>{t('breadcrumbHome')}</span>
            <span className="mx-2">›</span>
            <span>Blog</span>
          </nav>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <BlogPageSection posts={blogPosts} />
            <BlogPagination currentPage={1} totalPages={2} />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <BlogSearch />
            <BlogCategories categories={categories} />
            <BlogRecentPosts posts={recentPosts} />
            <BlogTags tags={tags} />
          </aside>
        </div>
      </div>
    </div>
  )
}


