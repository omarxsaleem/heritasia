import Section from './Section'

export default function AboutSection() {
  return (
    <Section id="story" className="bg-beige">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brick mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Heritasia was born from a passion to preserve and celebrate the 
                extraordinary craftsmanship of Indonesian artisans. Our mission 
                is to bridge the gap between traditional artisans and modern 
                appreciators of authentic heritage crafts.
              </p>
              <p>
                We carefully curate collections from across the Indonesian 
                archipelago, ensuring each piece tells a story of cultural 
                heritage, skilled craftsmanship, and timeless beauty.
              </p>
              <p className="italic font-serif text-brick pt-4 border-t border-brick/20">
                By choosing Heritasia, you are directly supporting local 
                Indonesian artisans and helping to preserve these precious 
                traditional skills for future generations.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 flex items-center justify-center">
            <img
              src="/artisan-story.jpeg"
              alt="Heritasia artisan story display"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

