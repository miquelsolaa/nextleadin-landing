import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preus - Sierra CRM',
  description: 'Descobreix els nostres plans de preus transparents i competitius. Des de plans personals fins a solucions empresarials, tenim el pla perfecte per al teu negoci.',
  keywords: [
    'preus CRM',
    'plans CRM',
    'cost CRM',
    'tarifes CRM',
    'preus Sierra CRM',
    'plans de subscripció'
  ],
  openGraph: {
    title: 'Preus - Sierra CRM',
    description: 'Descobreix els nostres plans de preus transparents i competitius per a tots els tipus de negocis.',
    type: 'website',
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
