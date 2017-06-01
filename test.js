"use strict";
const fnv32 = require('./');
const assert = require('assert');

var closed;

var hashed1 = fnv32.fnv_1( 'hello' );
var hashed2 = fnv32.fnv_1a( 'hello' );

assert.equal(hashed1, 3069866343);
assert.equal(hashed2, 1335831723);

closed = true;
assert(closed);

