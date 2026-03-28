'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from '@/i18n/routing'
import { trackGtagPageView } from '@/lib/analytics'

export default function AnalyticsRouteTracker() {
  const pathname = usePathname()
  const isFirstPathRef = useRef(true)

  useEffect(() => {
    if (isFirstPathRef.current) {
      isFirstPathRef.current = false
      return
    }
    trackGtagPageView()
  }, [pathname])

  return null
}
