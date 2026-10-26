"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart-context";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const { totalCount, isLoaded } = useCart();

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const shopLinks = [
    { label: "Shop all", href: "/shop" },
    { label: "Leggings", href: "/shop?category=leggings" },
    { label: "Sports Bras", href: "/shop?category=sports-bras" },
    { label: "Tops", href: "/shop?category=tops" },
    { label: "Shorts", href: "/shop?category=shorts" },
    { label: "Matching Sets", href: "/shop?category=sets" },
    { label: "Layers", href: "/shop?category=layers" },
  ];
  const moreLinks = [
    { label: "Fit & Fabric", href: "/#garment-anatomy" },
    { label: "Our story", href: "/about" },
    { label: "Size & fit guide", href: "/size-guide" },
    { label: "FAQ", href: "/faq" },
    { label: "Track an order", href: "/track-order" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[var(--color-text)]/30 z-50 md:hidden"
            aria-hidden="true"
          />

          {/* Drawer (slides from the left, where the menu button is) */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation menu"
            className="fixed top-0 left-0 bottom-0 w-[88%] max-w-sm bg-[var(--color-bg)] z-50 flex flex-col md:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-[var(--color-border)]">
              <span className="font-serif text-2xl font-medium tracking-[0.35em] text-[var(--color-text)]">VYBE</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="w-10 h-10 -mr-2 inline-flex items-center justify-center rounded-full hover:bg-[var(--vybe-peach)]/60 text-[var(--color-text)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 px-6 py-8 space-y-10" aria-label="Mobile navigation">
              <ul className="space-y-1">
                {shopLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block py-1.5 font-serif text-3xl text-[var(--color-text)] hover:text-[var(--vybe-mauve-ink)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3 pt-8 border-t border-[var(--color-border)]">
                {moreLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/cart" onClick={onClose} className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors">
                    Bag ({isLoaded ? totalCount : 0})
                  </Link>
                </li>
              </ul>
            </nav>

            <p className="px-6 py-6 bg-[var(--vybe-sage)] font-serif text-xl text-[var(--color-text)]">
              Made for your <span className="italic">kind</span> of movement.
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
