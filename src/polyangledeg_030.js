/**
 * 030 정다각형의 내각
 * 
 * @author: Naesung
 * @param {number} n
 * @return {number} The sum of cabinet of polygon (degree)
 * @since <0.37.0
 */
exports.polyAngle_Deg = function (n) {
    return (180 * (n - 2) / n)
}
