function StoryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full max-w-[min(100%,14rem)] sm:max-w-[16rem] md:max-w-none mx-auto rounded-xl border border-beige-dark/60 bg-white/60 p-2 sm:p-3 shadow-sm">
      <img
        src={src}
        alt={alt}
        className="w-full rounded-lg object-cover aspect-[3/4]"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-beige pt-20 md:pt-28 pb-12 md:pb-16 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto min-w-0">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,32rem)_minmax(0,1fr)] gap-6 md:gap-8 lg:gap-10 items-start md:items-center">
          <div className="order-2 md:order-1 flex justify-center md:justify-end">
            <StoryImage
              src="/front-page-1.jpeg"
              alt="Heritasia craft and artisan heritage"
            />
          </div>

          <div className="order-1 md:order-2 min-w-0 max-w-lg mx-auto md:max-w-none w-full">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-brick mb-6 md:mb-8 leading-tight tracking-tight text-center">
              Indonesia's First Fusion Crafts Atelier
            </h1>

            <div className="mb-5 md:mb-6 flex flex-col items-center">
              <h2 className="font-serif text-xl sm:text-2xl md:text-2xl font-semibold leading-snug tracking-[0.02em] text-brick text-center">
                Our Story
              </h2>
              <div
                className="mt-3 flex w-full max-w-[12rem] items-center justify-center gap-2.5 sm:mt-3.5 sm:gap-3"
                aria-hidden
              >
                <span className="h-px flex-1 bg-brick/20" />
                <span className="h-1 w-1 shrink-0 rounded-full bg-brick/40" />
                <span className="h-px flex-1 bg-brick/20" />
              </div>
            </div>

            <div className="space-y-4 md:space-y-5 text-sm md:text-base text-gray-600 leading-relaxed text-left">
              <p>
                Heritasia was created from a desire to showcase the depth and
                diversity of Indonesia’s extraordinary artisanal heritage and to
                highlight the communities that sustain it. Each piece represents
                a careful fusion of regional materials and time-honored
                techniques.
              </p>
              <p>
                We work on fair trade terms, employing Indonesian artisans in
                villages—many of them women who work from their homes—and
                sustaining community craft with natural, locally sourced
                materials. These flexible, home-based livelihoods keep traditions
                alive and put women artisans at the heart of what we do.
              </p>
              <p>
                At Heritasia, we invite you to connect with the stories,
                traditions, and hands behind every piece, preserving Indonesia’s
                craftsmanship for generations to come.
              </p>
            </div>
          </div>

          <div className="order-3 flex justify-center md:justify-start">
            <StoryImage
              src="/front-page-2.jpeg"
              alt="Heritasia handmade fusion crafts"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
