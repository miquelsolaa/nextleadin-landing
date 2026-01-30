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
    id: 'growth',
    name: {
      ca: 'Growth',
      es: 'Growth',
      en: 'Growth'
    },
    price: 59,
    period: {
      ca: 'seient/mes',
      es: 'puesto/mes',
      en: 'seat/month'
    },
    description: {
      ca: 'Ara amb IA. Automatitza correus i seguiments per tancar més ràpid.',
      es: 'Ahora con IA. Automatiza correos y seguimientos para cerrar más rápido.',
      en: 'Now with AI. Automate emails and follow-ups to close faster.'
    },
    features: {
      ca: [
        'Gestió de prospectes, calendaris i embuts',
        'Informes amb IA',
        'Entrada de vendes en temps real',
        'Sincronització completa de correu amb seguiment',
        'Automatitzacions i seqüències de nutrició',
        'Subscripcions i informes de previsió',
        'Planificador de reunions i cronograma de contactes',
        'Assistència amb xat en viu'
      ],
      es: [
        'Gestión de prospectos, calendarios y embudos',
        'Informes con IA',
        'Entrada de ventas en tiempo real',
        'Sincronización completa de correo con seguimiento',
        'Automatizaciones y secuencias de nutrición',
        'Suscripciones e informes de previsión',
        'Planificador de reuniones y cronograma de contactos',
        'Asistencia con chat en vivo'
      ],
      en: [
        'Lead management, calendars and pipelines',
        'AI insights',
        'Real-time sales updates',
        'Full email sync with tracking',
        'Automations and nurturing sequences',
        'Subscriptions and forecasting reports',
        'Meeting scheduler and contact timeline',
        'Live chat support'
      ]
    },
    buttonText: {
      ca: 'Prova-ho gratis',
      es: 'Pruébalo gratis',
      en: 'Try free'
    },
    buttonHref: '/get-started',
    billingNote: {
      ca: 'Facturat anualment · Estalvia fins al 42 %',
      es: 'Facturado anualmente · Ahorra hasta un 42 %',
      en: 'Billed annually · Save up to 42%'
    },
    trialNote: {
      ca: 'Prova gratuïta de 14 dies. Sense targeta.',
      es: 'Prueba gratuita de 14 días. Sin tarjeta.',
      en: '14-day free trial. No card required.'
    },
    popular: false,
    delay: 200,
    limits: {
      leads: '-',
      aiCredits: '-',
      users: '-',
      searches: '-'
    }
  },
  {
    id: 'premium',
    name: {
      ca: 'Premium',
      es: 'Premium',
      en: 'Premium'
    },
    price: 79,
    period: {
      ca: 'seient/mes',
      es: 'puesto/mes',
      en: 'seat/month'
    },
    description: {
      ca: 'Ara amb IA. Impulsa el cicle complet de vendes amb eines avançades.',
      es: 'Ahora con IA. Impulsa el ciclo completo de ventas con herramientas avanzadas.',
      en: 'Now with AI. Power the full sales cycle with advanced tools.'
    },
    features: {
      ca: [
        'Tot el Growth',
        'Generació i transferència de leads',
        'Puntuació i enriquiment de dades d\'empresa',
        'Eines de correu múltiple amb IA',
        'Personalització avançada per equips, informes i camps'
      ],
      es: [
        'Todo lo de Growth',
        'Generación y transferencia de leads',
        'Puntuación y enriquecimiento de datos de empresa',
        'Herramientas de correo múltiple con IA',
        'Personalización avanzada para equipos, informes y campos'
      ],
      en: [
        'Everything in Growth',
        'Lead generation and routing',
        'Company scoring and enrichment',
        'Multi-email tools with AI',
        'Advanced team, report and field customization'
      ]
    },
    buttonText: {
      ca: 'Prova-ho gratis',
      es: 'Pruébalo gratis',
      en: 'Try free'
    },
    buttonHref: '/get-started',
    billingNote: {
      ca: 'Facturat anualment · Estalvia fins al 42 %',
      es: 'Facturado anualmente · Ahorra hasta un 42 %',
      en: 'Billed annually · Save up to 42%'
    },
    trialNote: {
      ca: 'Prova gratuïta de 14 dies. Sense targeta.',
      es: 'Prueba gratuita de 14 días. Sin tarjeta.',
      en: '14-day free trial. No card required.'
    },
    popular: true,
    delay: 300,
    limits: {
      leads: '-',
      aiCredits: '-',
      users: '-',
      searches: '-'
    }
  },
  {
    id: 'ultimate',
    name: {
      ca: 'Ultimate',
      es: 'Ultimate',
      en: 'Ultimate'
    },
    price: null,
    priceLabel: {
      ca: 'Contacta amb vendes',
      es: 'Contacta con ventas',
      en: 'Contact with sales'
    },
    period: {
      ca: 'seient/mes',
      es: 'puesto/mes',
      en: 'seat/month'
    },
    description: {
      ca: 'Ara amb IA. Optimitza el rendiment amb el conjunt complet de capacitats.',
      es: 'Ahora con IA. Optimiza el rendimiento con el conjunto completo de capacidades.',
      en: 'Now with AI. Optimize performance with a complete feature set.'
    },
    features: {
      ca: [
        'Tot el Premium',
        'Seguretat reforçada amb regles i alertes',
        'Enriquiment de dades de correu i telèfon',
        'Entorn de prova Sandbox',
        'Suport telefònic ampliat',
        'Descomptes per associació'
      ],
      es: [
        'Todo lo de Premium',
        'Seguridad reforzada con reglas y alertas',
        'Enriquecimiento de datos de correo y teléfono',
        'Entorno de prueba Sandbox',
        'Soporte telefónico ampliado',
        'Descuentos por asociación'
      ],
      en: [
        'Everything in Premium',
        'Enhanced security with rules and alerts',
        'Email and phone data enrichment',
        'Sandbox test environment',
        'Extended phone support',
        'Partner discounts'
      ]
    },
    buttonText: {
      ca: 'Contacta amb vendes',
      es: 'Contacta con ventas',
      en: 'Contact with sales'
    },
    buttonHref: '/contact',
    popular: false,
    delay: 400,
    limits: {
      leads: '-',
      aiCredits: '-',
      users: '-',
      searches: '-'
    }
  }
]

export const comparisonFeatures: ComparisonFeature[] = [
  {
    id: 'lead-management',
    name: {
      ca: 'Gestió de prospectes',
      es: 'Gestión de prospectos',
      en: 'Lead management'
    },
    description: {
      ca: 'Organització de calendari i embuts de vendes.',
      es: 'Organización de calendario y embudos de ventas.',
      en: 'Calendars and sales pipeline organization.'
    },
    values: {
      growth: true,
      premium: true,
      ultimate: true
    }
  },
  {
    id: 'ai-insights',
    name: {
      ca: 'Informes amb IA',
      es: 'Informes con IA',
      en: 'AI insights'
    },
    description: {
      ca: 'Nivell d\'informes i resums amb IA.',
      es: 'Nivel de informes y resúmenes con IA.',
      en: 'Level of AI insights and summaries.'
    },
    values: {
      growth: 'Bàsics',
      premium: 'Avançats',
      ultimate: 'Avançats'
    }
  },
  {
    id: 'email-sync',
    name: {
      ca: 'Sincronització de correu',
      es: 'Sincronización de correo',
      en: 'Email sync'
    },
    description: {
      ca: 'Sincronització completa amb seguiment d\'emails.',
      es: 'Sincronización completa con seguimiento de emails.',
      en: 'Full sync with email tracking.'
    },
    values: {
      growth: true,
      premium: true,
      ultimate: true
    }
  },
  {
    id: 'automations',
    name: {
      ca: 'Automatitzacions',
      es: 'Automatizaciones',
      en: 'Automations'
    },
    description: {
      ca: 'Seqüències de nutrició i fluxos automatitzats.',
      es: 'Secuencias de nutrición y flujos automatizados.',
      en: 'Nurturing sequences and automated workflows.'
    },
    values: {
      growth: true,
      premium: true,
      ultimate: true
    }
  },
  {
    id: 'scheduler',
    name: {
      ca: 'Planificador de reunions',
      es: 'Planificador de reuniones',
      en: 'Meeting scheduler'
    },
    description: {
      ca: 'Disponibilitats, calendaris i línia temporal.',
      es: 'Disponibilidad, calendarios y línea temporal.',
      en: 'Availability, calendars and timeline.'
    },
    values: {
      growth: true,
      premium: true,
      ultimate: true
    }
  },
  {
    id: 'lead-routing',
    name: {
      ca: 'Generació i transferència de leads',
      es: 'Generación y transferencia de leads',
      en: 'Lead generation and routing'
    },
    description: {
      ca: 'Captura i assignació de nous prospects.',
      es: 'Captura y asignación de nuevos prospectos.',
      en: 'Capture and assign new prospects.'
    },
    values: {
      growth: false,
      premium: true,
      ultimate: true
    }
  },
  {
    id: 'security',
    name: {
      ca: 'Seguretat avançada',
      es: 'Seguridad avanzada',
      en: 'Advanced security'
    },
    description: {
      ca: 'Regles, alertes i controls de compte.',
      es: 'Reglas, alertas y controles de cuenta.',
      en: 'Rules, alerts and account controls.'
    },
    values: {
      growth: false,
      premium: false,
      ultimate: true
    }
  },
  {
    id: 'sandbox',
    name: {
      ca: 'Entorn Sandbox',
      es: 'Entorno Sandbox',
      en: 'Sandbox environment'
    },
    description: {
      ca: 'Espai de prova abans de publicar canvis.',
      es: 'Espacio de prueba antes de publicar cambios.',
      en: 'Test environment before rolling out changes.'
    },
    values: {
      growth: false,
      premium: false,
      ultimate: true
    }
  },
  {
    id: 'support',
    name: {
      ca: 'Suport',
      es: 'Soporte',
      en: 'Support'
    },
    description: {
      ca: 'Canals i nivell d\'assistència.',
      es: 'Canales y nivel de asistencia.',
      en: 'Support channels and level.'
    },
    values: {
      growth: 'Email + xat',
      premium: 'Xat en viu',
      ultimate: 'Telèfon ampliat'
    }
  },
  {
    id: 'integrations',
    name: {
      ca: 'Integracions',
      es: 'Integraciones',
      en: 'Integrations'
    },
    description: {
      ca: 'Aplicacions disponibles per connectar fluxos.',
      es: 'Aplicaciones disponibles para conectar flujos.',
      en: 'Apps available to connect workflows.'
    },
    values: {
      growth: '500+',
      premium: '500+',
      ultimate: '500+'
    }
  }
]

export const faqData = {
  ca: [
    {
      question: 'Què inclou la prova gratuïta?',
      answer: 'Accés complet durant 14 dies i sense targeta. Pots convidar el teu equip i provar totes les funcions del pla.'
    },
    {
      question: 'Quina diferència hi ha entre facturació anual i mensual?',
      answer: 'La mensual es cobra cada mes. L\'anual es cobra en un sol pagament i inclou descompte.'
    },
    {
      question: 'Els preus inclouen l\'IVA?',
      answer: 'No. Per a clients de la UE, s\'aplica l\'IVA segons el país si no es facilita un NIF-IVA vàlid.'
    },
    {
      question: 'Puc afegir complements al meu pla?',
      answer: 'Sí, pots afegir LeadBooster, Projects, Campaigns, Web Visitors o Smart Docs a qualsevol pla.'
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
      question: '¿Qué incluye la prueba gratuita?',
      answer: 'Acceso completo durante 14 días y sin tarjeta. Puedes invitar a tu equipo y probar todas las funciones del plan.'
    },
    {
      question: '¿Cuál es la diferencia entre facturación anual y mensual?',
      answer: 'La mensual se cobra cada mes. La anual se cobra en un solo pago e incluye descuento.'
    },
    {
      question: '¿Los precios incluyen el IVA?',
      answer: 'No. Para clientes de la UE, se aplica IVA según el país si no se facilita un NIF-IVA válido.'
    },
    {
      question: '¿Puedo añadir complementos a mi plan?',
      answer: 'Sí, puedes añadir LeadBooster, Projects, Campaigns, Web Visitors o Smart Docs a cualquier plan.'
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
      question: 'What does the free trial include?',
      answer: 'Full access for 14 days with no card required. Invite your team and try all plan features.'
    },
    {
      question: 'What is the difference between annual and monthly billing?',
      answer: 'Monthly is charged every month. Annual is charged in one payment and includes a discount.'
    },
    {
      question: 'Do prices include VAT?',
      answer: 'No. For EU customers, VAT is applied based on country unless a valid VAT ID is provided.'
    },
    {
      question: 'Can I add add-ons to my plan?',
      answer: 'Yes, you can add LeadBooster, Projects, Campaigns, Web Visitors or Smart Docs to any plan.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'Credit/debit cards and PayPal, depending on your country.'
    },
    {
      question: 'Can I change or cancel anytime?',
      answer: 'Yes, you can change plans or cancel anytime. Changes apply to the next billing period.'
    }
  ]
}
