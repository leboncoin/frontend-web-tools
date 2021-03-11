module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  "plugins": [
    "stylelint-scss"
  ],
  rules: {
    'function-name-case': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          'global',
          'local',
        ],
      },
    ],
    'shorthand-property-no-redundant-values': null,
    'block-opening-brace-space-before': 'always',
    'declaration-colon-space-after': 'always-single-line',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
}
