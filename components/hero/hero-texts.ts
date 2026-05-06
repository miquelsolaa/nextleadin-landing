export const heroTexts: Record<
  'es' | 'ca' | 'en',
  {
    badge: string
    titlePrefix: string
    animatedWords: string[]
    titleSuffix: string
    tagline: string
    description: string
    exposureNote: string
    trust1: string
    trust3: string
    emailLabel: string
    emailPlaceholder: string
    primaryCta: string
    helper: string
    formSuccess: string
    formError: string
  }
> = {
  es: {
    badge: '7 días gratis · Sin tarjeta',
    titlePrefix: 'Leads de ',
    animatedWords: ['restaurantes', 'gimnasios', 'clínicas', 'comercios', 'talleres'],
    titleSuffix: 'que LinkedIn no tiene',
    tagline: 'Más reuniones comerciales, menos horas buscando a quién llamar.',
    description:
      'Listas locales con teléfono y contexto para cada llamada. Prueba gratis: te enviamos leads de tu zona en menos de 24h.',
    exposureNote:
      'Los negocios que aparecen suelen ganar visibilidad donde sus clientes buscan (Google, mapas, búsquedas con IA). Contactar puede ser una oportunidad para ellos, no solo un nombre en una lista.',
    trust1: '7 días gratis para probarlo',
    trust3: 'ROI medio de 15x',
    emailLabel: 'Correo electrónico',
    emailPlaceholder: 'Introduce tu email de trabajo',
    primaryCta: 'Ver leads de mi zona',
    helper: 'Te enviamos leads de prueba de tu territorio en menos de 24h. Sin tarjeta, sin compromiso.',
    formSuccess: '¡Listo! Revisa tu correo en unos minutos.',
    formError: 'No se pudo enviar. Inténtalo de nuevo o usa el formulario de contacto.',
  },
  ca: {
    badge: '7 dies gratis · Sense targeta',
    titlePrefix: 'Leads de ',
    animatedWords: ['restaurants', 'gimnasos', 'clíniques', 'comerços', 'tallers'],
    titleSuffix: 'que LinkedIn no té',
    tagline: 'Més reunions comercials, menys hores buscant a qui trucar.',
    description:
      'Llistes locals amb telèfon i context per a cada trucada. Prova gratis: t’enviem leads de la teva zona en menys de 24h.',
    exposureNote:
      'Els negocis que surten solen guanyar visibilitat on els clients cerquen (Google, mapes, cerques amb IA). Contactar pot ser una oportunitat per a ells, no només un nom a una llista.',
    trust1: '7 dies gratis per provar-ho',
    trust3: 'ROI mitjà de 15x',
    emailLabel: 'Adreça electrònica',
    emailPlaceholder: 'Introdueix el teu email de feina',
    primaryCta: 'Veure leads de la meva zona',
    helper: 'T’enviem leads de prova del teu territori en menys de 24h. Sense targeta, sense compromís.',
    formSuccess: 'Fet! Revisa el teu correu en uns minuts.',
    formError: 'No s’ha pogut enviar. Torna-ho a provar o usa el formulari de contacte.',
  },
  en: {
    badge: '7-day free trial · No card required',
    titlePrefix: 'Leads from ',
    animatedWords: ['restaurants', 'gyms', 'clinics', 'retail stores', 'workshops'],
    titleSuffix: "that LinkedIn doesn't have",
    tagline: 'More sales meetings, fewer hours spent figuring out who to call.',
    description:
      'Local lists with phone numbers and call-ready context. Free trial: we send sample leads from your area within 24h.',
    exposureNote:
      'The businesses you find are often visible where buyers search (Google, maps, AI-assisted search). Your outreach can be an opportunity for them—not just a line in a spreadsheet.',
    trust1: '7-day free trial',
    trust3: 'Average ROI of 15x',
    emailLabel: 'Email address',
    emailPlaceholder: 'Enter your work email',
    primaryCta: 'See leads in my area',
    helper: 'We send you sample leads from your territory in under 24h. No card, no commitment.',
    formSuccess: 'You’re set—check your inbox in a few minutes.',
    formError: 'Something went wrong. Try again or use the contact form.',
  },
}
