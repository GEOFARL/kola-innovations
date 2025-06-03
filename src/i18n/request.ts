import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';
import { readdir } from 'fs/promises';
import path from 'path';

export default getRequestConfig(async ({ requestLocale }) => {
  const resolvedLocale = await requestLocale;

  const locale = hasLocale(routing.locales, resolvedLocale)
    ? resolvedLocale
    : routing.defaultLocale;

  const dirPath = path.join(process.cwd(), 'messages', locale);
  const files = await readdir(dirPath);

  const messages: Record<string, any> = {};

  for (const file of files) {
    if (file.endsWith('.json')) {
      const namespace = file.replace(/\.json$/, '');
      const module = await import(`../../messages/${locale}/${file}`);
      messages[namespace] = module.default;
    }
  }

  return {
    locale,
    messages,
  };
});
