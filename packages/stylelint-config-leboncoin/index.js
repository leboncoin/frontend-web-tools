module.exports = {
  extends: 'stylelint-config-standard',
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
  },
}
