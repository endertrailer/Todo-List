module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base',
        "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    'import/order': 'error',
    'import/extensions': [
      'error',
      'ignorePackages', // Ignore importing files with extensions for npm packages
      {
        js: 'never', // Allow importing JavaScript files without extension
      },
    ],
  },
};
