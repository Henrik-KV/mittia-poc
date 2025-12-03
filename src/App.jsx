import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Exhibitions from './components/Exhibitions'
import ForExhibitors from './components/ForExhibitors'
import ForVisitors from './components/ForVisitors'
import About from './components/About'
import News from './components/News'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <Exhibitions />
        <ForExhibitors />
        <ForVisitors />
        <About />
        <News />
      </main>
      <Footer />
    </div>
  )
}

export default App
