'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { IMAGES } from '@/lib/images'
import { bookingHashHref } from '@/lib/site'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[min(100svh,880px)] md:min-h-[min(100svh,760px)] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.hero}
          alt="Barber providing a precision haircut"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28 md:py-36">
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-white mb-6 text-pretty tracking-tight">
            Sharp Cuts. Clean Style.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            Professional barber services to keep you looking your best.
          </p>
          <a
            href={bookingHashHref()}
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 md:px-12 py-4 md:py-[1.125rem] rounded-full font-semibold text-base md:text-lg hover:bg-primary/90 transition-all hover:shadow-lg min-h-14 shadow-md"
          >
            Book Appointment
          </a>
          <p className="mt-5 text-sm md:text-base text-white/85 font-medium">
            Walk-ins welcome • Fast service
          </p>
        </div>
      </div>
    </section>
  )
}
