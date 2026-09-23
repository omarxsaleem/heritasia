import { useEffect } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import CraftSection from './CraftSection'
import Footer from './Footer'

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        const navElement = document.querySelector('nav')
        const navHeight = navElement ? navElement.offsetHeight : 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navHeight
        window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' })
      }
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <CraftSection />
      </main>
      <Footer />
    </div>
  )
}

