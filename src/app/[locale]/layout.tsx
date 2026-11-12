import { notFound } from 'next/navigation';
import { setStaticParamsLocale } from 'gt-next/server';

const locales = ['en', 'ko', 'de', 'ja', 'pt-BR'] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  // Tell gt-next which locale is being statically rendered for this route.
  setStaticParamsLocale(locale);
  return children;
}
