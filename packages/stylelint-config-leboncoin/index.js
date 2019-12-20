module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
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
  },
}
