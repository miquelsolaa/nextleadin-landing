'use client'

export default function OfflinePage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          No tens connexió
        </h1>
        <p className="text-gray-600 mb-6">
          Comprova la teva connexió a Internet i torna a intentar-ho.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
        >
          Reintentar
        </button>
      </div>
    </div>
  )
}
