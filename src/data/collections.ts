import {
  catalogCategorySlugs,
  catalogCategoryTitle,
  catalogProductsByCategory,
} from './catalog'

export interface CollectionProduct {
  name: string | null
  image: string
  priceNote?: string
}

const toCollectionProducts = (
  category: (typeof catalogCategorySlugs)[number],
): CollectionProduct[] =>
  catalogProductsByCategory[category].map(({ name, image, priceNote }) => ({
    name,
    image,
    priceNote,
  }))

export interface CollectionGroup {
  slug: string
  title: string
  description?: string
  image: string
  featured?: boolean
  products: CollectionProduct[]
}

const featuredSlugs = new Set([
  'beaded-coaster-sets',
  'floral-coaster-sets',
  'wooden-tray-tables',
])

export const collections: CollectionGroup[] = catalogCategorySlugs.map(
  (slug) => {
    const products = toCollectionProducts(slug)
    return {
      slug,
      title: catalogCategoryTitle(slug),
      image: products[0]?.image ?? '/artisan-story.jpg',
      featured: featuredSlugs.has(slug),
      products,
    }
  },
)

export const featuredCollections = collections.filter((collection) => collection.featured)
