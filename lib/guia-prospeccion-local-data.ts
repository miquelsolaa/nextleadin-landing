export type Locale = 'es' | 'ca' | 'en'

export interface GuiaContent {
  toc: { id: string; num: string; label: string }[]
  hero: {
    intro: string
    meta: { icon: 'clock' | 'clipboard-list' | 'folder-open' | 'refresh-cw'; text: string }[]
  }
  cap1: {
    title: string
    p1: string
    p2: string
    statCards: { num: string; label: string }[]
    p3: string
    calloutLabel: string
    calloutP: string
    h3: string
    p4: string
    checklist: string[]
  }
  cap2: {
    title: string
    p1: string
    tableHeaders: string[]
    rows: { icon: 'utensils-crossed' | 'stethoscope' | 'wrench' | 'building-2' | 'sparkles' | 'graduation-cap' | 'dumbbell'; sector: string; volumen: string; acceso: string; ticket: string; competencia: string }[]
    h3: string
    p2: string
    checklist: string[]
    calloutLabel: string
    calloutP: string
  }
  cap3: {
    title: string
    p1: string
    h3: string
    p2: string
    steps: { letter: string; title: string; desc: string }[]
    metrics: { label: string; val: string; note: string }[]
    h3b: string
    p3: string
    checklist: { sector: string; text: string }[]
  }
  cap4: {
    title: string
    p1: string
    h3: string
    steps: { num: string; title: string; desc: string }[]
    highlightLabel: string
    highlightP: string
    h3b: string
    p2: string
    metrics: { label: string; val: string; note: string }[]
    ctaTitle: string
    ctaDesc: string
    ctaBtn: string
  }
  cap5: {
    title: string
    p1: string
    objections: { q: string; aLabel: string; a: string[] }[]
  }
  cap6: {
    title: string
    p1: string
    h3: string
    metrics: { label: string; val: string; note: string }[]
    h3b: string
    p2: string
    steps: { num: string; title: string; desc: string }[]
    calloutLabel: string
    calloutP: string
    h3c: string
    p3: string
    statCards: { num: string; label: string }[]
    ctaTitle: string
    ctaP: string
    ctaBtn: string
  }
}

export const guiaContent: Record<Locale, GuiaContent> = {
  es: {
    toc: [
      { id: 'cap1', num: '01', label: 'Por qué local' },
      { id: 'cap2', num: '02', label: 'Los 7 sectores' },
      { id: 'cap3', num: '03', label: 'Cómo cualificar' },
      { id: 'cap4', num: '04', label: 'El primer contacto' },
      { id: 'cap5', num: '05', label: 'Objeciones' },
      { id: 'cap6', num: '06', label: 'Métricas y cadencia' }
    ],
    hero: {
      intro:
        'Los negocios locales son el segmento B2B más grande de España y el más invisible para las herramientas de prospección estándar. Esta guía te da el marco completo para identificarlos, cualificarlos, abordarlos y cerrar reuniones — sector a sector.',
      meta: [
        { icon: 'clock', text: '18 min de lectura' },
        { icon: 'clipboard-list', text: '6 capítulos' },
        { icon: 'folder-open', text: '7 sectores cubiertos' },
        { icon: 'refresh-cw', text: 'Actualizado enero 2025' }
      ]
    },
    cap1: {
      title: 'Por qué el mercado local es la oportunidad que nadie trabaja',
      p1:
        'Cuando un equipo comercial busca leads B2B, el primer instinto es abrir Apollo, LinkedIn Sales Navigator o ZoomInfo. El problema es que estas plataformas fueron construidas para empresas medianas y grandes con presencia digital estructurada. El restaurante familiar con 40 cubiertos, la clínica dental independiente o el taller mecánico de barrio son invisibles para ellas.',
      p2:
        'Esto no es un bug, es una característica del mercado: los negocios locales en España no tienen ficha en LinkedIn, no exportan datos a directorios B2B, y rara vez tienen un decision maker identificable en ninguna base de datos pública. Resultado: el 80% de los equipos comerciales ignora este segmento por defecto.',
      statCards: [
        { num: '+3.5M', label: 'PYMEs y autónomos con local en España (INE 2024)' },
        { num: '<12%', label: 'de ellos aparecen en bases de datos B2B estándar' },
        { num: '×4', label: 'menos competencia de prospección frente al mercado enterprise' }
      ],
      p3:
        'La consecuencia directa es que quien trabaja este mercado encuentra ratios de contacto y apertura significativamente más altos. Un comercial que prospecta restaurantes o clínicas dentales no compite contra otros diez SDRs que enviaron el mismo email con Apollo la semana pasada.',
      calloutLabel: 'Principio clave',
      calloutP:
        'La ventaja competitiva en prospección local no viene de mejor copy ni mejor timing. Viene de tener acceso a los datos que la competencia no tiene. El primer paso es resolver el problema de información.',
      h3: 'El perfil del decisor local',
      p4:
        'A diferencia del B2B enterprise, donde el decisor tiene un cargo definido (CPO, CMO, VP Sales), en el negocio local suele ser el dueño o gerente quien toma todas las decisiones. Esto simplifica el proceso de venta — no hay que navegar jerarquías — pero introduce otras fricciones:',
      checklist: [
        'El dueño recibe muchas llamadas comerciales y tiene el filtro alto desde la primera frase.',
        'No tiene tiempo para procesos de decisión largos. La venta tiene que ser rápida o no es.',
        'La confianza se construye demostrando conocimiento de su sector y su situación específica, no con pitches genéricos.',
        'Responde mejor a beneficios concretos e inmediatos que a promesas de ROI abstracto.'
      ]
    },
    cap2: {
      title: 'Los 7 sectores con mayor potencial en España',
      p1:
        'No todos los sectores locales tienen el mismo atractivo para la prospección. La tabla siguiente evalúa cada uno por volumen de negocios, facilidad de acceso al decisor, ticket medio y nivel de competencia comercial que ya existe en el segmento.',
      tableHeaders: ['Sector', 'Volumen', 'Acceso decisor', 'Ticket potencial', 'Competencia'],
      rows: [
        { icon: 'utensils-crossed', sector: 'Restaurantes & Hostelería', volumen: 'Alto', acceso: 'Directo', ticket: 'Medio', competencia: 'Baja' },
        { icon: 'stethoscope', sector: 'Clínicas Dentales', volumen: 'Alto', acceso: 'Medio', ticket: 'Alto', competencia: 'Baja' },
        { icon: 'wrench', sector: 'Talleres Mecánicos', volumen: 'Alto', acceso: 'Directo', ticket: 'Medio', competencia: 'Muy baja' },
        { icon: 'building-2', sector: 'Inmobiliarias Independientes', volumen: 'Medio', acceso: 'Directo', ticket: 'Alto', competencia: 'Media' },
        { icon: 'sparkles', sector: 'Estética & Spa', volumen: 'Alto', acceso: 'Directo', ticket: 'Medio', competencia: 'Baja' },
        { icon: 'graduation-cap', sector: 'Academias & Formación', volumen: 'Medio', acceso: 'Medio', ticket: 'Medio', competencia: 'Baja' },
        { icon: 'dumbbell', sector: 'Gimnasios & Fitness', volumen: 'Alto', acceso: 'Directo', ticket: 'Medio', competencia: 'Media' }
      ],
      h3: 'Cómo elegir tu sector de entrada',
      p2:
        'Si estás empezando a trabajar el mercado local, la recomendación es especializarte en un sector durante los primeros 90 días. Las razones son prácticas:',
      checklist: [
        'Acumulas conocimiento del sector que mejora cada llamada: sabes las objeciones, el vocabulario, los problemas estacionales.',
        'Puedes construir social proof sectorial más rápido: "ya trabajamos con 12 clínicas dentales en Madrid" cierra más que una propuesta genérica.',
        'Los decisores del mismo sector se conocen entre ellos. Un cliente satisfecho puede referir activamente.'
      ],
      calloutLabel: 'Recomendación de entrada',
      calloutP:
        'Para un equipo nuevo en prospección local, clínicas dentales o talleres mecánicos son los mejores puntos de partida: el decisor está siempre en el negocio, el beneficio de tener más clientes empresa es claro, y la competencia comercial es casi inexistente.'
    },
    cap3: {
      title: 'Cómo cualificar un negocio local antes de contactar',
      p1:
        'La prospección local eficiente empieza antes de coger el teléfono. Dedicar 3 minutos a investigar cada negocio puede doblar la tasa de apertura. Aquí el marco de cualificación que usamos.',
      h3: 'El modelo LOCA',
      p2: 'Cuatro preguntas que responden en menos de 5 minutos por lead:',
      steps: [
        {
          letter: 'L',
          title: 'Localización — ¿Está en la zona correcta?',
          desc:
            'No solo ciudad: barrio y distancia a polígonos industriales o zonas de oficinas. Un taller en polígono tiene más potencial de flota empresa que uno en zona residencial.'
        },
        {
          letter: 'O',
          title: 'Operativo — ¿Está abierto y activo?',
          desc:
            'Confirma horario actualizado en Google Maps. Un negocio con horario desactualizado o sin reseñas recientes puede estar cerrando. Prioriza los que tienen actividad reciente.'
        },
        {
          letter: 'C',
          title: 'Capacidad — ¿Tiene margen para crecer?',
          desc:
            'Las reseñas de Google son una señal: un restaurante con "siempre lleno, difícil conseguir mesa" no es tu cliente. Busca los que tienen buenas valoraciones pero no están saturados.'
        },
        {
          letter: 'A',
          title: 'Accesible — ¿Tienes el contacto directo?',
          desc:
            'Teléfono verificado y nombre del propietario si es posible. Evitar negocios donde solo hay un formulario web — el ciclo de respuesta es demasiado lento para prospección outbound.'
        }
      ],
      metrics: [
        { label: 'Sin cualificación previa', val: '3–5% tasa de apertura', note: 'Llamada a lista fría sin contexto' },
        { label: 'Con modelo LOCA', val: '12–18% tasa de apertura', note: 'Mismo sector, con contexto previo' },
        { label: 'LOCA + contexto IA', val: '25–35% tasa de apertura', note: 'Con análisis de reseñas y señales de compra' },
        { label: 'Tiempo por lead', val: '3–5 minutos', note: 'Cualificación manual básica' }
      ],
      h3b: 'Señales de compra que debes buscar',
      p3:
        'Más allá del modelo LOCA, hay señales específicas por sector que indican que un negocio está receptivo a servicios externos:',
      checklist: [
        { sector: 'Restaurantes:', text: 'Menciones en reseñas de "ideal para grupos" o "eventos de empresa" — ya tienen la infraestructura y el interés.' },
        { sector: 'Clínicas dentales:', text: 'Clínicas con más de 3 dentistas pero sin mención de convenios de empresa en su web — hay capacidad sin explotar.' },
        { sector: 'Talleres:', text: 'Negocio cerca de polígono industrial + mención de "servicio a domicilio" o "recogida" — ya piensan en comodidad para empresa.' },
        { sector: 'Academias:', text: 'Oferta de cursos en horario de tarde/noche — diseñados para trabajadores, receptivos a empresa como canal.' },
        { sector: 'Cualquier sector:', text: 'Negocios con reseñas entre 4.1 y 4.6 — lo suficientemente buenos para presentarte, con margen de mejora para motivar cambio.' }
      ]
    },
    cap4: {
      title: 'El primer contacto: estructura y psicología',
      p1:
        'El primer contacto con un negocio local es diferente al enterprise en un aspecto fundamental: no hay gatekeepers formales, pero la guardia es igual de alta. El dueño de un restaurante recibe llamadas comerciales cada semana. Tienes unos 15 segundos para diferenciarte antes de que cuelgue.',
      h3: 'La estructura de los primeros 30 segundos',
      steps: [
        {
          num: '01',
          title: 'Identifícate sin disculparte',
          desc:
            'Di tu nombre y empresa con tono seguro. Evita "perdona que te moleste" o "solo te robo un momento" — comunican inseguridad y bajan el valor percibido antes de empezar.'
        },
        {
          num: '02',
          title: 'Ancla la llamada con su negocio específico',
          desc:
            'Menciona el nombre del negocio y algo concreto que hayas visto. "Vi que el [nombre] tiene buenas reseñas en Google" o "aparecéis en nuestra base de datos de negocios en [ciudad]". Demuestra que no es una llamada masiva.'
        },
        {
          num: '03',
          title: 'Entrega el beneficio en una frase',
          desc:
            'Una frase, no un párrafo. "Trabajamos con equipos comerciales que buscan [sector] en [ciudad] y vosotros no aparecéis donde ellos buscan." El beneficio tiene que ser concreto y relevante para ellos, no para ti.'
        },
        {
          num: '04',
          title: 'Pide permiso para seguir',
          desc:
            '"¿Tienes 2 minutos?" o "¿Es buen momento?" antes de continuar. Invierte el control: si dicen que sí, han dado permiso implícito para escuchar. Si dicen que no, pides un momento mejor — no has perdido el lead.'
        }
      ],
      highlightLabel: 'El error más común en el primer contacto',
      highlightP:
        'Hablar demasiado del producto. En la primera llamada, el objetivo no es vender — es conseguir 15 minutos de demo. Cuanto más explicas el producto en frío, más objeciones generas antes de haber creado ningún interés. Vende la reunión, no el software.',
      h3b: 'Email vs llamada: cuándo usar cada canal',
      p2:
        'Para negocios locales, el teléfono es el canal primario sin excepciones. Las razones son simples: la mayoría no tienen email corporativo activo, los que tienen no lo revisan regularmente, y el ratio de respuesta a cold email en este segmento es significativamente inferior al del mercado enterprise.',
      metrics: [
        { label: 'Cold email solo', val: '0.5–2% respuesta', note: 'Negocios locales, email genérico' },
        { label: 'Llamada fría directa', val: '8–15% conversación', note: 'Con cualificación previa LOCA' },
        { label: 'Llamada + email seguimiento', val: '18–28% tasa demo', note: 'Secuencia multicanal en 72h' },
        { label: 'WhatsApp Business', val: '35–50% apertura', note: 'Solo si tienes número verificado del negocio' }
      ],
      ctaTitle: 'Scripts listos para usar por sector',
      ctaDesc: 'Aperturas, objeciones y cierres para restaurantes, clínicas, talleres y más.',
      ctaBtn: 'Ver scripts →'
    },
    cap5: {
      title: 'Las 6 objeciones más comunes y cómo responderlas',
      p1:
        'Las objeciones en negocios locales son predecibles. Conocerlas de antemano transforma cada "no" en una bifurcación con respuesta preparada. Estas son las seis que encontrarás en el 90% de las llamadas:',
      objections: [
        {
          q: '"No tenemos tiempo ahora mismo, estamos muy liados."',
          aLabel: 'Cómo responder',
          a: [
            'Reencuadra la objeción: "Precisamente por eso te llamo. Los negocios que van bien nunca tienen tiempo para buscar más trabajo, solo para hacerlo. Lo que te propongo es 15 minutos — tú eliges cuándo — para que veas si esto puede sumar a lo que ya funciona."',
            'La clave: no discutas que están ocupados. Valida y redirige hacia la facilidad del siguiente paso (una demo breve, a su hora).'
          ]
        },
        {
          q: '"Ya tenemos suficientes clientes, no necesitamos más."',
          aLabel: 'Cómo responder',
          a: [
            'Pregunta por la estacionalidad: "Me alegra escucharlo. ¿Hay algún momento del año — o del mes — en que flojea un poco? Porque lo que hacemos es justamente cubrir esos huecos con clientes empresa que son más predecibles."',
            'Casi ningún negocio local está al 100% de capacidad todo el año. La pregunta por la estacionalidad casi siempre abre una grieta.'
          ]
        },
        {
          q: '"Mándame información por email y ya te digo."',
          aLabel: 'Cómo responder',
          a: [
            'Acepta sin resistencia y ancla un próximo paso: "Sin problema, te lo mando ahora. Oye, antes de colgar — ¿tienes 30 segundos para que te diga un número concreto de negocios como el tuyo que están buscando nuestros clientes en [ciudad] ahora mismo? Así el email tiene más contexto."',
            'El email solo raramente convierte. Úsalo como puente para dar un dato concreto antes de colgar y quedar para el seguimiento.'
          ]
        },
        {
          q: '"¿Cuánto cuesta?"',
          aLabel: 'Cómo responder',
          a: [
            'Si la pregunta llega antes de la demo, es una señal de interés que no debes resolver con precio todavía: "El precio depende de cuántos leads necesitas y para qué zona. Por eso tiene sentido que primero te enseñe lo que hay disponible — así el precio tiene contexto. ¿Mañana o pasado te va mejor para 15 minutos?"',
            'Dar precio sin contexto de valor es el camino más rápido al "es caro". Gana la demo antes de hablar de números.'
          ]
        },
        {
          q: '"Ya usamos [herramienta]. No necesitamos otra."',
          aLabel: 'Cómo responder',
          a: [
            'Califica qué herramienta es y ataca el punto ciego: "Entendido. ¿Y esa herramienta te da restaurantes, clínicas y talleres con teléfono verificado en [ciudad]? Porque la mayoría no los tienen — son negocios que no están en LinkedIn ni en Apollo."',
            'Si la herramienta que usan es Apollo, LinkedIn o similar, el argumento de negocios locales no indexados es directo y difícil de rebatir.'
          ]
        },
        {
          q: '"No es el momento, llámame en unos meses."',
          aLabel: 'Cómo responder',
          a: [
            'Acepta y concreta: "Sin problema. ¿Te va bien que te llame en [mes concreto]? Te agendo en el calendario ahora mismo así no se pierde." El lead que dice "en unos meses" sin fecha concreta normalmente no existe. Con fecha, sí.',
            'Pide siempre un mes concreto, y confirma si puede ser la primera o segunda semana. Convierte un "quizás" en una cita real.'
          ]
        }
      ]
    },
    cap6: {
      title: 'Métricas, cadencia y qué medir en prospección local',
      p1:
        'La prospección local tiene benchmarks distintos al B2B enterprise. Antes de evaluar si tu equipo rinde bien o mal, tienes que comparar con los números correctos.',
      h3: 'Benchmarks de referencia',
      metrics: [
        { label: 'Llamadas para conseguir 1 conversación', val: '6–10 intentos', note: 'Con teléfono verificado y cualificación previa' },
        { label: 'Conversaciones para conseguir 1 demo', val: '4–7 conversaciones', note: 'Con script de apertura optimizado por sector' },
        { label: 'Demos para cerrar 1 cliente', val: '3–5 demos', note: 'Depende de ticket y ciclo de decisión' },
        { label: 'Tiempo de ciclo de venta', val: '3–10 días', note: 'Mucho más corto que enterprise (semanas/meses)' }
      ],
      h3b: 'La cadencia recomendada para prospección local',
      p2:
        'A diferencia del enterprise, donde una cadencia de 14 pasos en 4 semanas es habitual, los negocios locales responden mejor a secuencias más cortas e intensas. El dueño del negocio no va a acordarse de ti si contactas una vez y desapareces dos semanas.',
      steps: [
        {
          num: 'D0',
          title: 'Llamada de apertura',
          desc:
            'Primera toma de contacto. Si no contesta, deja un voicemail breve (máx. 20 seg) con el beneficio principal y tu nombre.'
        },
        {
          num: 'D1',
          title: 'Email o WhatsApp de seguimiento',
          desc:
            'Referencia el voicemail o la llamada. Incluye un dato concreto de tu base de datos relevante para su sector/ciudad. CTA: link a Calendly para demo.'
        },
        {
          num: 'D3',
          title: 'Segunda llamada',
          desc:
            'Menciona que enviaste información. Si no ha visto el email, resumen verbal en 30 segundos. Si sigue sin interés, pregunta por el mejor momento para el seguimiento.'
        },
        {
          num: 'D7',
          title: 'Toque final',
          desc:
            'Última llamada con framing de "cierre de ciclo": "Te llamo por última vez antes de dejar de contactar. Si no es el momento, sin problema — pero quería asegurarme de que tenías la información." Este tono honesto tiene alta tasa de respuesta.'
        }
      ],
      calloutLabel: 'Regla de oro',
      calloutP:
        'Si en 4 intentos en 7 días no has conseguido ninguna respuesta, el lead no es para ahora. Márcalo para recontactar en 60 días y mueve al siguiente. La prospección local funciona por volumen cualificado, no por perseverancia ilimitada en un solo lead.',
      h3c: 'El KPI que más importa: reuniones por semana',
      p3:
        'En prospección local, la métrica que mejor predice el éxito comercial no es el número de llamadas ni de emails enviados. Es el número de demos cerradas por semana. Todo lo demás — tasa de contacto, tasa de apertura — son métricas de diagnóstico para optimizar ese número final.',
      statCards: [
        { num: '3–5', label: 'Demos/semana para un SDR a tiempo parcial en prospección local' },
        { num: '8–12', label: 'Demos/semana con base de datos optimizada y secuencia multicanal' },
        { num: '+15', label: 'Demos/semana posibles con herramienta de prospección local dedicada' }
      ],
      ctaTitle: 'Ahora tienes el marco. Falta la base de datos.',
      ctaP:
        'Accede a miles de negocios locales en España con teléfono verificado, contexto IA y señales de compra por lead.',
      ctaBtn: 'Probar NextLeadIn 7 días gratis →'
    }
  },
  ca: {
    toc: [
      { id: 'cap1', num: '01', label: 'Per què local' },
      { id: 'cap2', num: '02', label: 'Els 7 sectors' },
      { id: 'cap3', num: '03', label: 'Com cualificar' },
      { id: 'cap4', num: '04', label: 'El primer contacte' },
      { id: 'cap5', num: '05', label: 'Objecions' },
      { id: 'cap6', num: '06', label: 'Mètriques i cadència' }
    ],
    hero: {
      intro:
        'Els negocis locals són el segment B2B més gran d\'Espanya i el més invisible per a les eines de prospecció estàndard. Aquesta guia et dóna el marc complet per identificar-los, qualificar-los, abordar-los i tancar reunions — sector a sector.',
      meta: [
        { icon: 'clock', text: '18 min de lectura' },
        { icon: 'clipboard-list', text: '6 capítols' },
        { icon: 'folder-open', text: '7 sectors coberts' },
        { icon: 'refresh-cw', text: 'Actualitzat gener 2025' }
      ]
    },
    cap1: {
      title: 'Per què el mercat local és l\'oportunitat que ningú treballa',
      p1:
        'Quan un equip comercial busca leads B2B, el primer instincte és obrir Apollo, LinkedIn Sales Navigator o ZoomInfo. El problema és que aquestes plataformes van ser construïdes per a empreses mitjanes i grans amb presència digital estructurada. El restaurant familiar amb 40 coberts, la clínica dental independent o el taller mecànic de barri són invisibles per a elles.',
      p2:
        'Això no és un bug, és una característica del mercat: els negocis locals a Espanya no tenen fitxa a LinkedIn, no exporten dades a directoris B2B, i rarament tenen un decision maker identificable en cap base de dades pública. Resultat: el 80% dels equips comercials ignora aquest segment per defecte.',
      statCards: [
        { num: '+3.5M', label: 'PIMEs i autònoms amb local a Espanya (INE 2024)' },
        { num: '<12%', label: 'd\'ells apareixen en bases de dades B2B estàndard' },
        { num: '×4', label: 'menys competència de prospecció front al mercat enterprise' }
      ],
      p3:
        'La conseqüència directa és que qui treballa aquest mercat troba ràtios de contacte i obertura significativament més alts. Un comercial que prospecta restaurants o clíniques dentals no competeix contra altres deu SDRs que van enviar el mateix email amb Apollo la setmana passada.',
      calloutLabel: 'Principi clau',
      calloutP:
        'L\'avantatge competitiu en prospecció local no ve de millor copy ni millor timing. Ve de tenir accés a les dades que la competència no té. El primer pas és resoldre el problema d\'informació.',
      h3: 'El perfil del decisor local',
      p4:
        'A diferència del B2B enterprise, on el decisor té un càrrec definit (CPO, CMO, VP Sales), al negoci local sol ser el propietari o gerent qui pren totes les decisions. Això simplifica el procés de venda — no cal navegar jerarquies — però introdueix altres friccions:',
      checklist: [
        'El propietari rep moltes trucades comercials i té el filtre alt des de la primera frase.',
        'No té temps per a processos de decisió llargs. La venda ha de ser ràpida o no és.',
        'La confiança es construeix demostrant coneixement del seu sector i la seva situació específica, no amb pitches genèrics.',
        'Respon millor a beneficis concrets i immediats que a promeses de ROI abstracte.'
      ]
    },
    cap2: {
      title: 'Els 7 sectors amb major potencial a Espanya',
      p1:
        'No tots els sectors locals tenen el mateix atractiu per a la prospecció. La taula següent avalua cadascun per volum de negocis, facilitat d\'accés al decisor, ticket mitjà i nivell de competència comercial que ja existeix al segment.',
      tableHeaders: ['Sector', 'Volum', 'Accés decisor', 'Ticket potencial', 'Competència'],
      rows: [
        { icon: 'utensils-crossed', sector: 'Restaurants & Hostaleria', volumen: 'Alt', acceso: 'Directe', ticket: 'Mitjà', competencia: 'Baixa' },
        { icon: 'stethoscope', sector: 'Clíniques Dentals', volumen: 'Alt', acceso: 'Mitjà', ticket: 'Alt', competencia: 'Baixa' },
        { icon: 'wrench', sector: 'Tallers Mecànics', volumen: 'Alt', acceso: 'Directe', ticket: 'Mitjà', competencia: 'Molt baixa' },
        { icon: 'building-2', sector: 'Immobiliàries Independents', volumen: 'Mitjà', acceso: 'Directe', ticket: 'Alt', competencia: 'Mitjana' },
        { icon: 'sparkles', sector: 'Estètica & Spa', volumen: 'Alt', acceso: 'Directe', ticket: 'Mitjà', competencia: 'Baixa' },
        { icon: 'graduation-cap', sector: 'Acadèmies & Formació', volumen: 'Mitjà', acceso: 'Mitjà', ticket: 'Mitjà', competencia: 'Baixa' },
        { icon: 'dumbbell', sector: 'Gimnàs & Fitness', volumen: 'Alt', acceso: 'Directe', ticket: 'Mitjà', competencia: 'Mitjana' }
      ],
      h3: 'Com triar el teu sector d\'entrada',
      p2:
        'Si estàs començant a treballar el mercat local, la recomanació és especialitzar-te en un sector durant els primers 90 dies. Les raons són pràctiques:',
      checklist: [
        'Acumules coneixement del sector que millora cada trucada: saps les objecions, el vocabulari, els problemes estacionals.',
        'Pots construir social proof sectorial més ràpid: "ja treballem amb 12 clíniques dentals a Barcelona" tanca més que una proposta genèrica.',
        'Els decisors del mateix sector es coneixen entre ells. Un client satisfet pot referir activament.'
      ],
      calloutLabel: 'Recomanació d\'entrada',
      calloutP:
        'Per a un equip nou en prospecció local, clíniques dentals o tallers mecànics són els millors punts de partida: el decisor és sempre al negoci, el benefici de tenir més clients empresa és clar, i la competència comercial és gairebé inexistent.'
    },
    cap3: {
      title: 'Com cualificar un negoci local abans de contactar',
      p1:
        'La prospecció local eficient comença abans de agafar el telèfon. Dedicar 3 minuts a investigar cada negoci pot doblar la taxa d\'obertura. Aquí el marc de qualificació que fem servir.',
      h3: 'El model LOCA',
      p2: 'Quatre preguntes que responen en menys de 5 minuts per lead:',
      steps: [
        {
          letter: 'L',
          title: 'Localització — Està a la zona correcta?',
          desc:
            'No només ciutat: barri i distància a polígons industrials o zones d\'oficines. Un taller a polígon té més potencial de flota empresa que un a zona residencial.'
        },
        {
          letter: 'O',
          title: 'Operatiu — Està obert i actiu?',
          desc:
            'Confirma horari actualitzat a Google Maps. Un negoci amb horari desactualitzat o sense ressenyes recents pot estar tancant. Prioritza els que tenen activitat recent.'
        },
        {
          letter: 'C',
          title: 'Capacitat — Té marge per créixer?',
          desc:
            'Les ressenyes de Google són un senyal: un restaurant amb "sempre ple, difícil aconseguir taula" no és el teu client. Busca els que tenen bones valoracions però no estan saturadors.'
        },
        {
          letter: 'A',
          title: 'Accessible — Tens el contacte directe?',
          desc:
            'Telèfon verificat i nom del propietari si és possible. Evitar negocis on només hi ha un formulari web — el cicle de resposta és massa lent per a prospecció outbound.'
        }
      ],
      metrics: [
        { label: 'Sense qualificació prèvia', val: '3–5% taxa d\'obertura', note: 'Trucada a llista freda sense context' },
        { label: 'Amb model LOCA', val: '12–18% taxa d\'obertura', note: 'Mateix sector, amb context previ' },
        { label: 'LOCA + context IA', val: '25–35% taxa d\'obertura', note: 'Amb anàlisi de ressenyes i senyals de compra' },
        { label: 'Temps per lead', val: '3–5 minuts', note: 'Qualificació manual bàsica' }
      ],
      h3b: 'Senyals de compra que has de buscar',
      p3:
        'Més enllà del model LOCA, hi ha senyals específiques per sector que indiquen que un negoci està receptiu a serveis externs:',
      checklist: [
        { sector: 'Restaurants:', text: 'Mencions en ressenyes de "ideal per grups" o "esdeveniments d\'empresa" — ja tenen la infraestructura i l\'interès.' },
        { sector: 'Clíniques dentals:', text: 'Clíniques amb més de 3 dentistes però sense menció de convenis d\'empresa a la seva web — hi ha capacitat sense explotar.' },
        { sector: 'Tallers:', text: 'Negoci a prop de polígon industrial + menció de "servei a domicili" o "recollida" — ja pensen en comoditat per empresa.' },
        { sector: 'Acadèmies:', text: 'Oferta de cursos en horari de tarda/nit — dissenyats per treballadors, receptius a empresa com a canal.' },
        { sector: 'Qualsevol sector:', text: 'Negocis amb ressenyes entre 4.1 i 4.6 — prou bons per presentar-te, amb marge de millora per motivar canvi.' }
      ]
    },
    cap4: {
      title: 'El primer contacte: estructura i psicologia',
      p1:
        'El primer contacte amb un negoci local és diferent a l\'enterprise en un aspecte fonamental: no hi ha gatekeepers formals, però la guàrdia és igual d\'alta. El propietari d\'un restaurant rep trucades comercials cada setmana. Tens uns 15 segons per diferenciar-te abans que pengi.',
      h3: 'L\'estructura dels primers 30 segons',
      steps: [
        {
          num: '01',
          title: 'Identifica\'t sense disculpar-te',
          desc:
            'Digues el teu nom i empresa amb to segur. Evita "perdona que et molesti" o "només et robo un moment" — comuniquen inseguretat i baixen el valor percebut abans de començar.'
        },
        {
          num: '02',
          title: 'Ancora la trucada amb el seu negoci específic',
          desc:
            'Menciona el nom del negoci i alguna cosa concreta que hagis vist. "Vaig veure que el [nom] té bones ressenyes a Google" o "apareixeu a la nostra base de dades de negocis a [ciutat]". Demostra que no és una trucada massiva.'
        },
        {
          num: '03',
          title: 'Lliura el benefici en una frase',
          desc:
            'Una frase, no un paràgraf. "Treballem amb equips comercials que busquen [sector] a [ciutat] i vosaltres no apareixeu on ells busquen." El benefici ha de ser concret i rellevant per a ells, no per a tu.'
        },
        {
          num: '04',
          title: 'Demana permís per continuar',
          desc:
            '"Tens 2 minuts?" o "És bon moment?" abans de continuar. Inverteix el control: si diuen que sí, han donat permís implícit per escoltar. Si diuen que no, demanes un moment millor — no has perdut el lead.'
        }
      ],
      highlightLabel: 'L\'error més comú en el primer contacte',
      highlightP:
        'Parlar massa del producte. En la primera trucada, l\'objectiu no és vendre — és aconseguir 15 minuts de demo. Com més expliques el producte en fred, més objecions generes abans d\'haver creat cap interès. Vén la reunió, no el software.',
      h3b: 'Email vs trucada: quan usar cada canal',
      p2:
        'Per a negocis locals, el telèfon és el canal primari sense excepcions. Les raons són simples: la majoria no tenen email corporatiu actiu, els que tenen no el revisen regularment, i el ràtio de resposta a cold email en aquest segment és significativament inferior al del mercat enterprise.',
      metrics: [
        { label: 'Cold email només', val: '0.5–2% resposta', note: 'Negocis locals, email genèric' },
        { label: 'Trucada freda directa', val: '8–15% conversa', note: 'Amb qualificació prèvia LOCA' },
        { label: 'Trucada + email seguiment', val: '18–28% taxa demo', note: 'Seqüència multicanal en 72h' },
        { label: 'WhatsApp Business', val: '35–50% obertura', note: 'Només si tens número verificat del negoci' }
      ],
      ctaTitle: 'Scripts llestos per usar per sector',
      ctaDesc: 'Obertures, objecions i tancaments per restaurants, clíniques, tallers i més.',
      ctaBtn: 'Veure scripts →'
    },
    cap5: {
      title: 'Les 6 objecions més comuns i com respondre-les',
      p1:
        'Les objecions en negocis locals són predecibles. Conèixer-les prèviament transforma cada "no" en una bifurcació amb resposta preparada. Aquestes són les sis que trobaràs en el 90% de les trucades:',
      objections: [
        {
          q: '"No tenim temps ara mateix, estem molt atabalat."',
          aLabel: 'Com respondre',
          a: [
            'Requadra l\'objecció: "Precisament per això et truco. Els negocis que van bé mai tenen temps per buscar més feina, només per fer-la. El que et proposo són 15 minuts — tu tries quàn — perquè vegis si això pot sumar al que ja funciona."',
            'La clau: no discutis que estan ocupats. Valida i redirigeix cap a la facilitat del següent pas (una demo breu, a la seva hora).'
          ]
        },
        {
          q: '"Ja tenim prou clients, no necessitem més."',
          aLabel: 'Com respondre',
          a: [
            'Pregunta per l\'estacionalitat: "M\'alegra escoltar-ho. Hi ha algun moment de l\'any — o del mes — en què flaqueja una mica? Perquè el que fem és precisament cobrir aquests forats amb clients empresa que són més previsibles."',
            'Gairebé cap negoci local està al 100% de capacitat tot l\'any. La pregunta per l\'estacionalitat quasi sempre obre una esquerda.'
          ]
        },
        {
          q: '"Envia\'m informació per email i ja et dic."',
          aLabel: 'Com respondre',
          a: [
            'Accepta sense resistència i ancora un proper pas: "Sense problema, t\'ho envio ara. Escolta, abans de penjar — tens 30 segons perquè et digui un número concret de negocis com el teu que busquen els nostres clients a [ciutat] ara mateix? Així l\'email té més context."',
            'L\'email sol rarament converteix. Fes-lo servir com a pont per donar una dada concreta abans de penjar i quedar per al seguiment.'
          ]
        },
        {
          q: '"Quant costa?"',
          aLabel: 'Com respondre',
          a: [
            'Si la pregunta arriba abans de la demo, és un senyal d\'interès que no has de resoldre amb preu encara: "El preu depèn de quants leads necessites i per quina zona. Per això té sentit que primer et mostri el que hi ha disponible — així el preu té context. Demà o demà passat et va millor per 15 minuts?"',
            'Donar preu sense context de valor és el camí més ràpid al "és car". Guanya la demo abans de parlar de números.'
          ]
        },
        {
          q: '"Ja usem [eina]. No necessitem una altra."',
          aLabel: 'Com respondre',
          a: [
            'Qualifica quina eina és i ataca el punt cec: "Entès. I aquesta eina et dóna restaurants, clíniques i tallers amb telèfon verificat a [ciutat]? Perquè la majoria no els tenen — són negocis que no estan a LinkedIn ni a Apollo."',
            'Si l\'eina que fan servir és Apollo, LinkedIn o similar, l\'argument de negocis locals no indexats és directe i difícil de refutar.'
          ]
        },
        {
          q: '"No és el moment, truca\'m en uns mesos."',
          aLabel: 'Com respondre',
          a: [
            'Accepta i concreta: "Sense problema. Et va bé que et truqui al [mes concret]? T\'agendo al calendari ara mateix així no es perd." El lead que diu "en uns mesos" sense data concreta normalment no existeix. Amb data, sí.',
            'Demana sempre un mes concret, i confirma si pot ser la primera o segona setmana. Converteix un "potser" en una cita real.'
          ]
        }
      ]
    },
    cap6: {
      title: 'Mètriques, cadència i què mesurar en prospecció local',
      p1:
        'La prospecció local té benchmarks diferents al B2B enterprise. Abans d\'avaluar si el teu equip rendeix bé o malament, has de comparar amb els números correctes.',
      h3: 'Benchmarks de referència',
      metrics: [
        { label: 'Trucades per aconseguir 1 conversa', val: '6–10 intents', note: 'Amb telèfon verificat i qualificació prèvia' },
        { label: 'Converses per aconseguir 1 demo', val: '4–7 converses', note: 'Amb script d\'obertura optimitzat per sector' },
        { label: 'Demos per tancar 1 client', val: '3–5 demos', note: 'Depèn de ticket i cicle de decisió' },
        { label: 'Temps de cicle de venda', val: '3–10 dies', note: 'Molt més curt que enterprise (setmanes/mesos)' }
      ],
      h3b: 'La cadència recomanada per a prospecció local',
      p2:
        'A diferència de l\'enterprise, on una cadència de 14 passos en 4 setmanes és habitual, els negocis locals responen millor a seqüències més curtes i intensives. El propietari del negoci no recordarà qui ets si contactes una vegada i desapareixes dues setmanes.',
      steps: [
        {
          num: 'D0',
          title: 'Trucada d\'obertura',
          desc:
            'Primera presa de contacte. Si no contesta, deixa un voicemail breu (màx. 20 seg) amb el benefici principal i el teu nom.'
        },
        {
          num: 'D1',
          title: 'Email o WhatsApp de seguiment',
          desc:
            'Referencia el voicemail o la trucada. Inclou una dada concreta de la teva base de dades rellevant per al seu sector/ciutat. CTA: enllaç a Calendly per demo.'
        },
        {
          num: 'D3',
          title: 'Segona trucada',
          desc:
            'Menciona que has enviat informació. Si no ha vist l\'email, resum verbal en 30 segons. Si continua sense interès, pregunta pel millor moment per al seguiment.'
        },
        {
          num: 'D7',
          title: 'Toc final',
          desc:
            'Última trucada amb framing de "tancament de cicle": "Et truco per última vegada abans de deixar de contactar. Si no és el moment, sense problema — però volia assegurar-me que tenies la informació." Aquest to honest té alta taxa de resposta.'
        }
      ],
      calloutLabel: 'Regla d\'or',
      calloutP:
        'Si en 4 intents en 7 dies no has aconseguit cap resposta, el lead no és per ara. Marca\'l per recontactar en 60 dies i passa al següent. La prospecció local funciona per volum qualificat, no per perseverança il·limitada en un sol lead.',
      h3c: 'El KPI que més importa: reunions per setmana',
      p3:
        'En prospecció local, la mètrica que millor prediu l\'èxit comercial no és el nombre de trucades ni d\'emails enviats. És el nombre de demos tancades per setmana. Tot la resta — taxa de contacte, taxa d\'obertura — són mètriques de diagnòstic per optimitzar aquest número final.',
      statCards: [
        { num: '3–5', label: 'Demos/setmana per un SDR a temps parcial en prospecció local' },
        { num: '8–12', label: 'Demos/setmana amb base de dades optimitzada i seqüència multicanal' },
        { num: '+15', label: 'Demos/setmana possibles amb eina de prospecció local dedicada' }
      ],
      ctaTitle: 'Ara tens el marc. Falta la base de dades.',
      ctaP:
        'Accedeix a milers de negocis locals a Espanya amb telèfon verificat, context IA i senyals de compra per lead.',
      ctaBtn: 'Provar NextLeadIn 7 dies gratis →'
    }
  },
  en: {
    toc: [
      { id: 'cap1', num: '01', label: 'Why local' },
      { id: 'cap2', num: '02', label: 'The 7 sectors' },
      { id: 'cap3', num: '03', label: 'How to qualify' },
      { id: 'cap4', num: '04', label: 'First contact' },
      { id: 'cap5', num: '05', label: 'Objections' },
      { id: 'cap6', num: '06', label: 'Metrics and cadence' }
    ],
    hero: {
      intro:
        'Local businesses are the largest B2B segment in Spain and the most invisible to standard prospecting tools. This guide gives you the complete framework to identify, qualify, approach and close meetings — sector by sector.',
      meta: [
        { icon: 'clock', text: '18 min read' },
        { icon: 'clipboard-list', text: '6 chapters' },
        { icon: 'folder-open', text: '7 sectors covered' },
        { icon: 'refresh-cw', text: 'Updated January 2025' }
      ]
    },
    cap1: {
      title: 'Why the local market is the opportunity nobody works',
      p1:
        'When a sales team looks for B2B leads, the first instinct is to open Apollo, LinkedIn Sales Navigator or ZoomInfo. The problem is these platforms were built for medium and large companies with structured digital presence. The family restaurant with 40 covers, the independent dental clinic or the neighbourhood garage are invisible to them.',
      p2:
        "This is not a bug, it's a market feature: local businesses in Spain don't have LinkedIn profiles, don't export data to B2B directories, and rarely have an identifiable decision maker in any public database. Result: 80% of sales teams ignore this segment by default.",
      statCards: [
        { num: '+3.5M', label: 'SMEs and freelancers with premises in Spain (INE 2024)' },
        { num: '<12%', label: 'of them appear in standard B2B databases' },
        { num: '×4', label: 'less prospecting competition vs enterprise market' }
      ],
      p3:
        'The direct consequence is that those who work this market find significantly higher contact and open rates. A sales rep prospecting restaurants or dental clinics doesn\'t compete against ten other SDRs who sent the same email via Apollo last week.',
      calloutLabel: 'Key principle',
      calloutP:
        'The competitive advantage in local prospecting doesn\'t come from better copy or timing. It comes from having access to data the competition doesn\'t have. The first step is solving the information problem.',
      h3: 'The local decision maker profile',
      p4:
        'Unlike enterprise B2B, where the decision maker has a defined role (CPO, CMO, VP Sales), in the local business it\'s usually the owner or manager who makes all decisions. This simplifies the sales process — no need to navigate hierarchies — but introduces other friction:',
      checklist: [
        'The owner receives many sales calls and has a high filter from the first sentence.',
        'They don\'t have time for long decision processes. The sale has to be fast or it won\'t happen.',
        'Trust is built by demonstrating knowledge of their sector and specific situation, not with generic pitches.',
        'They respond better to concrete, immediate benefits than to abstract ROI promises.'
      ]
    },
    cap2: {
      title: 'The 7 sectors with the highest potential in Spain',
      p1:
        'Not all local sectors have the same appeal for prospecting. The table below evaluates each by business volume, ease of access to the decision maker, average ticket and level of existing commercial competition in the segment.',
      tableHeaders: ['Sector', 'Volume', 'Decision maker access', 'Potential ticket', 'Competition'],
      rows: [
        { icon: 'utensils-crossed', sector: 'Restaurants & Hospitality', volumen: 'High', acceso: 'Direct', ticket: 'Medium', competencia: 'Low' },
        { icon: 'stethoscope', sector: 'Dental Clinics', volumen: 'High', acceso: 'Medium', ticket: 'High', competencia: 'Low' },
        { icon: 'wrench', sector: 'Garages & Mechanics', volumen: 'High', acceso: 'Direct', ticket: 'Medium', competencia: 'Very low' },
        { icon: 'building-2', sector: 'Independent Real Estate', volumen: 'Medium', acceso: 'Direct', ticket: 'High', competencia: 'Medium' },
        { icon: 'sparkles', sector: 'Aesthetics & Spa', volumen: 'High', acceso: 'Direct', ticket: 'Medium', competencia: 'Low' },
        { icon: 'graduation-cap', sector: 'Academies & Training', volumen: 'Medium', acceso: 'Medium', ticket: 'Medium', competencia: 'Low' },
        { icon: 'dumbbell', sector: 'Gyms & Fitness', volumen: 'High', acceso: 'Direct', ticket: 'Medium', competencia: 'Medium' }
      ],
      h3: 'How to choose your entry sector',
      p2:
        'If you\'re starting to work the local market, the recommendation is to specialize in one sector for the first 90 days. The reasons are practical:',
      checklist: [
        'You accumulate sector knowledge that improves each call: you know the objections, vocabulary, seasonal problems.',
        'You can build sector social proof faster: "we already work with 12 dental clinics in Madrid" closes more than a generic proposal.',
        'Decision makers in the same sector know each other. A satisfied customer can actively refer.'
      ],
      calloutLabel: 'Entry recommendation',
      calloutP:
        'For a team new to local prospecting, dental clinics or garages are the best starting points: the decision maker is always at the business, the benefit of having more corporate customers is clear, and commercial competition is almost non-existent.'
    },
    cap3: {
      title: 'How to qualify a local business before contacting',
      p1:
        'Efficient local prospecting starts before picking up the phone. Spending 3 minutes researching each business can double the open rate. Here\'s the qualification framework we use.',
      h3: 'The LOCA model',
      p2: 'Four questions you can answer in under 5 minutes per lead:',
      steps: [
        {
          letter: 'L',
          title: 'Location — Is it in the right area?',
          desc:
            'Not just city: neighbourhood and distance to industrial estates or office zones. A garage in an industrial park has more fleet potential than one in a residential area.'
        },
        {
          letter: 'O',
          title: 'Operational — Is it open and active?',
          desc:
            'Confirm updated hours on Google Maps. A business with outdated hours or no recent reviews may be closing. Prioritize those with recent activity.'
        },
        {
          letter: 'C',
          title: 'Capacity — Is there room to grow?',
          desc:
            'Google reviews are a signal: a restaurant with "always full, hard to get a table" isn\'t your customer. Look for good ratings but not saturated.'
        },
        {
          letter: 'A',
          title: 'Accessible — Do you have direct contact?',
          desc:
            'Verified phone and owner name if possible. Avoid businesses with only a web form — the response cycle is too slow for outbound prospecting.'
        }
      ],
      metrics: [
        { label: 'No prior qualification', val: '3–5% open rate', note: 'Cold list call with no context' },
        { label: 'With LOCA model', val: '12–18% open rate', note: 'Same sector, with prior context' },
        { label: 'LOCA + AI context', val: '25–35% open rate', note: 'With review analysis and buying signals' },
        { label: 'Time per lead', val: '3–5 minutes', note: 'Basic manual qualification' }
      ],
      h3b: 'Buying signals to look for',
      p3:
        'Beyond the LOCA model, there are sector-specific signals that indicate a business is receptive to external services:',
      checklist: [
        { sector: 'Restaurants:', text: 'Review mentions of "ideal for groups" or "corporate events" — they already have the infrastructure and interest.' },
        { sector: 'Dental clinics:', text: 'Clinics with 3+ dentists but no mention of corporate agreements on their site — untapped capacity.' },
        { sector: 'Garages:', text: 'Business near industrial park + "home service" or "collection" mention — they already think about convenience for companies.' },
        { sector: 'Academies:', text: 'Courses offered in afternoon/evening — designed for workers, receptive to companies as a channel.' },
        { sector: 'Any sector:', text: 'Businesses with reviews between 4.1 and 4.6 — good enough to approach, with room for improvement to motivate change.' }
      ]
    },
    cap4: {
      title: 'First contact: structure and psychology',
      p1:
        'The first contact with a local business differs from enterprise in one fundamental way: there are no formal gatekeepers, but the guard is just as high. A restaurant owner receives sales calls every week. You have about 15 seconds to stand out before they hang up.',
      h3: 'The structure of the first 30 seconds',
      steps: [
        {
          num: '01',
          title: 'Identify yourself without apologizing',
          desc:
            'Say your name and company with a confident tone. Avoid "sorry to bother you" or "I\'ll only take a moment" — they communicate insecurity and lower perceived value before you start.'
        },
        {
          num: '02',
          title: 'Anchor the call with their specific business',
          desc:
            'Mention the business name and something concrete you\'ve seen. "I saw that [name] has good reviews on Google" or "you appear in our database of businesses in [city]". Show it\'s not a mass call.'
        },
        {
          num: '03',
          title: 'Deliver the benefit in one sentence',
          desc:
            'One sentence, not a paragraph. "We work with sales teams looking for [sector] in [city] and you don\'t appear where they search." The benefit must be concrete and relevant to them, not you.'
        },
        {
          num: '04',
          title: 'Ask permission to continue',
          desc:
            '"Do you have 2 minutes?" or "Is now a good time?" before continuing. Invert control: if they say yes, they\'ve given implicit permission to listen. If they say no, ask for a better time — you haven\'t lost the lead.'
        }
      ],
      highlightLabel: 'The most common mistake in first contact',
      highlightP:
        'Talking too much about the product. In the first call, the goal isn\'t to sell — it\'s to get 15 minutes of demo. The more you explain the product cold, the more objections you create before building any interest. Sell the meeting, not the software.',
      h3b: 'Email vs call: when to use each channel',
      p2:
        'For local businesses, the phone is the primary channel without exception. The reasons are simple: most don\'t have active corporate email, those that do don\'t check it regularly, and the cold email response rate in this segment is significantly lower than enterprise.',
      metrics: [
        { label: 'Cold email only', val: '0.5–2% response', note: 'Local businesses, generic email' },
        { label: 'Direct cold call', val: '8–15% conversation', note: 'With prior LOCA qualification' },
        { label: 'Call + follow-up email', val: '18–28% demo rate', note: 'Multi-channel sequence in 72h' },
        { label: 'WhatsApp Business', val: '35–50% open', note: 'Only if you have verified business number' }
      ],
      ctaTitle: 'Ready-to-use scripts by sector',
      ctaDesc: 'Openings, objections and closes for restaurants, clinics, garages and more.',
      ctaBtn: 'View scripts →'
    },
    cap5: {
      title: 'The 6 most common objections and how to respond',
      p1:
        'Objections in local businesses are predictable. Knowing them in advance turns every "no" into a fork with a prepared response. Here are the six you\'ll find in 90% of calls:',
      objections: [
        {
          q: '"We don\'t have time right now, we\'re very busy."',
          aLabel: 'How to respond',
          a: [
            'Reframe the objection: "That\'s exactly why I\'m calling. Businesses that are doing well never have time to look for more work, only to do it. What I\'m proposing is 15 minutes — you choose when — so you can see if this can add to what already works."',
            'The key: don\'t argue that they\'re busy. Validate and redirect to the ease of the next step (a short demo, at their time).'
          ]
        },
        {
          q: '"We already have enough clients, we don\'t need more."',
          aLabel: 'How to respond',
          a: [
            'Ask about seasonality: "Good to hear. Is there any time of year — or month — when it slows down a bit? Because what we do is exactly cover those gaps with corporate clients who are more predictable."',
            'Almost no local business is at 100% capacity all year. The seasonality question almost always opens a crack.'
          ]
        },
        {
          q: '"Send me information by email and I\'ll let you know."',
          aLabel: 'How to respond',
          a: [
            'Accept without resistance and anchor a next step: "No problem, I\'ll send it now. Before we hang up — do you have 30 seconds for me to tell you a concrete number of businesses like yours that our clients are looking for in [city] right now? So the email has more context."',
            'Email alone rarely converts. Use it as a bridge to give a concrete data point before hanging up and scheduling follow-up.'
          ]
        },
        {
          q: '"How much does it cost?"',
          aLabel: 'How to respond',
          a: [
            'If the question comes before the demo, it\'s an interest signal you shouldn\'t resolve with price yet: "The price depends on how many leads you need and for which area. That\'s why it makes sense for me to show you what\'s available first — so the price has context. Tomorrow or the day after better for 15 minutes?"',
            'Giving price without value context is the fastest path to "it\'s expensive". Win the demo before talking numbers.'
          ]
        },
        {
          q: '"We already use [tool]. We don\'t need another."',
          aLabel: 'How to respond',
          a: [
            'Qualify what tool it is and attack the blind spot: "Understood. And does that tool give you restaurants, clinics and garages with verified phone in [city]? Because most don\'t — they\'re businesses not on LinkedIn or Apollo."',
            'If the tool they use is Apollo, LinkedIn or similar, the non-indexed local businesses argument is direct and hard to rebut.'
          ]
        },
        {
          q: '"It\'s not the right time, call me in a few months."',
          aLabel: 'How to respond',
          a: [
            'Accept and make it concrete: "No problem. Is it ok if I call you in [concrete month]? I\'ll put it in the calendar now so it doesn\'t get lost." A lead who says "in a few months" without a concrete date usually doesn\'t exist. With a date, they do.',
            'Always ask for a concrete month, and confirm if it can be the first or second week. Turn a "maybe" into a real appointment.'
          ]
        }
      ]
    },
    cap6: {
      title: 'Metrics, cadence and what to measure in local prospecting',
      p1:
        'Local prospecting has different benchmarks than enterprise B2B. Before evaluating whether your team is performing well or poorly, you need to compare with the right numbers.',
      h3: 'Reference benchmarks',
      metrics: [
        { label: 'Calls to get 1 conversation', val: '6–10 attempts', note: 'With verified phone and prior qualification' },
        { label: 'Conversations to get 1 demo', val: '4–7 conversations', note: 'With sector-optimized opening script' },
        { label: 'Demos to close 1 customer', val: '3–5 demos', note: 'Depends on ticket and decision cycle' },
        { label: 'Sales cycle time', val: '3–10 days', note: 'Much shorter than enterprise (weeks/months)' }
      ],
      h3b: 'Recommended cadence for local prospecting',
      p2:
        'Unlike enterprise, where a 14-step cadence over 4 weeks is common, local businesses respond better to shorter, more intense sequences. The business owner won\'t remember you if you contact once and disappear for two weeks.',
      steps: [
        {
          num: 'D0',
          title: 'Opening call',
          desc:
            'First contact. If they don\'t answer, leave a brief voicemail (max 20 sec) with the main benefit and your name.'
        },
        {
          num: 'D1',
          title: 'Email or WhatsApp follow-up',
          desc:
            'Reference the voicemail or call. Include a concrete data point from your database relevant to their sector/city. CTA: Calendly link for demo.'
        },
        {
          num: 'D3',
          title: 'Second call',
          desc:
            'Mention you sent information. If they haven\'t seen the email, verbal summary in 30 seconds. If still no interest, ask for the best time for follow-up.'
        },
        {
          num: 'D7',
          title: 'Final touch',
          desc:
            'Last call with "cycle close" framing: "I\'m calling you one last time before I stop contacting. If it\'s not the right time, no problem — but I wanted to make sure you had the information." This honest tone has a high response rate.'
        }
      ],
      calloutLabel: 'Golden rule',
      calloutP:
        'If in 4 attempts over 7 days you haven\'t gotten any response, the lead isn\'t for now. Mark for recontact in 60 days and move to the next. Local prospecting works through qualified volume, not unlimited perseverance on a single lead.',
      h3c: 'The KPI that matters most: meetings per week',
      p3:
        'In local prospecting, the metric that best predicts commercial success isn\'t number of calls or emails sent. It\'s number of demos closed per week. Everything else — contact rate, open rate — are diagnostic metrics to optimize that final number.',
      statCards: [
        { num: '3–5', label: 'Demos/week for a part-time SDR in local prospecting' },
        { num: '8–12', label: 'Demos/week with optimized database and multi-channel sequence' },
        { num: '+15', label: 'Demos/week possible with dedicated local prospecting tool' }
      ],
      ctaTitle: 'Now you have the framework. You need the database.',
      ctaP:
        'Access thousands of local businesses in Spain with verified phone, AI context and buying signals per lead.',
      ctaBtn: 'Try NextLeadIn free for 7 days →'
    }
  }
}
