'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { CalendarDays, User } from 'lucide-react'
import { getBlogPostUrl, type Locale } from '@/lib/blog-utils'
import CategoryLabel from './CategoryLabel'

interface BlogPost {
  title: string
  excerpt: string
  image: string
  categories: string[]
  author: { name: string }
  date: string
  slug: string
}

interface BlogSectionProps {
  blogPosts: BlogPost[]
}

const BlogSection = ({ blogPosts }: BlogSectionProps) => {
  const locale = (useLocale() as Locale) ?? 'es'
  const blogBaseUrl = locale === 'es' ? '/blog' : `/${locale}/blog`

  const translations = (() => {
    if (locale === 'es') {
      return {
        title: 'Guías sobre',
        titleHighlight: 'leads de negocios locales',
        titleSuffix: ' y cold call',
        description: 'Descubre estrategias para conseguir leads de negocios locales que no están en LinkedIn, preparar llamadas en frío con IA y cerrar más ventas B2B en España.',
        cta: 'Ver todos los artículos',
        readMore: 'Leer más'
      }
    }
    if (locale === 'en') {
      return {
        title: 'Guides on',
        titleHighlight: 'local business leads',
        titleSuffix: ' and cold calling',
        description: 'Discover strategies to get local business leads beyond LinkedIn, prepare AI-powered cold calls and close more B2B deals.',
        cta: 'View all articles',
        readMore: 'Read more'
      }
    }
    return {
      title: 'Últims articles del',
      titleHighlight: 'blog',
      titleSuffix: '',
      description: 'Descobreix estratègies, consells i tendències per millorar la teva generació de leads i vendes B2B.',
      cta: 'Veure tots els articles',
      readMore: 'Llegir més'
    }
  })()
  
  // Si no hi ha posts, no mostrar la secció
  if (blogPosts.length === 0) {
    return null
  }
  
  return (
    <div className="elementor-element elementor-element-34d7e4d3 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-id="34d7e4d3" data-element_type="container">
      <div className="e-con-inner">
        {/* Header Section */}
        <div className="elementor-element elementor-element-7e5f4e3 e-con-full e-flex e-con e-child" data-id="7e5f4e3" data-element_type="container">
          <div className="elementor-element elementor-element-93aa102 e-con-full e-flex e-con e-child" data-id="93aa102" data-element_type="container">
            <div className="elementor-element elementor-element-91feaef animated-fast elementor-widget elementor-widget-elementskit-heading animated fadeIn" data-id="91feaef" data-element_type="widget" data-settings='{"_animation":"fadeIn","_animation_delay":100,"ekit_we_effect_on":"none"}' data-widget_type="elementskit-heading.default">
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <div className="ekit-heading elementskit-section-title-wraper text_left ekit_heading_tablet- ekit_heading_mobile-">
                    <h2 className="ekit-heading--title elementskit-section-title">
                      {translations.title}<span>{" "}<span>{translations.titleHighlight}</span></span>{translations.titleSuffix}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
                                           <div className="elementor-element elementor-element-3598566 e-con-full e-flex e-con e-child" data-id="3598566" data-element_type="container">
                <div className="elementor-element elementor-element-a8cdcb0 animated-fast elementor-widget elementor-widget-elementskit-heading animated fadeIn" data-id="a8cdcb0" data-element_type="widget" data-settings='{"_animation":"fadeIn","_animation_delay":200,"ekit_we_effect_on":"none"}' data-widget_type="elementskit-heading.default">
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con">
                      <div className="ekit-heading elementskit-section-title-wraper text_left ekit_heading_tablet- ekit_heading_mobile-">
                        <div className="ekit-heading__description">
                          <p>{translations.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="elementor-element elementor-element-a29c61e e-con-full e-flex e-con e-child" data-id="a29c61e" data-element_type="container">
                <div className="elementor-element elementor-element-886d009 elementor-align-left elementor-widget__width-auto animated-fast elementor-widget elementor-widget-elementskit-button animated pulse" data-id="886d009" data-element_type="widget" data-settings='{"_animation":"pulse","_animation_delay":200,"ekit_we_effect_on":"none"}' data-widget_type="elementskit-button.default">
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con">
                      <div className="ekit-btn-wraper">
                        <Link href={blogBaseUrl} className="elementskit-btn whitespace--normal" id="" data-text={translations.cta}>
                          <span className="button-wrapper">{translations.cta}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="elementor-element elementor-element-494c8f82 e-con-full e-flex e-con e-child" data-id="494c8f82" data-element_type="container">
          <div className="elementor-element elementor-element-7f7ef0aa e-con-full e-flex e-con e-child" data-id="7f7ef0aa" data-element_type="container">
            <div className="elementor-element elementor-element-13f87813 elementor-widget elementor-widget-elementskit-blog-posts" data-id="13f87813" data-element_type="widget" data-settings='{"ekit_we_effect_on":"none"}' data-widget_type="elementskit-blog-posts.default">
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <div id="post-items--13f87813" className="row post-items ekit-blog-posts-content wihout-masonry" data-enable="no">
                    {/* Blog Carousel markup render */}
                    {blogPosts.map((post, index) => (
                      <div key={index} className="col-lg-4 col-md-6">
                        <div className="elementskit-post-image-card group rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md flex flex-col">
                          <div className="elementskit-entry-header">
                            <Link href={getBlogPostUrl(post.slug, locale)} className="elementskit-entry-thumb">
                              <Image 
                                src={post.image} 
                                alt={post.title}
                                width={400}
                                height={250}
                                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </Link>
                            {/* .elementskit-entry-thumb END */}
                            <div className="elementskit-meta-categories mt-3 flex flex-wrap gap-2">
                              <span className="elementskit-meta-wraper">
                                {post.categories.map((category, catIndex) => (
                                  <span key={catIndex}>
                                    <Link
                                      href={`${blogBaseUrl}/category/${(category || '').toLowerCase()}`}
                                      rel="category tag"
                                      className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-800 shadow-sm"
                                    >
                                      <CategoryLabel category={category || ''} />
                                    </Link>
                                  </span>
                                ))}
                              </span>
                            </div>
                          </div>
                          {/* .elementskit-entry-header END */}
                          
                          <div className="elementskit-post-body p-6 flex flex-col flex-1">
                            <div className="mb-2 flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500">
                              <div className="flex items-center gap-1.5">
                                <User className="w-4 h-4 shrink-0" aria-hidden />
                                <Link
                                  href={`${blogBaseUrl}/author/${(post.author?.name || 'unknown')
                                    .toLowerCase()
                                    .replace(' ', '-')}`}
                                  className="hover:text-green-600 transition-colors"
                                >
                                  {post.author?.name || 'Unknown'}
                                </Link>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <CalendarDays className="w-4 h-4 shrink-0" aria-hidden />
                                <span>{post.date}</span>
                              </div>
                            </div>
                            
                            <h2 className="entry-title mt-1 text-lg md:text-xl font-semibold text-gray-900 leading-snug line-clamp-2">
                              <Link
                                href={getBlogPostUrl(post.slug, locale)}
                                className="hover:text-green-600 transition-colors duration-200"
                              >
                                {post.title}
                              </Link>
                            </h2>
                            
                            <p className="mt-3 text-sm md:text-base text-gray-600 line-clamp-3">
                              {post.excerpt}
                            </p>
                            
                            <div className="btn-wraper mt-4">
                              <Link 
                                href={getBlogPostUrl(post.slug, locale)} 
                                className="elementskit-btn keydesign-underline whitespace--normal inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700 transition-colors duration-200" 
                                data-text={translations.readMore}
                              >
                                <span className="button-wrapper">{translations.readMore}</span>
                              </Link>
                            </div>
                          </div>
                          {/* .elementskit-post-body END */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogSection