import { Inter, Playfair_Display } from 'next/font/google';

import { BusinessProvider } from '@/context/BusinessProvider';
import { ServicesProvider } from '@/context/ServicesProvider';
import { ClientProvider } from '@/context/ClientProvider';
import { AppointmentsProvider } from '@/context/AppointmentsProvider';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://barbershopmartina.com'),
  title: {
    default: 'Barbershop Martina | Barbería en CDMX',
    template: '%s | Barbershop Martina'
  },
  description:
    'Barbershop Martina, barbería en Coapa, CDMX. Cortes de cabello, arreglo de barba y atención profesional con estilo y confianza. Agenda tu cita.',
  keywords: [
    'Barbershop Martina',
    'barbería CDMX',
    'barbería Coapa',
    'corte de cabello hombre',
    'arreglo de barba',
    'barbería en Ciudad de México'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Barbershop Martina | Barbería en CDMX',
    description: 'Barbería profesional en Coapa, CDMX. Descubre tu mejor estilo con nuestros expertos.',
    url: 'https://barbershopmartina.com',
    siteName: 'Barbershop Martina',
    locale: 'es_MX',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  const businessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: 'Barbershop Martina',
    image: 'https://barbershopmartina.com/og-image.jpg',
    telephone: '+52 55 1741 6569',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.1',
      reviewCount: '234'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calz. del Hueso 503, Coapa, Girasoles III, Plaza Fiesta Coapa',
      addressLocality: 'Coyoacán',
      addressRegion: 'Ciudad de México',
      postalCode: '04920',
      addressCountry: 'MX'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '10:00',
        closes: '20:00'
      }
    ],
    url: 'https://barbershopmartina.com'
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
