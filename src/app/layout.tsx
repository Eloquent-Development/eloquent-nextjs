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
  },
  twitter: {
    card: "summary",
    title: "Eloquent Development",
    description: "Shopify experts specializing in headless storefronts, custom apps, and high-performance ecommerce builds.",
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
