"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const { totalCount, isLoaded, openCartDrawer } = useCart();
  const { wishlistCount, openWishlistModal } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="sticky top-3 z-40 px-3 sm:px-6 w-full pointer-events-none transition-all">
        <header className="pointer-events-auto max-w-6xl mx-auto rounded-full bg-[var(--color-bg)]/85 backdrop-blur-2xl border border-[var(--color-border)] shadow-[0_8px_30px_rgba(20,18,17,0.06)] px-4 sm:px-7 py-2.5 sm:py-3.5 transition-all">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-expanded={mobileMenuOpen}
                aria-label="Open main navigation menu"
                className="p-2 -ml-1 rounded-full text-[var(--color-text)] hover:bg-black/5 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>

            {/* Brand Wordmark */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="group flex flex-col items-start focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)]"
              >
                <span className="font-serif text-xl sm:text-2xl font-normal tracking-[0.3em] text-[var(--color-text)] group-hover:text-[var(--vybe-mauve)] transition-colors">
                  VYBE
                </span>
                <span className="hidden sm:inline-block text-[8px] font-mono tracking-[0.25em] uppercase text-[var(--color-muted)] -mt-1">
                  Movement Redefined
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main navigation">
              <Link
                href="/shop"
                className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-text)] hover:text-[var(--vybe-mauve)] transition-colors relative py-1 group"
              >
                <span>Collection</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--vybe-mauve)] transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                href="/#garment-anatomy"
                className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-text)] hover:text-[var(--vybe-mauve)] transition-colors relative py-1 group"
              >
                <span>Anatomy</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--vybe-mauve)] transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                href="/#midnight-edit"
                className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-text)] hover:text-[var(--vybe-mauve)] transition-colors relative py-1 group flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#141211]" />
                <span>Midnight Edit</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--vybe-mauve)] transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                href="/about"
                className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-text)] hover:text-[var(--vybe-mauve)] transition-colors relative py-1 group"
              >
                <span>Manifesto</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--vybe-mauve)] transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                href="/contact"
                className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-text)] hover:text-[var(--vybe-mauve)] transition-colors relative py-1 group"
              >
                <span>Contact</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--vybe-mauve)] transition-all duration-300 group-hover:w-full" />
              </Link>
            </nav>

            {/* Action items: Wishlist & Cart Bag Triggers */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Wishlist Heart Button */}
              <button
                type="button"
                onClick={openWishlistModal}
                aria-label={`Open saved items list containing ${wishlistCount} items`}
                className="relative p-2.5 rounded-full text-[var(--color-text)] hover:bg-black/5 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)] flex items-center justify-center cursor-pointer group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[1.1rem] h-4 px-1 text-[9px] font-bold rounded-full bg-[var(--vybe-rose)] text-white shadow-xs">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Bag Trigger Capsule */}
              <button
                type="button"
                onClick={openCartDrawer}
                aria-label={`Open shopping bag drawer containing ${isLoaded ? totalCount : 0} items`}
                className="relative flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve)] transition-all duration-300 shadow-sm cursor-pointer group focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 group-hover:scale-105 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span className="text-[11px] font-semibold tracking-wider uppercase font-mono">
                  Bag ({isLoaded ? totalCount : 0})
                </span>
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Responsive mobile navigation drawer */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
