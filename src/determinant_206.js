/**
 * 206 ��Ľ�
 * 
 * @author: DPS0340/Choi Minseo(Merged)
 * @param {matrix} matrix
 * @return {number} Determinant
 * @since <0.37.0
 */
exports.determinant = function (matrix) {
    if (matrix.length !== matrix[0].length) {
        console.log('��� ���� ũ�Ⱑ ���� ����')
        return
    }
    if (matrix.length > 2) {
        let result = 0
        for (let i = 0; i < matrix[0].length; i++) {
            const K = matrix[0][i]
            let mat = []
            for (let j = 1; j < matrix.length; j++) {
                mat.push([])
                for (let k = 0; k < matrix[0].length; k++) {
                    if (k !== i) {
                        mat[j - 1].push(matrix[j][k])
                    }
                }
            }
            if (i % 2 === 0) {
                result += K * exports.determinant(mat)
            } else {
                result -= K * exports.determinant(mat)
            }
        }
        return result
    } else {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
    }
}
