export type ProductCategory =
  | "leggings"
  | "flared"
  | "sports-bras"
  | "tops"
  | "shorts"
  | "sets"
  | "layers"
  | "court";

export type ActivityId = "yoga-pilates" | "strength" | "court" | "walk-run" | "everyday";

export type FabricId = "cloudflex" | "airdry" | "flowweave";

export type ProductImage = {
  src: string;
  alt: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number; // conceptual INR amount, not a real offer
  description: string;
  shortDescription: string;
  images: ProductImage[];
  sizes: string[];
  featured: boolean; // shown as "Founder's Favourites"
  isNew?: boolean;
  colorName?: string;
  fabric: FabricId;
  activities: ActivityId[];
  /** Leg lengths offered for bottoms (Petite / Regular / Tall). */
  lengths?: string[];
  /** Short feature bullets shown on the product page. */
  features: string[];
  conceptNote?: string;
};
