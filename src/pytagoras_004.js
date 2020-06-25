/**
 * 004 피타고라스 정리
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} b
 * @return {number} The length of the hypotenuse when each side is a, b in a right triangle
 * @since <0.37.0
 */
exports.pytagoras = function (a, b) {
    return ((a * a + b * b) ** 0.5)
}
