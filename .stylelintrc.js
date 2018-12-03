module.exports = {
  ignoreFiles: [
    '*.css'
  ],
  extends: [
    'stylelint-config-standard'
  ],
  plugins: [
    'stylelint-order',
    'stylelint-scss'
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
      'ignoreAtRules':
      [
        'at-root',
        'content',
        'debug',
        'each',
        'else',
        'else if',
        'error',
        'extend',
        'for',
        'function',
        'if',
        'import',
        'include',
        'media',
        'mixin',
        'return',
        'warn',
        'while'
      ]
    }
  ],
  'function-name-case': null,
  'font-family-no-missing-generic-family-keyword': null
  }
}
