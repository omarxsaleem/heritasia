import { useCallback, useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { collections } from '../data/collections'
import {
  coasterSetGroups,
  joyTrinketGroups,
  placematGroups,
  rattanTrayGroups,
  woodenTrayTableGroups,
} from '../data/catalog'

type CatalogProductGroup = {
  label: string
  description?: string
  images: { id: string; image: string; name?: string }[]
}

const catalogProductGroupsBySlug: Record<string, CatalogProductGroup[]> = {
  'coaster-sets': coasterSetGroups,
  'joy-trinket-baskets': joyTrinketGroups,
  placemats: placematGroups,
  'rattan-trays': rattanTrayGroups,
  'wooden-tray-tables': woodenTrayTableGroups,
}

const groupedPieceLabelBySlug: Record<string, string> = {
  'wooden-tray-tables': 'teak tray table',
  'rattan-trays': 'rattan tray',
  placemats: 'placemat',
  'coaster-sets': 'coaster set',
  'joy-trinket-baskets': 'trinket piece',
}

const descriptionClassName =
  'text-sm md:text-base text-gray-600 leading-[1.65] md:leading-relaxed'

const productImageFrameClassName =
  'aspect-[4/3] w-full shrink-0 overflow-hidden bg-beige'

const productImageClassName = 'h-full w-full object-contain'

const productCaptionClassName =
  'flex min-h-[3.5rem] md:h-[4.25rem] w-full shrink-0 items-center justify-center border-t border-beige-dark/40 px-3 md:px-4 text-center'

const productCaptionTitleClassName =
  'font-serif text-sm md:text-lg font-semibold leading-snug text-brick line-clamp-2'

function GroupSubsectionTitle({
  id,
  label,
  hasDescriptionBelow,
}: {
  id: string
  label: string
  hasDescriptionBelow: boolean
}) {
  return (
    <header
      className={`mx-auto w-full max-w-lg px-1 text-center ${
        hasDescriptionBelow ? 'mb-2 sm:mb-3' : 'mb-5 sm:mb-7 md:mb-8'
      }`}
    >
      <h2
        id={id}
        className="font-serif text-xl sm:text-2xl md:text-[1.65rem] font-semibold leading-snug tracking-[0.02em] text-brick"
      >
        {label}
      </h2>
      <div
        className="mx-auto mt-3 flex max-w-[12rem] items-center justify-center gap-2.5 sm:mt-3.5 sm:gap-3"
        aria-hidden
      >
        <span className="h-px flex-1 bg-brick/20" />
        <span className="h-1 w-1 shrink-0 rounded-full bg-brick/40" />
        <span className="h-px flex-1 bg-brick/20" />
      </div>
    </header>
  )
}

type ExpandedProduct = {
  imageSrc: string
  imageAlt: string
  name?: string | null
}

function ProductLightbox({
  product,
  onClose,
}: {
  product: ExpandedProduct
  onClose: () => void
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  const dialogLabel = product.name
    ? `Expanded view: ${product.name}`
    : 'Expanded product image'

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={dialogLabel}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"
        onClick={onClose}
        aria-label="Close expanded view"
      />
      <div className="relative z-10 flex max-h-[min(92vh,48rem)] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-beige-dark/80 bg-white shadow-xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-beige-dark/70 bg-white/95 text-brick transition-colors hover:bg-beige-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick"
          aria-label="Close"
        >
          <span className="text-xl leading-none" aria-hidden>
            ×
          </span>
        </button>
        <div className="flex min-h-0 flex-1 items-center justify-center bg-beige p-4 pt-12 sm:p-6 sm:pt-14">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="max-h-[min(70vh,36rem)] w-full object-contain"
          />
        </div>
        {product.name && (
          <div className="border-t border-beige-dark/50 px-4 py-3 text-center sm:px-6 sm:py-4">
            <p className="font-serif text-base sm:text-lg font-semibold text-brick">
              {product.name}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function ProductCard({
  imageSrc,
  imageAlt,
  name,
  rounded = 'xl',
  onExpand,
}: {
  imageSrc: string
  imageAlt: string
  name?: string | null
  rounded?: 'lg' | 'xl'
  onExpand: () => void
}) {
  const radius = rounded === 'lg' ? 'rounded-lg' : 'rounded-xl'
  const expandLabel = name
    ? `View larger image of ${name}`
    : 'View larger product image'

  return (
    <article
      className={`flex h-full w-full min-w-0 flex-col overflow-hidden border border-beige-dark/70 bg-white ${radius}`}
    >
      <button
        type="button"
        onClick={onExpand}
        aria-label={expandLabel}
        className="flex h-full w-full min-w-0 flex-col items-stretch transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick cursor-zoom-in"
      >
        <div className={productImageFrameClassName}>
          <img src={imageSrc} alt={imageAlt} className={productImageClassName} />
        </div>
        {name && (
          <div className={productCaptionClassName}>
            <h3 className={productCaptionTitleClassName}>{name}</h3>
          </div>
        )}
      </button>
    </article>
  )
}

export default function CollectionDetailPage() {
  const { slug } = useParams()
  const collection = collections.find((item) => item.slug === slug)
  const [expandedProduct, setExpandedProduct] = useState<ExpandedProduct | null>(
    null,
  )

  const openExpandedProduct = useCallback((product: ExpandedProduct) => {
    setExpandedProduct(product)
  }, [])

  const closeExpandedProduct = useCallback(() => {
    setExpandedProduct(null)
  }, [])

  if (!collection) {
    return <Navigate to="/" replace />
  }

  const productGroups = catalogProductGroupsBySlug[collection.slug]
  const isDesignerLamps = collection.slug === 'designer-lamps'

  return (
    <div className="min-h-screen overflow-x-clip bg-beige">
      <Navbar />
      <main className="pt-20 md:pt-32 pb-10 md:pb-24 px-4 md:px-6 lg:px-8 overflow-x-clip">
        <div className="max-w-7xl mx-auto min-w-0 space-y-8 md:space-y-12">
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
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brick leading-tight">
              {collection.title}
            </h1>
            {collection.description && (
              <p className={`mt-3 md:mt-4 max-w-3xl ${descriptionClassName}`}>
                {collection.description}
              </p>
            )}
          </div>

          <section className="space-y-5 md:space-y-6">
            {collection.products.some((product) =>
              product.image.startsWith('/catalog/'),
            ) ? productGroups ? (
              <div key={collection.slug} className="space-y-4 md:space-y-7">
                {productGroups.map((group, groupIndex) => {
                  const showGroupHeading = group.label.trim().length > 0
                  const headingId = `${collection.slug}-group-${groupIndex}`
                  const imageCount = group.images.length
                  const isTriple = imageCount >= 3
                  const isPair = imageCount === 2
                  const pieceLabel =
                    groupedPieceLabelBySlug[collection.slug] ?? 'piece'

                  return (
                    <section
                      key={headingId}
                      aria-labelledby={showGroupHeading ? headingId : undefined}
                      aria-label={
                        showGroupHeading
                          ? undefined
                          : `${collection.title}, section ${groupIndex + 1}`
                      }
                      className={`mx-auto w-full min-w-0 rounded-lg border border-beige-dark/60 bg-beige-dark px-3 py-4 sm:px-5 sm:py-5 md:px-8 md:py-7 ${
                        imageCount === 0
                          ? 'max-w-2xl'
                          : isTriple
                            ? 'max-w-4xl'
                            : 'max-w-2xl'
                      }`}
                    >
                      {showGroupHeading && (
                        <GroupSubsectionTitle
                          id={headingId}
                          label={group.label}
                          hasDescriptionBelow={Boolean(group.description)}
                        />
                      )}
                      {group.description && (
                        <p
                          className={`mx-auto max-w-2xl text-center ${descriptionClassName} ${
                            showGroupHeading
                              ? 'mb-4 sm:mb-5 md:mb-7'
                              : 'mb-3 sm:mb-4 md:mb-6'
                          }`}
                        >
                          {group.description}
                        </p>
                      )}
                      {imageCount > 0 && (
                        <div
                          className={`mx-auto grid w-full min-w-0 items-stretch gap-3 sm:gap-4 md:gap-5 ${
                            isTriple
                              ? 'max-w-[min(100%,48rem)] grid-cols-1 sm:grid-cols-3'
                              : isPair
                                ? 'max-w-[min(100%,32rem)] grid-cols-1 sm:grid-cols-2'
                                : 'max-w-[min(100%,16rem)] grid-cols-1'
                          }`}
                        >
                          {group.images.map((item) => {
                            const imageLabel =
                              item.name ??
                              (showGroupHeading
                                ? `${group.label} — Heritasia ${pieceLabel}`
                                : `Heritasia ${pieceLabel}`)

                            return (
                              <ProductCard
                                key={item.id}
                                imageSrc={item.image}
                                imageAlt={imageLabel}
                                name={item.name}
                                rounded="lg"
                                onExpand={() =>
                                  openExpandedProduct({
                                    imageSrc: item.image,
                                    imageAlt: imageLabel,
                                    name: item.name,
                                  })
                                }
                              />
                            )
                          })}
                        </div>
                      )}
                    </section>
                  )
                })}
              </div>
            ) : (
              <div
                className={`grid min-w-0 items-stretch gap-4 md:gap-6 ${
                  isDesignerLamps
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                }`}
              >
                {collection.products.map((product, index) => (
                  <ProductCard
                    key={`${product.image}-${index}`}
                    imageSrc={product.image}
                    imageAlt={product.name ?? 'Heritasia piece'}
                    name={product.name}
                    onExpand={() =>
                      openExpandedProduct({
                        imageSrc: product.image,
                        imageAlt: product.name ?? 'Heritasia piece',
                        name: product.name,
                      })
                    }
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-beige-dark/70 p-4 sm:p-6 md:p-8">
                <p className="text-gray-700 font-medium mb-2 text-sm md:text-base">Coming soon</p>
                <p className="text-sm md:text-base text-gray-600 leading-[1.65] md:leading-relaxed max-w-2xl">
                  We’re preparing the full selection for this collection. Please
                  check back shortly.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
      {expandedProduct && (
        <ProductLightbox product={expandedProduct} onClose={closeExpandedProduct} />
      )}
      <Footer />
    </div>
  )
}
