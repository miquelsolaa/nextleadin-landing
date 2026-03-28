/**
 * Integracions rellevants per a NextLeadIn: CRMs i eines de cold calling/emailing.
 * Centralitzat per mantenir coherència entre home i altres pàgines que les mostrin.
 */
export interface Integration {
  name: string
  logo: string
  category: 'crm' | 'cold-email' | 'automation'
}

export const integrations: Integration[] = [
  // CRMs
  { name: 'HubSpot', logo: '/images/integrations/integrations-4.png', category: 'crm' },
  { name: 'Salesforce', logo: '/images/integrations/integrations-3.png', category: 'crm' },
  // Automació / connector
  { name: 'Zapier', logo: '/images/integrations/integrations-7.png', category: 'automation' },
  // Cold email
  { name: 'Mailchimp', logo: '/images/integrations/integrations-5.png', category: 'cold-email' },
]
