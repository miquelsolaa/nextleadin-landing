import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | NextLeadIn',
  description: 'Términos y condiciones de uso del servicio NextLeadIn',
}

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mt-20 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Términos y Condiciones
            </h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Información General
              </h2>
              <p className="text-gray-700 mb-4">
                Estos términos y condiciones regulan el uso del servicio NextLeadIn, una plataforma de generación de leads con inteligencia artificial.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Datos de la empresa:</strong><br />
                NextLeadIn<br />
                [DIRECCIÓN]<br />
                CIF: [CIF]<br />
                Correo electrónico: legal@nextleadin.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Aceptación de los Términos
              </h2>
              <p className="text-gray-700 mb-4">
                El acceso y uso del servicio implica la aceptación plena y sin reservas de estos términos y condiciones. Si no está de acuerdo con cualquier parte de estos términos, no debe utilizar el servicio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Descripción del Servicio
              </h2>
              <p className="text-gray-700 mb-4">
                NextLeadIn ofrece:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Segmentación hiperprecisa de leads por zona y sector</li>
                <li>Generación de informes con inteligencia artificial</li>
                <li>Flujo de trabajo comercial automatizado</li>
                <li>Integraciones con sistemas CRM</li>
                <li>Herramientas de análisis y seguimiento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Registro y Cuenta de Usuario
              </h2>
              <p className="text-gray-700 mb-4">
                Para utilizar el servicio, es necesario:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Crear una cuenta con datos veraces y actualizados</li>
                <li>Mantener la confidencialidad de las credenciales</li>
                <li>Notificar inmediatamente cualquier uso no autorizado</li>
                <li>Ser mayor de edad o tener autorización parental</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Precios y Facturación
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>Precios:</strong> Los precios están especificados en la página de precios y pueden variar con notificación previa de 30 días.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Facturación:</strong> La facturación se realiza mensualmente o anualmente según el plan elegido. Los pagos son por adelantado.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Impuestos:</strong> Todos los precios incluyen el IVA aplicable según la legislación vigente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Obligaciones del Usuario
              </h2>
              <p className="text-gray-700 mb-4">
                El usuario se compromete a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Utilizar el servicio de manera lícita y conforme a estos términos</li>
                <li>No utilizar el servicio para actividades ilegales o no autorizadas</li>
                <li>No interferir con el funcionamiento del servicio</li>
                <li>Respetar los derechos de propiedad intelectual</li>
                <li>No compartir las credenciales de acceso</li>
                <li>Notificar cualquier vulnerabilidad de seguridad</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Propiedad Intelectual
              </h2>
              <p className="text-gray-700 mb-4">
                NextLeadIn es propietario de todos los derechos de propiedad intelectual del servicio, incluyendo:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Software y código fuente</li>
                <li>Diseño e interfaz de usuario</li>
                <li>Algoritmos de inteligencia artificial</li>
                <li>Marcas, logotipos y contenido</li>
                <li>Bases de datos y estructuras de datos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Limitación de Responsabilidad
              </h2>
              <p className="text-gray-700 mb-4">
                NextLeadIn no se hace responsable de:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Daños indirectos, incidentales o consecuenciales</li>
                <li>Pérdida de beneficios o oportunidades comerciales</li>
                <li>Interrupciones del servicio por causas de fuerza mayor</li>
                <li>Acciones de terceros o proveedores externos</li>
                <li>Uso inadecuado del servicio por parte del usuario</li>
              </ul>
              <p className="text-gray-700 mb-4">
                La responsabilidad total está limitada al valor de los servicios pagados en los 12 meses anteriores.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Suspensión y Cancelación
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>Cancelación por el usuario:</strong> El usuario puede cancelar el servicio en cualquier momento con 30 días de aviso.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Suspensión por NextLeadIn:</strong> Podemos suspender o cancelar el servicio en caso de:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Incumplimiento de los términos y condiciones</li>
                <li>Impago de los servicios</li>
                <li>Uso inadecuado o ilícito del servicio</li>
                <li>Decisión unilateral con notificación previa</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Protección de Datos
              </h2>
              <p className="text-gray-700 mb-4">
                El tratamiento de datos personales se rige por nuestra Política de Privacidad, que cumple con el RGPD y la LOPD-GDD.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Modificaciones del Servicio
              </h2>
              <p className="text-gray-700 mb-4">
                NextLeadIn se reserva el derecho de modificar, suspender o discontinuar cualquier aspecto del servicio con notificación previa de 30 días.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Ley Aplicable y Jurisdicción
              </h2>
              <p className="text-gray-700 mb-4">
                Estos términos se rigen por la legislación española. Para cualquier disputa, las partes se someten a los juzgados y tribunales de [CIUDAD].
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                13. Resolución de Disputas
              </h2>
              <p className="text-gray-700 mb-4">
                En caso de disputa, las partes se comprometen a intentar resolverla mediante negociación directa. Si no es posible, se podrá recurrir a mediación o arbitraje.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                14. Disposiciones Generales
              </h2>
              <p className="text-gray-700 mb-4">
                Si alguna disposición de estos términos fuera declarada inválida, el resto de disposiciones mantendrán su plena vigencia y efecto.
              </p>
              <p className="text-gray-700 mb-4">
                La no exigencia de alguna disposición no constituirá renuncia a la misma.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                15. Contacto
              </h2>
              <p className="text-gray-700 mb-4">
                Para cualquier cuestión relacionada con estos términos:
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Correo electrónico:</strong> legal@nextleadin.com<br />
                <strong>Dirección:</strong> [DIRECCIÓN]<br />
                <strong>Teléfono:</strong> [TELÉFONO]
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}