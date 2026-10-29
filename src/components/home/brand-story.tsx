import Image from "next/image";
import Link from "next/link";

export function BrandStory() {
  return (
    <section id="brand-story" className="bg-[var(--vybe-petal)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] lg:rounded-3xl lg:m-10 overflow-hidden">
          <Image
            src="/images/lifestyle/lifestyle-studio-to-street.jpg"
            alt="A woman walking out of class with a coffee and tote bag, wearing a sage sports bra, matching leggings and a mauve zip jacket"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[45%_center] scroll-settle"
          />
        </div>
        <div className="px-5 sm:px-10 py-12 lg:py-0 max-w-xl">
          <h2 className="font-headline font-extrabold text-4xl sm:text-6xl leading-[0.98] tracking-[-0.02em] text-[var(--color-text)]">
            Stop saving yourself for later.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[var(--color-muted)] leading-relaxed">
            Your workout is your hour. The 6 a.m. dance class, Sunday badminton, the gym with the girls. VYBE is what you wear
            for it: built-in support, no lines, cut for Indian bodies, and prints you actually want to be seen in.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors"
          >
            Our story
          </Link>
        </div>
      </div>
    </section>
  );
}
