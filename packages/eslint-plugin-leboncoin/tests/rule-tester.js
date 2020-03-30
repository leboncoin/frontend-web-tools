const RuleTester = require('eslint').RuleTester

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      globalReturn: false
    },
    sourceType: 'module',
  },
})

module.exports = RuleTester
