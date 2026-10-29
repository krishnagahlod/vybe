import Image from "next/image";
import Link from "next/link";
import { PRINTS, shopHref } from "@/lib/catalog";

export function ShopByPrint() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline font-bold text-2xl sm:text-4xl tracking-[-0.02em] text-[var(--color-text)] mb-6 sm:mb-8">Shop by print</h2>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {PRINTS.map((print) => (
            <li key={print.id}>
              <Link href={shopHref({ print: print.id })} className="group block">
                <div className="relative aspect-square rounded-3xl overflow-hidden">
                  <Image src={print.swatch} alt={`${print.label} swatch`} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <p className="mt-3 font-headline font-bold text-lg text-[var(--color-text)]">{print.label}</p>
                <p className="text-sm text-[var(--color-muted)]">{print.line}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
