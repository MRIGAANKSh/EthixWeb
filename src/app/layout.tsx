import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/hind/400.css";
import "@fontsource/hind/500.css";
import "@fontsource/hind/600.css";
import "./globals.css";

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
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
