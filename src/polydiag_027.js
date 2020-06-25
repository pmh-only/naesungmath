/**
 * 027 다각형의 대각선 공식
 * 
 * @author: Naesung
 * @param {number} n
 * @return {number} The number of diagonal of polygon
 * @since <0.37.0
 */
exports.polydiag = function (n) {
    return (n * (n - 3) / 2)
}
