import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { WishlistProvider } from "@/lib/wishlist-context";
import { AnalyticsProvider } from "@/components/analytics/analytics-provider";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { WishlistModal } from "@/components/wishlist/wishlist-modal";
import { OrganizationJsonLd } from "@/components/seo/json-ld";

import { ToastProvider } from "@/lib/toast-context";
import { ToastContainer } from "@/components/ui/toast";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://vybe-storefront.vercel.app"
  ),
  title: {
    default: "VYBE — Made for your kind of movement",
    template: "%s | VYBE Athleisure",
  },
  description:
    "Explore contemporary women's athleisure designed for mindful movement, studio sessions, and daily rhythm. Academic concept storefront.",
  keywords: [
    "women's activewear",
    "athleisure",
    "studio leggings",
    "sports bras",
    "VYBE movement",
    "Indian activewear",
  ],
  authors: [{ name: "VYBE Team" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "VYBE Athleisure",
    title: "VYBE — Made for your kind of movement",
    description:
      "Contemporary women's athleisure designed for mindful movement and daily rhythm in Indian metro climates.",
    images: [
      {
        url: "/og-image-v2.jpg",
        width: 1200,
        height: 630,
        alt: "VYBE — Made for your kind of movement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VYBE — Made for your kind of movement",
    description:
      "Contemporary women's athleisure designed for mindful movement and daily rhythm in Indian metro climates.",
    images: ["/og-image-v2.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f6f1ea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${cormorantGaramond.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-[var(--vybe-pink)] selection:text-[var(--color-text)]">
        <OrganizationJsonLd />
        <ToastProvider>
          <CartProvider>
            <WishlistProvider>
              <AnalyticsProvider />
              <CartDrawer />
              <WishlistModal />
              <ToastContainer />
              <AnnouncementBar />
              <Header />
              <main id="main-content" className="flex-1 w-full">
                {children}
              </main>
              <Footer />
            </WishlistProvider>
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
