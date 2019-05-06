//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-css-dist')
const RuleTester = require('eslint').RuleTester

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
})

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester()

ruleTester.run('no-css-dist', rule, {
  valid: [
    `
    import './styles.css'
    import '@example/dist/styles.css'
    import '@example/package/dist/styles.css'
    import '@example/styles.css'
    `,
  ],

  invalid: [
    {
      code: `import '@brikke/button/dist/styles.css'`,
      errors: [
        {
          message: 'Unexpected "@brikke/button/dist/styles.css": do not import CSS from @brikke here.',
          type: 'ImportDeclaration',
        },
      ],
    },
  ],
})