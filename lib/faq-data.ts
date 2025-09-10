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
      ca: 'Com segmentem els leads per zona i sector, i quina cobertura de dades oferim.',
      es: 'Cómo segmentamos los leads por zona y sector, y qué cobertura de datos ofrecemos.',
      en: 'How we segment leads by location and sector, and what data coverage we offer.'
    },
    questions: [
      {
        id: 1,
        question: {
          ca: 'Com seleccioneu les empreses per zona i sector?',
          es: '¿Cómo seleccionáis las empresas por zona y sector?',
          en: 'How do you select companies by location and sector?'
        },
        answer: {
          ca: 'Pots triar municipi, barri o província i afinar per sector amb CNAE i paraules clau. El sistema calcula el volum estimat de leads i en mostra la llista perquè la revisis abans d\'exportar.',
          es: 'Puedes elegir municipio, barrio o provincia y afinar por sector con CNAE y palabras clave. El sistema calcula el volumen estimado de leads y muestra la lista para que la revises antes de exportar.',
          en: 'You can choose municipality, neighborhood or province and refine by sector with CNAE and keywords. The system calculates the estimated lead volume and shows the list for you to review before exporting.'
        },
        isOpen: true
      },
      {
        id: 2,
        question: {
          ca: 'Amb quina freqüència s\'actualitzen les dades?',
          es: '¿Con qué frecuencia se actualizan los datos?',
          en: 'How often are the data updated?'
        },
        answer: {
          ca: 'Depèn del pla: Inici (mensual), Pro (setmanal), Empresa (diària). Ens centrem a mantenir qualitat, cobertura i informació accionable.',
          es: 'Depende del plan: Inicio (mensual), Pro (semanal), Empresa (diario). Nos centramos en mantener calidad, cobertura e información accionable.',
          en: 'It depends on the plan: Start (monthly), Pro (weekly), Enterprise (daily). We focus on maintaining quality, coverage and actionable information.'
        },
        isOpen: false
      },
      {
        id: 3,
        question: {
          ca: 'Quin nivell de precisió té la segmentació?',
          es: '¿Qué nivel de precisión tiene la segmentación?',
          en: 'What level of precision does the segmentation have?'
        },
        answer: {
          ca: 'Fem servir múltiples fonts i validacions. La precisió augmenta amb filtres avançats (noms comercials, keywords de nínxol, mida, etc.).',
          es: 'Utilizamos múltiples fuentes y validaciones. La precisión aumenta con filtros avanzados (nombres comerciales, keywords de nicho, tamaño, etc.).',
          en: 'We use multiple sources and validations. Precision increases with advanced filters (commercial names, niche keywords, size, etc.).'
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
          ca: 'Cobertura completa d\'Espanya amb dades detallades per municipi. També tenim dades d\'Europa i Amèrica Llatina per plans Enterprise.',
          es: 'Cobertura completa de España con datos detallados por municipio. También tenemos datos de Europa y América Latina para planes Enterprise.',
          en: 'Complete coverage of Spain with detailed data by municipality. We also have data from Europe and Latin America for Enterprise plans.'
        },
        isOpen: false
      },
      {
        id: 5,
        question: {
          ca: 'Puc filtrar per mida d\'empresa?',
          es: '¿Puedo filtrar por tamaño de empresa?',
          en: 'Can I filter by company size?'
        },
        answer: {
          ca: 'Sí, pots filtrar per nombre d\'empleats, facturació anual i altres criteris de mida per trobar el perfil ideal per al teu producte.',
          es: 'Sí, puedes filtrar por número de empleados, facturación anual y otros criterios de tamaño para encontrar el perfil ideal para tu producto.',
          en: 'Yes, you can filter by number of employees, annual revenue and other size criteria to find the ideal profile for your product.'
        },
        isOpen: false
      }
    ]
  },
  {
    id: 'ia',
    title: {
      ca: 'IA i informes per a trucades',
      es: 'IA e informes para llamadas',
      en: 'AI and reports for calls'
    },
    description: {
      ca: 'Com es generen els informes i com ajuden a preparar la conversa comercial.',
      es: 'Cómo se generan los informes y cómo ayudan a preparar la conversación comercial.',
      en: 'How reports are generated and how they help prepare the commercial conversation.'
    },
    questions: [
      {
        id: 6,
        question: {
          ca: 'Què inclou l\'informe per empresa?',
          es: '¿Qué incluye el informe por empresa?',
          en: 'What does the company report include?'
        },
        answer: {
          ca: 'Resum executiu, punts de conversa, necessitats detectades, objeccions probables i angle de contacte suggerit per tancar reunió.',
          es: 'Resumen ejecutivo, puntos de conversación, necesidades detectadas, objeciones probables y ángulo de contacto sugerido para cerrar reunión.',
          en: 'Executive summary, talking points, detected needs, probable objections and suggested contact angle to close a meeting.'
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
      ca: 'IA i informes',
      es: 'IA e informes',
      en: 'AI and reports'
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
