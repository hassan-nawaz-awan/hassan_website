import type { MetadataRoute } from 'next';
import { getAllPostSlugs } from '@/lib/blog';
import { siteConfig } from '@/lib/site-config';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostSlugs().map((slug) => ({
    url: `${siteConfig.url}/blog/${slug}/`,
    lastModified: new Date(),
  }));

  return [
    { url: `${siteConfig.url}/`, lastModified: new Date() },
    { url: `${siteConfig.url}/blog/`, lastModified: new Date() },
    ...posts,
  ];
}
