/**
 * 083B 등차수열의 합 공식
 * 
 * @author: Naesung
 * @param {number} a1
 * @param {number} n
 * @param {number} d
 * @return {number} Arithmetic progresstion
 * @since <0.37.0
 */
exports.artimeticProgressionSum = function (a1, n, d) {
    return ((((2 * a1) + ((n - 1) * d)) / 2) * n)
}
