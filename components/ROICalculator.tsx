'use client'

import { useState, useMemo } from 'react'

interface ROICalculatorProps {
  locale: 'ca' | 'es' | 'en'
}

export default function ROICalculator({ locale }: ROICalculatorProps) {
  const [leadsPerMonth, setLeadsPerMonth] = useState(100)
  const [hoursPerWeekResearch, setHoursPerWeekResearch] = useState(8)
  const [hourlyRate, setHourlyRate] = useState(25)
  const [currentContactRate, setCurrentContactRate] = useState(5)
  const [currentMeetingsPerMonth, setCurrentMeetingsPerMonth] = useState(3)
  const [averageDealValue, setAverageDealValue] = useState(2000)

  const t = {
    ca: {
      title: 'Calculadora ROI',
      subtitle: 'Calcula quant pots estalviar i guanyar amb NextLeadIn',
      leadsLabel: 'Leads que necessites al mes',
      hoursLabel: 'Hores setmanals dedicades a recerca',
      hourlyLabel: 'Cost per hora del comercial (€)',
      contactRateLabel: 'Taxa de contacte actual (%)',
      meetingsLabel: 'Reunions concertades al mes',
      dealValueLabel: 'Valor mitjà d\'un client (€)',
      resultsTitle: 'Els teus resultats amb NextLeadIn',
      timeSaved: 'Temps estalviat',
      hoursPerMonth: 'hores/mes',
      moneySaved: 'Estalvi en recerca',
      perMonth: '/mes',
      newContactRate: 'Nova taxa de contacte',
      newMeetings: 'Noves reunions/mes',
      additionalRevenue: 'Ingressos addicionals potencials',
      perYear: '/any',
      roi: 'ROI estimat',
      ctaTitle: 'Comença a estalviar avui',
      ctaButton: 'Prova gratuïta 7 dies',
      disclaimer: '* Estimacions basades en dades de clients de NextLeadIn. Resultats reals poden variar.'
    },
    es: {
      title: 'Calculadora ROI',
      subtitle: 'Calcula cuánto puedes ahorrar y ganar con NextLeadIn',
      leadsLabel: 'Leads que necesitas al mes',
      hoursLabel: 'Horas semanales dedicadas a búsqueda',
      hourlyLabel: 'Coste por hora del comercial (€)',
      contactRateLabel: 'Tasa de contacto actual (%)',
      meetingsLabel: 'Reuniones concertadas al mes',
      dealValueLabel: 'Valor medio de un cliente (€)',
      resultsTitle: 'Tus resultados con NextLeadIn',
      timeSaved: 'Tiempo ahorrado',
      hoursPerMonth: 'horas/mes',
      moneySaved: 'Ahorro en búsqueda',
      perMonth: '/mes',
      newContactRate: 'Nueva tasa de contacto',
      newMeetings: 'Nuevas reuniones/mes',
      additionalRevenue: 'Ingresos adicionales potenciales',
      perYear: '/año',
      roi: 'ROI estimado',
      ctaTitle: 'Empieza a ahorrar hoy',
      ctaButton: 'Prueba gratuita 7 días',
      disclaimer: '* Estimaciones basadas en datos de clientes de NextLeadIn. Los resultados reales pueden variar.'
    },
    en: {
      title: 'ROI Calculator',
      subtitle: 'Calculate how much you can save and earn with NextLeadIn',
      leadsLabel: 'Leads needed per month',
      hoursLabel: 'Weekly hours spent on research',
      hourlyLabel: 'Hourly rate per sales rep (€)',
      contactRateLabel: 'Current contact rate (%)',
      meetingsLabel: 'Meetings booked per month',
      dealValueLabel: 'Average deal value (€)',
      resultsTitle: 'Your results with NextLeadIn',
      timeSaved: 'Time saved',
      hoursPerMonth: 'hours/month',
      moneySaved: 'Research savings',
      perMonth: '/month',
      newContactRate: 'New contact rate',
      newMeetings: 'New meetings/month',
      additionalRevenue: 'Potential additional revenue',
      perYear: '/year',
      roi: 'Estimated ROI',
      ctaTitle: 'Start saving today',
      ctaButton: '7-day free trial',
      disclaimer: '* Estimates based on NextLeadIn customer data. Actual results may vary.'
    }
  }[locale]

  const results = useMemo(() => {
    const monthlyResearchHours = hoursPerWeekResearch * 4
    const timeSavedHours = Math.round(monthlyResearchHours * 0.9)
    const moneySaved = timeSavedHours * hourlyRate
    const newContactRate = Math.min(currentContactRate * 3, 25)
    const meetingsMultiplier = newContactRate / currentContactRate
    const newMeetings = Math.round(currentMeetingsPerMonth * meetingsMultiplier)
    const additionalMeetings = newMeetings - currentMeetingsPerMonth
    const conversionRate = 0.25
    const additionalDeals = additionalMeetings * conversionRate
    const additionalRevenuePerMonth = additionalDeals * averageDealValue
    const additionalRevenuePerYear = additionalRevenuePerMonth * 12
    const planCost = leadsPerMonth <= 500 ? 79 : leadsPerMonth <= 2000 ? 199 : 599
    const totalSavingsPerMonth = moneySaved + additionalRevenuePerMonth
    const roi = Math.round(((totalSavingsPerMonth - planCost) / planCost) * 100)

    return {
      timeSavedHours,
      moneySaved,
      newContactRate,
      newMeetings,
      additionalRevenuePerYear,
      roi
    }
  }, [leadsPerMonth, hoursPerWeekResearch, hourlyRate, currentContactRate, currentMeetingsPerMonth, averageDealValue])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat(locale === 'en' ? 'en-US' : 'es-ES', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(value)
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-6 text-white">
        <h2 className="text-2xl font-bold">{t.title}</h2>
        <p className="text-primary-100">{t.subtitle}</p>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="space-y-6">
            {/* Leads per month */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.leadsLabel}: <span className="text-primary-600 font-bold">{leadsPerMonth}</span>
              </label>
              <input
                type="range"
                min="50"
                max="1000"
                step="50"
                value={leadsPerMonth}
                onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
            </div>

            {/* Hours per week */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.hoursLabel}: <span className="text-primary-600 font-bold">{hoursPerWeekResearch}h</span>
              </label>
              <input
                type="range"
                min="2"
                max="20"
                step="1"
                value={hoursPerWeekResearch}
                onChange={(e) => setHoursPerWeekResearch(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
            </div>

            {/* Hourly rate */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.hourlyLabel}: <span className="text-primary-600 font-bold">{hourlyRate}€</span>
              </label>
              <input
                type="range"
                min="15"
                max="100"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
            </div>

            {/* Current contact rate */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.contactRateLabel}: <span className="text-primary-600 font-bold">{currentContactRate}%</span>
              </label>
              <input
                type="range"
                min="1"
                max="15"
                step="1"
                value={currentContactRate}
                onChange={(e) => setCurrentContactRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
            </div>

            {/* Current meetings */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.meetingsLabel}: <span className="text-primary-600 font-bold">{currentMeetingsPerMonth}</span>
              </label>
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={currentMeetingsPerMonth}
                onChange={(e) => setCurrentMeetingsPerMonth(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
            </div>

            {/* Average deal value */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.dealValueLabel}: <span className="text-primary-600 font-bold">{formatCurrency(averageDealValue)}</span>
              </label>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={averageDealValue}
                onChange={(e) => setAverageDealValue(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
            </div>
          </div>

          {/* Results */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6">{t.resultsTitle}</h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                <span className="text-gray-600">{t.timeSaved}</span>
                <span className="text-2xl font-bold text-primary-600">
                  {results.timeSavedHours} {t.hoursPerMonth}
                </span>
              </div>

              <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                <span className="text-gray-600">{t.moneySaved}</span>
                <span className="text-2xl font-bold text-primary-600">
                  {formatCurrency(results.moneySaved)}{t.perMonth}
                </span>
              </div>

              <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                <span className="text-gray-600">{t.newContactRate}</span>
                <span className="text-2xl font-bold text-green-600">
                  {results.newContactRate.toFixed(0)}%
                </span>
              </div>

              <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                <span className="text-gray-600">{t.newMeetings}</span>
                <span className="text-2xl font-bold text-green-600">
                  {results.newMeetings}
                </span>
              </div>

              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="text-gray-700 font-medium">{t.additionalRevenue}</span>
                <span className="text-2xl font-bold text-green-600">
                  {formatCurrency(results.additionalRevenuePerYear)}{t.perYear}
                </span>
              </div>

              <div className="flex justify-between items-center p-4 bg-primary-50 rounded-lg border border-primary-200">
                <span className="text-gray-700 font-medium">{t.roi}</span>
                <span className="text-3xl font-bold text-primary-600">
                  {results.roi}%
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-4">{t.disclaimer}</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{t.ctaTitle}</h3>
          <a
            href={`/${locale === 'ca' ? '' : locale + '/'}contact`}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
          >
            {t.ctaButton}
          </a>
        </div>
      </div>
    </div>
  )
}
