import { useEffect } from 'react'

const DEFAULT_TITLE = "Heritasia - Indonesia's First Fusion Crafts Atelier"
const DEFAULT_DESCRIPTION =
  "Heritasia is Indonesia's first fusion crafts atelier—handcrafted pieces celebrating Indonesian artisan heritage, fair trade partnerships, and natural materials."

function getDescriptionMeta() {
  return document.querySelector('meta[name="description"]')
}

export function usePageMeta(title: string, description: string = DEFAULT_DESCRIPTION) {
  useEffect(() => {
    const previousTitle = document.title
    const meta = getDescriptionMeta()
    const previousDescription = meta?.getAttribute('content') ?? DEFAULT_DESCRIPTION

    document.title = title
    meta?.setAttribute('content', description)

    return () => {
      document.title = previousTitle
      meta?.setAttribute('content', previousDescription)
    }
  }, [title, description])
}

export { DEFAULT_TITLE, DEFAULT_DESCRIPTION }
