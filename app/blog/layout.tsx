import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
