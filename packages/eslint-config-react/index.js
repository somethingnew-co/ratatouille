module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: [
    '@stnew',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/boolean-prop-naming': [
      'error',
      {
        'rule': '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        'message':
          'It is better if your prop ({{ propName }}) matches this pattern: ({{ pattern }})',
      },
    ],
    'react/no-children-prop': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': ['error', {
      'props': 'never',
      'children': 'never',
    }],
    'react/jsx-curly-newline': 'error',
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-tag-spacing': ['error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never',
      'beforeClosing': 'never',
    }],
    'react/jsx-wrap-multilines': ['error', {
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'parens-new-line',
      'logical': 'parens-new-line',
      'prop': 'parens-new-line',
    }],
  },
};
