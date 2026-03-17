import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import { getFeatureData, getAllFeatureSlugs, featureExists } from '@/lib/features';
import CTASection from '@/components/CTASection';
import SeoJsonLd from '@/components/SeoJsonLd';
import * as LucideIcons from 'lucide-react';

interface FeaturePageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export const dynamicParams = false

export async function generateStaticParams() {
  const slugs = getAllFeatureSlugs();
  const locales = ['ca', 'es', 'en'];
  
  return locales.flatMap(locale =>
    slugs.map(slug => ({
      locale,
      slug,
    }))
  );
}

export async function generateMetadata({ params }: FeaturePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const feature = await getFeatureData(slug, locale);
  
  if (!feature) {
    return {
      title: 'Feature Not Found',
    };
  }

  const canonicalUrl =
    locale === 'es'
      ? `https://nextleadin.com/features/${slug}`
      : `https://nextleadin.com/${locale}/features/${slug}`;

  return {
    title: feature.meta.title,
    description: feature.meta.description,
    keywords: feature.meta.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'x-default': `https://nextleadin.com/features/${slug}`,
        'es-ES': `https://nextleadin.com/features/${slug}`,
        'ca-ES': `https://nextleadin.com/ca/features/${slug}`,
        'en-US': `https://nextleadin.com/en/features/${slug}`,
      },
    },
    openGraph: {
      title: feature.meta.title,
      description: feature.meta.description,
      url: canonicalUrl,
      images: [feature.meta.image],
      type: 'website',
    },
  };
}

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

export default async function FeaturePage({ params }: FeaturePageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? locale : 'ca';
  
  if (!featureExists(slug, locale)) {
    notFound();
  }

  const feature = await getFeatureData(slug, locale);
  
  if (!feature) {
    notFound();
  }

  const t = {
    ca: {
      breadcrumbHome: 'Inici',
      breadcrumbFeatures: 'Funcionalitats',
      benefitsTitle: 'Beneficis Clau',
      useCasesTitle: 'Casos d\'Ús',
      faqTitle: 'Preguntes Freqüents',
      ctaPrimary: 'Prova gratuïta',
      ctaSecondary: 'Més informació'
    },
    es: {
      breadcrumbHome: 'Inicio',
      breadcrumbFeatures: 'Funcionalidades',
      benefitsTitle: 'Beneficios Clave',
      useCasesTitle: 'Casos de Uso',
      faqTitle: 'Preguntas Frecuentes',
      ctaPrimary: 'Prueba gratuita',
      ctaSecondary: 'Más información'
    },
    en: {
      breadcrumbHome: 'Home',
      breadcrumbFeatures: 'Features',
      benefitsTitle: 'Key Benefits',
      useCasesTitle: 'Use Cases',
      faqTitle: 'FAQ',
      ctaPrimary: 'Start free trial',
      ctaSecondary: 'Learn more'
    }
  }[validLocale];

  const localePrefix = validLocale === 'es' ? '' : `/${validLocale}`;

  const breadcrumbItems = [
    { name: t.breadcrumbHome, url: `https://nextleadin.com${localePrefix}` },
    { name: t.breadcrumbFeatures, url: `https://nextleadin.com${localePrefix}/features` },
    { name: feature.meta.title, url: `https://nextleadin.com${localePrefix}/features/${slug}` },
  ];

  const faqItems = feature.faq.map(item => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <SeoJsonLd 
        type="BreadcrumbList" 
        data={{ items: breadcrumbItems }} 
      />
      {faqItems.length > 0 && (
        <SeoJsonLd 
          type="FAQPage" 
          data={{ faqs: faqItems }} 
        />
      )}
      <SeoJsonLd 
        type="Service" 
        data={{
          name: feature.meta.title,
          description: feature.meta.description,
          provider: 'NextLeadIn',
          url: `https://nextleadin.com${localePrefix}/features/${slug}`,
        }} 
      />

      {/* Hero Section */}
      <section className="relative bg-primary-700 py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 relative">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-white/70">
              <li>
                <Link href={`${localePrefix}/`} className="hover:text-white transition-colors">
                  {t.breadcrumbHome}
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href={`${localePrefix}/features`} className="hover:text-white transition-colors">
                  {t.breadcrumbFeatures}
                </Link>
              </li>
              <li>/</li>
              <li className="text-white font-medium">{feature.meta.title}</li>
            </ol>
          </nav>
          
          {/* Icon + Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white/10 rounded-xl">
              {getLucideIcon(feature.meta.icon, "w-10 h-10 text-white")}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {feature.meta.heroTitle}
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
            {feature.meta.heroDescription}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link 
              href="https://app.nextleadin.com/register" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              {t.ctaPrimary}
            </Link>
            <Link 
              href="#benefits" 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              {t.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {feature.stats.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {feature.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600">{stat.value}</div>
                  <div className="text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {feature.benefits.length > 0 && (
        <section id="benefits" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t.benefitsTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {feature.benefits.map((benefit, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="mb-4 text-primary-600">{getLucideIcon(benefit.icon, "w-8 h-8")}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {feature.useCases.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t.useCasesTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {feature.useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {feature.contentHtml && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div 
              className="prose prose-lg max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: feature.contentHtml }}
            />
          </div>
        </section>
      )}

      {feature.faq.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t.faqTitle}
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {feature.faq.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={feature.ctaTitle}
        description={feature.ctaDescription}
        primaryButtonText={t.ctaPrimary}
        primaryButtonHref="https://app.nextleadin.com/register"
        secondaryButtonText={validLocale === 'ca' ? 'Parlar amb vendes' : validLocale === 'es' ? 'Hablar con ventas' : 'Talk to sales'}
        secondaryButtonHref={`${localePrefix}/contact`}
      />
    </>
  );
}
