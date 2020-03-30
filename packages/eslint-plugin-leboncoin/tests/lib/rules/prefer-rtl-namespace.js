const rule = require('../../../lib/rules/prefer-rtl-namespace')
const RuleTester = require('../../rule-tester')

const ruleTester = new RuleTester()

ruleTester.run('prefer-rtl-namespace', rule, {
  valid: [
    `
      import { fireEvent, render } from 'rtl'
    `,
  ],
  invalid: [
    {
      code: `
        import { fireEvent, render } from '@testing-library/react'
      `,
      errors: [
        {
          message: 'Unexpected “@testing-library/react”: prefer the use of the “rtl” namespace',
          type: 'ImportDeclaration',
        }
      ],
    },
  ]
})