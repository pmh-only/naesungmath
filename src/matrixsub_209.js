/**
 * 209 행렬의 뺄셈
 * 
 * @author: DPS0340/Naesung(Merged)
 * @param {matrix} matrixA
 * @param {matrix} matrixB
 * @return {number} Matrix sum of matrixA and matrixB
 * @since <0.37.0
 */
exports.matrixSub = function (matrixA, matrixB) {
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        console.log('행렬의 크기 불일치')
        return
    }
    let result = []
    for (let i = 0; i < matrixA.length; i++) {
        result.push([])
        for (let j = 0; j < matrixA[0].length; j++) {
            result[i].push(matrixA[i][j] - matrixB[i][j])
        }
    }
    return result
}
