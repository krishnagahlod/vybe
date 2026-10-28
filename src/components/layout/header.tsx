"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";
import { COLLECTIONS, HEADER_COLLECTION_IDS, shopHref } from "@/lib/catalog";
import { BagIcon, HeartIcon, MenuIcon, SearchIcon } from "@/components/ui/icons";
import { MobileNav } from "./mobile-nav";
import { SearchOverlay } from "./search-overlay";

const HEADER_COLLECTIONS = HEADER_COLLECTION_IDS.map((id) => COLLECTIONS.find((c) => c.id === id)).filter(
  (c): c is (typeof COLLECTIONS)[number] => Boolean(c)
);

const iconButtonClass =
  "relative inline-flex items-center justify-center w-10 h-10 rounded-full text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/60 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]";

function CountBadge({ count }: { count: number }) {
  if (count <= 0) return null;
  return (
    <span className="absolute top-0.5 right-0.5 flex items-center justify-center min-w-4 h-4 px-1 text-[10px] font-semibold rounded-full bg-[var(--color-text)] text-white">
      {count}
    </span>
  );
}

export function Header() {
  const { totalCount, isLoaded, openCartDrawer } = useCart();
  const { wishlistCount, openWishlistModal } = useWishlist();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const bagCount = isLoaded ? totalCount : 0;
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  // On the homepage the header floats over the hero photo until the visitor scrolls
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const overlay = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Publish the header height so the hero can slide underneath it
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const update = () => document.documentElement.style.setProperty("--header-h", `${el.offsetHeight}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-40 w-full border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
          overlay
            ? "bg-transparent border-transparent"
            : "bg-[var(--color-bg)]/95 backdrop-blur-md border-[var(--color-border)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-[4.5rem] grid grid-cols-[1fr_auto_1fr] items-center">
          {/* Left: menu */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-label="Open menu"
              className="inline-flex items-center gap-2.5 h-10 px-1.5 sm:-ml-1.5 text-[var(--color-text)] hover:text-[var(--vybe-mauve-ink)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]"
            >
              <MenuIcon />
              <span className="hidden md:inline text-[11px] font-semibold tracking-[0.2em] uppercase">Menu</span>
            </button>
          </div>

          {/* Centre: wordmark */}
          <Link
            href="/"
            aria-label="VYBE home"
            className="font-serif text-[1.65rem] sm:text-[2rem] font-medium tracking-[0.35em] pl-[0.35em] text-[var(--color-text)] hover:text-[var(--vybe-mauve-ink)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]"
          >
            VYBE
          </Link>

          {/* Right: search, wishlist and bag stay in the corner on every page */}
          <div className="flex items-center justify-end gap-0.5 sm:gap-1.5">
            <button type="button" onClick={() => setSearchOpen(true)} aria-label="Search" className={iconButtonClass}>
              <SearchIcon />
            </button>
            <button
              type="button"
              onClick={openWishlistModal}
              aria-label={`Open wishlist (${wishlistCount})`}
              className={iconButtonClass}
            >
              <HeartIcon />
              <CountBadge count={wishlistCount} />
            </button>
            <button
              type="button"
              onClick={openCartDrawer}
              aria-label={`Open shopping bag (${bagCount} items)`}
              className={iconButtonClass}
            >
              <BagIcon />
              <CountBadge count={bagCount} />
            </button>
          </div>
        </div>

        {/* Collection row: scrolls sideways on phones */}
        <nav
          aria-label="Collections"
          className={`border-t transition-colors duration-500 ${overlay ? "border-[var(--color-text)]/10" : "border-[var(--color-border)]/70"}`}
        >
          <ul className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-6 sm:gap-8 lg:justify-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {HEADER_COLLECTIONS.map((c) => (
              <li key={c.id} className="shrink-0">
                <Link
                  href={shopHref({ category: c.id })}
                  className={`group relative block py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                    c.id === "new" ? "text-[var(--vybe-rose-ink)]" : "text-[var(--color-text)] hover:text-[var(--vybe-mauve-ink)]"
                  }`}
                >
                  {c.label}
                  <span className="absolute left-0 bottom-2 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <MobileNav isOpen={menuOpen} onClose={closeMenu} />
      <SearchOverlay isOpen={searchOpen} onClose={closeSearch} />
    </>
  );
}
