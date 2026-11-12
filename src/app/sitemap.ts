import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: 'https://aipctool.com/',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://aipctool.com/coaster',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
