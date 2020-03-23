# Forbid imports not declared in the leaf package.json (no-undeclared-imports)

This rule throws an error when imports are used in the source code but not declared as
`dependencies`, `devDependencies` or `peerDependencies` in the package.json.

## Options

Throws an error for any imports not declared as `dependencies`, `devDependencies` or `peerDependencies` in the package.json.

```
"brikke/no-undeclared-imports": ["error"]
```

Throws an error for any imports not declared as `dependencies`, `devDependencies` or `peerDependencies` except for `foo` and `bar` imports:

```
"brikke/no-undeclared-imports": [
  "error", {
    "excludedModules": ["foo", "bar"]
  }
]
```

Throws an error for any imports not declared as `dependencies`, `devDependencies` or `peerDependencies` except if the file being linted matches the provided minimatch pattern:

```
"brikke/no-undeclared-imports": [
  "error", {
    "excludedFilePatterns": ["*.spec.js", "*.stories.js"]
  }
]
```

For testing purposes or to hard code the path to the package.json:

```
"brikke/no-undeclared-imports": [
  "error", {
    "excludedModules": ["foo", "bar"],
    "pkgDir": "./directory/to/package-json/"
  }
]
```

## Rule Details

Examples of **incorrect** code for this rule:

`component.js`
```js
import '@brikke/popin-menu'
import '@brikke/icon-wrapper'
import './constants'
```

`package.json`:
```
{
  peerDependencies: {
    "@brikke/popin-menu": "*"
  }
}
```

Examples of **correct** code for this rule:

`component.js`
```js
import '@brikke/popin-menu'
import '@brikke/icon-wrapper'
import './constants'
```

`package.json`:
```
{
  peerDependencies: {
    "@brikke/popin-menu": "*",
    "@brikke/icon-wrapper": "*"
  }
}
```
