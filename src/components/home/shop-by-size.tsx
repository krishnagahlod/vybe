import Link from "next/link";
import { SIZES, shopHref } from "@/lib/catalog";

export function ShopBySize() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--color-text)]">
              Start with your size
            </h2>
          </div>
          <Link
            href="/size-guide"
            className="self-start sm:self-end text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] border-b border-current pb-1 hover:text-[var(--vybe-mauve-ink)]"
          >
            Size &amp; length guide
          </Link>
        </div>

        <ul className="grid grid-cols-3 sm:grid-cols-9 gap-2 sm:gap-3">
          {SIZES.map((size) => (
            <li key={size}>
              <Link
                href={shopHref({ size })}
                className="group relative flex items-center justify-center aspect-[4/3] sm:aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-[var(--vybe-pastel-pink)] to-[var(--vybe-blossom)] text-[var(--color-text)] transition-colors"
              >
                <span className="absolute inset-0 bg-[var(--color-text)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                <span className="relative font-headline text-2xl sm:text-3xl group-hover:text-white transition-colors duration-500 font-semibold">{size}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
