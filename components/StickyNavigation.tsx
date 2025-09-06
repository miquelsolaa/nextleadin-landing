'use client'

import { useState, useEffect } from 'react'

interface StickyNavigationProps {
  services: Array<{
    id: string
    title: string
    badge?: string | null
  }>
}

const StickyNavigation = ({ services }: StickyNavigationProps) => {
  const [activeSection, setActiveSection] = useState<string>(services[0]?.id || '')

  useEffect(() => {
    const handleScroll = () => {
      const sections = services.map(service => {
        const element = document.getElementById(service.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          return {
            id: service.id,
            isInView: rect.top <= 200 && rect.bottom >= 200
          }
        }
        return { id: service.id, isInView: false }
      })

      const activeSection = sections.find(section => section.isInView)
      if (activeSection) {
        setActiveSection(activeSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [services])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  const getIcon = (serviceId: string) => {
    switch (serviceId) {
      case 'ecommerce':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        )
      case 'client-management':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
        )
      case 'inventory':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 py-4">
      <div className="container-custom">
        <nav className="flex justify-center">
          <ul className="flex space-x-8 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200">
            {services.map((service) => (
              <li key={service.id}>
                <button
                  onClick={() => scrollToSection(service.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 relative ${
                    activeSection === service.id
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {getIcon(service.id)}
                  <span className="font-medium">{service.title}</span>
                  {service.badge && (
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full ml-1">
                      {service.badge}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default StickyNavigation
