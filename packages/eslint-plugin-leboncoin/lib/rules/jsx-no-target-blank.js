// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

function isTargetBlank (attr) {
  return (
    attr.name.name === 'target' &&
    attr.value.type === 'Literal' &&
    attr.value.value.toLowerCase() === '_blank'
  )
}

function hasSecureRel (element) {
  return element.attributes.find(attr => {
    if (attr.type === 'JSXAttribute' && attr.name.name === 'rel') {
      const tags =
        attr.value && attr.value.type === 'Literal' && attr.value.value.toLowerCase().split(' ')
      return tags && tags.indexOf('noopener') >= 0
    }
    return false
  })
}

module.exports = {
  meta: {
    docs: {
      description: 'Forbid target="_blank" attribute without at least rel="noopener"',
      category: 'Best Practices',
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [],
  },

  create (context) {
    return {
      JSXAttribute (node) {
        if (node.parent.name.name !== 'a') {
          return
        }

        if (isTargetBlank(node) && !hasSecureRel(node.parent)) {
          context.report(
            node,
            'Using target="_blank" without at least rel="noopener" ' +
              'is a security risk: see https://mathiasbynens.github.io/rel-noopener'
          )
        }
      },
    }
  },
}
