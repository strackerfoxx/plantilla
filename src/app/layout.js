import { Inter, Playfair_Display } from "next/font/google";

import { BusinessProvider } from "@/context/BusinessProvider";
import { ServicesProvider } from "@/context/ServicesProvider";
import { ClientProvider } from "@/context/ClientProvider";
import { AppointmentsProvider } from "@/context/AppointmentsProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata = {
  title: {
    default: "Paw Bliss | Cuidado y bienestar para mascotas",
    template: "%s | Paw Bliss",
  },
  description:
    "Encuentra productos y soluciones de cuidado para tu mascota. Conoce nuestros kits, explora accesorios y agenda servicios de estética y bienestar.",
  keywords: [
    "Paw Bliss",
    "cuidado de mascotas",
    "accesorios para perros",
    "accesorios para gatos",
    "estética canina",
    "productos para mascotas",
    "agenda para mascotas",
  ],
  openGraph: {
    title: "Paw Bliss | Cuidado y bienestar para mascotas",
    description: "Productos, accesorios y servicios para cuidar a tus compañeros de vida.",
    siteName: "Paw Bliss",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "PetStore",
    name: "Paw Bliss",
    description:
      "Tienda y servicios de cuidado para mascotas, con productos y soluciones para perros y gatos.",
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
