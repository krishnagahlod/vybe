import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full aspect-[4/5] sm:aspect-[16/9] lg:aspect-auto lg:h-[min(82vh,780px)] overflow-hidden bg-[var(--vybe-petal)]">
      <Image
        src="/images/lifestyle/lifestyle-court-wide.jpg"
        alt="Two friends laughing as they walk off a tennis court together, rackets in hand, one in a pleated skirt and crop top, one in a tennis dress"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[var(--vybe-ink)]/80 via-[var(--vybe-ink)]/30 to-transparent" />
      <div className="absolute inset-0 flex items-end lg:items-center">
        <div className="max-w-7xl w-full mx-auto px-5 sm:px-8 pb-10 lg:pb-0">
          <div className="max-w-2xl text-white">
            <h1 className="font-headline font-extrabold text-[2.3rem] sm:text-6xl lg:text-7xl leading-[0.98] tracking-[-0.02em]">
              The best hour of your day deserves the best thing in your wardrobe.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/90 max-w-lg">
              Built-in support. No lines. Cut for Indian bodies. Every piece under ₹3,000.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#style-quiz"
                className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold bg-white text-[var(--vybe-ink)] hover:bg-[var(--vybe-pastel-pink)] transition-colors"
              >
                Find your VYBE
              </Link>
              <Link
                href="/shop?category=new"
                className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold border border-white/80 text-white hover:bg-white hover:text-[var(--vybe-ink)] transition-colors"
              >
                Shop new prints
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
