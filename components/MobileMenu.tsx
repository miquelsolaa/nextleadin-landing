'use client'

import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useEffect, useRef } from 'react'
import {
  X,
  ChevronRight,
  Phone,
  Globe,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import LanguageSwitcher from '@/components/LanguageSwitcher'

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
  panelId?: string
}

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

const MobileMenu = ({ isOpen, onClose, panelId = 'mobile-menu-panel' }: MobileMenuProps) => {
  const t = useTranslations('header.mobileMenu')
  const panelRef = useRef<HTMLDivElement>(null)
  const previouslyFocusedRef = useRef<Element | null>(null)

  useEffect(() => {
    if (!isOpen) return
    previouslyFocusedRef.current = document.activeElement
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
      const previous = previouslyFocusedRef.current
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Focus trap
  useEffect(() => {
    if (!isOpen || !panelRef.current) return
    const panel = panelRef.current
    const focusables = panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    if (first) first.focus()

    const handleTab = (e: KeyboardEvent) => {
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
    panel.addEventListener('keydown', handleTab)
    return () => panel.removeEventListener('keydown', handleTab)
  }, [isOpen])

  const navItems = [
    { name: t('features'), href: '/features' },
    { name: t('sectors'), href: '/industries' },
    { name: t('recursos'), href: '/resources' },
    { name: t('pricing'), href: '/pricing' },
    { name: t('blog'), href: '/blog' },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] md:hidden overflow-hidden">
      {/* Overlay backdrop - click to close */}
      <button
        type="button"
        aria-label={t('closeOverlay')}
        className="fixed inset-0 bg-black/50 transition-opacity duration-300 ease-out border-0 outline-none focus:outline-none focus:ring-0 appearance-none"
        onClick={onClose}
        tabIndex={-1}
      />

      {/* White panel - slides from right */}
      <div
        ref={panelRef}
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
        className={cn(
          'fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl',
          'flex flex-col animate-in slide-in-from-right-5 duration-300 ease-out'
        )}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-[#e5e7eb] shrink-0">
          <h2 id="mobile-menu-title" className="sr-only">
            {t('ariaLabel')}
          </h2>
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={onClose}
          >
            <Image
              src="/images/logo/logo-icon.svg"
              alt="NextLeadIn"
              width={28}
              height={28}
              sizes="28px"
              className="w-7 h-7"
            />
            <span className="text-lg font-bold font-display text-[#111827]">
              NextLeadIn
            </span>
          </Link>
          <button
            type="button"
            aria-label={t('close')}
            className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-md text-[#111827] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:ring-offset-2"
            onClick={onClose}
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Main nav items */}
        <nav className="flex-1 overflow-y-auto py-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center justify-between w-full py-5 px-4 text-lg font-bold text-[#111827] hover:bg-gray-50 border-b border-[#e5e7eb] transition-colors min-h-[52px]"
            >
              {item.name}
              <ChevronRight className="h-5 w-5 shrink-0 text-gray-400" aria-hidden="true" />
            </Link>
          ))}
        </nav>

        {/* Utility links */}
        <div className="shrink-0 px-4 py-3 border-t border-[#e5e7eb] space-y-1 overflow-visible">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center gap-3 py-2.5 px-2 text-sm text-[#111827] hover:bg-gray-50 rounded-md"
          >
            <Phone className="h-4 w-4 shrink-0 text-gray-500" aria-hidden="true" />
            {t('contacte')}
            <ChevronRight className="h-4 w-4 ml-auto text-gray-400" aria-hidden="true" />
          </Link>
          <div className="flex items-center gap-3 py-2.5 px-2 relative overflow-visible">
            <Globe className="h-4 w-4 shrink-0 text-gray-500" aria-hidden="true" />
            <div className="flex-1 min-w-0 overflow-visible">
              <LanguageSwitcher dropdownPlacement="bottom" dropdownAlign="left" />
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="shrink-0 p-4 pt-3 border-t border-[#e5e7eb] space-y-2">
          <Link
            href="https://app.nextleadin.com/register"
            onClick={onClose}
            className="flex items-center justify-center w-full py-3.5 px-4 text-base font-semibold text-white bg-[#22c55e] hover:bg-[#1ea34f] rounded-lg transition-colors"
          >
            {t('provaGratis')}
          </Link>
          <a
            href="tel:+34684781855"
            className="block text-center text-sm text-primary-600 hover:text-primary-700"
          >
            +34 684 781 855
          </a>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
