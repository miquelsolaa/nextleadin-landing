import type { Metadata } from 'next'
import { generateAIOptimizedMetadata } from '@/lib/seo-metadata'

// Utilitzar la nova configuració SEO optimitzada per a AI
export const metadata: Metadata = generateAIOptimizedMetadata('contact', 'ca')

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


