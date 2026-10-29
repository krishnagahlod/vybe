import { products } from "@/data/products";
import { ActivityId, FabricId, PrintFamily, Product } from "@/types/product";

/**
 * Shared navigation and filtering vocabulary for the header, menu, shop and footer,
 * so every entry point lands on the same filtered view.
 */

export const SIZES = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];

export const INSTAGRAM_HANDLE = "vybe.athleisure";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

type Collection = {
  id: string;
  label: string;
  match: (p: Product) => boolean;
};

const ALL_COLLECTIONS: Collection[] = [
  { id: "new", label: "New", match: (p) => Boolean(p.isNew) },
  { id: "favourites", label: "Bestsellers", match: (p) => p.featured },
  { id: "tops", label: "Tops", match: (p) => p.category === "tops" },
  { id: "flared", label: "Flared Bottoms", match: (p) => p.category === "flared" },
  { id: "shorts", label: "Shorts & Skorts", match: (p) => p.category === "shorts" || p.slug === "baseline-skort" || p.slug === "colour-pop-liner-skort" },
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
    id: "dance",
    label: "Dance",
    blurb: "For Bollywood class, Zumba and the wedding sangeet rehearsal.",
    image: "/images/products/ease-crop-top-2.jpg",
  },
  {
    id: "court",
    label: "Court",
    blurb: "Sunday badminton, pickleball, tennis. Skorts with liners built in.",
    image: "/images/products/baseline-skort-2.jpg",
  },
  {
    id: "strength",
    label: "Gym",
    blurb: "Squats, sets and selfies with the girls. Held, never squeezed.",
    image: "/images/products/studio-support-bra-2.jpg",
  },
  {
    id: "yoga-pilates",
    label: "Yoga & Pilates",
    blurb: "The 6 a.m. class. Nothing rides up, nothing shows through.",
    image: "/images/products/flow-matching-set-1.jpg",
  },
  {
    id: "walk-run",
    label: "Walk & Run",
    blurb: "Marine Drive laps and park rounds. Cool when it gets hot.",
    image: "/images/products/cloudline-training-tee-2.jpg",
  },
  {
    id: "everyday",
    label: "Coffee After Class",
    blurb: "Straight from class to brunch. Nobody needs to know.",
    image: "/images/lifestyle/lifestyle-studio-to-street.jpg",
    imagePosition: "48% center",
  },
];

export const FABRICS: Record<FabricId, { name: string; tagline: string; properties: string[] }> = {
  cloudflex: {
    name: "CloudFlex",
    tagline: "Stretches through a 90-minute dance class and snaps back",
    properties: ["Moves every way you do", "Thin, never sweaty-thick", "Dry before your chai is"],
  },
  airdry: {
    name: "AirDry",
    tagline: "Made for a 35° Mumbai afternoon",
    properties: ["Breathes in humid heat", "Sweat dries fast", "Feather-light on skin"],
  },
  flowweave: {
    name: "FlowWeave",
    tagline: "Light enough for a sticky Delhi commute",
    properties: ["Falls and swings as you move", "Airy, not clingy", "Dries on the walk home"],
  },
};

export const FABRIC_IDS = Object.keys(FABRICS) as FabricId[];

export const LENGTHS = [
  { id: "Petite", height: "Up to 5′4″", inseam: "25″ inseam" },
  { id: "Regular", height: "5′4″ to 5′7″", inseam: "27″ inseam" },
  { id: "Tall", height: "5′7″ and above", inseam: "29″ inseam" },
];

/** Cart lines store size and length together, e.g. "M, Regular". */
export const PRINTS: { id: PrintFamily; label: string; line: string; swatch: string }[] = [
  { id: "bold", label: "Bold Prints", line: "Tiger, swirl, graphic. For days you want to be seen.", swatch: "/images/prints/bold.png" },
  { id: "soft", label: "Soft Prints", line: "Polka, petal, watercolour. Pretty, not precious.", swatch: "/images/prints/soft.png" },
  { id: "pop", label: "Colour Pop", line: "Cherry, tangerine, cobalt. Loud solids.", swatch: "/images/prints/pop.png" },
  { id: "pastel", label: "Pastels", line: "Sage, rose, peach, mauve. The quiet favourites.", swatch: "/images/prints/pastel.png" },
];

export function sizeWithLength(size: string, length?: string) {
  return length ? `${size}, ${length}` : size;
}

export type ShopFilterState = {
  collection: string;
  activity: string;
  fabric: string;
  size: string;
  color: string;
  print: string;
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
    if (f.print !== "all" && p.print !== f.print) return false;
    // Multi-colour pieces ("Sage / Rose") and print variants match each of their colours
    const colours = [...(p.colorName?.split(" / ") ?? []), ...(p.variants?.map((v) => v.name) ?? [])];
    if (f.color !== "all" && !colours.some((c) => c.toLowerCase() === f.color.toLowerCase())) {
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

export function shopHref(params: Partial<Record<"category" | "activity" | "fabric" | "size" | "color" | "print" | "q", string>>) {
  const search = new URLSearchParams(Object.entries(params).filter(([, v]) => v) as [string, string][]);
  const qs = search.toString();
  return qs ? `/shop?${qs}` : "/shop";
}
