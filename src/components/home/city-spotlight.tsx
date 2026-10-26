const CITIES = [
  { name: "Mumbai", vibe: "Seafront runs and studio flows" },
  { name: "Pune", vibe: "Hill walks and morning yoga" },
  { name: "Delhi", vibe: "Park laps and city rhythm" },
  { name: "Bangalore", vibe: "Greenway jogs and café stops" },
];

export function CitySpotlight() {
  return (
    <section className="py-16 sm:py-20 bg-[var(--color-bg)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-4 space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--vybe-mauve-ink)]">
              Launching in
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[var(--color-text)]">
              Four cities, four rhythms
            </h2>
          </div>
          <ul className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {CITIES.map((city) => (
              <li key={city.name} className="space-y-1 border-t border-[var(--color-text)]/15 pt-4">
                <h3 className="font-serif text-2xl text-[var(--color-text)]">{city.name}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{city.vibe}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
