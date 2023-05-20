import path from 'path'
import { mergeConfig } from 'vite'
import { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    {
      name: '@storybook/addon-essentials',
    },
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.stories\.jsx?$/],
          include: [path.resolve(__dirname, '../src')],
        },
        loaderOptions: {
          prettierConfig: {
            printWidth: 80,
            singleQuote: false,
          },
        },
      },
    },
  ],
  refs: {
    'smarthr-patterns': {
      title: 'SmartHR Patterns',
      url: 'https://main--62f0ae48c21b0728fd1a5c85.chromatic.com',
    },
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add storybook-specific dependencies to pre-optimization
      // optimizeDeps: {
      //   include: ['storybook-addon-designs'],
      // },
    })
  },
  docs: {
    autodocs: true,
  },
}

export default config
