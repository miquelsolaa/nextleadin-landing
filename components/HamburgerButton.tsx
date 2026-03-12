'use client'

import { Menu, X } from 'lucide-react'

type HamburgerButtonProps = {
  isOpen: boolean
  onClick: () => void
  'aria-label': string
}

const HamburgerButton = ({
  isOpen,
  onClick,
  'aria-label': ariaLabel,
}: HamburgerButtonProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      className="md:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      onClick={onClick}
    >
      {isOpen ? (
        <X className="h-6 w-6" aria-hidden="true" />
      ) : (
        <Menu className="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  )
}

export default HamburgerButton
