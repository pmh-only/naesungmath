/**
 * 216 ����
 * 
 * @author: DPS0340
 * @param {string} mat
 * @return {number} transpose
 * 
 */
exports.transpose = function (mat) {
    let res = []

    for (let i = 0; i < mat[0].length; i++) {
        res.push([])
        for (let j = 0; j < mat.length; j++) {
            res[i].push(mat[j][i])
        }
    }

    return res
}
