import Navbar from './Navbar'
import Hero from './Hero'
import CraftSection from './CraftSection'
import CollectionsSection from './CollectionsSection'
import AboutSection from './AboutSection'
import Footer from './Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <CraftSection />
        <CollectionsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}

