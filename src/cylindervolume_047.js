/**
 * 047 원기둥의 부피
 * 
 * @author: Naesung
 * @param {number} r
 * @param {number} h
 * @return {number} The volume of cylinder
 * @since <0.37.0
 */
exports.cylinderVolume = function (r, h) {
    return ((Math.PI) * (r ** 2) * h)
}
