module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['src/scripts/**/*.ts'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parserOptions: {
        project: ['tsconfig.json'],
      },
    },
  ],
}
