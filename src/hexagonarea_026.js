// 026 정육각형의 넓이 공식/
/**
 * 가장 빠른 걸로
 * 
 * @author: Naesung
 * @param {number} a
 * @return {number} The area of hexagon with on side a
 * @since <0.37.0
 */
exports.hexagonArea = function (a) {
    return ((3 * ((3) ^ 0.5)) / 2) * (a ** 2)
}
