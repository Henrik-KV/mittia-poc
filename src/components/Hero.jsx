import { Play, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Placeholder för video - ersätts med riktig mp4 senare */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        {/* Video element - ready for mp4 */}
        {/* 
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/hero-background.mp4" type="video/mp4" />
        </video>
        */}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 video-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-5xl mx-auto animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Sedan 1999 i Ljusdal, Hälsingland</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Mässor som skapar
            <br />
            <span className="gradient-text">möten mellan människor</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Nordens ledande mötesplatser inom <span className="text-amber-400 font-semibold">skogstransport</span>, 
            <span className="text-green-400 font-semibold"> lantbruk</span>, 
            <span className="text-orange-400 font-semibold"> samhällsförvaltning</span> och 
            <span className="text-cyan-400 font-semibold"> regional utveckling</span>
          </p>

          {/* Exhibition Logos/Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-500/30">
              <div className="w-3 h-3 bg-amber-500 rounded-full" />
              <span className="text-white font-medium text-sm">Skogstransport</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/30">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-white font-medium text-sm">Gård & Skog</span>
            </div>
            <div className="flex items-center space-x-2 bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-500/30">
              <div className="w-3 h-3 bg-orange-500 rounded-full" />
              <span className="text-white font-medium text-sm">Park & Gata</span>
            </div>
            <div className="flex items-center space-x-2 bg-cyan-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-500/30">
              <div className="w-3 h-3 bg-cyan-500 rounded-full" />
              <span className="text-white font-medium text-sm">Expo Hälsingland 2027</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#massor" 
              className="group px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/25 hover:scale-105 flex items-center space-x-2"
            >
              <span>Utforska mässorna</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <a 
              href="#utstallare" 
              className="px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
            >
              Bli utställare
            </a>
            <a 
              href="#besokare" 
              className="px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
            >
              För besökare
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#massor" className="flex flex-col items-center text-white/60 hover:text-white transition-colors">
            <span className="text-sm mb-2">Scrolla ner</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
