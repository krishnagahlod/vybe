import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { products, getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";

export const metadata: Metadata = {
  title: "Shop Athleisure Collection",
  description:
    "Browse our complete 12-piece concept catalogue of women's activewear. Studio leggings, sports bras, breathable tops, matching sets, and transitional layers.",
};

const CATEGORIES = [
  { id: "all", label: "All Movement" },
  { id: "leggings", label: "Leggings & Tights" },
  { id: "sports-bras", label: "Sports Bras" },
  { id: "tops", label: "Tops & Tanks" },
  { id: "shorts", label: "Shorts" },
  { id: "sets", label: "Matching Sets" },
  { id: "layers", label: "Layers & Joggers" },
];

async function ShopCatalog({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category = "all" } = await searchParams;
  const filteredProducts = getProductsByCategory(category);

  return (
    <>
      {/* Category Filters */}
      <div className="mb-12 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-2 sm:gap-2.5 min-w-max">
          {CATEGORIES.map((cat) => {
            const isActive = category === cat.id;
            return (
              <Link
                key={cat.id}
                href={cat.id === "all" ? "/shop" : `/shop?category=${cat.id}`}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)] ${
                  isActive
                    ? "bg-[var(--color-text)] text-white shadow-xs"
                    : "bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-text)] hover:border-[var(--vybe-mauve)] hover:bg-[var(--vybe-peach)]/20"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                {cat.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-[var(--color-border)] rounded-2xl bg-[var(--color-surface)] p-8">
          <h2 className="font-serif text-2xl font-medium text-[var(--color-text)] mb-2">
            No products found in this category
          </h2>
          <p className="text-sm text-[var(--color-muted)] max-w-md mx-auto mb-6">
            We couldn&apos;t find any concept pieces matching this filter.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve)] transition-colors"
          >
            View All 12 Concepts
          </Link>
        </div>
      )}
    </>
  );
}

function ShopSkeleton() {
  return (
    <div className="space-y-12 animate-pulse">
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-8 w-24 rounded-full bg-[var(--vybe-peach)]/40" />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="aspect-[4/5] rounded-2xl bg-[var(--vybe-sage)]/30" />
        ))}
      </div>
    </div>
  );
}

export default function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Title */}
        <div className="mb-10 text-center sm:text-left">
          <nav aria-label="Breadcrumb" className="text-xs text-[var(--color-muted)] mb-3">
            <ol className="flex items-center justify-center sm:justify-start gap-2">
              <li>
                <Link href="/" className="hover:text-[var(--color-text)] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">&bull;</li>
              <li className="text-[var(--color-text)] font-medium" aria-current="page">
                Shop Collection
              </li>
            </ol>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--vybe-mauve)] block mb-1 font-mono">
                The Activewear Edit
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[var(--color-text)]">
                Movement Collection
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-muted)]">
              Showing all <span className="font-semibold text-[var(--color-text)]">{products.length}</span> conceptual styles
            </p>
          </div>
        </div>

        {/* Academic / Concept Notice */}
        <div className="mb-8 p-4 rounded-xl bg-[var(--vybe-peach)]/30 border border-[var(--color-border)] text-xs text-[var(--color-muted)] flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p>
            <strong className="text-[var(--color-text)] uppercase font-semibold mr-1.5">
              Simulated Catalogue:
            </strong>
            All products, sizes, and prices are conceptual drafts for the ENT 625 Digital Marketing project.
          </p>
          <span className="shrink-0 text-[11px] font-mono text-[var(--vybe-mauve)] font-medium">
            Draft Prices in INR
          </span>
        </div>

        {/* Dynamic Catalog inside Suspense boundary */}
        <Suspense fallback={<ShopSkeleton />}>
          <ShopCatalog searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
