import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { US_MONTHLY_USD, US_YEARLY_USD } from "@/lib/pricing";

const SITE_URL = "https://phacotrack.com";

export const metadata: Metadata = {
  title: "PhacoTrack — Personal Cataract Surgery Outcomes Tracker",
  description:
    "Track your cataract surgery outcomes with AI-powered biometry scanning, personal analytics, IOL constant optimisation, and SIA analysis. Built by ophthalmologists. Free to start.",
  keywords: [
    "cataract surgery outcomes",
    "surgical logbook",
    "IOL calculator",
    "phaco outcomes",
    "SIA calculator",
    "ophthalmology app",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "PhacoTrack — Know your numbers. Improve your surgery.",
    description:
      "Personal analytics dashboard for cataract surgeons. AI-powered biometry scanning, IOL constant optimisation, and SIA analysis.",
    type: "website",
    url: SITE_URL,
    siteName: "PhacoTrack",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PhacoTrack — cataract surgery outcomes tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhacoTrack — Know your numbers. Improve your surgery.",
    description:
      "Personal analytics dashboard for cataract surgeons. AI-powered biometry scanning, IOL constant optimisation, and SIA analysis.",
    images: ["/opengraph-image"],
  },
  metadataBase: new URL(SITE_URL),
};

const softwareApplicationLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PhacoTrack",
  applicationCategory: "MedicalApplication",
  operatingSystem: "iOS",
  description:
    "Personal cataract surgery outcomes tracker for ophthalmologists. AI-powered biometry scanning, analytics dashboard, and SIA analysis.",
  url: SITE_URL,
  // Free download + two Pro subscription tiers. Prices are US App Store
  // USD, sourced from lib/pricing.ts so they track the single source of
  // truth; other regions auto-localise on-device via StoreKit.
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "USD",
      eligibleRegion: { "@type": "Country", name: "US" },
    },
    {
      "@type": "Offer",
      name: "Pro Monthly",
      price: US_MONTHLY_USD.toFixed(2),
      priceCurrency: "USD",
      eligibleRegion: { "@type": "Country", name: "US" },
    },
    {
      "@type": "Offer",
      name: "Pro Yearly",
      price: US_YEARLY_USD.toFixed(2),
      priceCurrency: "USD",
      eligibleRegion: { "@type": "Country", name: "US" },
    },
  ],
  publisher: {
    "@type": "Organization",
    name: "PhacoTrack",
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ colorScheme: "light dark" }}>
      <body className="bg-surface text-ink antialiased">
        <script
          type="application/ld+json"
          // Static JSON; safe to inline. Required by SEO crawlers — Next.js
          // doesn't render <script> via JSX without dangerouslySetInnerHTML.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
