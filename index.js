/* eslint-env node */
/* eslint quotes: [2, "single", "avoid-escape"] */
module.exports = {
  'extends': 'eslint:recommended',
  'rules': {
    'array-bracket-spacing': [2, 'never'],
    'block-scoped-var': 2,
    'brace-style': [2, 'stroustrup', { 'allowSingleLine': false }],
    'camelcase': 1,
    'curly': 2,
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
        capIsNewExceptions: ['Router', 'Resource', 'Schema', 'ObjectId']
      }
    ],
    'no-extend-native': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-trailing-spaces': 2,
    'no-use-before-define': [2, 'nofunc'],
    'no-unused-vars': 1,
    'object-curly-spacing': [2, 'never'],
    'quotes': [2, 'single', 'avoid-escape'],
    'semi': [2, 'always'],
    'space-after-keywords': [2, 'always'],
    'space-unary-ops': 2,
    'no-underscore-dangle': 0
  }
};
