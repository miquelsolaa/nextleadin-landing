'use client'

import dynamic from 'next/dynamic'

const ScrollToTopButton = dynamic(
  () => import('@/components/ScrollToTopButton'),
  { ssr: false }
)
const CookieConsent = dynamic(
  () => import('@/components/CookieConsent'),
  { ssr: false }
)

export default function LazyLayoutParts() {
  return (
    <>
      <ScrollToTopButton />
      <CookieConsent />
    </>
  )
}
