module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],
    'array-bracket-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: true,
    }],
    'arrow-spacing': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'consistent-this': ['error', 'that'],
    'constructor-super': 'error',
    'default-case': 'error',
    'dot-notation': 'error',
    'function-paren-newline': ['error', 'consistent'],
    'eol-last': ['error', 'always'],
    'eqeqeq': 'error',
    'indent': ['error', 2],
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true },
      },
    }],
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],
    'multiline-comment-style': ['error', 'starred-block'],
    'new-cap': 'error',
    'new-parens': 'error',
    'no-await-in-loop': 'error',
    'no-class-assign': 'error',
    'no-console': 1,
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-func-assign': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxEOF: 1,
      maxBOF: 0,
    }],
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-plusplus': 'error',
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-spaced-func': 'error',
    'no-this-before-super': 'error',
    'no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],
    'no-unneeded-ternary': ['error', {
      defaultAssignment: false,
    }],
    'no-undef': 'error',
    'no-unreachable': 'error',
    'no-unused-vars': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-whitespace-before-property': 'error',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-linebreak': ['error', 'before', {
      overrides: { '=': 'none' },
    }],
    'prefer-arrow-callback': 'error',
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],
    'prefer-destructuring': ['error', {
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
    }],
    'prefer-numeric-literals': 'error',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single'],
    'radix': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'],
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!'],
        balanced: true,
      },
    }],
    'switch-colon-spacing': ['error', {
      after: true,
      before: false,
    }],
    'template-tag-spacing': ['error', 'never'],
    'template-curly-spacing': 'error',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'outside', {
      functionPrototypeMethods: false,
    }],
  },
};
