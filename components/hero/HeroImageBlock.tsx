'use client'

import Image from 'next/image'
import { Play } from 'lucide-react'
import { useVideoModal } from '@/components/mwc/VideoModalContext'

export default function HeroImageBlock() {
  const { openModal, label: videoLabel } = useVideoModal()

  return (
    <div className="hidden lg:flex flex-1 lg:flex-[1.6] items-center justify-end relative">
      <div className="relative w-full h-full min-h-[560px] flex items-center py-8">
        <button
          type="button"
          onClick={openModal}
          className="relative w-full max-w-none pl-4 pr-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-xl [perspective:1200px]"
          aria-label={videoLabel}
        >
          <div className="w-full transition-transform duration-300 group-hover:scale-[1.02] [transform-style:preserve-3d] [transform:perspective(1200px)_rotateY(-6deg)_rotateX(2deg)] group-hover:[transform:perspective(1200px)_rotateY(-4deg)_rotateX(1deg)_scale(1.02)] shadow-[0_25px_50px_-12px_rgba(0,64,80,0.2),0_0_0_1px_rgba(0,64,80,0.05)] rounded-xl overflow-hidden ring-[12px] ring-black">
            <Image
              src="/images/hero/hero-new.webp"
              alt="Panell de control NextLeadIn - Visualització de la plataforma de generació de leads amb IA, segmentació geogràfica i informes intel·ligents. Clica per veure la demo."
              width={1292}
              height={1012}
              sizes="(max-width: 1024px) 0px, (max-width: 1280px) 90vw, 1400px"
              className="w-full h-auto object-contain"
              priority
              fetchPriority="high"
              quality={85}
            />
          </div>
          <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/90 text-white shadow-lg flex-shrink-0">
              <Play className="w-8 h-8 ml-1" fill="currentColor" aria-hidden />
            </span>
          </span>
        </button>
      </div>
    </div>
  )
}
