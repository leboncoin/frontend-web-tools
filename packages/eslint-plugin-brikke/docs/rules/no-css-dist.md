# Do not include the CSS from a @brikke package but import it on the consumer side (no-css-dist)

We should not import an external CSS from a Brikke package inside a Brikke package. By doing that, we will increase the size of the bundle because some CSS rules may be duplicated.

For example, if we use @brikke/button in three different Brikke packages and if we import the @brikke/button CSS in those three packages, the CSS will be duplicated and bundled three times.

Thus, each CSS should be imported by the consumer of the design system.


## Rule Details

This rule aims to forbid you to import the stylesheet of a Brikke peer dependency.

Examples of **incorrect** code for this rule:

```js

import '@brikke/popin-menu/dist/styles.css'

```

Examples of **correct** code for this rule:

```js

// No CSS import

```

## When Not To Use It

Disable locally this rule if you really need to import an external stylesheet from Brikke.
