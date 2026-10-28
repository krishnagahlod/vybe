import { products } from "@/data/products";
import { ActivityId, FabricId, Product } from "@/types/product";

/**
 * Shared navigation and filtering vocabulary for the header, menu, shop and footer,
 * so every entry point lands on the same filtered view.
 */

export const SIZES = ["XS", "S", "M", "L", "XL"];

export const INSTAGRAM_HANDLE = "vybe.athleisure";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

type Collection = {
  id: string;
  label: string;
  match: (p: Product) => boolean;
};

const ALL_COLLECTIONS: Collection[] = [
  { id: "new", label: "New", match: (p) => Boolean(p.isNew) },
  { id: "favourites", label: "Founder's Favourites", match: (p) => p.featured },
  { id: "tops", label: "Tops", match: (p) => p.category === "tops" },
  { id: "flared", label: "Flared Bottoms", match: (p) => p.category === "flared" },
  { id: "shorts", label: "Shorts & Skorts", match: (p) => p.category === "shorts" || p.slug === "baseline-skort" },
  { id: "leggings", label: "Leggings", match: (p) => p.category === "leggings" },
  { id: "layers", label: "Jackets", match: (p) => p.category === "layers" },
  { id: "sports-bras", label: "Sports Bras", match: (p) => p.category === "sports-bras" },
  { id: "sets", label: "Matching Sets", match: (p) => p.category === "sets" },
  { id: "court", label: "Court", match: (p) => p.category === "court" },
];

/** Collections that currently have products (Flared Bottoms stays hidden until its photos exist). */
export const COLLECTIONS = ALL_COLLECTIONS.filter((c) => products.some(c.match));

/** The header row follows the order the brand team asked for. */
export const HEADER_COLLECTION_IDS = ["new", "favourites", "tops", "flared", "shorts", "leggings", "layers", "sports-bras"];

export function getCollection(id: string | undefined) {
  return COLLECTIONS.find((c) => c.id === id);
}

export const ACTIVITIES: {
  id: ActivityId;
  label: string;
  blurb: string;
  image: string;
  imagePosition?: string;
}[] = [
  {
    id: "yoga-pilates",
    label: "Yoga & Pilates",
    blurb: "Soft, second-skin layers for slow flows and the reformer.",
    image: "/images/products/flow-matching-set-1.jpg",
  },
  {
    id: "strength",
    label: "Strength & Gym",
    blurb: "Held in where it counts, free everywhere else.",
    image: "/images/products/studio-support-bra-2.jpg",
  },
  {
    id: "court",
    label: "Racquet Sports",
    blurb: "Pleats, skorts and dresses for court days and after.",
    image: "/images/products/baseline-skort-2.jpg",
  },
  {
    id: "walk-run",
    label: "Walk & Run",
    blurb: "Rapid-dry pieces for morning laps and long walks.",
    image: "/images/products/cloudline-training-tee-2.jpg",
  },
  {
    id: "everyday",
    label: "Studio to Street",
    blurb: "Easy layers that look right long after class.",
    image: "/images/lifestyle/lifestyle-studio-to-street.jpg",
    imagePosition: "48% center",
  },
];

export const FABRICS: Record<FabricId, { name: string; tagline: string; properties: string[] }> = {
  cloudflex: {
    name: "CloudFlex",
    tagline: "Buttery, super-stretchy and light",
    properties: ["Four-way super stretch", "Lightweight, never thick", "Rapid-dry"],
  },
  airdry: {
    name: "AirDry",
    tagline: "A light, rapid-dry knit for warm city days",
    properties: ["Rapid-dry", "Breathable and airy", "Easy stretch"],
  },
  flowweave: {
    name: "FlowWeave",
    tagline: "A soft, flowy weave with stretch",
    properties: ["Flowy drape", "Two-way stretch", "Rapid-dry"],
  },
};

export const FABRIC_IDS = Object.keys(FABRICS) as FabricId[];

export const LENGTHS = [
  { id: "Petite", height: "Up to 5′4″", inseam: "25″ inseam" },
  { id: "Regular", height: "5′4″ to 5′7″", inseam: "27″ inseam" },
  { id: "Tall", height: "5′7″ and above", inseam: "29″ inseam" },
];

/** Cart lines store size and length together, e.g. "M, Regular". */
export function sizeWithLength(size: string, length?: string) {
  return length ? `${size}, ${length}` : size;
}

export type ShopFilterState = {
  collection: string;
  activity: string;
  fabric: string;
  size: string;
  color: string;
  query: string;
};

export function filterProducts(list: Product[], f: ShopFilterState) {
  const collection = getCollection(f.collection);
  const q = f.query.toLowerCase().trim();
  return list.filter((p) => {
    if (collection && !collection.match(p)) return false;
    if (f.activity !== "all" && !p.activities.includes(f.activity as ActivityId)) return false;
    if (f.fabric !== "all" && p.fabric !== f.fabric) return false;
    if (f.size !== "all" && !p.sizes.includes(f.size)) return false;
    // Multi-colour pieces ("Sage / Rose") match each of their colours
    if (f.color !== "all" && !p.colorName?.split(" / ").some((c) => c.toLowerCase() === f.color.toLowerCase())) {
      return false;
    }
    if (q) {
      const haystack = [
        p.name,
        p.shortDescription,
        p.category,
        p.colorName ?? "",
        FABRICS[p.fabric].name,
        ...p.features,
        ...p.activities.map((a) => ACTIVITIES.find((x) => x.id === a)?.label ?? ""),
      ]
        .join(" ")
        .toLowerCase();
      if (!q.split(/\s+/).every((word) => haystack.includes(word))) return false;
    }
    return true;
  });
}

export function shopHref(params: Partial<Record<"category" | "activity" | "fabric" | "size" | "q", string>>) {
  const search = new URLSearchParams(Object.entries(params).filter(([, v]) => v) as [string, string][]);
  const qs = search.toString();
  return qs ? `/shop?${qs}` : "/shop";
}
