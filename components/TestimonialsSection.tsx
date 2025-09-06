import Link from 'next/link'

interface Testimonial {
  content: string
  author: {
    name: string
    role: string
    image: string
  }
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  return (
    <div className="elementor-element elementor-element-1fdd1311 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-id="1fdd1311" data-element_type="container" data-settings='{"background_background":"classic"}'>
      <div className="e-con-inner">
        {/* Header Section - 3 Columns Layout */}
        <div className="elementor-element elementor-element-9b581e1 e-con-full e-flex e-con e-child" data-id="9b581e1" data-element_type="container">
          {/* Left Column - Title */}
          <div className="header-title-column">
            <h2 className="ekit-heading--title elementskit-section-title">
              Històries d'<span className="case-studies-underline">èxit real</span>
            </h2>
          </div>
          
          {/* Center Column - Description */}
          <div className="header-description-column">
            <p className="ekit-heading__description">
              Comercialitzar més ràpid: equips que han duplicat el ritme de trucades i han millorat la qualificació amb informes generats per IA.
            </p>
          </div>
          
          {/* Right Column - Button */}
          <div className="header-button-column">
            <Link href="#" className="elementskit-btn">
              <span className="button-wrapper">Veure totes les històries</span>
            </Link>
          </div>
        </div>

        {/* Testimonial Cards Grid - 3x2 Layout */}
        <div className="elementor-element elementor-element-4b4e3a96 e-con-full e-flex e-con e-child" data-id="4b4e3a96" data-element_type="container">
          <div className="testimonials-grid">
            {/* First 3 testimonials in first row */}
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="testimonial-card animated fadeInUp" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                <div className="testimonial-content">
                  <p className="testimonial-text">{testimonial.content}</p>
                  <div className="author-info">
                    <div className="author-details">
                      <h5 className="author-name">{testimonial.author.name}</h5>
                      <p className="author-role">{testimonial.author.role}</p>
                    </div>
                    <div className="author-image">
                      <img 
                        src={testimonial.author.image} 
                        alt={testimonial.author.name}
                        width="120"
                        height="120"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Next 2 testimonials in second row */}
            {testimonials.slice(3, 5).map((testimonial, index) => (
              <div key={index + 3} className="testimonial-card animated fadeInUp" style={{ animationDelay: `${(index + 4) * 100}ms` }}>
                <div className="testimonial-content">
                  <p className="testimonial-text">{testimonial.content}</p>
                  <div className="author-info">
                    <div className="author-details">
                      <h5 className="author-name">{testimonial.author.name}</h5>
                      <p className="author-role">{testimonial.author.role}</p>
                    </div>
                    <div className="author-image">
                      <img 
                        src={testimonial.author.image} 
                        alt={testimonial.author.name}
                        width="120"
                        height="120"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Read more reviews card in last position */}
            <div className="testimonial-card read-more-card animated fadeInUp" style={{ animationDelay: '600ms' }}>
              <Link href="#" className="read-more-link">
                <div className="read-more-content">
                  <span className="read-more-text">Llegir més ressenyes</span>
                  <span className="arrow-icon">→</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection
