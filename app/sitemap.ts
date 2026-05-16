import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Hardcoded per-page timestamps so each build doesn't tell crawlers
// "everything changed today" — bump the matching date when you edit
// the page content. lastModified: new Date() at build time would
// re-stamp every page on every Vercel deploy.
const HOME_LAST_MODIFIED = new Date("2026-05-16");
const PRIVACY_LAST_MODIFIED = new Date("2026-05-16");
const TERMS_LAST_MODIFIED = new Date("2026-05-05");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://phacotrack.com",
      lastModified: HOME_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://phacotrack.com/privacy",
      lastModified: PRIVACY_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://phacotrack.com/terms",
      lastModified: TERMS_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
