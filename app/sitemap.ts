import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: "https://phacotrack.com",
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://phacotrack.com/privacy",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://phacotrack.com/terms",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
