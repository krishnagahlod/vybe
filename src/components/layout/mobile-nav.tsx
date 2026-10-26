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

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop All Activewear", href: "/shop" },
    { label: "Size & Fit Guide", href: "/size-guide" },
    { label: "Help & FAQ", href: "/faq" },
    { label: "Track Movement Order", href: "/track-order" },
    { label: "About VYBE", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Shipping & Returns", href: "/shipping-returns" },
    { label: "Privacy Policy", href: "/privacy" },
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
            className="fixed inset-0 bg-black/40 z-50 backdrop-blur-xs md:hidden"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation menu"
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[var(--color-surface)] border-l border-[var(--color-border)] z-50 flex flex-col p-6 shadow-2xl md:hidden overflow-y-auto"
          >
            {/* Header in Drawer */}
            <div className="flex items-center justify-between pb-6 border-b border-[var(--color-border)]">
              <div>
                <span className="font-serif text-2xl tracking-[0.25em] font-semibold text-[var(--color-text)]">
                  VYBE
                </span>
                <p className="text-xs text-[var(--color-muted)] tracking-wider uppercase mt-0.5">
                  Made for your movement
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 rounded-full hover:bg-[var(--vybe-peach)] text-[var(--color-text)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Cart Link inside Drawer */}
            <div className="py-4 border-b border-[var(--color-border)]">
              <Link
                href="/cart"
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-lg bg-[var(--vybe-peach)] text-[var(--color-text)] font-medium hover:bg-[var(--vybe-rose)]/40 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.75}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <span>Shopping Bag</span>
                </span>
                <span className="inline-flex items-center justify-center min-w-[1.5rem] h-6 px-2 text-xs font-semibold rounded-full bg-[var(--color-text)] text-white">
                  {isLoaded ? totalCount : 0}
                </span>
              </Link>
            </div>

            {/* Nav list */}
            <nav className="flex-1 py-4">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block px-3 py-3 rounded-md text-base font-medium text-[var(--color-text)] hover:bg-[var(--vybe-sage)]/30 hover:text-[var(--vybe-mauve-ink)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Academic Notice in Mobile Menu */}
            <div className="pt-4 border-t border-[var(--color-border)] text-xs text-[var(--color-muted)] leading-relaxed">
              <p className="font-semibold text-[var(--color-text)] mb-1">Concept Prototype Notice</p>
              <p>
                Created for ENT 625 Digital Marketing. Catalog and prices are simulated. Products cannot be purchased.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
