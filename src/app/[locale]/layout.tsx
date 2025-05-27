import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kola Innovations',
  description: 'Kola Innovations website',
};

type Props = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

const RootLayout = async ({ children, params }: Props) => {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        <header className="bg-blue-600 text-white px-6 py-4 text-xl font-bold shadow">
          Kola Innovations
        </header>
        <main className="p-6">
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
