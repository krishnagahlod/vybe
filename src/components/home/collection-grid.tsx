import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

type CollectionCategory = {
  title: string;
  category: string;
  imageSrc: string;
};

const collections: CollectionCategory[] = [
  { title: "Leggings", category: "leggings", imageSrc: "/images/products/flow-high-rise-leggings-1.jpg" },
  { title: "Sports Bras", category: "sports-bras", imageSrc: "/images/products/soft-form-sports-bra-1.jpg" },
  { title: "Tops", category: "tops", imageSrc: "/images/products/cloud-knit-crop-tank-1.jpg" },
  { title: "Shorts", category: "shorts", imageSrc: "/images/products/air-glide-biker-shorts-1.jpg" },
  { title: "Matching Sets", category: "sets", imageSrc: "/images/products/harmony-monochrome-set-1.jpg" },
  { title: "Layers", category: "layers", imageSrc: "/images/products/studio-zip-jacket-1.jpg" },
];

export function CollectionGrid() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--color-bg)]">
      <div className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)]">
              Shop by category
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[var(--color-text)]">
              Dressed for every rhythm
            </h2>
          </div>
          <Link
            href="/shop"
            className="group text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] hover:text-[var(--vybe-mauve-ink)] transition-colors inline-flex items-center gap-2 self-start md:self-end pb-1 border-b border-current"
          >
            <span>Shop all {products.length} pieces</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8 lg:gap-x-5">
          {collections.map((item) => {
            const count = products.filter((p) => p.category === item.category).length;
            return (
              <Link
                key={item.category}
                href={`/shop?category=${item.category}`}
                className="group block focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)] rounded-md"
              >
                <div className="relative aspect-[3/4] rounded-md overflow-hidden bg-[var(--vybe-peach)]/40">
                  <Image
                    src={item.imageSrc}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-2">
                  <h3 className="font-serif text-lg text-[var(--color-text)] group-hover:text-[var(--vybe-mauve-ink)] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs text-[var(--color-muted)]">{count}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
