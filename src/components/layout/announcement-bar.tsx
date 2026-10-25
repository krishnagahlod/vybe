import Link from "next/link";

export function AnnouncementBar() {
  return (
    <aside
      aria-label="Academic project disclosure"
      className="bg-[var(--vybe-peach)] text-[var(--color-text)] border-b border-[var(--color-border)] px-4 py-2 text-xs md:text-sm font-medium transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
        <p className="flex items-center gap-2 justify-center">
          <span className="inline-block w-2 h-2 rounded-full bg-[var(--vybe-mauve)] animate-pulse" />
          <span>
            <strong className="font-semibold tracking-wide uppercase text-[11px] px-1.5 py-0.5 rounded bg-white/70 border border-[var(--color-border)] mr-1.5">
              Academic Concept Demo
            </strong>
            ENT 625 Digital Marketing Project • No real transactions or fulfillment.
          </span>
        </p>
        <Link
          href="/about"
          className="text-xs text-[var(--color-text)] underline underline-offset-4 hover:text-[var(--vybe-mauve)] transition-colors inline-block whitespace-nowrap"
        >
          About this project &rarr;
        </Link>
      </div>
    </aside>
  );
}
