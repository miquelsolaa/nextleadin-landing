/**
 * Normalitza els tags de tots els articles del blog als canònics en anglès.
 * Ús: node scripts/normalize-blog-tags.js
 */

const fs = require('fs')
const path = require('path')

const CONTENT_DIR = path.join(__dirname, '..', 'content', 'blog')

/** Map qualsevol tag existent (CA/ES/EN) -> canònic en anglès (igual que lib/blog-tags.ts TAG_VARIANT_TO_CANONICAL) */
const OLD_TO_CANONICAL = {
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
  'AI-Powered Lead Generation': 'Lead Generation',
  'Outbound Strategy': 'Outbound Sales',
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

function mapToCanonical(tag) {
  const trimmed = (tag || '').trim()
  return OLD_TO_CANONICAL[trimmed] || trimmed
}

function normalizeFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')
  const match = content.match(/^tags:\s*\[([\s\S]*?)\]\s*$/m)
  if (!match) return { updated: false }

  const oldLine = match[0]
  const inner = match[1]
  const tagRegex = /"([^"]*)"/g
  const oldTags = []
  let m
  while ((m = tagRegex.exec(inner)) !== null) {
    oldTags.push(m[1])
  }
  if (oldTags.length === 0) return { updated: false }

  const canonicalSet = new Set()
  const newTags = []
  for (const t of oldTags) {
    const c = mapToCanonical(t)
    if (canonicalSet.has(c)) continue
    canonicalSet.add(c)
    newTags.push(c)
  }

  const newLine = `tags: [${newTags.map((tag) => `"${tag}"`).join(', ')}]`
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
