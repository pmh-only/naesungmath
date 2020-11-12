/**
 * 220 trace
 *
 * @author: Choi Minseo
 * @param {matrix} 
 * @return {number} trace
 * 
 */
exports.trace = function (matrix) {
    let res = 0
    for (let i = 0; i < matrix.length; i++) {
        res += matrix[i][i]
    }
    return res
}
