import type { ReactNode } from 'react'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link
        rel="preload"
        href="/images/hero/hero.png"
        as="image"
        fetchPriority="high"
      />
      {children}
    </>
  )
}

