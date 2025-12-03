import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const exhibitions = [
  { name: 'Skogstransport', href: '#skogstransport', color: 'text-amber-500' },
  { name: 'Gård & Skog', href: '#gardskog', color: 'text-green-500' },
  { name: 'Park & Gata', href: '#parkgata', color: 'text-orange-500' },
  { name: 'Expo Hälsingland 2027', href: '#expo', color: 'text-cyan-500' },
]

export default function Header({ isScrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [exhibitionsOpen, setExhibitionsOpen] = useState(false)

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <div className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              <span className="text-amber-500">M</span>
              <span className="text-green-500">I</span>
              <span className="text-orange-500">T</span>
              <span className="text-cyan-500">T</span>
              <span>IA</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Mässor Dropdown */}
            <div className="relative">
              <button
                onClick={() => setExhibitionsOpen(!exhibitionsOpen)}
                className={`flex items-center space-x-1 font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                }`}
              >
                <span>Mässor</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${exhibitionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {exhibitionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in">
                  {exhibitions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-3 hover:bg-gray-50 transition-colors ${item.color}`}
                      onClick={() => setExhibitionsOpen(false)}
                    >
                      <span className="font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a 
              href="#utstallare" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              För utställare
            </a>
            <a 
              href="#besokare" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              För besökare
            </a>
            <a 
              href="#om-mittia" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              Om Mittia
            </a>
            <a 
              href="#kontakt" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              Kontakt
            </a>

            {/* CTA Button */}
            <a 
              href="#massor" 
              className="px-5 py-2.5 bg-gradient-to-r from-amber-500 via-green-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Boka monter
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white rounded-2xl shadow-xl mt-2 p-4 animate-fade-in">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 py-2">Mässor</p>
              {exhibitions.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 rounded-lg hover:bg-gray-50 font-medium text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <hr className="my-2" />
              <a href="#utstallare" className="block px-4 py-3 rounded-lg hover:bg-gray-50 font-medium text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                För utställare
              </a>
              <a href="#besokare" className="block px-4 py-3 rounded-lg hover:bg-gray-50 font-medium text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                För besökare
              </a>
              <a href="#om-mittia" className="block px-4 py-3 rounded-lg hover:bg-gray-50 font-medium text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                Om Mittia
              </a>
              <a href="#kontakt" className="block px-4 py-3 rounded-lg hover:bg-gray-50 font-medium text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                Kontakt
              </a>
              <div className="pt-2">
                <a 
                  href="#massor" 
                  className="block w-full text-center px-5 py-3 bg-gradient-to-r from-amber-500 via-green-500 to-cyan-500 text-white font-semibold rounded-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Boka monter
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
