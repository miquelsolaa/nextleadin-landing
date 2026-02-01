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
  const lang = (locale.split('-')[0] as 'es' | 'ca' | 'en')
  const t = {
    es: { h1: 'Política de Cookies', updated: 'Última actualización', date: 'es-ES',
      s1: '1. Qué son las Cookies',
      p11: 'Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Permiten recordar información sobre su visita, como sus preferencias y configuración.',
      p12: 'NextLeadIn utiliza cookies y tecnologías similares para mejorar la experiencia de usuario, analizar el uso del sitio web y personalizar el contenido.',
      s2: '2. Tipos de Cookies que Utilizamos',
      s21: '2.1 Cookies Técnicas (Necesarias)',
      s22: '2.2 Cookies de Funcionalidad',
      s23: '2.3 Cookies de Análisis',
      s24: '2.4 Cookies de Marketing',
      s3: '3. Cookies de Terceros',
      p31: 'Utilizamos servicios de terceros que pueden establecer cookies en su dispositivo:',
      s4: '4. Gestión de Cookies',
      s41: '4.1 Configuración del Navegador',
      s42: '4.2 Centro de Preferencias de Cookies',
      s5: '5. Consecuencias de Desactivar Cookies',
      s6: '6. Cookies en Dispositivos Móviles',
      s7: '7. Actualizaciones de esta Política',
      s8: '8. Base Legal',
      s9: '9. Contacto',
      s10: '10. Enlaces Útiles'
    },
    ca: { h1: 'Política de Cookies', updated: 'Última actualització', date: 'ca-ES',
      s1: '1. Què són les Cookies',
      p11: 'Les cookies són petits arxius de text que s’emmagatzemen al dispositiu quan visiteu un lloc web. Permeten recordar informació de la visita, com preferències i configuració.',
      p12: 'NextLeadIn utilitza cookies i tecnologies similars per millorar l’experiència, analitzar l’ús del lloc i personalitzar el contingut.',
      s2: '2. Tipus de Cookies que Utilitzem',
      s21: '2.1 Cookies Tècniques (Necessàries)',
      s22: '2.2 Cookies de Funcionalitat',
      s23: '2.3 Cookies d’Anàlisi',
      s24: '2.4 Cookies de Màrqueting',
      s3: '3. Cookies de Tercers',
      p31: 'Utilitzem serveis de tercers que poden establir cookies al vostre dispositiu:',
      s4: '4. Gestió de Cookies',
      s41: '4.1 Configuració del Navegador',
      s42: '4.2 Centre de Preferències de Cookies',
      s5: '5. Conseqüències de Desactivar Cookies',
      s6: '6. Cookies en Dispositius Mòbils',
      s7: '7. Actualitzacions d’aquesta Política',
      s8: '8. Base Legal',
      s9: '9. Contacte',
      s10: '10. Enllaços Útils'
    },
    en: { h1: 'Cookie Policy', updated: 'Last updated', date: 'en-US',
      s1: '1. What are Cookies',
      p11: 'Cookies are small text files stored on your device when you visit a website. They allow the site to remember your visit information, such as preferences and settings.',
      p12: 'NextLeadIn uses cookies and similar technologies to improve user experience, analyse site usage, and personalise content.',
      s2: '2. Types of Cookies We Use',
      s21: '2.1 Technical (Necessary) Cookies',
      s22: '2.2 Functionality Cookies',
      s23: '2.3 Analytics Cookies',
      s24: '2.4 Marketing Cookies',
      s3: '3. Third-Party Cookies',
      p31: 'We use third-party services that may set cookies on your device:',
      s4: '4. Managing Cookies',
      s41: '4.1 Browser Settings',
      s42: '4.2 Cookie Preference Center',
      s5: '5. Consequences of Disabling Cookies',
      s6: '6. Cookies on Mobile Devices',
      s7: '7. Updates to this Policy',
      s8: '8. Legal Basis',
      s9: '9. Contact',
      s10: '10. Useful Links'
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
              <strong>{t.updated}:</strong> {new Date().toLocaleDateString(t.date)}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Què són les Cookies
              </h2>
              <p className="text-gray-700 mb-4">
                Les cookies són petits arxius de text que s'emmagatzemen al vostre dispositiu quan visiteu un lloc web. Permeten al lloc web recordar informació sobre la vostra visita, com ara les vostres preferències i configuració.
              </p>
              <p className="text-gray-700 mb-4">
                NextLeadIn utilitza cookies i tecnologies similars per millorar la vostra experiència d'usuari, analitzar l'ús del lloc web i personalitzar el contingut.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Tipus de Cookies que Utilitzem
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2.1 Cookies Tècniques (Necessàries)
              </h3>
              <p className="text-gray-700 mb-4">
                Aquestes cookies són essencials per al funcionament del lloc web i no es poden desactivar:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Nom</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Finalitat</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Durada</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">session_id</td>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">Mantenir la sessió d'usuari</td>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">Sessió</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">csrf_token</td>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">Protecció contra atacs CSRF</td>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">Sessió</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">cookie_consent</td>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">Recordar les preferències de cookies</td>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">1 any</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2.2 Cookies de Funcionalitat
              </h3>
              <p className="text-gray-700 mb-4">
                Aquestes cookies milloren la funcionalitat del lloc web:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Nom</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Finalitat</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Durada</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">user_preferences</td>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">Recordar preferències d'usuari</td>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">6 mesos</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">language</td>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">Idioma preferit</td>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">1 any</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">theme</td>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">Tema visual preferit</td>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">1 any</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2.3 Cookies d'Anàlisi
              </h3>
              <p className="text-gray-700 mb-4">
                Aquestes cookies ens ajuden a entendre com els usuaris interactuen amb el lloc web:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Nom</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Finalitat</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Durada</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">_ga</td>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">Google Analytics - Distingir usuaris</td>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">2 anys</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">_ga_[ID]</td>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">Google Analytics - Estat de sessió</td>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">2 anys</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">_gid</td>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">Google Analytics - Distingir usuaris</td>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">24 hores</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2.4 Cookies de Marketing
              </h3>
              <p className="text-gray-700 mb-4">
                Aquestes cookies s'utilitzen per mostrar anuncis rellevants i mesurar l'efectivitat de les campanyes:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Nom</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Finalitat</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Durada</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">_fbp</td>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">Facebook Pixel - Seguiment conversió</td>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">3 mesos</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">ads_preferences</td>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">Preferències publicitàries</td>
                      <td className="px-4 py-2 text-sm text-gray-700 border-b">1 any</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Cookies de Tercers
              </h2>
              <p className="text-gray-700 mb-4">
                Utilitzem serveis de tercers que poden establir cookies al vostre dispositiu:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Google Analytics:</strong> Per analitzar l'ús del lloc web</li>
                <li><strong>Google Tag Manager:</strong> Per gestionar etiquetes de seguiment</li>
                <li><strong>Facebook Pixel:</strong> Per mesurar l'efectivitat de la publicitat</li>
                <li><strong>Hotjar:</strong> Per analitzar el comportament dels usuaris</li>
                <li><strong>Intercom:</strong> Per suport al client i comunicació</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Gestió de Cookies
              </h2>
              <p className="text-gray-700 mb-4">
                Podeu gestionar les cookies de diverses maneres:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4.1 Configuració del Navegador
              </h3>
              <p className="text-gray-700 mb-4">
                La majoria de navegadors permeten controlar les cookies:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Chrome:</strong> Configuració &gt; Privadesa i seguretat &gt; Cookies</li>
                <li><strong>Firefox:</strong> Opcions &gt; Privadesa i seguretat &gt; Cookies</li>
                <li><strong>Safari:</strong> Preferències &gt; Privadesa &gt; Cookies</li>
                <li><strong>Edge:</strong> Configuració &gt; Cookies i permisos del lloc</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4.2 Centre de Preferències de Cookies
              </h3>
              <p className="text-gray-700 mb-4">
                Utilitzeu el nostre centre de preferències per gestionar les cookies no essencials. Podeu trobar-lo al peu de la pàgina o accedir-hi des del banner de cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Conseqüències de Desactivar Cookies
              </h2>
              <p className="text-gray-700 mb-4">
                Si desactiveu les cookies:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Algunes funcionalitats del lloc web poden no funcionar correctament</li>
                <li>Hauràs d'introduir les teves preferències cada vegada que visitis el lloc</li>
                <li>No podrem personalitzar la teva experiència</li>
                <li>L'anàlisi del lloc web serà menys precisa</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Cookies en Dispositius Mòbils
              </h2>
              <p className="text-gray-700 mb-4">
                Les cookies també s'utilitzen en aplicacions mòbils i dispositius mòbils. Podeu gestionar-les a través de la configuració del navegador mòbil o de l'aplicació.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Actualitzacions d'aquesta Política
              </h2>
              <p className="text-gray-700 mb-4">
                Podem actualitzar aquesta política de cookies per reflectir canvis en les nostres pràctiques o per altres motius operatius, legals o reglamentaris.
              </p>
              <p className="text-gray-700 mb-4">
                Us notificarem qualsevol canvi significatiu mitjançant un avís prominent al lloc web o per correu electrònic.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Base Legal
              </h2>
              <p className="text-gray-700 mb-4">
                L'ús de cookies es basa en:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Consentiment:</strong> Per a cookies no essencials (anàlisi, marketing)</li>
                <li><strong>Interès legítim:</strong> Per a cookies tècniques necessàries</li>
                <li><strong>Execució contractual:</strong> Per a cookies de funcionalitat</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Contacte
              </h2>
              <p className="text-gray-700 mb-4">
                Si teniu preguntes sobre aquesta política de cookies:
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Email:</strong> contacto@nextleadin.com<br />
                {/* <strong>Adreça:</strong> [DIRECCIÓ]<br /> */}
                <strong>Telèfon:</strong> +34 684 781 855
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Enllaços Útils
              </h2>
              <p className="text-gray-700 mb-4">
                Més informació sobre cookies:
              </p>
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
