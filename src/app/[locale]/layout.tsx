import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocales } from 'gt-next/server';

const locales = getLocales();

const localizedSeo: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Dreamora — Free Online City Builder Game',
    description: 'Build your dream city in Dreamora, a free online isometric city builder. Design neighborhoods, manage resources, and explore a living city.',
  },
  ko: {
    title: 'Dreamora — 나만의 도시 건설 게임',
    description: 'Dreamora에서 꿈꾸던 도시를 직접 건설해 보세요. 건물과 도로를 배치하고 자원을 관리하며 살아 움직이는 도시를 만들어 보세요.',
  },
  de: {
    title: 'Dreamora — Kostenloses Online-Städtebauspiel',
    description: 'Baue deine Traumstadt in Dreamora. Gestalte Viertel, verwalte Ressourcen und entdecke eine lebendige isometrische Stadt.',
  },
  ja: {
    title: 'Dreamora — 無料オンライン都市建設ゲーム',
    description: 'Dreamoraで理想の街を作ろう。街並みをデザインし、資源を管理しながら、活気あふれる街づくりを楽しめます。',
  },
  'pt-BR': {
    title: 'Dreamora — Jogo Online Grátis de Construção de Cidades',
    description: 'Construa a cidade dos seus sonhos em Dreamora. Planeje bairros, gerencie recursos e explore uma cidade isométrica cheia de vida.',
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const seo = localizedSeo[locale] || localizedSeo.en;
  const url = `https://aipctool.com/${locale}`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: url,
      languages: {
        en: 'https://aipctool.com/en',
        ko: 'https://aipctool.com/ko',
        de: 'https://aipctool.com/de',
        ja: 'https://aipctool.com/ja',
        'pt-BR': 'https://aipctool.com/pt-BR',
        'x-default': 'https://aipctool.com/en',
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: 'Dreamora',
      type: 'website',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  return children;
}
