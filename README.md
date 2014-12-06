[![NPM](https://nodei.co/npm/utf8bts.png?downloads=true)](https://nodei.co/npm/utf8bts/)

This package uses or may use at some point in the future ECMAScript 6 features. Use it on a compatible environment or transpile it with Traceur, Closure Compiler, es6-transpiler or equivalent. Please note that some of these have flaws and bugs, test your code carefully until you find a suitable tool for your task.

When cloning this repository, put the folder inside another named "node_modules" in order to avoid potential errors related to npm's dependency handling, and then run `npm install` on it.

No piece of software is ever completed, feel free to contribute and be humble.

# UTF-8 bytes to string

## Sample usage:

```javascript
var utf8bts = require('utf8bts'),
    bytes = [ 0x48,0x65,0x6c,0x6c,
              0x6f,0x20,0x77,0x6f,
              0x72,0x6c,0x64,0x21 ];

console.log(utf8bts(bytes));
```

