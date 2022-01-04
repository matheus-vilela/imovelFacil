module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-unstable-nested-components': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'global-require': 'off',
    'no-param-reassign': 'off',
    'react/jsx-no-useless-fragment': 'off',
    camelcase: 'off',
    'react/jsx-no-bind': 'off',
  },
};
