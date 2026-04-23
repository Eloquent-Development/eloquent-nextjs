import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { rethinkSans, ballingerMono } from "../fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eloquent Development",
  description: "Shopify experts specializing in headless storefronts, custom apps, and high-performance ecommerce builds.",
  openGraph: {
    title: "Eloquent Development",
    description: "Shopify experts specializing in headless storefronts, custom apps, and high-performance ecommerce builds.",
    url: "https://www.eloquentdev.com",
    siteName: "Eloquent Development",
    type: "website",
    images: [{ url: "https://www.eloquentdev.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eloquent Development",
    description: "Shopify experts specializing in headless storefronts, custom apps, and high-performance ecommerce builds.",
    images: ["https://www.eloquentdev.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rethinkSans.variable} ${ballingerMono.variable}`}
    >
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
