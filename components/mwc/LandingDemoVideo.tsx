'use client'

import { Play } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useVideoModal } from '@/components/mwc/VideoModalContext'

export default function LandingDemoVideo() {
  const { openModal, videoId, thumbnailUrl, embedUrl, label: t } = useVideoModal()

  return (
    <section id="demo-video-section" className="py-20 md:py-28 bg-white scroll-mt-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <button
            type="button"
            onClick={openModal}
            className={cn(
              'relative block w-full aspect-video rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-slate-200/40 group cursor-pointer',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-mwc-green focus-visible:ring-offset-2'
            )}
            aria-label={t}
          >
            {thumbnailUrl && embedUrl && videoId ? (
              <>
                <Image
                  src={thumbnailUrl}
                  alt=""
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                  }}
                />
                <div
                  className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"
                  aria-hidden
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    className={cn(
                      'flex items-center justify-center w-20 h-20 rounded-full',
                      'bg-mwc-green text-white shadow-xl shadow-mwc-green/30',
                      'ring-4 ring-white/80 ring-offset-4 ring-offset-transparent'
                    )}
                  >
                    <Play className="w-9 h-9 ml-1" fill="currentColor" aria-hidden />
                  </motion.span>
                </span>
                <span className="absolute bottom-5 left-5 right-5 flex justify-center">
                  <span className="text-sm font-medium text-white/95 bg-black/40 backdrop-blur px-4 py-2 rounded-full">
                    {t}
                  </span>
                </span>
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100" />
                <div className="absolute inset-0 mwc-dot-grid opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={cn(
                      'flex items-center justify-center w-20 h-20 rounded-full',
                      'bg-slate-300 text-slate-500 cursor-not-allowed'
                    )}
                    aria-hidden
                  >
                    <Play className="w-9 h-9 ml-1" fill="currentColor" />
                  </span>
                </div>
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
