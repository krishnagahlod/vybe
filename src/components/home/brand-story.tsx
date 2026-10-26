import Image from "next/image";
import Link from "next/link";

const VALUES = [
  { title: "Gentle colour", text: "Sage, peach and mauve instead of hyper-saturated neon." },
  { title: "Freedom to move", text: "Cuts that move with your body rather than binding it." },
  { title: "Beyond the studio", text: "Pieces you can keep wearing once the class is over." },
];

export function BrandStory() {
  return (
    <section id="brand-story" className="py-20 sm:py-28 bg-[var(--vybe-peach)]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)]">
                Our philosophy
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[var(--color-text)] leading-[1.08]">
                Activewear that honours your pace, not someone else&apos;s metrics.
              </h2>
            </div>
            <div className="space-y-4 text-base sm:text-lg text-[var(--color-muted)] leading-relaxed max-w-2xl">
              <p>
                Too much activewear is built around punishment and urgency. VYBE starts from a different place:
                movement should feel restorative, joyful, and personal.
              </p>
              <p>
                Whether it&apos;s a sunrise yoga class in Pune, an evening run along Marine Drive, or the walk to
                your favourite café in Bangalore, our pieces pair calm colour with soft, unrestrictive cuts.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[var(--color-text)]/10">
              {VALUES.map((value) => (
                <li key={value.title} className="space-y-1.5">
                  <h3 className="font-serif text-lg text-[var(--color-text)]">{value.title}</h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{value.text}</p>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="group text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] hover:text-[var(--vybe-mauve-ink)] transition-colors inline-flex items-center gap-2 pb-1 border-b border-current"
            >
              <span>Read our story</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>

          <figure className="lg:col-span-5">
            <div className="relative rounded-md overflow-hidden aspect-[4/5] bg-[var(--vybe-pink)]">
              <Image
                src="/images/products/harmony-monochrome-set-1.jpg"
                alt="Woman standing relaxed in a matching pink VYBE set in a sunlit studio"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="mt-5 font-serif text-xl italic text-[var(--color-text)] leading-snug">
              &ldquo;Movement isn&apos;t about burning calories or hitting personal bests. It&apos;s about returning to
              yourself.&rdquo;
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
