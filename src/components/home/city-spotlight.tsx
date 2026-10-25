import Link from "next/link";

export function CitySpotlight() {
  const cities = [
    {
      name: "Mumbai",
      vibe: "Seafront runs & dynamic flow",
      badge: "Campaign Hub 01",
    },
    {
      name: "Pune",
      vibe: "Mindful hill walks & studio energy",
      badge: "Campaign Hub 02",
    },
    {
      name: "Delhi",
      vibe: "Morning park laps & street rhythm",
      badge: "Campaign Hub 03",
    },
    {
      name: "Bangalore",
      vibe: "Greenway jogs & café transitions",
      badge: "Campaign Hub 04",
    },
  ];

  return (
    <section className="py-20 bg-[var(--vybe-sage)]/20 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--vybe-mauve)] block mb-2 font-mono">
            Phase 2 Digital Marketing Test
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[var(--color-text)] mb-3">
            Target Campaign Markets
          </h2>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed">
            Our controlled five-day digital marketing experiment is focused on women seeking contemporary athleisure across four urban centers.
          </p>
        </div>

        {/* City Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city) => (
            <div
              key={city.name}
              className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs hover:border-[var(--vybe-mauve)] transition-colors"
            >
              <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[var(--vybe-mauve)] bg-[var(--vybe-peach)]/50 px-2 py-0.5 rounded mb-3">
                {city.badge}
              </span>
              <h3 className="font-serif text-2xl font-medium text-[var(--color-text)] mb-1">
                {city.name}
              </h3>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                {city.vibe}
              </p>
            </div>
          ))}
        </div>

        {/* Prototype Disclosure Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[var(--color-border)] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-text)]">
              Simulated Shopping Funnel
            </h4>
            <p className="text-xs text-[var(--color-muted)] max-w-2xl leading-relaxed">
              Experience the entire customer journey from homepage to demo confirmation. Test adding products to the shopping bag and validating the checkout without entering credit cards.
            </p>
          </div>
          <Link
            href="/shop"
            className="shrink-0 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--color-text)] text-white hover:bg-[var(--vybe-mauve)] transition-colors"
          >
            Start Demo Journey &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
