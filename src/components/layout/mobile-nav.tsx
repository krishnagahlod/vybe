"use client";

import React from "react";
import Link from "next/link";
import { SideDrawer } from "@/components/ui/side-drawer";
import { InstagramIcon } from "@/components/ui/icons";
import {
  ACTIVITIES,
  COLLECTIONS,
  FABRICS,
  FABRIC_IDS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  SIZES,
  shopHref,
} from "@/lib/catalog";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

const rowClass =
  "flex items-center justify-between py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text)] hover:text-[var(--vybe-mauve-ink)] transition-colors";

function Chevron() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 text-[var(--color-muted)] transition-transform duration-300 group-open:rotate-180"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function Group({ title, children, open = false }: { title: string; children: React.ReactNode; open?: boolean }) {
  return (
    <details className="group border-b border-[var(--color-border)]" open={open}>
      <summary className={`${rowClass} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}>
        <span>{title}</span>
        <Chevron />
      </summary>
      <div className="pb-5">{children}</div>
    </details>
  );
}

/** Site menu: opens from the menu button on the left of the header, on every screen size. */
export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const subLink = "block py-2 text-[15px] text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors";

  return (
    <SideDrawer
      isOpen={isOpen}
      onClose={onClose}
      side="left"
      titleId="site-menu-title"
      title={<span className="font-headline font-bold tracking-[0.16em]">VYBE</span>}
      footer={() => (
        <p className="px-6 py-5 bg-[var(--vybe-alabaster)] font-serif text-xl text-[var(--color-text)]">
          Made for your kind of movement.
        </p>
      )}
    >
      {() => (
        <nav aria-label="Site menu" className="px-6 pt-2 pb-8">
          <Group title="Shop" open>
            <ul>
              <li>
                <Link href="/shop" onClick={onClose} className={subLink}>
                  Shop all
                </Link>
              </li>
              {COLLECTIONS.map((c) => (
                <li key={c.id}>
                  <Link href={shopHref({ category: c.id })} onClick={onClose} className={subLink}>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Group>

          <Group title="Shop by activity">
            <ul>
              {ACTIVITIES.map((a) => (
                <li key={a.id}>
                  <Link href={shopHref({ activity: a.id })} onClick={onClose} className={subLink}>
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Group>

          <Group title="Core fabrics">
            <ul className="space-y-1">
              {FABRIC_IDS.map((id) => (
                <li key={id}>
                  <Link href={shopHref({ fabric: id })} onClick={onClose} className="block py-2 group/fabric">
                    <span className="block text-[15px] text-[var(--color-text)] group-hover/fabric:text-[var(--vybe-mauve-ink)] transition-colors">
                      {FABRICS[id].name}
                    </span>
                    <span className="block text-xs text-[var(--color-muted)]">{FABRICS[id].tagline}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Group>

          <Group title="Shop by size">
            <div className="grid grid-cols-5 gap-2">
              {SIZES.map((size) => (
                <Link
                  key={size}
                  href={shopHref({ size })}
                  onClick={onClose}
                  className="h-11 flex items-center justify-center rounded-full bg-[var(--vybe-alabaster)] text-xs font-semibold text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-white transition-colors"
                >
                  {size}
                </Link>
              ))}
            </div>
            <Link href="/size-guide" onClick={onClose} className="inline-block mt-3 text-xs text-[var(--color-muted)] underline underline-offset-4 hover:text-[var(--color-text)]">
              Size &amp; length guide
            </Link>
          </Group>
          <Link href="/about" onClick={onClose} className={`${rowClass} border-b border-[var(--color-border)]`}>
            Our story
          </Link>
          <Link href="/faq" onClick={onClose} className={`${rowClass} border-b border-[var(--color-border)]`}>
            FAQ
          </Link>

          <p className="pt-6 text-[11px] uppercase tracking-[0.15em] text-[var(--color-muted)] flex flex-wrap gap-x-3 gap-y-2">
            <Link href="/track-order" onClick={onClose} className="hover:text-[var(--color-text)]">
              Track your order
            </Link>
            <span aria-hidden="true">|</span>
            <Link href="/shipping-returns" onClick={onClose} className="hover:text-[var(--color-text)]">
              Delivery &amp; exchanges
            </Link>
            <span aria-hidden="true">|</span>
            <Link href="/contact" onClick={onClose} className="hover:text-[var(--color-text)]">
              Contact
            </Link>
          </p>

          <div className="pt-8 text-center space-y-3">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-muted)]">&mdash; Show us love &mdash;</p>
            <a
              href={INSTAGRAM_URL}
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text)] hover:text-[var(--vybe-mauve-ink)] transition-colors"
            >
              <InstagramIcon className="w-5 h-5" />@{INSTAGRAM_HANDLE}
            </a>
          </div>
        </nav>
      )}
    </SideDrawer>
  );
}
