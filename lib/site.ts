/** Central contact and business copy — replace URL with production domain when live. */
export const SITE = {
  name: 'Sun City Barber',
  legalName: 'Sun City Barber',
  phoneTel: '+18135644081',
  phoneDisplay: '+1 (813) 564-4081',
  streetAddress: '908 N Pebble Beach Blvd',
  addressLocality: 'Sun City Center',
  addressRegion: 'FL',
  postalCode: '33573',
  addressCountry: 'US',
  addressLines: [
    '908 N Pebble Beach Blvd',
    'Sun City Center, FL 33573',
  ],
  url: 'https://suncitybarber.com',
  bookingSectionId: 'book',
  hours: {
    weekday: 'Mon–Fri: 8 AM – 4 PM',
    weekend: 'Sat–Sun: Closed',
  },
} as const

export function bookingTelHref() {
  return `tel:${SITE.phoneTel}`
}

export function bookingHashHref() {
  return `#${SITE.bookingSectionId}`
}
