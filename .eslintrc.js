module.exports = {
  extends: ['smarthr', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'smarthr/a11y-anchor-has-href-attribute': 'error',
    'smarthr/a11y-prohibit-input-placeholder': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
  },
}
