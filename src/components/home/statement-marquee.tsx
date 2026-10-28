/** One oversized line of outlined type drifting across the page, between the light and dark sections. */
export function StatementMarquee() {
  const line = "Made for your kind of movement";
  return (
    <div className="py-10 sm:py-14 overflow-hidden" aria-label={line}>
      <div className="flex whitespace-nowrap" aria-hidden="true">
        {[1, 2].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center animate-marquee-slow">
            {[1, 2].map((n) => (
              <span key={n} className="flex items-center">
                <span className="statement-outline font-headline text-[18vw] sm:text-[13vw] leading-none tracking-[-0.03em] px-[3vw]">
                  {line}
                </span>
                <span className="w-[3vw] h-[3vw] rounded-full bg-[var(--vybe-sage)] shrink-0" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
