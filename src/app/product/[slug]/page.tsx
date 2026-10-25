import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { ProductActions } from "@/components/product/product-actions";
import { ProductCard } from "@/components/product/product-card";

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

  // Get up to 3 complementary products
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="py-8 sm:py-14">
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
                Shop Collection
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
          {/* Left Column: Visual Presentation Frame */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--vybe-peach)]/30 via-[var(--vybe-sage)]/20 to-[var(--color-bg)] border border-[var(--color-border)] shadow-md">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />

              {/* Status Tags */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-xs text-[var(--color-text)] border border-[var(--color-border)] shadow-xs">
                  {product.category.replace("-", " ")}
                </span>
                {product.colorName && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-black/70 backdrop-blur-xs text-white">
                    Color: {product.colorName}
                  </span>
                )}
              </div>

              {/* Concept Notice Watermark */}
              <div className="absolute bottom-4 right-4 z-10">
                <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-white/90 backdrop-blur-xs text-[var(--vybe-mauve)] border border-[var(--color-border)]">
                  Simulated Prototype
                </span>
              </div>
            </div>

            {/* Campaign Cities Available Tag */}
            <div className="p-3.5 rounded-xl bg-[var(--vybe-sage)]/25 border border-[var(--color-border)] text-xs text-[var(--color-muted)] flex items-center justify-between">
              <span className="font-semibold text-[var(--color-text)]">
                Campaign Test Cities:
              </span>
              <span>Mumbai • Pune • Delhi • Bangalore</span>
            </div>
          </div>

          {/* Right Column: Information, Pricing, & Interactive Actions */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[var(--vybe-mauve)] block mb-2">
                VYBE Conceptual Catalog
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[var(--color-text)] leading-tight mb-3">
                {product.name}
              </h1>
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-semibold text-[var(--color-text)] font-sans">
                  {formatPrice(product.price)}
                </span>
                <span className="text-xs uppercase tracking-wider text-[var(--color-muted)]">
                  Conceptual INR Price
                </span>
              </div>
            </div>

            {/* Descriptions */}
            <div className="space-y-3 text-sm text-[var(--color-muted)] leading-relaxed font-light border-y border-[var(--color-border)] py-6">
              <p className="text-base text-[var(--color-text)] font-normal">
                {product.shortDescription}
              </p>
              <p>{product.description}</p>
            </div>

            {/* Interactive Size Selector & Add to Bag Actions */}
            <ProductActions product={product} />

            {/* Educational Accordions / Specifications */}
            <div className="space-y-4 pt-4 border-t border-[var(--color-border)]">
              <details className="group border border-[var(--color-border)] rounded-xl p-4 bg-[var(--color-surface)]">
                <summary className="font-semibold text-xs uppercase tracking-wider text-[var(--color-text)] cursor-pointer list-none flex items-center justify-between">
                  <span>Concept Fit &amp; Silhouette</span>
                  <span className="transition-transform group-open:rotate-180 text-[var(--color-muted)]">
                    &darr;
                  </span>
                </summary>
                <div className="pt-3 text-xs text-[var(--color-muted)] leading-relaxed space-y-2">
                  <p>
                    Contoured for unrestrictive movement. Designed to sit flush with the body without binding, chafing, or digging.
                  </p>
                  <p>
                    Part of the ENT 625 conceptual launch wardrobe. Fits are calibrated to standard Indian activewear sizing (XS to XL).
                  </p>
                </div>
              </details>

              <details className="group border border-[var(--color-border)] rounded-xl p-4 bg-[var(--color-surface)]">
                <summary className="font-semibold text-xs uppercase tracking-wider text-[var(--color-text)] cursor-pointer list-none flex items-center justify-between">
                  <span>Simulated Size Guide (Inches)</span>
                  <span className="transition-transform group-open:rotate-180 text-[var(--color-muted)]">
                    &darr;
                  </span>
                </summary>
                <div className="pt-3 overflow-x-auto text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[var(--color-border)] text-[var(--color-text)]">
                        <th className="py-1.5 font-semibold">Size</th>
                        <th className="py-1.5 font-semibold">Bust</th>
                        <th className="py-1.5 font-semibold">Waist</th>
                        <th className="py-1.5 font-semibold">Hips</th>
                      </tr>
                    </thead>
                    <tbody className="text-[var(--color-muted)] divide-y divide-[var(--color-border)] font-mono">
                      <tr><td className="py-1.5 font-semibold text-[var(--color-text)]">XS</td><td>30-32&quot;</td><td>24-26&quot;</td><td>34-36&quot;</td></tr>
                      <tr><td className="py-1.5 font-semibold text-[var(--color-text)]">S</td><td>32-34&quot;</td><td>26-28&quot;</td><td>36-38&quot;</td></tr>
                      <tr><td className="py-1.5 font-semibold text-[var(--color-text)]">M</td><td>34-36&quot;</td><td>28-30&quot;</td><td>38-40&quot;</td></tr>
                      <tr><td className="py-1.5 font-semibold text-[var(--color-text)]">L</td><td>36-38&quot;</td><td>30-32&quot;</td><td>40-42&quot;</td></tr>
                      <tr><td className="py-1.5 font-semibold text-[var(--color-text)]">XL</td><td>38-40&quot;</td><td>32-34&quot;</td><td>42-44&quot;</td></tr>
                    </tbody>
                  </table>
                </div>
              </details>

              <details className="group border border-[var(--color-border)] rounded-xl p-4 bg-[var(--color-surface)]">
                <summary className="font-semibold text-xs uppercase tracking-wider text-[var(--color-text)] cursor-pointer list-none flex items-center justify-between">
                  <span>Academic Project Disclosure</span>
                  <span className="transition-transform group-open:rotate-180 text-[var(--color-muted)]">
                    &darr;
                  </span>
                </summary>
                <div className="pt-3 text-xs text-[var(--color-muted)] leading-relaxed">
                  <p>
                    VYBE is a prototype created exclusively for academic research in digital marketing (ENT 625). No real financial transactions, payment gateways, or merchandise orders are processed.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Complementary / Related Products */}
        <section className="mt-24 pt-16 border-t border-[var(--color-border)]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--vybe-mauve)] block mb-1 font-mono">
                Complete Your Look
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--color-text)]">
                Complementary Pieces
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] hover:text-[var(--vybe-mauve)] transition-colors underline underline-offset-4"
            >
              View Full Collection &rarr;
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
