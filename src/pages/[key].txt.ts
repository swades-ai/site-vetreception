import type { APIRoute } from "astro";
import site from "../site.config.json";

// IndexNow verifies the key by fetching /<key>.txt — rendered from the config, never committed as a file.
export function getStaticPaths() {
  return site.indexnowKey ? [{ params: { key: site.indexnowKey } }] : [];
}
export const GET: APIRoute = ({ params }) => new Response(params.key ?? "", { headers: { "content-type": "text/plain" } });
