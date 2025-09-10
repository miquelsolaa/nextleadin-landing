import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad | NextLeadIn',
  description: 'Política de privacidad y protección de datos de NextLeadIn conforme al RGPD',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mt-20 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Política de Privacidad
            </h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Información del Responsable del Tratamiento
              </h2>
              <p className="text-gray-700 mb-4">
                NextLeadIn, con domicilio social en [DIRECCIÓN], es el responsable del tratamiento de los datos personales que nos proporcione.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Datos de contacto:</strong><br />
                Correo electrónico: privacy@nextleadin.com<br />
                Teléfono: [TELÉFONO]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Datos que Recopilamos
              </h2>
              <p className="text-gray-700 mb-4">
                Recopilamos las siguientes categorías de datos personales:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Datos de identificación:</strong> Nombre, apellidos, correo electrónico</li>
                <li><strong>Datos de contacto:</strong> Dirección postal, teléfono</li>
                <li><strong>Datos de navegación:</strong> Dirección IP, cookies, datos de navegación</li>
                <li><strong>Datos comerciales:</strong> Historial de compras, preferencias</li>
                <li><strong>Datos de comunicación:</strong> Contenido de correos electrónicos, llamadas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Finalidades del Tratamiento
              </h2>
              <p className="text-gray-700 mb-4">
                Tratamos sus datos personales para las siguientes finalidades:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Prestación del servicio de generación de leads</li>
                <li>Gestión de la relación comercial</li>
                <li>Comunicaciones comerciales y marketing</li>
                <li>Cumplimiento de obligaciones legales</li>
                <li>Mejora de nuestros servicios</li>
                <li>Análisis estadístico y de mercado</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Base Legal del Tratamiento
              </h2>
              <p className="text-gray-700 mb-4">
                El tratamiento de sus datos se basa en:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Consentimiento:</strong> Para comunicaciones comerciales y cookies no esenciales</li>
                <li><strong>Ejecución contractual:</strong> Para la prestación de nuestros servicios</li>
                <li><strong>Interés legítimo:</strong> Para la mejora de los servicios y análisis</li>
                <li><strong>Cumplimiento legal:</strong> Para obligaciones fiscales y contables</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Conservación de los Datos
              </h2>
              <p className="text-gray-700 mb-4">
                Los datos personales se conservarán durante:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Datos de clientes:</strong> Durante la relación comercial y 5 años después</li>
                <li><strong>Datos de marketing:</strong> Hasta la revocación del consentimiento</li>
                <li><strong>Datos de navegación:</strong> Máximo 2 años</li>
                <li><strong>Datos fiscales:</strong> Según la legislación aplicable (mínimo 4 años)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Compartición de Datos
              </h2>
              <p className="text-gray-700 mb-4">
                Podemos compartir sus datos con:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Proveedores de servicios tecnológicos (encargados del tratamiento)</li>
                <li>Autoridades competentes cuando sea legalmente requerido</li>
                <li>Socios comerciales con su consentimiento</li>
                <li>Empresas del grupo corporativo</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Derechos de los Interesados
              </h2>
              <p className="text-gray-700 mb-4">
                Tiene derecho a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre usted</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de los datos</li>
                <li><strong>Limitación:</strong> Restringir el tratamiento</li>
                <li><strong>Portabilidad:</strong> Recibir los datos en formato estructurado</li>
                <li><strong>Oposición:</strong> Oponerse al tratamiento</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Para ejercer estos derechos, contáctenos en: privacy@nextleadin.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Seguridad de los Datos
              </h2>
              <p className="text-gray-700 mb-4">
                Implementamos medidas técnicas y organizativas adecuadas para proteger sus datos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Cifrado de datos en tránsito y en reposo</li>
                <li>Control de acceso y autenticación</li>
                <li>Monitoreo y auditoría de seguridad</li>
                <li>Formación del personal en protección de datos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Transferencias Internacionales
              </h2>
              <p className="text-gray-700 mb-4">
                Algunos datos pueden ser transferidos a países fuera del EEE. En estos casos, garantizamos un nivel adecuado de protección mediante:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Decisiones de adecuación de la Comisión Europea</li>
                <li>Cláusulas contractuales tipo</li>
                <li>Certificaciones de protección de datos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Menores de Edad
              </h2>
              <p className="text-gray-700 mb-4">
                Nuestros servicios no están dirigidos a menores de 16 años. No recopilamos conscientemente datos de menores sin el consentimiento de los padres o tutores legales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Cambios en la Política
              </h2>
              <p className="text-gray-700 mb-4">
                Podemos actualizar esta política de privacidad. Le notificaremos cualquier cambio significativo por correo electrónico o mediante un aviso prominente en nuestro sitio web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Contacto y Reclamaciones
              </h2>
              <p className="text-gray-700 mb-4">
                Para cualquier cuestión relacionada con la protección de datos:
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Correo electrónico:</strong> privacy@nextleadin.com<br />
                <strong>Autoridad de Control:</strong> Agencia Española de Protección de Datos (AEPD)<br />
                <strong>Web AEPD:</strong> www.aepd.es
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}