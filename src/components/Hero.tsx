export default function Hero() {
  return (
    <section
      id="home"
      className="bg-beige pt-20 md:pt-28 pb-12 md:pb-16 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto min-w-0">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center md:text-left min-w-0">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-brick mb-5 md:mb-6 leading-tight tracking-tight">
              Indonesia's First Fusion Crafts Atelier
            </h1>

            <div className="mb-5 md:mb-6 flex flex-col items-center md:items-start">
              <h2 className="font-serif text-xl sm:text-2xl md:text-2xl font-semibold leading-snug tracking-[0.02em] text-brick">
                Our Story
              </h2>
              <div
                className="mt-3 flex w-full max-w-[12rem] items-center justify-center gap-2.5 sm:mt-3.5 sm:gap-3 md:justify-start"
                aria-hidden
              >
                <span className="h-px flex-1 bg-brick/20" />
                <span className="h-1 w-1 shrink-0 rounded-full bg-brick/40" />
                <span className="h-px flex-1 bg-brick/20" />
              </div>
            </div>

            <div className="space-y-4 md:space-y-5 text-sm md:text-base text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
              <p>
                Heritasia was created from a desire to showcase the depth and
                diversity of Indonesia’s extraordinary artisanal heritage and to
                highlight the communities that sustain it. Each piece represents a
                careful fusion of regional materials and time-honored techniques.
              </p>
              <p>
                We work on fair trade terms, employing Indonesian artisans in
                villages and sustaining community craft with natural, locally
                sourced materials. Our woven collections especially support women
                artisans working from home - flexible livelihoods that keep
                traditions alive.
              </p>
              <p>
                At Heritasia, we invite you to connect with the stories,
                traditions, and hands behind every piece, preserving Indonesia’s
                craftsmanship for generations to come.
              </p>
            </div>
          </div>

          {/* Right Column - Logo */}
          <div className="flex items-center justify-center min-w-0 px-2 sm:px-0">
            <div className="w-full max-w-[min(100%,20rem)] sm:max-w-xs md:max-w-sm rounded-xl border border-beige-dark/60 bg-white/60 p-3 sm:p-4 shadow-sm">
              <img
                src="/artisan-story.jpg"
                alt="Heritasia artisan story and craft heritage"
                className="w-full rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
