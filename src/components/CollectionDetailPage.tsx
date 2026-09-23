import { Link, Navigate, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { collections } from '../data/collections'
import {
  rattanTrayGroups,
  woodenTrayTableGroups,
} from '../data/catalog'

export default function CollectionDetailPage() {
  const { slug } = useParams()
  const collection = collections.find((item) => item.slug === slug)

  if (!collection) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-12">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm text-gray-500 mb-4"
            >
              <Link to="/" className="hover:text-brick transition-colors duration-200">
                Home
              </Link>
              <span>/</span>
              <span className="text-brick">{collection.title}</span>
            </nav>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brick">
              {collection.title}
            </h1>
          </div>

          <section className="space-y-6">
            {collection.products.some((product) =>
              product.image.startsWith('/catalog/'),
            ) ? collection.slug === 'wooden-tray-tables' ||
              collection.slug === 'rattan-trays' ? (
              <div className="space-y-6 md:space-y-7">
                {(collection.slug === 'wooden-tray-tables'
                  ? woodenTrayTableGroups
                  : rattanTrayGroups
                ).map((group) => {
                  const headingId = `${collection.slug}-${group.label.replace(/\s+/g, '-').toLowerCase()}`
                  const imageCount = group.images.length
                  const isTriple = imageCount >= 3
                  const isPair = imageCount === 2
                  const pieceLabel =
                    collection.slug === 'wooden-tray-tables'
                      ? 'wooden tray table'
                      : 'rattan tray'

                  return (
                    <section
                      key={group.label}
                      aria-labelledby={headingId}
                      className={`mx-auto rounded-lg border border-beige-dark/60 bg-beige/40 px-5 py-6 md:px-8 md:py-7 ${
                        isTriple ? 'max-w-4xl' : 'max-w-2xl'
                      }`}
                    >
                      <h3
                        id={headingId}
                        className="font-serif text-xl md:text-2xl font-semibold text-brick text-center mb-5 md:mb-6"
                      >
                        {group.label}
                      </h3>
                      <div
                        className={`mx-auto grid w-full items-start justify-items-center gap-4 md:gap-5 ${
                          isTriple
                            ? 'max-w-[min(100%,48rem)] grid-cols-1 sm:grid-cols-3'
                            : isPair
                              ? 'max-w-[min(100%,32rem)] grid-cols-1 sm:grid-cols-2'
                              : 'max-w-[15rem] grid-cols-1'
                        }`}
                      >
                        {group.images.map((item) => (
                          <article
                            key={item.id}
                            className={`h-fit overflow-hidden rounded-lg border border-beige-dark/70 bg-white ${
                              isTriple || isPair
                                ? 'w-full max-w-[15rem] sm:max-w-none'
                                : 'w-full'
                            }`}
                          >
                            <img
                              src={item.image}
                              alt={`${group.label} — Heritasia ${pieceLabel}`}
                              className="block w-full h-auto"
                            />
                          </article>
                        ))}
                      </div>
                    </section>
                  )
                })}
              </div>
            ) : (
              <div className="grid items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
                {collection.products.map((product, index) => (
                  <article
                    key={`${product.image}-${index}`}
                    className="flex h-fit flex-col rounded-xl border border-beige-dark/70 overflow-hidden bg-white"
                  >
                    <img
                      src={product.image}
                      alt={product.name ?? 'Heritasia piece'}
                      className="block w-full h-auto"
                    />
                    {product.name && (
                      <div className="flex h-[4.25rem] shrink-0 items-center justify-center border-t border-beige-dark/40 px-3 md:px-4 text-center">
                        <h3 className="font-serif text-base md:text-lg font-semibold leading-snug text-brick line-clamp-2">
                          {product.name}
                        </h3>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-beige-dark/70 p-6 md:p-8">
                <p className="text-gray-700 font-medium mb-2">Coming soon</p>
                <p className="text-gray-600 leading-relaxed max-w-2xl">
                  We’re preparing the full selection for this collection. Please
                  check back shortly.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
