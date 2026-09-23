import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { collections } from '../data/collections'

export default function CollectionsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-12">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brick mb-4">
              Discover Heritasia Collections
            </h1>
            <p className="text-gray-600 max-w-2xl leading-relaxed">
              Explore all collection groups and continue into each collection to
              browse its full product range.
            </p>
          </div>

          <section aria-labelledby="all-collections" className="space-y-6">
            <h2
              id="all-collections"
              className="font-serif text-2xl md:text-3xl font-bold text-brick"
            >
              All Collections
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
              {collections.map((collection) => (
                <Link
                  to={`/collections/${collection.slug}`}
                  key={collection.slug}
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
                  <div className="p-4 md:p-5">
                    <h3 className="font-serif text-xl font-semibold text-brick">
                      {collection.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
