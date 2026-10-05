from pathlib import Path
import sys

ROOT = Path(r"E:\IEC")
sys.path.insert(0, str(ROOT / ".tools" / "pymupdf"))
sys.path.insert(0, str(ROOT / ".tools" / "pillow"))

import pymupdf
from PIL import Image, ImageDraw


PDF = Path(r"D:\A4 Brochure (1).pdf")
ASSETS = ROOT / "dist" / "assets"
CLIENTS = ASSETS / "clients"
ASSETS.mkdir(parents=True, exist_ok=True)
CLIENTS.mkdir(parents=True, exist_ok=True)
doc = pymupdf.open(PDF)


def rgba_from_xref(xref: int, smask: int = 0) -> Image.Image:
    base = pymupdf.Pixmap(doc, xref)
    if base.colorspace and base.colorspace.n > 3:
        base = pymupdf.Pixmap(pymupdf.csRGB, base)
    if smask:
        alpha = pymupdf.Pixmap(doc, smask)
        base = pymupdf.Pixmap(base, alpha)
    png = base.tobytes("png")
    from io import BytesIO

    return Image.open(BytesIO(png)).convert("RGBA")


def save_webp(image: Image.Image, path: Path, max_width: int, quality: int = 82) -> None:
    if image.width > max_width:
        height = round(image.height * max_width / image.width)
        image = image.resize((max_width, height), Image.Resampling.LANCZOS)
    image.save(path, "WEBP", quality=quality, method=6)


# Brand mark and principal brochure imagery.
save_webp(rgba_from_xref(59, 60), ASSETS / "iec-logo.webp", 520, 90)
save_webp(Image.open(ROOT / "brochure-extract" / "images" / "page-02-image-05.jpeg").convert("RGB"), ASSETS / "hero-engineering.webp", 1600, 84)
save_webp(Image.open(ROOT / "brochure-extract" / "images" / "page-01-image-05.jpeg").convert("RGB"), ASSETS / "panel-room.webp", 1000, 82)
save_webp(Image.open(ROOT / "brochure-extract" / "images" / "page-03-image-10.jpeg").convert("RGB"), ASSETS / "power-grid.webp", 900, 80)


products = {
    "motor-control-center": (243, 244),
    "automatic-power-factor-correction": (247, 248),
    "power-control-center": (251, 252),
    "programmable-logic-control": (255, 256),
    "draw-out-panels": (405, 406),
    "breaker-panels": (409, 410),
    "automation-panels": (411, 412),
    "specialised-panels": (415, 416),
}
for slug, (xref, mask) in products.items():
    save_webp(rgba_from_xref(xref, mask), ASSETS / f"{slug}.webp", 900, 84)


# Extract the supplied client/partner marks for a responsive logo wall.
client_xrefs = [
    (508, 509), (510, 511), (512, 513), (514, 515), (516, 517),
    (518, 519), (520, 521), (522, 523), (524, 525), (526, 527),
    (528, 529), (530, 531), (532, 533), (534, 535), (536, 537),
    (538, 539), (540, 541), (542, 543), (544, 545),
]
thumbs = []
for index, (xref, mask) in enumerate(client_xrefs, start=1):
    image = rgba_from_xref(xref, mask)
    save_webp(image, CLIENTS / f"client-{index:02d}.webp", 360, 88)
    preview = image.copy()
    preview.thumbnail((220, 130), Image.Resampling.LANCZOS)
    thumbs.append((index, preview))

sheet = Image.new("RGB", (750, 5 * 180), "white")
draw = ImageDraw.Draw(sheet)
for position, (index, preview) in enumerate(thumbs):
    col = position % 3
    row = position // 3
    x = 20 + col * 245
    y = 20 + row * 180
    sheet.paste(preview, (x + (220 - preview.width) // 2, y + 20), preview)
    draw.text((x, y), str(index), fill="black")
sheet.save(ROOT / "brochure-extract" / "client-contact-sheet.jpg", quality=90)

print(f"prepared={ASSETS}")
