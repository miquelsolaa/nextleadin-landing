/**
 * Normalitza les categories de tots els articles del blog a una de les 8 definides (en anglès).
 * Ús: node scripts/normalize-blog-categories.js
 */

const fs = require('fs')
const path = require('path')

const CONTENT_DIR = path.join(__dirname, '..', 'content', 'blog')

const EIGHT_CATEGORIES = [
  'Lead Generation',
  'B2B Sales',
  'AI Prospecting',
  'AI for Sales',
  'Sales Automation',
  'B2B Strategy',
  'Local Business',
  'CRM Integration'
]

/** Map qualsevol categoria existent (CA/ES/EN) -> una de les 8 en anglès */
const OLD_TO_NEW = {
  'Lead Generation': 'Lead Generation',
  'Generación de Leads': 'Lead Generation',
  'Generació de Leads': 'Lead Generation',
  'Generación de leads': 'Lead Generation',
  'Generació de leads': 'Lead Generation',
  'B2B Sales': 'B2B Sales',
  'Ventas B2B': 'B2B Sales',
  'Vendes B2B': 'B2B Sales',
  'Sales': 'B2B Sales',
  'Ventas': 'B2B Sales',
  'Vendes': 'B2B Sales',
  'SaaS Sales': 'B2B Sales',
  'Ventas SaaS': 'B2B Sales',
  'Vendes SaaS': 'B2B Sales',
  'AI Prospecting': 'AI Prospecting',
  'AI for Sales': 'AI for Sales',
  'AI Sales': 'AI for Sales',
  'IA para Ventas': 'AI for Sales',
  'IA per a Vendes': 'AI for Sales',
  'Ventas con IA': 'AI for Sales',
  'Vendes amb IA': 'AI for Sales',
  'IA Ventas': 'AI for Sales',
  'IA Vendes': 'AI for Sales',
  'AI in Sales': 'AI for Sales',
  'AI Technology': 'AI for Sales',
  'Tecnología IA': 'AI for Sales',
  'Tecnologia IA': 'AI for Sales',
  'IA en ventas': 'AI for Sales',
  'IA en vendes': 'AI for Sales',
  'IA en Ventas': 'AI for Sales',
  'AI': 'AI for Sales',
  'IA': 'AI for Sales',
  'Sales Automation': 'Sales Automation',
  'Automatización': 'Sales Automation',
  'Automatització': 'Sales Automation',
  'B2B Strategy': 'B2B Strategy',
  'Estrategia B2B': 'B2B Strategy',
  'Estratègia B2B': 'B2B Strategy',
  'Sales Strategy': 'B2B Strategy',
  'Estrategia de Ventas': 'B2B Strategy',
  'Estratègia de Vendes': 'B2B Strategy',
  'B2B Marketing': 'B2B Strategy',
  'Màrqueting B2B': 'B2B Strategy',
  'Marketing B2B': 'B2B Strategy',
  'Estrategia Comercial': 'B2B Strategy',
  'Estratègia Comercial': 'B2B Strategy',
  'Local Business': 'Local Business',
  'CRM Integration': 'CRM Integration',
  'Leads': 'Lead Generation',
  'Escalado': 'Lead Generation',
  'Segmentación': 'Lead Generation',
  'Personalización': 'Lead Generation'
}

function mapToNewCategory(oldCategory) {
  const trimmed = (oldCategory || '').trim()
  return OLD_TO_NEW[trimmed] || 'Lead Generation'
}

function normalizeFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')
  const match = content.match(/^categories:\s*(\[[\s\S]*?\])\s*$/m)
  if (!match) return { updated: false }

  const oldLine = match[0]
  const inner = match[1]
  const firstQuote = inner.indexOf('"')
  if (firstQuote === -1) return { updated: false }
  const endQuote = inner.indexOf('"', firstQuote + 1)
  const firstCategory = inner.slice(firstQuote + 1, endQuote)
  const newCategory = mapToNewCategory(firstCategory)
  const newLine = `categories: ["${newCategory}"]`
  if (oldLine === newLine) return { updated: false }
  content = content.replace(oldLine, newLine)
  fs.writeFileSync(filePath, content, 'utf8')
  return { updated: true, from: firstCategory, to: newCategory }
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
        console.log(`${locale}/${file}: "${result.from}" -> "${result.to}"`)
      }
    }
  }
  console.log(`\nTotal: ${total} fitxers, ${updated} actualitzats.`)
}

main()
