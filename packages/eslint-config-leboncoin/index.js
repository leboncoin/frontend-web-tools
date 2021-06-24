module.exports = {
  globals: {
    fetch: false,
    Headers: false,
    Request: false,
    __WEB__: true,
    __NODE__: true,
    VERSION: true,
    __webpack_public_path__: true,
    jsdom: false,
    renderWithRedux: true,
  },
  env: {
    'jest/globals': true,
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  plugins: [
    'babel',
    'jest',
    'json',
    'literal-blacklist',
    'lodash',
    'no-constructor-bind',
    'prefer-object-spread',
    'react',
    'react-hooks',
    'sort-class-members',
    'testing-library',
    '@typescript-eslint',
    'unicorn',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },
  extends: [
    'standard',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'plugin:testing-library/dom',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    "unicorn/import-index": "error",
    "import/extensions": [
      "error", "never", {
        'png': 'always',
        'jpg': 'always',
        'svg': 'always',
        'webp': 'always',
        'avif': 'always',
        'mp4': 'always',
        'spec': 'always',
        'json': 'always',
        'styles': 'always',
        'scss': 'always',
        'css': 'always'
      }
    ],
    'babel/no-invalid-this': 'error',
    'camelcase': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'complexity': 'off',
    'default-case': 'error',
    'jest/valid-expect-in-promise': 'off',
    'jsx-quotes': 'error',
    'literal-blacklist/literal-blacklist': [
      'error',
      // Add strings here you want to forbid in the code base.
      // For example, if 'foo' is blacklisted, this expression will throw an error:
      // const myVar = 'this is a foo text'
      [
        'datadoghq.eu', // datadoghq.com should be used instead
      ],
    ],
    'lodash/import-scope': ['error', 'method'],
    'max-len': 'off',
    'no-constructor-bind/no-constructor-bind': 'error',
    'no-constructor-bind/no-constructor-state': 'error',
    'no-param-reassign': ['warn', { props: true }],
    'no-return-await': 'error',
    'no-use-before-define': 'error',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-object-spread/prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'radix': 'error',
    'react/display-name': 'off',
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-no-target-blank': 'error',
    'react/jsx-tag-spacing': ['error'],
    'react/no-children-prop': 'off',
    'react/no-danger': ['error'],
    'react/no-deprecated': 'off',
    'react/no-unescaped-entities': ['error', { forbid: ["'"] }],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'sort-class-members/sort-class-members': [
      0,
      {
        order: [
          '[static-properties]',
          '[static-methods]',
          '[properties]',
          '[arrow-function-properties]',
          '[conventional-private-properties]',
          'constructor',
          '[lifecycle]',
          '[event-handlers]',
          '[methods]',
          '[conventional-private-methods]',
          '[rendering]',
          '[render]',
        ],
        groups: {
          lifecycle: [
            { name: 'componentDidCatch' },
            { name: 'componentWillMount' },
            { name: 'componentDidMount' },
            { name: 'componentWillReceiveProps' },
            { name: 'shouldComponentUpdate' },
            { name: 'componentWillUpdate' },
            { name: 'componentDidUpdate' },
            { name: 'componentWillUnmount' },
          ],
          'event-handlers': [
            {
              name: '/handle.+/',
              type: 'method',
            },
            {
              name: '/on.+/',
              type: 'method',
            },
          ],
          rendering: [
            {
              name: '/render.+/',
              type: 'method',
            },
          ],
          render: [
            {
              name: 'render',
              type: 'method',
            },
          ],
        },
        accessorPairPositioning: 'getThenSet',
      },
    ],
    'indent': 'off',
    'space-before-function-paren': 'off',
    'testing-library/prefer-wait-for': 'error',
    'no-use-before-define': 'off',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/no-onchange': 'warn',
    'jsx-a11y/interactive-supports-focus': 'warn',
    'jsx-a11y/media-has-caption': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/no-noninteractive-tabindex': 'warn',
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/accessible-emoji': 'warn',
    'jsx-a11y/aria-role': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    '@typescript-eslint/no-explicit-any': ["warn", { "ignoreRestArgs": true }],
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-expressions": ["error", { "allowTernary": true, "allowShortCircuit": true }],
    "@typescript-eslint/no-unused-vars": ["error", {"args": "after-used", "ignoreRestSiblings": true, "varsIgnorePattern": "[tT]ype" }],
    "@typescript-eslint/explicit-module-boundary-types": 'off',
    "array-callback-return": 'off',
    "no-restricted-properties": ["error", {
      "property": "whyDidYouRender"
    }]
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": ["warn"],
        "react/prop-types": ["off"]
      }
    },
    {
      "files": ["*.d.ts"],
      "rules": {
        "@typescript-eslint/no-unused-vars": ['off']
      }
    },
    {
      "files": ["*.spec.*"],
      "rules": {
        "no-import-assign": ['off']
      }
    }
  ]
}
