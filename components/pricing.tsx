'use client'

import { Check } from 'lucide-react'
import { useInViewItemIds } from '@/hooks/use-in-view-item-ids'
import { bookingHashHref } from '@/lib/site'

const pricingTiers = [
  {
    id: 1,
    name: 'Basic Care',
    range: '~$50–$70',
    description: 'Essential service',
    features: ['Perfect for regular upkeep', 'Simple, focused appointment', 'Comfort-first care'],
  },
  {
    id: 2,
    name: 'Signature Treatment',
    range: '~$80–$120',
    description: 'Most popular services',
    features: ['Our most booked options', 'Balanced time and value', 'Great for monthly self-care'],
    highlighted: true,
  },
  {
    id: 3,
    name: 'Luxury Experience',
    range: '~$150+',
    description: 'Full spa treatment',
    features: ['Extended service time', 'Head-to-toe refresh', 'Premium relaxation experience'],
  },
  {
    id: 4,
    name: 'Monthly Wellness Plan',
    range: 'From $129/mo',
    description: 'Membership option',
    features: ['One featured service per month', 'Priority booking windows', 'Member-only upgrade pricing'],
  },
]

export default function Pricing() {
  const { visibleIds, setItemRef } = useInViewItemIds(pricingTiers.length)

  return (
    <section id="pricing" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <span className="text-accent font-semibold text-sm tracking-wide">
            PRICING
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mt-4 mb-6 text-balance">
            Clear pricing. Easy decisions.
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Pick the level that fits your goals. Then reserve your appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-6 mb-14">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.id}
              ref={setItemRef(index)}
              data-id={tier.id}
              className={`transition-all duration-700 ${
                visibleIds.has(tier.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div
                className={`rounded-xl border p-8 h-full flex flex-col ${
                  tier.highlighted
                    ? 'bg-card border-primary shadow-md ring-2 ring-primary/20 md:scale-[1.02]'
                    : 'bg-card border-border/80 shadow-sm'
                }`}
              >
                {tier.highlighted ? (
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                    Most booked
                  </p>
                ) : (
                  <span className="block h-5 mb-2" aria-hidden />
                )}
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-1">
                  {tier.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {tier.description}
                </p>
                <p className="text-3xl font-bold text-foreground mb-6">
                  {tier.range}
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-sm text-foreground">
                      <Check
                        size={18}
                        className="text-accent flex-shrink-0 mt-0.5"
                        aria-hidden
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={bookingHashHref()}
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-colors text-center min-h-11 inline-flex items-center justify-center"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={bookingHashHref()}
            className="inline-flex items-center justify-center bg-foreground text-background px-10 py-4 rounded-full font-semibold text-base hover:bg-foreground/90 transition-all min-h-12 shadow-md"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  )
}
