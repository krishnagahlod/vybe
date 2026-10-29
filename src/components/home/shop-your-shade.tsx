import Image from "next/image";
import Link from "next/link";
import { shopHref } from "@/lib/catalog";

const SHADES = [
  { name: "Sage", bg: "#c8d5c8", ink: "#2f3d31", line: "Our signature green. Calm, cool and easy with everything.", image: "/images/products/flow-matching-set-1.jpg" },
  { name: "Aubergine", bg: "#452b3a", ink: "#f6f1ea", line: "Deep and grounding. The dark that isn't black.", image: "/images/products/flow-flare-leggings-1.jpg" },
  { name: "Muted Mauve", bg: "#9d8189", ink: "#ffffff", line: "Dusty and soft, for slow mornings and long days.", image: "/images/products/movement-flare-jumpsuit-1.jpg" },
  { name: "Rose", bg: "#f4acb7", ink: "#452b3a", line: "A warm pink that feels like a good mood.", image: "/images/products/soft-form-sports-bra-rose-1.jpg" },
  { name: "Pale Peach", bg: "#ffe5d9", ink: "#452b3a", line: "Barely-there colour for the hottest days.", image: "/images/products/everyday-move-shorts-1.jpg" },
  { name: "Chalk", bg: "#ece4d8", ink: "#452b3a", line: "Clean, warm white for court and street.", image: "/images/products/rally-pleated-skirt-1.jpg" },
];

/** Colour-led browsing: each tile is a shade from the VYBE palette. */
export function ShopYourShade() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline font-semibold text-2xl sm:text-4xl tracking-[-0.01em] text-[var(--color-text)] mb-6 sm:mb-8">
          Shop your shade
        </h2>
        <ul className="flex sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-3 overflow-x-auto snap-x -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SHADES.map((shade) => (
            <li key={shade.name} className="snap-start shrink-0 w-[58%] sm:w-auto">
              <Link href={shopHref({ color: shade.name })} className="group block h-full rounded-md overflow-hidden">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={shade.image}
                    alt={`${shade.name} VYBE activewear`}
                    fill
                    sizes="(max-width: 640px) 58vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4 min-h-[8.5rem] flex flex-col" style={{ background: shade.bg, color: shade.ink }}>
                  <p className="font-headline font-bold uppercase text-base tracking-[0.02em]">{shade.name}</p>
                  <p className="mt-1 text-xs leading-snug opacity-85 flex-1">{shade.line}</p>
                  <span className="mt-3 text-sm font-semibold underline underline-offset-4">Shop {shade.name.toLowerCase()}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
