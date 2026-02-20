import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const navElement = document.querySelector('nav')
      const navHeight = navElement ? navElement.offsetHeight : 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-beige/95 backdrop-blur-sm shadow-sm'
          : 'bg-beige/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-3">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center space-x-3 cursor-pointer">
              <img
                src="/heritasia-logo2.png"
                alt="Heritasia Logo"
                className="h-8 md:h-10 w-auto"
              />
              <span className="font-serif text-lg md:text-xl font-semibold text-brick">
                Heritasia
              </span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6 md:space-x-8">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-gray-700 hover:text-brick transition-colors duration-200 text-sm md:text-base font-medium cursor-pointer"
            >
              Home
            </a>
            <a
              href="#collections"
              onClick={(e) => handleNavClick(e, 'collections')}
              className="text-gray-700 hover:text-brick transition-colors duration-200 text-sm md:text-base font-medium cursor-pointer"
            >
              Collections
            </a>
            <a
              href="#story"
              onClick={(e) => handleNavClick(e, 'story')}
              className="text-gray-700 hover:text-brick transition-colors duration-200 text-sm md:text-base font-medium cursor-pointer"
            >
              Our Story
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-gray-700 hover:text-brick transition-colors duration-200 text-sm md:text-base font-medium cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

