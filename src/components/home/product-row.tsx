"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import { ProductCard } from "@/components/product/product-card";

type ProductRowProps = {
  title: string;
  products: Product[];
  viewAllHref: string;
};

/** A titled, sideways-scrolling row of product cards with arrows on larger screens. */
export function ProductRow({ title, products, viewAllHref }: ProductRowProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (track) track.scrollBy({ left: direction * track.clientWidth * 0.75, behavior: "smooth" });
  };
  const arrow =
    "w-10 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-text)] hover:border-[var(--color-text)] transition-colors cursor-pointer";

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-6 sm:mb-8">
          <h2 className="font-headline font-semibold text-2xl sm:text-4xl tracking-[-0.01em] text-[var(--color-text)]">{title}</h2>
          <div className="flex items-center gap-2">
            <Link
              href={viewAllHref}
              className="mr-2 text-sm font-semibold text-[var(--color-text)] underline underline-offset-4 hover:text-[var(--vybe-mauve-ink)]"
            >
              View all
            </Link>
            <button type="button" onClick={() => scroll(-1)} aria-label={`Scroll ${title} back`} className={`${arrow} hidden sm:flex`}>
              &#8249;
            </button>
            <button type="button" onClick={() => scroll(1)} aria-label={`Scroll ${title} forward`} className={`${arrow} hidden sm:flex`}>
              &#8250;
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="flex gap-3 sm:gap-5 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((product) => (
            <li key={product.id} className="snap-start shrink-0 w-[62%] sm:w-[40%] lg:w-[calc(25%-15px)]">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
