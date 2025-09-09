import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preguntes freqüents — NextLeadIn',
  description: 'Resol dubtes sobre generació de leads per zona i sector, informes amb IA, integracions i suport.',
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
