import { Inter, Playfair_Display } from 'next/font/google';

import { BusinessProvider } from '@/context/BusinessProvider';
import { ServicesProvider } from '@/context/ServicesProvider';
import { ClientProvider } from '@/context/ClientProvider';
import { AppointmentsProvider } from '@/context/AppointmentsProvider';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://ammartespa.com'),
  title: {
    default: 'AMM-arte Spa | Spa y Relajación en CDMX',
    template: '%s | AMM-arte Spa'
  },
  description:
    'Spa en Coapa, CDMX. Especialistas en masajes relajantes, faciales y sauna. Agenda tu cita hoy. Calificación 4.6 en Google.',
  keywords: [
    'AMM-arte Spa',
    'spa CDMX',
    'masajes Coapa',
    'facial CDMX',
    'sauna',
    'relajación'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'AMM-arte Spa | Spa y Relajación en CDMX',
    description: 'Spa en Coapa, CDMX. Especialistas en masajes relajantes, faciales y sauna.',
    url: 'https://ammartespa.com',
    siteName: 'AMM-arte Spa',
    locale: 'es_MX',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  const businessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: 'AMM-arte Spa',
    image: 'https://ammartespa.com/og-image.jpg',
    telephone: '+52 55 4542 6063',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.6',
      reviewCount: '59'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Fuentes Plaza, Calz. del Hueso 160-Local 3-C, Coapa, Ex-Hacienda Coapa',
      addressLocality: 'Coyoacán',
      addressRegion: 'Ciudad de México',
      postalCode: '04850',
      addressCountry: 'MX'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00'
      }
    ],
    url: 'https://ammartespa.com'
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
