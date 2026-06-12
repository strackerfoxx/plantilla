import { Inter, Outfit } from 'next/font/google';

import { BusinessProvider } from '@/context/BusinessProvider';
import { ServicesProvider } from '@/context/ServicesProvider';
import { ClientProvider } from '@/context/ClientProvider';
import { AppointmentsProvider } from '@/context/AppointmentsProvider';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://dentallanz.netlify.app'),
  title: {
    default: 'Dental Plaza | Clínica de Especialidades en CDMX',
    template: '%s | Dental Plaza'
  },
  description:
    'Clínica dental en Ex-Hacienda Coapa, CDMX. Especialistas en ortodoncia, ortodoncia invisible y tratamientos dentales integrales. Agenda tu cita hoy. Calificación 4.4 en Google.',
  keywords: [
    'Dental Plaza',
    'clínica dental CDMX',
    'dentista Ex-Hacienda Coapa',
    'ortodoncia invisible',
    'ortodoncia CDMX',
    'odontología integral'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Dental Plaza | Clínica de Especialidades en CDMX',
    description: 'Clínica dental en Ex-Hacienda Coapa, CDMX. Especialistas en ortodoncia, ortodoncia invisible y tratamientos dentales integrales.',
    url: 'https://dentallanz.netlify.app',
    siteName: 'Dental Plaza',
    locale: 'es_MX',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  const businessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Dental Plaza',
    image: 'https://dentallanz.netlify.app/og-image.jpg',
    telephone: '+52 55 2971 1036',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.4',
      reviewCount: '14'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calzada del Hueso, Fuentes Plaza 160-Local 5b, Ex-Hacienda Coapa',
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
    url: 'https://dentallanz.netlify.app'
  };

  return (
    <html lang="es-MX" className={`${inter.variable} ${outfit.variable}`}>
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
