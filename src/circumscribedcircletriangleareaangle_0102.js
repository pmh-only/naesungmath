/**
 * 010.2 외접원과 삼각형의 넓이 공식
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} r
 * @return {number} Inscribed circle and triangle area formula 
 * @since <0.37.0
 */
exports.circumscribedCircleTriangleArea_Angle = function (a, b, c, r) {
    return (2 * r * r * (Math.sin(a)) * (Math.sin(b)) * (Math.sin(c)))
}
