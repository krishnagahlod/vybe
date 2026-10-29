const LINE = "BUILT-IN SUPPORT · NO LINES · CUT FOR INDIAN BODIES · MADE FOR INDIAN HEAT · THREE LEG LENGTHS · ";

export function MarqueeStrip() {
  return (
    <div className="bg-[var(--vybe-pastel-pink)] text-[var(--vybe-ink)] py-3.5 overflow-hidden" aria-label={LINE}>
      <div className="animate-marquee" aria-hidden="true">
        {[1, 2, 3, 4].map((n) => (
          <span key={n} className="shrink-0 pr-2 font-headline font-bold text-sm sm:text-base tracking-[0.04em] whitespace-nowrap">
            {LINE}
          </span>
        ))}
      </div>
    </div>
  );
}
