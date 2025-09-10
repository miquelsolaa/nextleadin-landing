import { setRequestLocale } from 'next-intl/server'

interface TermsAndConditionsPageProps {
  params: Promise<{ locale: string }>
}

export default async function TermsAndConditionsPage({ params }: TermsAndConditionsPageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const lang = (locale.split('-')[0] as 'es' | 'ca' | 'en')
  const t = {
    es: {
      title: 'Términos y Condiciones',
      updated: 'Última actualización',
      h1: 'Términos y Condiciones',
      s1: '1. Información General',
      p11: 'Estos términos y condiciones regulan el uso del servicio NextLeadIn, una plataforma de generación de leads con inteligencia artificial.',
      company: 'Datos de la empresa',
      s2: '2. Aceptación de los Términos',
      p21: 'El acceso y uso del servicio implica la aceptación plena y sin reservas de estos términos y condiciones. Si no está de acuerdo con cualquier parte de estos términos, no debe utilizar el servicio.',
      s3: '3. Descripción del Servicio',
      bullets3: [
        'Segmentación hiperprecisa de leads por zona y sector',
        'Generación de informes con inteligencia artificial',
        'Flujo de trabajo comercial automatizado',
        'Integraciones con sistemas CRM',
        'Herramientas de análisis y seguimiento'
      ],
      s4: '4. Registro y Cuenta de Usuario',
      bullets4: [
        'Crear una cuenta con datos veraces y actualizados',
        'Mantener la confidencialidad de las credenciales',
        'Notificar inmediatamente cualquier uso no autorizado',
        'Ser mayor de edad o tener autorización parental'
      ],
      s5: '5. Precios y Facturación',
      p51: 'Precios: Los precios están especificados en la página de precios y pueden variar con notificación previa de 30 días.',
      p52: 'Facturación: La facturación se realiza mensualmente o anualmente según el plan elegido. Los pagos son por adelantado.',
      p53: 'Impuestos: Todos los precios incluyen el IVA aplicable según la legislación vigente.',
      s6: '6. Obligaciones del Usuario',
      bullets6: [
        'Utilizar el servicio de manera lícita y conforme a estos términos',
        'No utilizar el servicio para actividades ilegales o no autorizadas',
        'No interferir con el funcionamiento del servicio',
        'Respetar los derechos de propiedad intelectual',
        'No compartir las credenciales de acceso',
        'Notificar cualquier vulnerabilidad de seguridad'
      ],
      s7: '7. Propiedad Intelectual',
      p71: 'NextLeadIn es propietario de todos los derechos de propiedad intelectual del servicio, incluyendo:',
      bullets7: [
        'Software y código fuente', 'Diseño e interfaz de usuario', 'Algoritmos de inteligencia artificial', 'Marcas, logotipos y contenido', 'Bases de datos y estructuras de datos'
      ],
      s8: '8. Limitación de Responsabilidad',
      bullets8: [
        'Daños indirectos, incidentales o consecuenciales',
        'Pérdida de beneficios o oportunidades comerciales',
        'Interrupciones del servicio por causas de fuerza mayor',
        'Acciones de terceros o proveedores externos',
        'Uso inadecuado del servicio por parte del usuario'
      ],
      p84: 'La responsabilidad total está limitada al valor de los servicios pagados en los 12 meses anteriores.',
      s9: '9. Suspensión y Cancelación',
      p91: 'Cancelación por el usuario: El usuario puede cancelar el servicio en cualquier momento con 30 días de aviso.',
      p92: 'Suspensión por NextLeadIn: Podemos suspender o cancelar el servicio en caso de:',
      bullets9: [
        'Incumplimiento de los términos y condiciones', 'Impago de los servicios', 'Uso inadecuado o ilícito del servicio', 'Decisión unilateral con notificación previa'
      ],
      s10: '10. Protección de Datos',
      p101: 'El tratamiento de datos personales se rige por nuestra Política de Privacidad, que cumple con el RGPD y la LOPD-GDD.',
      s11: '11. Modificaciones del Servicio',
      p111: 'NextLeadIn se reserva el derecho de modificar, suspender o discontinuar cualquier aspecto del servicio con notificación previa de 30 días.',
      s12: '12. Ley Aplicable y Jurisdicción',
      p121: 'Estos términos se rigen por la legislación española. Para cualquier disputa, las partes se someten a los juzgados y tribunales de [CIUDAD].',
      s13: '13. Resolución de Disputas',
      p131: 'En caso de disputa, las partes se comprometen a intentar resolverla mediante negociación directa. Si no es posible, se podrá recurrir a mediación o arbitraje.',
      s14: '14. Disposiciones Generales',
      p141: 'Si alguna disposición de estos términos fuera declarada inválida, el resto de disposiciones mantendrán su plena vigencia y efecto.',
      p142: 'La no exigencia de alguna disposición no constituirá renuncia a la misma.',
      s15: '15. Contacto',
      p151: 'Para cualquier cuestión relacionada con estos términos:',
      email: 'Correo electrónico', address: 'Dirección', phone: 'Teléfono'
    },
    ca: {
      title: 'Termes i Condicions',
      updated: 'Última actualització',
      h1: 'Termes i Condicions',
      s1: '1. Informació General',
      p11: 'Aquests termes i condicions regulen l’ús del servei NextLeadIn, una plataforma de generació de leads amb intel·ligència artificial.',
      company: 'Dades de l’empresa',
      s2: '2. Acceptació dels Termes',
      p21: 'L’accés i ús del servei implica l’acceptació plena i sense reserves d’aquests termes i condicions. Si no hi està d’acord, no ha d’utilitzar el servei.',
      s3: '3. Descripció del Servei',
      bullets3: [
        'Segmentació hiperprecisa de leads per zona i sector', 'Generació d’informes amb intel·ligència artificial', 'Flux de treball comercial automatitzat', 'Integracions amb sistemes CRM', 'Eines d’anàlisi i seguiment'
      ],
      s4: '4. Registre i Compte d’Usuari',
      bullets4: [ 'Crear un compte amb dades veraces i actualitzades', 'Mantenir la confidencialitat de les credencials', 'Notificar immediatament qualsevol ús no autoritzat', 'Ser major d’edat o tenir autorització' ],
      s5: '5. Preus i Facturació',
      p51: 'Preus: Els preus figuren a la pàgina de preus i poden variar amb 30 dies d’avís.',
      p52: 'Facturació: La facturació es fa mensualment o anualment segons el pla. Els pagaments són per avançat.',
      p53: 'Impostos: Tots els preus inclouen l’IVA aplicable.',
      s6: '6. Obligacions de l’Usuari',
      bullets6: [ 'Utilitzar el servei de manera lícita i conforme als termes', 'No usar-lo per a activitats il·lícites', 'No interferir en el funcionament', 'Respectar propietat intel·lectual', 'No compartir credencials', 'Notificar vulnerabilitats' ],
      s7: '7. Propietat Intel·lectual',
      p71: 'NextLeadIn és propietari de tots els drets de propietat intel·lectual del servei, incloent:',
      bullets7: [ 'Programari i codi font', 'Disseny i interfície', 'Algoritmes d’IA', 'Marques, logotips i contingut', 'Bases de dades' ],
      s8: '8. Limitació de Responsabilitat',
      bullets8: [ 'Danys indirectes o conseqüencials', 'Pèrdua de beneficis', 'Interrupcions per força major', 'Accions de tercers', 'Ús inadequat del servei' ],
      p84: 'La responsabilitat total es limita al valor dels serveis pagats en els 12 mesos anteriors.',
      s9: '9. Suspensió i Cancel·lació',
      p91: 'Cancel·lació per l’usuari: pot cancel·lar el servei amb 30 dies d’avís.',
      p92: 'Suspensió per NextLeadIn: es pot suspendre o cancel·lar en cas de:',
      bullets9: [ 'Incompliment dels termes', 'Impagament', 'Ús il·lícit del servei', 'Decisió unilateral amb avís' ],
      s10: '10. Protecció de Dades',
      p101: 'El tractament de dades personals es regeix per la Política de Privacitat (RGPD).',
      s11: '11. Modificacions del Servei',
      p111: 'NextLeadIn pot modificar o suspendre funcions amb 30 dies d’avís.',
      s12: '12. Llei Aplicable i Jurisdicció',
      p121: 'Aquests termes es regeixen per la legislació espanyola. Jurisdicció: jutjats de [CIUTAT].',
      s13: '13. Resolució de Disputes',
      p131: 'S’intentarà negociar; si no, mediació o arbitratge.',
      s14: '14. Disposicions Generals',
      p141: 'La invalidesa d’una clàusula no afecta la resta.',
      p142: 'La manca d’exigència no implica renúncia.',
      s15: '15. Contacte',
      p151: 'Per a qualsevol qüestió sobre aquests termes:',
      email: 'Correu electrònic', address: 'Adreça', phone: 'Telèfon'
    },
    en: {
      title: 'Terms and Conditions',
      updated: 'Last updated',
      h1: 'Terms and Conditions',
      s1: '1. General Information',
      p11: 'These terms and conditions govern the use of NextLeadIn, a lead-generation platform powered by AI.',
      company: 'Company details',
      s2: '2. Acceptance of Terms',
      p21: 'Accessing and using the service implies full acceptance of these terms. If you disagree with any part, do not use the service.',
      s3: '3. Service Description',
      bullets3: [ 'Hyper-precise lead targeting by area and sector', 'AI-generated reports', 'Automated sales workflow', 'CRM integrations', 'Analytics and tracking tools' ],
      s4: '4. Registration and User Account',
      bullets4: [ 'Create an account with accurate information', 'Keep credentials confidential', 'Notify any unauthorized use immediately', 'Be of legal age or have consent' ],
      s5: '5. Pricing and Billing',
      p51: 'Pricing: Listed on the pricing page and may change with 30 days’ notice.',
      p52: 'Billing: Monthly or yearly depending on plan. Payments in advance.',
      p53: 'Taxes: Prices include applicable VAT.',
      s6: '6. User Obligations',
      bullets6: [ 'Use the service lawfully and per these terms', 'Do not use for illegal activities', 'Do not interfere with operation', 'Respect IP rights', 'Do not share credentials', 'Report security issues' ],
      s7: '7. Intellectual Property',
      p71: 'NextLeadIn owns all IP rights in the service, including:',
      bullets7: [ 'Software and source code', 'Design and UI', 'AI algorithms', 'Trademarks, logos and content', 'Databases' ],
      s8: '8. Limitation of Liability',
      bullets8: [ 'Indirect or consequential damages', 'Loss of profit', 'Force majeure outages', 'Actions by third parties', 'Improper use by the user' ],
      p84: 'Total liability is limited to amounts paid in the previous 12 months.',
      s9: '9. Suspension and Termination',
      p91: 'User termination: You may cancel with 30 days’ notice.',
      p92: 'Suspension by NextLeadIn: We may suspend/terminate in case of:',
      bullets9: [ 'Breach of terms', 'Non-payment', 'Improper/illegal use', 'Unilateral decision with notice' ],
      s10: '10. Data Protection',
      p101: 'Processing follows our Privacy Policy (GDPR).',
      s11: '11. Service Changes',
      p111: 'We may modify or suspend features with 30 days’ notice.',
      s12: '12. Governing Law and Jurisdiction',
      p121: 'Spanish law applies. Courts of [CITY].',
      s13: '13. Dispute Resolution',
      p131: 'Negotiation first; otherwise mediation or arbitration.',
      s14: '14. General Provisions',
      p141: 'Invalidity of a provision does not affect the rest.',
      p142: 'Failure to enforce is not a waiver.',
      s15: '15. Contact',
      p151: 'For any questions related to these terms:',
      email: 'Email', address: 'Address', phone: 'Phone'
    }
  }[lang]
  return (
    <div className="min-h-screen bg-gray-50 pb-24 md:pb-32">
      <div className="container-custom pt-28 md:pt-10">
        <div className="max-w-4xl mx-auto">
          <div className="mt-20 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">{t.h1}</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>{t.updated}:</strong> {new Date().toLocaleDateString(lang === 'ca' ? 'ca-ES' : lang === 'en' ? 'en-US' : 'es-ES')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s1}</h2>
              <p className="text-gray-700 mb-4">
                {t.p11}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>{t.company}:</strong><br />
                NextLeadIn<br />
                {/* [DIRECCIÓN]<br /> */}
                {/* CIF: [CIF]<br /> */}
                Email: contacto@nextleadin.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s2}</h2>
              <p className="text-gray-700 mb-4">
                {t.p21}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s3}</h2>
              <p className="text-gray-700 mb-4">
                NextLeadIn:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                {t.bullets3.map((b, i) => (<li key={i}>{b}</li>))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s4}</h2>
              <p className="text-gray-700 mb-4">
                
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                {t.bullets4.map((b, i) => (<li key={i}>{b}</li>))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s5}</h2>
              <p className="text-gray-700 mb-4">
                {t.p51}
              </p>
              <p className="text-gray-700 mb-4">
                {t.p52}
              </p>
              <p className="text-gray-700 mb-4">
                {t.p53}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s6}</h2>
              <p className="text-gray-700 mb-4">
                
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                {t.bullets6.map((b, i) => (<li key={i}>{b}</li>))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s7}</h2>
              <p className="text-gray-700 mb-4">
                {t.p71}
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                {t.bullets7.map((b, i) => (<li key={i}>{b}</li>))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s8}</h2>
              <p className="text-gray-700 mb-4">
                
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                {t.bullets8.map((b, i) => (<li key={i}>{b}</li>))}
              </ul>
              <p className="text-gray-700 mb-4">
                {t.p84}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s9}</h2>
              <p className="text-gray-700 mb-4">
                {t.p91}
              </p>
              <p className="text-gray-700 mb-4">
                {t.p92}
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                {t.bullets9.map((b, i) => (<li key={i}>{b}</li>))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s10}</h2>
              <p className="text-gray-700 mb-4">
                {t.p101}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s11}</h2>
              <p className="text-gray-700 mb-4">
                {t.p111}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s12}</h2>
              <p className="text-gray-700 mb-4">
                {t.p121}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s13}</h2>
              <p className="text-gray-700 mb-4">
                {t.p131}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s14}</h2>
              <p className="text-gray-700 mb-4">
                {t.p141}
              </p>
              <p className="text-gray-700 mb-4">
                {t.p142}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s15}</h2>
              <p className="text-gray-700 mb-4">
                {t.p151}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>{t.email}:</strong> contacto@nextleadin.com<br />
                {/* <strong>{t.address}:</strong> [DIRECCIÓN]<br /> */}
                <strong>{t.phone}:</strong> +34 684 781 855
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}