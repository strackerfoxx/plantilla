import { Montserrat, Playfair_Display } from 'next/font/google';

import { BusinessProvider } from '@/context/BusinessProvider';
import { ServicesProvider } from '@/context/ServicesProvider';
import { ClientProvider } from '@/context/ClientProvider';
import { AppointmentsProvider } from '@/context/AppointmentsProvider';

import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://elsalon.netlify.app'),
  title: {
    default: 'el Salon | Centro de Estética en CDMX',
    template: '%s | el Salon'
  },
  description:
    'Centro de estética "el Salon" en Coapa, CDMX. Especialistas en cortes de cabello, manicura, pedicura, microblading y servicios de spa. Agenda tu cita hoy. Calificación 5.0 en Google.',
  keywords: [
    'el Salon',
    'salón de belleza CDMX',
    'estética Coapa',
    'manicura CDMX',
    'microblading',
    'centro de estética'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'el Salon | Centro de Estética en CDMX',
    description: 'Centro de estética "el Salon" en Coapa, CDMX. Especialistas en cortes de cabello, manicura, pedicura y microblading.',
    url: 'https://elsalon.netlify.app',
    siteName: 'el Salon',
    locale: 'es_MX',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  const businessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'el Salon',
    image: 'https://elsalon.netlify.app/og-image.jpg',
    telephone: '+52 55 5801 9251',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '3'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Coapa, Ex-Hacienda Coapa',
      addressLocality: 'Tlalpan',
      addressRegion: 'Ciudad de México',
      postalCode: '04980',
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
    url: 'https://elsalon.netlify.app'
  };

  return (
    <html lang="es-MX" className={`${montserrat.variable} ${playfair.variable}`}>
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
