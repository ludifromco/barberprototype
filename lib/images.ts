/**
 * Remote image URLs (Unsplash). IDs verified HTTP 200 — replace if a link breaks.
 * Docs: https://unsplash.com/documentation#hotlinking
 */
const q80 = 'auto=format&fit=crop&q=80'

export const IMAGES = {
  hero: `https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=85&w=1920`,
  og: `https://images.unsplash.com/photo-1622286342621-4bd786c2447c?${q80}&w=1200&h=630`,
  /** Barbershop / haircut — used in “why we’re the best” section */
  haircutShowcase: `https://images.unsplash.com/photo-1585747860715-2ba37e788b70?${q80}&w=1200`,
} as const
