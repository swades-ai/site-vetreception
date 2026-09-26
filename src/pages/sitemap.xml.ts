import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import site from "../site.config.json";

// The sitemap carries each page's own published (and updated) date, never the
// build's: a site whose every URL shares one lastmod reads to a spam update
// as bulk-published content. Dates come from the frontmatter Studio OS wrote.
const day = (d: Date) => d.toISOString().slice(0, 10);

export const GET: APIRoute = async () => {
  const base = site.url.replace(/\/$/, "");
  const [landing, pages, posts, docs] = await Promise.all([getCollection("landing"), getCollection("pages"), getCollection("posts"), getCollection("docs")]);
  const urls: Array<{ loc: string; lastmod: string }> = [];
  for (const e of landing) urls.push({ loc: `${base}/`, lastmod: day(e.data.updatedAt ?? e.data.publishedAt) });
  for (const e of pages) urls.push({ loc: `${base}/${e.id}/`, lastmod: day(e.data.updatedAt ?? e.data.publishedAt) });
  for (const e of posts) urls.push({ loc: `${base}/blog/${e.id}/`, lastmod: day(e.data.updatedAt ?? e.data.publishedAt) });
  for (const e of docs) urls.push({ loc: `${base}/help/${e.id}/`, lastmod: day(e.data.updatedAt ?? e.data.publishedAt) });
  if (posts.length) urls.push({ loc: `${base}/blog/`, lastmod: day(new Date(Math.max(...posts.map((p) => (p.data.updatedAt ?? p.data.publishedAt).getTime())))) });
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join("\n")}\n</urlset>\n`;
  return new Response(body, { headers: { "content-type": "application/xml" } });
};
