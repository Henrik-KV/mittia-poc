import { ArrowRight, Calendar, ChevronRight } from 'lucide-react'

const news = [
  {
    id: 1,
    category: 'Skogstransport',
    categoryColor: 'bg-amber-500',
    title: 'Anmälan öppen för Skogstransport 2026',
    excerpt: 'Nu kan utställare boka sina monterplatser för nästa års mässa. Säkra din plats tidigt för bästa läge.',
    date: '2024-12-01',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    category: 'Gård & Skog',
    categoryColor: 'bg-green-500',
    title: 'Rekordmånga utställare anmälda',
    excerpt: 'Intresset för Gård & Skog 2026 överträffar alla förväntningar. Över 100 utställare redan anmälda.',
    date: '2024-11-28',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    category: 'Expo Hälsingland',
    categoryColor: 'bg-cyan-500',
    title: 'Expo Hälsingland 2027 presenteras',
    excerpt: 'En helt ny mässa för regional utveckling, rekrytering och företagsetablering i Hälsingland.',
    date: '2024-11-15',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]

const upcomingEvents = [
  { name: 'Skogstransport 2026', date: 'Augusti 2026', color: 'border-amber-500' },
  { name: 'Gård & Skog 2026', date: '14-15 Aug 2026', color: 'border-green-500' },
  { name: 'Park & Gata 2026', date: '13-14 Aug 2026', color: 'border-orange-500' },
  { name: 'Expo Hälsingland', date: '23-24 April 2027', color: 'border-cyan-500' }
]

export default function News() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="inline-block px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full mb-4">
              Aktuellt
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Nyheter & händelser
            </h2>
          </div>
          <a 
            href="#" 
            className="mt-4 md:mt-0 inline-flex items-center text-gray-900 font-medium hover:text-amber-600 transition-colors"
          >
            Alla nyheter <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Cards */}
          <div className="lg:col-span-2 space-y-6">
            {news.map((item) => (
              <article 
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 aspect-video md:aspect-auto overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className={`px-3 py-1 ${item.categoryColor} text-white text-xs font-medium rounded-full`}>
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(item.date).toLocaleDateString('sv-SE')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-gray-900 font-medium hover:text-amber-600 transition-colors"
                  >
                    Läs mer <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Upcoming Events Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-amber-500" />
                Kommande mässor
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <a 
                    key={index}
                    href="#massor"
                    className={`block p-4 rounded-xl border-l-4 ${event.color} bg-gray-50 hover:bg-gray-100 transition-colors`}
                  >
                    <p className="font-semibold text-gray-900">{event.name}</p>
                    <p className="text-sm text-gray-500">{event.date}</p>
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl">
                <h4 className="text-white font-bold mb-2">Få mässtidningen</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Beställ mässtidningen kostnadsfritt hem till dig eller arbetsplatsen.
                </p>
                <a 
                  href="#"
                  className="block w-full text-center px-4 py-2 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors"
                >
                  Beställ tidning
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
