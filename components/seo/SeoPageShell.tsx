import type { ReactNode } from 'react'

const SeoPageShell = ({ children }: { children: ReactNode }) => (
  <div className="min-w-0 w-full overflow-x-hidden">{children}</div>
)

export default SeoPageShell
