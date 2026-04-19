'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { bookingHashHref } from '@/lib/site'

const faqs = [
  {
    q: 'How do I book an appointment?',
    a: 'Tap any Book Appointment button and call us to reserve your preferred time.',
  },
  {
    q: 'Do you accept walk-ins?',
    a: 'Yes, when availability allows. Booking ahead is the best way to secure your slot.',
  },
  {
    q: 'What services do you offer?',
    a: 'We offer hair services, nails, facials, massage, and waxing.',
  },
  {
    q: 'How long do services take?',
    a: 'Most appointments take 45 to 120 minutes depending on your selected service.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Please provide at least 24 hours notice for cancellations or rescheduling.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-14">
          <span className="text-accent font-semibold text-sm tracking-wide">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mt-4 mb-4 text-balance">
            Common questions
          </h2>
          <p className="text-muted-foreground text-pretty">
            Straight answers so you can book with confidence.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full bg-card rounded-xl border border-border/80 px-2 md:px-4 shadow-sm">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`} className="px-2">
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <a
            href={bookingHashHref()}
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-4 rounded-full font-semibold text-base hover:bg-primary/90 transition-colors min-h-12"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  )
}
