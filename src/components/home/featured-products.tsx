import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-20 sm:py-28 bg-[var(--color-bg)]">
      <div className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)] block">
              Founder&apos;s Favourites
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[var(--color-text)]">
              The pieces we <span className="italic">live in</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-muted)] max-w-xl leading-relaxed">
              Four pieces our founders reach for first. Mix them, match them, and wear them well beyond the studio.
            </p>
          </div>
          <Link
            href="/shop?category=favourites"
            className="group text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] hover:text-[var(--vybe-mauve-ink)] transition-colors inline-flex items-center gap-2 self-start md:self-end pb-1 border-b border-[var(--color-text)] hover:border-[var(--vybe-mauve-ink)]"
          >
            <span>Shop founder&apos;s favourites</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
