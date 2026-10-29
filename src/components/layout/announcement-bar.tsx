import Link from "next/link";

export function AnnouncementBar() {
  return (
    <aside aria-label="Store promises" className="bg-[var(--color-text)] text-white text-[11px] sm:text-xs px-4 py-2.5 text-center">
      <Link href="/shipping-returns" className="hover:text-[var(--vybe-pastel-pink)] transition-colors">
        Free size exchanges · Three leg lengths · Built for Indian bodies
      </Link>
    </aside>
  );
}

/** The ENT 625 honesty notice: kept visible on every page, but after the brand message. */
export function ConceptNotice() {
  return (
    <p className="bg-[var(--vybe-petal)] text-[var(--color-muted)] text-[11px] text-center px-4 py-1.5">
      VYBE is a concept storefront for ENT 625. No real orders or payments are taken.{" "}
      <Link href="/about#project" className="underline underline-offset-2 hover:text-[var(--color-text)]">
        About the project
      </Link>
    </p>
  );
}
