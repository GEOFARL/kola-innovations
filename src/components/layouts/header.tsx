'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { routing } from '@/i18n/routing';

type Props = { locale: string };

const Header: React.FC<Props> = ({ locale }) => {
  const pathname = usePathname();

  const getSwitchLocaleHref = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    return segments.join('/') || '/';
  };

  return (
    <header className="bg-blue-600 text-white px-6 py-4 text-xl font-bold shadow flex justify-between items-center">
      <span>Kola Innovations</span>
      <div className="space-x-2 text-sm font-normal">
        {routing.locales.map((lng) =>
          lng === locale ? null : (
            <Link
              key={lng}
              href={getSwitchLocaleHref(lng)}
              className="underline hover:text-gray-200"
            >
              {lng.toUpperCase()}
            </Link>
          ),
        )}
      </div>
    </header>
  );
};

export default Header;
