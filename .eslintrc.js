'use strict'
module.exports = {
   parser: '@typescript-eslint/parser',
   env: {
      // browser: true,
      es6: true,
      browser: true,
   },
   extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended', // This line
      'prettier',
   ],
   overrides: [
      {
         env: {
            node: true,
         },
         files: ['.eslintrc.{js,cjs}'],
         parserOptions: {
            sourceType: 'script',
         },
      },
   ],
   parserOptions: {
      ecmaVersion: '2018',
      sourceType: 'module',
      project: './tsconfig.json',
      ecmaFeatures: {
         jsx: true,
      },
   },
   plugins: ['prettier', '@typescript-eslint'],
   rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-var-requires': 'off',
   },
}
