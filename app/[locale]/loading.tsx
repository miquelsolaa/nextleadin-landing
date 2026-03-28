export default function LocaleLoading() {
  return (
    <div className="flex min-h-[50vh] w-full items-center justify-center bg-gray-50" aria-busy="true">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary-600 border-t-transparent" />
    </div>
  )
}
