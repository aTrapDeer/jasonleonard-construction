import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://taylorleonardcorp.com"

  // Define all your site routes
  const routes = [
    "",
    "/about",
    "/services",
    "/markets",
    "/projects",
    "/contact",
    "/quote",
    "/privacy",
    "/terms",
  ]

  // Generate sitemap entries with different priorities and change frequencies
  const sitemapEntries: MetadataRoute.Sitemap = routes.map((route) => {
    // Homepage gets highest priority
    const priority = route === "" ? 1.0 : route === "/about" || route === "/services" ? 0.9 : 0.8
    const changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" =
      route === "" ? "weekly" : route === "/projects" ? "weekly" : "monthly"

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }
  })

  return sitemapEntries
}

