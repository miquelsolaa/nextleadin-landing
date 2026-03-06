export const heroTexts: Record<
  'es' | 'ca' | 'en',
  {
    badge: string
    titlePrefix: string
    animatedWords: string[]
    titleSuffix: string
    description: string
    trust1: string
    trust3: string
    emailLabel: string
    emailPlaceholder: string
    primaryCta: string
    helper: string
  }
> = {
  es: {
    badge: '7 días gratis · Sin tarjeta',
    titlePrefix: 'Leads de ',
    animatedWords: ['restaurantes', 'gimnasios', 'clínicas', 'comercios', 'talleres'],
    titleSuffix: 'que LinkedIn no tiene',
    description:
      'Deja de perder 8 horas buscando a quién llamar. NextLeadIn te da leads locales cualificados con contexto IA para que cada llamada cuente. Nuestros usuarios cierran 3x más reuniones con la mitad del esfuerzo.',
    trust1: '7 días gratis para probarlo',
    trust3: 'ROI medio de 15x',
    emailLabel: 'Correo electrónico',
    emailPlaceholder: 'Introduce tu email de trabajo',
    primaryCta: 'Ver leads de mi zona',
    helper: 'Te enviamos leads de prueba de tu territorio en menos de 24h. Sin tarjeta, sin compromiso.',
  },
  ca: {
    badge: '7 dies gratis · Sense targeta',
    titlePrefix: 'Leads de ',
    animatedWords: ['restaurants', 'gimnasos', 'clíniques', 'comerços', 'tallers'],
    titleSuffix: 'que LinkedIn no té',
    description:
      'Deixa de perdre 8 hores buscant a qui trucar. NextLeadIn et dona leads locals qualificats amb context IA perquè cada trucada compti. Els nostres usuaris tanquen 3x més reunions amb la meitat de l\'esforç.',
    trust1: '7 dies gratis per provar-ho',
    trust3: 'ROI mitjà de 15x',
    emailLabel: 'Adreça electrònica',
    emailPlaceholder: 'Introdueix el teu email de feina',
    primaryCta: 'Veure leads de la meva zona',
    helper: 'T\'enviem leads de prova del teu territori en menys de 24h. Sense targeta, sense compromís.',
  },
  en: {
    badge: '7-day free trial · No card required',
    titlePrefix: 'Leads from ',
    animatedWords: ['restaurants', 'gyms', 'clinics', 'retail stores', 'workshops'],
    titleSuffix: "that LinkedIn doesn't have",
    description:
      'Stop wasting 8 hours finding who to call. NextLeadIn gives you qualified local leads with AI context so every call counts. Our users book 3x more meetings with half the effort.',
    trust1: '7-day free trial',
    trust3: 'Average ROI of 15x',
    emailLabel: 'Email address',
    emailPlaceholder: 'Enter your work email',
    primaryCta: 'See leads in my area',
    helper: 'We send you sample leads from your territory in under 24h. No card, no commitment.',
  },
}
