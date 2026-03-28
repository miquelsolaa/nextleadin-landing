import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { locales, type AppLocale } from '@/i18n/routing'
import { generateAIOptimizedMetadata } from '@/lib/seo-metadata'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

function isValidLocale(locale: string): locale is AppLocale {
  return (locales as readonly string[]).includes(locale)
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  return generateAIOptimizedMetadata('contact', locale)
}

export default async function ContactLayout({ children, params }: Props) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  return children
}
