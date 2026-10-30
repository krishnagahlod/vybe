/**
 * Maps catalogue colorway names to swatch backgrounds in the VYBE palette.
 */
const COLOR_SWATCHES: Record<string, string> = {
  "Sage": "#c8d5c8",
  "Chalk": "#f6f1ea",
  "Aubergine": "#452b3a",
  "Muted Mauve": "#9d8189",
  "Pale Peach": "#ffe5d9",
  "Rose": "#f4acb7",
  "Soft Pink": "#ffcad4",
  "Sage / Rose": "linear-gradient(135deg, #c8d5c8 50%, #f4acb7 50%)",
  "Mauve": "#9d8189",
  "Black": "#1a1a1a",
  "Cobalt": "#3d5afe",
  "Mint": "#cfeee0",
  "Plum": "#6b1f4f",
  "Sunshine Yellow": "#f6c84c",
  "Navy Pinstripe": "#1f2a4d",
  "Cobalt Zebra": "linear-gradient(135deg, #3d5afe 50%, #1a1a1a 50%)",
  "Blush / Cream": "linear-gradient(135deg, #f6d3cf 50%, #f3ead8 50%)",
  "Charcoal / Cobalt": "linear-gradient(135deg, #2f2c2c 50%, #3d5afe 50%)",
  "Cream / Maroon": "linear-gradient(135deg, #f3ead8 50%, #6b1e24 50%)",
  "Red / Navy Stripe": "linear-gradient(135deg, #d6343f 50%, #1f2a4d 50%)",
  "Tangerine / Grey": "linear-gradient(135deg, #ff5a1f 50%, #a7a9ac 50%)",
  "Sunset Ombre": "linear-gradient(180deg, #ef7f74, #5b3a6b)",
};

export function getSwatch(colorName?: string): string {
  return (colorName && COLOR_SWATCHES[colorName]) || "#9d8189";
}
