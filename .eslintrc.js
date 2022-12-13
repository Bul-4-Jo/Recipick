module.exports = {
  env: {
    browser: true,
    es6: true,
  },

  extends: [ 'react-app', 'naver', 'eslint:recommended', 'plugin:prettier/recommended', 'prettier' ],
  plugins: [ 'react' ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  rules: {
    'import/prefer-default-export': 0,
    'no-console': 'off',
    'object-curly-newline': [
      'error',
      {
        // 객체 리터럴 구성
        ObjectExpression: 'always',
        // 객체 분해 할당의 객체 패턴에 대한 구성
        ObjectPattern: {
          multiline: true,
        },
        // 명명된 가져오기에 대한 구성
        ImportDeclaration: 'never',
        // 명명된 내보내기 구성
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      },
    ],
  },
};
