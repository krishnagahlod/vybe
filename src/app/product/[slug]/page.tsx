import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { getSwatch } from "@/lib/colors";
import { ProductActions } from "@/components/product/product-actions";
import { ProductCard } from "@/components/product/product-card";
import { ProductViewTracker } from "@/components/product/product-view-tracker";
import { ProductJsonLd } from "@/components/seo/json-ld";

const CATEGORY_LABELS: Record<string, string> = {
  leggings: "Leggings",
  "sports-bras": "Sports Bras",
  tops: "Tops",
  shorts: "Shorts",
  sets: "Matching Sets",
  layers: "Layers",
};

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
      title: `${product.name} | VYBE Movement`,
      description: product.shortDescription,
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const imageSrc =
    product.images && product.images.length > 0
      ? product.images[0].src
      : "/images/products/concept-silhouette.svg";

  const imageAlt =
    product.images && product.images.length > 0
      ? product.images[0].alt
      : `${product.name} concept product preview`;

  // Intelligent styling pairing for "Complete the Look"
  const complementaryCategories: Record<string, string[]> = {
    leggings: ["sports-bras", "layers", "tops"],
    shorts: ["sports-bras", "tops", "layers"],
    "sports-bras": ["leggings", "shorts", "layers"],
    tops: ["leggings", "shorts", "layers"],
    layers: ["leggings", "sports-bras", "shorts"],
    sets: ["layers", "sports-bras", "tops"],
  };

  const targetCategories = complementaryCategories[product.category] || ["leggings", "sports-bras"];
  const relatedProducts = Array.from(
    new Set([
      ...products.filter((p) => p.id !== product.id && targetCategories.includes(p.category)),
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
          {/* Left Column: Product image (photos are 3:4, so the frame matches and nothing is cropped) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[3/4] w-full rounded-md overflow-hidden bg-[var(--vybe-peach)]/40">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Information, pricing, and actions */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <div className="space-y-4">
              <Link
                href={`/shop?category=${product.category}`}
                className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)] hover:text-[var(--color-text)] transition-colors"
              >
                {CATEGORY_LABELS[product.category]}
              </Link>
              <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[var(--color-text)] leading-[1.05]">
                {product.name}
              </h1>
              <p className="text-xl text-[var(--color-text)]">{formatPrice(product.price)}</p>
            </div>

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

            {/* Interactive Size Selector & Add to Bag Actions */}
            <ProductActions product={product} />

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
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--color-text)]">
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
