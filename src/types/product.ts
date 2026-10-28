export type ProductCategory =
  | "leggings"
  | "sports-bras"
  | "tops"
  | "shorts"
  | "sets"
  | "layers"
  | "court";

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
  featured: boolean;
  colorName?: string;
  conceptNote?: string;
};
