'use client'

import { useState, useCallback } from 'react'
import {
  sectors,
  type SectorId,
  type ScriptType,
  type SectorIconName
} from '@/lib/cold-calling-scripts-data'
import {
  Plus,
  Copy,
  Check,
  ChevronRight,
  UtensilsCrossed,
  Stethoscope,
  Wrench,
  Building2,
  Sparkles,
  GraduationCap
} from 'lucide-react'

const SECTOR_ICONS: Record<SectorIconName, React.ComponentType<{ className?: string }>> = {
  'utensils-crossed': UtensilsCrossed,
  stethoscope: Stethoscope,
  wrench: Wrench,
  'building-2': Building2,
  sparkles: Sparkles,
  'graduation-cap': GraduationCap
}

type Locale = 'es' | 'ca' | 'en'

interface ColdCallingScriptsContentProps {
  locale: Locale
}

const SCRIPT_TYPE_STYLES: Record<ScriptType, string> = {
  apertura: 'bg-primary-100/80 text-primary-700 border-primary-200',
  objecion: 'bg-amber-100/80 text-amber-700 border-amber-200',
  cierre: 'bg-blue-100/80 text-blue-700 border-blue-200',
  voicemail: 'bg-violet-100/80 text-violet-700 border-violet-200'
}

const SCRIPT_TYPE_LABELS: Record<ScriptType, Record<Locale, string>> = {
  apertura: { es: 'Apertura', ca: 'Obertura', en: 'Opening' },
  objecion: { es: 'Objeción', ca: 'Objecció', en: 'Objection' },
  cierre: { es: 'Cierre', ca: 'Tancament', en: 'Close' },
  voicemail: { es: 'Voicemail', ca: 'Voicemail', en: 'Voicemail' }
}

const LEGEND_COLORS: Record<ScriptType, string> = {
  apertura: 'bg-primary-500',
  objecion: 'bg-amber-500',
  cierre: 'bg-blue-500',
  voicemail: 'bg-violet-500'
}

function formatScriptText(text: string) {
  return text.split(/\n/).map((line, i) => {
    if (line.startsWith('TÚ:') || line.startsWith('TU:') || line.startsWith('YOU:')) {
      return (
        <span key={i} className="block">
          <span className="text-primary-600 font-semibold">
            {line.match(/^(TÚ|TU|YOU):/)?.[0]}
          </span>
          <span className="text-gray-700">{line.replace(/^(TÚ|TU|YOU):\s*/, '')}</span>
        </span>
      )
    }
    if (line.startsWith('ELLOS:') || line.startsWith('ELLS:') || line.startsWith('THEM:')) {
      return (
        <span key={i} className="block text-gray-600 italic">
          <span className="font-semibold not-italic">
            {line.match(/^(ELLOS|ELLS|THEM):/)?.[0]}
          </span>
          {line.replace(/^(ELLOS|ELLS|THEM):\s*/, '')}
        </span>
      )
    }
    return line ? <span key={i} className="block">{line}</span> : <br key={i} />
  })
}

const SECTOR_PILL_LABELS: Record<SectorId, Record<Locale, string>> = {
  restaurantes: { es: 'Restaurantes', ca: 'Restaurants', en: 'Restaurants' },
  dental: { es: 'Clínicas Dental', ca: 'Clíniques Dentals', en: 'Dental Clinics' },
  talleres: { es: 'Talleres', ca: 'Tallers', en: 'Workshops' },
  inmobiliarias: { es: 'Inmobiliarias', ca: 'Immobiliàries', en: 'Real Estate' },
  estetica: { es: 'Estética & Spa', ca: 'Estètica & Spa', en: 'Aesthetics & Spa' },
  academia: { es: 'Academias', ca: 'Acadèmies', en: 'Academies' }
}

const UI_TEXTS: Record<
  Locale,
  {
    filterAriaLabel: string
    introHowToUse: string
    introHowToUseDesc: string
    introObjective: string
    introObjectiveDesc: string
    introTip: string
    introTipDesc: string
    notesTitle: string
    copyBtn: string
    copiedBtn: string
    ctaTitle1: string
    ctaTitle2: string
    ctaDesc: string
    ctaButton: string
  }
> = {
  es: {
    introHowToUse: 'Cómo usar estos scripts',
    introHowToUseDesc: 'Adapta los campos en naranja al negocio concreto antes de llamar. No leas, interioriza.',
    introObjective: 'Objetivo de cada llamada',
    introObjectiveDesc: 'No vender. Conseguir 15 minutos de demo. Una sola pregunta de cierre al final.',
    introTip: 'Tip clave',
    introTipDesc: 'Menciona el nombre del negocio 2 veces como mínimo. Demuestra que has investigado.',
    notesTitle: 'Notas de uso',
    copyBtn: 'Copiar script',
    copiedBtn: 'Copiado',
    ctaTitle1: 'Ahora tienes los scripts.',
    ctaTitle2: 'Falta la lista de a quién llamar.',
    ctaDesc: 'Accede a miles de negocios locales en España con teléfono verificado y contexto IA por lead.',
    ctaButton: 'Probar NextLeadIn gratis →',
    filterAriaLabel: 'Filtrar por sector'
  },
  ca: {
    introHowToUse: 'Com usar aquests scripts',
    introHowToUseDesc: 'Adapta els camps en taronja al negoci concret abans de trucar. No llegeixis, interioritza.',
    introObjective: 'Objectiu de cada trucada',
    introObjectiveDesc: 'No vendre. Consseguir 15 minuts de demo. Una sola pregunta de tancament al final.',
    introTip: 'Consell clau',
    introTipDesc: 'Menciona el nom del negoci 2 vegades com a mínim. Demostra que has investigat.',
    notesTitle: 'Notes d\'ús',
    copyBtn: 'Copiar script',
    copiedBtn: 'Copiat',
    ctaTitle1: 'Ara tens els scripts.',
    ctaTitle2: 'Falta la llista de a qui trucar.',
    ctaDesc: 'Accedeix a milers de negocis locals a Espanya amb telèfon verificat i context IA per lead.',
    ctaButton: 'Provar NextLeadIn gratis →',
    filterAriaLabel: 'Filtrar per sector'
  },
  en: {
    introHowToUse: 'How to use these scripts',
    introHowToUseDesc: 'Adapt the orange fields to the specific business before calling. Don\'t read, internalize.',
    introObjective: 'Goal of each call',
    introObjectiveDesc: 'Don\'t sell. Get 15 minutes of demo. One closing question at the end.',
    introTip: 'Key tip',
    introTipDesc: 'Mention the business name at least 2 times. Show you\'ve done your research.',
    notesTitle: 'Usage notes',
    copyBtn: 'Copy script',
    copiedBtn: 'Copied',
    ctaTitle1: 'Now you have the scripts.',
    ctaTitle2: 'You need the list of who to call.',
    ctaDesc: 'Access thousands of local businesses in Spain with verified phone and AI context per lead.',
    ctaButton: 'Try NextLeadIn free →',
    filterAriaLabel: 'Filter by sector'
  }
}

const ALL_SECTORS: { id: 'todos' | SectorId; labelKey?: SectorId }[] = [
  { id: 'todos' },
  { id: 'restaurantes', labelKey: 'restaurantes' },
  { id: 'dental', labelKey: 'dental' },
  { id: 'talleres', labelKey: 'talleres' },
  { id: 'inmobiliarias', labelKey: 'inmobiliarias' },
  { id: 'estetica', labelKey: 'estetica' },
  { id: 'academia', labelKey: 'academia' }
]

const PILL_ALL: Record<Locale, string> = {
  es: 'Todos',
  ca: 'Tots',
  en: 'All'
}

export default function ColdCallingScriptsContent({ locale }: ColdCallingScriptsContentProps) {
  const ui = UI_TEXTS[locale]
  const [activeSector, setActiveSector] = useState<'todos' | SectorId>('todos')
  const [openCardIds, setOpenCardIds] = useState<Set<string>>(new Set())
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const toggleCard = useCallback((id: string) => {
    setOpenCardIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const copyScript = useCallback(async (cardId: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(cardId)
      setTimeout(() => setCopiedId(null), 2000)
    } catch {
      // Fallback per navegadors sense clipboard API
    }
  }, [])

  return (
    <div className="max-w-3xl mx-auto">
      {/* Sector filter - wrapped grid, all visible, no scroll */}
      <div
        className="sticky top-[var(--header-height,4rem)] z-10 py-4 mb-6 sm:mb-8 bg-white border-b border-gray-100"
        role="tablist"
        aria-label={ui.filterAriaLabel}
      >
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
          {ui.filterAriaLabel}
        </p>
        <div className="flex flex-wrap gap-2">
          {ALL_SECTORS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={activeSector === item.id}
              onClick={() => setActiveSector(item.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
                activeSector === item.id
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              {item.id === 'todos' ? (
                PILL_ALL[locale]
              ) : item.labelKey ? (
                <>
                  {(() => {
                    const s = sectors.find((sec) => sec.id === item.labelKey)
                    const Icon = s ? SECTOR_ICONS[s.icon] : null
                    return Icon ? (
                      <Icon className="w-4 h-4 shrink-0" aria-hidden />
                    ) : null
                  })()}
                  <span>{SECTOR_PILL_LABELS[item.labelKey][locale]}</span>
                </>
              ) : null}
            </button>
          ))}
        </div>
      </div>

      {/* Intro box - responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 p-4 sm:p-5 bg-primary-50/80 border border-primary-200/80 rounded-xl mb-6 sm:mb-8">
        <div className="space-y-1">
          <span className="text-xs font-mono tracking-wider text-primary-600 uppercase">
            {ui.introHowToUse}
          </span>
          <p className="text-sm text-gray-600">{ui.introHowToUseDesc}</p>
        </div>
        <div className="space-y-1">
          <span className="text-xs font-mono tracking-wider text-primary-600 uppercase">
            {ui.introObjective}
          </span>
          <p className="text-sm text-gray-600">{ui.introObjectiveDesc}</p>
        </div>
        <div className="space-y-1">
          <span className="text-xs font-mono tracking-wider text-primary-600 uppercase">
            {ui.introTip}
          </span>
          <p className="text-sm text-gray-600">{ui.introTipDesc}</p>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 sm:mb-8">
        {(['apertura', 'objecion', 'cierre', 'voicemail'] as const).map((type) => (
          <div key={type} className="flex items-center gap-2 text-sm text-gray-500">
            <div className={`w-2 h-2 rounded-full ${LEGEND_COLORS[type]}`} />
            <span>{SCRIPT_TYPE_LABELS[type][locale]}</span>
          </div>
        ))}
      </div>

      {/* Sector blocks */}
      {sectors.map((sector) => {
        const isVisible =
          activeSector === 'todos' || sector.id === activeSector
        if (!isVisible) return null

        return (
          <section
            key={sector.id}
            className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-300"
            data-sector={sector.id}
          >
            <div className="flex items-start gap-4 mb-6 pb-4 border-b border-gray-200">
              <div
                className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary-50 border border-primary-200 text-primary-600"
                aria-hidden
              >
                {(() => {
                  const Icon = SECTOR_ICONS[sector.icon]
                  return Icon ? <Icon className="w-6 h-6" /> : null
                })()}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {sector.title[locale]}
                </h2>
                <p className="text-sm text-gray-500 mt-0.5 font-mono">
                  {sector.description[locale]}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {sector.scripts.map((script) => {
                const cardId = `card-${sector.id}-${script.id}`
                const isOpen = openCardIds.has(cardId)

                return (
                  <article
                    key={script.id}
                    id={cardId}
                    className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-primary-300 transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleCard(cardId)}
                      className="w-full flex items-center justify-between gap-4 px-4 sm:px-5 py-4 min-h-[56px] sm:min-h-0 text-left hover:bg-gray-50/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset rounded-t-lg"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`shrink-0 text-xs font-mono tracking-wider px-2 py-0.5 rounded border ${SCRIPT_TYPE_STYLES[script.type]}`}
                        >
                          {SCRIPT_TYPE_LABELS[script.type][locale]}
                        </span>
                        <span className="font-medium text-gray-900 truncate text-left">
                          {script.name[locale]}
                        </span>
                      </div>
                      <Plus
                        className={`shrink-0 w-5 h-5 text-gray-400 transition-transform duration-200 ${
                          isOpen ? 'rotate-45 text-primary-600' : ''
                        }`}
                        aria-hidden
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-gray-100 px-5 pb-5 pt-4 animate-in fade-in duration-200">
                        <div
                          className="font-mono text-sm leading-relaxed text-gray-700 p-4 bg-gray-50 border-l-4 border-primary-500 rounded-r"
                          style={{ whiteSpace: 'pre-wrap' }}
                        >
                          {formatScriptText(script.text[locale])}
                        </div>

                        <div className="mt-4 p-4 bg-primary-50/50 border border-primary-200 rounded-lg">
                          <div className="text-xs font-mono tracking-wider text-primary-600 uppercase mb-2">
                            {ui.notesTitle}
                          </div>
                          <ul className="space-y-1.5">
                            {script.tips[locale].map((tip, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-gray-600"
                              >
                                <ChevronRight
                                  className="w-4 h-4 shrink-0 mt-0.5 text-primary-600"
                                  aria-hidden
                                />
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button
                          type="button"
                          onClick={() => copyScript(cardId, script.text[locale])}
                          className={`mt-4 flex items-center gap-2 px-4 py-2.5 min-h-[44px] text-xs font-mono tracking-wider uppercase border rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
                            copiedId === cardId
                              ? 'border-primary-600 text-primary-600 bg-primary-50'
                              : 'border-gray-200 text-gray-500 hover:border-primary-300 hover:text-primary-600'
                          }`}
                        >
                          {copiedId === cardId ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              {ui.copiedBtn}
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              {ui.copyBtn}
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </article>
                )
              })}
            </div>
          </section>
        )
      }      )}
    </div>
  )
}
