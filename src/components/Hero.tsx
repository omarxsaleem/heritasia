export default function Hero() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center md:text-left">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-brick mb-4">
              Heritasia
            </h1>
            <p className="font-serif text-xl md:text-2xl text-gray-700 mb-6 italic">
              The Indonesian Heritage Crafts' Atelier
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Preserving the rich tradition of Indonesian craftsmanship, one piece at a time. 
              We connect artisans from across the archipelago with appreciators of authentic, 
              handcrafted heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#collections"
                className="bg-brick text-beige px-8 py-3 rounded-lg font-medium hover:bg-brick-dark transition-colors duration-200 shadow-md hover:shadow-lg text-center"
              >
                Explore Collections
              </a>
              <a
                href="#story"
                className="border-2 border-brick text-brick px-8 py-3 rounded-lg font-medium hover:bg-brick hover:text-beige transition-all duration-200 text-center"
              >
                Meet Our Artisans
              </a>
            </div>
          </div>

          {/* Right Column - Logo */}
          <div className="flex items-center justify-center">
          <img
                src="/heritasia-logo2.png"
                alt="Heritasia Logo"
                className="w-full max-w-sm h-auto object-contain"
              />
          </div>
        </div>
      </div>
    </section>
  )
}

