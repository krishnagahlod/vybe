/**
 * Maps catalogue colorway names to swatch backgrounds in the VYBE palette.
 */
const COLOR_SWATCHES: Record<string, string> = {
  "Sage": "#d8e2dc",
  "Muted Mauve": "#9d8189",
  "Pale Peach": "#ffe5d9",
  "Rose": "#f4acb7",
  "Soft Pink": "#ffcad4",
  "Sage / Rose": "linear-gradient(135deg, #d8e2dc 50%, #f4acb7 50%)",
};

export function getSwatch(colorName?: string): string {
  return (colorName && COLOR_SWATCHES[colorName]) || "#9d8189";
}
