/**
 * Blog categories: stored in English in frontmatter, displayed translated in the UI.
 * Keys match pages.blog.categoryLabels in messages (ca.json, es.json, en.json).
 */
export const BLOG_CATEGORY_KEYS = [
  'leadGeneration',
  'b2bSales',
  'aiProspecting',
  'aiForSales',
  'salesAutomation',
  'b2bStrategy',
  'localBusiness',
  'crmIntegration'
] as const

export type BlogCategoryKey = (typeof BLOG_CATEGORY_KEYS)[number]

/** Map from frontmatter value (English) to translation key */
export const CATEGORY_TO_KEY: Record<string, BlogCategoryKey> = {
  'Lead Generation': 'leadGeneration',
  'B2B Sales': 'b2bSales',
  'AI Prospecting': 'aiProspecting',
  'AI for Sales': 'aiForSales',
  'Sales Automation': 'salesAutomation',
  'B2B Strategy': 'b2bStrategy',
  'Local Business': 'localBusiness',
  'CRM Integration': 'crmIntegration'
}

/** Variants (CA/ES) to canonical English for slug normalization */
const CATEGORY_VARIANT_TO_CANONICAL: Record<string, string> = {
  ...Object.fromEntries(Object.keys(CATEGORY_TO_KEY).map((k) => [k, k])),
  'Generación de Leads': 'Lead Generation',
  'Ventas B2B': 'B2B Sales',
  'Prospección con IA': 'AI Prospecting',
  'IA para Ventas': 'AI for Sales',
  'Automatización de Ventas': 'Sales Automation',
  'Estrategia B2B': 'B2B Strategy',
  'Negocio Local': 'Local Business',
  'Integración CRM': 'CRM Integration',
  'Captació de Leads': 'Lead Generation',
  'Vendes B2B': 'B2B Sales',
  'Prospecció amb IA': 'AI Prospecting',
  'IA per a Vendes': 'AI for Sales',
  'Automatització de Vendes': 'Sales Automation',
  'Estratègia B2B': 'B2B Strategy',
  'Negoci Local': 'Local Business',
  'Integració CRM': 'CRM Integration',
}

/**
 * Returns the translation key for a category value from frontmatter (English).
 * If the category is not in the map, returns null (caller can fallback to raw value).
 */
export function getCategoryLabelKey(category: string): string | null {
  const key = CATEGORY_TO_KEY[category]
  return key ?? null
}

/** Canonical English category names (for URL slug → display) */
const CANONICAL_CATEGORIES: string[] = Object.keys(CATEGORY_TO_KEY)

/**
 * Returns the canonical English category from a URL slug (e.g. "lead-generation" or "ai-for-sales" → "Lead Generation").
 * Handles both hyphenated and space-separated slugs for backward compatibility.
 */
export function getCategoryCanonicalFromSlug(slug: string): string | null {
  const normalized = (slug || '')
    .trim()
    .toLowerCase()
    .replace(/-/g, ' ')
  if (!normalized) return null
  const found = CANONICAL_CATEGORIES.find((name) => name.toLowerCase() === normalized)
  return found ?? null
}

/**
 * Returns the URL slug for a category (hyphenated, no spaces).
 * e.g. "AI for Sales" → "ai-for-sales"
 */
export function getCategorySlug(category: string): string {
  const canonical = CATEGORY_VARIANT_TO_CANONICAL[category?.trim()] ?? category
  return (canonical || '').trim().toLowerCase().replace(/\s+/g, '-')
}
