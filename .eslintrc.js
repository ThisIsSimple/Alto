module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
  rules: {
    'no-param-reassign': 0,
    'no-unused-vars': 1,
    'arrow-body-style': 1,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 1,
    'jsx-a11y/anchor-is-valid': 1,
    'global-require': 1,
    'react/button-has-type': 1,
    'object-curly-newline': 1,
    'object-property-newline': 1,
    'react/jsx-props-no-spreading': 1,
    'no-nested-ternary': 1,
    'react/prop-types': 1,
    'jsx-a11y/click-events-have-key-events': 1,
    'jsx-a11y/interactive-supports-focus': 1,
    camelcase: 1,
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
  },
};
