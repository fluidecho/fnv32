# fnv32

[![build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![node version][node-image]][node-url]

[travis-image]: https://api.travis-ci.org/fluidecho/fnv32.png
[travis-url]: https://travis-ci.org/fluidecho/fnv32
[npm-image]: https://img.shields.io/npm/v/fnv32.svg?style=flat-square
[npm-url]: https://npmjs.org/package/fnv32
[node-image]: https://img.shields.io/badge/node.js-%3E=_1-blue.svg?style=flat-square
[node-url]: http://nodejs.org/download/

FNV (Fowler–Noll–Vo) 32 bit hash function: FNV-1, FNV-1a.  

_References: [https://tools.ietf.org/html/draft-eastlake-fnv-12](https://tools.ietf.org/html/draft-eastlake-fnv-12), [https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function](https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function)_


## Installation

```
npm install fnv32
```


## Example

```js
const fnv32 = require('fnv32');

var hashed = fnv32.fnv_1a( 'hello' );  // input Buffer or String.
console.log('hashed number: ' + hashed);  // unsigned 32 bit integer.

// functions: .fnv_1( Buffer|String ), .fnv_1a( Buffer|String ), .toBufferLE( Number )

```

## Test

```
npm test
```

## License

Choose either: [MIT](http://opensource.org/licenses/MIT) or [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0).
