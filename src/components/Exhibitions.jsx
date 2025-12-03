import { Calendar, MapPin, Users, ArrowRight, Truck, Tractor, TreePine, Building2 } from 'lucide-react'

const exhibitions = [
  {
    id: 'skogstransport',
    name: 'Skogstransport',
    tagline: 'Den renodlade fackmässan för hela skogstransportbranschen',
    description: 'Nordens viktigaste mötesplats för skogstransportnäringen sedan 1999. Här möts tillverkare, skogsåkerier, maskinentreprenörer och transportköpare från skogsindustrin.',
    date: 'Fredag-Lördag, Augusti 2026',
    location: 'Älvvallens Idrottspark, Ljusdal',
    visitors: '6 000+ besökare',
    exhibitors: '130+ utställare',
    color: 'amber',
    bgColor: 'bg-amber-500',
    borderColor: 'border-amber-500',
    textColor: 'text-amber-500',
    icon: Truck,
    highlights: [
      'Senaste innovationerna inom skogstransport',
      'Testkörningar och livDemo',
      'Branschens stora festkväll',
      'Tävlingar och prova-på aktiviteter'
    ]
  },
  {
    id: 'gardskog',
    name: 'Gård & Skog',
    tagline: 'Norra Sveriges mässa för jordbruk, skogsbruk och djurhållning',
    description: 'Sedan 2012 samlas över 5 000 besökare för att möta 130 ledande leverantörer inom lantbruk, skogsbruk, djurhållning och relaterad entreprenad.',
    date: '14-15 Augusti 2026',
    location: 'Älvvallens Idrottspark, Ljusdal',
    visitors: '5 000+ besökare',
    exhibitors: '130+ utställare',
    color: 'green',
    bgColor: 'bg-green-500',
    borderColor: 'border-green-500',
    textColor: 'text-green-500',
    icon: Tractor,
    highlights: [
      'Nyheter inom jordbruksmaskiner',
      'Seminarier från branschorganisationer',
      'Mässerbjudanden och fyndläge',
      'Aktiviteter för hela familjen'
    ]
  },
  {
    id: 'parkgata',
    name: 'Park & Gata',
    tagline: 'Mötesplatsen för grönytor, fastigheter, anläggningar och vägar',
    description: 'Norra Sveriges återkommande mötesplats för beslutsfattare och yrkesanställda inom grönyteförvaltning, fastighetsförvaltning, vägförvaltning och offentliga miljöer.',
    date: '13-14 Augusti 2026',
    location: 'Älvvallens Idrottspark, Ljusdal',
    visitors: 'Branschbesökare',
    exhibitors: '30+ utställare',
    color: 'orange',
    bgColor: 'bg-orange-500',
    borderColor: 'border-orange-500',
    textColor: 'text-orange-500',
    icon: Building2,
    highlights: [
      'Kompetensutvecklande föredrag',
      'Senaste maskinerna och utrustningen',
      'Erfarenhetsutbyten med kollegor',
      'Seminarier från myndigheter'
    ]
  },
  {
    id: 'expo',
    name: 'Expo Hälsingland 2027',
    tagline: 'Upptäck möjligheterna i Hälsingland',
    description: 'En unik mötesplats för dig som vill flytta till, jobba i eller etablera företag i Hälsingland. Möt arbetsgivare, utbildare och kommuner.',
    date: '23-24 April 2027',
    location: 'SBB Arena, Bollnäs',
    visitors: 'Öppet för alla',
    exhibitors: 'Regionens aktörer',
    color: 'cyan',
    bgColor: 'bg-cyan-500',
    borderColor: 'border-cyan-500',
    textColor: 'text-cyan-500',
    icon: TreePine,
    highlights: [
      'Träffa Hälsinglands arbetsgivare',
      'Utbildningsmöjligheter',
      'Etablera företag i regionen',
      'Upplev livet i Hälsingland'
    ]
  }
]

export default function Exhibitions() {
  return (
    <section id="massor" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full mb-4">
            Våra mässor
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fyra unika mötesplatser
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Varje mässa är specialiserad för sin bransch och skapar värdefulla möten 
            mellan utställare, besökare och branschaktörer.
          </p>
        </div>

        {/* Exhibition Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {exhibitions.map((exhibition, index) => {
            const Icon = exhibition.icon
            return (
              <article 
                key={exhibition.id}
                id={exhibition.id}
                className={`bg-white rounded-3xl overflow-hidden shadow-lg card-hover border-t-4 ${exhibition.borderColor}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card Header */}
                <div className={`${exhibition.bgColor} px-8 py-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{exhibition.name}</h3>
                        <p className="text-white/80 text-sm">{exhibition.tagline}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {exhibition.description}
                  </p>

                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-xl ${exhibition.bgColor}/10 flex items-center justify-center`}>
                        <Calendar className={`w-5 h-5 ${exhibition.textColor}`} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Datum</p>
                        <p className="text-sm font-medium text-gray-900">{exhibition.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-xl ${exhibition.bgColor}/10 flex items-center justify-center`}>
                        <MapPin className={`w-5 h-5 ${exhibition.textColor}`} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Plats</p>
                        <p className="text-sm font-medium text-gray-900">{exhibition.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-xl ${exhibition.bgColor}/10 flex items-center justify-center`}>
                        <Users className={`w-5 h-5 ${exhibition.textColor}`} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Besökare</p>
                        <p className="text-sm font-medium text-gray-900">{exhibition.visitors}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-xl ${exhibition.bgColor}/10 flex items-center justify-center`}>
                        <Building2 className={`w-5 h-5 ${exhibition.textColor}`} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Utställare</p>
                        <p className="text-sm font-medium text-gray-900">{exhibition.exhibitors}</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-900 mb-3">Höjdpunkter:</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {exhibition.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className={`w-1.5 h-1.5 rounded-full ${exhibition.bgColor}`} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="#" 
                      className={`inline-flex items-center space-x-2 px-5 py-2.5 ${exhibition.bgColor} text-white font-medium rounded-full hover:opacity-90 transition-all`}
                    >
                      <span>Läs mer</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a 
                      href="#" 
                      className={`inline-flex items-center space-x-2 px-5 py-2.5 border-2 ${exhibition.borderColor} ${exhibition.textColor} font-medium rounded-full hover:bg-gray-50 transition-all`}
                    >
                      <span>Boka monter</span>
                    </a>
                    <a 
                      href="#" 
                      className="inline-flex items-center space-x-2 px-5 py-2.5 border-2 border-gray-200 text-gray-600 font-medium rounded-full hover:bg-gray-50 transition-all"
                    >
                      <span>Utställare A-Ö</span>
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
