# A Studio OS site

Every page here is written by Studio OS from rows — the brand, its pitch, its keyword map, the quality rules — and committed by the OS. Edit the rows, not these files: the next publish overwrites them.

- `src/site.config.json` — the brand, its address, the waitlist endpoint, the booking link, the IndexNow key
- `src/content/landing/index.mdx` — the home page
- `src/content/pages/*.mdx` — the pages (comparison, alternatives, pricing, use cases…)
- `src/content/posts/*.mdx` — the blog
- `public/llms.txt` — what an LLM should read first

Cloudflare Pages builds `npm run build` on push and serves `dist/`.
