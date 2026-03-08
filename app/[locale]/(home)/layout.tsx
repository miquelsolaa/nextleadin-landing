import type { ReactNode } from 'react'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link
        rel="preload"
        href="/images/hero/hero-new.png"
        as="image"
        fetchPriority="high"
        media="(min-width: 1024px)"
      />
      {children}
    </>
  )
}

