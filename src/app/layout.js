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
    default: 'Barbería y salón Alex | Corte, estética y cuidado personal en CDMX',
    template: '%s | Barbería y salón Alex'
  },
  description:
    'Barbería y salón Alex en Av. Insurgentes Sur 3807, Tlalpan, CDMX. Corte de barbería, cuidado personal y estética con atención rápida. Agenda tu cita hoy y visita nuestro salón en La Fama.',
  keywords: [
    'Barbería y salón Alex',
    'barbería en Tlalpan',
    'salón de belleza La Fama',
    'corte de cabello CDMX',
    'centro de estética Tlalpan',
    'barbería en Insurgentes Sur',
    'agenda cita barbería CDMX'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Barbería y salón Alex | Corte, estética y cuidado personal en CDMX',
    description: 'Barbería y salón Alex en Tlalpan, CDMX. Atención profesional, ambiente moderno y servicio de estética para hombres y mujeres.',
    url: 'https://dentallanz.netlify.app',
    siteName: 'Barbería y salón Alex',
    locale: 'es_MX',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  const businessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Barbería y salón Alex',
    description: 'Centro de estética y barbería en La Fama, Tlalpan, Ciudad de México.',
    image: 'https://dentallanz.netlify.app/og-image.jpg',
    telephone: '+52 56 3000 2292',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.0',
      reviewCount: '4'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Insurgentes Sur 3807, La Fama, Tlalpan',
      addressLocality: 'Ciudad de México',
      addressRegion: 'CDMX',
      postalCode: '14269',
      addressCountry: 'MX'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '20:00'
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
