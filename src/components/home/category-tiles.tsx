import Image from "next/image";
import Link from "next/link";
import { COLLECTIONS, HEADER_COLLECTION_IDS, shopHref } from "@/lib/catalog";

const TILE_IMAGES: Record<string, string> = {
  new: "/images/products/match-point-tennis-dress-1.jpg",
  favourites: "/images/products/flow-high-rise-leggings-sage-1.jpg",
  tops: "/images/products/ease-crop-top-1.jpg",
  flared: "/images/products/flow-flare-leggings-1.jpg",
  shorts: "/images/products/everyday-move-shorts-1.jpg",
  leggings: "/images/products/studio-sculpt-leggings-mauve-1.jpg",
  layers: "/images/products/light-layer-zip-jacket-1.jpg",
  "sports-bras": "/images/products/soft-form-sports-bra-rose-1.jpg",
  sets: "/images/products/flow-matching-set-1.jpg",
  court: "/images/products/baseline-skort-1.jpg",
};

// Header order first, then the remaining collections
const ORDER = [...HEADER_COLLECTION_IDS, ...COLLECTIONS.map((c) => c.id).filter((id) => !HEADER_COLLECTION_IDS.includes(id))];
const TILES = ORDER.map((id) => COLLECTIONS.find((c) => c.id === id)).filter((c) => c !== undefined);

/** Photo shortcuts to every collection, directly under the header (as on CAVA's homepage). */
export function CategoryTiles() {
  return (
    <nav aria-label="Shop by collection" className="py-5 sm:py-6">
      <ul className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-3 sm:gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {TILES.map((c) => (
          <li key={c.id} className="shrink-0 w-[92px] sm:w-[112px]">
            <Link href={shopHref({ category: c.id })} className="group block text-center">
              <div className="relative aspect-[4/5] rounded-md overflow-hidden bg-[var(--vybe-sage)]">
                <Image
                  src={TILE_IMAGES[c.id] ?? "/images/products/flow-matching-set-1.jpg"}
                  alt=""
                  fill
                  sizes="112px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="mt-2 block text-[11px] font-semibold uppercase tracking-[0.08em] leading-tight text-[var(--color-text)]">
                {c.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
