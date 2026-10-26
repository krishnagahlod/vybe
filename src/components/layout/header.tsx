"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";
import { MobileNav } from "./mobile-nav";

const NAV_LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "Fit & Fabric", href: "/#garment-anatomy" },
  { label: "Our Story", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const iconButtonClass =
  "relative inline-flex items-center justify-center w-10 h-10 rounded-full text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/60 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]";

export function Header() {
  const { totalCount, isLoaded, openCartDrawer } = useCart();
  const { wishlistCount, openWishlistModal } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const bagCount = isLoaded ? totalCount : 0;

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[4.5rem] grid grid-cols-[1fr_auto_1fr] items-center">
          {/* Left: mobile menu button / desktop navigation */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Open main navigation menu"
              className={`${iconButtonClass} -ml-2 md:hidden`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5M3.75 12h16.5m-16.5 4.5h16.5" />
              </svg>
            </button>

            <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[var(--color-text)] hover:text-[var(--vybe-mauve-ink)] transition-colors relative py-1 group"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Centre: wordmark */}
          <Link
            href="/"
            aria-label="VYBE home"
            className="font-serif text-[1.75rem] sm:text-[2rem] font-medium tracking-[0.35em] pl-[0.35em] text-[var(--color-text)] hover:text-[var(--vybe-mauve-ink)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]"
          >
            VYBE
          </Link>

          {/* Right: saved items and bag */}
          <div className="flex items-center justify-end gap-1 sm:gap-2">
            <button
              type="button"
              onClick={openWishlistModal}
              aria-label={`Open saved items (${wishlistCount})`}
              className={iconButtonClass}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 flex items-center justify-center min-w-4 h-4 px-1 text-[10px] font-semibold rounded-full bg-[var(--vybe-rose)] text-[var(--color-text)]">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={openCartDrawer}
              aria-label={`Open shopping bag (${bagCount} items)`}
              className="inline-flex items-center gap-2 h-10 pl-2 pr-1 sm:px-2 text-[var(--color-text)] hover:text-[var(--vybe-mauve-ink)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
                />
              </svg>
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase">
                <span className="hidden sm:inline">Bag </span>({bagCount})
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
