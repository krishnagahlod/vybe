import Image from "next/image";
import Link from "next/link";

type CollectionCategory = {
  title: string;
  category: string;
  subtitle: string;
  description: string;
  index: string;
  imageSrc: string;
  itemCount: string;
};

const collections: CollectionCategory[] = [
  {
    index: "01",
    title: "Studio Leggings",
    category: "leggings",
    subtitle: "High-Rise Sculpt",
    description: "Contoured silhouettes tailored for mindful studio practice, zero slip, and effortless walking.",
    imageSrc: "/images/products/flow-high-rise-leggings-1.jpg",
    itemCount: "2 Concepts",
  },
  {
    index: "02",
    title: "Sculpted Bras",
    category: "sports-bras",
    subtitle: "Balanced Support",
    description: "Cross-back geometric details and soft scoop necklines for training stability.",
    imageSrc: "/images/products/soft-form-sports-bra-1.jpg",
    itemCount: "2 Concepts",
  },
  {
    index: "03",
    title: "Movement Tops",
    category: "tops",
    subtitle: "Air-Weave Breathable",
    description: "Breezy cropped layers, breathable racerbacks, and soft matte training tees.",
    imageSrc: "/images/products/cloud-knit-crop-tank-1.jpg",
    itemCount: "3 Concepts",
  },
  {
    index: "04",
    title: "Harmony Sets",
    category: "sets",
    subtitle: "Coordinated Pairs",
    description: "Two-piece studio sets in earthy palettes taking the guesswork out of movement dressing.",
    imageSrc: "/images/products/harmony-monochrome-set-1.jpg",
    itemCount: "2 Concepts",
  },
];

export function CollectionGrid() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-2">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve)] block">
              Movement Architecture // Volume 01
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[var(--color-text)]">
              Curated by Movement
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-muted)] max-w-xl font-light leading-relaxed">
              Explore four dedicated studio silhouettes engineered for natural flexibility, mindful posture, and all-day ease.
            </p>
          </div>
          <Link
            href="/shop"
            className="group text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] hover:text-[var(--vybe-mauve)] transition-colors inline-flex items-center gap-2 self-start md:self-end pb-1 border-b border-[var(--color-text)] hover:border-[var(--vybe-mauve)]"
          >
            <span>Explore All 12 Concepts</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>

        {/* 4-Card Luxury Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {collections.map((item) => (
            <Link
              key={item.category}
              href={`/shop?category=${item.category}`}
              className="group relative flex flex-col justify-end aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)] bg-[var(--vybe-peach)]/20"
            >
              {/* Background Editorial Image with smooth zoom */}
              <Image
                src={item.imageSrc}
                alt={`${item.title} category preview`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient Vignette Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 transition-opacity duration-300 group-hover:opacity-90" />

              {/* Top Index Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 text-white">
                <span className="font-mono text-xs font-bold tracking-widest px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20">
                  {item.index}
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-white/80">
                  {item.itemCount}
                </span>
              </div>

              {/* Bottom Content Frame */}
              <div className="relative z-10 p-6 text-white space-y-2">
                <span className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--vybe-rose)] font-semibold">
                  {item.subtitle}
                </span>
                <h3 className="font-serif text-2xl font-normal tracking-tight text-white group-hover:text-[var(--vybe-peach)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2 leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Micro CTA */}
                <div className="pt-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-white group-hover:text-[var(--vybe-peach)] transition-colors">
                  <span>Explore Silhouette</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
