import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react'

const exhibitions = [
  { name: 'Skogstransport', href: '#skogstransport', color: 'text-amber-400' },
  { name: 'Gård & Skog', href: '#gardskog', color: 'text-green-400' },
  { name: 'Park & Gata', href: '#parkgata', color: 'text-orange-400' },
  { name: 'Expo Hälsingland 2027', href: '#expo', color: 'text-cyan-400' }
]

const quickLinks = [
  { name: 'Om Mittia', href: '#om-mittia' },
  { name: 'För utställare', href: '#utstallare' },
  { name: 'För besökare', href: '#besokare' },
  { name: 'Kontakt', href: '#kontakt' },
  { name: 'Press / Mediabank', href: '#' },
  { name: 'Hitta hit', href: '#' },
  { name: 'Logi & resor', href: '#' },
  { name: 'Jobb hos Mittia', href: '#' }
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/mittiaskogstransport/' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' }
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="kontakt" className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-6">
              <span className="text-amber-500">M</span>
              <span className="text-green-500">I</span>
              <span className="text-orange-500">T</span>
              <span className="text-cyan-500">T</span>
              <span>IA</span>
            </div>
            <p className="text-gray-400 mb-6">
              Möten mellan människor med samma intresse – sedan 1999. 
              Vi skapar Nordens ledande branschmässor.
            </p>
            <div className="space-y-3">
              <a 
                href="tel:+46651-21190" 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+46 (0)651-211 90</span>
              </a>
              <a 
                href="mailto:kansli@mittia.com" 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>kansli@mittia.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-0.5" />
                <div>
                  <p>Mittia Event AB</p>
                  <p>Kyrksjönäsvägen 18</p>
                  <p>827 30 Ljusdal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mässor */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Våra mässor</h4>
            <ul className="space-y-3">
              {exhibitions.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className={`${item.color} hover:text-white transition-colors`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Snabblänkar</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Kontaktpersoner</h4>
            <div className="space-y-4 mb-8">
              <div>
                <p className="font-medium">Henrik Bruveris</p>
                <a href="mailto:henrik@mittia.com" className="text-gray-400 hover:text-white text-sm">henrik@mittia.com</a>
                <p className="text-gray-500 text-sm">+46 (0)736-33 46 33</p>
              </div>
              <div>
                <p className="font-medium">Ulrika Andersson</p>
                <a href="mailto:ulrika@mittia.com" className="text-gray-400 hover:text-white text-sm">ulrika@mittia.com</a>
                <p className="text-gray-500 text-sm">+46 (0)70-242 45 88</p>
              </div>
            </div>

            <h4 className="text-lg font-semibold mb-4">Följ oss</h4>
            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a 
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-500 mb-6">Samarbetspartners</p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <span className="text-sm font-medium">Ljusdals Kommun</span>
            <span className="text-sm font-medium">Destination Hälsingland</span>
            <span className="text-sm font-medium">Region Gävleborg</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Mittia Event AB. Alla rättigheter förbehållna.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Integritetspolicy
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Cookies
              </a>
              <button 
                onClick={scrollToTop}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Scrolla till toppen"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
