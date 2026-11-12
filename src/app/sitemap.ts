import type { MetadataRoute } from 'next';

const baseUrl = 'https://aipctool.com';
const locales = ['en', 'ko', 'de', 'ja', 'pt-BR'];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: locale === 'en' ? 1 : 0.9,
    },
    {
      url: `${baseUrl}/${locale}/coaster`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ]);
}
