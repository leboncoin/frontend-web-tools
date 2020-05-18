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
    'plugin:testing-library/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
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
    'space-before-function-paren': 'off',
    'testing-library/prefer-wait-for': 'error',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/camelcase': 'off',
    "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': ["warn", { "ignoreRestArgs": true }]
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": ["warn"]
      }
    }
  ]
}
