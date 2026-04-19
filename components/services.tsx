'use client'

import Image from 'next/image'
import { Scissors, Target, Clock, MapPin, ShieldCheck } from 'lucide-react'
import { useInViewItemIds } from '@/hooks/use-in-view-item-ids'
import { IMAGES } from '@/lib/images'
import { SITE, bookingHashHref } from '@/lib/site'

const reasons = [
  {
    id: 1,
    icon: Target,
    title: 'Cuts built around your hair',
    text: 'We shape every haircut to your hair type and head—not a generic template.',
  },
  {
    id: 2,
    icon: Scissors,
    title: 'Real barber technique',
    text: 'Clippers, shears, and line work when each one earns its place.',
  },
  {
    id: 3,
    icon: Clock,
    title: 'Fast without cutting corners',
    text: 'Most haircuts run about 20–30 minutes—efficient, not rushed.',
  },
  {
    id: 4,
    icon: MapPin,
    title: 'Your neighborhood shop',
    text: 'Straight answers, fair work, and a chair you can count on in Sun City Center.',
  },
  {
    id: 5,
    icon: ShieldCheck,
    title: 'Same standard, every visit',
    text: 'First cut or your regular chair—you get a finished, confident look every time.',
  },
]

function ReasonCard({
  item,
  index,
  setItemRef,
  visible,
}: {
  item: (typeof reasons)[number]
  index: number
  setItemRef: (index: number) => (el: HTMLDivElement | null) => void
  visible: boolean
}) {
  const Icon = item.icon
  return (
    <div
      ref={setItemRef(index)}
      data-id={item.id}
      className={`flex h-full flex-col items-center rounded-2xl border border-border/80 bg-card px-6 py-8 text-center shadow-sm transition-all duration-700 md:px-7 md:py-9 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div
        className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
        aria-hidden
      >
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <h3 className="font-serif text-lg font-semibold text-foreground md:text-xl">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
    </div>
  )
}

export default function Services() {
  const { visibleIds, setItemRef } = useInViewItemIds(reasons.length)

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-secondary/35" aria-hidden />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <span className="text-accent font-semibold text-sm tracking-wide">HAIRCUTS</span>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-foreground text-balance md:text-5xl">
            Why we&apos;re known for the cut
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            Sun City Barber is a barbershop first: one focus—clean, confident haircuts—and we
            take that seriously.
          </p>
        </div>

        <div className="mx-auto mb-14 max-w-4xl md:mb-16">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border/60 bg-secondary shadow-md ring-1 ring-black/5">
            <Image
              src={IMAGES.haircutShowcase}
              alt={`Precision haircut at ${SITE.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority={false}
            />
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
          {reasons.slice(0, 4).map((item, index) => (
            <ReasonCard
              key={item.id}
              item={item}
              index={index}
              setItemRef={setItemRef}
              visible={visibleIds.has(item.id)}
            />
          ))}
          <div className="md:col-span-2 flex justify-center">
            <div className="w-full max-w-md md:max-w-lg">
              <ReasonCard
                item={reasons[4]}
                index={4}
                setItemRef={setItemRef}
                visible={visibleIds.has(reasons[4].id)}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center md:mt-14">
          <a
            href={bookingHashHref()}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-10 py-4 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  )
}
