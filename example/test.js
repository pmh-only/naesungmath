const nmath = require('../math.js')
const assert = require('assert')

assert(nmath.plus(1, 1) === 1 + 1)
assert(nmath.minus(1, 1) === 1 - 1)
assert(nmath.multiply(1, 2) === 1 * 2)
assert(nmath.divide(1, 2) === 1 / 2)
assert(nmath.caret(1, 2) === 1 ** 2)
assert(nmath.pow(1, 2) === 1 ** 2)
assert(nmath.sqrt(4) === 4 ** 0.5)
assert(nmath.primenumber(1, 3).every(e => [1, 2, 3].includes(e)))
assert(nmath.pi2(4) === 2 * 4 * Math.PI)

Promise.all([
  nmath.newtonsmethod((x) => (x * x - 2), 20, 2),
  nmath.taylor((x) => Math.sin(x), Math.PI / 2, 10)(Math.PI / 2),
  nmath.matrixmultiply([
      [2, 2],
      [2, 2],
      [2, 2],
      [3, 3],
      [4, 4]
    ], [
      [1, 2, 3, 4, 5],
      [5, 4, 3, 2, 1]
    ]),
  nmath.LUDecomposition([
      [2, -1, -2],
      [-4, 6,  3],
      [-4, -2, 8]
    ]),
  nmath.determinant([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]),
  nmath.houseHolder([
      [1, -1, 2,  2],
      [-1, 2, 1, -1],
      [2,  1, 3,  2],
      [2, -1, 2,  1]
    ]),
  nmath.QRDecomposition([
      [0, 1, 1, 1],
      [1, 0, 1, 1],
      [1, 1, 0, 1],
      [1, 1, 1, 0]
    ]),
  nmath.integral((x) => 3 * x ** 2)(0, 4),
  nmath.diff((x) => x ** 2)(5),
  nmath.EigenVectorDecomposition([
      [8, -2],
      [-2, 5]
    ]),
  nmath.Gauss_Seidel([
      [16, 3,  11],
      [7, -11, 13]
    ]),
  nmath.Cramer([
    [2,   1, -1,   8],
    [-3, -1,  2, -11],
    [-2,  1,  2,  -3]
  ]),
  nmath.Durand_Kerner((x) => x ** 5 + 22 * x ** 4 + 49 * x ** 3 - 812 * x ** 2 - 860 * x + 1600, 5, 100),
  nmath.EigenVectorDecomposition([
      [4, 1],
      [6, 3]
    ], 200),
  nmath.EigenVectorDecomposition([
      [1, 0, 0],
      [0, 2, 0],
      [0, 0, 3]
    ]),
  nmath.ACORN(),
  nmath.InverseMatrix([
      [2,  0, 1],
      [-2, 3, 4],
      [-5, 5, 6]
    ]),
]).then(console.log)