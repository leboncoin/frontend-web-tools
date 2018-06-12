# eslint-plugin-leboncoin

Leboncoin custom ESLint rules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-leboncoin`:

```
$ npm install eslint-plugin-leboncoin --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-leboncoin` globally.

## Usage

Add `leboncoin` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "leboncoin"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "leboncoin/rule-name": 2
    }
}
```
