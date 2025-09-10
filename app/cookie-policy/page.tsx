import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies | NextLeadIn',
  description: 'Política de cookies i tecnologies similars de NextLeadIn',
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mt-20 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Política de Cookies
            </h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Última actualització:</strong> {new Date().toLocaleDateString('ca-ES')}
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
                <li><strong>Chrome:</strong> Configuració > Privadesa i seguretat > Cookies</li>
                <li><strong>Firefox:</strong> Opcions > Privadesa i seguretat > Cookies</li>
                <li><strong>Safari:</strong> Preferències > Privadesa > Cookies</li>
                <li><strong>Edge:</strong> Configuració > Cookies i permisos del lloc</li>
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
                <strong>Correu electrònic:</strong> privacy@nextleadin.com<br />
                <strong>Adreça:</strong> [DIRECCIÓ]<br />
                <strong>Telèfon:</strong> [TELÈFON]
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
