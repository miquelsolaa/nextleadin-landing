'use client'

import dynamic from 'next/dynamic'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import type { AppLocale } from '@/i18n/routing'
import type { NavGridLink } from '@/components/HeaderNavGridMenuLazy'

const LazyMenu = dynamic(() => import('@/components/HeaderNavGridMenuLazy'), {
  ssr: false,
  loading: () => null,
})

export default function HeaderNavGridMenuClient({
  label,
  items,
  linkLocale,
  gridClassName,
}: {
  label: string
  items: NavGridLink[]
  linkLocale: AppLocale
  gridClassName?: string
}) {
  const [shouldLoad, setShouldLoad] = useState(false)

  if (!shouldLoad) {
    return (
      <button
        type="button"
        className="inline-flex items-center text-gray-700 hover:text-primary-500 px-4 py-2 text-sm font-medium transition-colors duration-300 relative group"
        onPointerEnter={() => setShouldLoad(true)}
        onFocus={() => setShouldLoad(true)}
        onClick={() => setShouldLoad(true)}
      >
        {label}
        <ChevronDown
          className="relative top-px ml-1 h-4 w-4 shrink-0 text-gray-500 group-hover:text-gray-600"
          aria-hidden
        />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-[width] duration-300 group-hover:w-full" />
      </button>
    )
  }

  return <LazyMenu label={label} items={items} linkLocale={linkLocale} gridClassName={gridClassName} />
}
