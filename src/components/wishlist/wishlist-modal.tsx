"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useWishlist } from "@/lib/wishlist-context";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { SideDrawer } from "@/components/ui/side-drawer";
import { ProductCard } from "@/components/product/product-card";

/** Saved items open in a right-hand panel that can expand to a full-screen grid. */
export function WishlistModal() {
  const { wishlistIds, isWishlistModalOpen, closeWishlistModal, toggleWishlist } = useWishlist();
  const savedProducts = products.filter((p) => wishlistIds.includes(p.id));

  return (
    <SideDrawer
      isOpen={isWishlistModalOpen}
      onClose={closeWishlistModal}
      titleId="wishlist-drawer-title"
      allowMaximise
      title={
        <>
          Wishlist <span className="text-base text-[var(--color-muted)]">({savedProducts.length})</span>
        </>
      }
      footer={({ maximised }) =>
        savedProducts.length > 0 && !maximised ? (
          <div className="px-5 sm:px-6 py-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs">
            <span className="text-[var(--color-muted)]">Saved in this browser</span>
            <Link
              href="/shop"
              onClick={closeWishlistModal}
              className="font-semibold uppercase tracking-[0.15em] text-[var(--color-text)] hover:text-[var(--vybe-mauve-ink)]"
            >
              Keep shopping &rarr;
            </Link>
          </div>
        ) : null
      }
    >
      {({ maximised }) =>
        savedProducts.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center px-6 py-16 space-y-4">
            <p className="font-serif text-3xl text-[var(--color-text)]">
              Nothing saved <span className="italic">yet.</span>
            </p>
            <p className="text-sm text-[var(--color-muted)] max-w-xs">
              Tap the heart on any piece to keep it here while you explore.
            </p>
            <Link
              href="/shop?category=new"
              onClick={closeWishlistModal}
              className="mt-2 inline-flex items-center justify-center h-12 px-8 rounded-sm text-xs font-semibold tracking-[0.15em] uppercase bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve-ink)] transition-colors"
            >
              See what&apos;s new
            </Link>
          </div>
        ) : maximised ? (
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6">
              {savedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        ) : (
          <ul className="px-5 sm:px-6 divide-y divide-[var(--color-border)]">
            {savedProducts.map((p) => (
              <li key={p.id} className="py-5 flex gap-4">
                <Link
                  href={`/product/${p.slug}`}
                  onClick={closeWishlistModal}
                  className="relative w-20 sm:w-24 aspect-[3/4] rounded-sm overflow-hidden bg-[var(--vybe-peach)]/40 shrink-0"
                >
                  <Image src={p.images[0]?.src ?? "/images/products/concept-silhouette.svg"} alt={p.name} fill className="object-cover" sizes="96px" />
                </Link>
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg leading-snug text-[var(--color-text)] truncate">{p.name}</h3>
                    <p className="text-sm text-[var(--color-text)] mt-0.5">{formatPrice(p.price)}</p>
                    {p.colorName && <p className="text-xs text-[var(--color-muted)] mt-0.5">{p.colorName}</p>}
                  </div>
                  <div className="flex items-center gap-4 mt-3 text-xs">
                    <Link
                      href={`/product/${p.slug}`}
                      onClick={closeWishlistModal}
                      className="font-semibold uppercase tracking-[0.15em] text-[var(--color-text)] hover:text-[var(--vybe-mauve-ink)]"
                    >
                      Choose size
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleWishlist(p.id)}
                      className="text-[var(--color-muted)] underline underline-offset-4 hover:text-[var(--vybe-rose-ink)] cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )
      }
    </SideDrawer>
  );
}
