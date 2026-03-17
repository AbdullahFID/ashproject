import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Top Spot Janitorial Services Inc. | Toronto's Premier Cleaning Leader",
  description:
    "Toronto's premier janitorial service leader for high-rise residential condominiums and commercial facilities since 2001. 30+ years of trusted service across the GTA. Call 416-477-3714.",
  keywords: [
    "janitorial services Toronto",
    "commercial cleaning GTA",
    "condominium cleaning",
    "superintendent services",
    "building maintenance Toronto",
    "office cleaning Scarborough",
    "industrial cleaning GTA",
    "emergency cleaning services",
    "Top Spot Janitorial",
  ],
  openGraph: {
    title: "Top Spot Janitorial Services Inc.",
    description:
      "Toronto's premier janitorial service leader — 30+ years of trusted service across the GTA.",
    type: "website",
    locale: "en_CA",
    siteName: "Top Spot Janitorial Services Inc.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://topspotjanitorial.ca" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
