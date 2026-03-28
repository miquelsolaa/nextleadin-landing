interface SeoFaqItem {
  question: string
  answer: string
}

interface SeoFaqSectionProps {
  title: string
  items: SeoFaqItem[]
  headingId?: string
}

const SeoFaqSection = ({ title, items, headingId = 'faq-heading' }: SeoFaqSectionProps) => {
  if (items.length === 0) return null

  return (
    <section className="bg-gray-50 py-20" aria-labelledby={headingId}>
      <div className="container mx-auto px-4">
        <h2
          id={headingId}
          className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl"
        >
          {title}
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
          {items.map((item, index) => (
            <details
              key={index}
              className="group rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md motion-reduce:transition-none"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <h3 className="pr-4 text-lg font-semibold text-gray-900">{item.question}</h3>
                <svg
                  className="h-5 w-5 shrink-0 text-gray-500 transition-transform group-open:rotate-180 motion-reduce:transition-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SeoFaqSection
