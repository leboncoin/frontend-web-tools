const rule = require('../../../lib/rules/no-undeclared-imports')
const RuleTester = require('../../rule-tester')

const ruleTester = new RuleTester()

ruleTester.run('no-undeclared-imports', rule, {
  valid: [
    {
      code: "import { clone } from 'ramda'",
      options: [getOptions()],
    },
    {
      code: "import { render } from '@testing-library/react'",
      options: [getOptions()],
    },
    {
      code: "import 'lodash'",
      options: [getOptions()],
    },
    {
      code: "import React from 'react'",
      options: [getOptions()],
    },
    {
      code: "import foo from './bar'",
      options: [getOptions()],
    },
    {
      code: "import foo from '../bar'",
      options: [getOptions()],
    },
    {
      code: "import excludedModule from 'excluded-module'",
      options: [{ ...getOptions(), exclude: ['excluded-module'] }],
    },
  ],
  invalid: [
    {
      code: "import PropTypes from 'prop-types'",
      options: [getOptions()],
      errors: [{
        message: "Unexpected 'prop-types' is imported but not declared in the leaf package.json",
      }],
    },
  ],
})

function getOptions () {
  return {
    pkgDir: './tests/stubs/no-undeclared-imports/',
  }
}
