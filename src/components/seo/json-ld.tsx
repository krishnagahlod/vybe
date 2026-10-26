import React from "react";
import { Product } from "@/types/product";

type ProductJsonLdProps = {
  product: Product;
};

export function ProductJsonLd({ product }: ProductJsonLdProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vybe-storefront.vercel.app";
  const imageSrc =
    product.images && product.images.length > 0
      ? product.images[0].src
      : "/images/products/concept-silhouette.svg";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [`${baseUrl}${imageSrc}`],
    description: product.description,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: "VYBE",
    },
    offers: {
      "@type": "Offer",
      url: `${baseUrl}/product/${product.slug}`,
      priceCurrency: "INR",
      price: product.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vybe-storefront.vercel.app";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VYBE",
    alternateName: "VYBE Athleisure",
    url: baseUrl,
    logo: `${baseUrl}/images/brand/logo.svg`,
    description:
      "Contemporary women's athleisure designed for mindful movement, studio sessions, and daily rhythm. Academic concept storefront.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
