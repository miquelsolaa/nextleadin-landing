/**
 * Blog tags: stored in English in frontmatter, displayed translated in the UI.
 * Keys match blog.tagLabels in messages (ca.json, es.json, en.json).
 */
export const BLOG_TAG_KEYS = [
  'leadGeneration',
  'b2bSales',
  'aiProspecting',
  'aiForSales',
  'salesAutomation',
  'crmIntegration',
  'outboundSales',
  'leadEnrichment',
  'hyperSegmentation',
  'prospecting'
] as const

export type BlogTagKey = (typeof BLOG_TAG_KEYS)[number]

/** Map from frontmatter value (English canonical) to translation key */
export const TAG_TO_KEY: Record<string, BlogTagKey> = {
  'Lead Generation': 'leadGeneration',
  'B2B Sales': 'b2bSales',
  'AI Prospecting': 'aiProspecting',
  'AI for Sales': 'aiForSales',
  'Sales Automation': 'salesAutomation',
  'CRM Integration': 'crmIntegration',
  'Outbound Sales': 'outboundSales',
  'Lead Enrichment': 'leadEnrichment',
  'Hyper-segmentation': 'hyperSegmentation',
  'Prospecting': 'prospecting'
}

/**
 * Returns the translation key for a tag value from frontmatter (English).
 * If the tag is not in the map, returns null (caller can fallback to raw value).
 */
export function getTagLabelKey(tag: string): string | null {
  const key = TAG_TO_KEY[tag]
  return key ?? null
}

/** Canonical English tag names (for URL slug → display) */
const CANONICAL_TAGS: string[] = Object.keys(TAG_TO_KEY)

/**
 * Returns the URL slug for a canonical tag (e.g. "Lead Generation" → "lead-generation").
 */
export function getTagSlug(canonicalTag: string): string {
  return (canonicalTag || '').trim().toLowerCase().replace(/\s+/g, '-')
}

/**
 * Returns the canonical English tag from a URL slug (e.g. "lead-generation" → "Lead Generation").
 * Used on tag archive pages to get the display name.
 */
export function getTagCanonicalFromSlug(slug: string): string | null {
  const normalized = (slug || '').trim().toLowerCase().replace(/-/g, ' ')
  if (!normalized) return null
  const found = CANONICAL_TAGS.find((name) => name.toLowerCase() === normalized)
  return found ?? null
}
