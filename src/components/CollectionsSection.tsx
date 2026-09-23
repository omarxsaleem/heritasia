import { Link } from 'react-router-dom'
import Section from './Section'
import { featuredCollections } from '../data/collections'

export default function CollectionsSection() {
  return (
    <Section id="collections" className="bg-beige">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brick mb-3">
            Featured Collections
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A curated selection to begin your journey through Heritasia's craft
            offerings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-8">
          {featuredCollections.map((collection) => (
            <Link
              key={collection.title}
              to={`/collections/${collection.slug}`}
              className="group bg-white rounded-xl border border-beige-dark/70 overflow-hidden hover:border-brick/30 hover:shadow-md transition-all duration-300"
            >
              <div
                className={`aspect-[4/3] overflow-hidden ${
                  collection.image.startsWith('/catalog/')
                    ? 'bg-beige'
                    : 'bg-beige-dark'
                }`}
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className={
                    collection.image.startsWith('/catalog/')
                      ? 'w-full h-full object-contain transition-transform duration-500 group-hover:scale-105'
                      : 'w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                  }
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-2xl text-brick">
                  {collection.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}
