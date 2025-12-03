import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

// Exhibition logos for the hero section - using actual logo files
const exhibitions = [
  { 
    name: 'Skogstransport', 
    href: '/skogstransport', 
    logo: '/skogstransport-logo-oberoende-small.png',
    alt: 'Mittia Skogstransport 2026'
  },
  { 
    name: 'Gård & Skog', 
    href: '/gard-skog', 
    logo: '/gardoskog-logo-oberoende-small.png',
    alt: 'Mittia Gård & Skog 2026'
  },
  { 
    name: 'Park & Gata', 
    href: '/park-gata', 
    logo: '/parkogata-logo-oberoende-small.png',
    alt: 'Mittia Park & Gata 2026'
  },
  { 
    name: 'Expo Hälsingland', 
    href: '/expo-halsingland', 
    logo: '/expo-logo-2027-small.png',
    alt: 'Expo Hälsingland 2027'
  },
]

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Full Hero with Video - everything on top of video */}
      <div className="relative min-h-screen">
        {/* Video Background */}
        <div className="absolute inset-0 bg-gray-900">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Overlay - premium balance: video visible but text very readable */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.5) 100%)' 
          }} 
        />

        {/* All Content on top of video */}
        <div className="relative z-10 min-h-screen flex flex-col px-4 pt-32 pb-16">
          {/* Hero Text Section */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="max-w-5xl mx-auto text-center">
              
              {/* Location/info text - clean white text */}
              <p className="text-lg sm:text-xl text-white/80 mb-6 tracking-wide">
                Ljusdal, Hälsingland · Sedan 1999
              </p>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Mässor som skapar möten
                <br />
                <span className="text-white/90">mellan människor</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
                Nordens ledande mötesplatser för skogstransport, lantbruk, 
                samhällsförvaltning och regional utveckling.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <a 
                  href="#massor" 
                  className="group px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all shadow-lg shadow-black/20 flex items-center space-x-2"
                >
                  <span>Utforska våra mässor</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <Link 
                  to="/kontakt" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all"
                >
                  Kontakta oss
                </Link>
              </div>
            </div>
          </div>

          {/* Exhibition Logos Section - ON TOP of video, not separate */}
          <div id="massor" className="max-w-5xl mx-auto w-full">
            <p className="text-white/80 text-sm uppercase tracking-widest mb-8 text-center font-semibold">
              Våra mässor
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {exhibitions.map((exhibition) => (
                <Link
                  key={exhibition.name}
                  to={exhibition.href}
                  className="group bg-white rounded-2xl p-6 hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center aspect-[4/3] hover:scale-105"
                >
                  <img 
                    src={exhibition.logo} 
                    alt={exhibition.alt}
                    className="max-h-20 md:max-h-24 lg:max-h-28 w-auto max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-10">
            <a 
              href="#exhibitions-detail" 
              className="group flex flex-col items-center text-white/50 hover:text-white/80 transition-colors"
            >
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
