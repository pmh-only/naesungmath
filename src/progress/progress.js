/**
 * 082A �������� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} d
 * @param {number} n
 * @return {number} Arithmetic progresstion
 
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
 
 */
exports.geometricSequence_an = function (a, n, r) {
    return (a * (r ** n))
}

/**
 * 085 등비수열의 합 공식
 * 
 * @author: Choi Minseo
 * @param {number} a 
 * @param {number} r
 * @param {number} n
 * @return {number} Sum of geometric progression 
 */
exports.geometricProgressionSum = function(a, r, n) {
    return a * (1 - (r**n)) / (1 - r)
}

/**
 * 086 무한등비수열의 합
 * 
 * @author: Choi Minseo
 * @param {number} a 
 * @param {number} r
 * @return {number} Sum of infinite geometric progression
 */
exports.geometricProgrssionInfinitySum = function (a, r) {
    return a / (1 - r)
}

/**
 * 
 * @param {number} r 
 * @param {number} n 
 * @param {*} count 
 */

/**
 * 202.1 ���Ϸ� �޼�
 * 
 * @author: Choi Minseo
 * @param {number} f
 * @param {number} a
 * @param {number} count
 * @return Taylor series
 * 
 */
exports.taylor = function (f, a, count) {
    let diffs = [(x) => f(a)]
    let taylors = []
    let fact = [1]

    function diff(fun, density = 5) {
        const dx = 2 * (10 ** -density)
        const dy = (x) => fun(x + (10 ** -density)) - fun(x - (10 ** -density))
        return (x) => dy(x) / dx
    }

    taylors.push((x) => diffs[0](x))

    for (let i = 1; i <= count; i++) {
        diffs.push(diff(diffs[i - 1]))
        let factorial = 1
        for (let j = 1; j <= i; j++) {
            factorial *= j
        }
        fact.push(factorial)

        taylors.push(
            function (x) {
                return diffs[i](a) / fact[i] * ((x - a) ** i)
            }
        )
    }

    function res(x) {
        // eslint-disable-next-line no-undef
        result = 0
        for (let i = 0; i <= count; i++) {
            // eslint-disable-next-line no-undef
            result += taylors[i](x)
        }
        // eslint-disable-next-line no-undef
        return result
    }

    return res
}
/**
 * 202.2 ��Ŭ�θ� �޼�
 * 
 * @author: DPS0340
 * @param {number} f
 * @param {number} count
 * @return {number} Maclaurin series
 * 
 */
exports.maclaurin = function (f, count) {
    return exports.taylor(f, 0, count)
}
