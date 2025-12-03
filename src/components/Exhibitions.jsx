import { Link } from 'react-router-dom'
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react'

// Using actual logo files from public folder
const exhibitions = [
  {
    id: 'skogstransport',
    name: 'Skogstransport',
    tagline: 'Den renodlade fackmässan för hela skogstransportbranschen',
    description: 'Nordens viktigaste mötesplats för skogstransportnäringen sedan 1999. Här möts tillverkare, skogsåkerier, maskinentreprenörer och transportköpare från skogsindustrin.',
    date: 'Augusti 2026',
    location: 'Älvvallens Idrottspark, Ljusdal',
    visitors: '6 000+ besökare',
    exhibitors: '130+ utställare',
    // Black/Yellow profile
    style: { bg: '#1A1A1A', accent: '#FFE500', text: '#FFFFFF' },
    href: '/skogstransport',
    logo: '/skogstransport-logo-oberoende-small.png'
  },
  {
    id: 'gard-skog',
    name: 'Gård & Skog',
    tagline: 'Norra Sveriges mässa för jordbruk, skogsbruk och djurhållning',
    description: 'Sedan 2012 samlas över 5 000 besökare för att möta 130 ledande leverantörer inom lantbruk, skogsbruk, djurhållning och relaterad entreprenad.',
    date: '14-15 Augusti 2026',
    location: 'Älvvallens Idrottspark, Ljusdal',
    visitors: '5 000+ besökare',
    exhibitors: '130+ utställare',
    // Green profile
    style: { bg: '#166534', accent: '#22C55E', text: '#FFFFFF' },
    href: '/gard-skog',
    logo: '/gardoskog-logo-oberoende-small.png'
  },
  {
    id: 'park-gata',
    name: 'Park & Gata',
    tagline: 'Mötesplatsen för grönytor, fastigheter, anläggningar och vägar',
    description: 'Norra Sveriges återkommande mötesplats för beslutsfattare och yrkesanställda inom grönyteförvaltning, fastighetsförvaltning, vägförvaltning och offentliga miljöer.',
    date: '13-14 Augusti 2026',
    location: 'Älvvallens Idrottspark, Ljusdal',
    visitors: 'Branschbesökare',
    exhibitors: '30+ utställare',
    // Orange profile
    style: { bg: '#EA580C', accent: '#FB923C', text: '#FFFFFF' },
    href: '/park-gata',
    logo: '/parkogata-logo-oberoende-small.png'
  },
  {
    id: 'expo-halsingland',
    name: 'Expo Hälsingland 2027',
    tagline: 'Upptäck möjligheterna i Hälsingland',
    description: 'En unik mötesplats för dig som vill flytta till, jobba i eller etablera företag i Hälsingland. Möt arbetsgivare, utbildare och kommuner.',
    date: '23-24 April 2027',
    location: 'SBB Arena, Bollnäs',
    visitors: 'Öppet för alla',
    exhibitors: 'Regionens aktörer',
    // Blue/Teal profile
    style: { bg: '#0369A1', accent: '#38BDF8', text: '#FFFFFF' },
    href: '/expo-halsingland',
    logo: '/expo-logo-2027-small.png'
  }
]

export default function Exhibitions() {
  return (
    <section id="massor" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Våra mässor
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Varje mässa är specialiserad för sin bransch och skapar värdefulla möten 
            mellan utställare, besökare och branschaktörer.
          </p>
        </div>

        {/* Exhibition Cards - Larger logos, cleaner layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {exhibitions.map((exhibition) => (
            <Link 
              key={exhibition.id}
              to={exhibition.href}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Logo section - much larger and prominent */}
              <div 
                className="relative h-56 flex items-center justify-center p-8"
                style={{ backgroundColor: exhibition.style.bg }}
              >
                <img 
                  src={exhibition.logo} 
                  alt={exhibition.name}
                  className="max-h-32 w-auto max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
                />
                {/* Hover arrow indicator */}
                <div 
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: exhibition.style.accent }}
                >
                  <ArrowRight className="w-5 h-5" style={{ color: exhibition.style.bg }} />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-sm font-semibold mb-2" style={{ color: exhibition.style.bg }}>
                  {exhibition.tagline}
                </p>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-2">
                  {exhibition.description}
                </p>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" style={{ color: exhibition.style.bg }} />
                    <span className="text-sm text-gray-700">{exhibition.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" style={{ color: exhibition.style.bg }} />
                    <span className="text-sm text-gray-700">{exhibition.location.split(',')[0]}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" style={{ color: exhibition.style.bg }} />
                    <span className="text-sm text-gray-700">{exhibition.visitors}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-4 h-4 flex items-center justify-center text-xs font-bold" style={{ color: exhibition.style.bg }}>★</span>
                    <span className="text-sm text-gray-700">{exhibition.exhibitors}</span>
                  </div>
                </div>

                {/* Action indicator */}
                <div 
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full font-medium text-sm transition-all group-hover:px-5"
                  style={{ backgroundColor: exhibition.style.bg, color: exhibition.style.text }}
                >
                  <span>Läs mer</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
