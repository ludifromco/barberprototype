'use client'

import Image from 'next/image'
import { Sparkles } from 'lucide-react'
import { useInViewItemIds } from '@/hooks/use-in-view-item-ids'
import { IMAGES } from '@/lib/images'
import { bookingHashHref } from '@/lib/site'

const services = [
  {
    id: 1,
    name: 'Hair Services',
    description: 'Fresh cuts, color, and styling designed to keep you looking polished between visits.',
    image: IMAGES.services.hair,
  },
  {
    id: 2,
    name: 'Nails',
    description: 'Clean, polished, and long-lasting manicures and pedicures for a put-together finish.',
    image: IMAGES.services.nails,
  },
  {
    id: 3,
    name: 'Facials',
    description: 'Restore your natural glow with personalized skin care that leaves your face refreshed.',
    image: IMAGES.services.facials,
  },
  {
    id: 4,
    name: 'Massage',
    description: 'Relax, unwind, and relieve tension with soothing treatments tailored to your needs.',
    image: IMAGES.services.massage,
  },
  {
    id: 5,
    name: 'Waxing',
    description: 'Smooth results with gentle, professional waxing in a clean and comfortable setting.',
    image: IMAGES.services.waxing,
  },
]

export default function Services() {
  const { visibleIds, setItemRef } = useInViewItemIds(services.length)

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-5">
            <Sparkles className="text-accent" size={22} aria-hidden />
            <span className="text-accent font-semibold text-sm tracking-wide">
              SERVICES
            </span>
            <Sparkles className="text-accent" size={22} aria-hidden />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6 text-balance">
            Services designed around your comfort
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Choose the care you need now and book in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={setItemRef(index)}
              data-id={service.id}
              className={`transition-all duration-700 ${
                visibleIds.has(service.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-card rounded-xl overflow-hidden border border-border/80 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="relative h-56 overflow-hidden bg-secondary">
                  <Image
                    src={service.image}
                    alt={`${service.name} at Salon & Spa At Sun City Center`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <a
                    href={bookingHashHref()}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors text-center min-h-11 inline-flex items-center justify-center"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
