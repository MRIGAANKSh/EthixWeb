import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hind } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], display: "swap", variable: "--font-display" });
const body = Hind({ subsets: ["latin"], weight: ["400", "600"], display: "swap", variable: "--font-body" });
// Devanagari loads only when Hindi text is on the page
const deva = Hind({ subsets: ["devanagari"], weight: ["600"], display: "swap", preload: false, variable: "--font-deva" });

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: { default: "Ethixweb India — Websites and marketing built for Indian businesses", template: "%s | Ethixweb India" },
  description:
    "Ethixweb designs fast, premium websites and runs Google Ads and SEO for Indian businesses, with UPI checkout, WhatsApp enquiries and Hindi-first pages built in.",
  openGraph: { type: "website", locale: "en_IN", siteName: "Ethixweb India" },
};

export const viewport: Viewport = { themeColor: "#C4222B", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable} ${deva.variable}`}>
      <body>{children}</body>
    </html>
  );
}