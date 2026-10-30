import { Metadata } from "next";
import { ViewTransition } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { getSwatch } from "@/lib/colors";
import { ZoomFrame } from "@/components/product/zoom-frame";
import { ProductActions } from "@/components/product/product-actions";
import { ProductCard } from "@/components/product/product-card";
import { ProductViewTracker } from "@/components/product/product-view-tracker";
import { ProductJsonLd } from "@/components/seo/json-ld";
import { FABRICS } from "@/lib/catalog";
import type { Product } from "@/types/product";

const CATEGORY_LABELS: Record<string, string> = {
  leggings: "Leggings",
  flared: "Flared Bottoms",
  "sports-bras": "Sports Bras",
  tops: "Tops",
  shorts: "Shorts",
  sets: "Matching Sets",
  layers: "Layers",
  court: "Court",
  pants: "Pants",
};

const BENEFIT_ICONS = {
  bra: "M7 4l-1 5M17 4l1 5M4 12c0-2 1-3 2-3 2 0 4 3 6 3s4-3 6-3c1 0 2 1 2 3v3H4z",
  lines: "M4 12h16M6 18L18 6",
  liner: "M6 4h12l1 15h-5l-2-7-2 7H5z",
  air: "M3 9h11a3 3 0 1 0-3-3M3 15h15a3 3 0 1 1-3 3",
  stretch: "M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4",
  length: "M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4",
  fit: "M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z",
};

/** Up to four benefit icons, read from what is actually built into the piece. */
function benefitsFor(product: Product) {
  const text = [product.description, ...product.features].join(" ").toLowerCase();
  const list: { label: string; icon: keyof typeof BENEFIT_ICONS }[] = [];
  if (/shelf bra|bra built in|bra is built/.test(text)) list.push({ label: "Built-in bra", icon: "bra" });
  if (/seamless (underwear|liner)/.test(text)) list.push({ label: "No lines", icon: "lines" });
  if (/liner shorts|built-in brief/.test(text)) list.push({ label: "Built-in liner", icon: "liner" });
  list.push(product.fabric === "cloudflex" ? { label: "4-way stretch", icon: "stretch" } : { label: "Breathable", icon: "air" });
  if (product.lengths) list.push({ label: "3 leg lengths", icon: "length" });
  list.push({ label: "Cut for Indian bodies", icon: "fit" });
  return list.slice(0, 4);
}

const SIZE_ROWS = [
  ["XS", "30–32″", "24–26″", "34–36″"],
  ["S", "32–34″", "26–28″", "36–38″"],
  ["M", "34–36″", "28–30″", "38–40″"],
  ["L", "36–38″", "30–32″", "40–42″"],
  ["XL", "38–40″", "32–34″", "42–44″"],
];

const DETAIL_SECTIONS = [
  {
    title: "Fit & silhouette",
    content: (
      <>
        <p>Contoured to move with you and sit close to the body without digging in.</p>
        <p>True to size in standard Indian activewear sizing, XS to XL. Between sizes? Try the Fit Finder above.</p>
      </>
    ),
  },
  {
    title: "Size guide",
    content: (
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-[var(--color-border)] text-[var(--color-text)]">
            {["Size", "Bust", "Waist", "Hips"].map((h) => (
              <th key={h} className="py-2 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--color-border)]">
          {SIZE_ROWS.map(([size, ...measures]) => (
            <tr key={size}>
              <td className="py-2 font-semibold text-[var(--color-text)]">{size}</td>
              {measures.map((m) => (
                <td key={m} className="py-2">
                  {m}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    ),
  },
  {
    title: "Fabric & care",
    content: (
      <>
        <p>78% recycled polyamide, 22% elastane. A dense, soft double-knit chosen for coverage and comfort in warm cities.</p>
        <p>Cold machine wash at 30°C and line dry in shade. Skip fabric softener to keep the stretch.</p>
      </>
    ),
  },
  {
    title: "Delivery & exchanges",
    content: (
      <>
        <p>
          Complimentary delivery on bags over {formatPrice(1500)}. 1–2 days to Mumbai and Pune; 2–3 days to Delhi NCR
          and Bangalore.
        </p>
        <p>Free size exchanges within 14 days.</p>
      </>
    ),
  },
];

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | VYBE`,
      description: product.shortDescription,
      // Share the product photo; placeholder SVGs fall back to the site-wide image.
      ...(product.images[0] && !product.images[0].src.endsWith(".svg")
        ? { images: [{ url: product.images[0].src, alt: product.images[0].alt }] }
        : {}),
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const gallery =
    product.images && product.images.length > 0
      ? product.images
      : [{ src: "/images/products/concept-silhouette.svg", alt: `${product.name} concept product preview` }];

  // Intelligent styling pairing for "Complete the Look"
  const complementaryCategories: Record<string, string[]> = {
    leggings: ["sports-bras", "layers", "tops"],
    shorts: ["sports-bras", "tops", "layers"],
    "sports-bras": ["leggings", "shorts", "layers"],
    tops: ["leggings", "shorts", "layers"],
    layers: ["leggings", "sports-bras", "shorts"],
    sets: ["layers", "sports-bras", "tops"],
    court: ["court", "layers"],
    flared: ["sports-bras", "tops", "layers"],
    pants: ["sports-bras", "tops", "layers"],
  };

  const fabric = FABRICS[product.fabric];

  const targetCategories = complementaryCategories[product.category] || ["leggings", "sports-bras"];
  const relatedProducts = Array.from(
    new Set([
      ...targetCategories.flatMap((category) =>
        products.filter((p) => p.id !== product.id && p.category === category)
      ),
      ...products.filter((p) => p.id !== product.id),
    ])
  ).slice(0, 3);

  return (
    <div className="py-8 sm:py-14">
      <ProductJsonLd product={product} />
      <ProductViewTracker product={product} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 text-xs text-[var(--color-muted)]">
          <ol className="flex items-center flex-wrap gap-2">
            <li>
              <Link href="/" className="hover:text-[var(--color-text)] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">&bull;</li>
            <li>
              <Link href="/shop" className="hover:text-[var(--color-text)] transition-colors">
                Shop
              </Link>
            </li>
            <li aria-hidden="true">&bull;</li>
            <li>
              <Link
                href={`/shop?category=${product.category}`}
                className="hover:text-[var(--color-text)] capitalize transition-colors"
              >
                {product.category.replace("-", " ")}
              </Link>
            </li>
            <li aria-hidden="true">&bull;</li>
            <li className="text-[var(--color-text)] font-semibold truncate max-w-[200px] sm:max-w-none" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Product Detail Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Gallery. Photos are 3:4 so frames never crop them. Phones swipe sideways
              (the next photo peeks in); desktop stacks them while the details column stays in view. */}
          <div className="lg:col-span-7 -mx-4 sm:mx-0">
            <div
              className={`flex lg:flex-col gap-3 lg:gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory px-4 sm:px-0 [scrollbar-width:none] ${
                gallery.length > 1 ? "" : "justify-center"
              }`}
            >
              {gallery.map((image, index) => (
                <div
                  key={image.src}
                  className={`relative aspect-[3/4] shrink-0 snap-center rounded-2xl overflow-hidden bg-[var(--vybe-petal)]/40 ${
                    gallery.length > 1 ? "w-[86%] sm:w-[70%] lg:w-full" : "w-full"
                  }`}
                >
                  <ZoomFrame>
                    {index === 0 ? (
                      <ViewTransition name={`product-${product.slug}`} share="morph" default="none">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          priority
                          sizes="(max-width: 640px) 86vw, (max-width: 1024px) 70vw, 58vw"
                          className="object-cover object-center"
                        />
                      </ViewTransition>
                    ) : (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 86vw, (max-width: 1024px) 70vw, 58vw"
                        className="object-cover object-center"
                      />
                    )}
                  </ZoomFrame>
                </div>
              ))}
            </div>
            {gallery.length > 1 && (
              <p className="mt-3 px-4 sm:px-0 text-xs text-[var(--color-muted)] lg:hidden">
                {gallery.length} photos &middot; swipe to see more
              </p>
            )}
          </div>

          {/* Right Column: Information, pricing, and actions */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 space-y-8">
            <div className="space-y-4">
              <Link
                href={`/shop?category=${product.category}`}
                className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)] hover:text-[var(--color-text)] transition-colors"
              >
                {CATEGORY_LABELS[product.category]}
              </Link>
              {product.isNew && (
                <span className="ml-3 align-middle px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.15em] bg-[var(--color-text)] text-white">
                  New
                </span>
              )}
              <h1 className="font-headline text-4xl sm:text-5xl font-semibold text-[var(--color-text)] leading-[1.05]">
                {product.name}
              </h1>
              {product.storyLine && <p className="text-lg font-semibold text-[var(--vybe-cherry-ink)]">{product.storyLine}</p>}
              <p className="text-xl text-[var(--color-text)]">{formatPrice(product.price)}</p>
            </div>

            <ul className="grid grid-cols-2 sm:grid-cols-none sm:grid-flow-col sm:auto-cols-fr gap-2" aria-label="Built into this piece">
              {benefitsFor(product).map((b) => (
                <li
                  key={b.label}
                  className="flex flex-col items-center gap-2 px-2 py-3.5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] text-center"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-[var(--vybe-cherry-ink)]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={BENEFIT_ICONS[b.icon]} />
                  </svg>
                  <span className="text-[11px] font-semibold leading-tight text-[var(--color-text)]">{b.label}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-4">
              <p className="text-base text-[var(--color-muted)] leading-relaxed">{product.description}</p>
              {product.colorName && (
                <p className="flex items-center gap-3 text-sm text-[var(--color-text)]">
                  <span
                    className="w-5 h-5 rounded-full border border-black/10"
                    style={{ background: getSwatch(product.colorName) }}
                    aria-hidden="true"
                  />
                  <span>
                    <span className="text-[var(--color-muted)]">Colour:</span> {product.colorName}
                  </span>
                </p>
              )}
            </div>

            <ul className="space-y-2.5">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-[var(--color-text)]">
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[var(--vybe-ink-soft)] shrink-0" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Interactive Size Selector & Add to Bag Actions */}
            <ProductActions product={product} />

            {/* Core fabric */}
            <Link
              href={`/shop?fabric=${product.fabric}`}
              className="group block p-5 rounded-2xl bg-[var(--vybe-alabaster)]/45 hover:bg-[var(--vybe-alabaster)]/70 transition-colors"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--vybe-ink-soft)]">Core fabric</p>
              <p className="mt-1 font-headline text-2xl text-[var(--color-text)] font-semibold">
                {fabric.name} <span className="block mt-1 text-sm font-normal text-[var(--color-muted)]">{fabric.tagline}</span>
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {fabric.properties.map((prop) => (
                  <li key={prop} className="px-3 py-1 rounded-full bg-[var(--color-bg)] text-xs text-[var(--color-text)]">
                    {prop}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-[var(--color-muted)]">
                Cut for Indian bodies &middot; <span className="underline underline-offset-4 group-hover:text-[var(--color-text)]">Shop all {fabric.name}</span>
              </p>
            </Link>

            {/* Details accordions */}
            <div className="border-t border-[var(--color-border)]">
              {DETAIL_SECTIONS.map((section) => (
                <details key={section.title} className="group border-b border-[var(--color-border)]">
                  <summary className="py-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] cursor-pointer list-none flex items-center justify-between">
                    <span>{section.title}</span>
                    <span
                      className="text-lg leading-none font-light text-[var(--color-muted)] transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <div className="pb-6 text-sm text-[var(--color-muted)] leading-relaxed space-y-3">
                    {section.content}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Complementary / Related Products */}
        <section className="mt-24 sm:mt-32">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)]">
                Complete the look
              </p>
              <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-[var(--color-text)]">
                Pairs well with
              </h2>
            </div>
            <Link
              href="/shop"
              className="group text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] hover:text-[var(--vybe-mauve-ink)] transition-colors inline-flex items-center gap-2 self-start sm:self-end pb-1 border-b border-current"
            >
              <span>Shop all</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
