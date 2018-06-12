// ------------------------------------------------------------------------------
// Plugin Definition
// ------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = {
  'no-bind-constructor': require('./rules/no-bind-constructor.js'),
  'jsx-no-target-blank': require('./rules/jsx-no-target-blank.js'),
}

module.exports.configs = {
  recommended: {
    rules: {
      'leboncoin/no-bind-constructor': 'error',
      'leboncoin/jsx-no-target-blank': 'error',
    },
  },
}
