import Image from "next/image";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/catalog";
import { InstagramIcon } from "@/components/ui/icons";

const POSTS = [
  "/images/products/movement-flare-jumpsuit-2.jpg",
  "/images/products/baseline-skort-2.jpg",
  "/images/products/studio-matching-set-1.jpg",
  "/images/products/flow-flare-leggings-2.jpg",
  "/images/products/ease-crop-top-2.jpg",
  "/images/products/match-point-tennis-dress-2.jpg",
];

/** A single strip of six squares linking to the brand's Instagram. */
export function InstagramMosaic() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline font-semibold text-2xl sm:text-4xl tracking-[-0.01em] text-[var(--color-text)] text-center">
          Follow us on Instagram
        </h2>
        <a href={INSTAGRAM_URL} className="mt-2 block text-center text-sm text-[var(--color-muted)] hover:text-[var(--color-text)]">
          @{INSTAGRAM_HANDLE}
        </a>
        <ul className="mt-8 grid grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {POSTS.map((src) => (
            <li key={src}>
              <a
                href={INSTAGRAM_URL}
                aria-label={`See VYBE on Instagram @${INSTAGRAM_HANDLE}`}
                className="group relative block aspect-square overflow-hidden rounded-md bg-[var(--vybe-sage)]"
              >
                <Image src={src} alt="" fill sizes="(max-width: 1024px) 33vw, 16vw" className="object-cover object-top" />
                <span className="absolute inset-0 flex items-center justify-center bg-[var(--color-text)]/0 group-hover:bg-[var(--color-text)]/35 transition-colors duration-300">
                  <InstagramIcon className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
