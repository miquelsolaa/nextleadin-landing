export interface AuthorInfo {
  name: string
  image?: string
  description: { ca: string; es: string; en: string }
  jobTitle?: string
}

/**
 * Normalitza el nom de l'autor per fer match (lowercase, trim, sense accents)
 */
function normalizeAuthorKey(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
}

/**
 * Registre centralitzat d'autors del blog.
 * Clau: nom normalitzat. Variants amb aliases al map.
 */
const AUTHORS_BY_KEY: Map<string, AuthorInfo> = new Map()

const nextLeadInTeam: AuthorInfo = {
  name: 'NextLeadIn Team',
  description: {
    ca: 'Expert en generació de leads i vendes B2B. Comparteixo coneixements i estratègies per ajudar empreses a accelerar el seu creixement.',
    es: 'Experto en generación de leads y ventas B2B. Comparto conocimientos y estrategias para ayudar empresas a acelerar su crecimiento.',
    en: 'Expert in lead generation and B2B sales. I share knowledge and strategies to help companies accelerate their growth.',
  },
  jobTitle: 'Content Creator',
}

const lauraSanchez: AuthorInfo = {
  name: 'Laura Sánchez',
  image: '/images/team/laura.webp',
  description: {
    ca: 'Especialista en prospecció B2B i generació de leads locals. Comparteixo estratègies reals per ajudar equips comercials a trobar clients on altres no miren.',
    es: 'Especialista en prospección B2B y generación de leads locales. Comparto estrategias reales para ayudar a equipos comerciales a encontrar clientes donde otros no miran.',
    en: 'Specialist in B2B prospecting and local lead generation. I share real strategies to help sales teams find customers where others don\'t look.',
  },
  jobTitle: 'B2B Prospecting Specialist',
}

;[
  ['nextleadin team', nextLeadInTeam],
  ['equip de nextleadin', nextLeadInTeam],
  ['equipo de nextleadin', nextLeadInTeam],
  ['equip nextleadin', nextLeadInTeam],
  ['laura sánchez', lauraSanchez],
  ['laura sanchez', lauraSanchez],
  ['laura sanchéz', lauraSanchez],
].forEach(([key, info]) => AUTHORS_BY_KEY.set(key as string, info as AuthorInfo))

export type AuthorLocale = 'ca' | 'es' | 'en'

/**
 * Obté les dades de l'autor pel nom. Retorna null si no hi ha registre.
 */
export function getAuthorInfo(
  authorName: string | undefined,
  locale: AuthorLocale = 'ca'
): AuthorInfo | null {
  if (!authorName || typeof authorName !== 'string') return null
  const key = normalizeAuthorKey(authorName)
  const info = AUTHORS_BY_KEY.get(key)
  if (!info) return null
  return info
}
