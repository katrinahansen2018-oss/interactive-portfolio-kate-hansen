## Remove Lovable Branding from Link Previews

### 1. Update `index.html` Open Graph / Twitter metadata
- Replace `og:image` value `https://lovable.dev/opengraph-image-p98pqg.png` with the site's own favicon `/favicon.jpg` (absolute URL: `https://interactive-portfolio-kate-hansen.lovable.app/favicon.jpg`, since social crawlers require absolute URLs).
- Replace `twitter:image` the same way.
- Add `<meta property="og:site_name" content="Kate Hansen" />`.
- Add `<meta property="og:url" content="https://interactive-portfolio-kate-hansen.lovable.app/" />` so previews resolve correctly.

### 2. Hide the "Edit with Lovable" badge
- Use the publish settings tool to set `hide_badge: true` (requires user approval; needs Pro plan or higher).

### 3. After deploy (manual steps for you)
- LinkedIn Post Inspector → paste your URL → refresh.
- Facebook Sharing Debugger → "Scrape Again" (also clears Gmail preview cache).
- Old shares already sent will continue showing the cached Lovable image until those caches expire.

### Technical notes
- The current favicon at `public/favicon.png` exists; the uploaded `favicon.jpg` you referenced as og:image — confirm whether to (a) use the existing `/favicon.png` already in `public/`, or (b) copy the newly uploaded cat/LXD image to `public/favicon.jpg` and use that. I'll assume (b) since you specified `/favicon.jpg`.
- Social platforms prefer 1200×630 images for previews; a square favicon will display as a small square thumbnail rather than a wide banner. That's acceptable but not ideal — let me know if you'd like a proper OG image generated later.
