// Tipus per a configuració OpenGraph
export interface OGTexts {
  title: string
  subtitle: string
  description: string
  cta: string
}

export interface OGPageConfig extends OGTexts {
  url: string
  imageUrl: string
  width: number
  height: number
  primary: string
  secondary: string
  background: string
  text: string
  textSecondary: string
  titleFont: string
  subtitleFont: string
  bodyFont: string
}

export interface OGConfig {
  pages: Record<string, Record<string, OGPageConfig>>
  baseUrl: string
  outputDir: string
}

export type OGLocale = 'ca' | 'es' | 'en'
export type OGPage = 'home' | 'pricing' | 'contact' | 'faq'
