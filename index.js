/* eslint-env node */
/* eslint quotes: [2, "single", "avoid-escape"] */
module.exports = {
  'extends': 'eslint:recommended',
  'rules': {
    'array-bracket-spacing': [2, 'never'],
    'block-scoped-var': 2,
    'brace-style': [2, 'stroustrup', { 'allowSingleLine': false }],
    'camelcase': 2,
    'callback-return': [2, ["callback", "_callback", "_cb", "cb", "next", "_next"]],
    'comma-style': 2,
    'curly': [2, 'multi-line'],
    'eol-last': 2,
    'eqeqeq': [2, 'smart'],
    'max-depth': [1, 3],
    'max-statements': [1, 25],
    'max-len': [1, 120],
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: true,
        newIsCapExceptions: [],
        capIsNewExceptions: ['Router', 'Resource', 'Schema', 'ObjectId', 'Q', 'Chance']
      }
    ],
    'no-cond-assign': 2,
    'no-extend-native': 2,
    'no-extra-semi': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, {max: 1}],
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-use-before-define': [2, 'nofunc'],
    'no-unexpected-multiline': 2,
    'no-unused-vars': 1,
    'object-curly-spacing': [2, 'never'],
    'padded-blocks': [2, 'never'],
    'quotes': [2, 'single', 'avoid-escape'],
    'semi': [2, 'always'],
    'space-after-keywords': [2, 'always'],
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    'space-unary-ops': 2
  }
};
