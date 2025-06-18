import { routing } from '@/i18n/routing';

export const normalizePathname = (pathname: string): string => {
  const localePattern = new RegExp(`^/(${routing.locales.join('|')})(?=/|$)`);
  const normalized = pathname.replace(localePattern, '');
  return normalized || '/';
};
