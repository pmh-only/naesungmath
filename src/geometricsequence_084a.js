/**
 * 084A 등비수열 공식
 * 
 * @author: Naesung
 * @param {number} an
 * @param {number} n
 * @param {number} r
 * @return {number} Geometric sequence
 * @since <0.37.0
 */
exports.geometricSequence_a = function (an, n, r) {
    return (an / (r ** n))
}
