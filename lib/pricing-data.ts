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
      ca: 'Local Business',
      es: 'Local Business',
      en: 'Local Business'
    },
    price: 79,
    period: {
      ca: 'mes',
      es: 'mes',
      en: 'month'
    },
    description: {
      ca: 'Per freelancers i comercials: dades enriquides, mapa i anàlisi de ressenyes amb IA.',
      es: 'Para freelancers y comerciales: datos enriquecidos, mapa y análisis de reseñas con IA.',
      en: 'For freelancers and sales reps: enriched data, map and AI review analysis.'
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
        '500 leads/mes de negocis locals',
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
    buttonHref: '/get-started',
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
      ca: 'Professional',
      es: 'Professional',
      en: 'Professional'
    },
    price: 199,
    period: {
      ca: 'mes',
      es: 'mes',
      en: 'month'
    },
    description: {
      ca: 'Per PYMES i agències: anàlisi competitiva, scoring predictiu i integracions CRM.',
      es: 'Para PYMES y agencias: análisis competitivo, scoring predictivo e integraciones CRM.',
      en: 'For SMBs and agencies: competitive analysis, predictive scoring and CRM integrations.'
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
        '2.000 leads/mes de negocis locals',
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
    buttonHref: '/get-started',
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
      ca: 'Enterprise',
      es: 'Enterprise',
      en: 'Enterprise'
    },
    price: null,
    priceLabel: {
      ca: 'Contacta amb vendes',
      es: 'Contacta con ventas',
      en: 'Contact sales'
    },
    period: {
      ca: 'mes',
      es: 'mes',
      en: 'month'
    },
    description: {
      ca: 'Per empreses grans i franquícies: API, white-label i account manager dedicat.',
      es: 'Para empresas grandes y franquicias: API, white-label y account manager dedicado.',
      en: 'For large companies and franchises: API, white-label and dedicated account manager.'
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
      localBusiness: 500,
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
      question: 'Quina diferència hi ha entre facturació anual i mensual?',
      answer: 'La mensual es cobra cada mes. L\'anual es cobra en un sol pagament i inclou descompte (Local Business €63/mes, Professional €159/mes).'
    },
    {
      question: 'Els preus inclouen l\'IVA?',
      answer: 'No. Per a clients de la UE, s\'aplica l\'IVA segons el país si no es facilita un NIF-IVA vàlid.'
    },
    {
      question: 'D\'on provenen les dades dels leads?',
      answer: 'Disposem d\'una amplia base de dades de negocis locals amb ubicació verificada, horaris, ressenyes i dades actualitzades constantment. Ideal per negocis tradicionals que no trobaràs a LinkedIn.'
    },
    {
      question: 'Quins mètodes de pagament accepteu?',
      answer: 'Targetes de crèdit/dèbit i PayPal, segons el país.'
    },
    {
      question: 'Puc canviar o cancel·lar el pla quan vulgui?',
      answer: 'Sí, pots canviar de pla o cancel·lar en qualsevol moment. Els canvis s\'apliquen al següent període.'
    }
  ],
  es: [
    {
      question: '¿Cuál es la diferencia entre facturación anual y mensual?',
      answer: 'La mensual se cobra cada mes. La anual se cobra en un solo pago e incluye descuento (Local Business €63/mes, Professional €159/mes).'
    },
    {
      question: '¿Los precios incluyen el IVA?',
      answer: 'No. Para clientes de la UE, se aplica IVA según el país si no se facilita un NIF-IVA válido.'
    },
    {
      question: '¿De dónde provienen los datos de los leads?',
      answer: 'Disponemos de una amplia base de datos de negocios locales con ubicación verificada, horarios, reseñas y datos actualizados constantemente. Ideal para negocios tradicionales que no encontrarás en LinkedIn.'
    },
    {
      question: '¿Qué métodos de pago aceptáis?',
      answer: 'Tarjetas de crédito/débito y PayPal, según el país.'
    },
    {
      question: '¿Puedo cambiar o cancelar el plan cuando quiera?',
      answer: 'Sí, puedes cambiar de plan o cancelar en cualquier momento. Los cambios se aplican al siguiente período.'
    }
  ],
  en: [
    {
      question: 'What is the difference between annual and monthly billing?',
      answer: 'Monthly is charged every month. Annual is charged in one payment and includes a discount (Local Business €63/month, Professional €159/month).'
    },
    {
      question: 'Do prices include VAT?',
      answer: 'No. For EU customers, VAT is applied based on country unless a valid VAT ID is provided.'
    },
    {
      question: 'Where do lead data come from?',
      answer: 'We have a wide database of local businesses with verified location, opening hours, reviews and data updated constantly. Ideal for traditional businesses you won\'t find on LinkedIn.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'Credit/debit cards and PayPal, depending on country.'
    },
    {
      question: 'Can I change or cancel anytime?',
      answer: 'Yes, you can change plans or cancel anytime. Changes apply to the next billing period.'
    }
  ]
}
