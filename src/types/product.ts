export type ProductCategory =
  | "leggings"
  | "flared"
  | "sports-bras"
  | "tops"
  | "shorts"
  | "sets"
  | "layers"
  | "court";

export type ActivityId = "dance" | "court" | "strength" | "yoga-pilates" | "walk-run" | "everyday";

export type FabricId = "cloudflex" | "airdry" | "flowweave";

export type PrintFamily = "bold" | "soft" | "pop" | "pastel";

/** A colour or print option; `image` is the index into `images` it switches to. */
export type ProductVariant = {
  name: string;
  swatch: string; // CSS colour or an image URL for prints
  image: number;
};

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
  featured: boolean; // shown as "Bestsellers"
  isNew?: boolean;
  colorName?: string;
  fabric: FabricId;
  activities: ActivityId[];
  /** Leg lengths offered for bottoms (Petite / Regular / Tall). */
  lengths?: string[];
  /** Short feature bullets shown on the product page. */
  features: string[];
  print: PrintFamily;
  variants?: ProductVariant[];
  /** Sticker on product cards, e.g. "Built-in bra". */
  badge?: string;
  /** One emotional + functional line under the product name. */
  storyLine?: string;
  conceptNote?: string;
};
