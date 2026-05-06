'use client'

import Image from 'next/image'
import { Play } from 'lucide-react'
import { useVideoModal } from '@/components/mwc/VideoModalContext'

export default function HeroImageBlock() {
  const { openModal, label: videoLabel } = useVideoModal()

  return (
    <div className="hidden lg:flex flex-1 lg:flex-[1.6] items-center justify-end relative py-8">
      <div className="relative w-full h-full min-h-[520px] flex items-center">
        <button
          type="button"
          onClick={openModal}
          className="group relative w-full max-w-none pl-4 pr-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-xl [perspective:1200px]"
          aria-label={videoLabel}
        >
          <div
            className="relative w-full transition-transform duration-500 ease-out group-hover:scale-[1.02] group-focus-visible:scale-[1.02] [transform-style:preserve-3d] [transform:perspective(1200px)_rotateY(-6deg)_rotateX(2deg)] group-hover:[transform:perspective(1200px)_rotateY(-5deg)_rotateX(1deg)_scale(1.02)] shadow-[0_25px_50px_-12px_rgba(0,64,80,0.2),0_0_0_1px_rgba(0,64,80,0.05)] rounded-xl overflow-hidden ring-[12px] ring-black"
          >
            <Image
              src="/images/hero/hero-new.webp"
              alt=""
              width={1292}
              height={1012}
              sizes="(max-width: 1024px) 0px, (max-width: 1280px) 90vw, 1400px"
              className="w-full h-auto object-contain"
              priority
              fetchPriority="high"
              quality={85}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/45 via-gray-900/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-primary-900/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            />
          </div>

          <span className="pointer-events-none absolute inset-0 flex items-center justify-center pl-4 pr-2">
            <span className="relative flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full bg-white/95 text-primary-600 shadow-[0_12px_40px_rgba(0,0,0,0.18)] ring-[3px] ring-white/90 backdrop-blur-[2px] transition-transform duration-300 motion-safe:group-hover:scale-110 motion-safe:group-focus-visible:scale-110">
              <span
                className="absolute inset-0 rounded-full bg-primary-400/25 motion-safe:animate-ping motion-safe:[animation-duration:2.5s]"
                aria-hidden
              />
              <Play className="relative z-[1] h-9 w-9 ml-1 drop-shadow-sm" fill="currentColor" aria-hidden />
            </span>
          </span>
        </button>
      </div>
    </div>
  )
}
