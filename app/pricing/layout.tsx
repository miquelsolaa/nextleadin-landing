import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preus — NextLeadIn',
  description: 'Plans flexibles per generar leads per zona i sector amb informes d’IA. Comença petit i creix fins on vulguis.',
  keywords: [
    'preus generació de leads',
    'plans NextLeadIn',
    'IA per vendes',
    'tarifes leads',
    'subscripció B2B'
  ],
  openGraph: {
    title: 'Preus — NextLeadIn',
    description: 'Compara plans per volum de leads, crèdits d’IA i integracions.',
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
