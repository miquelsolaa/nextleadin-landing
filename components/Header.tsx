'use client'

import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const navigation = [
    { name: 'Funcionalitats', href: '/#funcionalitats' },
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
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/logo/logo-icon.svg"
                alt="NextLeadIn Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-gray-900">NextLeadIn</span>
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
              href="https://app.nextleadin.com"
              className="header-cta-button bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-3 text-sm font-medium border border-gray-200 hover:border-gray-300"
            >
              Iniciar sessió
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
