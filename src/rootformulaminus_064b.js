/**
 * 064B 근의 공식
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number} Root formula
 * @since <0.37.0
 */
exports.rootFormula_minus = function (a, b, c) {
    return ((-b - (((b ** 2) - (4 * a * c)) ** 0.5)) / (2 * a))
}