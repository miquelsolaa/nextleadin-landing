'use client'

import dynamic from 'next/dynamic'
import { createContext, useCallback, useContext, useState, useEffect, useRef } from 'react'
import { useLocale } from 'next-intl'

const VideoModalContent = dynamic(() => import('./VideoModalContent'), { ssr: false })

const DEMO_VIDEO_URL = 'https://youtu.be/s3XfQRaZPyc'

type AnimationStyle =
  | 'from-bottom'
  | 'from-center'
  | 'from-top'
  | 'from-left'
  | 'from-right'
  | 'fade'
  | 'top-in-bottom-out'
  | 'left-in-right-out'

const animationVariants: Record<
  AnimationStyle,
  { initial: object; animate: object; exit: object }
> = {
  'from-bottom': {
    initial: { y: '100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '100%', opacity: 0 },
  },
  'from-center': {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  'from-top': {
    initial: { y: '-100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '-100%', opacity: 0 },
  },
  'from-left': {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
  },
  'from-right': {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  'top-in-bottom-out': {
    initial: { y: '-100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '100%', opacity: 0 },
  },
  'left-in-right-out': {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
  },
}

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

  const animationStyle: AnimationStyle = 'from-center'
  const selectedAnimation = animationVariants[animationStyle]

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
      <VideoModalContent
        open={modalOpen}
        embedUrl={embedUrl ?? ''}
        title={t}
        closeLabel={closeText}
        animationVariants={selectedAnimation}
        onClose={handleClose}
        modalRef={modalRef}
        closeButtonRef={closeButtonRef}
      />
    </VideoModalContext.Provider>
  )
}
