/**
 * 218 HouseHolder
 *
 * @author: DPS0340
 * @param {string} mat
 * @return {number} houseHolder
 *
 */
export function houseHolder (mat) {
  function SG (N) {
    if (N < 0) {
      return -1
    } else {
      return 1
    }
  }
  let K = 1
  let B = []
  for (let i = 0; i < mat.length; i++) {
    B.push([])
    for (let j = 0; j < mat[0].length; j++) {
      B[i].push(mat[i][j])
    }
  }

  while (1) {
    // eslint-disable-next-line no-inner-declarations
    function s (k) {
      let res = 0
      for (let i = k + 1; i < B.length; i++) {
        res += B[i][k] ** 2
      }

      return res ** 0.5
    }
    const S = s(K - 1)
    if (S === 0) {
      K += 1
      continue
    }
    const z = 1 / 2 * (1 + SG(B[K][K - 1]) * B[K][K - 1] / S)

    let v = []

    for (let i = 0; i < K; i++) {
      v.push(0)
    }
    v.push(z ** 0.5)
    for (let i = K + 1; i < mat.length; i++) {
      v.push(SG(B[K][K - 1]) * B[K - 1][i] / (2 * v[K] * S))
    }

    v = exports.transpose([v])

    const vv = exports.matrixmultiply(v, exports.transpose(v))

    const H = exports.matrix_sub(exports.IdentityMatrix(mat.length), exports.matrix_scala_multiplation(vv, 2))

    const A = exports.matrixmultiply(exports.matrixmultiply(H, B), H)

    if (K >= B.length - 2) {
      return A
    } else {
      K += 1
      B = A
    }
  }
}
