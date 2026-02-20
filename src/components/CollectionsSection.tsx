import Section from './Section'

const collections = [
  {
    name: 'Cutlery Basket',
    caption: 'Elegant rectangular woven rattan baskets with intricately carved wooden inserts, perfect for organizing and displaying your finest silverware.',
    image: '/cutlery-basket.jpeg',
  },
  {
    name: 'Tea Trays',
    caption: 'Beautiful square rattan trays featuring textured white bases adorned with delicate pink orchid designs, ideal for serving tea in style.',
    image: '/tea-tray.jpeg',
  },
  {
    name: 'Ornate Table Lamp',
    caption: 'Stunning table lamp with a vibrant teal-colored base featuring intricate openwork patterns and a soft off-white fabric shade.',
    image: '/lamp.jpeg',
  },
]

export default function CollectionsSection() {
  return (
    <Section id="collections" className="bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-brick text-center mb-12">
          Featured Collections
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="bg-beige rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square bg-beige-dark overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-serif text-xl font-semibold text-brick mb-2">
                  {collection.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {collection.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="#collections"
            className="inline-block text-brick hover:text-brick-dark font-medium transition-colors duration-200"
          >
            View all collections →
          </a>
        </div>
      </div>
    </Section>
  )
}

