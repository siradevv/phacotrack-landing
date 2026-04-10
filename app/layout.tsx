import type { Metadata } from "next";
import "./globals.css";

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
  openGraph: {
    title: "PhacoTrack — Know your numbers. Improve your surgery.",
    description:
      "Personal analytics dashboard for cataract surgeons. AI-powered biometry scanning, IOL constant optimisation, and SIA analysis.",
    type: "website",
    url: "https://phacotrack.com",
    siteName: "PhacoTrack",
  },
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL("https://phacotrack.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/app-icon-small.png" type="image/png" />
      </head>
      <body className="bg-surface text-ink antialiased">{children}</body>
    </html>
  );
}
