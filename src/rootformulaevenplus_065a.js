/**
 * 065A 짝수 근의 공식
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number} Root formula(even root)
 * @since <0.37.0
 */
exports.rootFormula_EvenPlus = function (a, b, c) {
    return ((-(0.5 * b) + ((((0.5 * b) ** 2) - (a * c)) ** 0.5)) / a)
}
