import { Inter, Playfair_Display } from 'next/font/google';

import { BusinessProvider } from '@/context/BusinessProvider';
import { ServicesProvider } from '@/context/ServicesProvider';
import { ClientProvider } from '@/context/ClientProvider';
import { AppointmentsProvider } from '@/context/AppointmentsProvider';

import './globals.css';

import { Gelasio } from "next/font/google";

const gelasio = Gelasio({
  subsets: ["latin"],
  variable: "--font-gelasio",
  display: "swap",
});

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://acoxpa419-clinicadebelleza.negocio.site'),
  title: {
    default: 'Clínica de Belleza ACOXPA 419',
    template: '%s | Clínica de Belleza ACOXPA 419'
  },
  description:
    'Clínica de Belleza ACOXPA 419 — Centro de estética en Coapa, Tlalpan, CDMX. Servicios de depilación, tratamientos faciales y corporales. 4.6 (69 opiniones). Abierto; cierra a las 18:00.',
  keywords: [
    'Clínica de Belleza ACOXPA 419',
    'Acoxpa 419',
    'Centro de estética Coapa',
    'depilación CDMX',
    'estética Tlalpan',
    'tratamientos faciales',
    'LGBTQ friendly',
    'servicios de belleza CDMX'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Clínica de Belleza ACOXPA 419',
    description: 'Centro de estética en Coapa, Tlalpan, CDMX. Alta valoración: 4.6 (69 opiniones). Reserva por teléfono o WhatsApp.',
    url: 'https://acoxpa419.com',
    siteName: 'Clínica de Belleza ACOXPA 419',
    locale: 'es_MX',
    type: 'place'
  },
  icons: {
    icon: '/logo.png',
  }
};

export default function RootLayout({ children }) {
  const businessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Clínica de Belleza ACOXPA 419',
    image: 'https://acoxpa419.com',
    telephone: '+525547524305',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.6',
      reviewCount: '69'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calz Acoxpa 419, Coapa, Villa Lázaro Cárdenas',
      addressLocality: 'Tlalpan',
      addressRegion: 'Ciudad de México',
      postalCode: '14370',
      addressCountry: 'MX'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+52 55 4752 4305',
        contactType: 'customer service'
      },
      {
        '@type': 'ContactPoint',
        telephone: '+52 55 2494 8191',
        contactType: 'WhatsApp'
      }
    ],
    sameAs: [
      'https://acoxpa419-clinicadebelleza.negocio.site/',
      'https://api.whatsapp.com/send?phone=5215561184123'
    ],
    amenityFeature: {
      '@type': 'LocationFeatureSpecification',
      name: 'LGBTQ+ friendly',
      value: true
    },
    url: 'https://acoxpa419.com'
  };

  return (
    <html lang="es-MX" className={`${inter.variable} ${playfair.variable} ${gelasio.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
        <BusinessProvider>
          <ServicesProvider>
            <ClientProvider>
              <AppointmentsProvider>{children}</AppointmentsProvider>
            </ClientProvider>
          </ServicesProvider>
        </BusinessProvider>
      </body>
    </html>
  );
}
