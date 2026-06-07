import type { MetadataRoute } from "next";

// Required so Next can emit a static sitemap.xml under `output: "export"`.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://globalnode.ai";
  const now = new Date();

  // GlobalNode is a single-route static-export site (the homepage). There are
  // no sub-routes to enumerate — Cell · Node · Wire lives on one page.
  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
  ];
}
