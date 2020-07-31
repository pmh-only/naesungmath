/**
 * 224 Durand_Kerner
 * @author: DPS0340
 * @param {string} f
 * @return {number} Finding Multiple Roots of Function.
 * @since <0.37.0
 */
exports.Durand_Kerner = function (f, rootsNumber = 1, iterationCount = 15) {
    let roots = []
    for (let i = 0; i < rootsNumber; i++) {
        roots.push(i + 1)
    }

    for (let k = 0; k < iterationCount; k++) {
        for (let i = 0; i < rootsNumber; i++) {
            let down = 1
            for (let j = 0; j < rootsNumber; j++) {
                if (i !== j) {
                    down *= roots[i] - roots[j]
                }
            }
            roots[i] -= f(roots[i]) / down
        }
    }

    return roots
}
