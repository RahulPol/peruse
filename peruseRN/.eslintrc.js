module.exports = {
  extends: [
    'universe',
    'universe/native',
    'universe/shared/typescript-analysis',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: 'tsconfig.json',
      },
      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        'no-console': 'error',
        'sort-imports': ['error', { ignoreDeclarationSort: true }],
      },
    },
  ],
};
