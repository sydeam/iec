from pathlib import Path
import sys

sys.path.insert(0, str(Path(r"E:\IEC\.tools\pymupdf")))
import fitz


source = Path(r"D:\A4 Brochure (1).pdf")
output = Path(r"E:\IEC\brochure-extract")
pages_dir = output / "pages"
images_dir = output / "images"
pages_dir.mkdir(parents=True, exist_ok=True)
images_dir.mkdir(parents=True, exist_ok=True)

doc = fitz.open(source)
all_text = []

for index, page in enumerate(doc):
    number = index + 1
    text = page.get_text("text", sort=True)
    all_text.append(f"\n===== PAGE {number} =====\n{text}")

    pix = page.get_pixmap(matrix=fitz.Matrix(1.4, 1.4), alpha=False)
    pix.save(pages_dir / f"page-{number:02d}.jpg")

    for image_index, image in enumerate(page.get_images(full=True), start=1):
        xref = image[0]
        extracted = doc.extract_image(xref)
        image_path = images_dir / f"page-{number:02d}-image-{image_index:02d}.{extracted['ext']}"
        image_path.write_bytes(extracted["image"])

(output / "brochure.txt").write_text("".join(all_text), encoding="utf-8")
print(f"pages={len(doc)}")
print(f"output={output}")
