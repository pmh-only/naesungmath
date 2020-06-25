/**
 * 024 정오각형의 높이 공식
 * 
 * @author: Naesung
 * @param {number} a
 * @return {number} The length of height of pentagon
 * @since <0.37.0
 */
exports.pentagonHeight = function (a) {
    return (((25 + 10 * ((5) ** 0.5)) / 2) * (a))
}
