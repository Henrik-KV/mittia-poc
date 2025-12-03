import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Exhibitions from './components/Exhibitions'
import ForExhibitors from './components/ForExhibitors'
import ForVisitors from './components/ForVisitors'
import About from './components/About'
import News from './components/News'
import { Calendar, MapPin, Users, Clock, Ticket, Car, Phone, Mail, ArrowRight, CheckCircle, Send } from 'lucide-react'

// Page wrapper with scroll tracking for header
function PageLayout({ children, isHomePage = false }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} isHomePage={isHomePage} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

// Home page with all sections
function HomePage() {
  return (
    <PageLayout isHomePage={true}>
      <Hero />
      <Exhibitions />
      <ForExhibitors />
      <ForVisitors />
      <About />
      <News />
    </PageLayout>
  )
}



// Skogstransport page - Warm hero with image, white sections below
function SkogstransportPage() {
  return (
    <PageLayout>
      {/* Hero Section - Warm, visual hero with image background */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Full background image - Forestry image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/forestry.jpeg')`
          }}
        />
        {/* Warm overlay - not too dark, keeps the warmth */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)' 
          }} 
        />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-28 pb-16">
          {/* Logo - using actual file */}
          <img 
            src="/skogstransport-logo-oberoende-small.png" 
            alt="Mittia Skogstransport" 
            className="h-32 md:h-40 w-auto mx-auto mb-8"
          />
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Den renodlade fackmässan för hela skogstransportbranschen
          </h1>
          <p className="text-xl font-semibold text-white/90 mb-10">
            Originalet sedan 1999 – Nordens viktigaste mötesplats
          </p>
          
          {/* Key info - on dark background with subtle styling */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">Augusti 2026</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">Älvvallen, Ljusdal</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">6 000+ besökare</span>
            </div>
          </div>
          
          {/* CTA Buttons - Black/Yellow profile */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/skogstransport/boka-monter" 
              className="px-8 py-4 font-bold rounded-full hover:brightness-110 transition-all shadow-lg text-lg"
              style={{ backgroundColor: '#FFE500', color: '#1A1A1A' }}
            >
              Boka monter
            </Link>
            <a 
              href="#info" 
              className="px-8 py-4 font-semibold rounded-full border-2 border-white text-white transition-all text-lg hover:bg-white/10"
            >
              Mer information
            </a>
          </div>
        </div>
      </section>

      {/* About Section - White background with black/yellow accents */}
      <section id="info" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Text content - 3 columns */}
            <div className="lg:col-span-3">
              <span 
                className="inline-block px-5 py-2 font-bold rounded-full text-sm mb-6 uppercase tracking-wider"
                style={{ backgroundColor: '#1A1A1A', color: '#FFE500' }}
              >
                Om mässan
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Idag anser många att mässan är den viktigaste mötesplatsen inom hela branschen!
              </h2>
              <div className="text-lg space-y-4 text-gray-600">
                <p>
                  Mittia: Skogstransport är mässan och mötesplatsen inom alla delar av skogstransportnäringen. 
                  Här bjuder tillverkarna in skogsåkerier som fraktar rundvirke, skogsbränsle eller sågade 
                  trävaror och maskinentreprenörer som hanterar omlastning eller leverans vid terminaler, 
                  sågverk, pappersmassabruk och energiverk samt transportköparna från skogsindustrin.
                </p>
                <p>
                  Sedan 1999 har mässan etablerat sig som den främsta mötesplatsen i Norden – renodlat 
                  inom branschen. Här ser du de senaste innovationerna, gör upp om de mest fördelaktiga 
                  investeringarna och diskuterar frågor som utvecklar branschen positivt.
                </p>
              </div>
              
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-3xl font-bold" style={{ color: '#1A1A1A' }}>25+</p>
                  <p className="text-gray-500 text-sm">År av tradition</p>
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ color: '#1A1A1A' }}>6 000+</p>
                  <p className="text-gray-500 text-sm">Besökare</p>
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ color: '#1A1A1A' }}>130+</p>
                  <p className="text-gray-500 text-sm">Utställare</p>
                </div>
              </div>
            </div>
            
            {/* Single vertical video - 2 columns */}
            <div className="lg:col-span-2">
              <div className="aspect-[9/16] max-w-sm mx-auto rounded-3xl overflow-hidden relative group shadow-2xl" style={{ border: '4px solid #1A1A1A' }}>
                {/* Video - Skogstransport uses vertikal-video-mittia2 */}
                <video 
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                  poster="/forestry.jpeg"
                >
                  <source src="/vertikal-video-mittia2.mp4" type="video/mp4" />
                </video>
                
<div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'linear-gradient(transparent, rgba(26,26,26,0.9))' }}>
                  <p className="text-white text-xl font-bold text-center">
                    Upplev mässan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section - Light gray background with black/yellow cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Det här kan du uppleva
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Mässan arrangeras utomhus med stort område för tävlingar, demo och prova-på aktiviteter.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Senaste innovationerna', desc: 'Se de nyaste produkterna inom skogstransport' },
              { title: 'Testkörningar', desc: 'Provkör fordon och maskiner på plats' },
              { title: 'Livdemonstrationer', desc: 'Upplev produkter i verklig användning' },
              { title: 'Branschens festkväll', desc: 'Avslutning på första mässdagen' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#1A1A1A' }}
                >
                  <CheckCircle className="w-6 h-6" style={{ color: '#FFE500' }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visitors Section - White background with black/yellow accents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* For Visitors */}
            <div>
              <span 
                className="inline-block px-5 py-2 font-bold rounded-full text-sm mb-6 uppercase tracking-wider"
                style={{ backgroundColor: '#1A1A1A', color: '#FFE500' }}
              >
                För besökare
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Besökare på mässan</h2>
              <p className="text-gray-600 mb-8">
                Åkeriföretagare, chaufförer och övrig personal från åkerinäringen. 
                Transportköpare från skogsbolag, massa-, energi- och träindustrin. 
                Entreprenadföretag med verksamheter inom terminalhantering och skogsbilväg.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#1A1A1A' }} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Öppettider</h4>
                    <p className="text-gray-600">Fredag 09:00–17:00 · Lördag 09:00–16:00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <Ticket className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#1A1A1A' }} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Entré</h4>
                    <p className="text-gray-600">Fri entré med inbjudan från utställare. Dagentré 250 kr.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <Car className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#1A1A1A' }} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Parkering</h4>
                    <p className="text-gray-600">50 kr/dag – går till Ljusdal IF:s ungdomsverksamhet</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* For Exhibitors */}
            <div>
              <span 
                className="inline-block px-5 py-2 font-bold rounded-full text-sm mb-6 uppercase tracking-wider"
                style={{ backgroundColor: '#1A1A1A', color: '#FFE500' }}
              >
                För utställare
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Utställare på mässan</h2>
              <p className="text-gray-600 mb-8">
                Tillverkare och säljare av produkter för allt som omfattar skogstransportkedjan; 
                fordon, efterfordon, påbyggnationer, lastbils- och terminalkranar, lastmaskiner, 
                maskiner/utrustning för skogsbilvägar, samt all relaterad kringutrustning.
              </p>
              
              <div 
                id="boka" 
                className="rounded-2xl p-8"
                style={{ backgroundColor: '#1A1A1A' }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: '#FFE500' }}>Boka monter för 2026</h3>
                <p className="mb-6 text-white/80">
                  Mässan sker utomhus för att skapa bra möjligheter till testkörningar och 
                  levande demonstrationer. Kontakta oss för att säkra din plats.
                </p>
                <div className="space-y-3 mb-6">
                  <a href="tel:+46651-21190" className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">+46 (0)651-211 90</span>
                  </a>
                  <a href="mailto:kansli@mittia.com" className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">kansli@mittia.com</span>
                  </a>
                </div>
                <Link 
                  to="/skogstransport/boka-monter" 
                  className="inline-flex items-center space-x-2 px-6 py-3 font-bold rounded-full hover:brightness-110 transition-all"
                  style={{ backgroundColor: '#FFE500', color: '#1A1A1A' }}
                >
                  <span>Boka monter</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section - Light gray background */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="w-12 h-12 mx-auto mb-6 text-gray-700" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Älvvallens Idrottspark, Ljusdal</h2>
          <p className="text-xl text-gray-600 mb-8">Mitt i Hälsingland – enkel tillgång med bil och tåg</p>
          <a 
            href="https://maps.app.goo.gl/iuB6EyrGhhAcJEUx8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 font-bold rounded-full hover:opacity-90 transition-all"
            style={{ backgroundColor: '#1A1A1A', color: '#FFE500' }}
          >
            <span>Hitta hit</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </PageLayout>
  )
}

// Gård & Skog page - Green profile, same structure as Skogstransport
function GardSkogPage() {
  return (
    <PageLayout>
      {/* Hero Section - Clean image with subtle neutral overlay */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        {/* Subtle neutral overlay for text readability - no color tint */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)' 
          }} 
        />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-28 pb-16">
          <img 
            src="/gardoskog-logo-oberoende-small.png" 
            alt="Mittia Gård & Skog" 
            className="h-32 md:h-40 w-auto mx-auto mb-8"
          />
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Norra Sveriges mässa för jordbruk, skogsbruk och djurhållning
          </h1>
          <p className="text-xl font-semibold text-white/90 mb-10">
            Sedan 2012 – mötesplatsen för lantbrukare och skogsägare
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">14-15 Augusti 2026</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">Älvvallen, Ljusdal</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">5 000+ besökare</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/gard-skog/boka-monter" 
              className="px-8 py-4 font-bold rounded-full hover:brightness-110 transition-all shadow-lg text-lg"
              style={{ backgroundColor: '#22C55E', color: '#FFFFFF' }}
            >
              Boka monter
            </Link>
            <a 
              href="#info" 
              className="px-8 py-4 font-semibold rounded-full border-2 border-white text-white transition-all text-lg hover:bg-white/10"
            >
              Mer information
            </a>
          </div>
        </div>
      </section>

      {/* About Section - White background with green accents */}
      <section id="info" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <span 
                className="inline-block px-5 py-2 font-bold rounded-full text-sm mb-6 uppercase tracking-wider"
                style={{ backgroundColor: '#166534', color: '#FFFFFF' }}
              >
                Om mässan
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Sedan 2012 väljer fler än 5 000 besökare att möta de ledande leverantörerna inom branschen!
              </h2>
              <div className="text-lg space-y-4 text-gray-600">
                <p>
                  Mittia: Gård & Skog är norra Sveriges mässa för jordbruk, skogsbruk, djurhållning 
                  och relaterad entreprenad. Inom 3 timmar från mässan finns drygt 100 000 ägare av 
                  ca 130 000 lantbruksenheter, ca 65 000 enskilda skogsägare och över 7 000 jordbruksföretag.
                </p>
                <p>
                  Mässan tillsammans med sina utställare arbetar för att det ska bli en händelserik 
                  mässa där de senaste nyheterna presenteras, besökarna kan fynda till mässerbjudanden 
                  och där det ges möjlighet till provkörningar, demos, uppvisningar och andra aktiviteter 
                  för såväl proffs som familj.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-3xl font-bold" style={{ color: '#166534' }}>13+</p>
                  <p className="text-gray-500 text-sm">År av tradition</p>
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ color: '#166534' }}>5 000+</p>
                  <p className="text-gray-500 text-sm">Besökare</p>
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ color: '#166534' }}>130+</p>
                  <p className="text-gray-500 text-sm">Utställare</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="aspect-[9/16] max-w-sm mx-auto rounded-3xl overflow-hidden relative group shadow-2xl" style={{ border: '4px solid #166534' }}>
                {/* Video - Gård & Skog uses vertikal-video-mittia */}
                <video 
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                  poster="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                >
                  <source src="/vertikal-video-mittia.mp4" type="video/mp4" />
                </video>
                
<div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'linear-gradient(transparent, rgba(22,101,52,0.9))' }}>
                  <p className="text-white text-xl font-bold text-center">
                    Upplev mässan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section - Light gray background with green cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Det här kan du uppleva
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Mässan erbjuder nyheter, händelser och möjlighet till att fynda!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Senaste nyheterna', desc: 'De ledande leverantörerna visar sina senaste produkter' },
              { title: 'Mässerbjudanden', desc: 'Fynda till specialpriser under mässdagarna' },
              { title: 'Provkörningar & demo', desc: 'Testa maskiner och utrustning på plats' },
              { title: 'Aktiviteter för familjen', desc: 'Upplevelser för både proffs och familj' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#166534' }}
                >
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visitors & Exhibitors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span 
                className="inline-block px-5 py-2 font-bold rounded-full text-sm mb-6 uppercase tracking-wider"
                style={{ backgroundColor: '#166534', color: '#FFFFFF' }}
              >
                För besökare
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Besökare på mässan</h2>
              <p className="text-gray-600 mb-8">
                Lantbrukare, skogsägare, djurägare och entreprenörer från hela norra Sverige. 
                Mässan samlar jordbruksföretag med nötkreatur, får, hästar och växtodling samt 
                företag som kombinerar lantbruk med entreprenaduppdrag.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#166534' }} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Öppettider</h4>
                    <p className="text-gray-600">Fredag 09:00–16:00 · Lördag 09:00–16:00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <Ticket className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#166534' }} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Entré</h4>
                    <p className="text-gray-600">Fri entré via branschpartners/utställare. Dagentré 150 kr, under 18 år 50 kr.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <Car className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#166534' }} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Parkering</h4>
                    <p className="text-gray-600">50 kr/dag – går till Ljusdal IF:s ungdomsverksamhet</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <span 
                className="inline-block px-5 py-2 font-bold rounded-full text-sm mb-6 uppercase tracking-wider"
                style={{ backgroundColor: '#166534', color: '#FFFFFF' }}
              >
                För utställare
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Utställare på mässan</h2>
              <p className="text-gray-600 mb-8">
                De ledande leverantörerna inom jordbruk, skogsbruk, djurhållning och relaterad 
                entreprenad. Ca 130 utställare visar de senaste nyheterna inom maskiner, 
                utrustning, tjänster och produkter för branschen.
              </p>
              
              <div 
                id="boka" 
                className="rounded-2xl p-8"
                style={{ backgroundColor: '#166534' }}
              >
                <h3 className="text-xl font-bold mb-4 text-white">Boka monter för 2026</h3>
                <p className="mb-6 text-white/80">
                  Vartannat år samlas branschens aktörer i Ljusdal. Kontakta oss för 
                  att säkra din plats på nästa mässa.
                </p>
                <div className="space-y-3 mb-6">
                  <a href="tel:+46651-21190" className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">+46 (0)651-211 90</span>
                  </a>
                  <a href="mailto:kansli@mittia.com" className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">kansli@mittia.com</span>
                  </a>
                </div>
                <Link 
                  to="/gard-skog/boka-monter" 
                  className="inline-flex items-center space-x-2 px-6 py-3 font-bold rounded-full hover:brightness-110 transition-all"
                  style={{ backgroundColor: '#22C55E', color: '#FFFFFF' }}
                >
                  <span>Boka monter</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="w-12 h-12 mx-auto mb-6 text-gray-700" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Älvvallens Idrottspark, Ljusdal</h2>
          <p className="text-xl text-gray-600 mb-8">Mitt i Hälsingland – enkel tillgång med bil och tåg</p>
          <a 
            href="https://maps.app.goo.gl/iuB6EyrGhhAcJEUx8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 font-bold rounded-full hover:opacity-90 transition-all"
            style={{ backgroundColor: '#166534', color: '#FFFFFF' }}
          >
            <span>Hitta hit</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </PageLayout>
  )
}

// Park & Gata page - Orange profile, same structure as Skogstransport
function ParkGataPage() {
  return (
    <PageLayout>
      {/* Hero Section - Orange profile with park/garden image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)' 
          }} 
        />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-28 pb-16">
          <img 
            src="/parkogata-logo-oberoende-small.png" 
            alt="Mittia Park & Gata" 
            className="h-32 md:h-40 w-auto mx-auto mb-8"
          />
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Mötesplatsen för grönytor, fastigheter, anläggningar och vägar
          </h1>
          <p className="text-xl font-semibold text-white/90 mb-10">
            Norra Sveriges återkommande mötesplats för beslutsfattare och yrkesanställda
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">13-14 Augusti 2026</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">Älvvallen, Ljusdal</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">Branschbesökare</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/park-gata/boka-monter" 
              className="px-8 py-4 font-bold rounded-full hover:brightness-110 transition-all shadow-lg text-lg"
              style={{ backgroundColor: '#FB923C', color: '#FFFFFF' }}
            >
              Boka monter
            </Link>
            <a 
              href="#info" 
              className="px-8 py-4 font-semibold rounded-full border-2 border-white text-white transition-all text-lg hover:bg-white/10"
            >
              Mer information
            </a>
          </div>
        </div>
      </section>

      {/* About Section - White background with orange accents */}
      <section id="info" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <span 
                className="inline-block px-5 py-2 font-bold rounded-full text-sm mb-6 uppercase tracking-wider"
                style={{ backgroundColor: '#EA580C', color: '#FFFFFF' }}
              >
                Om mässan
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Ihop med branschorganisationer och de ledande leverantörerna bygger vi Norra Sveriges mötesplats!
              </h2>
              <div className="text-lg space-y-4 text-gray-600">
                <p>
                  Mittia: Park & Gata erbjuder värdefulla mötesdagar med kompetensutvecklande föredrag 
                  och seminarier, mässa där de ledande leverantörerna visar de senaste nyheterna och 
                  innovationerna för fordon, maskiner och övrig utrustning eller tjänster.
                </p>
                <p>
                  Sist men inte minst – erfarenhetsutbyten, samtal och diskussioner med likasinnade. 
                  Ihop med Svenska Kyrkan, Energi- och klimatrådgivarna och Maskinring Norrland som 
                  partners etablerar vi Ljusdal och Mittia: Park & Gata som återkommande gemensam 
                  mötesplats för Norra Sverige.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-3xl font-bold" style={{ color: '#EA580C' }}>2022</p>
                  <p className="text-gray-500 text-sm">Första mässan</p>
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ color: '#EA580C' }}>30+</p>
                  <p className="text-gray-500 text-sm">Utställare</p>
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ color: '#EA580C' }}>Växande</p>
                  <p className="text-gray-500 text-sm">Mötesplats</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="aspect-[9/16] max-w-sm mx-auto rounded-3xl overflow-hidden relative group shadow-2xl" style={{ border: '4px solid #EA580C' }}>
                {/* Video - Park & Gata uses vertikal-video-mittia2 */}
                <video 
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                  poster="https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                >
                  <source src="/vertikal-video-mittia2.mp4" type="video/mp4" />
                </video>
                
<div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'linear-gradient(transparent, rgba(234,88,12,0.9))' }}>
                  <p className="text-white text-xl font-bold text-center">
                    Upplev mässan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section - Light gray background with orange cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Det här kan du uppleva
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Mässa, kompetensutvecklande föredrag och erfarenhetsutbyten.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Mässa & utställning', desc: 'De ledande leverantörerna visar senaste nyheterna' },
              { title: 'Föredrag & seminarier', desc: 'Kompetensutveckling från branschorganisationer' },
              { title: 'Erfarenhetsutbyten', desc: 'Diskussioner och samtal med likasinnade' },
              { title: 'Nätverkande', desc: 'Bygg relationer med branschkollegor' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#EA580C' }}
                >
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visitors & Exhibitors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span 
                className="inline-block px-5 py-2 font-bold rounded-full text-sm mb-6 uppercase tracking-wider"
                style={{ backgroundColor: '#EA580C', color: '#FFFFFF' }}
              >
                För besökare
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Besökare på mässan</h2>
              <p className="text-gray-600 mb-8">
                Beslutsfattare, inköpare och yrkesanställda från privat och offentlig 
                grönyteförvaltning, fastighetsförvaltning, vägförvaltning, kyrka och 
                kyrkogård, anläggningar och offentliga miljöer.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#EA580C' }} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Öppettider</h4>
                    <p className="text-gray-600">Torsdag 09:00–16:00 · Fredag 09:00–16:00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <Ticket className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#EA580C' }} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Entré</h4>
                    <p className="text-gray-600">Fri entré via branschpartners/utställare. Dagentré 150 kr, under 18 år 50 kr.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <Car className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#EA580C' }} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Parkering</h4>
                    <p className="text-gray-600">50 kr/dag – går till Ljusdal IF:s ungdomsverksamhet</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <span 
                className="inline-block px-5 py-2 font-bold rounded-full text-sm mb-6 uppercase tracking-wider"
                style={{ backgroundColor: '#EA580C', color: '#FFFFFF' }}
              >
                För utställare
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Utställare på mässan</h2>
              <p className="text-gray-600 mb-8">
                Branschens ledande leverantörer av maskiner, utrustning och tjänster. 
                Bransch- och arbetsgivarorganisationer. Utbildare, rekrytering och bemanning.
              </p>
              
              <div 
                id="boka" 
                className="rounded-2xl p-8"
                style={{ backgroundColor: '#EA580C' }}
              >
                <h3 className="text-xl font-bold mb-4 text-white">Boka monter för 2026</h3>
                <p className="mb-6 text-white/80">
                  Var med och bygg Norra Sveriges mötesplats för grönytor, fastigheter, 
                  anläggningar och vägar. Kontakta oss för att säkra din plats.
                </p>
                <div className="space-y-3 mb-6">
                  <a href="tel:+46651-21190" className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">+46 (0)651-211 90</span>
                  </a>
                  <a href="mailto:kansli@mittia.com" className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">kansli@mittia.com</span>
                  </a>
                </div>
                <Link 
                  to="/park-gata/boka-monter" 
                  className="inline-flex items-center space-x-2 px-6 py-3 font-bold rounded-full hover:brightness-110 transition-all"
                  style={{ backgroundColor: '#FB923C', color: '#FFFFFF' }}
                >
                  <span>Boka monter</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="w-12 h-12 mx-auto mb-6 text-gray-700" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Älvvallens Idrottspark, Ljusdal</h2>
          <p className="text-xl text-gray-600 mb-8">Mitt i Hälsingland – enkel tillgång med bil och tåg</p>
          <a 
            href="https://maps.app.goo.gl/iuB6EyrGhhAcJEUx8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 font-bold rounded-full hover:opacity-90 transition-all"
            style={{ backgroundColor: '#EA580C', color: '#FFFFFF' }}
          >
            <span>Hitta hit</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </PageLayout>
  )
}

// Expo Hälsingland page - Blue profile, same structure as Skogstransport
function ExpoHalsinglandPage() {
  return (
    <PageLayout>
      {/* Hero Section - Clean image with subtle neutral overlay */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/halsingland-mittia.jpg')`
          }}
        />
        {/* Subtle neutral overlay for text readability - no color tint */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)' 
          }} 
        />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-28 pb-16">
          <img 
            src="/expo-logo-2027-small.png" 
            alt="Expo Hälsingland 2027" 
            className="h-32 md:h-40 w-auto mx-auto mb-8"
          />
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Upptäck möjligheterna i Hälsingland
          </h1>
          <p className="text-xl font-semibold text-white/90 mb-10">
            Mötesplatsen för jobb, boende och livskvalitet i Hälsingland
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">23-24 April 2027</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">SBB Arena, Bollnäs</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">Öppet för alla</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/expo-halsingland/boka-monter" 
              className="px-8 py-4 font-bold rounded-full hover:brightness-110 transition-all shadow-lg text-lg"
              style={{ backgroundColor: '#38BDF8', color: '#FFFFFF' }}
            >
              Boka monter
            </Link>
            <a 
              href="#info" 
              className="px-8 py-4 font-semibold rounded-full border-2 border-white text-white transition-all text-lg hover:bg-white/10"
            >
              Mer information
            </a>
          </div>
        </div>
      </section>

      {/* About Section - White background with blue accents */}
      <section id="info" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <span 
                className="inline-block px-5 py-2 font-bold rounded-full text-sm mb-6 uppercase tracking-wider"
                style={{ backgroundColor: '#0369A1', color: '#FFFFFF' }}
              >
                Om mässan
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                En unik mötesplats för dig som vill flytta till, jobba i eller etablera företag i Hälsingland
              </h2>
              <div className="text-lg space-y-4 text-gray-600">
                <p>
                  Expo Hälsingland samlar arbetsgivare från privat näringsliv och offentlig sektor, 
                  utbildningsaktörer och Hälsinglands sex unika kommuner. Här kan du träffa framtida 
                  arbetsgivare, upptäcka utbildningsmöjligheter och lära dig mer om livet i Hälsingland.
                </p>
                <p>
                  Under mässdagarna erbjuds gästföreläsningar och miniseminarier för kompetensutveckling. 
                  Upplev livet som familj i Hälsingland med sitt rika utbud av natur, kultur, hälsa, 
                  sport och fritid, shopping, restauranger och besöksmål.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-3xl font-bold" style={{ color: '#0369A1' }}>6</p>
                  <p className="text-gray-500 text-sm">Kommuner</p>
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ color: '#0369A1' }}>2027</p>
                  <p className="text-gray-500 text-sm">Premiär</p>
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ color: '#0369A1' }}>SBB</p>
                  <p className="text-gray-500 text-sm">Arena Bollnäs</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden relative group shadow-2xl" style={{ border: '4px solid #0369A1' }}>
                {/* Image - Expo Hälsingland uses static image */}
                <img 
                  src="/halsingland-expo-bild.png"
                  alt="Upplev Hälsingland"
                  className="w-full h-full object-cover object-center"
                />
                
<div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'linear-gradient(transparent, rgba(3,105,161,0.9))' }}>
                  <p className="text-white text-xl font-bold text-center">
                    Upplev Hälsingland
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who should visit - Light gray background with blue cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Besök Expo Hälsingland om...
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Mässan är för dig som vill upptäcka möjligheterna i Hälsingland
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Flytta till Hälsingland', desc: 'Du är intresserad av att flytta till någon av Hälsinglands sex unika kommuner' },
              { title: 'Hitta arbetsgivare', desc: 'Du vill träffa Hälsinglands arbetsgivare från privat näringsliv och offentlig sektor' },
              { title: 'Etablera företag', desc: 'Du driver företag och vill etablera dig eller hitta samarbeten i Hälsingland' },
              { title: 'Utbildningsmöjligheter', desc: 'Du vill veta mer om förskolor, grundskolor, gymnasier, högskolor och yrkesutveckling' },
              { title: 'Kompetensutveckling', desc: 'Du vill delta i gästföreläsningar och miniseminarier under mässdagarna' },
              { title: 'Upplev Hälsingland', desc: 'Du vill upptäcka natur, kultur, hälsa, sport, fritid och besöksmål' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#0369A1' }}
                >
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visitors & Exhibitors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span 
                className="inline-block px-5 py-2 font-bold rounded-full text-sm mb-6 uppercase tracking-wider"
                style={{ backgroundColor: '#0369A1', color: '#FFFFFF' }}
              >
                För besökare
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Besökare på mässan</h2>
              <p className="text-gray-600 mb-8">
                Alla som är intresserade av att flytta till, jobba i eller uppleva Hälsingland. 
                Familjer, arbetssökande, studenter, företagare och alla som vill upptäcka 
                möjligheterna i regionen.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#0369A1' }} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Öppettider</h4>
                    <p className="text-gray-600">Fredag 09:30–16:30 · Lördag 09:30–16:30</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <Ticket className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#0369A1' }} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Entré</h4>
                    <p className="text-gray-600">Fri entré via inbjudan/eBiljett. Dagentré 80 kr vuxen, 30 kr under 15 år.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <Car className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#0369A1' }} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Parkering</h4>
                    <p className="text-gray-600">Allmänna parkeringar inom 5 min gångavstånd till SBB Arena</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <span 
                className="inline-block px-5 py-2 font-bold rounded-full text-sm mb-6 uppercase tracking-wider"
                style={{ backgroundColor: '#0369A1', color: '#FFFFFF' }}
              >
                För utställare
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ställ ut på Expo Hälsingland</h2>
              <p className="text-gray-600 mb-8">
                Arbetsgivare som söker framtida kompetens, företag som vill visa upp verksamheten, 
                skolor och utbildningsaktörer, kommunal samhällsservice, besöksnäring och föreningsliv.
              </p>
              
              <div 
                id="boka" 
                className="rounded-2xl p-8"
                style={{ backgroundColor: '#0369A1' }}
              >
                <h3 className="text-xl font-bold mb-4 text-white">Boka monter för 2027</h3>
                <p className="mb-6 text-white/80">
                  Bjud in de du vill träffa och visa upp möjligheterna i Hälsingland. 
                  Kontakta oss för att säkra din plats.
                </p>
                <div className="space-y-3 mb-6">
                  <a href="tel:+46651-21190" className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">+46 (0)651-211 90</span>
                  </a>
                  <a href="mailto:kansli@mittia.com" className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">kansli@mittia.com</span>
                  </a>
                </div>
                <Link 
                  to="/expo-halsingland/boka-monter" 
                  className="inline-flex items-center space-x-2 px-6 py-3 font-bold rounded-full hover:brightness-110 transition-all"
                  style={{ backgroundColor: '#38BDF8', color: '#FFFFFF' }}
                >
                  <span>Boka monter</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-8">Vi samarrangerar Expo Hälsingland</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <span className="text-gray-600 font-medium">Företagarna</span>
            <span className="text-gray-600 font-medium">Destination Hälsingland</span>
            <span className="text-gray-600 font-medium">Ung Företagsamhet</span>
            <span className="text-gray-600 font-medium">Region Gävleborg</span>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="w-12 h-12 mx-auto mb-6 text-gray-700" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">SBB Arena, Bollnäs</h2>
          <p className="text-xl text-gray-600 mb-8">I hjärtat av Hälsingland – enkel tillgång för alla</p>
          <a 
            href="https://maps.app.goo.gl/8v7Tx5nuUvGpBE1JA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 font-bold rounded-full hover:opacity-90 transition-all"
            style={{ backgroundColor: '#0369A1', color: '#FFFFFF' }}
          >
            <span>Hitta hit</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </PageLayout>
  )
}

// About page
function AboutPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Möten mellan människor med samma intresse!
          </h1>
          <p className="text-xl text-white/80">
            Sedan 1999 arbetar vi med möteskommunikation genom tre affärsområden
          </p>
        </div>
      </section>

      {/* Intro Section with Entré image */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span 
                className="inline-block px-5 py-2 font-bold rounded-full text-sm mb-6 uppercase tracking-wider"
                style={{ backgroundColor: '#ae220b', color: '#FFFFFF' }}
              >
                Om Mittia
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professionella mässor i hjärtat av Hälsingland
              </h2>
              <div className="text-lg space-y-4 text-gray-600">
                <p>
                  Mittia Event AB arrangerar kvalitetsmässor i Hälsingland med fokus på skogsnäring, 
                  jordbruk och samhällsutveckling. Sedan starten 1999 har vi byggt upp ett starkt 
                  varumärke och skapat värdefulla mötesplatser för branschen.
                </p>
                <p>
                  Våra mässor kännetecknas av hög kvalitet, god stämning och affärsnytta för både 
                  utställare och besökare. Vi samarbetar nära med branschorganisationer, kommuner 
                  och regionala aktörer för att skapa relevanta och värdeskapande events.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/entre-mittia.jpg" 
                alt="Entrén till Mittias mässor" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Business Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Våra tre affärsområden</h2>
            <p className="text-lg text-gray-600">Vi arbetar med möteskommunikation inom expo, event och rådgivning</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Expo */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: '#ae220b' }}
              >
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expo</h3>
              <p className="text-gray-600">
                Expo i vår värld är en mötesplats där flera företag samverkar för att demonstrera 
                sina produkter och tjänster mot en gemensamt utpekad målgrupp. Vi kan anlitas av 
                branschorganisationer, myndigheter eller företag för att utveckla och genomföra 
                nya typer av mässor.
              </p>
            </div>

            {/* Event */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: '#ae220b' }}
              >
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Event</h3>
              <p className="text-gray-600">
                Inom event har vi lång och bred erfarenhet av såväl företagsevent som konsumentevent. 
                Det kan handla om möten med kunder, återförsäljare eller personal. Vi vägleder våra 
                uppdragsgivare genom hela processen från behovsanalys till konceptutveckling, 
                marknadsföring och genomförande.
              </p>
            </div>

            {/* Rådgivning */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: '#ae220b' }}
              >
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rådgivning</h3>
              <p className="text-gray-600">
                Företag och organisationer kan anlita oss som rådgivare. Vi kan delta som bollplank 
                eller upphandlas för en längre period. Kanske handlar det om att vässa 
                presentationsteknik, hitta samarbeten eller sponsors, eller få hjälp med 
                konceptutveckling?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Fairs */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Våra mässor</h2>
            <p className="text-lg text-gray-600">Vi genomför egna mässkoncept som samlar tusentals besökare</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mittia: Skogstransport</h3>
              <p className="text-gray-600 mb-4">
                Nordens största mötesplats inom skogstransportbranschen med över 130 utställare 
                och ca 6 000 besökare. Originalet sedan 1999.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>Älvvallen, Ljusdal</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mittia: Gård & Skog</h3>
              <p className="text-gray-600 mb-4">
                Norra Sveriges mässa för jordbruk, skogsbruk och djurhållning med 130 utställare 
                och ca 5 000 besökare. Sedan 2012.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>Älvvallen, Ljusdal</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mittia: Park & Gata</h3>
              <p className="text-gray-600 mb-4">
                Sedan 2022 utvecklar vi Park & Gata som ny mötesplats för norra Sverige mot 
                yrkesverksamma inom förvaltning och underhåll av offentliga och privata 
                fastigheter, anläggningar, grönytor och vägar.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>Älvvallen, Ljusdal</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expo Hälsingland</h3>
              <p className="text-gray-600 mb-4">
                En unik mötesplats för dig som vill flytta till, jobba i eller etablera företag 
                i Hälsingland. Premiär 2027 på SBB Arena i Bollnäs.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>SBB Arena, Bollnäs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Office Section with Kansli image */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/kanslibild.jpg" 
                alt="Mittias kansli och team" 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Mittia Event AB
              </h2>
              <div className="text-lg space-y-4 text-gray-600">
                <p>
                  Bakom våra mässor står ett erfaret team med passion för att skapa möten 
                  mellan människor med samma intresse. Från vårt kansli i Ljusdal planerar 
                  och genomför vi events som skapar värde för utställare och besökare.
                </p>
                <p>
                  Vi tror på långsiktiga relationer och samarbetar nära med branschorganisationer, 
                  kommuner och regionala aktörer för att ständigt utveckla våra mässor.
                </p>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-2xl shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">Kontakta oss</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Adress:</strong> Kyrksjönäsvägen 18, 827 30 Ljusdal</p>
                  <p><strong>Telefon:</strong> +46 (0)651-211 90</p>
                  <p><strong>E-post:</strong> <a href="mailto:kansli@mittia.com" className="text-red-700 hover:underline">kansli@mittia.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

// ============================================
// BOKA MONTER PAGES - POC Preview + External Links
// ============================================

// Skogstransport - Boka Monter Page
function SkogstransportBokaPage() {
  return (
    <PageLayout>
      {/* Hero Section - Same style as Skogstransport main page */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Full background image - same as main Skogstransport page */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/forestry.jpeg')`
          }}
        />
        {/* Warm overlay - same as main Skogstransport page */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)' 
          }} 
        />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-28 pb-16">
          {/* Logo */}
          <img 
            src="/skogstransport-logo-oberoende-small.png" 
            alt="Mittia Skogstransport" 
            className="h-32 md:h-40 w-auto mx-auto mb-8"
          />
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Boka monter på Skogstransport 2026
          </h1>
          <p className="text-xl font-semibold text-white/90 mb-10">
            Säkra din plats på Nordens viktigaste skogstransportmässa
          </p>
          
          {/* Key info badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">Augusti 2026</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">Älvvallen, Ljusdal</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">6 000+ besökare</span>
            </div>
          </div>
          
          {/* Single CTA Button - Kundzon */}
          <a 
            href="https://www.mittia.com/kundzon/boka-monter.php?lang=sv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-8 py-4 font-bold rounded-full hover:brightness-110 transition-all shadow-lg text-lg"
            style={{ backgroundColor: '#FFE500', color: '#1A1A1A' }}
          >
            <span>Till Kundzonen för bokning</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Pricing Section */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Priser för monteryta</h3>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">Registreringsavgift (obligatorisk)</span>
                  <span className="font-bold" style={{ color: '#1A1A1A' }}>3 900 SEK</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Monteryta 15-30 kvm</span>
                  <span className="font-bold" style={{ color: '#1A1A1A' }}>265 SEK/kvm</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Monteryta 30-150 kvm</span>
                  <span className="font-bold" style={{ color: '#1A1A1A' }}>145 SEK/kvm</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Monteryta över 150 kvm</span>
                  <span className="font-bold" style={{ color: '#1A1A1A' }}>105 SEK/kvm</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Till alla priser tillkommer 25% moms. Monteryta faktureras i juni 2026.
              </p>
            </div>
          </div>

          {/* Mässområde image section */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Mässområdet</h3>
            <div className="rounded-2xl overflow-hidden shadow-lg border-4" style={{ borderColor: '#1A1A1A' }}>
              <img 
                src="/massomrade-mittia-skogstransport.png" 
                alt="Översikt mässområdet Skogstransport" 
                className="w-full h-auto"
                onError={(e) => { e.target.src = '/massomrade-mittia.png' }}
              />
            </div>
            <p className="text-center text-gray-500 mt-4 text-sm">
              Översikt av mässområdet på Älvvallen, Ljusdal
            </p>
          </div>

          {/* Info cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <Calendar className="w-10 h-10 mx-auto mb-4" style={{ color: '#1A1A1A' }} />
              <h3 className="font-bold text-gray-900 mb-2">Mässdatum</h3>
              <p className="text-gray-600">Augusti 2026</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <MapPin className="w-10 h-10 mx-auto mb-4" style={{ color: '#1A1A1A' }} />
              <h3 className="font-bold text-gray-900 mb-2">Plats</h3>
              <p className="text-gray-600">Älvvallen, Ljusdal</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <Users className="w-10 h-10 mx-auto mb-4" style={{ color: '#1A1A1A' }} />
              <h3 className="font-bold text-gray-900 mb-2">Besökare</h3>
              <p className="text-gray-600">6 000+ branschfolk</p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Redo att boka din monter?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Logga in på Kundzonen för att slutföra din bokning
          </p>
          <a 
            href="https://www.mittia.com/kundzon/boka-monter.php?lang=sv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-8 py-4 font-bold rounded-full hover:brightness-110 transition-all shadow-lg text-lg"
            style={{ backgroundColor: '#FFE500', color: '#1A1A1A' }}
          >
            <span>Till Kundzonen för bokning</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Back link */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link 
            to="/skogstransport" 
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span>Tillbaka till Skogstransport</span>
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}

// Gård & Skog - Boka Monter Page
function GardSkogBokaPage() {
  return (
    <PageLayout>
      {/* Hero Section - Same style as Skogstransport Boka-monter */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Full background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        {/* Overlay - same style as Skogstransport */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)' 
          }} 
        />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-28 pb-16">
          {/* Logo */}
          <img 
            src="/gardoskog-logo-oberoende-small.png" 
            alt="Mittia Gård & Skog" 
            className="h-32 md:h-40 w-auto mx-auto mb-8"
          />
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Boka monter på Gård & Skog 2026
          </h1>
          <p className="text-xl font-semibold text-white/90 mb-10">
            Säkra din plats på Norra Sveriges mässa för jordbruk, skogsbruk och djurhållning
          </p>
          
          {/* Key info badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">14-15 Augusti 2026</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">Älvvallen, Ljusdal</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">5 000+ besökare</span>
            </div>
          </div>
          
          {/* Single CTA Button - Kundzon */}
          <a 
            href="https://www.mittia.com/kundzon/boka-monter.php?lang=sv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-8 py-4 font-bold rounded-full hover:brightness-110 transition-all shadow-lg text-lg"
            style={{ backgroundColor: '#22C55E', color: '#FFFFFF' }}
          >
            <span>Till Kundzonen för bokning</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Pricing Section */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Priser för monteryta</h3>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">Marknadsföringsavgift (obligatorisk)</span>
                  <span className="font-bold" style={{ color: '#166534' }}>2 900 SEK</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Monteryta 9-30 kvm</span>
                  <span className="font-bold" style={{ color: '#166534' }}>230 SEK/kvm</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Monteryta 30-150 kvm</span>
                  <span className="font-bold" style={{ color: '#166534' }}>120 SEK/kvm</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Monteryta över 150 kvm</span>
                  <span className="font-bold" style={{ color: '#166534' }}>100 SEK/kvm</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Till alla priser tillkommer 25% moms. Monteryta faktureras i juni 2026.
              </p>
            </div>
          </div>

          {/* Mässområde image section */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Mässområdet</h3>
            <div className="rounded-2xl overflow-hidden shadow-lg border-4" style={{ borderColor: '#166534' }}>
              <img 
                src="/massomrade-mittia.png" 
                alt="Översikt mässområdet Gård & Skog" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-gray-500 mt-4 text-sm">
              Översikt av mässområdet på Älvvallen, Ljusdal
            </p>
          </div>

          {/* Info cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <Calendar className="w-10 h-10 mx-auto mb-4" style={{ color: '#166534' }} />
              <h3 className="font-bold text-gray-900 mb-2">Mässdatum</h3>
              <p className="text-gray-600">14-15 Augusti 2026</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <MapPin className="w-10 h-10 mx-auto mb-4" style={{ color: '#166534' }} />
              <h3 className="font-bold text-gray-900 mb-2">Plats</h3>
              <p className="text-gray-600">Älvvallen, Ljusdal</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <Users className="w-10 h-10 mx-auto mb-4" style={{ color: '#166534' }} />
              <h3 className="font-bold text-gray-900 mb-2">Besökare</h3>
              <p className="text-gray-600">5 000+ lantbrukare</p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#166534' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Redo att boka din monter?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Logga in på Kundzonen för att slutföra din bokning
          </p>
          <a 
            href="https://www.mittia.com/kundzon/boka-monter.php?lang=sv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-8 py-4 font-bold rounded-full hover:brightness-110 transition-all shadow-lg text-lg"
            style={{ backgroundColor: '#22C55E', color: '#FFFFFF' }}
          >
            <span>Till Kundzonen för bokning</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Back link */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link 
            to="/gard-skog" 
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span>Tillbaka till Gård & Skog</span>
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}

// Park & Gata - Boka Monter Page
function ParkGataBokaPage() {
  return (
    <PageLayout>
      {/* Hero Section - Same style as Skogstransport Boka-monter */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Full background image - park/garden theme */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        {/* Lighter overlay than Skogstransport for better image visibility */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)' 
          }} 
        />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-28 pb-16">
          {/* Logo */}
          <img 
            src="/parkogata-logo-oberoende-small.png" 
            alt="Mittia Park & Gata" 
            className="h-32 md:h-40 w-auto mx-auto mb-8"
          />
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Boka monter på Park & Gata 2026
          </h1>
          <p className="text-xl font-semibold text-white/90 mb-10">
            Säkra din plats på mötesplatsen för grönytor, fastigheter, anläggningar och vägar
          </p>
          
          {/* Key info badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">13-14 Augusti 2026</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">Älvvallen, Ljusdal</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">Branschbesökare</span>
            </div>
          </div>
          
          {/* Single CTA Button - Kundzon */}
          <a 
            href="https://www.mittia.com/kundzon/boka-monter.php?lang=sv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-8 py-4 font-bold rounded-full hover:brightness-110 transition-all shadow-lg text-lg"
            style={{ backgroundColor: '#FB923C', color: '#FFFFFF' }}
          >
            <span>Till Kundzonen för bokning</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Pricing Section */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Priser för monteryta</h3>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">Marknadsföringsavgift (obligatorisk)</span>
                  <span className="font-bold" style={{ color: '#EA580C' }}>2 900 SEK</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Monteryta 9-30 kvm</span>
                  <span className="font-bold" style={{ color: '#EA580C' }}>230 SEK/kvm</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Monteryta 30-150 kvm</span>
                  <span className="font-bold" style={{ color: '#EA580C' }}>120 SEK/kvm</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Monteryta över 150 kvm</span>
                  <span className="font-bold" style={{ color: '#EA580C' }}>100 SEK/kvm</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Till alla priser tillkommer 25% moms. Monteryta faktureras i juni 2026.
              </p>
            </div>
          </div>

          {/* Mässområde image section */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Mässområdet</h3>
            <div className="rounded-2xl overflow-hidden shadow-lg border-4" style={{ borderColor: '#EA580C' }}>
              <img 
                src="/massomrade-mittia.png" 
                alt="Översikt mässområdet Park & Gata" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-gray-500 mt-4 text-sm">
              Översikt av mässområdet på Älvvallen, Ljusdal
            </p>
          </div>

          {/* Info cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <Calendar className="w-10 h-10 mx-auto mb-4" style={{ color: '#EA580C' }} />
              <h3 className="font-bold text-gray-900 mb-2">Mässdatum</h3>
              <p className="text-gray-600">13-14 Augusti 2026</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <MapPin className="w-10 h-10 mx-auto mb-4" style={{ color: '#EA580C' }} />
              <h3 className="font-bold text-gray-900 mb-2">Plats</h3>
              <p className="text-gray-600">Älvvallen, Ljusdal</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <Users className="w-10 h-10 mx-auto mb-4" style={{ color: '#EA580C' }} />
              <h3 className="font-bold text-gray-900 mb-2">Besökare</h3>
              <p className="text-gray-600">Branschbesökare</p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#EA580C' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Redo att boka din monter?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Logga in på Kundzonen för att slutföra din bokning
          </p>
          <a 
            href="https://www.mittia.com/kundzon/boka-monter.php?lang=sv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-8 py-4 font-bold rounded-full hover:brightness-110 transition-all shadow-lg text-lg"
            style={{ backgroundColor: '#FB923C', color: '#FFFFFF' }}
          >
            <span>Till Kundzonen för bokning</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Back link */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link 
            to="/park-gata" 
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span>Tillbaka till Park & Gata</span>
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}

// Expo Hälsingland - Boka Monter Page
function ExpoHalsinglandBokaPage() {
  return (
    <PageLayout>
      {/* Hero Section - Same style as Skogstransport Boka-monter */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Full background image - Hälsingland landscape */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/halsingland-mittia.jpg')`
          }}
        />
        {/* Overlay - same style as Skogstransport */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)' 
          }} 
        />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-28 pb-16">
          {/* Logo */}
          <img 
            src="/expo-logo-2027-small.png" 
            alt="Expo Hälsingland 2027" 
            className="h-32 md:h-40 w-auto mx-auto mb-8"
          />
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Boka monter på Expo Hälsingland 2027
          </h1>
          <p className="text-xl font-semibold text-white/90 mb-10">
            Visa upp möjligheterna i Hälsingland på vår nya regionalmässa
          </p>
          
          {/* Key info badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">23-24 April 2027</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">SBB Arena, Bollnäs</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">Alla intresserade</span>
            </div>
          </div>
          
          {/* Single CTA Button - Kundzon */}
          <a 
            href="https://www.mittia.com/kundzon/boka-monter.php?lang=sv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-8 py-4 font-bold rounded-full hover:brightness-110 transition-all shadow-lg text-lg"
            style={{ backgroundColor: '#38BDF8', color: '#FFFFFF' }}
          >
            <span>Till Kundzonen för bokning</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Info cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <Calendar className="w-10 h-10 mx-auto mb-4" style={{ color: '#0369A1' }} />
              <h3 className="font-bold text-gray-900 mb-2">Mässdatum</h3>
              <p className="text-gray-600">23-24 April 2027</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <MapPin className="w-10 h-10 mx-auto mb-4" style={{ color: '#0369A1' }} />
              <h3 className="font-bold text-gray-900 mb-2">Plats</h3>
              <p className="text-gray-600">SBB Arena, Bollnäs</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <Users className="w-10 h-10 mx-auto mb-4" style={{ color: '#0369A1' }} />
              <h3 className="font-bold text-gray-900 mb-2">Målgrupp</h3>
              <p className="text-gray-600">Alla intresserade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">Priser monteryta</h2>
          <p className="text-center text-gray-600 mb-10">Välj den monteryta som passar dig bäst</p>
          
          {/* Obligatorisk avgift notice */}
          <div className="rounded-2xl p-6 mb-8 text-center" style={{ backgroundColor: '#38BDF8', color: '#0369A1' }}>
            <p className="font-bold text-lg">Obligatorisk avgift för alla utställare: 2 900 SEK</p>
            <p className="text-sm opacity-80 mt-1">Inkluderar katalogplats, marknadsföring och tillgång till mässarrangemang</p>
          </div>

          {/* Monteryta pricing grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Orange sektion */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4" style={{ borderColor: '#F97316' }}>
              <div className="w-8 h-8 rounded-full mb-4" style={{ backgroundColor: '#F97316' }}></div>
              <h3 className="font-bold text-gray-900 mb-2">Orange sektion</h3>
              <p className="text-gray-600 text-sm mb-3">2m × 2m</p>
              <p className="text-2xl font-bold" style={{ color: '#0369A1' }}>4 200 kr</p>
            </div>
            
            {/* Lila sektion */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4" style={{ borderColor: '#A855F7' }}>
              <div className="w-8 h-8 rounded-full mb-4" style={{ backgroundColor: '#A855F7' }}></div>
              <h3 className="font-bold text-gray-900 mb-2">Lila sektion</h3>
              <p className="text-gray-600 text-sm mb-3">3m × 2m</p>
              <p className="text-2xl font-bold" style={{ color: '#0369A1' }}>7 700 kr</p>
            </div>
            
            {/* Blå sektion */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4" style={{ borderColor: '#3B82F6' }}>
              <div className="w-8 h-8 rounded-full mb-4" style={{ backgroundColor: '#3B82F6' }}></div>
              <h3 className="font-bold text-gray-900 mb-2">Blå sektion</h3>
              <p className="text-gray-600 text-sm mb-3">6m × 4m</p>
              <p className="text-2xl font-bold" style={{ color: '#0369A1' }}>17 500 kr</p>
            </div>
            
            {/* Grön sektion */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4" style={{ borderColor: '#22C55E' }}>
              <div className="w-8 h-8 rounded-full mb-4" style={{ backgroundColor: '#22C55E' }}></div>
              <h3 className="font-bold text-gray-900 mb-2">Grön sektion</h3>
              <p className="text-gray-600 text-sm mb-3">Min 50 kvm</p>
              <p className="text-2xl font-bold" style={{ color: '#0369A1' }}>575 kr/kvm</p>
            </div>
          </div>

          {/* Seminarietid pricing */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Seminarietid</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-gray-600 mb-2">2 heldagar</p>
                <p className="text-2xl font-bold" style={{ color: '#0369A1' }}>15 000 kr</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-gray-600 mb-2">Halvdag</p>
                <p className="text-2xl font-bold" style={{ color: '#0369A1' }}>9 000 kr</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-gray-600 mb-2">1 timme</p>
                <p className="text-2xl font-bold" style={{ color: '#0369A1' }}>3 900 kr</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#0369A1' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Boka monter för 2027
          </h2>
          <p className="text-lg text-white/80 mb-6">
            Bjud in de du vill träffa och visa upp möjligheterna i Hälsingland. 
            Kontakta oss för att säkra din plats.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-8">
            <a href="tel:+46651-21190" className="flex items-center justify-center space-x-3 text-white/80 hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-medium">+46 (0)651-211 90</span>
            </a>
            <a href="mailto:kansli@mittia.com" className="flex items-center justify-center space-x-3 text-white/80 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              <span className="font-medium">kansli@mittia.com</span>
            </a>
          </div>
          <a 
            href="https://www.mittia.com/kundzon/boka-monter.php?lang=sv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-8 py-4 font-bold rounded-full hover:brightness-110 transition-all shadow-lg text-lg"
            style={{ backgroundColor: '#38BDF8', color: '#FFFFFF' }}
          >
            <span>Till Kundzonen för bokning</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Back link */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link 
            to="/expo-halsingland" 
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span>Tillbaka till Expo Hälsingland</span>
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}

// Utställare-sida
function ExhibitorPage() {
  const exhibitors2025 = [
    'AB K-rauta', 'AB Lantmännen Maskin', 'AB Transmisson', 'Alfta Gallringsteknik AB', 
    'All-Husqvarna i Ljusdal', 'Allas vilt & viltkött AB', 'Allskog AB', 'Almia AB', 
    'Aloe Vera Skincare AB', 'ANDRITZ AB', 'ArchReproduccions AB', 'Arwidssons Mekaniska Verkstad AB', 
    'Atria Sverige AB', 'Attacus', 'B. Dahlqvist Åkeri AB', 'Bellman & Symfon AB', 
    'BillerudKorsnäs', 'Biokraft i Ljusdal AB', 'Biorock', 'Björnebols Vagnspark AB',
    'Bracke Forest AB', 'Bufab Sweden AB', 'BYGGmax', 'CB Parts AB', 'Chevin AB',
    'ClearCut Invest', 'ClimbPro AB', 'Cofra International', 'Cotech/Nordic Partner',
    'Cranab AB', 'Delaval Sales AB', 'DIISA AB', 'Drönarkonsult i Norrland AB',
    'Eklunds Skogsmaskiner AB', 'El-Björn', 'Elcon i Bollnäs AB', 'Enwalks Vilt',
    'ESSVE', 'Fagersta Stainless AB', 'Falk & Ekström Motor AB', 'Fassi Scandinavia',
    'Felling-Trosa Traktortjänst', 'Finnved European AB', 'Floby Nya Bildelar AB', 
    'Follo Futura', 'Ford Store', 'Forestcaravan', 'Forestia', 'Forssjö Bruk AB',
    'FPG Industrier', 'Fyrhjulings-Specialisten AB', 'Förenade Småsågsverk', 
    'Gallringsmansen AB', 'GB Smides', 'GF Service AB', 'GL Beijer Byggmaterial AB',
    'GM-Glas i Bollnäs', 'Grafokett AB', 'Gunnars Traktorservice AB', 'Gustav & Albin AB',
    'Gävleborgs Skogs & Lantbruksavdelning', 'Göranssons Maskin', 'Handelsbolaget Skogsblansen AB',
    'Hargs bruk AB', 'Harryson', 'Heatwork AB', 'Hedlund Maskin AB', 'Hegns Handelshus AB',
    'Holms EL & Maskin', 'Hudiksvalls Motor AB', 'Husqvarna AB', 'Hälsinglands Sparbank',
    'ICA Maxi Stormarknad Bollnäs', 'Indexator', 'Ingemanssons Motor AB', 'Interoc AB',
    'ISA AB', 'ISR Immune System Regulation', 'Jens Nilsson Trading', 'Jernforsen Energy System AB',
    'Jokab Safety', 'JT-Maskin AB', 'Jugner Industri AB', 'Jula Sverige AB',
    'Järvsö Sågverk', 'K.Pershagens Åkeri AB', 'Kallholmens Bruk', 'Kawa AB',
    'Kesla Oyj', 'KITO Sverige', 'Komatsu Forest AB', 'Kranman AB', 'Kubota Scandinavia'
  ]

  const exhibitors2024 = [
    'AB Lantmännen Maskin', 'AB Transmisson', 'Alfta Gallringsteknik AB', 
    'All-Husqvarna i Ljusdal', 'Allskog AB', 'Almia AB', 'ANDRITZ AB', 
    'B. Dahlqvist Åkeri AB', 'Bellman & Symfon AB', 'BillerudKorsnäs',
    'Björnebols Vagnspark AB', 'Bracke Forest AB', 'BYGGmax', 'CB Parts AB',
    'Cranab AB', 'DIISA AB', 'El-Björn', 'ESSVE', 'Fagersta Stainless AB',
    'Fassi Scandinavia', 'Finnved European AB', 'Forestcaravan', 
    'Fyrhjulings-Specialisten AB', 'GM-Glas i Bollnäs', 'Grafokett AB',
    'Hedlund Maskin AB', 'Holms EL & Maskin', 'Husqvarna AB', 
    'Hälsinglands Sparbank', 'Indexator', 'ISA AB', 'Järvsö Sågverk',
    'Komatsu Forest AB', 'Kranman AB'
  ]

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-16">
          <img 
            src="/mittia-skogstransport-2026-logo-small.png" 
            alt="Mittia Skogstransport" 
            className="h-20 md:h-24 w-auto mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Utställare
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Möt branschens ledande leverantörer och upptäck de senaste produkterna och tjänsterna
          </p>
        </div>
      </section>

      {/* Why exhibit section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Varför ställa ut på Skogstransport?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Skogstransport är Nordens ledande mötesplats för skogstransportbranschen. 
              Här möts tillverkare, återförsäljare, entreprenörer och skogsägare under två intensiva dagar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FFE500' }}>
                <Users className="w-8 h-8" style={{ color: '#1A1A1A' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">6 000+ besökare</h3>
              <p className="text-gray-600">
                Branschfolk från hela Norden besöker mässan varje år
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FFE500' }}>
                <Award className="w-8 h-8" style={{ color: '#1A1A1A' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">130+ utställare</h3>
              <p className="text-gray-600">
                Branschens ledande företag samlas på samma plats
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FFE500' }}>
                <Calendar className="w-8 h-8" style={{ color: '#1A1A1A' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">25+ års erfarenhet</h3>
              <p className="text-gray-600">
                En etablerad mässa med stark tradition sedan 1999
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Vad ingår i monterplatsen?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Monterplats på utvald yta',
              'Exponering i mässtidning och på webb',
              'Marknadsföring i sociala medier',
              'Profil i utställarkatalogen',
              'Tillgång till gemensamma faciliteter',
              'Parkeringsplatser för fordon på demo'
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-sm">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FFE500' }}>
                  <svg className="w-5 h-5" style={{ color: '#1A1A1A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitors 2025 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Utställare 2025
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Över 130 utställare deltog på Skogstransport 2025
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {exhibitors2025.map((company, index) => (
              <div key={index} className="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                {company}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">
            ... och många fler. Se fullständig lista på mittia.com
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Redo att ställa ut?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Boka din monterplats för Skogstransport 2026 redan idag
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/skogstransport/boka-monter"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 font-bold rounded-full hover:brightness-110 transition-all shadow-lg text-lg"
              style={{ backgroundColor: '#FFE500', color: '#1A1A1A' }}
            >
              <span>Boka monter</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/skogstransport"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 font-bold rounded-full border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all text-lg"
            >
              <span>Läs mer om mässan</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span>Tillbaka till startsidan</span>
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}

// Kontaktsida
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    fair: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // POC: Visa bekräftelse istället för faktisk skickning
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kontakta Mittia
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Har du frågor om våra mässor, vill boka monter eller behöver praktisk information? 
            Vi finns här för att hjälpa dig!
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Intro text */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Vi hjälper dig gärna
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oavsett om du är intresserad av att ställa ut på någon av våra mässor, 
              har frågor om bokning, eller vill veta mer om Mittia Event – tveka inte att höra av dig. 
              Ring, maila eller använd kontaktformuläret nedan.
            </p>
          </div>

          {/* Contact Cards - Henrik & Ulrika */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Henrik */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="/kontaktbild_henrik.jpg" 
                  alt="Henrik Bruveris" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Henrik Bruveris</h3>
              <p className="text-gray-500 mb-4">VD, Mittia Event AB</p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Telefon:</span> +46 (0)736-33 46 33
                </p>
                <a 
                  href="mailto:kansli@mittia.com" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-white transition-all hover:brightness-110 mt-4"
                  style={{ backgroundColor: '#ae220b' }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Skicka e-post
                </a>
              </div>
            </div>

            {/* Ulrika */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="/kontaktbild_ulrika.jpg" 
                  alt="Ulrika Andersson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Ulrika Andersson</h3>
              <p className="text-gray-500 mb-4">Projektledare</p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Telefon:</span> +46 (0)70-242 45 88
                </p>
                <a 
                  href="mailto:kansli@mittia.com" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-white transition-all hover:brightness-110 mt-4"
                  style={{ backgroundColor: '#ae220b' }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Skicka e-post
                </a>
              </div>
            </div>
          </div>

          {/* General Contact Info */}
          <div className="text-center mb-16 p-8 bg-gray-900 rounded-2xl text-white max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Mittia Event AB</h3>
            <div className="space-y-2 text-gray-300">
              <p>Kyrksjönäsvägen 18</p>
              <p>827 30 Ljusdal</p>
              <p className="pt-2">
                <span className="font-medium text-white">Telefon:</span> +46 (0)651-211 90
              </p>
              <p>
                <span className="font-medium text-white">E-post:</span>{' '}
                <a href="mailto:kansli@mittia.com" className="text-yellow-400 hover:underline">
                  kansli@mittia.com
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Skicka ett meddelande
            </h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Tack för ditt meddelande!</h3>
                <p className="text-green-700">Vi återkommer till dig så snart vi kan.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Namn *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="Ditt namn"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-postadress *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="din@email.se"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Ämne *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="Vad gäller ditt ärende?"
                    />
                  </div>
                  <div>
                    <label htmlFor="fair" className="block text-sm font-medium text-gray-700 mb-2">
                      Gäller mässa
                    </label>
                    <select
                      id="fair"
                      name="fair"
                      value={formData.fair}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Välj mässa (valfritt)</option>
                      <option value="skogstransport">Skogstransport</option>
                      <option value="gard-skog">Gård & Skog</option>
                      <option value="park-gata">Park & Gata</option>
                      <option value="expo-halsingland">Expo Hälsingland</option>
                      <option value="general">Generell fråga</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Meddelande *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                    placeholder="Skriv ditt meddelande här..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-8 py-4 font-bold rounded-full text-white transition-all hover:brightness-110 shadow-lg text-lg"
                    style={{ backgroundColor: '#ae220b' }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Skicka meddelande
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skogstransport" element={<SkogstransportPage />} />
        <Route path="/skogstransport/boka-monter" element={<SkogstransportBokaPage />} />
        <Route path="/gard-skog" element={<GardSkogPage />} />
        <Route path="/gard-skog/boka-monter" element={<GardSkogBokaPage />} />
        <Route path="/park-gata" element={<ParkGataPage />} />
        <Route path="/park-gata/boka-monter" element={<ParkGataBokaPage />} />
        <Route path="/expo-halsingland" element={<ExpoHalsinglandPage />} />
        <Route path="/expo-halsingland/boka-monter" element={<ExpoHalsinglandBokaPage />} />
        <Route path="/om-mittia" element={<AboutPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/utstallare" element={<ExhibitorPage />} />
      </Routes>
    </Router>
  )
}

export default App
