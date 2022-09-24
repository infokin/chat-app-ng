'use strict';
module.exports = {
  env: {
    jasmine: true
  },
  extends: [
    '@infokin/eslint-config/angular'
  ],
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: './tsconfig.eslint.json'
      },
      rules: {
        '@angular-eslint/component-selector': [
          'error',
          {
            'type': 'element',
            'prefix': 'chat',
            'style': 'kebab-case'
          }
        ]
      }
    }
  ]
};
