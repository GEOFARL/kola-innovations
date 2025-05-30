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
      <NextIntlClientProvider>
        <body className="min-h-screen font-[Montserrat,sans-serif] flex flex-col antialiased overflow-x-hidden">
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
};

export default RootLayout;
