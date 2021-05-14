module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['unicorn'],
  rules: {
    'arrow-body-style': [
      'error', 'as-needed', {
        requireReturnForObjectLiteral: false,
      },
    ],
    'array-bracket-newline': ['error', { 'multiline': true }],
    'array-bracket-spacing': ['error', 'never'],
    'arrow-parens': [
      'error', 'always', {
        requireForBlockBody: true,
      },
    ],
    'array-element-newline': ['error', 'consistent'],
    'arrow-spacing': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': ['error', 'last'],
    'consistent-this': ['error', 'that'],
    'constructor-super': 'error',
    'default-case': 'error',
    'dot-notation': 'error',
    'func-style': [
      2, 'declaration', {
        allowArrowFunctions: true,
      },
    ],
    'function-paren-newline': ['error', 'consistent'],
    'eol-last': ['error', 'always'],
    'eqeqeq': 'error',
    'indent': [
      'error', 2, {
        SwitchCase: 1,
        VariableDeclarator: 1,
      },
    ],
    'keyword-spacing': [
      'error', {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': [
      'error', 'always', {
        exceptAfterSingleLine: true,
      },
    ],
    'max-len': [
      'error', {
        'code': 100,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
      },
    ],
    'new-cap': 'error',
    'new-parens': 'error',
    'no-await-in-loop': 'error',
    'no-class-assign': 'error',
    'no-console': 1,
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-func-assign': 'error',
    'no-invalid-this': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': [
      'error', {
        max: 2,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-param-reassign': 'error',
    'no-plusplus': 'error',
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-spaced-func': 'error',
    'no-this-before-super': 'error',
    'no-trailing-spaces': [
      'error', {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    'no-unneeded-ternary': [
      'error', {
        defaultAssignment: false,
      },
    ],
    'no-undef': 'error',
    'no-unreachable': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-whitespace-before-property': 'error',
    'no-var': 'error',
    'object-curly-newline': [
      'error', {
        'ObjectExpression': {
          'multiline': true,
          'consistent': true,
        },
        'ObjectPattern': {
          'multiline': true,
          'consistent': true,
        },
        'ImportDeclaration': {
          'multiline': true,
          'consistent': true,
        },
        'ExportDeclaration': {
          'multiline': true,
          'consistent': true,
        },
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
    'object-shorthand': [
      'error', 'always', {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-linebreak': [
      'error', 'before', {
        overrides: {
          '=': 'none',
        },
      },
    ],
    'prefer-arrow-callback': 'error',
    'prefer-const': [
      'error', {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-destructuring': [
      'error', {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      }, {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-numeric-literals': 'error',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    'quotes': ['error', 'single'],
    'radix': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'semi': ['error', 'never'],
    'space-before-function-paren': [
      'error', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'spaced-comment': [
      'error', 'always', {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!'],
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!'],
          balanced: true,
        },
      },
    ],
    'switch-colon-spacing': [
      'error', {
        after: true,
        before: false,
      },
    ],
    'template-tag-spacing': ['error', 'never'],
    'template-curly-spacing': 'error',
    'vars-on-top': 'error',
    'wrap-iife': [
      'error', 'outside', {
        functionPrototypeMethods: false,
      },
    ],

    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'unicorn/better-regex': 'error',
    'unicorn/catch-error-name': 'error',
    'unicorn/consistent-destructuring': 'error',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/custom-error-definition': 'off',
    'unicorn/empty-brace-spaces': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/filename-case': 'off',
    'unicorn/import-index': 'off',
    'unicorn/import-style': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-for-each': 'error',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-document-cookie': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-keyword-prefix': 'off',
    'unicorn/no-lonely-if': 'error',
    'no-nested-ternary': 'off',
    'unicorn/no-nested-ternary': 'error',
    'unicorn/no-new-array': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-null': 'off',
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-static-only-class': 'error',
    'unicorn/no-this-assignment': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/no-unused-properties': 'off',
    'unicorn/no-useless-undefined': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/numeric-separators-style': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-default-parameters': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/prefer-set-has': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-string-replace-all': 'off',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-switch': 'error',
    'unicorn/prefer-ternary': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/prevent-abbreviations': [
      'error', {
        'allowList': {
          'arg': true,
          'Arg': true,
          'args': true,
          'Args': true,
          'ref': true,
          'Ref': true,
          'refs': true,
          'Refs': true,
          'prop': true,
          'Prop': true,
          'props': true,
          'Props': true,
        },
      },
    ],
    'unicorn/string-content': 'off',
    'unicorn/throw-new-error': 'error',
  },
};
