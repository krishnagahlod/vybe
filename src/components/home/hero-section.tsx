import Image from "next/image";
import Link from "next/link";

const MARQUEE_ITEMS = [
  "Made for your kind of movement",
  "Studio to street",
  "Soft, considered colour",
  "Sizes XS to XL",
  "Complimentary delivery over ₹1,500",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] pt-8 sm:pt-14">
      {/* Single soft wash of brand peach behind the composition */}
      <div
        className="absolute -top-24 right-0 w-[40rem] h-[40rem] rounded-full bg-[var(--vybe-peach)]/60 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Editorial narrative */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 animate-fade-up">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)]">
              Volume 01 &middot; The Studio Collection
            </p>

            <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-normal tracking-tight text-[var(--color-text)] leading-[1.04]">
              Made for your <span className="italic text-[var(--vybe-mauve-ink)]">kind</span> of movement.
            </h1>

            <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed max-w-md">
              Contemporary women&apos;s activewear in soft, considered colour. Cut for studio flows, gym
              sessions, and the walk home afterwards.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/shop"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold tracking-[0.15em] uppercase bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors"
              >
                <span>Shop the collection</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  &rarr;
                </span>
              </Link>
              <Link
                href="#style-quiz"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-xs font-semibold tracking-[0.15em] uppercase border border-[var(--color-text)]/20 text-[var(--color-text)] hover:border-[var(--color-text)] transition-colors"
              >
                Find your fit
              </Link>
            </div>
          </div>

          {/* Campaign image: landscape source shown in a landscape frame so the full pose is kept */}
          <div className="lg:col-span-7 animate-fade-up [animation-delay:120ms]">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[var(--vybe-sage)]">
              <Image
                src="/images/lifestyle/hero-editorial-movement.jpg"
                alt="Woman holding a standing balance pose in sage VYBE leggings and bra in a sunlit limestone studio"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-[45%_center]"
              />

              <Link
                href="/product/flow-high-rise-leggings"
                className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 flex items-center gap-3 p-2.5 pr-5 rounded-xl bg-white/95 backdrop-blur-md shadow-lg hover:bg-white transition-colors"
              >
                <span className="relative w-11 h-11 rounded-lg overflow-hidden bg-[var(--vybe-sage)] shrink-0">
                  <Image
                    src="/images/products/flow-high-rise-leggings-1.jpg"
                    alt=""
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </span>
                <span>
                  <span className="block font-serif text-sm text-[var(--color-text)] leading-tight">
                    Flow High-Rise Leggings
                  </span>
                  <span className="text-xs text-[var(--color-muted)]">Worn here in Sage &middot; Shop &rarr;</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Brand ticker */}
      <div className="mt-14 sm:mt-20 py-4 border-y border-[var(--color-border)] overflow-hidden" aria-hidden="true">
        <div className="flex whitespace-nowrap text-[11px] uppercase tracking-[0.25em] text-[var(--color-muted)]">
          {[1, 2].map((iter) => (
            <div key={iter} className="flex shrink-0 items-center gap-8 pr-8 animate-marquee">
              {MARQUEE_ITEMS.map((item) => (
                <span key={item} className="flex items-center gap-8">
                  <span>{item}</span>
                  <span className="text-[var(--vybe-rose)]">&#10022;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
