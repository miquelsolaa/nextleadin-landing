import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import { guiaContent, type Locale } from '@/lib/guia-prospeccion-local-data'

function getLucideIcon(iconName: string, className = 'w-4 h-4'): React.ReactNode {
  const iconNamePascal = iconName
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
  const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[iconNamePascal]
  if (IconComponent) {
    return <IconComponent className={className} />
  }
  return null
}

const TAG_STYLES: Record<string, string> = {
  high: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  alto: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  alt: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  medium: 'bg-amber-100 text-amber-700 border-amber-200',
  medio: 'bg-amber-100 text-amber-700 border-amber-200',
  mitjà: 'bg-amber-100 text-amber-700 border-amber-200',
  media: 'bg-amber-100 text-amber-700 border-amber-200',
  mitjana: 'bg-amber-100 text-amber-700 border-amber-200',
  low: 'bg-gray-100 text-gray-600 border-gray-200',
  baja: 'bg-gray-100 text-gray-600 border-gray-200',
  baixa: 'bg-gray-100 text-gray-600 border-gray-200'
}

const CHAPTER_LABELS: Record<Locale, string> = {
  es: 'Capítulo',
  ca: 'Capítol',
  en: 'Chapter'
}

function getTagClass(value: string): string {
  const v = value.toLowerCase()
  if (v.includes('alt') || v.includes('high') || v.includes('direct')) return TAG_STYLES.high
  if (v.includes('med') || v.includes('medium') || v.includes('mitj')) return TAG_STYLES.medium
  return TAG_STYLES.low
}

interface GuiaProspeccionLocalContentProps {
  locale: Locale
  localePrefix: string
}

export default function GuiaProspeccionLocalContent({
  locale,
  localePrefix
}: GuiaProspeccionLocalContentProps) {
  const c = guiaContent[locale]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-0 max-w-5xl mx-auto">
      {/* TOC - hidden on mobile */}
      <aside className="hidden lg:block sticky top-24 pb-8 pr-8 border-r border-gray-200">
        <div className="text-xs font-mono tracking-wider text-gray-500 uppercase mb-4">
          {locale === 'es' ? 'Contenidos' : locale === 'ca' ? 'Continguts' : 'Contents'}
        </div>
        <nav className="space-y-0.5" aria-label="Table of contents">
          {c.toc.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex items-start gap-2 text-sm text-gray-500 hover:text-primary-600 py-2 px-3 -ml-3 rounded border-l-2 border-transparent hover:border-primary-300 transition-colors"
            >
              <span className="font-mono text-xs shrink-0">{item.num}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      <article className="lg:pl-12 pb-16">
        {/* Hero meta */}
        <div className="flex flex-wrap gap-6 sm:gap-8 py-6 border-y border-gray-200 mb-8">
          {c.hero.meta.map((item, i) => (
            <div key={i} className="flex items-center gap-2 font-mono text-sm text-gray-500">
              <span className="text-primary-600 shrink-0" aria-hidden>
                {getLucideIcon(item.icon)}
              </span>
              {item.text}
            </div>
          ))}
        </div>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl leading-relaxed">{c.hero.intro}</p>

        {/* Cap 1 */}
        <section id="cap1" className="scroll-mt-24 pt-8 border-t border-gray-100 first:border-t-0 first:pt-0">
          <span className="block font-mono text-xs tracking-wider text-primary-600 uppercase mb-2">
            {CHAPTER_LABELS[locale]} 01
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 mb-6">
            {c.cap1.title}
          </h2>
          <p className="text-gray-600 mb-4 max-w-2xl">{c.cap1.p1}</p>
          <p className="text-gray-600 mb-6 max-w-2xl">{c.cap1.p2}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden mb-6 max-w-2xl">
            {c.cap1.statCards.map((card, i) => (
              <div key={i} className="bg-gray-50 p-5">
                <div className="font-mono text-xl font-bold text-primary-600">{card.num}</div>
                <div className="text-sm text-gray-600 mt-1">{card.label}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mb-6 max-w-2xl">{c.cap1.p3}</p>
          <div className="bg-primary-50/50 border-l-4 border-primary-500 p-4 mb-6 max-w-2xl">
            <div className="font-mono text-xs tracking-wider text-primary-600 uppercase mb-2">
              {c.cap1.calloutLabel}
            </div>
            <p className="text-gray-700 text-sm">{c.cap1.calloutP}</p>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">{c.cap1.h3}</h3>
          <p className="text-gray-600 mb-4 max-w-2xl">{c.cap1.p4}</p>
          <ul className="space-y-2 max-w-2xl">
            {c.cap1.checklist.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-600 text-sm">
                <span className="text-primary-500 font-mono shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Cap 2 */}
        <section id="cap2" className="scroll-mt-24 pt-12 mt-12 border-t border-gray-100">
          <span className="block font-mono text-xs tracking-wider text-primary-600 uppercase mb-2">
            {CHAPTER_LABELS[locale]} 02
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 mb-6">
            {c.cap2.title}
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">{c.cap2.p1}</p>
          <div className="overflow-x-auto max-w-2xl mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  {c.cap2.tableHeaders.map((h) => (
                    <th
                      key={h}
                      className="font-mono text-xs tracking-wider text-gray-500 uppercase text-left p-3 border-b border-gray-200"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.cap2.rows.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="p-3 border-b border-gray-100 text-gray-700">
                      <span className="flex items-center gap-2">
                        <span className="text-primary-600 shrink-0" aria-hidden>
                          {getLucideIcon(row.icon, 'w-4 h-4')}
                        </span>
                        {row.sector}
                      </span>
                    </td>
                    <td className="p-3 border-b border-gray-100">
                      <span
                        className={`inline-block px-2 py-0.5 text-xs font-medium rounded border ${getTagClass(row.volumen)}`}
                      >
                        {row.volumen}
                      </span>
                    </td>
                    <td className="p-3 border-b border-gray-100">
                      <span
                        className={`inline-block px-2 py-0.5 text-xs font-medium rounded border ${getTagClass(row.acceso)}`}
                      >
                        {row.acceso}
                      </span>
                    </td>
                    <td className="p-3 border-b border-gray-100">
                      <span
                        className={`inline-block px-2 py-0.5 text-xs font-medium rounded border ${getTagClass(row.ticket)}`}
                      >
                        {row.ticket}
                      </span>
                    </td>
                    <td className="p-3 border-b border-gray-100">
                      <span
                        className={`inline-block px-2 py-0.5 text-xs font-medium rounded border ${getTagClass(row.competencia)}`}
                      >
                        {row.competencia}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">{c.cap2.h3}</h3>
          <p className="text-gray-600 mb-4 max-w-2xl">{c.cap2.p2}</p>
          <ul className="space-y-2 max-w-2xl mb-6">
            {c.cap2.checklist.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-600 text-sm">
                <span className="text-primary-500 font-mono shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="bg-primary-50/50 border-l-4 border-primary-500 p-4 max-w-2xl">
            <div className="font-mono text-xs tracking-wider text-primary-600 uppercase mb-2">
              {c.cap2.calloutLabel}
            </div>
            <p className="text-gray-700 text-sm">{c.cap2.calloutP}</p>
          </div>
        </section>

        {/* Cap 3 */}
        <section id="cap3" className="scroll-mt-24 pt-12 mt-12 border-t border-gray-100">
          <span className="block font-mono text-xs tracking-wider text-primary-600 uppercase mb-2">
            {CHAPTER_LABELS[locale]} 03
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 mb-6">
            {c.cap3.title}
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">{c.cap3.p1}</p>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{c.cap3.h3}</h3>
          <p className="text-gray-600 mb-6 max-w-2xl">{c.cap3.p2}</p>
          <ul className="space-y-0 max-w-2xl mb-6">
            {c.cap3.steps.map((step, i) => (
              <li key={i} className="flex gap-4 pb-8 relative">
                <div className="w-10 h-10 shrink-0 rounded border border-primary-200 bg-white flex items-center justify-center font-mono text-sm font-medium text-primary-600">
                  {step.letter}
                </div>
                {i < c.cap3.steps.length - 1 && (
                  <div
                    className="absolute left-5 top-10 bottom-0 w-px bg-gray-200"
                    aria-hidden
                  />
                )}
                <div>
                  <div className="font-semibold text-gray-900 mt-1">{step.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{step.desc}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden mb-6 max-w-2xl">
            {c.cap3.metrics.map((m, i) => (
              <div key={i} className="bg-gray-50 p-4">
                <div className="font-mono text-xs text-gray-500 uppercase">{m.label}</div>
                <div className="font-semibold text-gray-900 mt-1">{m.val}</div>
                <div className="text-xs text-gray-500 mt-0.5">{m.note}</div>
              </div>
            ))}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">{c.cap3.h3b}</h3>
          <p className="text-gray-600 mb-4 max-w-2xl">{c.cap3.p3}</p>
          <ul className="space-y-2 max-w-2xl">
            {c.cap3.checklist.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-600 text-sm">
                <span className="text-primary-500 font-mono shrink-0">→</span>
                <span>
                  <strong className="text-gray-800">{item.sector}</strong> {item.text}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Cap 4 */}
        <section id="cap4" className="scroll-mt-24 pt-12 mt-12 border-t border-gray-100">
          <span className="block font-mono text-xs tracking-wider text-primary-600 uppercase mb-2">
            {CHAPTER_LABELS[locale]} 04
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 mb-6">
            {c.cap4.title}
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">{c.cap4.p1}</p>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{c.cap4.h3}</h3>
          <ul className="space-y-0 max-w-2xl mb-6">
            {c.cap4.steps.map((step, i) => (
              <li key={i} className="flex gap-4 pb-8">
                <div className="w-10 h-10 shrink-0 rounded border border-primary-200 bg-white flex items-center justify-center font-mono text-sm font-medium text-primary-600">
                  {step.num}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mt-1">{step.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{step.desc}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="bg-gray-100 border-l-4 border-primary-500 p-4 mb-6 max-w-2xl">
            <div className="font-mono text-xs tracking-wider text-primary-600 uppercase mb-2">
              {c.cap4.highlightLabel}
            </div>
            <p className="text-gray-700 text-sm">{c.cap4.highlightP}</p>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">{c.cap4.h3b}</h3>
          <p className="text-gray-600 mb-6 max-w-2xl">{c.cap4.p2}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden mb-6 max-w-2xl">
            {c.cap4.metrics.map((m, i) => (
              <div key={i} className="bg-gray-50 p-4">
                <div className="font-mono text-xs text-gray-500 uppercase">{m.label}</div>
                <div className="font-semibold text-gray-900 mt-1">{m.val}</div>
                <div className="text-xs text-gray-500 mt-0.5">{m.note}</div>
              </div>
            ))}
          </div>
          <div className="bg-primary-50/50 border border-primary-200 p-6 rounded-lg max-w-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h4 className="font-display font-semibold text-gray-900">{c.cap4.ctaTitle}</h4>
              <p className="text-sm text-gray-600 mt-1">{c.cap4.ctaDesc}</p>
            </div>
            <Link
              href={`${localePrefix}/resources/cold-calling-scripts`}
              className="inline-flex items-center gap-2 bg-primary-600 text-white font-mono text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded hover:bg-primary-700 transition-colors shrink-0"
            >
              {c.cap4.ctaBtn}
            </Link>
          </div>
        </section>

        {/* Cap 5 - Objeciones (accordion) */}
        <section id="cap5" className="scroll-mt-24 pt-12 mt-12 border-t border-gray-100">
          <span className="block font-mono text-xs tracking-wider text-primary-600 uppercase mb-2">
            {CHAPTER_LABELS[locale]} 05
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 mb-6">
            {c.cap5.title}
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">{c.cap5.p1}</p>
          <div className="space-y-3 max-w-2xl">
            {c.cap5.objections.map((obj, i) => (
              <details
                key={i}
                className="group bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:border-primary-200 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-medium text-gray-700 group-open:text-gray-900">
                  <span className="italic">{obj.q}</span>
                  <span className="shrink-0 font-mono text-lg text-gray-400 group-open:text-primary-600 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-4 pb-4 pt-0 border-t border-gray-200">
                  <div className="font-mono text-xs tracking-wider text-primary-600 uppercase mt-3 mb-2">
                    {obj.aLabel}
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    {obj.a.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Cap 6 */}
        <section id="cap6" className="scroll-mt-24 pt-12 mt-12 border-t border-gray-100">
          <span className="block font-mono text-xs tracking-wider text-primary-600 uppercase mb-2">
            {CHAPTER_LABELS[locale]} 06
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-gray-900 mb-6">
            {c.cap6.title}
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">{c.cap6.p1}</p>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{c.cap6.h3}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden mb-6 max-w-2xl">
            {c.cap6.metrics.map((m, i) => (
              <div key={i} className="bg-gray-50 p-4">
                <div className="font-mono text-xs text-gray-500 uppercase">{m.label}</div>
                <div className="font-semibold text-gray-900 mt-1">{m.val}</div>
                <div className="text-xs text-gray-500 mt-0.5">{m.note}</div>
              </div>
            ))}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">{c.cap6.h3b}</h3>
          <p className="text-gray-600 mb-6 max-w-2xl">{c.cap6.p2}</p>
          <ul className="space-y-0 max-w-2xl mb-6">
            {c.cap6.steps.map((step, i) => (
              <li key={i} className="flex gap-4 pb-8">
                <div className="w-12 h-10 shrink-0 rounded border border-primary-200 bg-white flex items-center justify-center font-mono text-sm font-medium text-primary-600">
                  {step.num}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mt-1">{step.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{step.desc}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="bg-primary-50/50 border-l-4 border-primary-500 p-4 mb-6 max-w-2xl">
            <div className="font-mono text-xs tracking-wider text-primary-600 uppercase mb-2">
              {c.cap6.calloutLabel}
            </div>
            <p className="text-gray-700 text-sm">{c.cap6.calloutP}</p>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">{c.cap6.h3c}</h3>
          <p className="text-gray-600 mb-6 max-w-2xl">{c.cap6.p3}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden mb-8 max-w-2xl">
            {c.cap6.statCards.map((card, i) => (
              <div key={i} className="bg-gray-50 p-5">
                <div className="font-mono text-xl font-bold text-primary-600">{card.num}</div>
                <div className="text-sm text-gray-600 mt-1">{card.label}</div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}
