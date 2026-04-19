'use client'

import { Star } from 'lucide-react'
import { useInViewItemIds } from '@/hooks/use-in-view-item-ids'

const testimonials = [
  {
    id: 1,
    attribution: 'Mike R.',
    rating: 5,
    text: "Best haircut I've had in a long time.",
  },
  {
    id: 2,
    attribution: 'James T.',
    rating: 5,
    text: 'Fast, clean, and professional every time.',
  },
  {
    id: 3,
    attribution: 'Carlos M.',
    rating: 5,
    text: 'Great atmosphere and solid barbers.',
  },
  {
    id: 4,
    attribution: 'David L.',
    rating: 5,
    text: "I don't go anywhere else now.",
  },
  {
    id: 5,
    attribution: 'Brian K.',
    rating: 5,
    text: 'Solid fades and friendly service.',
  },
  {
    id: 6,
    attribution: 'Steve P.',
    rating: 5,
    text: 'In and out without feeling rushed.',
  },
]

export default function Testimonials() {
  const { visibleIds, setItemRef } = useInViewItemIds(testimonials.length)

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-secondary/50">
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
            What locals say
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Straight talk from regulars who keep coming back.
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
              <div className="bg-card rounded-xl border border-border/80 shadow-sm hover:shadow-md transition-shadow p-7 md:p-8 h-full flex flex-col">
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
