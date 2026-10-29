import { Metadata } from "next";
import { Suspense } from "react";
import { products } from "@/data/products";
import { ShopFilters } from "@/components/shop/shop-filters";

export const metadata: Metadata = {
  title: "Shop Athleisure Collection",
  description:
    "Browse VYBE's concept catalogue of women's activewear: leggings in three lengths, sports bras, tops, matching sets, jackets and the Court line.",
};

type ShopSearchParams = Promise<{ category?: string; activity?: string; fabric?: string; size?: string; color?: string; q?: string }>;

async function ShopCatalog({ searchParams }: { searchParams: ShopSearchParams }) {
  const params = await searchParams;
  // Empty or missing values mean "no filter"
  const category = params.category || "all";
  const activity = params.activity || "all";
  const fabric = params.fabric || "all";
  const size = params.size || "all";
  const color = params.color || "all";
  const q = params.q || "";

  return (
    <ShopFilters
      // Remount when the menu links to a different filter, so the view always matches the URL
      key={[category, activity, fabric, size, color, q].join("|")}
      initialProducts={products}
      initial={{ collection: category, activity, fabric, size, color, query: q }}
    />
  );
}

function ShopSkeleton() {
  return (
    <div className="space-y-12 animate-pulse">
      <div className="space-y-3">
        <div className="h-3 w-40 rounded-full bg-[var(--vybe-petal)]/60" />
        <div className="h-12 w-80 rounded-full bg-[var(--vybe-petal)]/60" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="aspect-[3/4] rounded-2xl bg-[var(--vybe-alabaster)]/30" />
        ))}
      </div>
    </div>
  );
}

export default function ShopPage({ searchParams }: { searchParams: ShopSearchParams }) {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<ShopSkeleton />}>
          <ShopCatalog searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
