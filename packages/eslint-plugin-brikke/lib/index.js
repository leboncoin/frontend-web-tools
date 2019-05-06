//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = {
  'no-css-dist': require('./rules/no-css-dist.js')
}

module.exports.config = {
  recommended: {
    rules: {
      'brikke/no-css-dist': 'error',
    },
  },
}



