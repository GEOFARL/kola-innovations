import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  'stories': ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  'addons': [
    {
      'name': '@storybook/addon-essentials',
      'options': {
        'docs': false,
      },
    },
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  'framework': {
    'name': '@storybook/nextjs',
    'options': {},
  },
};
export default config;
