/**
 * 219 outterProduct_matrix
 *
 * @author: Choi Minseo
 * @param {matrix} u
 * @param {matrix} v
 * @return {matrix} outterProduct_matrix
 * @since <0.37.0
 */
exports.outterProduct_matrix = function (u, v) {
    return exports.matrixmultiply(u, exports.transpose(v))
}

