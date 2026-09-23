export default function Hero() {
  return (
    <section
      id="home"
      className="bg-beige pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center md:text-left">
            <h1 className="font-serif text-lg md:text-xl lg:text-4xl font-bold text-brick mb-4 leading-tight tracking-tight">
              The Indonesian Heritage Crafts' Atelier
            </h1>
            <p className="font-serif text-2xl md:text-2xl text-gray-700 font-bold mb-4 leading-snug">
              Our Story
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Heritasia was created from a desire to showcase the depth and
              diversity of Indonesia’s extraordinary artisanal heritage and to
              highlight the communities that sustain it. Each piece represents a
              careful fusion of regional materials and time-honored techniques.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              At Heritasia, we invite you to connect with the stories,
              traditions, and hands behind every piece, preserving Indonesia’s
              craftsmanship for generations to come.
            </p>
          </div>

          {/* Right Column - Logo */}
          <div className="flex items-center justify-center">
            <img
              src="/artisan-story.jpg"
              alt="Heritasia Logo"
              className="w-full max-w-sm h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
