/**
 * 208 ����� ����
 * 
 * @author: DPS0340/Choi Minseo(Merged)
 * @param {matrix} matrixA
 * @param {matrix} matrixB
 * @return {number} Matrix subtraction of matrixA and matrixB
 * @since <0.37.0
 */
exports.matrixAdd = function (matrixA, matrixB) {
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        console.log('����� ũ�� ����ġ')
        return
    }
    let result = []
    for (let i = 0; i < matrixA.length; i++) {
        result.push([])
        for (let j = 0; j < matrixA[0].length; j++) {
            result[i].push(matrixA[i][j] + matrixA[i][j])
        }
    }
    return result
}
