const nmath = require("./math.js");

assert(nmath.plus(1, 1) === 1 + 1);
assert(nmath.minus(1, 1) === 1 - 1);
assert(nmath.multiply(1, 2) === 1 * 2);
assert(nmath.divide(1, 2) === 1 / 2);
assert(nmath.caret(1, 2) === 1 ** 2);
assert(nmath.pow(1, 2) === 1 ** 2);
assert(nmath.sqrt(4) === 4 ** 0.5);
assert(nmath.primenumber(1, 3) === [1, 2, 3]);
assert(nmath.pi2(4) === 2 * 4 * math.pi);
assert(nmath.pi2(4) === 2 * 4 * math.pi);
