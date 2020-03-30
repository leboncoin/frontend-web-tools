module.exports = {
  meta: {
    docs: {
      description: 'Prefer use of `rtl` namespace over `@testing-library/react` (prefer-rtl-namespace)',
      category: 'Best practices',
      recommended: false,
    },
    fixable: null,
    schema: [],
    type: 'problem',
  },

  create: context => ({
    ImportDeclaration (node) {
      const identifier = node.source.value

      if (identifier !== '@testing-library/react') return

      context.report(
        node,
        `Unexpected “${identifier}”: prefer the use of the “rtl” namespace`
      )
    }
  }),
}