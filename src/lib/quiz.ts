// Style quiz: six answers in, one named result and a three-piece outfit out.

export type Answers = {
  activity: "dance" | "court" | "gym" | "yoga" | "walk";
  pain: "lines" | "rideup" | "heat" | "shorts" | "waistband";
  style: "prints" | "brights" | "pastels" | "set";
  fit: "sleek" | "relaxed" | "coverage" | "showoff";
  height: "petite" | "regular" | "tall";
  after: "home" | "coffee" | "work";
};

type Outfit = { top: string; bottom: string; layer: string };

const RESULTS: Record<Answers["activity"], { name: string; line: string; outfit: Outfit }> = {
  dance: { name: "Rhythm", line: "You move to the beat, and your clothes should keep up.", outfit: { top: "built-in-bra-tank", bottom: "flow-flare-leggings", layer: "light-layer-zip-jacket" } },
  court: { name: "Rally", line: "Quick feet, big swings, zero adjusting.", outfit: { top: "studio-support-bra", bottom: "match-point-tennis-dress", layer: "motion-racerback-tank" } },
  gym: { name: "Strength", line: "You lift heavy. Nothing should hold you back.", outfit: { top: "studio-support-bra", bottom: "no-lines-legging", layer: "cloudline-training-tee" } },
  yoga: { name: "Flow", line: "Every stretch, every hold, nothing to fix.", outfit: { top: "soft-form-sports-bra", bottom: "flow-high-rise-leggings", layer: "ease-crop-top" } },
  walk: { name: "Stride", line: "Your pace, your route, your hour.", outfit: { top: "studio-support-bra", bottom: "everyday-move-shorts", layer: "cloudline-training-tee" } },
};

const WHY: Record<Answers["pain"], string> = {
  lines: "You said lines bother you, so your leggings have seamless underwear built in.",
  rideup: "You said tops ride up, so we built the bra in.",
  heat: "You said you run hot, so we picked our most breathable top.",
  shorts: "You said shorts ride up, so your skort has a liner built in.",
  waistband: "You said waistbands roll, so we picked our stay-put high-rise band.",
};

export const LENGTH_FOR: Record<Answers["height"], string> = { petite: "Petite", regular: "Regular", tall: "Tall" };

export function recommend(a: Answers) {
  const base = RESULTS[a.activity];
  const o: Outfit = { ...base.outfit };

  // Q2: fix her biggest frustration
  if (a.pain === "lines") o.bottom = "no-lines-legging";
  if (a.pain === "rideup") o.top = "built-in-bra-tank";
  // Court already layers the racerback over the bra; swapping the top too would drop the bra
  if (a.pain === "heat" && o.layer !== "motion-racerback-tank") o.top = "motion-racerback-tank";
  if (a.pain === "shorts") o.bottom = "baseline-skort";
  if (a.pain === "waistband") o.bottom = "flow-high-rise-leggings";

  // Q4: silhouette
  if (a.fit === "relaxed" && o.bottom.includes("legging")) o.bottom = "studio-flare-pants";
  if (a.fit === "coverage") {
    if (["everyday-move-shorts", "baseline-skort"].includes(o.bottom)) o.bottom = "flow-flare-leggings";
    if (o.layer === "ease-crop-top") o.layer = "cloudline-training-tee";
  }
  if (a.fit === "showoff" && o.layer === "cloudline-training-tee") o.layer = "ease-crop-top";

  // Q6: dressed for the day after
  if (a.after !== "home") o.layer = "light-layer-zip-jacket";

  // Q3: matching-set lovers get the set as a single pick
  const products = a.style === "set" ? ["flow-matching-set", o.layer] : [o.top, o.bottom, o.layer];

  return {
    name: base.name,
    line: base.line,
    // A layer can repeat the top (court + heat); show each piece once
    products: [...new Set(products)],
    tagged: a.pain === "heat" ? "motion-racerback-tank" : undefined, // "breathable pick"
    length: LENGTH_FOR[a.height],
    why: WHY[a.pain],
  };
}
