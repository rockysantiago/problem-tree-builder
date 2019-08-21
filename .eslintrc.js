module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': 1,
    'no-useless-escape': 1,
    'no-fallthrough': 1,
    'no-extra-boolean-cast': 1
  }
};
