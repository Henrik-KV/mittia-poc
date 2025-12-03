import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

// Navigation items with brand colors matching each fair's logo
const navItems = [
  { 
    name: 'Hem', 
    href: '/', 
    // Mittia brand: golden yellow background with dark red text
    style: { bg: '#FFE500', text: '#8B1E3F', hoverBg: '#FFD000' }
  },
  { 
    name: 'Skogstransport', 
    href: '/skogstransport', 
    // Black background with yellow text - matching Skogstransport logo
    style: { bg: '#1A1A1A', text: '#FFE500', hoverBg: '#333333' }
  },
  { 
    name: 'Gård & Skog', 
    href: '/gard-skog', 
    // Green theme
    style: { bg: '#166534', text: '#FFFFFF', hoverBg: '#15803d' }
  },
  { 
    name: 'Park & Gata', 
    href: '/park-gata', 
    // Orange theme
    style: { bg: '#EA580C', text: '#FFFFFF', hoverBg: '#F97316' }
  },
  { 
    name: 'Expo Hälsingland', 
    href: '/expo-halsingland', 
    // Blue/teal theme
    style: { bg: '#0369A1', text: '#FFFFFF', hoverBg: '#0284C7' }
  },
]

export default function Header({ isScrolled, isHomePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo - with white circular background for clean display */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <div className="bg-white rounded-full p-2 shadow-sm">
              <img 
                src="/mittia-logo.png" 
                alt="Mittia Event AB" 
                className="h-12 lg:h-14 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation - color-coded pills for each fair */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-4 py-2.5 font-semibold text-base tracking-wide transition-all rounded-full hover:scale-105 shadow-sm"
                  style={{
                    backgroundColor: item.style.bg,
                    color: item.style.text
                  }}
                >
                  {item.name}
                </Link>
              )
            })}
            
            {/* Om Mittia & Kontakt - Mittia-röd #ae220b */}
            <div className="w-px h-6 mx-2 bg-gray-200" />
            <Link
              to="/om-mittia"
              className="px-4 py-2.5 font-semibold text-base transition-all rounded-full hover:scale-105 shadow-sm"
              style={{ backgroundColor: '#ae220b', color: '#FFFFFF' }}
            >
              Om Mittia
            </Link>
            <Link
              to="/kontakt"
              className="px-4 py-2.5 font-semibold text-base transition-all rounded-full hover:scale-105 shadow-sm"
              style={{ backgroundColor: '#ae220b', color: '#FFFFFF' }}
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-gray-900 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - color-coded items */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white rounded-xl shadow-xl mt-2 p-4 border border-gray-100 mb-4">
            <div className="space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-3 rounded-lg font-semibold transition-all"
                    style={{
                      backgroundColor: isActive ? item.style.bg : 'transparent',
                      color: isActive ? item.style.text : '#1A1A1A',
                      border: isActive ? 'none' : `2px solid ${item.style.bg}`
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <hr className="my-3" />
              <Link 
                to="/om-mittia" 
                className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-600 font-medium" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Om Mittia
              </Link>
              <Link 
                to="/kontakt" 
                className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-600 font-medium" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
