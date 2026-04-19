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
    q: 'Do you take walk-ins?',
    a: 'Yes, walk-ins are welcome.',
  },
  {
    q: 'How long does a haircut take?',
    a: 'Typically 20–30 minutes.',
  },
  {
    q: 'Do I need an appointment?',
    a: 'Appointments recommended, but not required.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Cash and standard payment options.',
  },
  {
    q: 'How do I book?',
    a: 'Tap Book Appointment and call us to reserve your time.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-secondary/50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-14">
          <span className="text-accent font-semibold text-sm tracking-wide">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mt-4 mb-4 text-balance">
            Quick answers
          </h2>
          <p className="text-muted-foreground text-pretty">
            Know before you go — then book with confidence.
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
