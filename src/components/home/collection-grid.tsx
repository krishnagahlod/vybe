import Link from "next/link";

type CollectionCategory = {
  title: string;
  category: string;
  description: string;
  bgColor: string;
  borderColor: string;
  accentColor: string;
  itemCount: string;
};

const collections: CollectionCategory[] = [
  {
    title: "Leggings & Tights",
    category: "leggings",
    description: "Contoured high-rise silhouettes tailored for studio practice and effortless walking.",
    bgColor: "bg-[var(--vybe-sage)]/30",
    borderColor: "border-[var(--vybe-sage)]",
    accentColor: "bg-[var(--vybe-sage)]",
    itemCount: "2 Concepts",
  },
  {
    title: "Sports Bras",
    category: "sports-bras",
    description: "Balanced studio support with cross-back details and soft scoop necklines.",
    bgColor: "bg-[var(--vybe-peach)]/40",
    borderColor: "border-[var(--vybe-peach)]",
    accentColor: "bg-[var(--vybe-peach)]",
    itemCount: "2 Concepts",
  },
  {
    title: "Tops & Tanks",
    category: "tops",
    description: "Breezy cropped layers, breathable racerbacks, and soft matte training tees.",
    bgColor: "bg-[var(--vybe-pink)]/30",
    borderColor: "border-[var(--vybe-pink)]",
    accentColor: "bg-[var(--vybe-pink)]",
    itemCount: "3 Concepts",
  },
  {
    title: "Matching Sets",
    category: "sets",
    description: "Coordinated two-piece activewear pairings in calm, harmonious palettes.",
    bgColor: "bg-[var(--vybe-rose)]/25",
    borderColor: "border-[var(--vybe-rose)]/60",
    accentColor: "bg-[var(--vybe-rose)]",
    itemCount: "2 Concepts",
  },
];

export function CollectionGrid() {
  return (
    <section className="py-20 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--vybe-mauve)] block mb-2 font-mono">
              Category Discovery
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[var(--color-text)]">
              Curated by Movement
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text)] hover:text-[var(--vybe-mauve)] transition-colors underline underline-offset-8 inline-flex items-center gap-1.5"
          >
            <span>View All 12 Concepts</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col) => (
            <Link
              key={col.category}
              href={`/shop?category=${col.category}`}
              className={`group flex flex-col justify-between p-7 rounded-2xl border ${col.borderColor} ${col.bgColor} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)]`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/80 border border-[var(--color-border)] text-[var(--color-text)]">
                    {col.itemCount}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full ${col.accentColor} flex items-center justify-center transition-transform group-hover:translate-x-1`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5 text-[var(--color-text)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[var(--color-text)] group-hover:text-[var(--vybe-mauve)] transition-colors mb-2">
                  {col.title}
                </h3>
                <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                  {col.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--color-border)]/60 text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] group-hover:text-[var(--vybe-mauve)] flex items-center gap-1">
                <span>Explore Pieces</span>
                <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
