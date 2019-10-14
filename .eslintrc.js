module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
        indent: ['error', 2],
        'no-multiple-empty-lines': ['error', { max: 1 }],
      },
    ],
    'vue/max-attributes-per-line': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
