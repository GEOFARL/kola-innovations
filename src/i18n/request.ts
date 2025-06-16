import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

const messages = {
  en: {
    common: () => import('./messages/en/common.json'),
    landing: () => import('./messages/en/landing.json'),
    onboarding: () => import('./messages/en/onboarding.json'),
    toast: () => import('./messages/en/toast.json'),
    talents: () => import('./messages/en/talents.json'),
  },
  de: {
    common: () => import('./messages/de/common.json'),
    landing: () => import('./messages/de/landing.json'),
    onboarding: () => import('./messages/de/onboarding.json'),
    toast: () => import('./messages/de/toast.json'),
    talents: () => import('./messages/de/talents.json'),
  },
  fr: {
    common: () => import('./messages/fr/common.json'),
    landing: () => import('./messages/fr/landing.json'),
    onboarding: () => import('./messages/fr/onboarding.json'),
    toast: () => import('./messages/fr/toast.json'),
    talents: () => import('./messages/fr/talents.json'),
  },
} satisfies Record<string, Record<string, () => Promise<{ default: any }>>>;

export default getRequestConfig(async ({ requestLocale }) => {
  const resolvedLocale = await requestLocale;

  const locale = hasLocale(routing.locales, resolvedLocale)
    ? resolvedLocale
    : routing.defaultLocale;

  const localeMessages = messages[locale as keyof typeof messages];
  const messageKeys = Object.keys(localeMessages);

  const loadedMessages = await Promise.all(
    messageKeys.map((key) =>
      localeMessages[key as keyof typeof localeMessages]().then((m) => [
        key,
        m.default,
      ]),
    ),
  );

  return {
    locale,
    messages: Object.fromEntries(loadedMessages),
  };
});
