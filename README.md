# IEC — Industrial Electricals & Controls

A fast, mobile-first static website for IEC's electrical-panel manufacturing business.

## Tech stack

- Semantic HTML5
- Modern responsive CSS (mobile-first, no CSS framework)
- Vanilla JavaScript with clean, folder-backed routes
- Optimized WebP assets extracted from the supplied company brochure
- Static hosting through OpenAI Sites

There is no runtime framework, database, analytics package, or third-party font request. The contact form opens a pre-addressed email in the visitor's default mail application, which keeps the site fully static.

## Local preview

Serve the `dist` directory with any static web server, for example:

```powershell
python -m http.server 4173 --directory dist
```

Then visit `http://localhost:4173/`.

Serve `dist` as the web root (as shown above), not the repository root. Clean URLs then work locally and in production:

- `/about/`
- `/industries/`
- `/products/`
- `/clients/`
- `/contact/`

Each nested page has its own folder-backed `index.html`, so there is no `.html` or `#` in public URLs and direct page refreshes work on ordinary static hosting.

## Repository folders

- `dist/` is the deployable static website. Hosting must publish this directory as the web root; the folder name is not part of the public URL.
- `.openai/hosting.json` links this repository to its existing OpenAI Sites project and tells that host to publish `dist`. Keep it while the Site is hosted there.
