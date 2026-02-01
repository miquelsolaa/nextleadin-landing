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
 * Returns the canonical English category from a URL slug (e.g. "lead generation" → "Lead Generation").
 * Used on category archive pages to get the display name.
 */
export function getCategoryCanonicalFromSlug(slug: string): string | null {
  const normalized = (slug || '').trim().toLowerCase()
  if (!normalized) return null
  const found = CANONICAL_CATEGORIES.find((name) => name.toLowerCase() === normalized)
  return found ?? null
}
