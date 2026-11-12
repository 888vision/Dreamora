import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://aipctool.com/sitemap.xml',
    host: 'https://aipctool.com',
  };
}
