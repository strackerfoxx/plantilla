import { Inter, Anton, Caveat } from 'next/font/google';

import { BusinessProvider } from '@/context/BusinessProvider';
import { ServicesProvider } from '@/context/ServicesProvider';
import { ClientProvider } from '@/context/ClientProvider';
import { AppointmentsProvider } from '@/context/AppointmentsProvider';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const anton = Anton({ weight: '400', subsets: ['latin'], variable: '--font-anton', display: 'swap' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://barbershop-martina.netlify.app'), // Replace with actual URL if known
  title: {
    default: 'Barbershop Martina | Barbería Premium en CDMX',
    template: '%s | Barbershop Martina'
  },
  description:
    'Barbershop Martina, tu barbería de confianza en Coapa, CDMX. Cortes de cabello, arreglos de barba y los mejores estilos. ¡Ven por un estilo fresco! Calificación 4.1 en Google.',
  keywords: [
    'Barbershop Martina',
    'barbería CDMX',
    'barbería Coapa',
    'cortes de cabello hombre',
    'arreglo de barba',
    'fade'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Barbershop Martina | Barbería Premium en CDMX',
    description: 'Barbershop Martina en Plaza Fiesta Coapa, CDMX. Cortes de cabello, arreglos de barba y los mejores estilos.',
    url: 'https://barbershop-martina.netlify.app', // Replace with actual URL if known
    siteName: 'Barbershop Martina',
    locale: 'es_MX',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  const businessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Barbershop',
    name: 'Barbershop Martina',
    image: 'https://barbershop-martina.netlify.app/og-image.jpg', // Placeholder
    telephone: '+52 55 1741 6569',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.1',
      reviewCount: '234'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calz. del Hueso 503, Coapa, Girasoles III',
      addressLocality: 'Coyoacán',
      addressRegion: 'Ciudad de México',
      postalCode: '04920',
      addressCountry: 'MX'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '21:00'
      }
    ],
    url: 'https://barbershop-martina.netlify.app' // Placeholder
  };

  return (
    <html lang="es-MX" className={`${inter.variable} ${anton.variable} ${caveat.variable}`}>
      <body className="flex min-h-dvh flex-col bg-background text-foreground font-sans">
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
