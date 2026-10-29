"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { filterProducts, shopHref } from "@/lib/catalog";
import { SearchIcon } from "@/components/ui/icons";

type SearchOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

const POPULAR_SEARCHES = ["Leggings", "Pockets", "Tennis", "Matching set", "Sage", "Rapid-dry", "Petite"];

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 50);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const trimmed = query.trim();
  const results = trimmed
    ? filterProducts(products, { collection: "all", activity: "all", fabric: "all", size: "all", color: "all", query: trimmed })
    : products.filter((p) => p.featured);

  const close = () => {
    setQuery("");
    onClose();
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trimmed) return;
    router.push(shopHref({ q: trimmed }));
    close();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Search the collection">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-[var(--color-text)]/35 backdrop-blur-[2px]"
            aria-hidden="true"
          />

          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-0 max-h-[92vh] overflow-y-auto bg-[var(--color-bg)] shadow-2xl"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-10 sm:pt-8 sm:pb-14">
              <form onSubmit={submit} role="search" className="flex items-center gap-3 sm:gap-5 border-b border-[var(--color-text)]/25 focus-within:border-[var(--color-text)] transition-colors">
                <SearchIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--color-text)] shrink-0" />
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for leggings, sets, tennis…"
                  aria-label="Search for products"
                  className="flex-1 min-w-0 py-4 sm:py-5 bg-transparent font-headline text-2xl sm:text-4xl text-[var(--color-text)] placeholder:text-[var(--color-muted)]/70 focus:outline-none [&::-webkit-search-cancel-button]:hidden font-semibold"
                />
                <button
                  type="button"
                  onClick={close}
                  className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)] hover:text-[var(--color-text)] cursor-pointer"
                >
                  Close
                </button>
              </form>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="mr-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">Popular</span>
                {POPULAR_SEARCHES.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className="px-3.5 py-1.5 rounded-full border border-[var(--color-border)] text-xs text-[var(--color-text)] hover:border-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>

              <div className="mt-10 flex items-end justify-between gap-4">
                <h2 className="font-headline text-2xl sm:text-3xl text-[var(--color-text)] font-semibold">
                  {trimmed ? (
                    <>
                      {results.length} {results.length === 1 ? "result" : "results"} for “{trimmed}”
                    </>
                  ) : (
                    "Popular choices"
                  )}
                </h2>
                {trimmed && results.length > 4 && (
                  <Link
                    href={shopHref({ q: trimmed })}
                    onClick={close}
                    className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] border-b border-current pb-1 hover:text-[var(--vybe-mauve-ink)]"
                  >
                    See all
                  </Link>
                )}
              </div>

              {results.length > 0 ? (
                <ul className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6">
                  {results.slice(0, 4).map((p) => (
                    <li key={p.id}>
                      <Link href={`/product/${p.slug}`} onClick={close} className="group block">
                        <div className="relative aspect-[3/4] rounded-md overflow-hidden bg-[var(--vybe-peach)]/40">
                          <Image
                            src={p.images[0]?.src ?? "/images/products/concept-silhouette.svg"}
                            alt={p.images[0]?.alt ?? p.name}
                            fill
                            sizes="(max-width: 640px) 50vw, 25vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <p className="mt-3 font-serif text-lg text-[var(--color-text)] group-hover:text-[var(--vybe-mauve-ink)] transition-colors">
                          {p.name}
                        </p>
                        <p className="text-sm text-[var(--color-muted)]">{formatPrice(p.price)}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-6 text-sm text-[var(--color-muted)]">
                  Nothing matches yet. Try &ldquo;leggings&rdquo;, a colour like &ldquo;sage&rdquo;, or browse{" "}
                  <Link href="/shop" onClick={close} className="underline underline-offset-4 text-[var(--color-text)]">
                    the whole collection
                  </Link>
                  .
                </p>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
