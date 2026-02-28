import { Metadata } from 'next';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import { getAllFeatures } from '@/lib/features';
import CTASection from '@/components/CTASection';
import SeoJsonLd from '@/components/SeoJsonLd';
import * as LucideIcons from 'lucide-react';

function getLucideIcon(iconName: string, className: string = "w-6 h-6"): React.ReactNode {
  const iconNamePascal = iconName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  
  const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[iconNamePascal];
  
  if (IconComponent) {
    return <IconComponent className={className} />;
  }
  
  return <LucideIcons.HelpCircle className={className} />;
}

interface FeaturesPageProps {
  params: Promise<{
    locale: string;
  }>;
}

const seoContent = {
  ca: {
    title: 'Funcionalitats | NextLeadIn',
    description: 'Descobreix totes les funcionalitats de NextLeadIn: anàlisi de ressenyes amb IA, enriquiment de dades, cerca d\'emails verificats i exportació a CRM.',
    heroTitle: 'Funcionalitats Potents per a la Teva Prospecció',
    heroDescription: 'Eines avançades per trobar, enriquir i convertir leads de negocis locals.',
    keyBenefits: 'Beneficis Clau',
    exploreFeatures: 'Explora les Funcionalitats',
    breadcrumbHome: 'Inici',
    breadcrumbFeatures: 'Funcionalitats',
    ctaPrimary: 'Prova gratuïta',
    ctaSecondary: 'Veure funcionalitats',
    ctaTitle: 'Prova Totes les Funcionalitats',
    ctaDescription: 'Comença amb una prova gratuïta de 7 dies. Sense targeta de crèdit.',
    ctaContact: 'Parlar amb vendes',
    fasterProspecting: 'Prospecció Més Ràpida',
    fasterProspectingDesc: 'Redueix el temps de recerca de leads fins a un 80%.',
    betterLeads: 'Leads Més Qualificats',
    betterLeadsDesc: 'Dades enriquides per prioritzar els millors prospectes.',
    moreConversions: 'Més Conversions',
    moreConversionsDesc: 'Insights accionables per tancar més vendes.',
  },
  es: {
    title: 'Funcionalidades | NextLeadIn',
    description: 'Descubre todas las funcionalidades de NextLeadIn: análisis de reseñas con IA, enriquecimiento de datos, búsqueda de emails verificados y exportación a CRM.',
    heroTitle: 'Funcionalidades Potentes para Tu Prospección',
    heroDescription: 'Herramientas avanzadas para encontrar, enriquecer y convertir leads de negocios locales.',
    keyBenefits: 'Beneficios Clave',
    exploreFeatures: 'Explora las Funcionalidades',
    breadcrumbHome: 'Inicio',
    breadcrumbFeatures: 'Funcionalidades',
    ctaPrimary: 'Prueba gratuita',
    ctaSecondary: 'Ver funcionalidades',
    ctaTitle: 'Prueba Todas las Funcionalidades',
    ctaDescription: 'Empieza con una prueba gratuita de 7 días. Sin tarjeta de crédito.',
    ctaContact: 'Hablar con ventas',
    fasterProspecting: 'Prospección Más Rápida',
    fasterProspectingDesc: 'Reduce el tiempo de búsqueda de leads hasta un 80%.',
    betterLeads: 'Leads Más Cualificados',
    betterLeadsDesc: 'Datos enriquecidos para priorizar los mejores prospectos.',
    moreConversions: 'Más Conversiones',
    moreConversionsDesc: 'Insights accionables para cerrar más ventas.',
  },
  en: {
    title: 'Features | NextLeadIn',
    description: 'Discover all NextLeadIn features: AI review analysis, data enrichment, verified email finder, and CRM export.',
    heroTitle: 'Powerful Features for Your Prospecting',
    heroDescription: 'Advanced tools to find, enrich, and convert local business leads.',
    keyBenefits: 'Key Benefits',
    exploreFeatures: 'Explore Features',
    breadcrumbHome: 'Home',
    breadcrumbFeatures: 'Features',
    ctaPrimary: 'Start free trial',
    ctaSecondary: 'View features',
    ctaTitle: 'Try All Features',
    ctaDescription: 'Start with a 7-day free trial. No credit card required.',
    ctaContact: 'Talk to sales',
    fasterProspecting: 'Faster Prospecting',
    fasterProspectingDesc: 'Reduce lead research time by up to 80%.',
    betterLeads: 'Better Qualified Leads',
    betterLeadsDesc: 'Enriched data to prioritize the best prospects.',
    moreConversions: 'More Conversions',
    moreConversionsDesc: 'Actionable insights to close more sales.',
  },
};

export async function generateMetadata({ params }: FeaturesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = seoContent[locale as keyof typeof seoContent] || seoContent.en;
  const canonicalUrl = `https://nextleadin.com/${locale}/features`;

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'ca': 'https://nextleadin.com/ca/features',
        'es': 'https://nextleadin.com/es/features',
        'en': 'https://nextleadin.com/en/features',
      },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: canonicalUrl,
      type: 'website',
    },
  };
}

export default async function FeaturesPage({ params }: FeaturesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? locale : 'ca';
  const content = seoContent[validLocale];
  const features = getAllFeatures(locale);
  const localePrefix = validLocale === 'ca' ? '' : `/${validLocale}`;

  const breadcrumbItems = [
    { name: content.breadcrumbHome, url: `https://nextleadin.com${localePrefix}` },
    { name: content.breadcrumbFeatures, url: `https://nextleadin.com${localePrefix}/features` },
  ];

  const featureListItems = features.map((feature, index) => ({
    position: index + 1,
    name: feature.meta.title,
    url: `https://nextleadin.com${localePrefix}/features/${feature.slug}`,
  }));

  return (
    <>
      <SeoJsonLd 
        type="BreadcrumbList" 
        data={{ items: breadcrumbItems }} 
      />
      <SeoJsonLd 
        type="ItemList" 
        data={{ items: featureListItems }} 
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 relative">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-white/70">
              <li>
                <Link href={`${localePrefix}/`} className="hover:text-white transition-colors">
                  {content.breadcrumbHome}
                </Link>
              </li>
              <li>/</li>
              <li className="text-white font-medium">{content.breadcrumbFeatures}</li>
            </ol>
          </nav>
          
          {/* Icon + Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white/10 rounded-xl">
              <LucideIcons.Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {content.heroTitle}
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
            {content.heroDescription}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link 
              href="https://app.nextleadin.com/register" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              {content.ctaPrimary}
            </Link>
            <Link 
              href="#features" 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              {content.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {content.exploreFeatures}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.slug}
                href={`${localePrefix}/features/${feature.slug}`}
                className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-500 hover:shadow-lg transition-all"
              >
                <div className="mb-4 text-primary-600">{getLucideIcon(feature.meta.icon, "w-10 h-10")}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                  {feature.meta.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.meta.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {content.keyBenefits}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="text-primary-600 mb-4 flex justify-center">{getLucideIcon('rocket', 'w-10 h-10')}</div>
              <h3 className="text-xl font-semibold mb-2">
                {content.fasterProspecting}
              </h3>
              <p className="text-gray-600">
                {content.fasterProspectingDesc}
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-primary-600 mb-4 flex justify-center">{getLucideIcon('target', 'w-10 h-10')}</div>
              <h3 className="text-xl font-semibold mb-2">
                {content.betterLeads}
              </h3>
              <p className="text-gray-600">
                {content.betterLeadsDesc}
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-primary-600 mb-4 flex justify-center">{getLucideIcon('trending-up', 'w-10 h-10')}</div>
              <h3 className="text-xl font-semibold mb-2">
                {content.moreConversions}
              </h3>
              <p className="text-gray-600">
                {content.moreConversionsDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={content.ctaTitle}
        description={content.ctaDescription}
        primaryButtonText={content.ctaPrimary}
        primaryButtonHref="https://app.nextleadin.com/register"
        secondaryButtonText={content.ctaContact}
        secondaryButtonHref={`${localePrefix}/contact`}
      />
    </>
  );
}
