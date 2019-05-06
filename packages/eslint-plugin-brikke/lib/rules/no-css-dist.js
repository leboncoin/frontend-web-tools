//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Do not include the CSS from a @brikke package but import it on the consumer side",
      category: "Best practices",
      recommended: false,
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [],
    type: 'problem',
  },

  create: context => ({
    ImportDeclaration (node) {
      if (!node.source || (node.source && node.source.value.length === 0)) return

      // We check that the value of the import does not match ALL those conditions:
      // - a @brikke namespace
      // - a /dist folder
      // - a css stylesheet
      const regex = /^@(?=.*?\bbrikke\b)(?=.*?\bdist\b)(?=.*?\bcss\b).*$/gm
      const identifier = node.source.value
      const isFromBrikke = regex.test(identifier)

      if (!isFromBrikke) return

      context.report(
        node,
        `Unexpected "${identifier}": do not import CSS from @brikke here.`,
      )
    },
  }),
}
