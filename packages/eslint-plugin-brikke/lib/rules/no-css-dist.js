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
      // We check that the value of the import does not match ALL those conditions:
      // - a @brikke namespace
      // - a /dist folder
      // - a css stylesheet
      const regex = /^@brikke\/.+\/dist\/\w+\.css$/
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
