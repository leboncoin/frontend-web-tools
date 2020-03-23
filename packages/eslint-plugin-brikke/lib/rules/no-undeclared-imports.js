const readPkgUp = require('read-pkg-up')
const minimatch = require('minimatch')

const isRelative = name => {
  return /^\./.test(name)
}

const isInAllDependencies = (sourceValue, allDependencies) => {
  return allDependencies[sourceValue] !== undefined
}

const isInternal = (sourceValue, allDependencies) => {
  const separator = '/'
  const parts = sourceValue.split(separator)
  const isScoped = sourceValue.startsWith('@')
  const name = isScoped ? [parts[0], parts[1]].join(separator) : parts[0]
  const depth = parts.length

  if (!isInAllDependencies(name, allDependencies)) {
    return false
  }
  if (isScoped) {
    return depth >= 3
  }

  return depth >= 2
}

module.exports = {
  meta: {
    docs: {
      description: 'Forbid imports not declared in the leaf package.json',
      category: 'Best practices',
      recommended: false,
    },
    fixable: null,
    messages: {
      undeclaredImports:
        "Unexpected '{{ sourceValue }}' is imported but not declared in the leaf package.json",
    },
    schema: [
      {
        type: 'object',
        properties: {
          excludedModules: { type: ['array'] },
          excludedFilePatterns: { type: ['array'] },
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
      const { excludedModules = [], excludedFilePatterns = [] } = options
      const filename = context.getFilename()
      const cwd = options.pkgDir || filename
      const pkg = readPkgUp.sync({ cwd, normalize: false }).packageJson
      const allDependencies = {
        ...(pkg.dependencies || {}),
        ...(pkg.devDependencies || {}),
        ...(pkg.peerDependencies || {}),
      }
      const sourceValue = node.source.value

      if (excludedModules.includes(sourceValue)) {
        return
      }
      if (
        excludedFilePatterns.some(excludedFilePattern =>
          minimatch(filename, excludedFilePattern, { matchBase: true })
        )
      ) {
        return
      }
      if (isRelative(sourceValue)) {
        return
      }
      if (isInAllDependencies(sourceValue, allDependencies)) {
        return
      }
      if (isInternal(sourceValue, allDependencies)) {
        return
      }

      context.report({
        node,
        messageId: 'undeclaredImports',
        data: {
          sourceValue,
        },
      })
    },
  }),
}
