module.exports = {
  root: true,
  env: {
    // 运行环境
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended', 'plugin:prettier/recommended'],
  // parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': ['off'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'linebreak-style': [0, 'error', 'windows'],
    'no-unused-vars': 'off', //未使用变量
    'no-empty-function': 'off', // 未定义Function
    '@typescript-eslint/no-empty-function': 'off',
    'no-async-promise-executor': 'off',
  },
}
