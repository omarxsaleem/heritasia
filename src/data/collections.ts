import {
  catalogCategorySlugs,
  catalogCategoryTitle,
  catalogProductsByCategory,
  collectionCoverImages,
  collectionDescriptions,
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
  products: CollectionProduct[]
}

export const collections: CollectionGroup[] = catalogCategorySlugs.map(
  (slug) => {
    const products = toCollectionProducts(slug)
    return {
      slug,
      title: catalogCategoryTitle(slug),
      description: collectionDescriptions[slug],
      image:
        collectionCoverImages[slug] ??
        products[0]?.image ??
        '/artisan-story.jpg',
      products,
    }
  },
)
