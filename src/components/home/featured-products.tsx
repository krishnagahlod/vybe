import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-20 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--vybe-mauve)] block mb-2 font-mono">
            Featured Edit
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[var(--color-text)] mb-4">
            Curated Essentials
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
            A focused look into our introductory prototypes. Designed to be mixed, matched, and lived in throughout the week.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/40 hover:border-[var(--vybe-mauve)] transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)]"
          >
            Browse Full 12-Piece Collection &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
