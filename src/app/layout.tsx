import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { BackToTop } from "@/components/layout/BackToTop";
import { HERO_IMAGE, SITE, UI } from "@/lib/constants";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Kafa i poslastice u Sarajevu`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Slastičarna Gala",
    "kafić Sarajevo",
    "poslastičarnica Sarajevo",
    "kafa Sarajevo",
    "torte Sarajevo",
    "Džemala Bijedića",
    "kolači Sarajevo",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "bs_BA",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Kafa i poslastice u Sarajevu`,
    description: SITE.description,
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 900,
        alt: "Slastičarna Gala — poslastičarnica u Sarajevu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Kafa i poslastice u Sarajevu`,
    description: SITE.description,
    images: [HERO_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  priceRange: "$",
  image: HERO_IMAGE,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressCountry: "BA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.coordinates.lat,
    longitude: SITE.coordinates.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "22:30",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.rating,
    reviewCount: SITE.reviewCount,
    bestRating: 5,
    worstRating: 1,
  },
  servesCuisine: "Kafa, Poslastice, Deserti",
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Vanjsko sjedenje",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Hrana za ponijeti",
      value: true,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} min-h-screen bg-background font-body text-foreground antialiased`}
      >
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            {UI.skipLink}
          </a>
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
