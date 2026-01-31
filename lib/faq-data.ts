export interface FAQItem {
  id: number
  question: {
    ca: string
    es: string
    en: string
  }
  answer: {
    ca: string
    es: string
    en: string
  }
  isOpen?: boolean
}

export interface FAQSection {
  id: string
  title: {
    ca: string
    es: string
    en: string
  }
  description: {
    ca: string
    es: string
    en: string
  }
  questions: FAQItem[]
}

export interface NavigationItem {
  id: string
  title: {
    ca: string
    es: string
    en: string
  }
}

export const faqSections: FAQSection[] = [
  {
    id: 'producte',
    title: {
      ca: 'Producte i cobertura',
      es: 'Producto y cobertura',
      en: 'Product and coverage'
    },
    description: {
      ca: 'Com treballem les dades, quina cobertura de negocis locals oferim i com es diferencia de LinkedIn.',
      es: 'Cómo trabajamos los datos, qué cobertura de negocios locales ofrecemos y cómo se diferencia de LinkedIn.',
      en: 'How we work with data, what local business coverage we offer and how it differs from LinkedIn.'
    },
    questions: [
      {
        id: 1,
        question: {
          ca: 'D\'on provenen les dades dels leads?',
          es: '¿De dónde provienen los datos de los leads?',
          en: 'Where do lead data come from?'
        },
        answer: {
          ca: 'Disposem d\'una amplia base de dades de negocis locals amb ubicació verificada, horaris, ressenyes i dades actualitzades constantment. Trobes restaurants, tallers, comerços i altres negocis tradicionals que LinkedIn i altres plataformes B2B no tenen.',
          es: 'Disponemos de una amplia base de datos de negocios locales con ubicación verificada, horarios, reseñas y datos actualizados constantemente. Encuentras restaurantes, talleres, comercios y otros negocios tradicionales que LinkedIn y otras plataformas B2B no tienen.',
          en: 'We have a wide database of local businesses with verified location, opening hours, reviews and data updated constantly. You find restaurants, workshops, shops and other traditional businesses that LinkedIn and other B2B platforms don\'t have.'
        },
        isOpen: true
      },
      {
        id: 2,
        question: {
          ca: 'Com cerco per zona i tipus de negoci?',
          es: '¿Cómo busco por zona y tipo de negocio?',
          en: 'How do I search by area and business type?'
        },
        answer: {
          ca: 'Pots cercar per ciutat, barri, codi postal, radi en km o dibuixar una àrea al mapa. Afegeix el tipus de negoci (ex: restaurants, tallers mecànics) i filtres com rating mínim, nombre de ressenyes o horaris.',
          es: 'Puedes buscar por ciudad, barrio, código postal, radio en km o dibujar un área en el mapa. Añade el tipo de negocio (ej: restaurantes, talleres mecánicos) y filtros como valoración mínima, número de reseñas u horarios.',
          en: 'You can search by city, neighborhood, postal code, radius in km or draw an area on the map. Add business type (e.g. restaurants, workshops) and filters like minimum rating, review count or opening hours.'
        },
        isOpen: false
      },
      {
        id: 3,
        question: {
          ca: 'Amb quina freqüència s\'actualitzen les dades?',
          es: '¿Con qué frecuencia se actualizan los datos?',
          en: 'How often are the data updated?'
        },
        answer: {
          ca: 'Les dades es van actualitzant constantment. Nosaltres enriquim i verifiquem les dades segons el pla: Local Business i Professional inclouen alertes de noves obertures i, a Professional i Enterprise, monitorització de canvis periòdica.',
          es: 'Los datos se actualizan constantemente. Nosotros enriquecemos y verificamos los datos según el plan: Local Business y Professional incluyen alertas de nuevas aperturas y, en Professional y Enterprise, monitorización de cambios periódica.',
          en: 'Data is updated constantly. We enrich and verify data according to plan: Local Business and Professional include new business alerts and, on Professional and Enterprise, periodic change monitoring.'
        },
        isOpen: false
      },
      {
        id: 4,
        question: {
          ca: 'Quina cobertura geogràfica teniu?',
          es: '¿Qué cobertura geográfica tenéis?',
          en: 'What geographic coverage do you have?'
        },
        answer: {
          ca: 'Cobertura amplia amb focus especial a Espanya i Europa, dades detallades per municipi, barri i codi postal. Els plans Enterprise inclouen anàlisi territorial avançada.',
          es: 'Cobertura amplia con enfoque especial en España y Europa, datos detallados por municipio, barrio y código postal. Los planes Enterprise incluyen análisis territorial avanzado.',
          en: 'Wide coverage with special focus on Spain and Europe, detailed data by municipality, neighborhood and postal code. Enterprise plans include advanced territory analysis.'
        },
        isOpen: false
      },
      {
        id: 5,
        question: {
          ca: 'Puc filtrar per rating o nombre de ressenyes?',
          es: '¿Puedo filtrar por valoración o número de reseñas?',
          en: 'Can I filter by rating or number of reviews?'
        },
        answer: {
          ca: 'Sí. A partir del pla Local Business pots filtrar per rating mínim (ex: només 4+ estrelles), nombre de ressenyes, nivell de preus ($ $$ $$$), horaris (obert ara), si tenen web o telèfon i negocis oberts recentment.',
          es: 'Sí. A partir del plan Local Business puedes filtrar por valoración mínima (ej: solo 4+ estrellas), número de reseñas, nivel de precios ($ $$ $$$), horarios (abierto ahora), si tienen web o teléfono y negocios abiertos recientemente.',
          en: 'Yes. From the Local Business plan you can filter by minimum rating (e.g. 4+ stars), review count, price level ($ $$ $$$), opening hours (open now), has website or phone and recently opened businesses.'
        },
        isOpen: false
      }
    ]
  },
  {
    id: 'ia',
    title: {
      ca: 'IA: anàlisi de ressenyes i scoring',
      es: 'IA: análisis de reseñas y scoring',
      en: 'AI: review analysis and scoring'
    },
    description: {
      ca: 'Anàlisi de ressenyes amb IA, detecció d\'oportunitats i scoring predictiu de potencial de negoci.',
      es: 'Análisis de reseñas con IA, detección de oportunidades y scoring predictivo de potencial de negocio.',
      en: 'AI review analysis, opportunity detection and predictive business potential scoring.'
    },
    questions: [
      {
        id: 6,
        question: {
          ca: 'Què és l\'anàlisi de ressenyes amb IA?',
          es: '¿Qué es el análisis de reseñas con IA?',
          en: 'What is AI review analysis?'
        },
        answer: {
          ca: 'La IA analitza les ressenyes públiques del negoci: sentiment (positiu/negatiu), keywords, problemes recurrents i oportunitats (ex: "no accepten targeta" → vendre TPV). Això et permet preparar un pitch personalitzat i identificar pain points reals.',
          es: 'La IA analiza las reseñas públicas del negocio: sentimiento (positivo/negativo), keywords, problemas recurrentes y oportunidades (ej: "no aceptan tarjeta" → vender TPV). Esto te permite preparar un pitch personalizado e identificar pain points reales.',
          en: 'The AI analyses the business\'s public reviews: sentiment (positive/negative), keywords, recurring problems and opportunities (e.g. "don\'t accept cards" → sell POS). This lets you prepare a tailored pitch and identify real pain points.'
        },
        isOpen: true
      },
      {
        id: 7,
        question: {
          ca: 'Els informes consumeixen crèdits?',
          es: '¿Los informes consumen créditos?',
          en: 'Do reports consume credits?'
        },
        answer: {
          ca: 'Sí. Cada informe generat per IA consumeix un crèdit d\'enriquiment. Els crèdits es renoven mensualment segons el pla.',
          es: 'Sí. Cada informe generado por IA consume un crédito de enriquecimiento. Los créditos se renuevan mensualmente según el plan.',
          en: 'Yes. Each AI-generated report consumes an enrichment credit. Credits are renewed monthly according to the plan.'
        },
        isOpen: false
      },
      {
        id: 8,
        question: {
          ca: 'Puc personalitzar el to o format de l\'informe?',
          es: '¿Puedo personalizar el tono o formato del informe?',
          en: 'Can I customize the tone or format of the report?'
        },
        answer: {
          ca: 'A Pro i Empresa pots definir el to, la llargada i l\'èmfasi (per exemple, producte vs. servei) per adaptar-lo al teu pitch.',
          es: 'En Pro y Empresa puedes definir el tono, la longitud y el énfasis (por ejemplo, producto vs. servicio) para adaptarlo a tu pitch.',
          en: 'In Pro and Enterprise you can define the tone, length and emphasis (for example, product vs. service) to adapt it to your pitch.'
        },
        isOpen: false
      },
      {
        id: 9,
        question: {
          ca: 'Quina precisió tenen els informes d\'IA?',
          es: '¿Qué precisión tienen los informes de IA?',
          en: 'What accuracy do AI reports have?'
        },
        answer: {
          ca: 'Els nostres models d\'IA tenen una precisió del 85-90% en la detecció de necessitats i angles de contacte. Millorem contínuament amb feedback dels usuaris.',
          es: 'Nuestros modelos de IA tienen una precisión del 85-90% en la detección de necesidades y ángulos de contacto. Mejoramos continuamente con feedback de los usuarios.',
          en: 'Our AI models have 85-90% accuracy in detecting needs and contact angles. We continuously improve with user feedback.'
        },
        isOpen: false
      },
      {
        id: 10,
        question: {
          ca: 'Puc exportar els informes en diferents formats?',
          es: '¿Puedo exportar los informes en diferentes formatos?',
          en: 'Can I export reports in different formats?'
        },
        answer: {
          ca: 'Sí, pots exportar en PDF, Word, CSV i també integrar-los directament al teu CRM via API.',
          es: 'Sí, puedes exportar en PDF, Word, CSV y también integrarlos directamente en tu CRM vía API.',
          en: 'Yes, you can export in PDF, Word, CSV and also integrate them directly into your CRM via API.'
        },
        isOpen: false
      }
    ]
  },
  {
    id: 'integracions-suport',
    title: {
      ca: 'Integracions i suport',
      es: 'Integraciones y soporte',
      en: 'Integrations and support'
    },
    description: {
      ca: 'Connexions amb CRM, seguretat i canals d\'assistència.',
      es: 'Conexiones con CRM, seguridad y canales de asistencia.',
      en: 'CRM connections, security and assistance channels.'
    },
    questions: [
      {
        id: 11,
        question: {
          ca: 'Amb quins CRMs em puc integrar?',
          es: '¿Con qué CRMs me puedo integrar?',
          en: 'Which CRMs can I integrate with?'
        },
        answer: {
          ca: 'CSV a tots els plans. Pro: Zapier i HubSpot. Empresa: API pròpia i SSO per integrar amb el teu ecosistema.',
          es: 'CSV en todos los planes. Pro: Zapier y HubSpot. Empresa: API propia y SSO para integrar con tu ecosistema.',
          en: 'CSV on all plans. Pro: Zapier and HubSpot. Enterprise: own API and SSO to integrate with your ecosystem.'
        },
        isOpen: true
      },
      {
        id: 12,
        question: {
          ca: 'Com gestioneu dades i privacitat?',
          es: '¿Cómo gestionáis datos y privacidad?',
          en: 'How do you manage data and privacy?'
        },
        answer: {
          ca: 'Apliquem millors pràctiques de seguretat i conformitat. Les dades s\'utilitzen exclusivament per generar i enriquir els leads del teu compte.',
          es: 'Aplicamos mejores prácticas de seguridad y conformidad. Los datos se utilizan exclusivamente para generar y enriquecer los leads de tu cuenta.',
          en: 'We apply best security and compliance practices. Data is used exclusively to generate and enrich leads for your account.'
        },
        isOpen: false
      },
      {
        id: 13,
        question: {
          ca: 'Quin suport tinc?',
          es: '¿Qué soporte tengo?',
          en: 'What support do I have?'
        },
        answer: {
          ca: 'Inici: email. Pro: email i xat. Empresa: equip dedicat amb SLA. Ajudem també a definir nínxols i scripts de contacte.',
          es: 'Inicio: email. Pro: email y chat. Empresa: equipo dedicado con SLA. También ayudamos a definir nichos y scripts de contacto.',
          en: 'Start: email. Pro: email and chat. Enterprise: dedicated team with SLA. We also help define niches and contact scripts.'
        },
        isOpen: false
      },
      {
        id: 14,
        question: {
          ca: 'Hi ha formació inclosa?',
          es: '¿Hay formación incluida?',
          en: 'Is training included?'
        },
        answer: {
          ca: 'Sí, incloem sessions de formació per a tots els plans. Pro i Empresa tenen formació personalitzada i sessions de seguiment.',
          es: 'Sí, incluimos sesiones de formación para todos los planes. Pro y Empresa tienen formación personalizada y sesiones de seguimiento.',
          en: 'Yes, we include training sessions for all plans. Pro and Enterprise have personalized training and follow-up sessions.'
        },
        isOpen: false
      },
      {
        id: 15,
        question: {
          ca: 'Puc canviar de pla en qualsevol moment?',
          es: '¿Puedo cambiar de plan en cualquier momento?',
          en: 'Can I change plans at any time?'
        },
        answer: {
          ca: 'Sí, pots pujar o baixar de pla segons les teves necessitats. Els canvis s\'apliquen immediatament i la facturació s\'ajusta pro-rata.',
          es: 'Sí, puedes subir o bajar de plan según tus necesidades. Los cambios se aplican inmediatamente y la facturación se ajusta pro-rata.',
          en: 'Yes, you can upgrade or downgrade your plan according to your needs. Changes are applied immediately and billing is adjusted pro-rata.'
        },
        isOpen: false
      },
      {
        id: 16,
        question: {
          ca: 'Quina és la vostra política de cancel·lació?',
          es: '¿Cuál es vuestra política de cancelación?',
          en: 'What is your cancellation policy?'
        },
        answer: {
          ca: 'Pots cancel·lar en qualsevol moment sense penalitzacions. Et reemborsem la part proporcional del període no utilitzat.',
          es: 'Puedes cancelar en cualquier momento sin penalizaciones. Te reembolsamos la parte proporcional del período no utilizado.',
          en: 'You can cancel at any time without penalties. We refund the proportional part of the unused period.'
        },
        isOpen: false
      }
    ]
  }
]

export const navigationItems: NavigationItem[] = [
  { 
    id: 'producte', 
    title: {
      ca: 'Producte i cobertura',
      es: 'Producto y cobertura',
      en: 'Product and coverage'
    }
  },
  { 
    id: 'ia', 
    title: {
      ca: 'IA: ressenyes i scoring',
      es: 'IA: reseñas y scoring',
      en: 'AI: reviews and scoring'
    }
  },
  { 
    id: 'integracions-suport', 
    title: {
      ca: 'Integracions i suport',
      es: 'Integraciones y soporte',
      en: 'Integrations and support'
    }
  }
]

export const pageTexts = {
  ca: {
    title: 'Preguntes freqüents',
    subtitle: 'Respostes a les preguntes més comunes sobre la nostra plataforma de generació de leads amb IA.',
    contactText: 'Si necessites ajuda, contacta amb',
    contactLink: 'el nostre equip',
    newsletter: 'Mantingues-te al dia',
    newsletterPlaceholder: 'Correu electrònic',
    subscribe: 'Subscriure\'s',
    metadata: {
      title: 'FAQ - NextLeadIn',
      description: 'Preguntes freqüents sobre generació de leads, IA, dades i integracions.'
    }
  },
  es: {
    title: 'Preguntas frecuentes',
    subtitle: 'Respuestas a las preguntas más comunes sobre nuestra plataforma de generación de leads con IA.',
    contactText: 'Si necesitas ayuda, contacta con',
    contactLink: 'nuestro equipo',
    newsletter: 'Mantente al día',
    newsletterPlaceholder: 'Correo electrónico',
    subscribe: 'Suscribirse',
    metadata: {
      title: 'FAQ - NextLeadIn',
      description: 'Preguntas frecuentes sobre generación de leads, IA, datos e integraciones.'
    }
  },
  en: {
    title: 'Frequently asked questions',
    subtitle: 'Answers to the most common questions about our AI-powered lead generation platform.',
    contactText: 'If you need help, contact',
    contactLink: 'our team',
    newsletter: 'Stay updated',
    newsletterPlaceholder: 'Email address',
    subscribe: 'Subscribe',
    metadata: {
      title: 'FAQ - NextLeadIn',
      description: 'Frequently asked questions about lead generation, AI, data and integrations.'
    }
  }
}
