import { Inter, Playfair_Display } from 'next/font/google';

import { BusinessProvider } from '@/context/BusinessProvider';
import { ServicesProvider } from '@/context/ServicesProvider';
import { ClientProvider } from '@/context/ClientProvider';
import { AppointmentsProvider } from '@/context/AppointmentsProvider';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://tailormadebeautyspa.netlify.app'),
  title: {
    default: 'Tailor Made Beauty & SPA | Belleza y SPA Integral en CDMX',
    template: '%s | Tailor Made Beauty & SPA'
  },
  description:
    'Tu espacio de belleza y relajación en Ex-Hacienda Coapa, CDMX. Agenda tu cita hoy. Calificación 5.0 en Google.',
  keywords: [
    'Tailor Made Beauty & SPA',
    'spa CDMX',
    'spa Coapa',
    'ortodoncia CDMX',
    'masajes relajantes',
    'odontología integral'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Tailor Made Beauty & SPA | Belleza y SPA Integral en CDMX',
    description: 'Tu espacio de belleza y relajación en Ex-Hacienda Coapa, CDMX.',
    url: 'https://tailormadebeautyspa.netlify.app',
    siteName: 'Tailor Made Beauty & SPA',
    locale: 'es_MX',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  const businessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: 'Tailor Made Beauty & SPA',
    image: 'https://tailormadebeautyspa.netlify.app/og-image.jpg',
    telephone: '+52 55 5826 0986',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.4',
      reviewCount: '137'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calz. del Hueso 160 Fuentes Plaza, Local 21, Coapa, Ex-Hacienda Coapa',
      addressLocality: 'Coyoacán',
      addressRegion: 'Ciudad de México',
      postalCode: '04850',
      addressCountry: 'MX'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '06:00',
        closes: '20:00'
      }
    ],
    url: 'https://tailormadebeautyspa.netlify.app'
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
