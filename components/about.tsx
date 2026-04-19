'use client'

import { bookingHashHref } from '@/lib/site'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-accent font-semibold text-sm tracking-wide">
          ABOUT US
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mt-4 mb-8 text-balance">
          A calm space for self-care
        </h2>
        <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-10">
          At Salon &amp; Spa At Sun City Center, we provide a full range of salon and spa
          services in a clean, relaxing environment. Our goal is to help every client feel
          confident, refreshed, and cared for.
        </p>
        <a
          href={bookingHashHref()}
          className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-4 rounded-full font-semibold text-base hover:bg-primary/90 transition-colors min-h-12 shadow-sm"
        >
          Book Appointment
        </a>
      </div>
    </section>
  )
}
