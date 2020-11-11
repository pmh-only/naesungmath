/**
 * 902 gcd
 *
 * @author: DPS0340, Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} gcd
 * @since <0.37.0
*/
exports.gcd = function (a, b) {
    if (b === 0) {
        return a
    } else {
        return exports.gcd(b, a % b)
    }
}
