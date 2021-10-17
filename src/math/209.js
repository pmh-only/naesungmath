/**
 * 209 ����� ����
 *
 * @author: DPS0340/Choi Minseo(Merged)
 * @param {matrix} matrixA
 * @param {matrix} matrixB
 * @return {number} Matrix sum of matrixA and matrixB
 *
 */
export function atrixSub (matrixA, matrixB) {
  if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
    console.log('����� ũ�� ����ġ')
    return
  }
  const result = []
  for (let i = 0; i < matrixA.length; i++) {
    result.push([])
    for (let j = 0; j < matrixA[0].length; j++) {
      result[i].push(matrixA[i][j] - matrixB[i][j])
    }
  }
  return result
}
