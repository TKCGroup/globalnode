import type { MetadataRoute } from "next";

// Required so Next can emit a static robots.txt under `output: "export"`.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://globalnode.ai/sitemap.xml",
  };
}
