const rule = require('../../../lib/rules/no-css-dist')
const RuleTester = require('../../rule-tester')

const ruleTester = new RuleTester()

ruleTester.run('no-css-dist', rule, {
  valid: [
    {
      code: `
import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.scss'

const Button = ({ children }) => {
  return (
    <button
      className={classNames(styles.Button)}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  /** Content to be included in the button */
  children: PropTypes.node.isRequired,
}

export default Button`,
    },
  ],

  invalid: [
    {
      code: `
import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.scss'
import otherStyles from '@brikke/other-component/dist/styles.css'

const Button = ({ children }) => {
  return (
    <button
      className={classNames(styles.Button, otherStyles.Button)}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  /** Content to be included in the button */
  children: PropTypes.node.isRequired,
}

export default Button`,
      errors: [
        {
          message: 'Unexpected "@brikke/other-component/dist/styles.css": do not import CSS from @brikke here.',
          type: 'ImportDeclaration',
        },
      ],
    },
  ],
})
