export interface PricingPlan {
  id: string
  name: {
    ca: string
    es: string
    en: string
  }
  price: number
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
  start: boolean | string
  pro: boolean | string
  elite: boolean | string
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'start',
    name: {
      ca: 'Inici',
      es: 'Inicio',
      en: 'Start'
    },
    price: 19,
    period: {
      ca: 'mes',
      es: 'mes',
      en: 'month'
    },
    description: {
      ca: 'Perfecte per a empreses que comencen amb la generació de leads',
      es: 'Perfecto para empresas que comienzan con la generación de leads',
      en: 'Perfect for businesses starting with lead generation'
    },
    features: {
      ca: [
        'Fins a 500 leads únics al mes',
        '500 crèdits d\'enriquiment amb IA',
        'Cerca bàsica amb keywords',
        'Filtres per ubicació i sector',
        'Exportació CSV',
        'Suport per email',
        'Dashboard bàsic',
        'Fins a 3 usuaris',
        'Actualització mensual de dades'
      ],
      es: [
        'Hasta 500 leads únicos al mes',
        '500 créditos de enriquecimiento con IA',
        'Búsqueda básica con palabras clave',
        'Filtros por ubicación y sector',
        'Exportación CSV',
        'Soporte por email',
        'Dashboard básico',
        'Hasta 3 usuarios',
        'Actualización mensual de datos'
      ],
      en: [
        'Up to 500 unique leads per month',
        '500 AI enrichment credits',
        'Basic keyword search',
        'Location and sector filters',
        'CSV export',
        'Email support',
        'Basic dashboard',
        'Up to 3 users',
        'Monthly data updates'
      ]
    },
    buttonText: {
      ca: 'Comença ara',
      es: 'Comenzar ahora',
      en: 'Start now'
    },
    buttonHref: '/get-started',
    popular: false,
    delay: 100,
    limits: {
      leads: 500,
      aiCredits: 500,
      users: 3,
      searches: 20
    }
  },
  {
    id: 'pro',
    name: {
      ca: 'Pro',
      es: 'Pro',
      en: 'Pro'
    },
    price: 49,
    period: {
      ca: 'mes',
      es: 'mes',
      en: 'month'
    },
    description: {
      ca: 'Ideal per a equips comercials que necessiten més volum i funcionalitats avançades',
      es: 'Ideal para equipos comerciales que necesitan más volumen y funcionalidades avanzadas',
      en: 'Ideal for sales teams that need more volume and advanced features'
    },
    features: {
      ca: [
        'Fins a 2.500 leads únics al mes',
        '2.500 crèdits d\'enriquiment amb IA',
        'Cerca avançada amb múltiples filtres',
        'Informes IA personalitzats',
        'Integració amb Zapier i HubSpot',
        'Suport prioritari (email i xat)',
        'Dashboard avançat amb analytics',
        'Fins a 10 usuaris',
        'Actualització setmanal de dades',
        'Segmentació per intenció de compra',
        'Alertes personalitzades',
        'API bàsica'
      ],
      es: [
        'Hasta 2.500 leads únicos al mes',
        '2.500 créditos de enriquecimiento con IA',
        'Búsqueda avanzada con múltiples filtros',
        'Informes IA personalizados',
        'Integración con Zapier y HubSpot',
        'Soporte prioritario (email y chat)',
        'Dashboard avanzado con analytics',
        'Hasta 10 usuarios',
        'Actualización semanal de datos',
        'Segmentación por intención de compra',
        'Alertas personalizadas',
        'API básica'
      ],
      en: [
        'Up to 2,500 unique leads per month',
        '2,500 AI enrichment credits',
        'Advanced search with multiple filters',
        'Custom AI reports',
        'Zapier and HubSpot integration',
        'Priority support (email and chat)',
        'Advanced dashboard with analytics',
        'Up to 10 users',
        'Weekly data updates',
        'Purchase intent segmentation',
        'Custom alerts',
        'Basic API'
      ]
    },
    buttonText: {
      ca: 'Comença ara',
      es: 'Comenzar ahora',
      en: 'Start now'
    },
    buttonHref: '/get-started',
    popular: true,
    delay: 200,
    limits: {
      leads: 2500,
      aiCredits: 2500,
      users: 10,
      searches: 100
    }
  },
  {
    id: 'elite',
    name: {
      ca: 'Elite',
      es: 'Elite',
      en: 'Elite'
    },
    price: 99,
    period: {
      ca: 'mes',
      es: 'mes',
      en: 'month'
    },
    description: {
      ca: 'Solució completa per a empreses que necessiten màxima capacitat i personalització',
      es: 'Solución completa para empresas que necesitan máxima capacidad y personalización',
      en: 'Complete solution for businesses that need maximum capacity and customization'
    },
    features: {
      ca: [
        'Leads il·limitats al mes',
        'Crèdits d\'IA il·limitats',
        'Totes les funcionalitats Pro',
        'API completa i SSO',
        'Integracions personalitzades',
        'Suport dedicat 24/5',
        'Dashboard personalitzat',
        'Usuaris il·limitats',
        'Actualització diària de dades',
        'Segmentació avançada amb IA',
        'Alertes intel·ligents',
        'Integració amb CRM personalitzat',
        'Anàlisi predictiva',
        'Formació personalitzada',
        'SLA garantit'
      ],
      es: [
        'Leads ilimitados al mes',
        'Créditos de IA ilimitados',
        'Todas las funcionalidades Pro',
        'API completa y SSO',
        'Integraciones personalizadas',
        'Soporte dedicado 24/5',
        'Dashboard personalizado',
        'Usuarios ilimitados',
        'Actualización diaria de datos',
        'Segmentación avanzada con IA',
        'Alertas inteligentes',
        'Integración con CRM personalizado',
        'Análisis predictivo',
        'Formación personalizada',
        'SLA garantizado'
      ],
      en: [
        'Unlimited leads per month',
        'Unlimited AI credits',
        'All Pro features',
        'Full API and SSO',
        'Custom integrations',
        'Dedicated 24/5 support',
        'Custom dashboard',
        'Unlimited users',
        'Daily data updates',
        'Advanced AI segmentation',
        'Smart alerts',
        'Custom CRM integration',
        'Predictive analytics',
        'Custom training',
        'Guaranteed SLA'
      ]
    },
    buttonText: {
      ca: 'Parla amb vendes',
      es: 'Habla con ventas',
      en: 'Talk to sales'
    },
    buttonHref: '/contact',
    popular: false,
    delay: 300,
    limits: {
      leads: 'Il·limitats',
      aiCredits: 'Il·limitats',
      users: 'Il·limitats',
      searches: 'Il·limitats'
    }
  }
]

export const comparisonFeatures: ComparisonFeature[] = [
  {
    id: 'leads',
    name: {
      ca: 'Leads al mes',
      es: 'Leads al mes',
      en: 'Leads per month'
    },
    description: {
      ca: 'Volum de contactes únics generats cada mes',
      es: 'Volumen de contactos únicos generados cada mes',
      en: 'Volume of unique contacts generated each month'
    },
    start: '500',
    pro: '2.500',
    elite: 'Il·limitats'
  },
  {
    id: 'ai-credits',
    name: {
      ca: 'Crèdits d\'enriquiment amb IA',
      es: 'Créditos de enriquecimiento con IA',
      en: 'AI enrichment credits'
    },
    description: {
      ca: 'Nombre de fitxes amb informe IA generades per mes',
      es: 'Número de fichas con informe IA generadas por mes',
      en: 'Number of AI report profiles generated per month'
    },
    start: '500',
    pro: '2.500',
    elite: 'Il·limitats'
  },
  {
    id: 'precision',
    name: {
      ca: 'Precisió de segmentació',
      es: 'Precisión de segmentación',
      en: 'Segmentation precision'
    },
    description: {
      ca: 'Qualitat dels filtres per zona, sector i intenció',
      es: 'Calidad de los filtros por zona, sector e intención',
      en: 'Quality of filters by location, sector and intent'
    },
    start: 'Alta',
    pro: 'Molt alta',
    elite: 'Màxima'
  },
  {
    id: 'integrations',
    name: {
      ca: 'Integracions',
      es: 'Integraciones',
      en: 'Integrations'
    },
    description: {
      ca: 'Connexió amb CRM i eines d\'automatització',
      es: 'Conexión con CRM y herramientas de automatización',
      en: 'Connection with CRM and automation tools'
    },
    start: 'CSV',
    pro: 'Zapier, HubSpot',
    elite: 'API, SSO'
  },
  {
    id: 'users',
    name: {
      ca: 'Seients inclosos',
      es: 'Asientos incluidos',
      en: 'Seats included'
    },
    description: {
      ca: 'Nombre d\'usuaris del teu equip',
      es: 'Número de usuarios de tu equipo',
      en: 'Number of users on your team'
    },
    start: '3',
    pro: '10',
    elite: 'Il·limitats'
  },
  {
    id: 'update-frequency',
    name: {
      ca: 'Freqüència d\'actualització',
      es: 'Frecuencia de actualización',
      en: 'Update frequency'
    },
    description: {
      ca: 'Periodicitat de refresc del catàleg de dades',
      es: 'Periodicidad de actualización del catálogo de datos',
      en: 'Frequency of data catalog refresh'
    },
    start: 'Mensual',
    pro: 'Setmanal',
    elite: 'Diària'
  },
  {
    id: 'support',
    name: {
      ca: 'Assistència',
      es: 'Asistencia',
      en: 'Support'
    },
    description: {
      ca: 'Canals i SLA de suport',
      es: 'Canales y SLA de soporte',
      en: 'Support channels and SLA'
    },
    start: 'Email',
    pro: 'Email i xat',
    elite: 'Dedicada (SLA)'
  },
  {
    id: 'api',
    name: {
      ca: 'API i integracions',
      es: 'API e integraciones',
      en: 'API and integrations'
    },
    description: {
      ca: 'Accés a API i capacitats d\'integració',
      es: 'Acceso a API y capacidades de integración',
      en: 'API access and integration capabilities'
    },
    start: false,
    pro: 'API bàsica',
    elite: 'API completa + SSO'
  },
  {
    id: 'analytics',
    name: {
      ca: 'Analytics avançats',
      es: 'Analytics avanzados',
      en: 'Advanced analytics'
    },
    description: {
      ca: 'Eines d\'anàlisi i reporting avançat',
      es: 'Herramientas de análisis y reporting avanzado',
      en: 'Advanced analytics and reporting tools'
    },
    start: false,
    pro: 'Analytics bàsics',
    elite: 'Analytics predictius'
  },
  {
    id: 'customization',
    name: {
      ca: 'Personalització',
      es: 'Personalización',
      en: 'Customization'
    },
    description: {
      ca: 'Nivell de personalització disponible',
      es: 'Nivel de personalización disponible',
      en: 'Level of customization available'
    },
    start: 'Bàsic',
    pro: 'Moderat',
    elite: 'Complet'
  }
]

export const faqData = {
  ca: [
    {
      question: 'Hi ha una prova gratuïta disponible?',
      answer: 'Sí, pots provar-nos gratis durant 30 dies. Si vols, et proporcionarem una trucada d\'incorporació gratuïta de 30 minuts per posar-te en marxa.'
    },
    {
      question: 'Puc canviar el meu pla més endavant?',
      answer: 'Per descomptat que pots! Els nostres preus s\'escalen amb la teva empresa. Parla amb el nostre equip amable per trobar una solució que funcioni per a tu mentre creixes.'
    },
    {
      question: 'Quina és la vostra política de cancel·lació?',
      answer: 'Entenem que les coses canvien. Pots cancel·lar el teu pla en qualsevol moment i et reemborsarem la diferència ja pagada.'
    },
    {
      question: 'Com funciona la facturació?',
      answer: 'Els plans són per espai de treball, no per compte. Pots actualitzar un espai de treball i encara tenir qualsevol nombre d\'espais de treball gratuïts.'
    },
    {
      question: 'Com es compten els leads i els crèdits d\'IA?',
      answer: 'Cada empresa única exportada compta com a lead. Cada fitxa d\'informe generada per IA consumeix un crèdit d\'enriquiment.'
    },
    {
      question: 'Em puc integrar amb el meu CRM?',
      answer: 'Sí. Pro: Zapier i HubSpot. Elite: API directa i SSO. Sempre pots exportar CSV.'
    }
  ],
  es: [
    {
      question: '¿Hay una prueba gratuita disponible?',
      answer: 'Sí, puedes probarnos gratis durante 30 días. Si quieres, te proporcionaremos una llamada de incorporación gratuita de 30 minutos para ponerte en marcha.'
    },
    {
      question: '¿Puedo cambiar mi plan más adelante?',
      answer: '¡Por supuesto que puedes! Nuestros precios se escalan con tu empresa. Habla con nuestro equipo amable para encontrar una solución que funcione para ti mientras creces.'
    },
    {
      question: '¿Cuál es vuestra política de cancelación?',
      answer: 'Entendemos que las cosas cambian. Puedes cancelar tu plan en cualquier momento y te reembolsaremos la diferencia ya pagada.'
    },
    {
      question: '¿Cómo funciona la facturación?',
      answer: 'Los planes son por espacio de trabajo, no por cuenta. Puedes actualizar un espacio de trabajo y aún tener cualquier número de espacios de trabajo gratuitos.'
    },
    {
      question: '¿Cómo se cuentan los leads y los créditos de IA?',
      answer: 'Cada empresa única exportada cuenta como lead. Cada ficha de informe generada por IA consume un crédito de enriquecimiento.'
    },
    {
      question: '¿Me puedo integrar con mi CRM?',
      answer: 'Sí. Pro: Zapier y HubSpot. Elite: API directa y SSO. Siempre puedes exportar CSV.'
    }
  ],
  en: [
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, you can try us for free for 30 days. If you want, we\'ll provide you with a free 30-minute onboarding call to get you started.'
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Of course you can! Our prices scale with your business. Talk to our friendly team to find a solution that works for you as you grow.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We understand that things change. You can cancel your plan at any time and we\'ll refund the difference already paid.'
    },
    {
      question: 'How does billing work?',
      answer: 'Plans are per workspace, not per account. You can upgrade a workspace and still have any number of free workspaces.'
    },
    {
      question: 'How are leads and AI credits counted?',
      answer: 'Each unique company exported counts as a lead. Each AI-generated report profile consumes an enrichment credit.'
    },
    {
      question: 'Can I integrate with my CRM?',
      answer: 'Yes. Pro: Zapier and HubSpot. Elite: Direct API and SSO. You can always export CSV.'
    }
  ]
}
