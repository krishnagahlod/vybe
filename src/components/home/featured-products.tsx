import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-24 sm:py-32 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve)] block">
              Curated Edit // Spring 2026
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[var(--color-text)]">
              Studio Essentials
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-muted)] max-w-xl font-light leading-relaxed">
              Tactile compression prototypes engineered with 1-tap quick size selection. Designed to mix, match, and transition seamlessly beyond studio doors.
            </p>
          </div>
          <Link
            href="/shop"
            className="group text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] hover:text-[var(--vybe-mauve)] transition-colors inline-flex items-center gap-2 self-start md:self-end pb-1 border-b border-[var(--color-text)] hover:border-[var(--vybe-mauve)]"
          >
            <span>View Full 12-Piece Catalog</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
