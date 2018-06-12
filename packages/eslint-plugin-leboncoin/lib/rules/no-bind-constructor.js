// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prefer class method property over bind to prefer this context',
      category: 'Fill me in',
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [],
  },

  create: context => {
    const getCallExpression = node => {
      let expression
      if (
        node.type !== 'ExpressionStatement' ||
        node.expression.type !== 'AssignmentExpression' ||
        (expression = node.expression.right).type !== 'CallExpression'
      ) {
        return
      }

      return expression
    }

    return {
      MethodDefinition (node) {
        if (node.kind !== 'constructor') return

        // node.value === FunctionExpression
        // node.value.body === BlockStatement
        // node.value.body.body === instructions (array) inside BlockStatement
        const instructions = node.value.body.body

        instructions.forEach(instruction => {
          const expression = getCallExpression(instruction)
          if (!expression) {
            return
          }

          const identifier = expression.callee.property

          if (!identifier || identifier.name !== 'bind') return

          const args = expression.arguments

          if (args.length !== 1 || args[0].type !== 'ThisExpression') {
            return
          }

          context.report({
            node: identifier,
            message:
              'Unexpected "{{ identifier }}": prefer class arrow method ' +
              'to refer to the lexical scope',
            data: {
              identifier: identifier.name,
            },
          })
        })
      },
    }
  },
}
