'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

type FeatureIconKey = 'leadManagement' | 'coldCalling' | 'emailSequences' | 'pipelineAnalytics'

type FeatureLink = {
  title: string
  href: string
  description: string
  iconKey: FeatureIconKey
}

const LazyMenu = dynamic(() => import('@/components/HeaderFeaturesMenuLazy'), {
  ssr: false,
  loading: () => null,
})

export default function HeaderFeaturesMenuClient({
  label,
  items,
}: {
  label: string
  items: FeatureLink[]
}) {
  const [shouldLoad, setShouldLoad] = useState(false)

  if (!shouldLoad) {
    return (
      <button
        type="button"
        className="text-gray-700 hover:text-primary-500 px-4 py-2 text-sm font-medium transition-colors duration-300 relative group"
        onPointerEnter={() => setShouldLoad(true)}
        onFocus={() => setShouldLoad(true)}
        onClick={() => setShouldLoad(true)}
      >
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-[width] duration-300 group-hover:w-full"></span>
      </button>
    )
  }

  return <LazyMenu label={label} items={items} />
}

