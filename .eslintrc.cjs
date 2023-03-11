module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true
  },
  extends: ['standard-with-typescript', 'eslint:recommended', 'plugin:solid/typescript', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'solid', 'jest'],
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['off'],
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  rules: {
    "prettier/prettier": "error",
  }
}
