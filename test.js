const nmath = require("./math.js");
const assert = require('assert');

assert(nmath.plus(1, 1) === 1 + 1);
assert(nmath.minus(1, 1) === 1 - 1);
assert(nmath.multiply(1, 2) === 1 * 2);
assert(nmath.divide(1, 2) === 1 / 2);
assert(nmath.caret(1, 2) === 1 ** 2);
assert(nmath.pow(1, 2) === 1 ** 2);
assert(nmath.sqrt(4) === 4 ** 0.5);
assert(nmath.primenumber(1, 3).every(e => [1, 2, 3].includes(e)));
assert(nmath.pi2(4) === 2 * 4 * Math.PI);

console.log(nmath.newtonsmethod((x) => (x*x - 2), 20, 2));
console.log(nmath.taylor((x) => Math.sin(x), Math.PI/2, 10)(Math.PI/2));
console.log(
    nmath.matrixmultiply(
        [
            [2, 2],
            [2, 2],
            [2, 2],
            [3, 3],
            [4, 4],
        ], [
            [1, 2, 3, 4, 5],
            [5, 4, 3, 2, 1],
        ]
    )  
);
console.log(
    nmath.LUDecomposition(
        [
            [2, -1, -2],
            [-4, 6, 3],
            [-4, -2, 8],
        ]
    )
);
console.log(
    nmath.determinant(
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ]
    )
);
console.log(
    nmath.gaussian([
        [1, 2, 1, -1, 5],
        [3, 2, 4, 4, 16],
        [4, 4, 3, 4, 22],
        [2, 0, 1, 5, 15]
    ])
);

console.log(
    nmath.houseHolder(
        [
            [1, -1, 2, 2],
            [-1, 2, 1, -1],
            [2, 1, 3, 2],
            [2, -1, 2, 1]
        ]
    )
)

const qr = nmath.QRDecomposition(
    [
        [0, 1, 1, 1],
        [1, 0, 1, 1],
        [1, 1, 0, 1],
        [1, 1, 1, 0]
    ]
);

console.log(qr);

console.log(
    nmath.integral((x) => 3*x**2)(0, 4)
);

console.log(
    nmath.diff((x) => x**2)(5)
);

console.log(
    nmath.Durand_Kerner((x) => x**2 + x, 2, 15)
);