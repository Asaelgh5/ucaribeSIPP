module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  // globals: {
  //   reject: 'on',
  //   resolve: 'on',
  // },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    // 'linebreak-style': ['error', 'windows'],
    "vue/no-unused-components": ["error", {
      "ignoreWhenBindingPresent": false
    }],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never"
    }]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
