export interface PricingPlan {
  id: string
  name: {
    ca: string
    es: string
    en: string
  }
  price: number | null
  priceLabel?: {
    ca: string
    es: string
    en: string
  }
  period: {
    ca: string
    es: string
    en: string
  }
  description: {
    ca: string
    es: string
    en: string
  }
  features: {
    ca: string[]
    es: string[]
    en: string[]
  }
  buttonText: {
    ca: string
    es: string
    en: string
  }
  buttonHref: string
  billingNote?: {
    ca: string
    es: string
    en: string
  }
  trialNote?: {
    ca: string
    es: string
    en: string
  }
  checkoutPlanId?: string
  popular: boolean
  delay: number
  limits: {
    leads: number | string
    aiCredits: number | string
    users: number | string
    searches: number | string
  }
}

export interface ComparisonFeature {
  id: string
  name: {
    ca: string
    es: string
    en: string
  }
  description: {
    ca: string
    es: string
    en: string
  }
  values: Record<string, boolean | string>
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'localBusiness',
    name: {
      ca: 'Starter',
      es: 'Starter',
      en: 'Starter'
    },
    price: 79,
    period: {
      ca: 'mes',
      es: 'mes',
      en: 'month'
    },
    description: {
      ca: 'Ideal per comercials que volen tancar 2-3 clients nous al mes amb menys esforç.',
      es: 'Ideal para comerciales que quieren cerrar 2-3 clientes nuevos al mes con menos esfuerzo.',
      en: 'Ideal for sales reps who want to close 2-3 new clients per month with less effort.'
    },
    features: {
      ca: [
        '500 leads/mes de negocis locals',
        'Dades enriquides: rating, ressenyes, fotos, horaris',
        'Anàlisi de ressenyes amb IA (100 anàlisis/mes)',
        'Mapa visual interactiu',
        '5 campanyes actives',
        'Alertes de noves obertures',
        'Exportació avançada (CSV, Excel, KML)',
        'Suport per email'
      ],
      es: [
        '500 leads/mes de negocios locales',
        'Datos enriquecidos: valoración, reseñas, fotos, horarios',
        'Análisis de reseñas con IA (100 análisis/mes)',
        'Mapa visual interactivo',
        '5 campañas activas',
        'Alertas de nuevas aperturas',
        'Exportación avanzada (CSV, Excel, KML)',
        'Soporte por email'
      ],
      en: [
        '500 local business leads/month',
        'Enriched data: rating, reviews, photos, opening hours',
        'AI review analysis (100 analyses/month)',
        'Interactive visual map',
        '5 active campaigns',
        'New business alerts',
        'Advanced export (CSV, Excel, KML)',
        'Email support'
      ]
    },
    buttonText: {
      ca: 'Començar ara',
      es: 'Empezar ahora',
      en: 'Get started'
    },
    buttonHref: 'https://app.nextleadin.com/register',
    billingNote: {
      ca: '€63/mes facturat anualment',
      es: '€63/mes facturado anualmente',
      en: '€63/month when billed annually'
    },
    popular: true,
    delay: 200,
    limits: {
      leads: 500,
      aiCredits: '100',
      users: '1',
      searches: '5'
    }
  },
  {
    id: 'professional',
    name: {
      ca: 'Equip',
      es: 'Equipo',
      en: 'Team'
    },
    price: 199,
    period: {
      ca: 'mes',
      es: 'mes',
      en: 'month'
    },
    description: {
      ca: 'Per equips que volen triplicar reunions sense triplicar esforç. Fins a 10 membres.',
      es: 'Para equipos que quieren triplicar reuniones sin triplicar esfuerzo. Hasta 10 miembros.',
      en: 'For teams that want to triple meetings without tripling effort. Up to 10 members.'
    },
    features: {
      ca: [
        '2.000 leads/mes de negocis locals',
        'Tot del Local Business',
        'Anàlisi competitiva automàtica',
        'Scoring predictiu de potencial',
        'Monitorització de canvis (verificació mensual)',
        'Integracions CRM (HubSpot, Pipedrive)',
        'Campanyes il·limitades',
        'Equip fins a 10 membres',
        'Suport prioritari'
      ],
      es: [
        '2.000 leads/mes de negocios locales',
        'Todo de Local Business',
        'Análisis competitivo automático',
        'Scoring predictivo de potencial',
        'Monitorización de cambios (verificación mensual)',
        'Integraciones CRM (HubSpot, Pipedrive)',
        'Campañas ilimitadas',
        'Equipo hasta 10 miembros',
        'Soporte prioritario'
      ],
      en: [
        '2,000 local business leads/month',
        'Everything in Local Business',
        'Automatic competitive analysis',
        'Predictive potential scoring',
        'Change monitoring (monthly verification)',
        'CRM integrations (HubSpot, Pipedrive)',
        'Unlimited campaigns',
        'Team up to 10 members',
        'Priority support'
      ]
    },
    buttonText: {
      ca: 'Començar ara',
      es: 'Empezar ahora',
      en: 'Get started'
    },
    buttonHref: 'https://app.nextleadin.com/register',
    billingNote: {
      ca: '€159/mes facturat anualment',
      es: '€159/mes facturado anualmente',
      en: '€159/month when billed annually'
    },
    popular: false,
    delay: 300,
    limits: {
      leads: 2000,
      aiCredits: 'Il·limitats',
      users: '10',
      searches: 'Il·limitades'
    }
  },
  {
    id: 'enterprise',
    name: {
      ca: 'Escala',
      es: 'Escala',
      en: 'Scale'
    },
    price: null,
    priceLabel: {
      ca: 'Parlem',
      es: 'Hablemos',
      en: 'Let\'s talk'
    },
    period: {
      ca: 'mes',
      es: 'mes',
      en: 'month'
    },
    description: {
      ca: 'Per empreses que volen dominar el seu mercat sense ampliar plantilla comercial.',
      es: 'Para empresas que quieren dominar su mercado sin ampliar plantilla comercial.',
      en: 'For companies that want to dominate their market without expanding their sales team.'
    },
    features: {
      ca: [
        'Leads il·limitats de negocis locals',
        'Tot del Professional',
        'API pública (10k requests/hora)',
        'Anàlisi territorial avançada',
        'Predicció de tendències',
        'White-label (marca pròpia)',
        'Onboarding dedicat i account manager',
        'SLA 99,9%',
        'Suport 24/7'
      ],
      es: [
        'Leads ilimitados de negocios locales',
        'Todo de Professional',
        'API pública (10k requests/hora)',
        'Análisis territorial avanzado',
        'Predicción de tendencias',
        'White-label (marca propia)',
        'Onboarding dedicado y account manager',
        'SLA 99,9%',
        'Soporte 24/7'
      ],
      en: [
        'Unlimited local business leads',
        'Everything in Professional',
        'Public API (10k requests/hour)',
        'Advanced territory analysis',
        'Trend prediction',
        'White-label',
        'Dedicated onboarding and account manager',
        '99.9% SLA',
        '24/7 support'
      ]
    },
    buttonText: {
      ca: 'Contacta amb vendes',
      es: 'Contacta con ventas',
      en: 'Contact sales'
    },
    buttonHref: '/contact',
    popular: false,
    delay: 400,
    limits: {
      leads: '∞',
      aiCredits: '∞',
      users: '∞',
      searches: '∞'
    }
  }
]

export const comparisonFeatures: ComparisonFeature[] = [
  {
    id: 'leads-google-maps',
    name: {
      ca: 'Leads de negocis locals / mes',
      es: 'Leads de negocios locales / mes',
      en: 'Local business leads / month'
    },
    description: {
      ca: 'Volum de negocis locals que pots exportar.',
      es: 'Volumen de negocios locales que puedes exportar.',
      en: 'Volume of local businesses you can export.'
    },
    values: {
      localBusiness: '500',
      professional: '2.000',
      enterprise: '∞'
    }
  },
  {
    id: 'dades-enriquides',
    name: {
      ca: 'Dades enriquides',
      es: 'Datos enriquecidos',
      en: 'Enriched data'
    },
    description: {
      ca: 'Rating, ressenyes, fotos, horaris i nivell de preus.',
      es: 'Valoración, reseñas, fotos, horarios y nivel de precios.',
      en: 'Rating, reviews, photos, opening hours and price level.'
    },
    values: {
      localBusiness: true,
      professional: true,
      enterprise: true
    }
  },
  {
    id: 'analisi-ressenyes-ia',
    name: {
      ca: 'Anàlisi de ressenyes amb IA',
      es: 'Análisis de reseñas con IA',
      en: 'AI review analysis'
    },
    description: {
      ca: 'Sentiment, keywords, problemes i oportunitats detectats per IA.',
      es: 'Sentimiento, keywords, problemas y oportunidades detectados por IA.',
      en: 'Sentiment, keywords, problems and opportunities detected by AI.'
    },
    values: {
      localBusiness: true,
      professional: true,
      enterprise: true
    }
  },
  {
    id: 'mapa-visual',
    name: {
      ca: 'Mapa visual interactiu',
      es: 'Mapa visual interactivo',
      en: 'Interactive visual map'
    },
    description: {
      ca: 'Visualitza leads al mapa, heat map i planificació de rutes.',
      es: 'Visualiza leads en el mapa, heat map y planificación de rutas.',
      en: 'View leads on map, heat map and route planning.'
    },
    values: {
      localBusiness: true,
      professional: true,
      enterprise: true
    }
  },
  {
    id: 'alertes-noves-obertures',
    name: {
      ca: 'Alertes noves obertures',
      es: 'Alertas nuevas aperturas',
      en: 'New business alerts'
    },
    description: {
      ca: 'Detecció de negocis nous per zona i categoria.',
      es: 'Detección de negocios nuevos por zona y categoría.',
      en: 'Detection of new businesses by area and category.'
    },
    values: {
      localBusiness: true,
      professional: true,
      enterprise: true
    }
  },
  {
    id: 'analisi-competitiva',
    name: {
      ca: 'Anàlisi competitiva',
      es: 'Análisis competitivo',
      en: 'Competitive analysis'
    },
    description: {
      ca: 'Benchmark de rating, ressenyes i preus vs competència local.',
      es: 'Benchmark de valoración, reseñas y precios vs competencia local.',
      en: 'Benchmark of rating, reviews and prices vs local competition.'
    },
    values: {
      localBusiness: false,
      professional: true,
      enterprise: true
    }
  },
  {
    id: 'scoring-predictiu',
    name: {
      ca: 'Scoring predictiu de potencial',
      es: 'Scoring predictivo de potencial',
      en: 'Predictive potential scoring'
    },
    description: {
      ca: 'Priorització de leads segons mida, creixement i capacitat econòmica.',
      es: 'Priorización de leads según tamaño, crecimiento y capacidad económica.',
      en: 'Lead prioritization by size, growth and economic capacity.'
    },
    values: {
      localBusiness: false,
      professional: true,
      enterprise: true
    }
  },
  {
    id: 'integracions-crm',
    name: {
      ca: 'Integracions CRM',
      es: 'Integraciones CRM',
      en: 'CRM integrations'
    },
    description: {
      ca: 'HubSpot, Pipedrive, Salesforce i exportació avançada.',
      es: 'HubSpot, Pipedrive, Salesforce y exportación avanzada.',
      en: 'HubSpot, Pipedrive, Salesforce and advanced export.'
    },
    values: {
      localBusiness: 'CSV, Excel, KML',
      professional: 'CRM + CSV, Excel, KML',
      enterprise: 'CRM + API'
    }
  },
  {
    id: 'api',
    name: {
      ca: 'API pública',
      es: 'API pública',
      en: 'Public API'
    },
    description: {
      ca: 'Accés programàtic per integrar amb les teves eines.',
      es: 'Acceso programático para integrar con tus herramientas.',
      en: 'Programmatic access to integrate with your tools.'
    },
    values: {
      localBusiness: false,
      professional: false,
      enterprise: true
    }
  },
  {
    id: 'suport',
    name: {
      ca: 'Suport',
      es: 'Soporte',
      en: 'Support'
    },
    description: {
      ca: 'Canals i nivell d\'assistència.',
      es: 'Canales y nivel de asistencia.',
      en: 'Channels and level of assistance.'
    },
    values: {
      localBusiness: 'Email',
      professional: 'Prioritari',
      enterprise: '24/7 + Account manager'
    }
  }
]

export const faqData = {
  ca: [
    {
      question: 'Quant temps triga a veure resultats?',
      answer: 'La majoria d\'usuaris generen la seva primera llista de leads en 10 minuts i fan les primeres trucades el mateix dia. El setup és immediat.'
    },
    {
      question: 'Quantes reunions puc esperar?',
      answer: 'Depèn del teu sector i esforç, però els nostres usuaris reporten una mitjana de 8+ reunions/mes amb el pla Starter. Amb context IA, la taxa de contacte sol triplicar-se.'
    },
    {
      question: 'Com es compara amb buscar leads manualment?',
      answer: 'Buscar 100 leads a Google Maps porta 6-8 hores. Amb NextLeadIn, 10 minuts. A més, cada lead inclou context IA per preparar trucades en segons.'
    },
    {
      question: 'Quina diferència hi ha entre facturació anual i mensual?',
      answer: 'La mensual es cobra cada mes. L\'anual es cobra en un sol pagament i inclou descompte (Starter €63/mes, Equip €159/mes).'
    },
    {
      question: 'D\'on provenen les dades dels leads?',
      answer: 'Disposem d\'una àmplia base de dades de negocis locals amb ubicació verificada, horaris, ressenyes i dades actualitzades constantment. Ideal per negocis tradicionals que no trobaràs a LinkedIn.'
    },
    {
      question: 'Puc canviar o cancel·lar el pla quan vulgui?',
      answer: 'Sí, pots canviar de pla o cancel·lar en qualsevol moment. Els canvis s\'apliquen al següent període.'
    }
  ],
  es: [
    {
      question: '¿Cuánto tiempo tarda en ver resultados?',
      answer: 'La mayoría de usuarios generan su primera lista de leads en 10 minutos y hacen las primeras llamadas el mismo día. El setup es inmediato.'
    },
    {
      question: '¿Cuántas reuniones puedo esperar?',
      answer: 'Depende de tu sector y esfuerzo, pero nuestros usuarios reportan una media de 8+ reuniones/mes con el plan Starter. Con contexto IA, la tasa de contacto suele triplicarse.'
    },
    {
      question: '¿Cómo se compara con buscar leads manualmente?',
      answer: 'Buscar 100 leads en Google Maps lleva 6-8 horas. Con NextLeadIn, 10 minutos. Además, cada lead incluye contexto IA para preparar llamadas en segundos.'
    },
    {
      question: '¿Cuál es la diferencia entre facturación anual y mensual?',
      answer: 'La mensual se cobra cada mes. La anual se cobra en un solo pago e incluye descuento (Starter €63/mes, Equipo €159/mes).'
    },
    {
      question: '¿De dónde provienen los datos de los leads?',
      answer: 'Disponemos de una amplia base de datos de negocios locales con ubicación verificada, horarios, reseñas y datos actualizados constantemente. Ideal para negocios tradicionales que no encontrarás en LinkedIn.'
    },
    {
      question: '¿Puedo cambiar o cancelar el plan cuando quiera?',
      answer: 'Sí, puedes cambiar de plan o cancelar en cualquier momento. Los cambios se aplican al siguiente período.'
    }
  ],
  en: [
    {
      question: 'How long does it take to see results?',
      answer: 'Most users generate their first lead list in 10 minutes and make their first calls the same day. Setup is immediate.'
    },
    {
      question: 'How many meetings can I expect?',
      answer: 'It depends on your sector and effort, but our users report an average of 8+ meetings/month with the Starter plan. With AI context, contact rates typically triple.'
    },
    {
      question: 'How does it compare to searching for leads manually?',
      answer: 'Searching for 100 leads on Google Maps takes 6-8 hours. With NextLeadIn, 10 minutes. Plus, each lead includes AI context to prepare calls in seconds.'
    },
    {
      question: 'What is the difference between annual and monthly billing?',
      answer: 'Monthly is charged every month. Annual is charged in one payment and includes a discount (Starter €63/month, Team €159/month).'
    },
    {
      question: 'Where do lead data come from?',
      answer: 'We have a wide database of local businesses with verified location, opening hours, reviews and data updated constantly. Ideal for traditional businesses you won\'t find on LinkedIn.'
    },
    {
      question: 'Can I change or cancel anytime?',
      answer: 'Yes, you can change plans or cancel anytime. Changes apply to the next billing period.'
    }
  ]
}
