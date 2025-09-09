import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Recursos sobre generació de leads i IA',
  description: 'Articles i guies sobre generació de leads B2B, segmentació per zona i sector, i informes d’IA per millorar la conversió.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
