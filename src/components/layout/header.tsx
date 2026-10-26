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
      <header className="sticky top-0 z-40 bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-expanded={mobileMenuOpen}
                aria-label="Open main navigation menu"
                className="p-2 -ml-2 rounded-md text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/50 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>

            {/* Brand Wordmark & Tagline */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="group flex flex-col items-start focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)]"
              >
                <span className="font-serif text-2xl md:text-3xl font-semibold tracking-[0.25em] text-[var(--color-text)] group-hover:text-[var(--vybe-mauve)] transition-colors">
                  VYBE
                </span>
                <span className="hidden sm:inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)] -mt-1 font-sans">
                  Movement Redefined
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              <Link
                href="/shop"
                className="text-sm font-medium tracking-wide uppercase text-[var(--color-text)] hover:text-[var(--vybe-mauve)] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--vybe-mauve)] hover:after:w-full after:transition-all"
              >
                Shop Collection
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium tracking-wide uppercase text-[var(--color-text)] hover:text-[var(--vybe-mauve)] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--vybe-mauve)] hover:after:w-full after:transition-all"
              >
                Brand Story
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium tracking-wide uppercase text-[var(--color-text)] hover:text-[var(--vybe-mauve)] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--vybe-mauve)] hover:after:w-full after:transition-all"
              >
                Contact
              </Link>
            </nav>

            {/* Action items: Wishlist & Cart Bag Triggers */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Wishlist Heart Button */}
              <button
                type="button"
                onClick={openWishlistModal}
                aria-label={`Open saved items list containing ${wishlistCount} items`}
                className="relative p-2.5 rounded-full text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/60 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)] flex items-center justify-center cursor-pointer group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 group-hover:scale-105 transition-transform"
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
                  <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[1.2rem] h-4.5 px-1 text-[10px] font-bold rounded-full bg-[var(--vybe-rose)] text-white shadow-xs">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Bag Trigger */}
              <button
                type="button"
                onClick={openCartDrawer}
                aria-label={`Open shopping bag drawer containing ${isLoaded ? totalCount : 0} items`}
                className="relative p-2.5 rounded-full text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/60 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve)] flex items-center justify-center group cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-105 transition-transform"
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
                {/* Cart badge */}
                <span
                  className={`absolute -top-1 -right-1 flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 text-[11px] font-bold rounded-full bg-[var(--vybe-mauve)] text-white shadow-xs transition-transform ${
                    isLoaded && totalCount > 0 ? "scale-100" : "scale-90 opacity-80"
                  }`}
                >
                  {isLoaded ? totalCount : 0}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Responsive mobile navigation drawer */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
