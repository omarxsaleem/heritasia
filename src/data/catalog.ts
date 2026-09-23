export interface CatalogProduct {
  id: string
  name: string | null
  image: string
  category: string
  priceNote?: string
}

export const beadedCoasterSetsProducts: CatalogProduct[] = [
  {
    id: 'beaded-coaster-sets-cs10-be',
    name: 'Beige',
    image: '/catalog/beaded-coaster-sets/CS10%20-%20Be%20.png',
    category: 'beaded-coaster-sets',
  },
  {
    id: 'beaded-coaster-sets-cs10-bws',
    name: 'Black, White & Silver',
    image: '/catalog/beaded-coaster-sets/CS10%20-%20BWS.png',
    category: 'beaded-coaster-sets',
  },
  {
    id: 'beaded-coaster-sets-cs10-tbw',
    name: 'Turquoise, Black & White',
    image: '/catalog/beaded-coaster-sets/CS10%20-%20TBW.png',
    category: 'beaded-coaster-sets',
  },
  {
    id: 'beaded-coaster-sets-cs10-tws',
    name: 'Turquoise, White & Silver',
    image: '/catalog/beaded-coaster-sets/CS10%20-%20TWS%20.png',
    category: 'beaded-coaster-sets',
  },
  {
    id: 'beaded-coaster-sets-cs10-wg',
    name: 'White & Gold',
    image: '/catalog/beaded-coaster-sets/CS10%20-%20WG%20.png',
    category: 'beaded-coaster-sets',
  },
]

export const floralCoasterSetsProducts: CatalogProduct[] = [
  {
    id: 'floral-coaster-sets-cs2-happy-hibiscus',
    name: 'Happy Hibiscus',
    image: '/catalog/floral-coaster-sets/CS2%20-%20Happy%20Hibiscus%20.png',
    category: 'floral-coaster-sets',
  },
  {
    id: 'floral-coaster-sets-cs2-lotus-lake',
    name: 'Lotus Lake',
    image: '/catalog/floral-coaster-sets/CS2%20-%20Lotus%20Lake.png',
    category: 'floral-coaster-sets',
  },
  {
    id: 'floral-coaster-sets-cs2-magnificent-monsterra',
    name: 'Magnificent Monstera',
    image: '/catalog/floral-coaster-sets/CS2%20-%20Magnificent%20Monsterra%20.jpeg',
    category: 'floral-coaster-sets',
  },
  {
    id: 'floral-coaster-sets-cs2-opulent-orchid',
    name: 'Opulent Orchid',
    image: '/catalog/floral-coaster-sets/CS2%20-%20Opulent%20Orchid.png',
    category: 'floral-coaster-sets',
  },
]

export const joyTrinketBasketsProducts: CatalogProduct[] = [
  {
    id: 'joy-trinket-baskets-jb1-shell-heart-brown',
    name: 'Shell Heart — Brown',
    image: '/catalog/joy-trinket-baskets/JB1%20-%20Shell%20Heart%20-%20Brown.jpeg',
    category: 'joy-trinket-baskets',
  },
  {
    id: 'joy-trinket-baskets-jb1-shellfull-red',
    name: 'Shell Full — Red',
    image: '/catalog/joy-trinket-baskets/JB1%20-%20Shellfull%20-%20Red.jpeg',
    category: 'joy-trinket-baskets',
  },
  {
    id: 'joy-trinket-baskets-jb1-shellfull-purple-edited',
    name: 'Shell Full — Purple',
    image: '/catalog/joy-trinket-baskets/JB1%20-%20Shellfull%20-Purple%20Edited.png',
    category: 'joy-trinket-baskets',
  },
  {
    id: 'joy-trinket-baskets-jb1-art-deco',
    name: 'Art Deco',
    image: '/catalog/joy-trinket-baskets/JB1%20Art%20Deco.jpeg',
    category: 'joy-trinket-baskets',
  },
  {
    id: 'joy-trinket-baskets-jb1-shellful-green',
    name: 'Shell Full — Green',
    image: '/catalog/joy-trinket-baskets/JB1-%20Shellful%20-%20Green.jpeg',
    category: 'joy-trinket-baskets',
  },
  {
    id: 'joy-trinket-baskets-jb1-shellfull-black',
    name: 'Shell Full — Black',
    image: '/catalog/joy-trinket-baskets/JB1-%20Shellfull%20-%20Black.png',
    category: 'joy-trinket-baskets',
  },
]

export interface RattanTrayGroup {
  label: string
  images: { id: string; image: string }[]
}

export const rattanTrayGroups: RattanTrayGroup[] = [
  {
    label: 'Floral',
    images: [
      {
        id: 'rattan-trays-rt1-happy-hibiscus',
        image: '/catalog/rattan-trays/RT1%20-%20Happy%20Hibiscus.png',
      },
      {
        id: 'rattan-trays-rt1-charming-cendrawasih',
        image: '/catalog/rattan-trays/RT1-%20Charming%20Cendrawasih.png',
      },
      {
        id: 'rattan-trays-rt1-orchid-opulence',
        image: '/catalog/rattan-trays/RT1%20-%20Orchid%20Opulence.png',
      },
    ],
  },
  {
    label: 'Round',
    images: [
      {
        id: 'rattan-trays-tilt',
        image: '/catalog/rattan-trays/Tilt.png',
      },
      {
        id: 'rattan-trays-rt4-moon-flower',
        image: '/catalog/rattan-trays/RT4%20-%20Moon%20Flower.jpeg',
      },
    ],
  },
  {
    label: 'Original',
    images: [
      {
        id: 'rattan-trays-rt2-golden-glory',
        image: '/catalog/rattan-trays/RT2%20-%20Golden%20Glory.png',
      },
      {
        id: 'rattan-trays-rt2-moon-flower',
        image: '/catalog/rattan-trays/RT2%20-%20Moon%20Flower.png',
      },
      {
        id: 'rattan-trays-rt2-gold-glamor',
        image: '/catalog/rattan-trays/RT2-%20Gold%20Glamor%20.png',
      },
    ],
  },
]

export const rattanTraysProducts: CatalogProduct[] = rattanTrayGroups.flatMap(
  (group) =>
    group.images.map(({ id, image }) => ({
      id,
      name: null,
      image,
      category: 'rattan-trays',
    })),
)

export const tissueBoxesProducts: CatalogProduct[] = [
  {
    id: 'tissue-boxes-tb1-bbe',
    name: 'Black & Beige',
    image: '/catalog/tissue-boxes/TB1%20-%20BBe.png',
    category: 'tissue-boxes',
  },
  {
    id: 'tissue-boxes-tb1-bg',
    name: 'Black & Gold',
    image: '/catalog/tissue-boxes/TB1%20-%20BG%20.png',
    category: 'tissue-boxes',
  },
  {
    id: 'tissue-boxes-tb1-bwbe',
    name: 'Black, White & Beige',
    image: '/catalog/tissue-boxes/TB1%20-%20BWBe%20.png',
    category: 'tissue-boxes',
  },
  {
    id: 'tissue-boxes-tb1-twbe',
    name: 'Turquoise, White & Beige',
    image: '/catalog/tissue-boxes/TB1%20-%20TWBe.png',
    category: 'tissue-boxes',
  },
  {
    id: 'tissue-boxes-tb1-wbe',
    name: 'White & Beige',
    image: '/catalog/tissue-boxes/TB1%20-%20WBe.png',
    category: 'tissue-boxes',
  },
]

export interface WoodenTrayTableGroup {
  label: string
  images: { id: string; image: string }[]
}

export const woodenTrayTableGroups: WoodenTrayTableGroup[] = [
  {
    label: 'Black Gold',
    images: [
      {
        id: 'wooden-tray-tables-black-gold-close-up',
        image: '/catalog/wooden-tray-tables/Black%20Gold%20Close%20Up.png',
      },
      {
        id: 'wooden-tray-tables-black-gold-front',
        image: '/catalog/wooden-tray-tables/Black%20Gold%20Front.jpeg',
      },
    ],
  },
  {
    label: 'Basket Weave',
    images: [
      {
        id: 'wooden-tray-tables-basket-weave-close-up',
        image: '/catalog/wooden-tray-tables/Basket%20Weave%20Close%20Up.png',
      },
      {
        id: 'wooden-tray-tables-basket-weave-front',
        image: '/catalog/wooden-tray-tables/Basket%20Weave%20Front.png',
      },
    ],
  },
  {
    label: 'Gold Wave',
    images: [
      {
        id: 'wooden-tray-tables-gold-wave-close-up',
        image: '/catalog/wooden-tray-tables/Gold%20Wave%20Close%20Up.jpeg',
      },
      {
        id: 'wooden-tray-tables-gold-wave-side',
        image: '/catalog/wooden-tray-tables/Gold%20Wave%20Side.jpeg',
      },
    ],
  },
  {
    label: 'Fields of Gold',
    images: [
      {
        id: 'wooden-tray-tables-wt2-fields-of-gold',
        image: '/catalog/wooden-tray-tables/WT2%20-%20Fields%20of%20Gold%20.png',
      },
    ],
  },
]

export const woodenTrayTablesProducts: CatalogProduct[] =
  woodenTrayTableGroups.flatMap((group) =>
    group.images.map(({ id, image }) => ({
      id,
      name: null,
      image,
      category: 'wooden-tray-tables',
    })),
  )

export const catalogProductsByCategory: Record<string, CatalogProduct[]> = {
  'beaded-coaster-sets': beadedCoasterSetsProducts,
  'floral-coaster-sets': floralCoasterSetsProducts,
  'joy-trinket-baskets': joyTrinketBasketsProducts,
  'rattan-trays': rattanTraysProducts,
  'tissue-boxes': tissueBoxesProducts,
  'wooden-tray-tables': woodenTrayTablesProducts,
}

export const catalogCategorySlugs = [
  'beaded-coaster-sets',
  'floral-coaster-sets',
  'joy-trinket-baskets',
  'rattan-trays',
  'tissue-boxes',
  'wooden-tray-tables',
] as const

export const catalogCategoryTitle = (slug: string): string => {
  const titles: Record<string, string> = {
    'beaded-coaster-sets': 'Beaded Coaster Sets',
    'floral-coaster-sets': 'Floral Coaster Sets',
    'joy-trinket-baskets': 'Joy Trinket Baskets',
    'rattan-trays': 'Rattan Trays',
    'tissue-boxes': 'Tissue Boxes',
    'wooden-tray-tables': 'Wooden Tray Tables',
  }
  return titles[slug] ?? slug
}
