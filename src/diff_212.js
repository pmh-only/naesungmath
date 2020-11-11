/**
 * 212 diff
 * 
 * @author: DPS0340, Choi Minseo
 * @param {string} f
 * @return {number} Diff
 * @since <0.37.0
 */
exports.diff = function (f, density = 5) {
    let dx = 2 * (10 ** (-density))
    let dy = (x) => f(x + (10 ** (-density))) - f(x - (10 ** (-density)))

    return (x) => dy(x) / dx
}
