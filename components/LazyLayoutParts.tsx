'use client'

import dynamic from 'next/dynamic'

const ScrollToTopButton = dynamic(
  () => import('@/components/ScrollToTopButton'),
  {
    ssr: false,
    loading: () => null,
  }
)
const CookieConsent = dynamic(
  () => import('@/components/CookieConsent'),
  {
    ssr: false,
    loading: () => null,
  }
)

const AnalyticsRouteTracker = dynamic(
  () => import('@/components/AnalyticsRouteTracker'),
  { ssr: false, loading: () => null }
)

export default function LazyLayoutParts() {
  return (
    <>
      <ScrollToTopButton />
      <CookieConsent />
      <AnalyticsRouteTracker />
    </>
  )
}
