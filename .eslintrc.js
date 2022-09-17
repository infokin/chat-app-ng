module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    '@infokin/eslint-config/angular',
  ],
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: './tsconfig.angular.json'
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
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
  }
}
