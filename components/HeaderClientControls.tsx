'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import HamburgerButton from '@/components/HamburgerButton'
import MobileMenu from '@/components/MobileMenu'
import LanguageSwitcher from '@/components/LanguageSwitcher'

type HeaderClientControlsProps = {
  mobileMenuButtonId: string
  mobileMenuPanelId: string
}

export default function HeaderClientControls({
  mobileMenuButtonId,
  mobileMenuPanelId,
}: HeaderClientControlsProps) {
  const tHeader = useTranslations('header')
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <div className="hidden md:flex items-center">
        <LanguageSwitcher />
      </div>
      <HamburgerButton
        id={mobileMenuButtonId}
        isOpen={mobileOpen}
        onClick={() => setMobileOpen((v) => !v)}
        aria-label={mobileOpen ? tHeader('menuClose') : tHeader('menuOpen')}
        aria-controls={mobileMenuPanelId}
        aria-haspopup="dialog"
      />
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        panelId={mobileMenuPanelId}
      />
    </>
  )
}

