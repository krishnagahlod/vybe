"""Prepare generated product photos for the storefront.

Crops each image to the site's 3:4 product frame, resizes to 1200x1600 and saves a
compressed progressive JPEG into public/images/products/. Landscape images whose
name starts with "lifestyle-" are cropped to 16:9 (1920x1080) into public/images/lifestyle/.

Usage (from vybe-storefront/):
    python scripts/prepare-images.py ../Images/generated
"""

import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
PRODUCT_SIZE = (1200, 1600)
LIFESTYLE_SIZE = (1920, 1080)
# Share of the excess height trimmed from the top when a portrait is too tall.
# Under 0.5 keeps more headroom, which suits model shots.
TOP_BIAS = 0.35


def crop_to_ratio(img: Image.Image, ratio: float) -> Image.Image:
    w, h = img.size
    if w / h > ratio:  # too wide: trim the sides evenly
        new_w = round(h * ratio)
        left = (w - new_w) // 2
        return img.crop((left, 0, left + new_w, h))
    new_h = round(w / ratio)  # too tall: trim mostly from the bottom
    top = round((h - new_h) * TOP_BIAS)
    return img.crop((0, top, w, top + new_h))


def prepare(src: Path) -> None:
    lifestyle = src.stem.startswith("lifestyle-")
    size = LIFESTYLE_SIZE if lifestyle else PRODUCT_SIZE
    out_dir = ROOT / "public" / "images" / ("lifestyle" if lifestyle else "products")
    out = out_dir / f"{src.stem}.jpg"

    img = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
    if img.width < size[0] * 0.75:
        print(f"  ! {src.name}: only {img.width}px wide, will look soft. Regenerate larger if you can.")
    img = crop_to_ratio(img, size[0] / size[1]).resize(size, Image.LANCZOS)
    img.save(out, "JPEG", quality=82, optimize=True, progressive=True)
    print(f"  {src.name} -> {out.relative_to(ROOT)} ({out.stat().st_size // 1024} KB)")


def main() -> None:
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    folder = Path(sys.argv[1])
    files = sorted(p for p in folder.iterdir() if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"})
    if not files:
        sys.exit(f"No images found in {folder}")
    for f in files:
        prepare(f)


if __name__ == "__main__":
    main()
