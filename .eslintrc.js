module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'react/react-in-jsx-scope': 'off',
    'react/no-array-index-key': 'off',
    'arrow-body-style': 'off',
    indent: ['error', 2],
    'comma-dangle': ['error', 'never'],
    'react/self-closing-comp': 'off',
    'import/no-extraneous-dependencie': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-closing-tag-location': 'off'
  }
};
