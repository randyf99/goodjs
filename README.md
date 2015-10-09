# Best Practices for JavaScript

JavaScript: The Good Parts is a great book by Douglas Crockford and I recomment reading it. There as some guidelines that would be useful to always have at hand.

Some snippets have their own file, so you can clone this repo and run them with `node`.

## Unfamiliar invocation patterns

Method invocation pattern

    // this is cool
    var int = Math[this < 0 ? 'ceil' : 'floor'](this);

Apply invocation pattern

    // Generic example
    function.apply(scope, arguments);

## Inheritance ("Classes")

Use [functional contructors](./functional_constructors.js), which allow for private variables and [Super Methods](./super_methods.js).
JavaScript is prototypal in it's nature, so don't use [pseudoclasses](./pseudoclasses.js) nor [differential inheritance](./differencial_inheritance.js).
