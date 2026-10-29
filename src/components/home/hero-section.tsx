import Image from "next/image";
import Link from "next/link";

const HERO_IMAGES = [
  { src: "/images/products/new/built-in-bra-tank-1.jpg", alt: "A woman in the cream Built-In Bra Tank and maroon side-stripe track pants, holding a ball" },
  { src: "/images/products/new/zebra-seamless-set-1.jpg", alt: "A woman in the cobalt Zebra Seamless Set" },
  { src: "/images/products/new/retro-stripe-set-1.jpg", alt: "A woman in the Retro Stripe Set spinning a basketball" },
];

export function HeroSection() {
  return (
    <section className="relative w-full aspect-[4/5] sm:aspect-[16/9] lg:aspect-auto lg:h-[min(82vh,780px)] overflow-hidden bg-[var(--vybe-petal)]">
      {/* Three looks side by side on desktop; the first one alone on phones */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-3">
        {HERO_IMAGES.map((img, i) => (
          <div key={img.src} className={`relative overflow-hidden ${i > 0 ? "hidden lg:block" : ""}`}>
            {/* Offset delays so the three panels never drift in step */}
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={i === 0}
              sizes="(max-width: 1024px) 100vw, 34vw"
              className="object-cover object-top animate-ken-burns"
              style={{ animationDelay: `${i * -6}s` }}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--vybe-ink)]/90 via-[var(--vybe-ink)]/50 to-[var(--vybe-ink)]/10 lg:via-[var(--vybe-ink)]/25 lg:to-transparent" />
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-7xl w-full mx-auto px-5 sm:px-8 pb-10 lg:pb-16">
          <div className="max-w-2xl lg:max-w-4xl text-white">
            <h1 className="animate-fade-up font-headline font-extrabold text-[2rem] sm:text-6xl leading-[0.98] tracking-[-0.02em]">
              The best hour of your day deserves the best thing in your wardrobe.
            </h1>
            <p className="animate-fade-up mt-5 text-base sm:text-lg text-white/90 max-w-lg" style={{ animationDelay: "150ms" }}>
              Built-in support. No lines. Cut for Indian bodies, made for Indian heat.
            </p>
            <div className="animate-fade-up mt-7 flex flex-wrap gap-3" style={{ animationDelay: "300ms" }}>
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
                Shop the new drop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
