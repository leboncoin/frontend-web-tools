// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-bind-constructor')
const RuleTester = require('eslint').RuleTester

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: { experimentalObjectRestSpread: true, globalReturn: false },
    sourceType: 'module',
  },
})

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester()
ruleTester.run('no-bind-constructor', rule, {
  valid: [
    `class Toto {
      constructor() {
      }

      myFunction() {
        return
      }
    }`,
  ],

  invalid: [
    {
      code: `class Toto {
                constructor() {
                  this.myFunction = this.myFunction.bind(this)
                }

                myFunction() {
                  return
                }
              }`,
      errors: [
        {
          message: 'Unexpected "bind": prefer class arrow method to refer to the lexical scope',
          type: 'Identifier',
        },
      ],
    },
  ],
})
