/**
 * 202.2 매클로린 급수
 * 
 * @author: DPS0340
 * @param {number} f
 * @param {number} count
 * @return {number} Maclaurin series
 * @since <0.37.0
 */
exports.maclaurin = function (f, count) {
    return exports.taylor(f, 0, count)
}
