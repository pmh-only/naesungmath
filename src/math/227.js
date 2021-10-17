/**
 *  227 Cramer
 *
 * @author: DPS0340
 * @param {string} mat
 * @return {number} Solves System of linear equations.
 *
 */
export function Cramer (mat) {
  const B = []
  const X = []

  for (let i = 0; i < mat.length; i++) {
    B.push(mat[i][mat[0].length - 1])
  }

  const T = []

  for (let j = 0; j < mat.length; j++) {
    T.push([])
    for (let k = 0; k < mat[0].length - 1; k++) {
      T[j].push(mat[j][k])
    }
  }

  for (let i = 0; i < mat.length; i++) {
    const Ai = []
    for (let j = 0; j < mat.length; j++) {
      Ai.push([])
      for (let k = 0; k < mat[0].length - 1; k++) {
        Ai[j].push(mat[j][k])
      }
    }

    for (let j = 0; j < mat.length; j++) {
      Ai[j][i] = B[j]
    }

    X.push(exports.determinant(Ai) / exports.determinant(T))
  }

  return X
}
