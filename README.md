# IEC — Industrial Electricals & Controls

A fast, mobile-first static website for IEC's electrical-panel manufacturing business.

## Tech stack

- Semantic HTML5
- Modern responsive CSS (mobile-first, no CSS framework)
- Vanilla JavaScript with clean, folder-backed routes
- Google Fonts: Manrope for headings and DM Sans for body text
- Optimized WebP assets extracted from the supplied company brochure
- Static hosting through GitHub Pages or any standard static host

There is no runtime framework, database, analytics package, or third-party font request. The contact form currently prepares a WhatsApp message for the visitor to review and send. It does not automatically send or store submissions. The company email is pending in the supplied content brief.

The About page loads Leaflet and OpenStreetMap tiles only when its project map is needed. The rest of the site does not depend on the map libraries. The map requires an internet connection and retains attribution, filters, wheel zoom, touch pinch zoom and +/- controls.

## Content and contact settings

Company copy and the nine product families were updated from `IEC_Website_Content_and_Product_Catalogue.pdf`. Existing product photography and client logos are retained from the earlier brochure. Distribution Boards is a new category and uses an explicit photography placeholder until a genuine image is supplied.

Edit the `company` object near the top of `app.js` to update contact details:

- Primary phone / WhatsApp: +91 8500236688.
- Additional phone: +91 9440083166.
- Landline: 040 23095559.
- Location: the Google location link supplied in the new PDF.
- `email`: currently empty. Adding the approved email switches the form to a pre-addressed email in the visitor's mail app. Automatic email delivery would require a separately configured form service or backend.

The product `specifications` are illustrative configurations, as identified in the PDF. Confirm ratings, fault levels, IP ratings, availability and applicable standards with IEC before treating them as validated technical data. Standards on the Quality page are references, not claims of company certification. Unverified founding-year, award and certification claims have not been carried into the updated copy.

Before launch, obtain:

- Approved company introduction, founding year and any verified experience figures.
- Genuine product photos (especially Distribution Boards), factory/team images and permission to publish.
- Technical sign-off for all nine products, supported component makes, ratings and downloadable datasheets.
- Original certification/test documents with scope, issuing authority and validity.
- Client-logo permissions and approved testimonials/project case studies.
- Verified delivery locations and permission to publish their names/details. Replace `sampleProjects` in `app.js`; all existing map entries are explicitly marked demonstration data.
- Final company email, postal address and any approved social links.

The HTML/CSS/JavaScript site uses white page surfaces, a split home hero, responsive grids and a full-height scrollable mobile menu. Mobile navigation includes Escape-to-close, focus containment and background interaction locking.

## Local preview

Serve the repository root with any static web server, for example:

```powershell
python -m http.server 4173
```

Then visit `http://localhost:4173/`.

Clean URLs work locally and in production:

- `/about/`
- `/industries/`
- `/products/`
- `/clients/`
- `/contact/`

Each nested page has its own folder-backed `index.html`, so there is no `.html` or `#` in public URLs and direct page refreshes work on ordinary static hosting.

## GitHub Pages

1. Push the repository to GitHub.
2. Open **Settings → Pages** in the repository.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the required branch (normally `main`) and the **`/ (root)`** folder.
5. Save and wait for GitHub Pages to publish the site.

The website files now live directly in the repository root. The `.nojekyll` marker tells GitHub Pages to serve the files as a plain static website.
