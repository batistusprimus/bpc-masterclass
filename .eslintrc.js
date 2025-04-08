module.exports = {
  root: true,
  extends: ['next/core-web-vitals'],
  rules: {
    'react/no-unescaped-entities': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@next/next/no-img-element': 0,
    '@next/next/no-assign-module-variable': 0
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
} 