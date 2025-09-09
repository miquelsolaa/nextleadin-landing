import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacte — Parla amb vendes',
  description: 'Parla amb el nostre equip per veure com NextLeadIn troba leads per tipus de negoci, ubicació i paraules clau, amb informes d’IA per preparar trucades.',
  openGraph: {
    title: 'Contacte — NextLeadIn',
    description: 'Programa una demo o sol·licita informació sobre preus i integracions.',
    type: 'website',
    url: 'https://nextleadin.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


