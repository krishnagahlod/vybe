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
};

export function getSwatch(colorName?: string): string {
  return (colorName && COLOR_SWATCHES[colorName]) || "#9d8189";
}
