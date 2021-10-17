/**
 * 229 QRDecomposition
 * @author DPS0340
 **/
export function QRDecomposition (mat) {
  function sqrtDotProduct (row1, row2) {
    let res = 0
    for (let i = 0; i < row1.length; i++) {
      res += row1[i] * row2[i]
    }

    return res ** 0.5
  }

  function dotProduct (row1, row2) {
    let res = 0
    for (let i = 0; i < row1.length; i++) {
      res += row1[i] * row2[i]
    }

    return res
  }

  function normalizeMemoi (row, K) {
    return exports.matrix_scala_multiplation(row, 1 / K)
  }

  const X = exports.transpose(mat)

  const r = []
  for (let i = 0; i < X.length; i++) {
    r.push([])
    for (let j = 0; j < X[0].length; j++) {
      r[i].push(0)
    }
  }
  const Q = []
  for (let i = 0; i < X.length; i++) {
    Q.push(0)
  }

  let k = 0

  while (1) {
    r[k][k] = sqrtDotProduct(X[k], X[k])

    Q[k] = normalizeMemoi([X[k]], r[k][k])[0]

    for (let j = k + 1; j < X.length; j++) {
      r[k][j] = dotProduct(Q[k], X[j])
    }

    for (let j = k + 1; j < X.length; j++) {
      X[j] = exports.matrix_sub([X[j]], exports.matrix_scala_multiplation([Q[k]], r[k][j]))[0]
    }

    k += 1

    if (k === X.length) {
      return {
        Q: exports.transpose(Q),
        R: r
      }
    }
  }
}
