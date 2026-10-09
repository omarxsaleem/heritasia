export interface CatalogProduct {
  id: string
  name: string | null
  image: string
  category: string
  priceNote?: string
}

export const designerLampsProducts: CatalogProduct[] = [
  {
    id: 'designer-lamps-lamp-1',
    name: 'Celeste Spiral Lamp',
    image: '/catalog/designer-lamps/Lamp%201.png',
    category: 'designer-lamps',
  },
  {
    id: 'designer-lamps-lamp-2',
    name: 'Palm Perfection Lamp',
    image: '/catalog/designer-lamps/Lamp%202.png',
    category: 'designer-lamps',
  },
  {
    id: 'designer-lamps-lamp-4',
    name: 'Golden Hibiscus Lamp',
    image: '/catalog/designer-lamps/Lamp%204.png',
    category: 'designer-lamps',
  },
  {
    id: 'designer-lamps-tosca',
    name: 'Pattine Latticia Lamp',
    image: '/catalog/designer-lamps/Tosca.png',
    category: 'designer-lamps',
  },
  {
    id: 'designer-lamps-lamp-3',
    name: 'Trees of Paradise Lamp',
    image: '/catalog/designer-lamps/Lamp%203.png',
    category: 'designer-lamps',
  },
]

export const copperTeakBowlsProducts: CatalogProduct[] = [
  {
    id: 'copper-teak-bowls-floral-fantasy',
    name: 'Floral Fantasy',
    image: '/catalog/copper-teak-bowls/Floral%20Fantasy%20.png',
    category: 'copper-teak-bowls',
  },
  {
    id: 'copper-teak-bowls-tropical-trellis',
    name: 'Tropical Trellis',
    image: '/catalog/copper-teak-bowls/Tropical%20Trellis.png',
    category: 'copper-teak-bowls',
  },
  {
    id: 'copper-teak-bowls-leaf-of-life',
    name: 'Leaf of Life',
    image: '/catalog/copper-teak-bowls/Leaf%20of%20Life.png',
    category: 'copper-teak-bowls',
  },
]

export interface PlacematGroup {
  label: string
  description: string
  images: { id: string; image: string; name: string }[]
}

export const placematGroups: PlacematGroup[] = [
  {
    label: 'The Matahari Placemat',
    description:
      'Delicately hand-inlaid tile by tile, this shimmering capiz placemat has been crafted along the northern shores of Java. Its chic, contemporary design celebrates the finest traditions of Indonesian craftsmanship.',
    images: [
      {
        id: 'placemats-gold-placemat',
        name: 'Shimmering Shell',
        image: '/catalog/placemats/Gold%20Placemat.png',
      },
      {
        id: 'placemats-gold-2',
        name: 'Shimmering Shell',
        image: '/catalog/placemats/Gold%202.png',
      },
      {
        id: 'placemats-white',
        name: 'Pearl Perfection',
        image: '/catalog/placemats/White.png',
      },
      {
        id: 'placemats-pearl-2',
        name: 'Pearl Perfection',
        image: '/catalog/placemats/Pearl%202.png',
      },
      {
        id: 'placemats-torquoise-2',
        name: 'Turquoise Tide',
        image: '/catalog/placemats/Torquoise%202.png',
      },
    ],
  },
  {
    label: 'The Pelangi Placemat',
    description:
      "This vibrant batik placemat tells a story of Indonesia's cultural richness, uniting nature-inspired floral and animal motifs with traditional batik artistry.",
    images: [
      {
        id: 'placemats-p1-wood',
        name: 'Merak',
        image: '/catalog/placemats/P1%20Wood.png',
      },
      {
        id: 'placemats-p2-wood',
        name: 'Daun',
        image: '/catalog/placemats/P2%20Wood.png',
      },
      {
        id: 'placemats-p3-wood',
        name: 'Anggrek',
        image: '/catalog/placemats/P3%20Wood.png',
      },
    ],
  },
]

export const placematsProducts: CatalogProduct[] = placematGroups.flatMap(
  (group) =>
    group.images.map(({ id, image, name }) => ({
      id,
      name,
      image,
      category: 'placemats',
    })),
)

export interface CoasterSetGroup {
  label: string
  description: string
  images: { id: string; image: string; name: string }[]
}

export const coasterSetGroups: CoasterSetGroup[] = [
  {
    label: 'Floral Decoupage',
    description:
      "Both practical and elegant, this coaster set features radiant capiz from Java's northern shores paired with floral decoupage inspired by Indonesia's flora and fauna.",
    images: [
      {
        id: 'coaster-sets-floral-cs2-happy-hibiscus',
        name: 'Happy Hibiscus',
        image: '/catalog/floral-coaster-sets/CS2%20-%20Happy%20Hibiscus%20.png',
      },
      {
        id: 'coaster-sets-floral-cs2-lotus-lake',
        name: 'Lotus Lake',
        image: '/catalog/floral-coaster-sets/CS2%20-%20Lotus%20Lake.png',
      },
      {
        id: 'coaster-sets-floral-cs2-magnificent-monsterra',
        name: 'Magnificent Monstera',
        image:
          '/catalog/floral-coaster-sets/CS2%20-%20Magnificent%20Monsterra%20.jpeg',
      },
      {
        id: 'coaster-sets-floral-cs2-opulent-orchid',
        name: 'Opulent Orchid',
        image: '/catalog/floral-coaster-sets/CS2%20-%20Opulent%20Orchid.png',
      },
    ],
  },
  {
    label: 'BOHO Beads Coaster Set',
    description:
      'Designed with intricate beadwork, this boho-inspired coaster set blends practicality with a modern aesthetic, also making it a beautiful table decor piece.',
    images: [
      {
        id: 'coaster-sets-beaded-cs10-be',
        name: 'Beige',
        image: '/catalog/beaded-coaster-sets/CS10%20-%20Be%20.png',
      },
      {
        id: 'coaster-sets-beaded-cs10-bws',
        name: 'Black, White & Silver',
        image: '/catalog/beaded-coaster-sets/CS10%20-%20BWS.png',
      },
      {
        id: 'coaster-sets-beaded-cs10-tbw',
        name: 'Turquoise, White, & Blue',
        image: '/catalog/beaded-coaster-sets/CS10%20-%20TBW.png',
      },
      {
        id: 'coaster-sets-beaded-cs10-tws',
        name: 'Turquoise, White, & Silver',
        image: '/catalog/beaded-coaster-sets/CS10%20-%20TWS%20.png',
      },
      {
        id: 'coaster-sets-beaded-cs10-wg',
        name: 'White, Black, & Gold',
        image: '/catalog/beaded-coaster-sets/CS10%20-%20WG%20.png',
      },
    ],
  },
]

export const coasterSetsProducts: CatalogProduct[] = coasterSetGroups.flatMap(
  (group) =>
    group.images.map(({ id, image, name }) => ({
      id,
      name,
      image,
      category: 'coaster-sets',
    })),
)

export interface JoyTrinketGroup {
  label: string
  description: string
  availabilityNote?: string
  images: { id: string; image: string; name: string }[]
}

export const joyTrinketGroups: JoyTrinketGroup[] = [
  {
    label: 'Joy Trinket Basket',
    description:
      'This intricately handcrafted basket is more than simple storage — it is a collectible work of art. Featuring detailed bead and shell embellishments handmade in Bali and expertly woven rattan craftsmanship, it offers a beautiful way to store jewelry, keepsakes, or small treasures while elevating your home décor.',
    availabilityNote: 'Available in different colors.',
    images: [
      {
        id: 'joy-trinket-baskets-jb1-shell-heart-brown',
        name: 'Shell Heart — Brown',
        image: '/catalog/joy-trinket-baskets/JB1%20-%20Shell%20Heart%20-%20Brown.jpeg',
      },
      {
        id: 'joy-trinket-baskets-jb1-shellfull-pink',
        name: 'Shell Full — Pink',
        image: '/catalog/joy-trinket-baskets/JB1%20-%20Shellfull%20-Purple%20Edited.png',
      },
      {
        id: 'joy-trinket-baskets-jb1-art-deco',
        name: 'Art Deco',
        image: '/catalog/joy-trinket-baskets/JB1%20Art%20Deco.jpeg',
      },
    ],
  },
]

export const joyTrinketBasketsProducts: CatalogProduct[] = joyTrinketGroups.flatMap(
  (group) =>
    group.images.map(({ id, image, name }) => ({
      id,
      name,
      image,
      category: 'joy-trinket-baskets',
    })),
)

export interface RattanTrayGroup {
  label: string
  images: { id: string; image: string; name: string }[]
}

export const rattanTrayGroups: RattanTrayGroup[] = [
  {
    label: 'Pret Trays',
    images: [
      {
        id: 'rattan-trays-rt2-golden-glory',
        name: 'Golden Glory',
        image: '/catalog/rattan-trays/RT2%20-%20Golden%20Glory.png',
      },
      {
        id: 'rattan-trays-rt2-moon-flower',
        name: 'Moon Flower',
        image: '/catalog/rattan-trays/RT2%20-%20Moon%20Flower.png',
      },
      {
        id: 'rattan-trays-rt2-gold-glamor',
        name: 'Gold Glamor',
        image: '/catalog/rattan-trays/RT2-%20Gold%20Glamor%20.png',
      },
      {
        id: 'rattan-trays-tilt',
        name: 'Moon Flower',
        image: '/catalog/rattan-trays/Tilt.png',
      },
      {
        id: 'rattan-trays-rt4-moon-flower',
        name: 'Moon Flower',
        image: '/catalog/rattan-trays/RT4%20-%20Moon%20Flower.jpeg',
      },
    ],
  },
  {
    label: 'Premium Trays',
    images: [
      {
        id: 'rattan-trays-rt1-happy-hibiscus',
        name: 'Happy Hibiscus',
        image: '/catalog/rattan-trays/RT1%20-%20Happy%20Hibiscus.png',
      },
      {
        id: 'rattan-trays-rt1-charming-cendrawasih',
        name: 'Charming Cendrawasih',
        image: '/catalog/rattan-trays/RT1-%20Charming%20Cendrawasih.png',
      },
      {
        id: 'rattan-trays-rt1-orchid-opulence',
        name: 'Opulent Orchid',
        image: '/catalog/rattan-trays/RT1%20-%20Orchid%20Opulence.png',
      },
    ],
  },
]

export const rattanTraysProducts: CatalogProduct[] = rattanTrayGroups.flatMap(
  (group) =>
    group.images.map(({ id, image, name }) => ({
      id,
      name,
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
  'coaster-sets': coasterSetsProducts,
  'copper-teak-bowls': copperTeakBowlsProducts,
  'designer-lamps': designerLampsProducts,
  'joy-trinket-baskets': joyTrinketBasketsProducts,
  placemats: placematsProducts,
  'rattan-trays': rattanTraysProducts,
  'tissue-boxes': tissueBoxesProducts,
  'wooden-tray-tables': woodenTrayTablesProducts,
}

export const catalogCategorySlugs = [
  'designer-lamps',
  'coaster-sets',
  'copper-teak-bowls',
  'placemats',
  'rattan-trays',
  'tissue-boxes',
  'joy-trinket-baskets',
  'wooden-tray-tables',
] as const

export const catalogCategoryTitle = (slug: string): string => {
  const titles: Record<string, string> = {
    'coaster-sets': 'Coaster Sets',
    'copper-teak-bowls': 'Copper Glow Bowls',
    'designer-lamps': 'Designer Lamps',
    'joy-trinket-baskets': 'Trinket Baskets & Holders',
    placemats: 'Placemats',
    'rattan-trays': 'Rattan Trays',
    'tissue-boxes': 'Tissue Holders',
    'wooden-tray-tables': 'Teak Tray Tables',
  }
  return titles[slug] ?? slug
}

export const collectionDescriptions: Partial<
  Record<(typeof catalogCategorySlugs)[number], string>
> = {
  'copper-teak-bowls':
    'This stunning bowl, shaped from rugged teak root and embellished with an ornate copper carving, is crafted deep in Java’s heartlands. This is a truly distinctive décor piece that captures the essence of Indonesian craftsmanship.',
  'tissue-boxes':
    'Featuring intricate beadwork and refined rattan detailing, this tissue box is an elegant fusion of function, modern design, and Indonesian artisanal heritage.',
  'rattan-trays':
    'Hand-painted by skilled artisans and expertly woven into a tray, this piece celebrates the union of art and craftsmanship. A quintessential example of Indonesian heritage, it is both functional and decorative.',
  'designer-lamps':
    "Handcrafted by Indonesia's world-renowned brass and copper artisans, this lamp pays homage to the timeless art of metal carving and sculptural design.",
}
