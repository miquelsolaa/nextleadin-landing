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
import ServicesSection from '@/components/ServicesSection'
import CTASection from '@/components/CTASection'

export default async function Home({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params
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

  const isEs = locale === 'es'

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Trusted By Section */}
      <TrustedBySection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Sticky Navigation */}
      <StickyNavigation />

      {/* Services Tabbed Section */}
      <ServicesSection />

      {/* Integrations Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {isEs ? (
                <>
                  <span className="gradient-text">Integraciones</span> con tu stack
                </>
              ) : (
                <>
                  <span className="gradient-text">Integracions</span> amb el teu stack
                </>
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {isEs 
                ? 'Conecta con CRM, automatización de email, pagos y herramientas de colaboración. Exporta leads y mantén el seguimiento actualizado.' 
                : 'Connecta amb CRM, automatització d’email, pagaments i eines de col·laboració. Exporta leads i mantén el seguiment actualitzat.'}
            </p>
            <Link href="/solutions" className="btn-primary">
              {isEs ? 'Descubre más' : 'Descobreix-ne més'}
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
      <BlogSection blogPosts={[]} />

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />

      {/* CTA Section */}
      <CTASection />
    </>
  )
}


