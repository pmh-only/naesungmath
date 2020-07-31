/**
 * 084C 등비수열 공식
 * 
 * @author: Naesung
 * @param {number} an
 * @param {number} a
 * @param {number} n
 * @return {number} Geometric sequence
 * @since <0.37.0
 */
exports.geometricSequence_r = function (an, a, n) {
    return ((an / a) ** (1 / n))
}
