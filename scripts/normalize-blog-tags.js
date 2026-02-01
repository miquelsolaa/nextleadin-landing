/**
 * Normalitza els tags de tots els articles del blog a un màxim de 2 dels 10 definits (en anglès).
 * Ús: node scripts/normalize-blog-tags.js
 */

const fs = require('fs')
const path = require('path')

const CONTENT_DIR = path.join(__dirname, '..', 'content', 'blog')
const MAX_TAGS_PER_POST = 2

const CANONICAL_TAGS = [
  'Lead Generation',
  'B2B Sales',
  'AI Prospecting',
  'AI for Sales',
  'Sales Automation',
  'CRM Integration',
  'Outbound Sales',
  'Lead Enrichment',
  'Hyper-segmentation',
  'Prospecting'
]

/** Map qualsevol tag existent (CA/ES/EN) -> un dels 10 en anglès */
const OLD_TO_NEW = {
  // Lead Generation
  'Lead Generation': 'Lead Generation',
  'lead generation': 'Lead Generation',
  'Generación de Leads': 'Lead Generation',
  'Generació de Leads': 'Lead Generation',
  'generación de leads': 'Lead Generation',
  'generació de leads': 'Lead Generation',
  'generación de leads hipersegmentada': 'Lead Generation',
  'generació de leads hipersegmentada': 'Lead Generation',
  'Generación de leads B2B con IA': 'Lead Generation',
  'Generació de leads B2B amb IA': 'Lead Generation',
  'AI B2B Lead Generation': 'Lead Generation',
  'AI lead generation': 'Lead Generation',
  'Generación de leads con IA': 'Lead Generation',
  'Generació de leads amb IA': 'Lead Generation',
  'IA generación leads': 'Lead Generation',
  'IA generació leads': 'Lead Generation',
  'sales leads': 'Lead Generation',
  'leads de ventas': 'Lead Generation',
  'leads de vendes': 'Lead Generation',
  'lead generation platform': 'Lead Generation',
  'leads cualificados': 'Lead Generation',
  // B2B Sales
  'B2B Sales': 'B2B Sales',
  'b2b sales': 'B2B Sales',
  'Ventas B2B': 'B2B Sales',
  'Vendes B2B': 'B2B Sales',
  'ventas B2B': 'B2B Sales',
  'vendes B2B': 'B2B Sales',
  'Leads B2B': 'B2B Sales',
  'B2B leads': 'B2B Sales',
  'B2B lead generation': 'Lead Generation',
  'generación de leads B2B': 'Lead Generation',
  'generació de leads B2B': 'Lead Generation',
  // AI Prospecting
  'AI Prospecting': 'AI Prospecting',
  'AI prospecting': 'AI Prospecting',
  'prospección con IA': 'AI Prospecting',
  'Prospección con IA': 'AI Prospecting',
  'prospecció amb IA': 'AI Prospecting',
  'Prospecció amb IA': 'AI Prospecting',
  'prospección con IA': 'AI Prospecting',
  'prospecció amb IA': 'AI Prospecting',
  'AI sales': 'AI for Sales',
  'Ventas IA': 'AI for Sales',
  'Vendes IA': 'AI for Sales',
  'prospección hipersegmentada': 'AI Prospecting',
  'prospecció hipersegmentada': 'AI Prospecting',
  'hyper-segmented prospecting': 'AI Prospecting',
  'B2B prospecting': 'Prospecting',
  'Prospección B2B': 'Prospecting',
  'Prospecció B2B': 'Prospecting',
  'SaaS prospecting': 'Prospecting',
  'Prospectació SaaS': 'Prospecting',
  // AI for Sales
  'AI for Sales': 'AI for Sales',
  'AI for sales': 'AI for Sales',
  'IA para Ventas': 'AI for Sales',
  'IA per a Vendes': 'AI for Sales',
  'IA para ventas': 'AI for Sales',
  'automatización de ventas IA': 'Sales Automation',
  'automatització de vendes amb IA': 'Sales Automation',
  'AI sales automation': 'Sales Automation',
  'automatización de ventas con IA': 'Sales Automation',
  'sales efficiency AI': 'Sales Automation',
  'eficiència de vendes amb IA': 'Sales Automation',
  'eficiencia de ventas con IA': 'Sales Automation',
  'inteligencia artificial': 'AI for Sales',
  // Sales Automation
  'Sales Automation': 'Sales Automation',
  'sales automation': 'Sales Automation',
  'Automatización de ventas': 'Sales Automation',
  'Automatització de vendes': 'Sales Automation',
  'Automatización ventas IA': 'Sales Automation',
  'Automatització vendes IA': 'Sales Automation',
  'automatización de ventas': 'Sales Automation',
  'automatització de vendes': 'Sales Automation',
  'sales automation AI': 'Sales Automation',
  'automatización': 'Sales Automation',
  'Automatització': 'Sales Automation',
  'automatización de leads': 'Sales Automation',
  'automatización de ventas': 'Sales Automation',
  'workflow': 'Sales Automation',
  'pipeline de ventas': 'Sales Automation',
  'escalado': 'Sales Automation',
  'sales efficiency': 'Sales Automation',
  'Eficiencia de ventas': 'Sales Automation',
  'Eficiència comercial': 'Sales Automation',
  // CRM Integration
  'CRM Integration': 'CRM Integration',
  'CRM integration': 'CRM Integration',
  'integración CRM': 'CRM Integration',
  'Integración CRM': 'CRM Integration',
  'integració CRM': 'CRM Integration',
  'Integració CRM': 'CRM Integration',
  // Outbound Sales
  'Outbound Sales': 'Outbound Sales',
  'outbound sales': 'Outbound Sales',
  'ventas outbound': 'Outbound Sales',
  'vendes outbound': 'Outbound Sales',
  'Estrategia de salida': 'Outbound Sales',
  'Estratègia de sortida': 'Outbound Sales',
  'outbound strategy': 'Outbound Sales',
  // Lead Enrichment
  'Lead Enrichment': 'Lead Enrichment',
  'lead enrichment': 'Lead Enrichment',
  'enriquecimiento de leads': 'Lead Enrichment',
  'enriqueciment de leads': 'Lead Enrichment',
  'enriquecimiento de leads con IA': 'Lead Enrichment',
  'enriquiment de leads amb IA': 'Lead Enrichment',
  'lead enrichment AI': 'Lead Enrichment',
  'personalización': 'Lead Enrichment',
  // Hyper-segmentation
  'Hyper-segmentation': 'Hyper-segmentation',
  'hyper-segmentation': 'Hyper-segmentation',
  'hipersegmentación': 'Hyper-segmentation',
  'hipersegmentació': 'Hyper-segmentation',
  'hiper-segmentació': 'Hyper-segmentation',
  'segmentación geográfica': 'Hyper-segmentation',
  'predictive analytics': 'Hyper-segmentation',
  'analítica predictiva': 'Hyper-segmentation',
  // Prospecting
  'Prospecting': 'Prospecting',
  'prospecting': 'Prospecting',
  'prospección': 'Prospecting',
  'prospecció': 'Prospecting',
  'B2B': 'B2B Sales',
  'Plataforma leads IA': 'Lead Generation',
  'estrategia de ventas B2B': 'B2B Sales',
  'estratègia de vendes B2B': 'B2B Sales',
  'B2B sales strategy': 'B2B Sales'
}

function mapToCanonical(oldTag) {
  const trimmed = (oldTag || '').trim()
  return OLD_TO_NEW[trimmed] || null
}

function normalizeFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')
  const match = content.match(/^tags:\s*(\[[\s\S]*?\])\s*$/m)
  if (!match) return { updated: false }

  const oldLine = match[0]
  const inner = match[1]
  const tagMatches = inner.matchAll(/"([^"]+)"/g)
  const oldTags = [...tagMatches].map((m) => m[1])
  const canonicals = new Set()
  for (const t of oldTags) {
    const c = mapToCanonical(t)
    if (c) canonicals.add(c)
  }
  const newTags = Array.from(canonicals).slice(0, MAX_TAGS_PER_POST)
  if (newTags.length === 0) newTags.push('Lead Generation')
  const newLine = `tags: ${JSON.stringify(newTags)}`
  if (oldLine === newLine) return { updated: false }
  content = content.replace(oldLine, newLine)
  fs.writeFileSync(filePath, content, 'utf8')
  return { updated: true, from: oldTags, to: newTags }
}

function main() {
  const locales = ['ca', 'en', 'es']
  let total = 0
  let updated = 0
  for (const locale of locales) {
    const dir = path.join(CONTENT_DIR, locale)
    if (!fs.existsSync(dir)) continue
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'))
    for (const file of files) {
      const filePath = path.join(dir, file)
      total++
      const result = normalizeFile(filePath)
      if (result.updated) {
        updated++
        console.log(`${locale}/${file}: [${result.from.join(', ')}] -> [${result.to.join(', ')}]`)
      }
    }
  }
  console.log(`\nTotal: ${total} fitxers, ${updated} actualitzats.`)
}

main()
