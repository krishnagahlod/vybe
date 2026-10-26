import Link from "next/link";

export function AnnouncementBar() {
  return (
    <aside
      aria-label="Academic project disclosure"
      className="bg-[#141211] text-[#e8dfd8] border-b border-white/10 px-4 py-2 text-[11px] tracking-wider transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2 justify-center sm:justify-start flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-[0.2em] bg-white/10 text-[var(--vybe-peach)] border border-white/15">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ENT 625 Digital Marketing Project
          </span>
          <span className="text-white/80 font-light text-[11px]">
            Academic Prototype &bull; Zero real card transactions or commercial fulfillment.
          </span>
        </div>

        <div className="flex items-center gap-4 text-[10px] tracking-widest uppercase font-mono text-white/70">
          <span className="hidden md:inline">Curated for Mumbai &bull; Pune &bull; Delhi &bull; Bangalore</span>
          <Link
            href="/about"
            className="text-white underline underline-offset-4 hover:text-[var(--vybe-peach)] transition-colors inline-flex items-center gap-1"
          >
            <span>Project Scope</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
