import { Inter, Playfair_Display } from 'next/font/google';

import { BusinessProvider } from '@/context/BusinessProvider';
import { ServicesProvider } from '@/context/ServicesProvider';
import { ClientProvider } from '@/context/ClientProvider';
import { AppointmentsProvider } from '@/context/AppointmentsProvider';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://veterinariopaws.com'),
  title: {
    default: 'Centro Veterinario PAWS | Coyoacán, CDMX',
    template: '%s | Centro Veterinario PAWS'
  },
  description:
    'Centro Veterinario PAWS en Coyoacán, CDMX. Excelente servicio y atención médica para tus mascotas. Agenda tu cita o visítanos en urgencias.',
  keywords: [
    'Centro Veterinario PAWS',
    'veterinario Coyoacán',
    'clínica veterinaria CDMX',
    'urgencias veterinarias',
    'atención mascotas'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Centro Veterinario PAWS | Coyoacán, CDMX',
    description: 'Centro Veterinario PAWS en Coyoacán, CDMX. Excelente servicio y atención médica para tus mascotas.',
    url: 'https://veterinariopaws.com',
    siteName: 'Centro Veterinario PAWS',
    locale: 'es_MX',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  const businessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    name: 'Centro Veterinario PAWS',
    image: 'https://veterinariopaws.com/og-image.jpg',
    telephone: '+52 55 6550 3655',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '621'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dentro de fuentes plaza, Calz. del Hueso 160-local 5 A, Coapa, Ex-Hacienda Coapa',
      addressLocality: 'Coyoacán',
      addressRegion: 'Ciudad de México',
      postalCode: '04980',
      addressCountry: 'MX'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '19:00'
      }
    ],
    url: 'https://veterinariopaws.com'
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
