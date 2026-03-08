/**
 * Dades dels scripts de cold calling per sector.
 * Tipus: apertura | objecion | cierre | voicemail
 */
export type ScriptType = 'apertura' | 'objecion' | 'cierre' | 'voicemail'

export type SectorId = 'restaurantes' | 'dental' | 'talleres' | 'inmobiliarias' | 'estetica' | 'academia'

export interface ScriptItem {
  id: string
  type: ScriptType
  name: Record<'es' | 'ca' | 'en', string>
  text: Record<'es' | 'ca' | 'en', string>
  tips: Record<'es' | 'ca' | 'en', string[]>
}

export type SectorIconName =
  | 'utensils-crossed'
  | 'stethoscope'
  | 'wrench'
  | 'building-2'
  | 'sparkles'
  | 'graduation-cap'

export interface Sector {
  id: SectorId
  icon: SectorIconName
  title: Record<'es' | 'ca' | 'en', string>
  description: Record<'es' | 'ca' | 'en', string>
  scripts: ScriptItem[]
}

export const sectors: Sector[] = [
  {
    id: 'restaurantes',
    icon: 'utensils-crossed',
    title: { es: 'Restaurantes y Hostelería', ca: 'Restaurants i Hostaleria', en: 'Restaurants & Hospitality' },
    description: {
      es: 'Bares, restaurantes, cafeterías, catering — el sector más ignorado por Apollo y ZoomInfo',
      ca: "Barres, restaurants, cafeteries, càtering — el sector més ignorat per Apollo i ZoomInfo",
      en: 'Bars, restaurants, cafés, catering — the sector most ignored by Apollo and ZoomInfo'
    },
    scripts: [
      {
        id: 'r1',
        type: 'apertura',
        name: {
          es: 'Primera llamada — Dueño desconoce que existe la herramienta',
          ca: "Primera trucada — El propietari desconeix que existeix l'eina",
          en: "First call — Owner doesn't know the tool exists"
        },
        text: {
          es: `TÚ: Buenas, ¿hablo con [nombre del dueño / gerente]? Soy [tu nombre] de NextLeadIn.

Mira, te llamo en 30 segundos porque encontré [nombre del restaurante] en nuestra base de datos de negocios locales en España, y quería avisarte de algo que otros restaurantes de [ciudad] están usando para atraer más mesas corporativas.

Tenemos equipos de ventas que buscan restaurantes como el tuyo para cenas de empresa, eventos de equipo y comidas de directivos. El problema es que no aparecéis en las herramientas que ellos usan.

¿Tienes 2 minutos para que te cuente cómo funciona?`,
          ca: `TU: Bon dia, parlo amb [nom del propietari / gerent]? Sóc [el teu nom] de NextLeadIn.

Mira, et truco en 30 segons perquè he trobat [nom del restaurant] a la nostra base de dades de negocis locals a Espanya, i volia avisar-te d'algun que altres restaurants de [ciutat] estan fent servir per atraure més taules corporatives.

Tenim equips de vendes que busquen restaurants com el teu per sopars d'empresa, esdeveniments d'equip i menjars de directius. El problema és que no apareixeu a les eines que ells fan servir.

Tens 2 minuts perquè et expliqui com funciona?`,
          en: `YOU: Hi, am I speaking with [owner/manager name]? I'm [your name] from NextLeadIn.

Look, I'm calling you in 30 seconds because I found [restaurant name] in our database of local businesses in Spain, and I wanted to tell you something that other restaurants in [city] are using to attract more corporate bookings.

We have sales teams looking for restaurants like yours for corporate dinners, team events and executive lunches. The problem is you don't appear in the tools they use.

Do you have 2 minutes for me to explain how it works?`
        },
        tips: {
          es: [
            'Si coge el teléfono alguien del equipo, pregunta por "la persona que gestiona el negocio o el propietario"',
            '"Mesas corporativas" activa el interés — es dinero fácil para ellos',
            'No menciones precio en la primera llamada'
          ],
          ca: [
            "Si rep el telèfon algú de l'equip, pregunta per 'la persona que gestiona el negoci o el propietari'",
            '"Taules corporatives" activa l\'interès — és diner fàcil per ells',
            'No mencionis preu a la primera trucada'
          ],
          en: [
            "If someone from the team answers, ask for 'the person who runs the business or the owner'",
            '"Corporate bookings" triggers interest — it\'s easy money for them',
            "Don't mention price on the first call"
          ]
        }
      },
      {
        id: 'r2',
        type: 'objecion',
        name: {
          es: '"Ya tenemos suficientes clientes, no necesitamos más"',
          ca: '"Ja tenim prou clients, no necessitem més"',
          en: '"We already have enough clients, we don\'t need more"'
        },
        text: {
          es: `ELLOS: Gracias, pero ahora mismo estamos bien de trabajo.

TÚ: Me alegra escucharlo, de verdad. Entonces te pregunto lo contrario: ¿cuándo bajan los comensales? ¿Lunes y martes? ¿Enero y febrero?

Porque lo que hacemos es que equipos comerciales de empresas reserven precisamente en esas horas muertas. Sin comisión de por medio, directamente en tu teléfono.

No te pido nada ahora. Solo 15 minutos de demo para que veas si tiene sentido para [nombre restaurante]. ¿Cuándo tienes un hueco esta semana?`,
          ca: `ELLS: Gràcies, però ara mateix estem bé de feina.

TU: M'alegra sentir-ho, de veritat. Llavors et pregunto el contrari: quan baixen els comensals? Dilluns i dimarts? Gener i febrer?

Perquè el que fem és que equips comercials d'empreses reservin precisament en aquestes hores mortes. Sense comissió de per mig, directament al teu telèfon.

No et demano res ara. Només 15 minuts de demo perquè vegis si té sentit per [nom restaurant]. Quan tens un forat aquesta setmana?`,
          en: `THEM: Thanks, but we're fine for work right now.

YOU: I'm glad to hear it, really. So let me ask the opposite: when do bookings drop? Mondays and Tuesdays? January and February?

Because what we do is get corporate sales teams to book precisely in those slow slots. No commission, straight to your phone.

I'm not asking for anything now. Just 15 minutes of demo so you can see if it makes sense for [restaurant name]. When do you have a slot this week?`
        },
        tips: {
          es: [
            'La pregunta "¿cuándo bajan los comensales?" es clave — casi todos tienen horas muertas',
            'Reformula el beneficio en términos de su problema real, no del tuyo'
          ],
          ca: [
            "La pregunta 'quan baixen els comensals?' és clau — gairebé tots tenen hores mortes",
            "Reformula el benefici en termes del seu problema real, no del teu"
          ],
          en: [
            'The question "when do bookings drop?" is key — almost everyone has slow periods',
            'Reframe the benefit in terms of their real problem, not yours'
          ]
        }
      },
      {
        id: 'r3',
        type: 'cierre',
        name: {
          es: 'Cerrar demo después de interés inicial',
          ca: 'Tancar demo després d\'interès inicial',
          en: 'Close demo after initial interest'
        },
        text: {
          es: `TÚ: Bien, entonces lo que te propongo es lo siguiente.

Te monto una demo en vivo de 15 minutos donde te muestro exactamente cuántos comerciales en [ciudad] buscan restaurantes como [nombre restaurante] ahora mismo. Sin compromiso, sin tarjeta.

Tengo hueco el [día] por la mañana o el [día] por la tarde. ¿Cuál te va mejor?`,
          ca: `TU: Bé, llavors el que et proposo és el següent.

Et munt una demo en directe de 15 minuts on et mostro exactament quants comercials a [ciutat] busquen restaurants com [nom restaurant] ara mateix. Sense compromís, sense targeta.

Tinc forat el [dia] al matí o el [dia] a la tarda. Quin et va millor?`,
          en: `YOU: Right, so here's what I propose.

I'll set up a live 15-minute demo where I show you exactly how many salespeople in [city] are looking for restaurants like [restaurant name] right now. No commitment, no card required.

I have availability on [day] morning or [day] afternoon. Which works better for you?`
        },
        tips: {
          es: [
            'Siempre da dos opciones concretas — no preguntes "¿cuándo tienes tiempo?"',
            '"Sin tarjeta" elimina la fricción final',
            'Si dicen que no a las dos opciones, pregunta directamente "¿Cuál semana te va mejor?"'
          ],
          ca: [
            "Sempre dona dues opcions concretes — no preguntis 'quan tens temps?'",
            '"Sense targeta" elimina la fricció final',
            "Si diuen que no a les dues opcions, pregunta directament 'Quina setmana et va millor?'"
          ],
          en: [
            'Always give two concrete options — never ask "when do you have time?"',
            '"No card" removes final friction',
            "If they say no to both options, ask directly 'Which week works better for you?'"
          ]
        }
      }
    ]
  },
  {
    id: 'dental',
    icon: 'stethoscope',
    title: { es: 'Clínicas Dentales', ca: 'Clíniques Dentals', en: 'Dental Clinics' },
    description: {
      es: 'Clínicas independientes y grupos pequeños — alto ticket, muy receptivos a nuevos pacientes',
      ca: 'Clíniques independents i grups petits — ticket alt, molt receptius a nous pacients',
      en: 'Independent clinics and small groups — high ticket, very receptive to new patients'
    },
    scripts: [
      {
        id: 'd1',
        type: 'apertura',
        name: {
          es: 'Primera llamada — Jefe de clínica o responsable comercial',
          ca: "Primera trucada — Cap de clínica o responsable comercial",
          en: 'First call — Clinic manager or commercial lead'
        },
        text: {
          es: `TÚ: Hola, ¿es la Clínica [nombre]? Busco hablar con el responsable de gestión o el director.

[Una vez al teléfono:]

Buenos días, soy [nombre] de NextLeadIn. Os llamo porque trabajamos con equipos de ventas de empresas en [ciudad] que buscan clínicas dentales de confianza para ofrecer convenios a sus empleados.

La clínica [nombre] aparece en nuestra base de datos y encajáis con el perfil. El proceso es simple: los empleados de la empresa os llaman directamente, vosotros ponéis las condiciones.

¿Tenéis algún convenio de empresa ahora mismo, o es algo que no habíais explorado?`,
          ca: `TU: Hola, és la Clínica [nom]? Busco parlar amb el responsable de gestió o el director.

[Un cop al telèfon:]

Bon dia, sóc [nom] de NextLeadIn. Us truco perquè treballem amb equips de vendes d'empreses a [ciutat] que busquen clíniques dentals de confiança per oferir convenis als seus empleats.

La clínica [nom] apareix a la nostra base de dades i encaixeu amb el perfil. El procés és simple: els empleats de l'empresa us truquen directament, vosaltres poseu les condicions.

Teniu algun conveni d'empresa ara mateix, o és una cosa que no havíeu explorat?`,
          en: `YOU: Hi, is this [name] Clinic? I'm looking to speak with the practice manager or director.

[Once on the phone:]

Good morning, I'm [name] from NextLeadIn. I'm calling because we work with corporate sales teams in [city] looking for trusted dental clinics to offer agreements to their employees.

[name] Clinic appears in our database and you fit the profile. The process is simple: employees call you directly, you set the terms.

Do you have any corporate agreements right now, or is it something you haven't explored?`
        },
        tips: {
          es: [
            'La pregunta final es de calificación — si ya tienen convenio, el ángulo cambia',
            'Habla con el director/propietario, no con la recepcionista si puedes evitarlo',
            'El framing "vosotros ponéis las condiciones" quita el miedo al descuento obligado'
          ],
          ca: [
            "La pregunta final és de qualificació — si ja tenen conveni, l'angle canvia",
            "Parla amb el director/propietari, no amb la recepcionista si pots evitar-ho",
            'El framing "vosaltres poseu les condicions" treu la por al descompte obligat'
          ],
          en: [
            "The final question qualifies — if they already have agreements, the angle changes",
            'Speak with the director/owner, not the receptionist if you can avoid it',
            'The framing "you set the terms" removes fear of forced discount'
          ]
        }
      },
      {
        id: 'd2',
        type: 'objecion',
        name: {
          es: '"Mándame información por email y ya te digo"',
          ca: '"Envia\'m informació per email i ja et dic"',
          en: '"Send me info by email and I\'ll get back to you"'
        },
        text: {
          es: `ELLOS: Mira, mándame algo por email y ya te llamo yo si me interesa.

TÚ: Sin problema, te lo mando ahora mismo.

Oye, antes de colgar — ¿tienes 30 segundos para que te cuente el número concreto de búsquedas de clínicas dentales que hay en [ciudad] ahora mismo? Así cuando leas el email ya tienes contexto.

[Si dice sí:]

Perfecto. En [ciudad], en nuestra plataforma hay [X] comerciales buscando clínica dental en este momento. Y la mayoría de clínicas independientes no aparecen porque no están en los directorios que estos equipos usan. 

¿Tiene sentido que hablemos 15 minutos esta semana para que te enseñe cómo aparecería [nombre clínica]?`,
          ca: `ELLS: Mira, envia'm alguna cosa per email i ja et truco jo si m'interessa.

TU: Sense problema, t'ho envio ara mateix.

Escolta, abans de penjar — tens 30 segons perquè et expliqui el nombre concret de recerques de clíniques dentals que hi ha a [ciutat] ara mateix? Així quan llegeixis l'email ja tens context.

[Si diu sí:]

Perfecte. A [ciutat], a la nostra plataforma hi ha [X] comercials buscant clínica dental en aquest moment. I la majoria de clíniques independents no apareixen perquè no estan als directoris que aquests equips fan servir.

Té sentit que parlem 15 minuts aquesta setmana perquè et mostri com apareixeria [nom clínica]?`,
          en: `THEM: Look, send me something by email and I'll call you back if I'm interested.

YOU: No problem, I'll send it right now.

Hey, before we hang up — do you have 30 seconds for me to tell you the exact number of dental clinic searches in [city] right now? That way when you read the email you'll have context.

[If they say yes:]

Perfect. In [city], on our platform there are [X] salespeople looking for a dental clinic right now. And most independent clinics don't appear because they're not in the directories these teams use.

Does it make sense for us to talk 15 minutes this week so I can show you how [clinic name] would appear?`
        },
        tips: {
          es: [
            'Envía el email siempre — pero úsalo como excusa para dar un dato concreto',
            'El "dato de búsquedas" es poderoso — personalízalo con datos reales de NextLeadIn si los tienes',
            'Si dice no a los 30 segundos, manda el email y haz seguimiento en 48h'
          ],
          ca: [
            "Envia l'email sempre — però fes-lo servir com a excusa per donar una dada concreta",
            'La "dada de recerques" és potent — personalitza amb dades reals de NextLeadIn si les tens',
            "Si diu no als 30 segons, envia l'email i fes seguiment en 48h"
          ],
          en: [
            'Always send the email — but use it as an excuse to give a concrete stat',
            'The "search stat" is powerful — personalize with real NextLeadIn data if you have it',
            "If they say no to 30 seconds, send the email and follow up in 48h"
          ]
        }
      },
      {
        id: 'd3',
        type: 'voicemail',
        name: {
          es: 'Mensaje de voz si no cogen el teléfono',
          ca: "Missatge de veu si no rep el telèfon",
          en: 'Voicemail when they don\'t answer'
        },
        text: {
          es: `TÚ: Hola, mensaje para el responsable de la Clínica [nombre].

Soy [nombre] de NextLeadIn. Os llamo porque hay empresas en [ciudad] buscando clínica dental ahora mismo y vuestro nombre aparece en nuestra base de datos.

Solo quería avisar — sin compromiso ninguno.

Me podéis devolver la llamada al [teléfono] o escribirme a [email]. Gracias.`,
          ca: `TU: Hola, missatge per al responsable de la Clínica [nom].

Sóc [nom] de NextLeadIn. Us truco perquè hi ha empreses a [ciutat] buscant clínica dental ara mateix i el vostre nom apareix a la nostra base de dades.

Només volia avisar — sense compromís cap.

Em podeu tornar la trucada al [telèfon] o escriure'm a [email]. Gràcies.`,
          en: `YOU: Hi, message for the person in charge of [name] Clinic.

I'm [name] from NextLeadIn. I'm calling because there are companies in [city] looking for a dental clinic right now and your name appears in our database.

I just wanted to let you know — no commitment at all.

You can call me back at [phone] or email me at [email]. Thanks.`
        },
        tips: {
          es: [
            'Voicemail breve — máximo 20 segundos',
            '"Sin compromiso ninguno" baja la guardia para la devolución',
            'Llama de nuevo a las 48h si no hay respuesta'
          ],
          ca: [
            "Voicemail breu — màxim 20 segons",
            '"Sense compromís cap" baixa la guàrdia per a la devolució',
            'Truca de nou a les 48h si no hi ha resposta'
          ],
          en: [
            'Keep voicemail short — max 20 seconds',
            '"No commitment at all" lowers their guard for the callback',
            'Call again in 48h if no response'
          ]
        }
      }
    ]
  },
  {
    id: 'talleres',
    icon: 'wrench',
    title: { es: 'Talleres Mecánicos y Automoción', ca: 'Tallers Mecànics i Automoció', en: 'Mechanical Workshops & Automotive' },
    description: {
      es: 'Talleres independientes, ITV, carrocerías — flota de empresa es su mayor oportunidad',
      ca: 'Tallers independents, ITV, carrosseries — flota d\'empresa és la seva major oportunitat',
      en: 'Independent workshops, MOT, bodywork — fleet is their biggest opportunity'
    },
    scripts: [
      {
        id: 't1',
        type: 'apertura',
        name: {
          es: 'Primera llamada — Ángulo flota de empresa',
          ca: "Primera trucada — Angle flota d'empresa",
          en: 'First call — Corporate fleet angle'
        },
        text: {
          es: `TÚ: Hola, ¿hablo con el dueño o encargado del Taller [nombre]?

[Una vez al teléfono:]

Buenas, soy [nombre] de NextLeadIn. Os llamo rápido porque trabajamos con departamentos de compras de empresas que tienen flota de vehículos y buscan talleres de confianza en [ciudad] para hacer contratos de mantenimiento anuales.

He visto que el taller [nombre] estáis bien situados y tenéis buenas referencias. ¿Tenéis capacidad ahora mismo para trabajar con flotas de empresa, o estáis al límite?`,
          ca: `TU: Hola, parlo amb el propietari o encarregat del Taller [nom]?

[Un cop al telèfon:]

Bones, sóc [nom] de NextLeadIn. Us truco ràpid perquè treballem amb departaments de compres d'empreses que tenen flota de vehicles i busquen tallers de confiança a [ciutat] per fer contractes de manteniment anuals.

He vist que el taller [nom] esteu ben situats i teniu bones referències. Teniu capacitat ara mateix per treballar amb flotes d'empresa, o esteu al límit?`,
          en: `YOU: Hi, am I speaking with the owner or manager of [name] Workshop?

[Once on the phone:]

Hi, I'm [name] from NextLeadIn. I'm calling quickly because we work with corporate procurement departments that have vehicle fleets and are looking for trusted workshops in [city] for annual maintenance contracts.

I've seen that [name] Workshop is well located and has good references. Do you have capacity right now to work with corporate fleets, or are you at limit?`
        },
        tips: {
          es: [
            '"Contratos anuales" es el gancho — ingreso recurrente, no puntual',
            'La pregunta "¿o estáis al límite?" invierte la dinámica — ellos quieren demostrar que tienen capacidad',
            'Menciona siempre "bien situados" aunque no lo hayas verificado — genera rapport'
          ],
          ca: [
            '"Contractes anuals" és el ganxo — ingress recurrent, no puntual',
            "La pregunta 'o esteu al límit?' inverteix la dinàmica — ells volen demostrar que tenen capacitat",
            "Mentiona sempre 'ben situats' encara que no l'hagis verificat — genera rapport"
          ],
          en: [
            '"Annual contracts" is the hook — recurring revenue, not one-off',
            'The question "or are you at limit?" flips the dynamic — they want to show they have capacity',
            'Always mention "well located" even if you haven\'t verified — builds rapport'
          ]
        }
      },
      {
        id: 't2',
        type: 'objecion',
        name: {
          es: '"No tenemos tiempo para reuniones"',
          ca: '"No tenim temps per reunions"',
          en: '"We don\'t have time for meetings"'
        },
        text: {
          es: `ELLOS: Es que ahora mismo estamos muy liados, no tenemos tiempo.

TÚ: Lo entiendo perfectamente — y precisamente por eso os llamo. Los negocios que funcionan bien nunca tienen tiempo para buscar más trabajo, solo para hacerlo.

Lo que te propongo no es una reunión larga. Son 15 minutos por videollamada, a la hora que tú digas, para que veas exactamente qué tipo de empresas buscan taller en [ciudad] ahora mismo.

Si ves que no encaja, cerramos y sin problema. ¿El [día] a las [hora] te funcionaría?`,
          ca: `ELLS: És que ara mateix estem molt ocupats, no tenim temps.

TU: Ho entenc perfectament — i precisament per això us truco. Els negocis que funcionen bé mai tenen temps per buscar més feina, només per fer-la.

El que et proposo no és una reunió llarga. Són 15 minuts per videotrucada, a l'hora que tu diguis, perquè vegis exactament quin tipus d'empreses busquen taller a [ciutat] ara mateix.

Si veus que no encaixa, tanquem i sense problema. El [dia] a les [hora] et funcionaria?`,
          en: `THEM: It's just that right now we're really busy, we don't have time.

YOU: I understand perfectly — and that's exactly why I'm calling. Businesses that work well never have time to look for more work, only to do it.

What I'm proposing isn't a long meeting. It's 15 minutes by video call, whenever suits you, so you can see exactly what type of companies are looking for a workshop in [city] right now.

If you see it doesn't fit, we close and no problem. Would [day] at [time] work for you?`
        },
        tips: {
          es: [
            '"Los negocios que funcionan bien nunca tienen tiempo" — validación que no suena a adulación barata',
            'Videollamada es mejor que presencial para este perfil — menos fricción'
          ],
          ca: [
            '"Els negocis que funcionen bé mai tenen temps" — validació que no sona a adulació barata',
            'La videotrucada és millor que presencial per aquest perfil — menys fricció'
          ],
          en: [
            '"Businesses that work well never have time" — validation that doesn\'t sound like cheap flattery',
            'Video call is better than in-person for this profile — less friction'
          ]
        }
      }
    ]
  },
  {
    id: 'inmobiliarias',
    icon: 'building-2',
    title: { es: 'Inmobiliarias Independientes', ca: 'Immobiliàries Independents', en: 'Independent Real Estate Agencies' },
    description: {
      es: 'Agencias locales que necesitan inversores, promotores y empresas como clientes',
      ca: 'Agències locals que necessiten inversors, promotors i empreses com a clients',
      en: 'Local agencies that need investors, developers and companies as clients'
    },
    scripts: [
      {
        id: 'i1',
        type: 'apertura',
        name: {
          es: 'Primera llamada — Ángulo B2B corporativo',
          ca: "Primera trucada — Angle B2B corporatiu",
          en: 'First call — Corporate B2B angle'
        },
        text: {
          es: `TÚ: Hola, ¿hablo con [nombre del agente o director] de [nombre agencia]?

Soy [nombre] de NextLeadIn. Te llamo porque tenemos equipos de RRHH y relocation de empresas que buscan agencias inmobiliarias en [ciudad] para gestionar traslados de empleados y búsqueda de oficinas.

Son operaciones recurrentes — cada vez que la empresa incorpora personal o cambia de sede. Y la mayoría de agencias locales no llegan a estos clientes porque no están visibles en las herramientas que ellos usan.

¿Trabajáis ahora mismo con alguna empresa, o vuestro negocio es mayoritariamente particular?`,
          ca: `TU: Hola, parlo amb [nom de l'agent o director] de [nom agència]?

Sóc [nom] de NextLeadIn. Et truco perquè tenim equips de RRHH i relocalització d'empreses que busquen agències immobiliàries a [ciutat] per gestionar trasllats d'empleats i recerca d'oficines.

Són operacions recurrents — cada vegada que l'empresa incorpora personal o canvia de seu. I la majoria d'agències locals no arriben a aquests clients perquè no són visibles a les eines que ells fan servir.

Treballeu ara mateix amb alguna empresa, o el vostre negoci és majoritàriament particular?`,
          en: `YOU: Hi, am I speaking with [agent or director name] at [agency name]?

I'm [name] from NextLeadIn. I'm calling because we have HR and relocation teams looking for real estate agencies in [city] to manage employee relocations and office searches.

These are recurring operations — every time the company hires or changes HQ. And most local agencies don't reach these clients because they're not visible in the tools they use.

Are you working with any companies right now, or is your business mostly private clients?`
        },
        tips: {
          es: [
            '"Relocation" es una palabra que activa inmediatamente a los agentes más sofisticados',
            'La pregunta final cualifica — si ya tienen B2B, el ángulo es "ampliar cartera"'
          ],
          ca: [
            '"Relocalització" és una paraula que activa immediatament els agents més sofisticats',
            "La pregunta final qualifica — si ja tenen B2B, l'angle és 'ampliar cartera'"
          ],
          en: [
            '"Relocation" is a word that immediately triggers the most sophisticated agents',
            "The final question qualifies — if they already have B2B, the angle is 'expand portfolio'"
          ]
        }
      },
      {
        id: 'i2',
        type: 'cierre',
        name: {
          es: 'Cerrar después de interés — Propuesta de demo',
          ca: 'Tancar després d\'interès — Proposta de demo',
          en: 'Close after interest — Demo proposal'
        },
        text: {
          es: `TÚ: Perfecto, entonces tiene sentido que te enseñe la herramienta.

En la demo te muestro tres cosas concretas:
Uno — cuántas empresas en [ciudad] tienen necesidades activas de inmueble ahora mismo.
Dos — cómo aparece vuestra agencia en las búsquedas que ellos hacen.
Tres — qué hace falta cambiar para que os contacten directamente.

Son 15 minutos máximo. ¿Mañana a las 10 o pasado a las 16 te va mejor?`,
          ca: `TU: Perfecte, llavors té sentit que et mostri l'eina.

A la demo et mostro tres coses concretes:
Un — quantes empreses a [ciutat] tenen necessitats actives d'immoble ara mateix.
Dos — com apareix la vostra agència a les recerques que ells fan.
Tres — què cal canviar perquè us contactin directament.

Són 15 minuts màxim. Demà a les 10 o passat demà a les 16 et va millor?`,
          en: `YOU: Perfect, so it makes sense for me to show you the tool.

In the demo I show you three concrete things:
One — how many companies in [city] have active property needs right now.
Two — how your agency appears in the searches they do.
Three — what needs to change so they contact you directly.

15 minutes max. Tomorrow at 10 or the day after at 4pm — which works better?`
        },
        tips: {
          es: [
            'Estructura "Uno, Dos, Tres" da sensación de agenda preparada — profesionalidad',
            'Siempre dos opciones de horario, nunca preguntas abiertas'
          ],
          ca: [
            "Estructura 'Un, Dos, Tres' dona sensació d'agenda preparada — professionalitat",
            'Sempre dues opcions d\'horari, mai preguntes obertes'
          ],
          en: [
            '"One, Two, Three" structure gives a prepared agenda feel — professionalism',
            'Always two time options, never open questions'
          ]
        }
      }
    ]
  },
  {
    id: 'estetica',
    icon: 'sparkles',
    title: { es: 'Centros de Estética y Spa', ca: 'Centres d\'Estètica i Spa', en: 'Aesthetic & Spa Centres' },
    description: {
      es: 'Centros independientes que pueden crecer con convenios de empresa y bonos corporativos',
      ca: 'Centres independents que poden créixer amb convenis d\'empresa i bonos corporatius',
      en: 'Independent centres that can grow with corporate agreements and wellness vouchers'
    },
    scripts: [
      {
        id: 'e1',
        type: 'apertura',
        name: {
          es: 'Primera llamada — Ángulo bienestar corporativo',
          ca: "Primera trucada — Angle benestar corporatiu",
          en: 'First call — Corporate wellness angle'
        },
        text: {
          es: `TÚ: Hola, ¿hablo con la responsable de [nombre centro]?

Soy [nombre] de NextLeadIn. Os llamo porque muchas empresas en [ciudad] están ofreciendo ahora bonos de bienestar a sus empleados — masajes, tratamientos, spa — como parte del paquete de beneficios.

Los departamentos de RRHH buscan centros cercanos a sus oficinas, y [nombre centro] aparecéis en nuestra base de datos como opción cercana a varios polígonos y zonas de oficinas.

¿Habéis trabajado alguna vez con empresas o es algo que no habíais considerado todavía?`,
          ca: `TU: Hola, parlo amb la responsable de [nom centre]?

Sóc [nom] de NextLeadIn. Us truco perquè moltes empreses a [ciutat] estan oferint ara bonos de benestar als seus empleats — massatges, tractaments, spa — com a part del paquet de beneficis.

Els departaments de RRHH busquen centres propers a les seves oficines, i [nom centre] apareixeu a la nostra base de dades com a opció propera a diversos polígons i zones d'oficines.

Heu treballat alguna vegada amb empreses o és una cosa que no havíeu considerat encara?`,
          en: `YOU: Hi, am I speaking with the person in charge of [centre name]?

I'm [name] from NextLeadIn. I'm calling because many companies in [city] are now offering wellness vouchers to their employees — massages, treatments, spa — as part of their benefits package.

HR departments look for centres near their offices, and [centre name] appears in our database as an option near several business parks and office areas.

Have you ever worked with companies or is it something you haven't considered yet?`
        },
        tips: {
          es: [
            '"Bonos de bienestar para empleados" es tendencia real — resuena bien con este perfil',
            'Mencionar "cerca de sus oficinas" da credibilidad y concreción',
            'Tono más amable que en otros sectores — perfil más relacional'
          ],
          ca: [
            '"Bonos de benestar per empleats" és tendència real — resona bé amb aquest perfil',
            "Mentionar 'a prop de les seves oficines' dóna credibilitat i concreció",
            "Tó més amable que en altres sectors — perfil més relacional"
          ],
          en: [
            '"Wellness vouchers for employees" is a real trend — resonates with this profile',
            'Mentioning "near their offices" gives credibility and concreteness',
            'Warmer tone than other sectors — more relational profile'
          ]
        }
      }
    ]
  },
  {
    id: 'academia',
    icon: 'graduation-cap',
    title: { es: 'Academias y Formación', ca: 'Acadèmies i Formació', en: 'Academies & Training' },
    description: {
      es: 'Academias de idiomas, formación profesional, cursos técnicos — crecen con clientes empresa',
      ca: 'Acadèmies d\'idiomes, formació professional, cursos tècnics — creixen amb clients empresa',
      en: 'Language academies, vocational training, technical courses — grow with corporate clients'
    },
    scripts: [
      {
        id: 'ac1',
        type: 'apertura',
        name: {
          es: 'Primera llamada — Ángulo formación para empresa',
          ca: "Primera trucada — Angle formació per empresa",
          en: 'First call — Corporate training angle'
        },
        text: {
          es: `TÚ: Hola, ¿es [nombre academia]? ¿Hablo con el director o responsable?

Soy [nombre] de NextLeadIn. Os llamo porque tenemos empresas en [ciudad] buscando academias para formar a su equipo — inglés de negocios, Excel avanzado, habilidades de comunicación.

El problema es que la mayoría de academias locales no aparecen en las búsquedas que hacen los departamentos de RRHH o L&D de estas empresas. Vosotros tenéis el contenido — falta visibilidad ante el cliente correcto.

¿Hacéis ya formación in-company o bonificada para empresas, o estáis más enfocados en alumnos particulares?`,
          ca: `TU: Hola, és [nom acadèmia]? Parlo amb el director o responsable?

Sóc [nom] de NextLeadIn. Us truco perquè tenim empreses a [ciutat] buscant acadèmies per formar el seu equip — anglès de negocis, Excel avançat, habilitats de comunicació.

El problema és que la majoria d'acadèmies locals no apareixen a les recerques que fan els departaments de RRHH o L&D d'aquestes empreses. Vosaltres teniu el contingut — falta visibilitat davant el client correcte.

Feu ja formació in-company o bonificada per empreses, o esteu més enfocats en alumnes particulars?`,
          en: `YOU: Hi, is this [academy name]? Am I speaking with the director or person in charge?

I'm [name] from NextLeadIn. I'm calling because we have companies in [city] looking for academies to train their team — business English, advanced Excel, communication skills.

The problem is most local academies don't appear in the searches HR or L&D departments do. You have the content — what's missing is visibility to the right client.

Do you already do in-company or subsidized training for companies, or are you more focused on individual students?`
        },
        tips: {
          es: [
            '"L&D" (Learning & Development) — úsalo si percibes que el interlocutor es sofisticado',
            'La pregunta final cualifica rápido — adapta el pitch según respuesta',
            'Si ya tienen empresa como clientes, el ángulo es "amplia cartera con NextLeadIn"'
          ],
          ca: [
            '"L&D" (Learning & Development) — fes-lo servir si perceps que l\'interlocutor és sofisticat',
            "La pregunta final qualifica ràpid — adapta el pitch segons la resposta",
            "Si ja tenen empresa com a clients, l'angle és 'amplia cartera amb NextLeadIn'"
          ],
          en: [
            '"L&D" (Learning & Development) — use it if you sense the contact is sophisticated',
            'The final question qualifies quickly — adapt the pitch based on response',
            "If they already have corporate clients, the angle is 'expand portfolio with NextLeadIn'"
          ]
        }
      },
      {
        id: 'ac2',
        type: 'objecion',
        name: {
          es: '"Ya trabajamos con empresas, no nos hace falta"',
          ca: '"Ja treballem amb empreses, no ens cal"',
          en: '"We already work with companies, we don\'t need it"'
        },
        text: {
          es: `ELLOS: Ya tenemos empresas que nos mandan alumnos, gracias.

TÚ: Genial, entonces sabes lo importante que es ese canal. ¿Cuántas empresas tienes ahora mismo activas?

[Escucha la respuesta]

Con NextLeadIn, académias que ya tienen 3-4 empresas cliente normalmente pasan a 8-12 en los primeros seis meses. No porque busques más — sino porque te encuentran ellos a ti.

¿Tiene sentido que te enseñe cómo lo están haciendo otras académias de [ciudad]? Son 15 minutos.`,
          ca: `ELLS: Ja tenim empreses que ens envien alumnes, gràcies.

TU: Genial, llavors saps lo important que és aquest canal. Quantes empreses tens ara mateix actives?

[Escolta la resposta]

Amb NextLeadIn, acadèmies que ja tenen 3-4 empreses client normalment passen a 8-12 en els primers sis mesos. No perquè busquis més — sinó perquè et troben ells a tu.

Té sentit que et mostri com ho estan fent altres acadèmies de [ciutat]? Són 15 minuts.`,
          en: `THEM: We already have companies sending us students, thanks.

YOU: Great, so you know how important that channel is. How many companies do you have active right now?

[Listen to the answer]

With NextLeadIn, academies that already have 3-4 corporate clients typically go to 8-12 in the first six months. Not because you look for more — but because they find you.

Does it make sense for me to show you how other academies in [city] are doing it? 15 minutes.`
        },
        tips: {
          es: [
            'Preguntar cuántas empresas tienen activas da datos y baja la guardia',
            '"Te encuentran ellos a ti" — posicionamiento de plataforma inbound, no outbound',
            'Los números concretos (3-4 → 8-12) dan credibilidad — ajusta si tienes datos reales'
          ],
          ca: [
            "Preguntar quantes empreses tenen actives dóna dades i baixa la guàrdia",
            '"Et troben ells a tu" — posicionament de plataforma inbound, no outbound',
            "Els nombres concrets (3-4 → 8-12) donen credibilitat — ajusta si tens dades reals"
          ],
          en: [
            'Asking how many companies they have gives data and lowers their guard',
            '"They find you" — inbound platform positioning, not outbound',
            'Concrete numbers (3-4 → 8-12) add credibility — adjust if you have real data'
          ]
        }
      }
    ]
  }
]
