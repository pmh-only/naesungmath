/**
 * 222 IdentityMatrix
 *
 * @author: DPS0340, Naesung
 * @param {string} n
 * @return {number} IdentityMatrix
 * @since <0.37.0
 */
exports.IdentityMatrix = function (n) {
    let res = []
    for (let i = 0; i < n; i++) {
        res.push([])
        for (let j = 0; j < n; j++) {
            if (i === j) {
                res[i].push(1)
            } else {
                res[i].push(0)
            }
        }
    }
    return res
}
