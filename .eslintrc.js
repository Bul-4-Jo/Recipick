module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['naver', 'eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  parser: 'babel-parser',
  plugins: ['react'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 0,
    'no-console': 'off',
  },
};
