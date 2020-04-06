module.exports = {
  meta: {
    docs: {
      description: 'Prefer use of `rtl` namespace over `@testing-library/react` (prefer-rtl-namespace)',
      category: 'Best practices',
      recommended: false,
    },
    messages: {
      preferNamespace: 'Unexpected “{{ sourceValue }”: prefer the use of the “rtl” namespace',
    },
    fixable: null,
    schema: [],
    type: 'problem',
  },

  create: context => ({
    ImportDeclaration (node) {
      const sourceValue = node.source.value

      if (sourceValue !== '@testing-library/react') return

      context.report({
        node,
        messageId: 'preferNamespace',
        data: {
          sourceValue,
        },
      })
    }
  }),
}
