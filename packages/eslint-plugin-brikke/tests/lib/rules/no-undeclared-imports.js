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
      options: [{ ...getOptions(), excludedModules: ['excluded-module'] }],
    },
    {
      code: "import foo from 'bar'",
      options: [{ ...getOptions(), excludedFilePatterns: ['*.spec.js', '*.stories.js'] }],
      filename: 'index.spec.js',
    },
    {
      code: "import foo from 'bar'",
      options: [{ ...getOptions(), excludedFilePatterns: ['*.spec.js', '*.stories.js'] }],
      filename: 'index.stories.js',
    },
  ],
  invalid: [
    {
      code: "import PropTypes from 'prop-types'",
      options: [getOptions()],
      errors: [{
        messageId: 'undeclaredImports',
      }],
    },
  ],
})

function getOptions () {
  return {
    pkgDir: './tests/stubs/no-undeclared-imports/',
  }
}