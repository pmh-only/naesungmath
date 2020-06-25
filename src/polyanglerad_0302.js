/**
 * 030.2 정사각형의 내각_호도법
 * 
 * @author: Naesung
 * @param {number} n
 * @return {number} The sum of cabinet of polygon (radian)
 * @since <0.37.0
 */
exports.polyAngle_Rad = function (n) {
    return ((Math.PI) * (n - 2) / n)
}
