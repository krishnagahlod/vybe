import Image from "next/image";
import Link from "next/link";

/** One full-width brand banner (like CAVA's "The plot behind the brand"). */
export function BrandStory() {
  return (
    <section id="brand-story" className="relative w-full aspect-[4/5] sm:aspect-[16/9] lg:aspect-auto lg:h-[min(72vh,640px)] overflow-hidden">
      <Image
        src="/images/lifestyle/lifestyle-studio-to-street.jpg"
        alt="Woman stepping out of a limestone studio onto a leafy street in a sage VYBE set and mauve zip jacket, coffee in hand"
        fill
        sizes="100vw"
        className="object-cover object-[40%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-l from-[#2a1a23]/80 via-[#2a1a23]/35 to-transparent" />
      <div className="absolute inset-0 flex items-end sm:items-center">
        <div className="max-w-7xl w-full mx-auto px-5 sm:px-8 pb-10 sm:pb-0 flex sm:justify-end">
          <div className="max-w-md text-white">
            <h2 className="font-headline font-bold uppercase text-3xl sm:text-5xl leading-[1] tracking-[-0.01em]">
              The story behind VYBE
            </h2>
            <p className="mt-5 text-base sm:text-lg text-white/90 leading-relaxed">
              We make activewear for movement that feels good, not punishing: cut for Indian bodies, in fabrics that stay
              light through a humid day, in colours that work together from the studio to the street.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold border border-white/80 text-white hover:bg-white hover:text-[var(--color-text)] transition-colors"
            >
              Our story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
