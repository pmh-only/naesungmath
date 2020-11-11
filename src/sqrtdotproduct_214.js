/**
 * 214 sqrtDotProduct
 * 
 * @author: DPS0340
 * @param {number} row1
 * @param {number} row2
 * @return {number} sqrtDotProduct
 * 
 */
exports.sqrtDotProduct = function (row1, row2) {
    let res = 0
    for (let i = 0; i < row1.length; i++) {
        res += row1[i] * row2[i]
    }

    return res ** 0.5
}

