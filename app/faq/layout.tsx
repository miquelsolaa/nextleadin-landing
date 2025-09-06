import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'FAQs, quick fixes, and official info on every feature. Can\'t find your question here, try our support forums.',
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
