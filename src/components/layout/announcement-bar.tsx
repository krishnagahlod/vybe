import Link from "next/link";

export function AnnouncementBar() {
  return (
    <aside
      aria-label="Academic project disclosure"
      className="bg-[var(--color-text)] text-white/85 px-4 py-2 text-xs"
    >
      <p className="max-w-7xl mx-auto text-center leading-relaxed">
        <span className="font-semibold text-white">Concept storefront for ENT 625</span>
        <span className="mx-2 text-white/40" aria-hidden="true">&middot;</span>
        <span>No real orders or payments are taken.</span>{" "}
        <Link
          href="/about"
          className="ml-1 underline underline-offset-4 text-white hover:text-[var(--vybe-peach)] transition-colors"
        >
          About the project
        </Link>
      </p>
    </aside>
  );
}
