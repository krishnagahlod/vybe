import { LENGTHS } from "@/lib/catalog";

/** Simple leggings outline, drawn taller for each leg length. */
function LeggingsSketch({ legLength }: { legLength: number }) {
  const top = 10;
  const crotch = top + 46;
  const hem = crotch + legLength;
  return (
    <svg viewBox={`0 0 120 ${hem + 6}`} className="h-full w-auto" aria-hidden="true">
      <path
        d={`M24 ${top} H96 L100 ${crotch} L84 ${hem} H70 L61 ${crotch + 6} H59 L50 ${hem} H36 L20 ${crotch} Z`}
        fill="var(--vybe-alabaster)"
        stroke="var(--vybe-ink-soft)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d={`M24 ${top + 16} H96`} stroke="var(--vybe-ink-soft)" strokeWidth="1.2" />
    </svg>
  );
}

export function LengthGuide() {
  const legLengths = [128, 146, 164];
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-6">
      {LENGTHS.map((l, i) => (
        <div key={l.id} className="flex flex-col items-center text-center">
          <div className="h-48 sm:h-64 flex items-end justify-center">
            <LeggingsSketch legLength={legLengths[i]} />
          </div>
          <p className="mt-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text)]">{l.id}</p>
          <p className="mt-1 text-sm sm:text-base font-medium text-[var(--color-text)]">{l.height}</p>
          <p className="text-xs text-[var(--color-muted)]">{l.inseam}</p>
        </div>
      ))}
    </div>
  );
}
