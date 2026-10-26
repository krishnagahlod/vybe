import { Metadata } from "next";
import { Suspense } from "react";
import { products } from "@/data/products";
import { ShopFilters } from "@/components/shop/shop-filters";

export const metadata: Metadata = {
  title: "Shop Athleisure Collection",
  description:
    "Browse our complete 12-piece concept catalogue of women's activewear. Studio leggings, sports bras, breathable tops, matching sets, and transitional layers.",
};

async function ShopCatalog({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category = "all" } = await searchParams;

  return <ShopFilters initialProducts={products} initialCategory={category} />;
}

function ShopSkeleton() {
  return (
    <div className="space-y-12 animate-pulse">
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-9 w-24 rounded-sm bg-[var(--vybe-peach)]/40" />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="aspect-[3/4] rounded-md bg-[var(--vybe-sage)]/30" />
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
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page title */}
        <div className="mb-10 sm:mb-14 space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)]">
            Volume 01 &middot; The Studio Collection
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-[var(--color-text)]">
            Shop the collection
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-muted)] max-w-xl">
            {products.length} pieces in sage, peach, pink, rose and mauve, made to mix and match.
          </p>
        </div>

        {/* Dynamic Catalog inside Suspense boundary */}
        <Suspense fallback={<ShopSkeleton />}>
          <ShopCatalog searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
