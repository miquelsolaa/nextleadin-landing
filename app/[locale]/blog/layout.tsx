import { Metadata } from 'next'
import { generateAIOptimizedMetadata } from '@/lib/seo-metadata'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? (locale as 'ca' | 'es' | 'en') : 'ca'

  return generateAIOptimizedMetadata('blog', validLocale)
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
