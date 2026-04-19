/** Central contact and business copy — replace URL with production domain when live. */
export const SITE = {
  name: 'Salon & Spa At Sun City Center',
  legalName: 'Salon & Spa At Sun City Center',
  phoneTel: '+18132603997',
  phoneDisplay: '+1 (813) 260-3997',
  streetAddress: '723 Imar Dr',
  addressLocality: 'Sun City Center',
  addressRegion: 'FL',
  postalCode: '33573',
  addressCountry: 'US',
  addressLines: [
    '723 Imar Dr',
    'Sun City Center, FL 33573',
  ],
  url: 'https://salonspasuncitycenter.com',
  bookingSectionId: 'book',
  hours: {
    weekday: 'Mon-Fri: 9am-7pm',
    saturday: 'Saturday: 9am-6pm',
    sunday: 'Sunday: By appointment',
  },
} as const

export function bookingTelHref() {
  return `tel:${SITE.phoneTel}`
}

export function bookingHashHref() {
  return `#${SITE.bookingSectionId}`
}
