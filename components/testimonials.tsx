'use client'

import { Star } from 'lucide-react'
import { useInViewItemIds } from '@/hooks/use-in-view-item-ids'

const testimonials = [
  {
    id: 1,
    attribution: 'Linda M.',
    rating: 5,
    text: 'I always leave feeling relaxed and refreshed.',
  },
  {
    id: 2,
    attribution: 'Karen D.',
    rating: 5,
    text: 'The staff is so professional and the space is very clean.',
  },
  {
    id: 3,
    attribution: 'Michelle R.',
    rating: 5,
    text: 'Best spa experience I have had in a long time.',
  },
  {
    id: 4,
    attribution: 'Susan T.',
    rating: 5,
    text: 'Easy booking and amazing results every time.',
  },
  {
    id: 5,
    attribution: 'Patricia L.',
    rating: 5,
    text: 'My facial and massage were both excellent. I felt cared for from start to finish.',
  },
  {
    id: 6,
    attribution: 'Diane B.',
    rating: 5,
    text: 'I booked for nails and left with so much confidence. Beautiful results.',
  },
]

export default function Testimonials() {
  const { visibleIds, setItemRef } = useInViewItemIds(testimonials.length)

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-5">
            <Star className="text-accent fill-accent" size={22} aria-hidden />
            <span className="text-accent font-semibold text-sm tracking-wide">
              TESTIMONIALS
            </span>
            <Star className="text-accent fill-accent" size={22} aria-hidden />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6 text-balance">
            Trusted by local clients
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Real feedback from guests who keep coming back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={setItemRef(index)}
              data-id={testimonial.id}
              className={`transition-all duration-700 ${
                visibleIds.has(testimonial.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-card rounded-xl border border-border/80 shadow-sm hover:shadow-md transition-shadow p-7 h-full flex flex-col">
                <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-accent fill-accent"
                      aria-hidden
                    />
                  ))}
                </div>

                <p className="text-sm md:text-base text-foreground mb-6 flex-grow leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <p className="text-sm font-semibold text-foreground border-t border-border pt-4">
                  — {testimonial.attribution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
