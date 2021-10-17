/**
 * 220 trace
 *
 * @author: Choi Minseo
 * @param {matrix}
 * @return {number} trace
 *
 */
export function trace (matrix) {
  let res = 0
  for (let i = 0; i < matrix.length; i++) {
    res += matrix[i][i]
  }
  return res
}
