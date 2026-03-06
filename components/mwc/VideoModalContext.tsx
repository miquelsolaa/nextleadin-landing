'use client'

import { createContext, useCallback, useContext, useState, useEffect, useRef } from 'react'
import { useLocale } from 'next-intl'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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

type VideoModalContextType = {
  openModal: () => void
  videoId: string | null
  thumbnailUrl: string | null
  embedUrl: string | null
  label: string
}

const VideoModalContext = createContext<VideoModalContextType | null>(null)

export function useVideoModal() {
  const ctx = useContext(VideoModalContext)
  if (!ctx) throw new Error('useVideoModal must be used within VideoModalProvider')
  return ctx
}

export function VideoModalProvider({ children }: { children: React.ReactNode }) {
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

  const openModal = useCallback(() => {
    previousActiveRef.current = document.activeElement as HTMLElement | null
    setModalOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setModalOpen(false)
    previousActiveRef.current?.focus()
  }, [])

  // Auto-open modal when landing with #demo-video or ?openVideo=1
  useEffect(() => {
    if (typeof window === 'undefined') return
    const hash = window.location.hash
    const params = new URLSearchParams(window.location.search)
    if (hash === '#demo-video' || params.get('openVideo') === '1') {
      openModal()
    }
  }, [openModal])

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
    <VideoModalContext.Provider
      value={{
        openModal,
        videoId,
        thumbnailUrl,
        embedUrl,
        label: t,
      }}
    >
      {children}
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
    </VideoModalContext.Provider>
  )
}
