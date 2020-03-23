const readPkgUp = require('read-pkg-up')

const isRelative = name => {
  return /^\./.test(name)
}

module.exports = {
  meta: {
    docs: {
      description: 'Forbid imports not declared in the leaf package.json',
      category: 'Best practices',
      recommended: false,
    },
    fixable: null,
    schema: [
      {
        type: 'object',
        properties: {
          exclude: { type: ['array'] },
          pkgDir: { type: ['string'] },
        },
        additionalProperties: false,
      },
    ],
    type: 'problem',
  },
  create: context => ({
    ImportDeclaration (node) {
      const options = context.options[0] || {}
      const cwd = options.pkgDir || context.getFilename()
      const pkg = readPkgUp.sync({ cwd, normalize: false }).packageJson
      const allDependencies = {
        ...(pkg.dependencies || {}),
        ...(pkg.devDependencies || {}),
        ...(pkg.peerDependencies || {}),
      }
      const sourceValue = node.source.value

      if (options.exclude && options.exclude.includes(sourceValue)) {
        return
      }
      if (isRelative(sourceValue)) {
        return
      }
      if (allDependencies[sourceValue] !== undefined) {
        return
      }

      context.report({
        node,
        message: "Unexpected '{{ sourceValue }}' is imported but not declared in the leaf package.json",
        data: {
          sourceValue,
        },
      })
    },
  }),
}
