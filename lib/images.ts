/**
 * Remote image URLs (Unsplash). All IDs verified HTTP 200 — replace if a link breaks.
 * Docs: https://unsplash.com/documentation#hotlinking
 */
const q80 = 'auto=format&fit=crop&q=80'

export const IMAGES = {
  hero: `https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=85&w=1920`,
  og: `https://images.unsplash.com/photo-1544161515-4ab6ce6db874?${q80}&w=1200&h=630`,
  services: {
    hair: `https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?${q80}&w=800`,
    nails: `https://images.unsplash.com/photo-1632345031435-8727f6897d53?${q80}&w=800`,
    facials: `https://images.unsplash.com/photo-1515377905703-c4788e51af15?${q80}&w=800`,
    massage: `https://images.unsplash.com/photo-1519823551278-64ac92734fb1?${q80}&w=800`,
    waxing: `https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?${q80}&w=800`,
  },
  beforeAfter: {
    hairBefore: `https://images.unsplash.com/photo-1519699047748-de8e457a634e?${q80}&w=800`,
    hairAfter: `https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?${q80}&w=800`,
    skinBefore: `https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?${q80}&w=800`,
    skinAfter: `https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?${q80}&w=800`,
    nailsBefore: `https://images.unsplash.com/photo-1596462502278-27bfdc403348?${q80}&w=800`,
    nailsAfter: `https://images.unsplash.com/photo-1632345031435-8727f6897d53?${q80}&w=800`,
  },
} as const
