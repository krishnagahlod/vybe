import Image from "next/image";
import Link from "next/link";
import { getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { shopHref } from "@/lib/catalog";
import { ImageTrail } from "@/components/ui/image-trail";

const SUPPORTING = ["movement-flare-jumpsuit", "studio-flare-pants"];

/** Launch story for the Flared Bottoms line, on a dark aubergine ground for contrast with the light page. */
export function FlareEdit() {
  const lead = getProductBySlug("flow-flare-leggings");
  const supporting = SUPPORTING.map((slug) => getProductBySlug(slug)).filter((p) => p !== undefined);
  if (!lead) return null;

  return (
    <ImageTrail
      images={[lead, ...supporting].flatMap((p) => p.images.map((img) => img.src))}
      className="bg-[var(--vybe-aubergine)] text-[var(--vybe-chalk)] py-20 sm:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <Link href={`/product/${lead.slug}`} className="group lg:col-span-6 block">
          <div className="relative aspect-[4/5] rounded-md overflow-hidden">
            <Image
              src={lead.images[0].src}
              alt={lead.images[0].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.02]"
            />
            {lead.images[1] && (
              <Image
                src={lead.images[1].src}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />
            )}
          </div>
          <p className="mt-4 flex items-baseline justify-between text-sm">
            <span className="font-serif text-xl">{lead.name}</span>
            <span className="text-[var(--vybe-chalk)]/70">{formatPrice(lead.price)}</span>
          </p>
        </Link>

        <div className="lg:col-span-6 space-y-10">
          <div className="space-y-5">
            <span className="inline-block px-3 py-1 rounded-full border border-[var(--vybe-rose)]/60 text-xs text-[var(--vybe-pink)]">
              New this month
            </span>
            <h2 className="font-headline text-4xl sm:text-6xl font-normal leading-[1.02] tracking-tight">
              Fitted to the knee. Free below it.
            </h2>
            <p className="text-base text-[var(--vybe-chalk)]/75 leading-relaxed max-w-md">
              Our first flares: a crossover-waist legging, a wide yoga pant and a one-piece jumpsuit. Each comes in three
              leg lengths, so the hem lands just over your sneakers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {supporting.map((p) => (
              <Link key={p.id} href={`/product/${p.slug}`} className="group block">
                <div className="relative aspect-[3/4] rounded-md overflow-hidden">
                  <Image
                    src={p.images[0].src}
                    alt={p.images[0].alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 font-serif text-lg leading-snug">{p.name}</p>
                <p className="text-sm text-[var(--vybe-chalk)]/70">{formatPrice(p.price)}</p>
              </Link>
            ))}
          </div>

          <Link
            href={shopHref({ category: "flared" })}
            className="inline-flex items-center px-9 py-4 rounded-sm text-xs font-semibold tracking-[0.18em] uppercase bg-[var(--vybe-chalk)] text-[var(--vybe-aubergine)] hover:bg-[var(--vybe-pink)] transition-colors"
          >
            Shop the Flare Edit
          </Link>
        </div>
      </div>
    </ImageTrail>
  );
}
