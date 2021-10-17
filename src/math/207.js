/**
 * 207 ���콺 �ҰŹ�
 *
 * @author: DPS0340
 * @param {matrix} matrix
 * @param {number} m
 * @param {nmuber} n
 * @return {number} Gaussian elimination
 *
 */
export function gaussian (matrix, m, n) {
  const X = []
  for (let i = 0; i < matrix.length; i++) {
    X.push([])
    for (let j = 0; j < matrix[i].length; j++) {
      X[i].push(matrix[i][j])
    }
  }

  for (let i = 0; i < n; i++) {
    const k = X[i][i]
    for (let j = 0; j < m; j++) {
      X[i][j] /= k
    }
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        const ratio = X[j][i]
        for (let l = 0; l < matrix[j].length; l++) {
          X[j][l] -= ratio * X[i][l]
        }
      }
    }
  }

  return X
}
