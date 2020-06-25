/**
 * 023 정오각형의 넓이 공식
 * 
 * @author: Naesung
 * @param {number} a
 * @return {number} The height of pentagon with side a
 * @since <0.37.0
 */
exports.pentagonArea = function (a) {
    return ((((a) ** 2) / 4) * ((25 + 10((5) ** 0.5)) ** 0.5))
}
