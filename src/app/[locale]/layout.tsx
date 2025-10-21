import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import type {ReactNode} from 'react';

import '@/app/globals.css';
import {LenisProvider} from '@/components/LenisProvider';
import {routing} from '@/i18n/routing';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'MillerSan - Endüstriyel Gücün Yeni Adı',
  description:
    'Kaliteli ürün gamı, sektörel deneyim ve güvenilir hizmetle Millersan; kayış, kaplin ve endüstriyel yedek parçada çözüm ortağınız.',
  keywords: 'endüstriyel, kayış, kaplin, rulman, yedek parça, millersan',
  authors: [{name: 'MillerSan'}],
  icons: {
    icon: [{url: '/images/favicon.ico', type: 'image/x-icon'}],
    shortcut: [{url: '/images/favicon.ico', type: 'image/x-icon'}],
    apple: [{url: '/images/favicon.ico', type: 'image/x-icon'}]
  },
  openGraph: {
    title: 'MillerSan - Endüstriyel Gücün Yeni Adı',
    description:
      'Kaliteli ürün gamı, sektörel deneyim ve güvenilir hizmetle Millersan; kayış, kaplin ve endüstriyel yedek parçada çözüm ortağınız.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MillerSan - Endüstriyel Gücün Yeni Adı',
    description:
      'Kaliteli ürün gamı, sektörel deneyim ve güvenilir hizmetle Millersan; kayış, kaplin ve endüstriyel yedek parçada çözüm ortağınız.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1
};

type LocaleLayoutProps = {
  children: ReactNode;
  params: {locale: string};
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params}: LocaleLayoutProps) {
  const {locale} = params;

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className="m-0 p-0"
      style={{background: 'linear-gradient(180deg,rgba(201,162,75,0.12)_0%,rgba(255,255,255,0.12)_100%)'}}
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} m-0 p-0`}
        style={{
          margin: 0,
          padding: 0,
          background: 'linear-gradient(180deg,rgba(201,162,75,0.12)_0%,rgba(255,255,255,0.12)_100%)'
        }}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LenisProvider>{children}</LenisProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
