# IEC — Industrial Electricals & Controls

A fast, mobile-first static website for IEC's electrical-panel manufacturing business.

## Tech stack

- Semantic HTML5
- Modern responsive CSS (mobile-first, no CSS framework)
- Vanilla JavaScript with a lightweight hash router
- Optimized WebP assets extracted from the supplied company brochure
- Static hosting through OpenAI Sites

There is no runtime framework, database, analytics package, or third-party font request. The contact form opens a pre-addressed email in the visitor's default mail application, which keeps the site fully static.

## Local preview

Serve the `dist` directory with any static web server, for example:

```powershell
python -m http.server 4173 --directory dist
```

Then visit `http://localhost:4173/#/`.
