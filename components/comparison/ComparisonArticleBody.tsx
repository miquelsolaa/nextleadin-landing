export interface ComparisonRow {
  label: string
  next: string
  a: string
  b: string
}

export interface ComparisonScenarioItem {
  title: string
  body: string
}

interface ComparisonArticleBodyProps {
  subtitle: string
  tableTitle: string
  scenarioTitle: string
  scenarioSubtitle: string
  scenarioItems: ComparisonScenarioItem[]
  whyBetterTitle: string
  whyBetterItems: string[]
  comparisonRows: ComparisonRow[]
  nextLeadInName: string
  toolA: string
  toolB: string
}

const ComparisonArticleBody = ({
  subtitle,
  tableTitle,
  scenarioTitle,
  scenarioSubtitle,
  scenarioItems,
  whyBetterTitle,
  whyBetterItems,
  comparisonRows,
  nextLeadInName,
  toolA,
  toolB
}: ComparisonArticleBodyProps) => {
  return (
    <div className="space-y-16">
      <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-gray-600">{subtitle}</p>

      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm [-webkit-overflow-scrolling:touch]">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm text-gray-800">
          <thead>
            <tr className="border-b border-gray-200 bg-primary-50/80">
              <th className="sticky left-0 z-[1] min-w-[10rem] border-r border-gray-100 bg-primary-50/95 px-4 py-3 font-semibold text-gray-900 backdrop-blur-sm">
                {tableTitle}
              </th>
              <th className="min-w-[8rem] px-4 py-3 font-semibold text-primary-800">{nextLeadInName}</th>
              <th className="min-w-[8rem] px-4 py-3 font-semibold text-gray-800">{toolA}</th>
              <th className="min-w-[8rem] px-4 py-3 font-semibold text-gray-800">{toolB}</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr
                key={row.label}
                className="border-b border-gray-100 transition-colors hover:bg-gray-50/80 last:border-b-0"
              >
                <td className="sticky left-0 z-[1] border-r border-gray-100 bg-white/95 px-4 py-3 font-medium text-gray-900 backdrop-blur-sm">
                  {row.label}
                </td>
                <td className="px-4 py-3 text-gray-700">{row.next}</td>
                <td className="px-4 py-3 text-gray-600">{row.a}</td>
                <td className="px-4 py-3 text-gray-600">{row.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center">
        <h2 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">{scenarioTitle}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">{scenarioSubtitle}</p>
      </div>

      <ul className="grid list-none grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {scenarioItems.map((item, index) => (
          <li
            key={item.title}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md motion-reduce:transition-none"
          >
            <div className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-800">
                {index + 1}
              </span>
              <div>
                <p className="font-display text-base font-semibold text-gray-900">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <section className="border-t border-gray-200 pt-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">{whyBetterTitle}</h2>
        <ul className="mt-6 list-disc space-y-2 pl-5 marker:text-primary-600">
          {whyBetterItems.map((item) => (
            <li key={item} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default ComparisonArticleBody
