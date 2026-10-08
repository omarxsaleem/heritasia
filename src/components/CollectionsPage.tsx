import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { collections } from '../data/collections'
import { usePageMeta } from '../hooks/usePageMeta'

export default function CollectionsPage() {
  usePageMeta(
    'Collections | Heritasia',
    'Browse Heritasia collections of handcrafted Indonesian fusion crafts—from placemats and trays to lamps, bowls, and more.',
  )

  return (
    <div className="min-h-screen overflow-x-clip bg-beige">
      <Navbar />
      <main className="pt-20 md:pt-32 pb-10 md:pb-24 px-4 md:px-6 lg:px-8 overflow-x-clip">
        <div className="max-w-7xl mx-auto min-w-0 space-y-8 md:space-y-12">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brick mb-3 md:mb-4 leading-tight">
              Collections
            </h1>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl leading-[1.65] md:leading-relaxed">
              Explore our collection of handcrafted Indonesian pieces, thoughtfully
              made using traditional materials and techniques.
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {collections.map((collection) => (
              <Link
                to={`/collections/${collection.slug}`}
                key={collection.slug}
                className="group flex flex-col bg-white rounded-xl border border-beige-dark/70 overflow-hidden hover:border-brick/30 hover:shadow-md transition-all duration-300"
              >
                <div
                  className={`aspect-[4/3] shrink-0 overflow-hidden ${
                    collection.image.startsWith('/catalog/')
                      ? 'bg-beige'
                      : 'bg-beige-dark'
                  }`}
                >
                  <img
                    src={collection.image}
                    alt={collection.title}
                    loading="lazy"
                    decoding="async"
                    className={
                      collection.image.startsWith('/catalog/')
                        ? 'w-full h-full object-contain transition-transform duration-500 group-hover:scale-105'
                        : 'w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                    }
                  />
                </div>
                <div className="flex flex-1 flex-col p-3 sm:p-4 md:p-5">
                  <h2 className="font-serif text-base sm:text-lg md:text-xl font-semibold text-brick">
                    {collection.title}
                  </h2>
                  <span className="mt-2 text-sm font-medium text-brick group-hover:underline">
                    View Collection →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
