/** Public origin used for canonical URLs, Open Graph and the sitemap. Override with NEXT_PUBLIC_SITE_URL. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://alexkemboi.dev"
).replace(/\/$/, "");
