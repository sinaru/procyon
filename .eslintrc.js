module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  rules: {
    "import/extensions": 0,
    "no-undef": 0,
    "import/no-unresolved": "off",
    "import/no-absolute-path": "off",
    "template-curly-spacing" : "off",
    indent : "off"
  },
};
