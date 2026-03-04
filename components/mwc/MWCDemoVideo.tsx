'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { useLocale } from 'next-intl'
import { Play, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

/** Posa aquí l’URL del vídeo (YouTube). Exemple: https://www.youtube.com/watch?v=abc123 */
const DEMO_VIDEO_URL = 'https://youtu.be/s3XfQRaZPyc'

function getYouTubeVideoId(url: string): string | null {
  if (!url) return null
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  ]
  for (const p of patterns) {
    const m = url.match(p)
    if (m) return m[1]
  }
  return null
}

const label: Record<'es' | 'ca' | 'en', string> = {
  en: 'Play Demo (30s)',
  ca: 'Reproduir demo (30s)',
  es: 'Reproducir demo (30s)',
}

const closeLabel: Record<'es' | 'ca' | 'en', string> = {
  en: 'Close',
  ca: 'Tancar',
  es: 'Cerrar',
}

export default function MWCDemoVideo() {
  const locale = (useLocale() as 'es' | 'ca' | 'en') ?? 'en'
  const t = label[locale]
  const closeText = closeLabel[locale]
  const [modalOpen, setModalOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousActiveRef = useRef<HTMLElement | null>(null)

  const videoId = getYouTubeVideoId(DEMO_VIDEO_URL)
  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : null
  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
    : null

  const handleOpen = useCallback(() => {
    previousActiveRef.current = document.activeElement as HTMLElement | null
    setModalOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setModalOpen(false)
    previousActiveRef.current?.focus()
  }, [])

  useEffect(() => {
    if (!modalOpen) return
    closeButtonRef.current?.focus()
  }, [modalOpen])

  useEffect(() => {
    if (!modalOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [modalOpen, handleClose])

  useEffect(() => {
    if (!modalOpen || !modalRef.current) return
    const container = modalRef.current
    const focusables = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    const onKeyDownTrap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }
    container.addEventListener('keydown', onKeyDownTrap)
    return () => container.removeEventListener('keydown', onKeyDownTrap)
  }, [modalOpen])

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className={cn(
              'relative aspect-video rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-slate-200/40 group cursor-pointer',
              'focus-within:ring-2 focus-within:ring-mwc-green focus-within:ring-offset-2'
            )}
          >
            {thumbnailUrl && embedUrl ? (
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
                <button
                  type="button"
                  onClick={handleOpen}
                  className="absolute inset-0 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-mwc-green focus-visible:ring-inset"
                  aria-label={t}
                >
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
                </button>
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100" />
                <div className="absolute inset-0 mwc-dot-grid opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    disabled
                    className={cn(
                      'flex items-center justify-center w-20 h-20 rounded-full',
                      'bg-slate-300 text-slate-500 cursor-not-allowed'
                    )}
                    aria-label={t}
                  >
                    <Play className="w-9 h-9 ml-1" fill="currentColor" aria-hidden />
                  </motion.button>
                </div>
              </>
            )}
            <div className="absolute bottom-5 left-5 right-5 flex justify-center">
              <span className="text-sm font-medium text-white/95 bg-black/40 backdrop-blur px-4 py-2 rounded-full">
                {t}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {modalOpen && embedUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={embedUrl}
                title={t}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label={closeText}
              >
                <X className="w-6 h-6" aria-hidden />
              </button>
              <span id="video-modal-title" className="sr-only">
                {t}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
