const PROMISES = [
  {
    label: "Built for Indian bodies",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5a2 2 0 100-4 2 2 0 000 4zM8 21l1.2-7.5L7 9.5l3-1.5h4l3 1.5-2.2 4L16 21M10 13.5h4" />
    ),
  },
  {
    label: "Three leg lengths",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v18M16 3v18M8 7h3M8 11h2M8 15h3M16 7h-3M16 11h-2M16 15h-3" />,
  },
  {
    label: "Deep pockets",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h14l-1 13a3 3 0 01-3 3H9a3 3 0 01-3-3L5 4zM10 9h4v6h-4z" />
    ),
  },
  {
    label: "Rapid-dry fabrics",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11zM9.5 15a2.5 2.5 0 002.5 2.5" />,
  },
];

/** A quiet row of the four things that make VYBE different (CAVA-style promise icons). */
export function PromiseStrip() {
  return (
    <section className="py-10 sm:py-14 border-y border-[var(--color-border)]">
      <ul className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4">
        {PROMISES.map((p) => (
          <li key={p.label} className="flex flex-col items-center text-center gap-3">
            <span className="w-16 h-16 rounded-full border border-[var(--color-text)]/25 flex items-center justify-center text-[var(--color-text)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3} aria-hidden="true">
                {p.icon}
              </svg>
            </span>
            <span className="text-sm text-[var(--color-text)]">{p.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
