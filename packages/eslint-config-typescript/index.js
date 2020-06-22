module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@stnew',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'indent': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-member-accessibility': ['error', {
      accessibility: 'no-public',
    }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],
    '@typescript-eslint/explicit-function-return-type': ['error', {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
    }],
  },
};
