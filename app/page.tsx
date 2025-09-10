import HeroSection from '@/components/HeroSection'
import FeatureCard from '@/components/FeatureCard'
import TestimonialCard from '@/components/TestimonialCard'
import BlogSection from '@/components/BlogSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import StickyNavigation from '@/components/StickyNavigation'
import TrustedBySection from '@/components/TrustedBySection'
import FeaturesSection from '@/components/FeaturesSection'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  // Services data for tabbed sections
  const services = [
    {
      id: 'segmentacio',
      title: 'Segmentació geogràfica',
      subtitle: 'Tria la zona i troba les empreses clau',
      description: 'Barcelona, Girona o on necessitis. Localitza negocis amb potencial dins del teu territori amb filtres avançats.',
      features: [
        'Mapa i filtres per barri/municipi',
        'Volum estimat de leads disponibles',
        'Exportació ràpida a CSV/CRM'
      ],
      image: '/images/features/location.png',
      badge: null
    },
    {
      id: 'sector',
      title: 'Selecció de sector',
      subtitle: 'Defineix nínxols i verticals amb precisió',
      description: 'Restaurants vegetarians? Fabricants de pressfittings? Especialistes mèdics? Segmenta per CNAE, keywords i intenció.',
      features: [
        'Filtres per activitat i mida',
        'Exclusió de sectors no desitjats',
        'Suggeriments intel·ligents de nínxols'
      ],
      image: '/images/features/business.png',
      badge: 'NOU'
    },
    {
      id: 'informes-ia',
      title: 'Informes amb IA',
      subtitle: 'Enriquiment automàtic per convertir millor',
      description: 'La nostra IA genera dossiers amb punts de conversa, necessitats detectades i proposta d’angle per a la trucada.',
      features: [
        'Resums executius per empresa',
        'Angles de contacte personalitzats',
        'Notes per objeccions freqüents'
      ],
      image: '/images/features/report.png',
      badge: null
    }
  ]

  // Testimonials data
  const testimonials = [
    {
      content: 'Hem duplicat la taxa de conversió a reunió. Les fitxes amb IA ens han estalviat hores de preparació per comercial.',
      author: {
        name: 'Marta Rovira',
        role: 'Head of Sales',
        image: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/10/review2.jpg'
      }
    },
    {
      content: 'La segmentació per zona i sector és ultra precisa. En una setmana vam obrir tres oportunitats al nostre nínxol B2B.',
      author: {
        name: 'Jordi Pons',
        role: 'Business Development',
        image: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/10/review3.jpg'
      }
    },
    {
      content: 'Les trucades són molt més rellevants. Els informes suggereixen angles i objeccions clau que abans descobríem massa tard.',
      author: {
        name: 'Núria Serra',
        role: 'Account Executive',
        image: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/10/review4.jpg'
      }
    },
    {
      content: 'Implementació en dos dies i integració amb el nostre CRM sense friccions. Pipeline sempre ple i prioritzat.',
      author: {
        name: 'Pol Garcia',
        role: 'Revenue Operations',
        image: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/10/review1.jpg'
      }
    },
    {
      content: 'Ideal per a equips petits que necessiten escalar ràpid. Hem passat de prospecció manual a converses de valor.',
      author: {
        name: 'Laura Vidal',
        role: 'Marketing Manager',
        image: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/10/review2.jpg'
      }
    }
  ]

  // Blog posts data
  const blogPosts = [
    {
      title: 'A quick guide to picking the right branding agency for your rebrand',
      excerpt: 'When evaluating potential agencies, consider their aspects of branding and design.',
      image: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/08/crm-blog-1-768x497.jpg',
      categories: ['Marketing', 'Technology'],
      author: { name: 'KeyDesign' },
      date: 'August 21, 2023',
      comments: 3,
      slug: 'guide-branding-agency'
    },
    {
      title: 'Challenges of creating and structuring a multi-brand system',
      excerpt: 'The concept of a multi-brand system has gained traction to manage various brands.',
      image: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/08/crm-blog-4-768x497.jpg',
      categories: ['Insights', 'Marketing'],
      author: { name: 'KeyDesign' },
      date: 'August 21, 2023',
      comments: 3,
      slug: 'multi-brand-system'
    },
    {
      title: 'The five-step process for running effective brainstorming sessions',
      excerpt: 'A well-defined statement helps participants focus on creativity and ensures same page.',
      image: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/08/crm-blog-3-768x497.jpg',
      categories: ['Guides', 'Insights'],
      author: { name: 'KeyDesign' },
      date: 'August 21, 2023',
      comments: 3,
      slug: 'brainstorming-sessions'
    }
  ]

  // Integration partners data
  const integrations = [
    { name: 'Slack', logo: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/integrations-1.png' },
    { name: 'Zoom', logo: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/integrations-2.png' },
    { name: 'Salesforce', logo: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/integrations-3.png' },
    { name: 'HubSpot', logo: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/integrations-4.png' },
    { name: 'Mailchimp', logo: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/integrations-5.png' },
    { name: 'Stripe', logo: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/integrations-6.png' },
    { name: 'Zapier', logo: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/integrations-7.png' },
    { name: 'Google Analytics', logo: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/integrations-8.png' },
    { name: 'Shopify', logo: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/integrations-9.png' },
    { name: 'WordPress', logo: 'https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/integrations-10.png' },
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Trusted By Section */}
      <TrustedBySection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Sticky Navigation */}
      <StickyNavigation services={services} />

      {/* Services Tabbed Section */}
      <section id="funcionalitats" className="section-padding bg-gray-50">
        <div className="container-custom">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index < services.length - 1 ? 'mb-32' : ''}`}
            >
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div>
                  <h6 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                    {service.title}
                    {service.badge && (
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </h6>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                    <span className="gradient-text">{service.subtitle.split(' ')[0]}</span>{' '}
                    {service.subtitle.split(' ').slice(1).join(' ')}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <Image
                  src={service.image}
                  alt={`${service.title} dashboard interface`}
                  width={550}
                  height={385}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Integracions</span> amb el teu stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connecta amb CRM, automatització d’email, pagaments i eines de col·laboració. Exporta leads i mantén el seguiment actualitzat.
            </p>
            <Link href="/solutions" className="btn-primary">
              Descobreix-ne més
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
            {integrations.map((integration, index) => (
              <div
                key={integration.name}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 w-full flex items-center justify-center group"
              >
                <Image
                  src={integration.logo}
                  alt={`${integration.name} integration`}
                  width={80}
                  height={80}
                  className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection blogPosts={blogPosts} />

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10" />
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h6 className="text-sm font-semibold text-primary-100 uppercase tracking-wider mb-4">
                Comença
              </h6>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Preparat per multiplicar els teus <span className="text-primary-200">leads qualificats</span>?
              </h2>
              <p className="text-xl text-primary-100 leading-relaxed mb-8">
                Passa de la prospecció manual a una operativa guiada per IA. Més reunions, millors converses i un cicle de venda més curt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/get-started" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                  Comença ara
                </Link>
                <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                  Parla amb vendes
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/crm-mockup-cta.png"
                alt="Plataforma de generació de leads amb anàlisi i informes"
                width={752}
                height={423}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
