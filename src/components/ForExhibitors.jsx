import { CheckCircle, FileText, Phone, Mail, ArrowRight, Star, Users, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: 'Träffa din målgrupp',
    description: 'Möt tusentals kvalificerade besökare som aktivt söker produkter och tjänster inom din bransch.'
  },
  {
    icon: TrendingUp,
    title: 'Visa dina nyheter',
    description: 'Lansera nya produkter och demonstrera innovationer live för branschens beslutsfattare.'
  },
  {
    icon: Star,
    title: 'Stärk ditt varumärke',
    description: 'Bygg relationer och synlighet genom personliga möten och praktiska demonstrationer.'
  }
]

const steps = [
  {
    number: '01',
    title: 'Välj mässa',
    description: 'Välj den mässa som passar din verksamhet bäst. Kontakta oss för rådgivning.'
  },
  {
    number: '02',
    title: 'Boka monter',
    description: 'Fyll i anmälningsformuläret och välj monteryta efter dina behov.'
  },
  {
    number: '03',
    title: 'Planera',
    description: 'Vi hjälper dig med praktisk information, marknadsföring och logistik.'
  },
  {
    number: '04',
    title: 'Genomför',
    description: 'Möt dina kunder, visa dina produkter och skapa nya affärsmöjligheter.'
  }
]

export default function ForExhibitors() {
  return (
    <section id="utstallare" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500 to-green-500 text-white text-sm font-medium rounded-full mb-4">
            För utställare
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bli utställare på Mittia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nå din målgrupp genom Sveriges mest fokuserade branschmässor. 
            Vi skapar förutsättningar för kvalitativa möten och affärer.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div 
                key={index}
                className="text-center p-8 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        {/* How it works */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
            Så blir du utställare
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-white/10 mb-4">{step.number}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-gray-400 text-sm">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-6 h-6 text-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Exhibition Booking Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <a href="#" className="group p-6 rounded-2xl border-2 border-amber-200 bg-amber-50 hover:border-amber-500 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Skogstransport</h4>
            <p className="text-sm text-gray-600 mb-4">Boka monter för Sveriges största skogstransportmässa</p>
            <span className="text-amber-600 font-medium text-sm flex items-center">
              Boka nu <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </a>

          <a href="#" className="group p-6 rounded-2xl border-2 border-green-200 bg-green-50 hover:border-green-500 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Gård & Skog</h4>
            <p className="text-sm text-gray-600 mb-4">Visa upp dina produkter för lantbruks- och skogsägare</p>
            <span className="text-green-600 font-medium text-sm flex items-center">
              Boka nu <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </a>

          <a href="#" className="group p-6 rounded-2xl border-2 border-orange-200 bg-orange-50 hover:border-orange-500 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Park & Gata</h4>
            <p className="text-sm text-gray-600 mb-4">Nå beslutsfattare inom offentlig förvaltning</p>
            <span className="text-orange-600 font-medium text-sm flex items-center">
              Boka nu <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </a>

          <a href="#" className="group p-6 rounded-2xl border-2 border-cyan-200 bg-cyan-50 hover:border-cyan-500 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Expo Hälsingland</h4>
            <p className="text-sm text-gray-600 mb-4">Rekrytera och visa upp din verksamhet i regionen</p>
            <span className="text-cyan-600 font-medium text-sm flex items-center">
              Boka nu <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </a>
        </div>

        {/* Contact CTA */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Har du frågor?</h3>
            <p className="text-gray-600">Kontakta oss så hjälper vi dig att hitta rätt mässa och monteryta.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:+46651-21190" 
              className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>0651-211 90</span>
            </a>
            <a 
              href="mailto:kansli@mittia.com" 
              className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-all"
            >
              <Mail className="w-5 h-5" />
              <span>kansli@mittia.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
