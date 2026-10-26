import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { WishlistProvider } from "@/lib/wishlist-context";
import { AnalyticsProvider } from "@/components/analytics/analytics-provider";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { WishlistModal } from "@/components/wishlist/wishlist-modal";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
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
  ],
  authors: [{ name: "VYBE Team" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#d8e2dc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${playfairDisplay.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-[var(--vybe-pink)] selection:text-[var(--color-text)]">
        <CartProvider>
          <WishlistProvider>
            <AnalyticsProvider />
            <CartDrawer />
            <WishlistModal />
            <AnnouncementBar />
            <Header />
            <main id="main-content" className="flex-1 w-full">
              {children}
            </main>
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
