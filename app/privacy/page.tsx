import Link from 'next/link'
import { SITE } from '@/lib/site'

export const metadata = {
  title: `Privacy Policy | ${SITE.name}`,
  description: `How ${SITE.name} handles your information.`,
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-4 py-16 md:py-24">
        <p className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="text-primary hover:underline">
            ← Back to home
          </Link>
        </p>
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Privacy Policy
        </h1>
        <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
          <p>
            {SITE.name} respects your privacy. We only collect the information needed to
            schedule appointments, answer questions, and improve your experience.
          </p>
          <p>
            We do not sell your personal information. Contact details you share are used only
            for booking updates, service communication, and customer support.
          </p>
          <p>
            For privacy questions, contact {SITE.name} at{' '}
            <a href={`tel:${SITE.phoneTel}`} className="text-primary hover:underline">
              {SITE.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  )
}
