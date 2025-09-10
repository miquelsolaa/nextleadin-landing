import Link from 'next/link'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

interface BlogPost {
  title: string
  excerpt: string
  image: string
  categories: string[]
  author: { name: string }
  date: string
  comments: number
  slug: string
}

interface BlogSectionProps {
  blogPosts: BlogPost[]
}

const BlogSection = ({ blogPosts }: BlogSectionProps) => {
  const t = useTranslations('home.blogSection')
  
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
                      {t('title')}<span><span>{t('titleHighlight')}</span></span>{t('titleSuffix')}
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
                          <p>{t('description')}</p>
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
                        <Link href="/blog" className="elementskit-btn whitespace--normal" id="" data-text={t('cta')}>
                          <span className="button-wrapper">{t('cta')}</span>
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
                        <div className="elementskit-post-image-card">
                          <div className="elementskit-entry-header">
                            <Link href={`/blog/${post.slug}`} className="elementskit-entry-thumb">
                              <Image 
                                src={post.image} 
                                alt={post.title}
                                width={400}
                                height={250}
                                className="w-full h-48 object-cover"
                              />
                            </Link>
                            {/* .elementskit-entry-thumb END */}
                            <div className="elementskit-meta-categories">
                              <span className="elementskit-meta-wraper">
                                {post.categories.map((category, catIndex) => (
                                  <span key={catIndex}>
                                    <Link href={`/category/${category.toLowerCase()}`} rel="category tag">
                                      {category}
                                    </Link>
                                  </span>
                                ))}
                              </span>
                            </div>
                          </div>
                          {/* .elementskit-entry-header END */}
                          
                          <div className="elementskit-post-body">
                            <div className="post-meta-list">
                              <span className="meta-author">
                                <i aria-hidden="true" className="far fa-user"></i>
                                <Link href={`/author/${post.author.name.toLowerCase()}`} className="author-name">
                                  {post.author.name}
                                </Link>
                              </span>
                              <span className="meta-date">
                                <i aria-hidden="true" className="far fa-calendar"></i>
                                <span className="meta-date-text">{post.date}</span>
                              </span>
                              <span className="post-comment">
                                <i aria-hidden="true" className="far fa-comment-alt"></i>
                                <Link href={`/blog/${post.slug}#comments`}>{post.comments}</Link>
                              </span>
                            </div>
                            
                            <h2 className="entry-title">
                              <Link href={`/blog/${post.slug}`}>
                                {post.title}
                              </Link>
                            </h2>
                            
                            <p>{post.excerpt}</p>
                            
                            <div className="btn-wraper">
                              <Link 
                                href={`/blog/${post.slug}`} 
                                className="elementskit-btn keydesign-underline whitespace--normal" 
                                data-text={t('readMore')}
                              >
                                <span className="button-wrapper">{t('readMore')}</span>
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