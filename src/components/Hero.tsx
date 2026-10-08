export default function Hero() {
  return (
    <section
      id="home"
      className="bg-beige pt-20 md:pt-32 pb-10 md:pb-24 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto min-w-0">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center md:text-left min-w-0">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-brick mb-3 md:mb-4 leading-tight tracking-tight">
              Indonesia's First Fusion Crafts Atelier
            </h1>
            <p className="font-serif text-xl md:text-2xl text-gray-700 font-bold mb-3 md:mb-4 leading-snug">
              Our Story
            </p>
            <p className="text-sm md:text-base text-gray-600 mb-5 md:mb-8 leading-[1.65] md:leading-relaxed max-w-lg mx-auto md:mx-0">
              Heritasia was created from a desire to showcase the depth and
              diversity of Indonesia’s extraordinary artisanal heritage and to
              highlight the communities that sustain it. Each piece represents a
              careful fusion of regional materials and time-honored techniques.
            </p>
            <p className="text-sm md:text-base text-gray-600 mb-5 md:mb-8 leading-[1.65] md:leading-relaxed max-w-lg mx-auto md:mx-0">
              We work on fair trade terms, employing Indonesian artisans in
              villages and sustaining community craft with natural, locally
              sourced materials. Our woven collections especially support women
              artisans working from home - flexible livelihoods that keep
              traditions alive.
            </p>
            <p className="text-sm md:text-base text-gray-600 mb-5 md:mb-8 leading-[1.65] md:leading-relaxed max-w-lg mx-auto md:mx-0">
              At Heritasia, we invite you to connect with the stories,
              traditions, and hands behind every piece, preserving Indonesia’s
              craftsmanship for generations to come.
            </p>
          </div>

          {/* Right Column - Logo */}
          <div className="flex items-center justify-center min-w-0 px-2 sm:px-0">
            <img
              src="/artisan-story.jpg"
              alt="Heritasia Logo"
              className="w-full max-w-[min(100%,20rem)] sm:max-w-sm object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
