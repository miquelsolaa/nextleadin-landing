'use client'

import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const navigation = [
    { name: 'Solucions', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Preus', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contacte', href: '/contact' },
  ]

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">Sierra</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-500 px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="header-cta-button bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-3 text-sm font-medium border border-gray-200 hover:border-gray-300"
            >
              Parla amb vendes
            </Link>
            <Link
              href="/get-started"
              className="header-cta-button primary bg-green-500 hover:bg-green-600 text-white px-5 py-3 text-sm font-medium"
            >
              Comença ara
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
