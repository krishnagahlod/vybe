import Image from "next/image";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/catalog";
import { InstagramIcon } from "@/components/ui/icons";

const POSTS = [
  { src: "/images/products/movement-flare-jumpsuit-2.jpg", alt: "Back view of a mauve flared jumpsuit with crossover straps" },
  { src: "/images/products/baseline-skort-2.jpg", alt: "Woman in an aubergine skort and white crop top in a ready stance on a tennis court" },
  { src: "/images/products/studio-matching-set-1.jpg", alt: "Woman sitting on a step in a mauve sports bra and leggings set" },
  { src: "/images/products/flow-flare-leggings-2.jpg", alt: "Back view of aubergine flared leggings with a phone in the side pocket" },
  { src: "/images/products/ease-crop-top-2.jpg", alt: "Woman in a pink cropped tee and white leggings, arms raised tying her hair" },
  { src: "/images/products/match-point-tennis-dress-2.jpg", alt: "Back view of a sage tennis dress with an open racerback, walking to the net" },
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
          {POSTS.map(({ src, alt }) => (
            <li key={src}>
              <a
                href={INSTAGRAM_URL}
                aria-label={`${alt}. See VYBE on Instagram @${INSTAGRAM_HANDLE}`}
                className="group relative block aspect-square overflow-hidden rounded-2xl bg-[var(--vybe-alabaster)]"
              >
                <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 33vw, 16vw" className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
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
