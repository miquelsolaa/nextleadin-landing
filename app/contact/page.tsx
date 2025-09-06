"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    region: '',
    sector: '',
    message: '',
    consent: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'El nom és obligatori'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Introdueix un correu vàlid'
    if (!formData.company.trim()) newErrors.company = 'L\'empresa és obligatòria'
    if (!formData.message.trim()) newErrors.message = 'Explica\'ns breument la teva necessitat'
    if (!formData.consent) newErrors.consent = 'Cal acceptar la política de privacitat'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Parla amb el nostre equip
            </h1>
            <p className="text-xl text-gray-600">
              Generació de leads hipersegmentats i informes amb IA per preparar trucades i tancar més oportunitats.
            </p>
          </div>
        </div>
      </section>

      {/* Contingut principal */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Formulari */}
            <div className="lg:col-span-2">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={onChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${errors.name ? 'border-red-400' : 'border-gray-300'}`}
                        placeholder="Nom i cognoms"
                        required
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Correu electrònic</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={onChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
                        placeholder="el-teu@correu.com"
                        required
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={onChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${errors.company ? 'border-red-400' : 'border-gray-300'}`}
                        placeholder="Nom de l\'empresa"
                        required
                      />
                      {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telèfon (opcional)</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={onChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="+34 600 000 000"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">Càrrec</label>
                      <input
                        id="role"
                        name="role"
                        type="text"
                        value={formData.role}
                        onChange={onChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Ex. Head of Sales"
                      />
                    </div>
                    <div>
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">Zona d\'interès</label>
                      <input
                        id="region"
                        name="region"
                        type="text"
                        value={formData.region}
                        onChange={onChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Ex. Barcelona, Girona..."
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-2">Sector / nínxol</label>
                      <input
                        id="sector"
                        name="sector"
                        type="text"
                        value={formData.sector}
                        onChange={onChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Ex. restaurants vegetarians, fabricants de pressfittings, doctors..."
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Com podem ajudar-te?</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={onChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${errors.message ? 'border-red-400' : 'border-gray-300'}`}
                        placeholder="Explica\'ns objectius, volum de leads esperat i terminis."
                        required
                      />
                      {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                    </div>
                    <div className="sm:col-span-2">
                      <label className="inline-flex items-start gap-3">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={onChange}
                          className={`mt-1 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500 ${errors.consent ? 'ring-1 ring-red-400' : ''}`}
                        />
                        <span className="text-sm text-gray-700">Accepto la <Link href="/privacy-policy" className="text-green-600 hover:text-green-700 underline">política de privacitat</Link>.</span>
                      </label>
                      {errors.consent && <p className="mt-1 text-sm text-red-600">{errors.consent}</p>}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button type="submit" className="btn-primary">
                      Envia la sol·licitud
                    </button>
                    <Link href="/pricing" className="btn-secondary">
                      Consulta els preus
                    </Link>
                  </div>
                </form>
              ) : (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Gràcies pel teu interès</h3>
                  <p className="text-gray-600 mb-6">Hem rebut la teva sol·licitud. Un especialista et contactarà aviat per entendre el teu cas i proposar els propers passos.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/pricing" className="btn-secondary">Veure plans i funcionalitats</Link>
                    <Link href="/faq" className="btn-primary">Preguntes freqüents</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Aside: info de contacte i confiança */}
            <aside className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Contacte directe</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="font-medium">Email:</span> <a className="text-green-600 hover:text-green-700" href="mailto:contact@nextleadin.com">contact@nextleadin.com</a></li>
                  <li><span className="font-medium">Telèfon:</span> <a className="text-green-600 hover:text-green-700" href="tel:+34999999999">+34 999 999 999</a></li>
                  <li><span className="font-medium">Horari:</span> Dl-Dv 9:00–18:00</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Per què parlar amb nosaltres?</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Segmentació de leads per zona i sector amb precisió</li>
                  <li>Informes intel·ligents per IA per a cada empresa</li>
                  <li>Integracions i suport per al teu equip comercial</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Preferies una demo?</h4>
                <p className="text-gray-700 mb-4">Programa una sessió per veure com generem llistes i informes en temps real.</p>
                <Link href="/get-started" className="btn-primary">Sol·licita una demo</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}


