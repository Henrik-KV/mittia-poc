import { Ticket, Car, Hotel, MapPin, Clock, CreditCard, Users, Coffee, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const practicalInfo = [
  {
    icon: Clock,
    title: 'Öppettider',
    items: [
      { label: 'Fredag', value: '09:00 - 17:00' },
      { label: 'Lördag', value: '09:00 - 16:00' }
    ]
  },
  {
    icon: Ticket,
    title: 'Entré',
    items: [
      { label: 'Med inbjudan/eBiljett', value: 'Fri entré' },
      { label: 'Dagentré vuxen', value: '150-250 kr' },
      { label: 'Under 18 år', value: '50 kr' },
      { label: 'Barn under 10 år', value: 'Gratis' }
    ]
  },
  {
    icon: Car,
    title: 'Parkering',
    items: [
      { label: 'Personbil/heldag', value: '50 kr' },
      { label: '', value: 'Avgiften går till Ljusdal IF:s ungdomsverksamhet' }
    ]
  },
  {
    icon: MapPin,
    title: 'Plats',
    items: [
      { label: 'Skogstransport, Gård & Skog, Park & Gata', value: 'Älvvallens Idrottspark, Ljusdal' },
      { label: 'Expo Hälsingland', value: 'SBB Arena, Bollnäs' }
    ]
  }
]

const experiences = [
  {
    icon: Users,
    title: 'Möt utställarna',
    description: 'Prata direkt med tillverkare och leverantörer, se produkter på nära håll och få personlig rådgivning.'
  },
  {
    icon: Coffee,
    title: 'Restauranger & mat',
    description: 'Mässområdet erbjuder flera restauranger och matställen för en trivsam mässdag.'
  },
  {
    icon: Hotel,
    title: 'Logi & resa',
    description: 'Vi hjälper dig hitta boende i närområdet och ger tips om hur du tar dig till mässan.'
  }
]

export default function ForVisitors() {
  return (
    <section id="besokare" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Mittia red */}
        <div className="text-center mb-16">
          <span 
            className="inline-block px-4 py-2 text-white text-sm font-medium rounded-full mb-4"
            style={{ backgroundColor: '#ae220b' }}
          >
            För besökare
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Planera ditt mässbesök
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Allt du behöver veta för ett lyckat mässbesök – från entré och parkering 
            till boende och restauranger.
          </p>
        </div>

        {/* Practical Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {practicalInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-4">{info.title}</h3>
                <ul className="space-y-2">
                  {info.items.map((item, i) => (
                    <li key={i} className="text-sm">
                      {item.label && <span className="text-gray-500">{item.label}: </span>}
                      <span className="text-gray-900 font-medium">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Experience Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Upplev mässan
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{exp.title}</h4>
                  <p className="text-gray-600 text-sm">{exp.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Get Tickets CTA - Mittia red background, black button */}
        <div className="rounded-3xl p-8 md:p-12" style={{ backgroundColor: '#ae220b' }}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Skaffa din biljett
              </h3>
              <p className="text-white/90">
                Kontakta utställare för gratis inbjudan eller köp dagentré på plats via kort/Swish.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.mittia.com/skogstransport/utstallare/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition-all"
              >
                <span>Se utställare</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Travel & Accommodation */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Hitta hit</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Mässorna hålls på Älvvallens Idrottspark i Ljusdal. Enkel tillgång med bil 
              och parkering finns på plats. Tågförbindelse till Ljusdal finns från 
              Stockholm, Sundsvall och Gävle.
            </p>
            <a 
              href="https://maps.app.goo.gl/iuB6EyrGhhAcJEUx8" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 font-medium flex items-center hover:text-amber-700"
            >
              Vägbeskrivning <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Hotel className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Logi & boende</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Ljusdal och närliggande orter erbjuder flera boendealternativ – från hotell 
              och pensionat till stugor och campingplatser. Boka i god tid då mässdagarna 
              är populära.
            </p>
            <a href="#" className="text-green-600 font-medium flex items-center hover:text-green-700">
              Se boendealternativ <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>

        {/* Upplev Ljusdal - black background with black button */}
        <div className="mt-8 bg-gray-900 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Upplev Ljusdal & Hälsingland
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Passa på att upptäcka Hälsinglands unika natur, kultur och världsarv. 
            Kombinera mässbesöket med en minnesvärd upplevelse i norra Sverige.
          </p>
          <a 
            href="https://destinationhalsingland.se/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-black text-white font-semibold rounded-full border border-white/20 hover:bg-gray-800 transition-all"
          >
            <span>Utforska Hälsingland</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
