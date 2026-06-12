import { Inter, Playfair_Display } from 'next/font/google';

import { BusinessProvider } from '@/context/BusinessProvider';
import { ServicesProvider } from '@/context/ServicesProvider';
import { ClientProvider } from '@/context/ClientProvider';
import { AppointmentsProvider } from '@/context/AppointmentsProvider';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://dentallanz.netlify.app'),
  title: {
    default: 'Dental Lanz | Odontología Integral en CDMX',
    template: '%s | Dental Lanz'
  },
  description:
    'Clínica dental en Prado Coapa, CDMX. Especialistas en ortodoncia, blanqueamiento y tratamientos dentales integrales. Agenda tu cita hoy. Calificación 5.0 en Google.',
  keywords: [
    'Dental Lanz',
    'clínica dental CDMX',
    'dentista Prado Coapa',
    'ortodoncia CDMX',
    'blanqueamiento dental',
    'odontología integral'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Dental Lanz | Odontología Integral en CDMX',
    description: 'Clínica dental en Prado Coapa, CDMX. Especialistas en ortodoncia, blanqueamiento y tratamientos dentales integrales.',
    url: 'https://dentallanz.netlify.app',
    siteName: 'Dental Lanz',
    locale: 'es_MX',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  const businessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Dental Lanz',
    image: 'https://dentallanz.netlify.app/og-image.jpg',
    telephone: '+52 55 5801 9251',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '7'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calz Acoxpa 566-int 2, Coapa, Prado Coapa',
      addressLocality: 'Tlalpan',
      addressRegion: 'Ciudad de México',
      postalCode: '14357',
      addressCountry: 'MX'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '19:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '14:00'
      }
    ],
    url: 'https://dentallanz.netlify.app'
  };

  return (
    <html lang="es-MX" className={`${inter.variable} ${playfair.variable}`}>
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
