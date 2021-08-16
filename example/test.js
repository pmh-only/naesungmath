const naesungmath = require('../src/math.js')
const assert = require('assert')

console.log(naesungmath.version)

assert(naesungmath.calc.plus(1, 1) === 1 + 1)
assert(naesungmath.calc.minus(1, 1) === 1 - 1)
assert(naesungmath.calc.multiply(1, 2) === 1 * 2)
assert(naesungmath.calc.divide(1, 2) === 1 / 2)
assert(naesungmath.calc.caret(1, 2) === 1 ** 2)
assert(naesungmath.calc.pow(1, 2) === 1 ** 2)
assert(naesungmath.calc.sqrt(4) === 4 ** 0.5)

Promise.all([
  naesungmath.matrix.newtonsmethod((x) => (x * x - 2), 20, 2),
  naesungmath.matrix.taylor((x) => Math.sin(x), Math.PI / 2, 10)(Math.PI / 2),
  naesungmath.matrix.matrixmultiply([
    [2, 2],
    [2, 2],
    [2, 2],
    [3, 3],
    [4, 4]
  ], [
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1]
  ]),
  naesungmath.matrix.LUDecomposition([
    [2, -1, -2],
    [-4, 6, 3],
    [-4, -2, 8]
  ]),
  naesungmath.matrix.determinant([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]),
  naesungmath.matrix.houseHolder([
    [1, -1, 2, 2],
    [-1, 2, 1, -1],
    [2, 1, 3, 2],
    [2, -1, 2, 1]
  ]),
  naesungmath.matrix.QRDecomposition([
    [0, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 0]
  ]),
  naesungmath.matrix.integral((x) => 3 * x ** 2)(0, 4),
  naesungmath.matrix.diff((x) => x ** 2)(5),
  naesungmath.matrix.EigenVectorDecomposition([
    [8, -2],
    [-2, 5]
  ]),
  naesungmath.matrix.Gauss_Seidel([
    [16, 3, 11],
    [7, -11, 13]
  ]),
  naesungmath.matrix.Cramer([
    [2, 1, -1, 8],
    [-3, -1, 2, -11],
    [-2, 1, 2, -3]
  ]),
  naesungmath.matrix.Durand_Kerner((x) => x ** 5 + 22 * x ** 4 + 49 * x ** 3 - 812 * x ** 2 - 860 * x + 1600, 5, 100),
  naesungmath.matrix.EigenVectorDecomposition([
    [4, 1],
    [6, 3]
  ], 200),
  naesungmath.matrix.EigenVectorDecomposition([
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 3]
  ]),
  naesungmath.other.ACORN(),
  naesungmath.matrix.InverseMatrix([
    [2, 0, 1],
    [-2, 3, 4],
    [-5, 5, 6]
  ])
]).then(console.log)
