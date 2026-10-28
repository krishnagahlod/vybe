import Image from "next/image";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/catalog";
import { InstagramIcon } from "@/components/ui/icons";

const TILES = [
  { src: "/images/lifestyle/lifestyle-court-wide.jpg", position: "40% center", span: "col-span-2 row-span-2" },
  { src: "/images/products/movement-flare-jumpsuit-2.jpg", position: "center", span: "" },
  { src: "/images/products/studio-matching-set-1.jpg", position: "center", span: "" },
  { src: "/images/products/baseline-skort-2.jpg", position: "center", span: "" },
  { src: "/images/products/ease-crop-top-2.jpg", position: "center", span: "" },
];

export function InstagramMosaic() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl sm:text-5xl font-normal tracking-tight text-[var(--color-text)]">
              Follow along @{INSTAGRAM_HANDLE}
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            className="self-start sm:self-end inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] border-b border-current pb-1 hover:text-[var(--vybe-mauve-ink)]"
          >
            <InstagramIcon className="w-4 h-4" /> Follow us
          </a>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-4 grid-rows-[auto] gap-2 sm:gap-4">
          {TILES.map((tile) => (
            <li key={tile.src} className={tile.span}>
              <a href={INSTAGRAM_URL} aria-label={`See more on Instagram @${INSTAGRAM_HANDLE}`} className="group relative block w-full h-full min-h-40 aspect-square overflow-hidden rounded-md bg-[var(--vybe-sage)]">
                <Image
                  src={tile.src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  style={{ objectPosition: tile.position }}
                />
                <span className="absolute inset-0 flex items-center justify-center bg-[var(--color-text)]/0 group-hover:bg-[var(--color-text)]/35 transition-colors duration-500">
                  <InstagramIcon className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
