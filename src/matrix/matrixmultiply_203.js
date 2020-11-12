/**
 * 203 ��İ�
 * 
 * @author: DPS0340/Choi Minseo(���Ѽ�����ȸ �ڷ� �ߺ� ����)
 * @param {matrix} matrixA
 * @param {matrix} matrixB
 * @return {matrix} Matrix product of matrixA and matrixB
 * 
 */
exports.matrixMultiply = function (matrixA, matrixB) {
    if (matrixA[0].length !== matrixB.length) {
        console.log('�߸��� ��İ� ������ ũ��')
        return
    }
    let result = []
    for (let i = 0; i < matrixA.length; i++) {
        result.push([])
        for (let j = 0; j < matrixB[0].length; j++) {
            let sum = 0
            for (let k = 0; k < matrixB.length; k++) {
                if (!isNaN(matrixA[i][k]) && !isNaN(matrixB[k][j])) {
                    sum += matrixA[i][k] * matrixB[k][j]
                }
            }
            result[i].push(sum)
        }
    }

    return result
}
