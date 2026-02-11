import type { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { articles } from "@/data/articles";
import { getAllProperties } from "@/data/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://estimanou.re";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/estimer`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/biens-a-vendre`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mise-en-valeur`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // City estimation pages
  const cityEstimationPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/estimation-immobiliere/${city.slug}`,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // City property list pages
  const cityPropertyPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/biens-a-vendre/${city.slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Individual property pages
  const allProperties = getAllProperties();
  const propertyPages: MetadataRoute.Sitemap = allProperties.map((p) => ({
    url: `${baseUrl}/biens-a-vendre/${p.citySlug}/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Blog articles
  const blogPages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...cityEstimationPages,
    ...cityPropertyPages,
    ...propertyPages,
    ...blogPages,
  ];
}
