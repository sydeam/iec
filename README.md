# IEC — Industrial Electricals & Controls

A fast, mobile-first static website for IEC's electrical-panel manufacturing business.

## Tech stack

- Semantic HTML5
- Modern responsive CSS (mobile-first, no CSS framework)
- Vanilla JavaScript with clean, folder-backed routes
- Optimized WebP assets extracted from the supplied company brochure
- Static hosting through GitHub Pages or any standard static host

There is no runtime framework, database, analytics package, or third-party font request. The contact form opens a pre-addressed email in the visitor's default mail application, which keeps the site fully static.

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
