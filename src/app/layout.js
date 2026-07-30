import { Inter, Playfair_Display } from 'next/font/google';

import { BusinessProvider } from '@/context/BusinessProvider';
import { ServicesProvider } from '@/context/ServicesProvider';
import { ClientProvider } from '@/context/ClientProvider';
import { AppointmentsProvider } from '@/context/AppointmentsProvider';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://salonlazarini.netlify.app'),
  title: {
    default: 'Clinica de Belleza | Clínica de Belleza y Spa',
    template: '%s | Clinica de Belleza'
  },
  description:
    'Clínica de belleza y spa. Especialistas en tratamientos faciales, corporales y relajación. Agenda tu cita hoy y descubre tu mejor versión.',
  keywords: [
    'Clinica de Belleza',
    'spa CDMX',
    'clínica de belleza',
    'tratamientos faciales',
    'masajes relajantes',
    'bienestar integral'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Clinica de Belleza | Clínica de Belleza y Spa',
    description: 'Clínica de belleza y spa. Especialistas en tratamientos faciales, corporales y relajación.',
    url: 'https://salonlazarini.netlify.app',
    siteName: 'Clinica de Belleza',
    locale: 'es_MX',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  const businessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Clinica de Belleza',
    image: 'https://salonlazarini.netlify.app/og-image.jpg',
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
    url: 'https://salonlazarini.netlify.app'
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
