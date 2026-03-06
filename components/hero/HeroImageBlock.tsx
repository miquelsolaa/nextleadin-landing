'use client'

import Image from 'next/image'
import { Play } from 'lucide-react'
import { useVideoModal } from '@/components/mwc/VideoModalContext'

export default function HeroImageBlock() {
  const { openModal, label: videoLabel } = useVideoModal()

  return (
    <div className="hidden lg:flex flex-1 lg:flex-[1.2] items-center justify-end relative">
      <div className="relative w-full h-full min-h-[500px] flex items-center py-8">
        <button
          type="button"
          onClick={openModal}
          className="relative w-full max-w-none px-8 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-lg"
          aria-label={videoLabel}
        >
          <Image
            src="/images/hero/hero.png"
            alt="Panell de control NextLeadIn - Visualització de la plataforma de generació de leads amb IA, segmentació geogràfica i informes intel·ligents. Clica per veure la demo."
            width={1292}
            height={1012}
            sizes="(max-width: 1024px) 0px, (max-width: 1280px) 90vw, 1292px"
            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            priority
            fetchPriority="high"
            quality={85}
          />
          <span className="absolute inset-0 flex items-center justify-end pr-[30%]">
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/90 text-white shadow-lg flex-shrink-0">
              <Play className="w-8 h-8 ml-1" fill="currentColor" aria-hidden />
            </span>
          </span>
        </button>
      </div>
    </div>
  )
}
