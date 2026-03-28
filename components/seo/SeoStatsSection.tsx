import type { ReactNode } from 'react'

interface SeoStatsSectionProps {
  title: ReactNode
  stats: { value: string; label: string }[]
  headingId?: string
}

const SeoStatsSection = ({ title, stats, headingId = 'stats-heading' }: SeoStatsSectionProps) => (
  <section className="bg-white py-16" aria-labelledby={headingId}>
    <div className="container mx-auto px-4">
      <h2
        id={headingId}
        className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl"
      >
        {title}
      </h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="mb-2 text-4xl font-bold text-primary-600 sm:text-5xl">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default SeoStatsSection
