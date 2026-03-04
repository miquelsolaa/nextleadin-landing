import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';

export interface FeatureMeta {
  title: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  keywords: string[];
  icon: string;
  image: string;
}

export interface FeatureBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface FeatureUseCase {
  title: string;
  description: string;
}

export interface FeatureStat {
  value: string;
  label: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FeaturePost {
  slug: string;
  meta: FeatureMeta;
  benefits: FeatureBenefit[];
  useCases: FeatureUseCase[];
  stats: FeatureStat[];
  faq: FAQ[];
  ctaTitle: string;
  ctaDescription: string;
  contentHtml: string;
}

function getFeaturesDirectory(locale: string): string {
  return path.join(process.cwd(), 'content', 'features', locale);
}

function normalizeSlug(slug: string): string {
  return slug.toLowerCase().replace(/\.md$/, '');
}

export function featureExists(slug: string, locale: string): boolean {
  const normalizedSlug = normalizeSlug(slug);
  const filePath = path.join(getFeaturesDirectory(locale), `${normalizedSlug}.md`);
  return fs.existsSync(filePath);
}

export async function getFeatureData(slug: string, locale: string): Promise<FeaturePost | null> {
  const normalizedSlug = normalizeSlug(slug);
  const featuresDirectory = getFeaturesDirectory(locale);
  const filePath = path.join(featuresDirectory, `${normalizedSlug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    slug: normalizedSlug,
    meta: {
      title: data.title || '',
      description: data.description || '',
      heroTitle: data.heroTitle || data.title || '',
      heroDescription: data.heroDescription || data.description || '',
      keywords: data.keywords || [],
      icon: data.icon || '⚡',
      image: data.image || '/images/features/default.jpg',
    },
    benefits: data.benefits || [],
    useCases: data.useCases || [],
    stats: data.stats || [],
    faq: data.faq || [],
    ctaTitle: data.ctaTitle || '',
    ctaDescription: data.ctaDescription || '',
    contentHtml,
  };
}

export function getAllFeatures(locale: string): FeaturePost[] {
  const featuresDirectory = getFeaturesDirectory(locale);
  
  if (!fs.existsSync(featuresDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(featuresDirectory);
  const features: FeaturePost[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md')) continue;
    
    const slug = normalizeSlug(fileName);
    const filePath = path.join(featuresDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    features.push({
      slug,
      meta: {
        title: data.title || '',
        description: data.description || '',
        heroTitle: data.heroTitle || data.title || '',
        heroDescription: data.heroDescription || data.description || '',
        keywords: data.keywords || [],
        icon: data.icon || '⚡',
        image: data.image || '/images/features/default.jpg',
      },
      benefits: data.benefits || [],
      useCases: data.useCases || [],
      stats: data.stats || [],
      faq: data.faq || [],
      ctaTitle: data.ctaTitle || '',
      ctaDescription: data.ctaDescription || '',
      contentHtml: '',
    });
  }

  return features;
}

export function getAllFeatureSlugs(): string[] {
  const locales = ['ca', 'es', 'en'];
  const allSlugs = new Set<string>();

  for (const locale of locales) {
    const featuresDirectory = getFeaturesDirectory(locale);
    if (!fs.existsSync(featuresDirectory)) continue;

    const fileNames = fs.readdirSync(featuresDirectory);
    for (const fileName of fileNames) {
      if (fileName.endsWith('.md')) {
        allSlugs.add(normalizeSlug(fileName));
      }
    }
  }

  return Array.from(allSlugs);
}

export function getFeatureUrl(slug: string, locale: string): string {
  return `/${locale}/features/${slug}`;
}
