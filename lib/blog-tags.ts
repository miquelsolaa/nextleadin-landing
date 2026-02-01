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

/** Canonical English tag names (for URL slug → display) */
const CANONICAL_TAGS: string[] = Object.keys(TAG_TO_KEY)

/**
 * Map from any tag variant (CA/ES/EN) to canonical English tag.
 * Used to normalize frontmatter tags and match posts across locales.
 */
export const TAG_VARIANT_TO_CANONICAL: Record<string, string> = {
  // English canonical (identity)
  'Lead Generation': 'Lead Generation',
  'B2B Sales': 'B2B Sales',
  'AI Prospecting': 'AI Prospecting',
  'AI for Sales': 'AI for Sales',
  'Sales Automation': 'Sales Automation',
  'CRM Integration': 'CRM Integration',
  'Outbound Sales': 'Outbound Sales',
  'Lead Enrichment': 'Lead Enrichment',
  'Hyper-segmentation': 'Hyper-segmentation',
  'Prospecting': 'Prospecting',
  // English variants
  'AI-Powered Lead Generation': 'Lead Generation',
  'Outbound Strategy': 'Outbound Sales',
  // Spanish
  'Captación de Leads con IA': 'Lead Generation',
  'Ventas B2B': 'B2B Sales',
  'Prospección con IA': 'AI Prospecting',
  'Automatización de Ventas': 'Sales Automation',
  'Estrategia Outbound': 'Outbound Sales',
  'Enriquecimiento de Leads': 'Lead Enrichment',
  'Hiper-segmentación': 'Hyper-segmentation',
  'Prospección': 'Prospecting',
  'Integración CRM': 'CRM Integration',
  'Ventas Outbound': 'Outbound Sales',
  // Catalan
  'Captació de Leads amb IA': 'Lead Generation',
  'Vendes B2B': 'B2B Sales',
  'Prospecció amb IA': 'AI Prospecting',
  'Automatització de Vendes': 'Sales Automation',
  'Estratègia Outbound': 'Outbound Sales',
  'Enriquiment de Leads': 'Lead Enrichment',
  'Hiper-segmentació': 'Hyper-segmentation',
  'Prospecció': 'Prospecting',
  'Integració CRM': 'CRM Integration',
  'Vendes Outbound': 'Outbound Sales'
}

/**
 * Returns the canonical English tag for any variant (CA/ES/EN).
 * If the tag is already canonical or mapped, returns it; otherwise returns the trimmed input.
 */
export function getCanonicalTag(tag: string): string {
  const trimmed = (tag || '').trim()
  return TAG_VARIANT_TO_CANONICAL[trimmed] ?? trimmed
}

/**
 * Returns the translation key for a tag value from frontmatter (any language variant).
 * If the tag is not in the map, returns null (caller can fallback to raw value).
 */
export function getTagLabelKey(tag: string): string | null {
  const canonical = getCanonicalTag(tag)
  const key = TAG_TO_KEY[canonical]
  return key ?? null
}

/**
 * Returns the URL slug for a tag (accepts any variant; normalizes to canonical first).
 * e.g. "Lead Generation" → "lead-generation", "Captación de Leads con IA" → "lead-generation"
 */
export function getTagSlug(tag: string): string {
  const canonical = getCanonicalTag(tag)
  return (canonical || '').trim().toLowerCase().replace(/\s+/g, '-')
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
