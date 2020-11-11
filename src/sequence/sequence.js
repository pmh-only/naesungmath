/**
 * 082A �������� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} d
 * @param {number} n
 * @return {number} Arithmetic progresstion
 * @since <0.37.0
 */
exports.arithmeticProgression = function (a, d, n) {
    return (a + (n - 1) * d)
}

/**
 * 082B �������� ����
 * 
 * @author: Choi Minseo
 * @param {number} d
 * @param {number} n
 * @param {number} s
 * @return {number} Arithmetic progresstion
 * @since <0.37.0
 */
exports.arithmeticProgression_n = function (d, n, s) {
    return (s - (n - 1) * d)
}

/**
 * 082C �������� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} n
 * @param {number} s
 * @return {number} Arithmetic progresstion
 * @since <0.37.0
 */
exports.arithmeticProgression_d = function (a, n, s) {
    return ((s - a) / (n - 1))
}

/**
 * 083A ���������� �� ����
 * 
 * @author: Choi Minseo
 * @param {number} a1
 * @param {number} an
 * @param {number} n
 * @return {number} Arithmetic progresstion
 * @since <0.37.0
 */
exports.arithmeticProgressionSum_Term = function (a1, an, n) {
    return (((a1 + an) / 2) * n)
}

/**
 * 083B ���������� �� ����
 * 
 * @author: Choi Minseo
 * @param {number} a1
 * @param {number} n
 * @param {number} d
 * @return {number} Arithmetic progresstion
 * @since <0.37.0
 */
exports.artimeticProgressionSum = function (a1, n, d) {
    return ((((2 * a1) + ((n - 1) * d)) / 2) * n)
}

/**
 * 084A ������ ����
 * 
 * @author: Choi Minseo
 * @param {number} an
 * @param {number} n
 * @param {number} r
 * @return {number} Geometric sequence
 * @since <0.37.0
 */
exports.geometricSequence_a = function (an, n, r) {
    return (an / (r ** n))
}

/**
 * 084B ������ ����
 * 
 * @author: Choi Minseo
 * @param {number} an
 * @param {number} a
 * @param {number} r
 * @return {number} Geometric sequence
 * @since <0.37.0
 */
exports.geometricSequence_n = function (an, a, r) {
    return Math.log(an / a) / Math.log(r)
}

/**
 * 084C ������ ����
 * 
 * @author: Choi Minseo
 * @param {number} an
 * @param {number} a
 * @param {number} n
 * @return {number} Geometric sequence
 * @since <0.37.0
 */
exports.geometricSequence_r = function (an, a, n) {
    return ((an / a) ** (1 / n))
}

/**
 * 084D ������ ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} n
 * @param {number} r
 * @return {number} Geometric sequence
 * @since <0.37.0
 */
exports.geometricSequence_an = function (a, n, r) {
    return (a * (r ** n))
}

