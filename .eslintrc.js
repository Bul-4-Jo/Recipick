module.exports = {
  env: {
    browser: true,
    es6: true,
  },

  extends: ['react-app', 'naver', 'eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['react'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  rules: {
    'import/prefer-default-export': 0,
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'object-curly-newline': 1,
  },
};
