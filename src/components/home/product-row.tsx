"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import { ProductCard } from "@/components/product/product-card";

type ProductRowProps = {
  title: string;
  products: Product[];
  viewAllHref: string;
  /** Drift forward one card at a time until the visitor hovers, focuses or touches the row. */
  autoPlay?: boolean;
};

/** A titled, sideways-scrolling row of product cards with arrows on larger screens. */
export function ProductRow({ title, products, viewAllHref, autoPlay = false }: ProductRowProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const paused = useRef(false);

  useEffect(() => {
    if (!autoPlay || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      const track = trackRef.current;
      if (!track || paused.current) return;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      const step = (track.firstElementChild as HTMLElement | null)?.offsetWidth ?? track.clientWidth / 4;
      if (atEnd) track.scrollTo({ left: 0, behavior: "smooth" });
      else track.scrollBy({ left: step, behavior: "smooth" });
    }, 3500);
    return () => window.clearInterval(id);
  }, [autoPlay]);
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
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
          onFocus={() => (paused.current = true)}
          onBlur={() => (paused.current = false)}
          onTouchStart={() => (paused.current = true)}
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
