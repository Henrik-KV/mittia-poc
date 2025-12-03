import { Calendar, Users, Award, MapPin } from 'lucide-react'

const stats = [
  { value: '25+', label: 'År av erfarenhet', icon: Calendar },
  { value: '300+', label: 'Utställare årligen', icon: Users },
  { value: '15 000+', label: 'Besökare per år', icon: Award },
  { value: '4', label: 'Unika mässor', icon: MapPin }
]

export default function About() {
  return (
    <section id="om-mittia" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full mb-6">
              Om Mittia
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Möten mellan människor med samma intresse
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                Sedan 1999 arbetar Mittia Event AB med möteskommunikation genom tre 
                affärsområden: <strong>expo, event och rådgivning</strong>. Vi skapar 
                förutsättningar för meningsfulla möten mellan människor med gemensamma intressen.
              </p>
              <p className="mb-6">
                Vår flaggskeppsmässa <strong>Mittia: Skogstransport</strong> är Nordens 
                största mötesplats inom skogstransportbranschen med över 130 utställare 
                och 6 000 besökare. <strong>Mittia: Gård & Skog</strong> samlar lantbrukare, 
                skogsägare och entreprenörer från hela norra Sverige.
              </p>
              <p>
                Sedan 2022 utvecklar vi <strong>Mittia: Park & Gata</strong> som ny 
                mötesplats för yrkesverksamma inom förvaltning av fastigheter, grönytor 
                och vägar. 2027 lanserar vi <strong>Expo Hälsingland</strong> – en unik 
                mässa för regional utveckling.
              </p>
            </div>

            {/* Services */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-2xl">
                <div className="text-2xl font-bold text-amber-500 mb-1">Expo</div>
                <p className="text-sm text-gray-600">Mässor & utställningar</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-2xl">
                <div className="text-2xl font-bold text-green-500 mb-1">Event</div>
                <p className="text-sm text-gray-600">Företags- & konsumentevent</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-2xl">
                <div className="text-2xl font-bold text-cyan-500 mb-1">Rådgivning</div>
                <p className="text-sm text-gray-600">Koncept & planering</p>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Mässa och event" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-green-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Ljusdal, Hälsingland</p>
                  <p className="text-sm text-gray-500">Vårt hjärta i norra Sverige</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Stolta ambassadörer för Hälsingland och samarbetspartners med Ljusdals kommun.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-gray-700" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Partners */}
        <div className="mt-24 text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
            Samarbetspartners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-xl font-bold text-gray-400">Ljusdals Kommun</div>
            <div className="text-xl font-bold text-gray-400">Destination Hälsingland</div>
            <div className="text-xl font-bold text-gray-400">Region Gävleborg</div>
          </div>
        </div>
      </div>
    </section>
  )
}
