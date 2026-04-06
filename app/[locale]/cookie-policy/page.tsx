import { setRequestLocale } from 'next-intl/server'
import { generateAIOptimizedMetadata } from '@/lib/seo-metadata'
import type { Metadata } from 'next'

interface CookiePolicyPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: CookiePolicyPageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = (locale === 'ca' || locale === 'es' || locale === 'en') ? (locale as 'ca' | 'es' | 'en') : 'es'
  return generateAIOptimizedMetadata('cookie-policy', validLocale)
}

export default async function CookiePolicyPage({ params }: CookiePolicyPageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const lang = (locale === 'ca' || locale === 'en' || locale === 'es' ? locale : 'es') as 'es' | 'ca' | 'en'
  const t = {
    es: {
      h1: 'Política de Cookies',
      updated: 'Última actualización',
      date: 'es-ES',
      table: { name: 'Nombre', purpose: 'Finalidad', duration: 'Duración' },
      sections: {
        s1: '1. Qué son las Cookies',
        p11: 'Las cookies son archivos de texto que se guardan en su dispositivo al visitar un sitio web. Sirven para recordar preferencias y configuración.',
        p12: 'NextLeadIn utiliza cookies para mejorar la experiencia, analizar el uso del sitio y personalizar contenido.',
        s2: '2. Tipos de Cookies que Utilizamos',
        s21: '2.1 Cookies Técnicas (Necesarias)',
        s22: '2.2 Cookies de Funcionalidad',
        s23: '2.3 Cookies de Análisis',
        s24: '2.4 Cookies de Marketing',
        s3: '3. Cookies de Terceros',
        p31: 'Actualmente utilizamos Google Analytics 4 (GA4) únicamente tras el consentimiento de analítica.',
        s4: '4. Gestión de Cookies',
        s41: '4.1 Configuración del navegador',
        s42: '4.2 Centro de preferencias',
        s5: '5. Consecuencias de desactivar cookies',
        s6: '6. Cookies en dispositivos móviles',
        s7: '7. Actualizaciones de esta política',
        s8: '8. Base legal',
        s9: '9. Contacto',
        s10: '10. Enlaces útiles',
      },
    },
    ca: {
      h1: 'Política de Cookies',
      updated: 'Última actualització',
      date: 'ca-ES',
      table: { name: 'Nom', purpose: 'Finalitat', duration: 'Durada' },
      sections: {
        s1: '1. Què són les Cookies',
        p11: 'Les cookies són arxius de text que s’emmagatzemen al dispositiu quan visiteu un lloc web. Serveixen per recordar preferències i configuració.',
        p12: 'NextLeadIn utilitza cookies per millorar l’experiència, analitzar l’ús del lloc i personalitzar contingut.',
        s2: '2. Tipus de Cookies que Utilitzem',
        s21: '2.1 Cookies Tècniques (Necessàries)',
        s22: '2.2 Cookies de Funcionalitat',
        s23: '2.3 Cookies d’Anàlisi',
        s24: '2.4 Cookies de Màrqueting',
        s3: '3. Cookies de Tercers',
        p31: 'Actualment utilitzem Google Analytics 4 (GA4) únicament després del consentiment d’analítica.',
        s4: '4. Gestió de Cookies',
        s41: '4.1 Configuració del navegador',
        s42: '4.2 Centre de preferències',
        s5: '5. Conseqüències de desactivar cookies',
        s6: '6. Cookies en dispositius mòbils',
        s7: '7. Actualitzacions d’aquesta política',
        s8: '8. Base legal',
        s9: '9. Contacte',
        s10: '10. Enllaços útils',
      },
    },
    en: {
      h1: 'Cookie Policy',
      updated: 'Last updated',
      date: 'en-US',
      table: { name: 'Name', purpose: 'Purpose', duration: 'Duration' },
      sections: {
        s1: '1. What are Cookies',
        p11: 'Cookies are text files stored on your device when you visit a website. They help remember preferences and settings.',
        p12: 'NextLeadIn uses cookies to improve experience, analyze site usage and personalize content.',
        s2: '2. Types of Cookies We Use',
        s21: '2.1 Technical (Necessary) Cookies',
        s22: '2.2 Functionality Cookies',
        s23: '2.3 Analytics Cookies',
        s24: '2.4 Marketing Cookies',
        s3: '3. Third-Party Cookies',
        p31: 'We currently use Google Analytics 4 (GA4) only after analytics consent is granted.',
        s4: '4. Cookie Management',
        s41: '4.1 Browser settings',
        s42: '4.2 Preference center',
        s5: '5. Consequences of disabling cookies',
        s6: '6. Cookies on mobile devices',
        s7: '7. Updates to this policy',
        s8: '8. Legal basis',
        s9: '9. Contact',
        s10: '10. Useful links',
      },
    },
  }[lang]

  const technicalRows = [
    ['session_id', 'Session management', 'Session'],
    ['csrf_token', 'CSRF protection', 'Session'],
    ['cookie_consent', 'Save cookie preferences', '1 year'],
  ]
  const functionalRows = [
    ['user_preferences', 'Save user preferences', '6 months'],
    ['language', 'Preferred language', '1 year'],
    ['theme', 'Preferred visual theme', '1 year'],
  ]
  const analyticsRows = [
    ['_ga', 'Google Analytics user identification', '2 years'],
    ['_ga_[ID]', 'Google Analytics session state', '2 years'],
    ['_gid', 'Google Analytics user identification', '24 hours'],
  ]

  const browserItems = [
    'Chrome: Settings > Privacy and security > Cookies',
    'Firefox: Settings > Privacy & Security > Cookies',
    'Safari: Preferences > Privacy > Cookies',
    'Edge: Settings > Cookies and site permissions',
  ]
  const disableItems = [
    'Some website functionality may not work correctly',
    'You may need to set preferences again on each visit',
    'Experience personalization may be limited',
    'Analytics reports may be less accurate',
  ]
  const legalItems = [
    'Consent: for non-essential cookies (analytics/marketing)',
    'Legitimate interest: for strictly necessary cookies',
    'Contractual necessity: for functionality cookies',
  ]

  const renderTable = (rows: string[][]) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">{t.table.name}</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">{t.table.purpose}</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">{t.table.duration}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([name, purpose, duration]) => (
            <tr key={name}>
              <td className="px-4 py-2 text-sm text-gray-700 border-b">{name}</td>
              <td className="px-4 py-2 text-sm text-gray-700 border-b">{purpose}</td>
              <td className="px-4 py-2 text-sm text-gray-700 border-b">{duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 pb-24 md:pb-32">
      <div className="container-custom pt-28 md:pt-10">
        <div className="max-w-4xl mx-auto">
          <div className="mt-20 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">{t.h1}</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>{t.updated}:</strong> {new Date().toLocaleDateString(t.date)}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.sections.s1}</h2>
              <p className="text-gray-700 mb-4">{t.sections.p11}</p>
              <p className="text-gray-700 mb-4">{t.sections.p12}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.sections.s2}</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.sections.s21}</h3>
              {renderTable(technicalRows)}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.sections.s22}</h3>
              {renderTable(functionalRows)}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.sections.s23}</h3>
              {renderTable(analyticsRows)}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.sections.s24}</h3>
              <p className="text-gray-700 mb-4">Marketing cookies are only activated after explicit consent.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.sections.s3}</h2>
              <p className="text-gray-700 mb-4">{t.sections.p31}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.sections.s4}</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.sections.s41}</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                {browserItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.sections.s42}</h3>
              <p className="text-gray-700 mb-4">
                You can manage non-essential cookies via the cookie banner and preference center.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.sections.s5}</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                {disableItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.sections.s6}</h2>
              <p className="text-gray-700 mb-4">
                Cookie settings can also be managed from mobile browser privacy options.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.sections.s7}</h2>
              <p className="text-gray-700 mb-4">
                This policy may be updated for legal, operational or product changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.sections.s8}</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                {legalItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.sections.s9}</h2>
              <p className="text-gray-700 mb-4">
                <strong>Email:</strong> contacto@nextleadin.com<br />
                <strong>Telèfon:</strong> +34 684 781 855
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.sections.s10}</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><a href="https://www.aepd.es" className="text-blue-600 hover:underline">Agència Espanyola de Protecció de Dades</a></li>
                <li><a href="https://www.allaboutcookies.org" className="text-blue-600 hover:underline">All About Cookies</a></li>
                <li><a href="https://www.cookiepedia.co.uk" className="text-blue-600 hover:underline">Cookiepedia</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
