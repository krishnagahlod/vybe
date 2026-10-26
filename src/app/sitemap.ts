import { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vybe-storefront.vercel.app";

  const staticRoutes = [
    "",
    "/shop",
    "/about",
    "/contact",
    "/shipping-returns",
    "/privacy",
    "/faq",
    "/size-guide",
    "/track-order",
    "/cart",
    "/checkout",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-10-26"),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route === "/shop" ? 0.9 : 0.7,
  }));

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date("2026-10-26"),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}
