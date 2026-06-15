import { Inter, Playfair_Display } from 'next/font/google';

import { BusinessProvider } from '@/context/BusinessProvider';
import { ServicesProvider } from '@/context/ServicesProvider';
import { ClientProvider } from '@/context/ClientProvider';
import { AppointmentsProvider } from '@/context/AppointmentsProvider';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://gut-klinik-fisioterapia.netlify.app'),
  title: {
    default: 'Gut Klinik | Fisioterapia en CDMX',
    template: '%s | Gut Klinik'
  },
  description:
    'Clínica de fisioterapia en Coapa, CDMX. Especialistas en tratamiento de lesiones, rehabilitación y entrenamiento funcional.',
  keywords: [
    'Gut Klinik',
    'clínica de fisioterapia CDMX',
    'fisioterapia Coapa',
    'rehabilitación',
    'tratamiento de lesiones'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Gut Klinik | Fisioterapia en CDMX',
    description: 'Clínica de fisioterapia en Coapa, CDMX. Especialistas en tratamiento de lesiones, rehabilitación y entrenamiento funcional.',
    url: 'https://gut-klinik-fisioterapia.netlify.app',
    siteName: 'Gut Klinik',
    locale: 'es_MX',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  const businessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Gut Klinik Fisioterapia',
    image: 'https://gut-klinik-fisioterapia.netlify.app/og-image.jpg',
    telephone: '+52 55 7451 0690',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '31'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calz. del Hueso 160, Coapa, Ex-Hacienda Coapa',
      addressLocality: 'Coyoacán',
      addressRegion: 'Ciudad de México',
      postalCode: '04980',
      addressCountry: 'MX'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '20:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '14:00'
      }
    ],
    url: 'https://gut-klinik-fisioterapia.netlify.app'
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
