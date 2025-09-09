import { API_ENDPOINTS } from "@/lib/utils";
import type { MetadataRoute } from "next";

interface Service {
  slug: string;
  date?: string;
}

interface Blog {
  slug: string;
  date: string;
}

async function getServices(): Promise<Service[]> {
  try {
    const res = await fetch(
      `${API_ENDPOINTS.services}?domain=${API_ENDPOINTS.domain}&limit=12&offset=0`,
      {
        next: { revalidate: 60 * 60 * 2 },
      }
    );
    if (!res.ok) throw new Error("Failed to fetch");
    const json = await res.json();
    return json?.services ?? [];
  } catch {
    return [];
  }
}

async function getBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(
      `${API_ENDPOINTS.blogs}?domain=${API_ENDPOINTS.domain}&limit=12&offset=0`
    );
    if (!res.ok) return [];
    const json = await res.json();
    return json?.blogs ?? [];
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.dammamathathmukayfat.com";

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/videos`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  // Dynamic service pages
  const services = await getServices();
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: service.date ? new Date(service.date) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic blog pages
  const blogs = await getBlogs();
  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
