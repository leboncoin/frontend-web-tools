# Prefer class method property over bind to prefer this context (no-bind-constructor)

The meaning of this is important especially when we need to deal with callbacks, event handlers... 
This rules aims to force developers to not bind method inside constructor and use
instead class method property in order to allow "this" refers to the lexical scope.

Please note: This rule disables bind that receives a "this" parameter. 
Other "ways" to use `.bind()` are allowed (like passing an object as context, or given multiple args...).


## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js
class Toto {
    constructor() {
        this.handler = this.handler.bind(this)
    }

    handler() {
        return
    }
}
```

Examples of **correct** code for this rule:

```js
class Toto {
    constructor() {
    }

    handler = () => {
        return
    }
}
```

## Further Reading

[Handling Events (React doc)](https://reactjs.org/docs/handling-events.html)
