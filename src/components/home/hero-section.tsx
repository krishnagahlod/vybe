import Image from "next/image";
import Link from "next/link";

const MARQUEE_ITEMS = [
  "Made for your kind of movement",
  "Designed for Indian bodies",
  "Three leg lengths",
  "Soft, considered colour",
  "Complimentary delivery over ₹1,500",
];

function HeroCopy({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-6 sm:space-y-8 ${className}`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--vybe-mauve-ink)]">
        Volume 01 &middot; The Studio Collection
      </p>
      <h1 className="font-serif text-5xl sm:text-6xl xl:text-[5.5rem] font-normal tracking-tight text-[var(--color-text)] leading-[1.02]">
        Made for your <span className="italic text-[var(--vybe-mauve-ink)]">kind</span> of movement.
      </h1>
      <p className="text-base sm:text-lg text-[var(--color-text)]/75 leading-relaxed max-w-md">
        Contemporary women&apos;s activewear in soft, considered colour, cut for Indian bodies and the way you move
        through the day.
      </p>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
        <Link
          href="/shop"
          className="group inline-flex items-center justify-center gap-2 px-9 py-4 rounded-sm text-xs font-semibold tracking-[0.18em] uppercase bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors"
        >
          <span>Shop the collection</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
            &rarr;
          </span>
        </Link>
        <Link
          href="/shop?category=new"
          className="inline-flex items-center justify-center px-9 py-4 rounded-sm text-xs font-semibold tracking-[0.18em] uppercase border border-[var(--color-text)]/30 text-[var(--color-text)] hover:border-[var(--color-text)] hover:bg-[var(--color-bg)]/60 transition-colors"
        >
          New arrivals
        </Link>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative bg-[var(--color-bg)]">
      {/* Full-bleed campaign image; on large screens the copy sits over the quiet left side of the frame */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:h-[min(86vh,860px)] overflow-hidden">
        <Image
          src="/images/lifestyle/hero-courtyard-wide.jpg"
          alt="Woman in a sage VYBE sports bra and high-rise leggings in a sunlit limestone courtyard with arches and an olive tree"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[66%_center] lg:object-center animate-hero-zoom"
        />
        <div
          className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[var(--color-bg)]/90 via-[var(--color-bg)]/45 to-transparent"
          aria-hidden="true"
        />

        <div className="hidden lg:flex absolute inset-0 items-center">
          <div className="max-w-7xl w-full mx-auto px-8">
            <HeroCopy className="max-w-xl animate-fade-up" />
          </div>
        </div>

        <Link
          href="/product/flow-high-rise-leggings"
          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-10 lg:right-10 flex items-center gap-3 p-2.5 pr-5 rounded-md bg-[var(--color-bg)]/90 backdrop-blur-md shadow-lg hover:bg-[var(--color-bg)] transition-colors"
        >
          <span className="relative w-11 h-11 rounded-sm overflow-hidden bg-[var(--vybe-sage)] shrink-0">
            <Image src="/images/products/flow-high-rise-leggings-sage-1.jpg" alt="" fill sizes="44px" className="object-cover" />
          </span>
          <span>
            <span className="block font-serif text-sm text-[var(--color-text)] leading-tight">Flow High-Rise Leggings</span>
            <span className="text-xs text-[var(--color-muted)]">Worn here in Sage &middot; Shop &rarr;</span>
          </span>
        </Link>
      </div>

      {/* Phones and tablets: copy below the image */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 pt-10">
        <HeroCopy className="animate-fade-up" />
      </div>

      {/* Brand ticker */}
      <div className="mt-12 lg:mt-0 py-4 border-y border-[var(--color-border)] overflow-hidden" aria-hidden="true">
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
