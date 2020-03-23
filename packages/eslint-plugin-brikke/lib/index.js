module.exports.rules = {
  'no-css-dist': require('./rules/no-css-dist.js'),
  'no-undeclared-imports': require('./rules/no-undeclared-imports.js'),
}

module.exports.config = {
  recommended: {
    rules: {
      'brikke/no-css-dist': ['error'],
      'brikke/no-undeclared-imports': ['error'],
    },
  },
}
