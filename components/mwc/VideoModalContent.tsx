'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { XIcon } from 'lucide-react'

type AnimationVariants = {
  initial: object
  animate: object
  exit: object
}

type VideoModalContentProps = {
  open: boolean
  embedUrl: string
  title: string
  closeLabel: string
  animationVariants: AnimationVariants
  onClose: () => void
  modalRef: React.RefObject<HTMLDivElement | null>
  closeButtonRef: React.RefObject<HTMLButtonElement | null>
}

export default function VideoModalContent({
  open,
  embedUrl,
  title,
  closeLabel,
  animationVariants,
  onClose,
  modalRef,
  closeButtonRef,
}: VideoModalContentProps) {
  return (
    <AnimatePresence>
      {open && embedUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          <motion.div
            ref={modalRef}
            initial={animationVariants.initial}
            animate={animationVariants.animate}
            exit={animationVariants.exit}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative w-full max-w-4xl aspect-video mx-4 md:mx-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="absolute -top-16 right-0 text-white bg-neutral-900/50 ring-1 ring-white/20 backdrop-blur-md rounded-full p-2 hover:bg-neutral-800/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label={closeLabel}
            >
              <XIcon className="size-5" aria-hidden />
            </button>
            <div className="size-full border-2 border-white rounded-2xl overflow-hidden isolate relative">
              <iframe
                src={embedUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-2xl"
              />
            </div>
            <span id="video-modal-title" className="sr-only">
              {title}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
