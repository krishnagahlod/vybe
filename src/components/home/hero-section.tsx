import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

const HEADLINE_LINES = [
  <>Made for your</>,
  <>
    <span className="italic text-[var(--vybe-mauve-ink)]">kind</span> of
  </>,
  <>movement.</>,
];

/** The page's one orchestrated moment: the photo is uncovered, then the headline rises line by line. */
function HeroCopy({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <h1 className="font-headline text-[3.1rem] sm:text-6xl xl:text-[5.4rem] font-normal tracking-[-0.02em] text-[var(--color-text)] leading-[1.02]">
        {HEADLINE_LINES.map((line, i) => (
          <span key={i} className="hero-line" style={{ "--i": i } as CSSProperties}>
            <span>{line}</span>
          </span>
        ))}
      </h1>
      <div className="hero-after mt-7 sm:mt-9 space-y-8">
        <p className="text-base sm:text-lg text-[var(--color-text)]/80 leading-relaxed max-w-md">
          Contemporary women&apos;s activewear in soft, considered colour, cut for Indian bodies and the way you move
          through the day.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-9 py-4 rounded-sm text-xs font-semibold tracking-[0.18em] uppercase bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors"
          >
            Shop the collection
          </Link>
          <Link
            href="/shop?category=new"
            className="inline-flex items-center justify-center px-9 py-4 rounded-sm text-xs font-semibold tracking-[0.18em] uppercase border border-[var(--color-text)]/30 text-[var(--color-text)] hover:border-[var(--color-text)] hover:bg-[var(--color-bg)]/60 transition-colors"
          >
            See what&apos;s new
          </Link>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    // Slides up under the transparent header on large screens; phones keep the photo clear of it
    <section className="relative bg-[var(--color-bg)] lg:-mt-[var(--header-h,114px)]">
      <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:h-[min(94vh,920px)] overflow-hidden hero-curtain">
        <Image
          src="/images/lifestyle/hero-courtyard-wide.jpg"
          alt="Woman in a sage VYBE sports bra and high-rise leggings in a sunlit limestone courtyard with arches and an olive tree"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[66%_center] lg:object-center animate-hero-zoom"
        />
        <div
          className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[var(--color-bg)]/90 via-[var(--color-bg)]/40 to-transparent"
          aria-hidden="true"
        />

        <div className="hidden lg:flex absolute inset-0 items-center pt-[var(--header-h,114px)]">
          <div className="max-w-7xl w-full mx-auto px-8">
            <HeroCopy className="max-w-xl" />
          </div>
        </div>

        <Link
          href="/product/flow-high-rise-leggings"
          className="hero-after absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-10 lg:right-10 flex items-center gap-3 p-2.5 pr-5 rounded-md bg-[var(--color-bg)]/90 backdrop-blur-md hover:bg-[var(--color-bg)] transition-colors"
        >
          <span className="relative w-11 h-11 rounded-sm overflow-hidden bg-[var(--vybe-sage)] shrink-0">
            <Image src="/images/products/flow-high-rise-leggings-sage-1.jpg" alt="" fill sizes="44px" className="object-cover" />
          </span>
          <span>
            <span className="block font-serif text-base text-[var(--color-text)] leading-tight">Flow High-Rise Leggings</span>
            <span className="text-xs text-[var(--color-muted)]">Worn here in sage</span>
          </span>
        </Link>
      </div>

      {/* Phones and tablets: copy below the image */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-4">
        <HeroCopy />
      </div>
    </section>
  );
}
