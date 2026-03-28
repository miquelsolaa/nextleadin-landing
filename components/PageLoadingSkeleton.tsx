const bar = 'rounded-md bg-gray-200 motion-safe:animate-pulse motion-reduce:bg-gray-100'

const PageLoadingSkeleton = () => (
  <div
    className="min-h-[50vh] w-full bg-gradient-to-b from-primary-50/40 to-white"
    aria-busy="true"
    role="status"
  >
    <span className="sr-only">Loading page content, please wait.</span>
    <div className="container-custom py-12 sm:py-16">
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <div className={`mx-auto h-3 w-24 ${bar}`} />
        <div className={`mx-auto h-9 w-full max-w-lg sm:h-11 ${bar}`} />
        <div className={`mx-auto h-4 w-full max-w-md ${bar}`} />
        <div className={`mx-auto h-4 w-4/5 max-w-sm ${bar}`} />
      </div>
      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`h-36 rounded-xl sm:h-40 ${bar}`} />
        ))}
      </div>
    </div>
  </div>
)

export default PageLoadingSkeleton
