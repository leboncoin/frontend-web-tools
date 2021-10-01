# eslint-plugin-brikke

Brikke custom ESLint rules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-brikke`:

```
$ npm install eslint-plugin-brikke --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-brikke` globally.

## Usage

Add `brikke` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "brikke"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "brikke/rule-name": ["off|warning|error"]
  }
}
```

## Supported Rules

### no-css-dist

### no-undeclared-imports

```js
// .eslintrc.js
module.exports = {
  rules: {
    'brikke/no-undeclared-imports': [
      'error',
      {
        excludedFilePatterns: ['*.spec.js', '*.spec.tsx', '*.spec.ts', '*.stories.js'],
        excludedModules: [/^\$src\//, '$config', /@brikke\/[^/]+\/dist\/.+/],
        // Path to a package.json containing a list of dependencies and/or devDependencies
        // to give a hint about about what type of dependency has been reported
        packageBlueprintFile: './foo/bar/package.json',
      },
    ],
  },
}
```
