import { setRequestLocale } from 'next-intl/server'

interface PrivacyPolicyPageProps {
  params: Promise<{ locale: string }>
}

export default async function PrivacyPolicyPage({ params }: PrivacyPolicyPageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const lang = (locale.split('-')[0] as 'es' | 'ca' | 'en')
  const t = {
    es: {
      h1: 'Política de Privacidad', updated: 'Última actualización', date: 'es-ES',
      s1: '1. Información del Responsable del Tratamiento',
      p11: 'NextLeadIn, es el responsable del tratamiento de los datos personales que nos proporcione.',
      p12: 'Datos de contacto:',
      email: 'Correo electrónico', phone: 'Teléfono',
      s2: '2. Datos que Recopilamos',
      bullets2: [
        'Datos de identificación: Nombre, apellidos, correo electrónico',
        'Datos de contacto: Dirección postal, teléfono',
        'Datos de navegación: Dirección IP, cookies, datos de navegación',
        'Datos comerciales: Historial de compras, preferencias',
        'Datos de comunicación: Contenido de correos electrónicos, llamadas'
      ],
      s3: '3. Finalidades del Tratamiento',
      p31: 'Tratamos sus datos personales para las siguientes finalidades:',
      bullets3: [
        'Prestación del servicio de generación de leads', 'Gestión de la relación comercial', 'Comunicaciones comerciales y marketing', 'Cumplimiento de obligaciones legales', 'Mejora de nuestros servicios', 'Análisis estadístico y de mercado'
      ],
      s4: '4. Base Legal del Tratamiento',
      bullets4: [
        'Consentimiento: Para comunicaciones comerciales y cookies no esenciales',
        'Ejecución contractual: Para la prestación de nuestros servicios',
        'Interés legítimo: Para la mejora de los servicios y análisis',
        'Cumplimiento legal: Para obligaciones fiscales y contables'
      ],
      s5: '5. Conservación de los Datos',
      bullets5: [
        'Datos de clientes: Durante la relación comercial y 5 años después',
        'Datos de marketing: Hasta la revocación del consentimiento',
        'Datos de navegación: Máximo 2 años',
        'Datos fiscales: Según la legislación aplicable (mínimo 4 años)'
      ],
      s6: '6. Compartición de Datos',
      bullets6: [
        'Proveedores de servicios tecnológicos (encargados del tratamiento)',
        'Autoridades competentes cuando sea legalmente requerido',
        'Socios comerciales con su consentimiento',
        'Empresas del grupo corporativo'
      ],
      s7: '7. Derechos de los Interesados',
      p71: 'Tiene derecho a:',
      bullets7: [ 'Acceso', 'Rectificación', 'Supresión', 'Limitación', 'Portabilidad', 'Oposición' ],
      p72: 'Para ejercer estos derechos, contáctenos en: contacto@nextleadin.com',
      s8: '8. Seguridad de los Datos',
      bullets8: [ 'Cifrado de datos en tránsito y en reposo', 'Control de acceso y autenticación', 'Monitoreo y auditoría de seguridad', 'Formación del personal en protección de datos' ],
      s9: '9. Transferencias Internacionales',
      p91: 'Algunos datos pueden ser transferidos a países fuera del EEE. En estos casos, garantizamos un nivel adecuado de protección mediante:',
      bullets9: [ 'Decisiones de adecuación de la Comisión Europea', 'Cláusulas contractuales tipo', 'Certificaciones de protección de datos' ],
      s10: '10. Menores de Edad',
      p101: 'Nuestros servicios no están dirigidos a menores de 16 años. No recopilamos conscientemente datos de menores sin el consentimiento de los padres o tutores legales.',
      s11: '11. Cambios en la Política',
      p111: 'Podemos actualizar esta política de privacidad. Le notificaremos cualquier cambio significativo por correo electrónico o mediante un aviso prominente en nuestro sitio web.',
      s12: '12. Contacto y Reclamaciones',
      p121: 'Para cualquier cuestión relacionada con la protección de datos:',
      aepd: 'Autoridad de Control', aepdWeb: 'Web AEPD'
    },
    ca: {
      h1: 'Política de Privacitat', updated: 'Última actualització', date: 'ca-ES',
      s1: '1. Informació del Responsable del Tractament',
      p11: 'NextLeadIn es el responsable del tractament de les dades personals que ens faciliti.',
      p12: 'Dades de contacte:',
      email: 'Correu electrònic', phone: 'Telèfon',
      s2: '2. Dades que Recollim',
      bullets2: [
        'Dades d’identificació: Nom, cognoms, correu electrònic',
        'Dades de contacte: Adreça postal, telèfon',
        'Dades de navegació: Adreça IP, cookies, dades de navegació',
        'Dades comercials: Historial de compres, preferències',
        'Dades de comunicació: Contingut de correus electrònics, trucades'
      ],
      s3: '3. Finalitats del Tractament',
      p31: 'Tractem les seves dades personals per a les següents finalitats:',
      bullets3: [
        'Prestació del servei de generació de leads', 'Gestió de la relació comercial', 'Comunicacions comercials i màrqueting', 'Compliment d’obligacions legals', 'Millora dels nostres serveis', 'Anàlisi estadística i de mercat'
      ],
      s4: '4. Base Legal del Tractament',
      bullets4: [
        'Consentiment: Per a comunicacions comercials i cookies no essencials',
        'Execució contractual: Per a la prestació dels nostres serveis',
        'Interès legítim: Per a la millora dels serveis i anàlisi',
        'Compliment legal: Per a obligacions fiscals i comptables'
      ],
      s5: '5. Conservació de les Dades',
      bullets5: [
        'Dades de clients: Durant la relació comercial i 5 anys després',
        'Dades de màrqueting: Fins a la revocació del consentiment',
        'Dades de navegació: Màxim 2 anys',
        'Dades fiscals: Segons la legislació aplicable (mínim 4 anys)'
      ],
      s6: '6. Compartició de Dades',
      bullets6: [
        'Proveïdors de serveis tecnològics (encarregats del tractament)',
        'Autoritats competents quan sigui legalment requerit',
        'Socis comercials amb el seu consentiment',
        'Empreses del grup corporatiu'
      ],
      s7: '7. Drets dels Interessats',
      p71: 'Té dret a:',
      bullets7: [ 'Accés', 'Rectificació', 'Supressió', 'Limitació', 'Portabilitat', 'Oposició' ],
      p72: 'Per exercir aquests drets, contacti amb: contacto@nextleadin.com',
      s8: '8. Seguretat de les Dades',
      bullets8: [ 'Xifratge de dades en trànsit i en repòs', 'Control d’accés i autenticació', 'Monitoratge i auditoria de seguretat', 'Formació del personal en protecció de dades' ],
      s9: '9. Transferències Internacionals',
      p91: 'Algunes dades poden ser transferides a països fora de l’EEE. En aquests casos, garantim un nivell adequat de protecció mitjançant:',
      bullets9: [ 'Decisions d’adequació de la Comissió Europea', 'Clàusules contractuals tipus', 'Certificacions de protecció de dades' ],
      s10: '10. Menors d’Edat',
      p101: 'Els nostres serveis no van dirigits a menors de 16 anys. No recollim dades de menors sense el consentiment dels pares o tutors legals.',
      s11: '11. Canvis en la Política',
      p111: 'Podem actualitzar aquesta política de privacitat. Notificarem qualsevol canvi significatiu per correu electrònic o amb un avís al lloc web.',
      s12: '12. Contacte i Reclamacions',
      p121: 'Per a qualsevol qüestió relacionada amb la protecció de dades:',
      aepd: 'Autoritat de Control', aepdWeb: 'Web AEPD'
    },
    en: {
      h1: 'Privacy Policy', updated: 'Last updated', date: 'en-US',
      s1: '1. Data Controller Information',
      p11: 'NextLeadIn is the data controller for the personal data you provide to us.',
      p12: 'Contact details:',
      email: 'Email', phone: 'Phone',
      s2: '2. Data We Collect',
      bullets2: [
        'Identification data: First name, last name, email',
        'Contact data: Postal address, phone number',
        'Browsing data: IP address, cookies, browsing data',
        'Commercial data: Purchase history, preferences',
        'Communication data: Email and call content'
      ],
      s3: '3. Purposes of Processing',
      p31: 'We process your personal data for the following purposes:',
      bullets3: [
        'Provision of the lead-generation service', 'Management of the commercial relationship', 'Marketing communications', 'Compliance with legal obligations', 'Service improvement', 'Statistical and market analysis'
      ],
      s4: '4. Legal Basis for Processing',
      bullets4: [
        'Consent: For marketing communications and non-essential cookies',
        'Contract performance: To provide our services',
        'Legitimate interest: To improve services and analytics',
        'Legal obligation: For tax and accounting requirements'
      ],
      s5: '5. Data Retention',
      bullets5: [
        'Customer data: During the commercial relationship and 5 years thereafter',
        'Marketing data: Until consent is withdrawn',
        'Browsing data: Up to 2 years',
        'Tax data: As required by law (minimum 4 years)'
      ],
      s6: '6. Data Sharing',
      bullets6: [
        'Technology service providers (data processors)',
        'Competent authorities when legally required',
        'Business partners with your consent',
        'Group companies'
      ],
      s7: '7. Data Subject Rights',
      p71: 'You have the right to:',
      bullets7: [ 'Access', 'Rectification', 'Erasure', 'Restriction', 'Portability', 'Object' ],
      p72: 'To exercise these rights, contact: contacto@nextleadin.com',
      s8: '8. Data Security',
      bullets8: [ 'Encryption in transit and at rest', 'Access control and authentication', 'Security monitoring and auditing', 'Staff training on data protection' ],
      s9: '9. International Transfers',
      p91: 'Some data may be transferred outside the EEA. In such cases, we ensure adequate protection through:',
      bullets9: [ 'European Commission adequacy decisions', 'Standard contractual clauses', 'Data protection certifications' ],
      s10: '10. Minors',
      p101: 'Our services are not directed at children under 16. We do not knowingly collect data from minors without parental or guardian consent.',
      s11: '11. Policy Changes',
      p111: 'We may update this privacy policy. We will notify you of any significant changes by email or with a prominent notice on our website.',
      s12: '12. Contact and Complaints',
      p121: 'For any data protection matter:',
      aepd: 'Supervisory Authority', aepdWeb: 'AEPD Website'
    }
  }[lang]
  return (
    <div className="min-h-screen bg-gray-50 pb-24 md:pb-32">
      <div className="container-custom pt-28 md:pt-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">{t.h1}</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>{t.updated}:</strong> {new Date().toLocaleDateString(t.date)}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s1}</h2>
              <p className="text-gray-700 mb-4">{t.p11}</p>
              <p className="text-gray-700 mb-4">
                <strong>{t.p12}</strong><br />
                <strong>{t.email}:</strong> contacto@nextleadin.com<br />
                <strong>{t.phone}:</strong> +34 684 781 855
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s2}</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                {t.bullets2.map((b: string, i: number) => (<li key={i}>{b}</li>))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s3}</h2>
              <p className="text-gray-700 mb-4">{t.p31}</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                {t.bullets3.map((b: string, i: number) => (<li key={i}>{b}</li>))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s4}</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                {t.bullets4.map((b: string, i: number) => (<li key={i}>{b}</li>))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s5}</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                {t.bullets5.map((b: string, i: number) => (<li key={i}>{b}</li>))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s6}</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                {t.bullets6.map((b: string, i: number) => (<li key={i}>{b}</li>))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s7}</h2>
              <p className="text-gray-700 mb-4">{t.p71}</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                {t.bullets7.map((b: string, i: number) => (<li key={i}>{b}</li>))}
              </ul>
              <p className="text-gray-700 mb-4">{t.p72}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s8}</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                {t.bullets8.map((b: string, i: number) => (<li key={i}>{b}</li>))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s9}</h2>
              <p className="text-gray-700 mb-4">{t.p91}</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                {t.bullets9.map((b: string, i: number) => (<li key={i}>{b}</li>))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s10}</h2>
              <p className="text-gray-700 mb-4">{t.p101}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s11}</h2>
              <p className="text-gray-700 mb-4">{t.p111}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.s12}</h2>
              <p className="text-gray-700 mb-4">{t.p121}</p>
              <p className="text-gray-700 mb-4">
                <strong>{t.email}:</strong> contacto@nextleadin.com<br />
                <strong>{t.aepd}:</strong> Agencia Española de Protección de Datos (AEPD)<br />
                <strong>{t.aepdWeb}:</strong> www.aepd.es
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}